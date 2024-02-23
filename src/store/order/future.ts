import create from 'zustand'
import { createTrackedSelector } from 'react-tracked'
import { IFutureConfig, IPerpetualFuture } from '@/typings/api/future/common'
import produce from 'immer'
import { IFutureHoldingOrderItem } from '@/typings/api/order'
import { ISubscribeParams } from '@/plugins/ws/types'
import {
  queryPerpetualOrdersCurrent,
  queryPerpetualStopProfitLossCurrent,
  queryPerpetualPlanOrdersCurrent,
  getPerpetualTradePairList,
} from '@/apis/future/common'

import { getV1PerpetualTradePairDefaultQuoteCoinApiRequest } from '@/apis/market/market-list'
import { createUpdateProp } from '@/helper/store'
import { getIsLogin } from '@/helper/auth'
import { FutureTradeUnitEnum, EntrustTypeEnum } from '@/constants/trade'
import { WsTypesEnum, WsBizEnum } from '@/constants/ws'
import { IStoreEnum } from '@/typings/store/common'
import { getCodeDetailListBatch } from '@/apis/common'
import { YapiGetV1PerpetualOrdersCurrentListData } from '@/typings/yapi/PerpetualOrdersCurrentV1GetApi.d'
import { YapiGetV1PerpetualStrategyCurrentListData } from '@/typings/yapi/PerpetualStrategyCurrentV1GetApi.d'
import { YapiGetV1PerpetualPlanOrdersCurrentListData } from '@/typings/yapi/PerpetualPlanOrdersCurrentV1GetApi.d'

import contractWs from '@/plugins/ws'

export type IBaseOrderSpotStore = ReturnType<typeof getBaseStore>

const wsConTractUrl = ''
type FundRatesPbMsg = any
type AssetsPbMsg = any
type TickersPbMsg = any
type TickersPbMsg_Body = any
type AssetsPbMsg_CurrencyAssets = any
type FundRatesPbMsg_Body = any

export type IBaseFutureStore = ReturnType<typeof getBaseStore>

let subscribed = false

function createOnWs(set, get) {
  return {
    onEntrustCurrentPush() {
      const state: IBaseFutureStore = get()
      state.fetchCurrentOpenOrders()
    },
    onEntrustStopProfitLossPush() {
      const state: IBaseFutureStore = get()
      state.fetchStopProfitLossOrders()
    },
    onEntrustPlanPush() {
      const state: IBaseFutureStore = get()
      state.fetchPlanOrdersOrders()
    },
  }
}

function getBaseStore(set, get) {
  return {
    /** 可用合约列表 */
    futureEntrustType: EntrustTypeEnum.normal,
    /** 可用合约列表 */
    futureList: [] as IPerpetualFuture[],
    // TODO: 这里是什么类型由交易定义，订单这里先用着，后面改
    currentFuture: {} as IPerpetualFuture,
    currentFutureConfig: {} as IFutureConfig,
    /** 仓位列表，也就是当前持仓订单列表 */
    positionList: [] as IFutureHoldingOrderItem[],
    openOrderModule: {
      normal: {
        data: [] as YapiGetV1PerpetualOrdersCurrentListData[],
        total: 0,
        removeFutureItem(id?: string) {
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
      plan: {
        data: [] as YapiGetV1PerpetualPlanOrdersCurrentListData[],
        total: 0,
        removeFutureItem(id?: string) {
          set(
            produce((state: IBaseOrderSpotStore) => {
              state.openOrderModule.plan.data = state.openOrderModule.plan.data.filter(item =>
                id ? item.id !== id : false
              )
              state.openOrderModule.plan.total = state.openOrderModule.plan.data.length
            })
          )
        },
      },
      stop: {
        data: [] as YapiGetV1PerpetualStrategyCurrentListData[],
        total: 0,
      },
    },
    /** 行情列表，含有所有币対最新价 */
    quotationList: [] as TickersPbMsg_Body[],
    /** 资产币种列表 */
    assetsCoinList: [] as AssetsPbMsg_CurrencyAssets[],
    /** 标记价格、费率列表 */
    fundRatesList: [] as FundRatesPbMsg_Body[],
    // TODO: 具体值和存储待定
    contractUnit: {
      goldStandard: FutureTradeUnitEnum.a,
      currencyUnit: FutureTradeUnitEnum.a,
    },
    pairList: [] as {
      name: string
      id: any
    }[],
    pairFilterList: [] as any,
    selectPairList: [],
    /** 锁仓手续费比例 */
    lockPositionFeeRate: 0.008,
    tradePairDefaultQuote: '',
    subscribe() {
      if (subscribed) {
        return () => {}
      }
      const { onEntrustCurrentPush, onEntrustStopProfitLossPush, onEntrustPlanPush } = createOnWs(set, get)
      const subscribeParams: ISubscribeParams[] = [
        {
          subs: { biz: WsBizEnum.perpetual, type: WsTypesEnum.perpetualOrder, base: '', quote: '', granularity: '' },
          callback: onEntrustCurrentPush,
        },
        {
          subs: {
            biz: WsBizEnum.perpetual,
            type: WsTypesEnum.PerpetualPlanOrder,
            base: '',
            quote: '',
            granularity: '',
          },
          callback: onEntrustPlanPush,
        },
        {
          subs: {
            biz: WsBizEnum.perpetual,
            type: WsTypesEnum.PerpetualProfitLoss,
            base: '',
            quote: '',
            granularity: '',
          },
          callback: onEntrustStopProfitLossPush,
        },
      ]
      subscribeParams.forEach(({ callback, ...params }) => {
        contractWs.subscribe({
          ...params,
          callback,
        })
      })
      subscribed = true
      return () => {
        subscribed = false
        subscribeParams.forEach(params => {
          contractWs.unsubscribe(params)
        })
      }
    },
    setFutureEntrustType(type) {
      set(
        produce((draft: IBaseFutureStore) => {
          draft.futureEntrustType = type
        })
      )
    },
    async fetchTradePairDefaultQuote() {
      const { isOk, data } = await getV1PerpetualTradePairDefaultQuoteCoinApiRequest({})
      if (isOk && data) {
        set(
          produce((draft: IBaseOrderSpotStore) => {
            draft.tradePairDefaultQuote = data
          })
        )
      }
    },
    async fetchPairList() {
      const res = await getPerpetualTradePairList({})
      if (!res.isOk || !res.data) {
        return
      }
      set(
        produce((draft: IBaseOrderSpotStore) => {
          draft.pairList =
            res.data?.list?.map(item => {
              return {
                name: `${item.baseSymbolName}${item.quoteSymbolName}`,
                id: item.id,
              }
            }) || []
          draft.pairFilterList = res.data?.list || []
        })
      )
    },
    async fetchCurrentOpenOrders({ tradeId, priorTrade }: { tradeId?: string; priorTrade?: string } = {}) {
      const { isOk, data } = await queryPerpetualOrdersCurrent({
        tradeId,
        pageNum: '1',
        pageSize: '500',
        priorTrade: priorTrade || '',
      })
      if (isOk) {
        set(
          produce((draft: IBaseOrderSpotStore) => {
            draft.openOrderModule.normal = {
              ...draft.openOrderModule.normal,
              data: (data && data.list) || [],
              total: (data && data.total!) || 0,
            }
          })
        )
      }
    },
    async fetchStopProfitLossOrders({ tradeId, priorTrade }: { tradeId?: string; priorTrade?: string } = {}) {
      const { isOk, data } = await queryPerpetualStopProfitLossCurrent({
        tradeId,
        pageNum: '1',
        pageSize: '500',
        priorTrade: priorTrade || '',
      })
      if (isOk) {
        set(
          produce((draft: IBaseOrderSpotStore) => {
            draft.openOrderModule.stop = {
              ...draft.openOrderModule.stop,
              data: (data && data.list) || [],
              total: (data && data.total!) || 0,
            }
          })
        )
      }
    },
    async fetchPlanOrdersOrders({ tradeId, priorTrade }: { tradeId?: string; priorTrade?: string } = {}) {
      const { isOk, data } = await queryPerpetualPlanOrdersCurrent({
        tradeId,
        pageNum: '1',
        pageSize: '500',
        priorTrade: priorTrade || '',
      })
      if (isOk) {
        set(
          produce((draft: IBaseOrderSpotStore) => {
            draft.openOrderModule.plan = {
              ...draft.openOrderModule.plan,
              data: (data && data.list) || [],
              total: (data && data.total!) || 0,
            }
          })
        )
      }
    },
    async fetchOpenOrders({ tradeId, priorTrade }: { tradeId?: string; priorTrade?: string } = {}) {
      if (!getIsLogin()) {
        return
      }
      const { fetchCurrentOpenOrders, fetchStopProfitLossOrders, fetchPlanOrdersOrders }: IBaseOrderSpotStore = get()
      await Promise.all([
        fetchCurrentOpenOrders({ tradeId, priorTrade }),
        fetchStopProfitLossOrders({ tradeId, priorTrade }),
        fetchPlanOrdersOrders({ tradeId, priorTrade }),
      ])
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
    ...createUpdateProp<IBaseFutureStore>(set),
    ...getBaseStore(set, get),
  }
}

const baseOrderFutureStore = create(getStore)

const useOrderFutureStore = createTrackedSelector(baseOrderFutureStore)

export { useOrderFutureStore, baseOrderFutureStore }
