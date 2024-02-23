import create from 'zustand'
import { t } from '@lingui/macro'
import { createTrackedSelector } from 'react-tracked'
import {
  FutureMarginModeEnum,
  PersonProtectTypeEnum,
  PriceProtectTypeEnum,
  MarginModeSettingEnum,
  FutureSettingPEnum,
  GearEnum,
  TradeFutureMarginTypeInReqEnum,
} from '@/constants/trade'
import produce from 'immer'
import { getIsLogin } from '@/helper/auth'
import { FutureSettingMarginTakeWayEnum, getFutureSettingModuleOrder } from '@/constants/future/settings'
import { setCachePreference, getCachePreference, mergeStateFromCache } from '@/helper/store'
import {
  getAutomaticMarginCall,
  setAutomaticMarginCall,
  getModuleOrderCache,
  setModuleOrderCache,
} from '@/helper/cache/future'
import { Toast } from 'react-vant'
import { getPersonalPreference } from '@/apis/trade'
import { AutoAddPreferenceResp, MemberOpenContractReq, MarginCoinArrayType } from '@/typings/api/trade'
import { getFutureTradeSettingsFromCache, setFutureTradeSettingsToCache } from '@/helper/cache'
import { IFutureGroup } from '@/typings/api/future/common'
import { queryFutureGroups } from '@/apis/future/common'
import contractWs from '@/plugins/ws'
import { WsBizEnum, WsTypesEnum, WsThrottleTimeEnum } from '@/constants/ws'
import { ISubscribeParams } from '@/plugins/ws/types'
// import { WSThrottleTypeEnum } from '@nbit/chart-utils'
import { debounce } from 'lodash'
import { AssetsCurrencySettingsResp } from '@/typings/api/assets/futures'
import { getCommonSettings } from './base'

export type IFutureTradeStore = ReturnType<typeof getBaseStore>

let subscribed = false
type IStore = ReturnType<typeof getStore>

function createOnWs(set, get) {
  return {
    onGroupPush: debounce(() => {
      const state: IStore = get()
      state.fetchFutureGroups()
    }, 500),
  }
}
/** 合约偏好设置默认值 */
const autoAddPreferenceDefault = {
  isAutoAdd: PersonProtectTypeEnum.open,
  autoAddThreshold: GearEnum.low,
  autoAddQuota: 0,
  isAutoAddExtra: PersonProtectTypeEnum.open,
  retrieveWay: FutureSettingPEnum.manual,
  protect: PriceProtectTypeEnum.open,
  isAvg: PriceProtectTypeEnum.close,
  marginSource: MarginModeSettingEnum.wallet,
  isSettingAutoMargin: false,
}

function getBaseStore(set, get) {
  const baseState = {
    settings: {
      /** 价差保护 */
      priceProtectEnabled: false,
      /** 第一次开通 */
      isFirst: true,
      /** 保证金模式 */
      futureMarginMode: FutureMarginModeEnum.cross,
      /** 保证金币种 */
      marginCoins: [] as string[],
      futureGroupDepositEnabled: false,
      showIndexPrice: true,
      ...getCommonSettings(set),
      updateShowIndexPrice: (value: boolean) => {
        set(
          produce((draft: IFutureTradeStore) => {
            draft.settings.showIndexPrice = value
          })
        )
      },
      groupId: '' as string | number,
      marginSource: TradeFutureMarginTypeInReqEnum.assets,
      updateGroupId: (value: string | number) => {
        set(
          produce((draft: IFutureTradeStore) => {
            draft.settings.groupId = value
          })
        )
      },
      updateMarginSource: (value: TradeFutureMarginTypeInReqEnum) => {
        set(
          produce((draft: IFutureTradeStore) => {
            draft.settings.marginSource = value
          })
        )
      },
    },
    /** 法币设置 */
    futureCurrencySettings: {
      offset: 2,
    } as AssetsCurrencySettingsResp,
    updateFutureCurrencySettings: (value: AssetsCurrencySettingsResp) => {
      set(
        produce((draft: IFutureTradeStore) => {
          draft.futureCurrencySettings = value
        })
      )
    },
    /** 合约偏好设置* */
    preferenceSettings: (getCachePreference() || autoAddPreferenceDefault) as AutoAddPreferenceResp,
    async getPreference() {
      if (!getIsLogin()) return
      const res = await getPersonalPreference({})
      if (res.isOk) {
        set((store: IStore) => {
          return produce(store, _store => {
            _store.preferenceSettings = res.data as AutoAddPreferenceResp
            setCachePreference(res.data)
          })
        })
      }
    },
    async setPreference(text?: string) {
      set((store: IStore) => {
        return produce(store, _store => {
          _store.getPreference()
          getIsLogin() &&
            Toast.success({
              message: text || t`features_user_personal_center_settings_converted_currency_index_587`,
            })
        })
      })
    },
    // 是否首次开通
    isAutomaticMarginCall: (getAutomaticMarginCall() || false) as boolean,
    async setAutomaticMarginCall() {
      set((store: IStore) => {
        return produce(store, _store => {
          setAutomaticMarginCall(true)
          _store.isAutomaticMarginCall = true
        })
      })
    },
    /** 合约开通保证金币种选择* */
    marginCoinData: [] as MarginCoinArrayType[],
    async setMarginCoinData(value) {
      set(
        produce((draft: IFutureTradeStore) => {
          draft.marginCoinData = value
        })
      )
    },
    /** 保证金偏好设置 */
    futureMarginSettings: {
      autoAdd: false,
      takeWay: FutureSettingMarginTakeWayEnum.auto,
      marginMode: FutureMarginModeEnum.cross,
      autoTriggerPercent: 0.5,
    },
    /** 开通合约过渡数据 */
    openContractTransitionDatas: <MemberOpenContractReq>{},
    setOpenContractTransitionDatas: values =>
      set((store: IStore) => {
        return produce(store, _store => {
          _store.openContractTransitionDatas = { ..._store.openContractTransitionDatas, ...values }
        })
      }),
    clearOpenContractTransitionDatas: () =>
      set((store: IStore) => {
        return produce(store, _store => {
          _store.openContractTransitionDatas = <MemberOpenContractReq>{}
        })
      }),
    futureGroups: [] as IFutureGroup[],
    async fetchFutureGroups(excludeContractGroupId?: string | undefined) {
      if (!getIsLogin()) return
      const res = await queryFutureGroups({})

      if (!res.isOk || !res.data) {
        return
      }
      set(
        produce((draft: IFutureTradeStore) => {
          draft.futureGroups =
            res.data!.list.filter(item => {
              return item.groupId !== excludeContractGroupId
            }) || []
        })
      )
    },
    /** 当前选中的合约组 */
    currentFutureGroup: undefined as IFutureGroup | undefined,
    updateCurrentFutureGroup(group?: IFutureGroup) {
      set((store: IStore) => {
        return produce(store, _store => {
          _store.currentFutureGroup = group
        })
      })
    },
    subscribe() {
      // 因为是模块调用，不用担心空函数无法取消订阅
      if (subscribed) {
        return () => {}
      }
      if (!getIsLogin()) {
        return () => {}
      }
      const { onGroupPush } = createOnWs(set, get)
      const subscribeParams: ISubscribeParams[] = [
        {
          subs: { biz: WsBizEnum.perpetual, type: WsTypesEnum.perpetualGroupDetail },
          throttleTime: WsThrottleTimeEnum.Market,
          // throttleType: WSThrottleTypeEnum.cover,
          callback: onGroupPush,
        },
        {
          subs: { biz: WsBizEnum.perpetual, type: WsTypesEnum.perpetualGroupRefresh },
          throttleTime: WsThrottleTimeEnum.Market,
          // throttleType: WSThrottleTypeEnum.cover,
          callback: onGroupPush,
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
    /** 下单页模块顺序* */
    moduleOrderData: getModuleOrderCache() || getFutureSettingModuleOrder(),
    setModuleOrderData: values =>
      set((store: IStore) => {
        return produce(store, _store => {
          setModuleOrderCache(values)
          _store.moduleOrderData = values
        })
      }),
  }
  mergeStateFromCache(baseState, getFutureTradeSettingsFromCache())
  // 不缓存
  baseState.settings.preCoinIdForNotifications = -1
  baseState.settings.notificationLoaded = false

  return baseState
}
function getStore(set, get) {
  return {
    ...getBaseStore(set, get),
  }
}

const baseFutureTradeStore = create(getStore)
const useFutureTradeStore = createTrackedSelector(baseFutureTradeStore)
baseFutureTradeStore.subscribe(state => {
  setFutureTradeSettingsToCache(state)
})
export { baseFutureTradeStore, useFutureTradeStore }
