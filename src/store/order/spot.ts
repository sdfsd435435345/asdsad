import create from 'zustand'
import { createTrackedSelector } from 'react-tracked'
import produce from 'immer'
import coinWs from '@/plugins/ws'
import { ISubscribeParams } from '@/plugins/ws/types'
import { IBaseOrderItem, ISpotPlanOrderItem, IWsSpotOrder } from '@/typings/api/order'
import { querySpotNormalOpenOrderList, querySpotPlanOpenOrderList } from '@/apis/order'
import { getIsLogin } from '@/helper/auth'
import { getSymbolLabelInfo } from '@/apis/market'
import { YapiGetV1TradePairListData } from '@/typings/yapi/TradePairListV1GetApi'
import { WsBizEnum, WsThrottleTimeEnum, WsTypesEnum } from '@/constants/ws'
import { WSThrottleTypeEnum } from '@/plugins/ws/constants'
import { getCodeDetailList, getCodeDetailListBatch } from '@/apis/common'
import { IStoreEnum } from '@/typings/store/common'

export type IBaseOrderSpotStore = ReturnType<typeof getBaseStore>

let subscribed = false

function createOnWs(set, get) {
  return {
    onEntrustPush(order: IWsSpotOrder[]) {
      const state: IBaseOrderSpotStore = get()
      state.fetchOpenOrders()
    },
    onPlanEntrustPush(order: IWsSpotOrder[]) {
      const state: IBaseOrderSpotStore = get()
      state.fetchOpenOrders()
    },
  }
}

function getBaseStore(set, get) {
  return {
    openOrderModule: {
      normal: {
        data: [] as any as IBaseOrderItem[],
        total: 0,
      },
      plan: {
        data: [] as any as ISpotPlanOrderItem[],
        total: 0,
      },
      removePlanOrder(id?: any) {
        set(
          produce((state: IBaseOrderSpotStore) => {
            state.openOrderModule.plan.data = state.openOrderModule.plan.data.filter(item =>
              id ? item.id !== id : false
            )
            state.openOrderModule.plan.total = state.openOrderModule.plan.data.length
          })
        )
      },
      removeNormalOrder(id?: any) {
        set(
          produce((state: IBaseOrderSpotStore) => {
            state.openOrderModule.normal.data = state.openOrderModule.normal.data.filter(item =>
              id ? item.id !== id : false
            )
            state.openOrderModule.normal.total = state.openOrderModule.normal.data.length
          })
        )
      },
    },
    pairList: [] as {
      name: string
      id: any
    }[],
    subscribe() {
      // 因为是模块调用，不用担心空函数无法取消订阅
      if (subscribed) {
        return () => {}
      }
      if (!getIsLogin()) {
        return () => {}
      }
      const { onEntrustPush, onPlanEntrustPush } = createOnWs(set, get)
      const subscribeParams: ISubscribeParams[] = [
        {
          subs: {
            biz: WsBizEnum.spot,
            type: WsTypesEnum.order,
            base: '',
            quote: '',
            granularity: '',
          },
          callback: onEntrustPush,
          throttleType: WSThrottleTypeEnum.increment,
          throttleTime: WsThrottleTimeEnum.Market,
        },
        {
          subs: {
            biz: WsBizEnum.spot,
            type: WsTypesEnum.planOrder,
            base: '',
            quote: '',
            granularity: '',
          },
          throttleType: WSThrottleTypeEnum.increment,
          throttleTime: WsThrottleTimeEnum.Market,
          callback: onPlanEntrustPush,
        },
      ]
      subscribeParams.forEach(({ callback, ...params }) => {
        coinWs.subscribe({
          ...params,
          callback,
        })
      })
      subscribed = true
      return () => {
        subscribed = false
        subscribeParams.forEach(params => {
          coinWs.unsubscribe(params)
        })
      }
    },
    async fetchOpenOrders({ tradeId }: { tradeId?: string } = {}) {
      if (!getIsLogin()) {
        return
      }
      const [normalRes, planRes] = await Promise.all([
        querySpotNormalOpenOrderList({ tradeId, pageSize: 1000 } as any),
        querySpotPlanOpenOrderList({ tradeId, pageSize: 1000 } as any),
      ])
      set(
        produce((draft: IBaseOrderSpotStore) => {
          draft.openOrderModule.normal = {
            data: ((normalRes.data && normalRes.data.list) as any) || [],
            total: (normalRes.data && normalRes.data.total!) || 0,
          }
          draft.openOrderModule.plan = {
            data: ((planRes.data && planRes.data.list) as any) || [],
            total: (planRes.data && planRes.data.total!) || 0,
          }
        })
      )
    },
    async fetchPairList() {
      const res = await getSymbolLabelInfo({})
      if (!res.isOk || !res.data) {
        return
      }
      set(
        produce((draft: IBaseOrderSpotStore) => {
          draft.pairList = ((res.data as any)?.list as YapiGetV1TradePairListData[]).map(item => {
            return {
              name: `${item.baseSymbolName}/${item.quoteSymbolName}`,
              id: item.id,
            }
          })
        })
      )
    },
    /** 订单枚举，从后端获取的数据字典 */
    orderEnums: {
      orderStatus: {
        codeKey: 'statusCode',
        enums: [],
      } as IStoreEnum,
      planOrderStatus: {
        codeKey: 'orderStatusCd',
        enums: [],
      } as IStoreEnum,
      orderStatusInFilters: {
        codeKey: 'web_SpotOrderStatusInFilters',
        enums: [],
      } as IStoreEnum,
      planOrderStatusInFilters: {
        codeKey: 'web_SpotTriggerOrderStatusInFilters',
        enums: [],
      } as IStoreEnum,
      orderDirection: {
        codeKey: 'sideInd',
        enums: [],
      } as IStoreEnum,
      // 和下面的这个区别是，限价，限价委托
      entrustType: {
        codeKey: 'web_SpotEntrustType',
        enums: [],
      } as IStoreEnum,
      entrustTypeWithSuffix: {
        codeKey: 'web_SpotEntrustTypeWithSuffix',
        enums: [],
      } as IStoreEnum,
      planEntrustTypeWithSuffix: {
        codeKey: 'web_SpotTriggerEntrustTypeWithSuffix',
        enums: [],
      } as IStoreEnum,
    },
    async fetchOrderEnums() {
      const state: IBaseOrderSpotStore = get()
      const data = await getCodeDetailListBatch(Object.values(state.orderEnums).map(item => item.codeKey))
      set(
        produce((draft: IBaseOrderSpotStore) => {
          const items = Object.values(draft.orderEnums)
          items.forEach((item, index) => {
            item.enums = data[index].map(enumValue => {
              return {
                label: enumValue.codeKey,
                value:
                  parseInt(enumValue.codeVal, 10).toString() === enumValue.codeVal
                    ? parseInt(enumValue.codeVal, 10)
                    : enumValue.codeVal,
              }
            })
          })
        })
      )
    },
  }
}
function getStore(set, get) {
  return {
    ...getBaseStore(set, get),
  }
}

const baseOrderSpotStore = create(getStore)

const useBaseOrderSpotStore = createTrackedSelector(baseOrderSpotStore)

export { useBaseOrderSpotStore, baseOrderSpotStore }
