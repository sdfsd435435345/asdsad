import create from 'zustand'
import { createTrackedSelector } from 'react-tracked'
import produce from 'immer'
import coinWs from '@/plugins/ws'
import { ISubscribeParams } from '@/plugins/ws/types'
import { getIsLogin } from '@/helper/auth'
import { getSymbolLabelInfo } from '@/apis/market'
import { YapiGetV1TradePairListData } from '@/typings/yapi/TradePairListV1GetApi'
import { WsBizEnum, WsThrottleTimeEnum, WsTypesEnum } from '@/constants/ws'
import { WSThrottleTypeEnum } from '@/plugins/ws/constants'
import { IStoreEnum } from '@/typings/store/common'
import { IC2cOrderItem } from '@/typings/api/c2c/order'
import { queryC2cOrderList } from '@/apis/c2c/order'
import { fetchStoreEnums } from '@/helper/store'
import { enumValuesToOptions, subscribeC2cOrders } from '@/helper/c2c/order'
import { C2cOrderDirectionEnum, C2cOrderStatusEnum, getC2cOrderDirectionEnumName } from '@/constants/c2c/order'
import { C2cTradeAdPaymentEnum, getC2cTradeAdPaymentEnumName } from '@/constants/c2c/trade'

export type IC2cOrderStore = ReturnType<typeof getBaseStore>

let subscribed = false

function createOnWs(set, get) {
  return {
    onEntrustPush() {
      const state: IC2cOrderStore = get()
      state.fetchOpenOrders()
    },
  }
}

function getBaseStore(set, get) {
  return {
    openOrderModule: {
      normal: {
        data: [] as any as IC2cOrderItem[],
        total: 0,
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
      const { onEntrustPush } = createOnWs(set, get)
      const unsubscribeFn = subscribeC2cOrders(onEntrustPush)
      subscribed = true
      return () => {
        subscribed = false
        unsubscribeFn()
      }
    },
    async fetchOpenOrders() {
      if (!getIsLogin()) {
        return
      }
      const [normalRes] = await Promise.all([
        queryC2cOrderList({ statusCd: C2cOrderStatusEnum.unFinished as any, pageSize: 10 }),
      ])
      set(
        produce((draft: IC2cOrderStore) => {
          draft.openOrderModule.normal = {
            data: ((normalRes.data && normalRes.data.list) as any) || [],
            total: (normalRes.data && normalRes.data.total!) || 0,
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
        produce((draft: IC2cOrderStore) => {
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
        codeKey: 'c2cStatusCode',
        enums: [],
      } as IStoreEnum,
      payments: {
        codeKey: 'c2c_payment_type_cd',
        enums: [],
        getDefault: () =>
          enumValuesToOptions(
            [C2cTradeAdPaymentEnum.alipay, C2cTradeAdPaymentEnum.wechat, C2cTradeAdPaymentEnum.bank],
            getC2cTradeAdPaymentEnumName
          ),
      } as IStoreEnum,
      paymentsColor: {
        codeKey: 'c2c_payment_color',
        enums: [],
      } as IStoreEnum,
      direction: {
        codeKey: 'c2cDirectionCode',
        enums: [],
        getDefault: () =>
          enumValuesToOptions([C2cOrderDirectionEnum.buy, C2cOrderDirectionEnum.sell], getC2cOrderDirectionEnumName),
      } as IStoreEnum,
      cancelReasons: {
        codeKey: 'c2c_order_cancel_type',
        enums: [],
      } as IStoreEnum,
      appealReasons: {
        codeKey: 'c2c_order_appeal_reason',
        enums: [],
      } as IStoreEnum,
      appealSpecificReasons: {
        codeKey: 'c2c_order_appeal_specific_reason',
        enums: [],
      } as IStoreEnum,
    },
    updateOrderEnums(enums: Record<string, IStoreEnum>) {
      set((draft: IC2cOrderStore) => {
        const state: IC2cOrderStore = {
          ...draft,
          orderEnums: enums as any,
        }

        return state
      })
    },
    setDefaultEnums() {
      // 规避初始化时，多语言无法载入的问题
      const state: IC2cOrderStore = get()
      state.updateOrderEnums(
        produce(state.orderEnums, draft => {
          const items = Object.values(draft)
          items.forEach(item => {
            item.enums = item.getDefault?.() || []
          })
        })
      )
    },
    async fetchOrderEnums() {
      const state: IC2cOrderStore = get()
      const data = await fetchStoreEnums(state.orderEnums, {
        withFastPayServer: true,
        withFastPayToken: false,
      })
      state.updateOrderEnums(data)
    },
  }
}
function getStore(set, get) {
  return {
    ...getBaseStore(set, get),
  }
}

const baseC2cOrderStore = create(getStore)

const useBaseC2cOrderStore = createTrackedSelector(baseC2cOrderStore)

export { useBaseC2cOrderStore, baseC2cOrderStore }
