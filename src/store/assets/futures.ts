/**
 * 资产 - 合约
 */
import produce from 'immer'
import create from 'zustand'
import { createTrackedSelector } from 'react-tracked'
import { subscribeWithSelector } from 'zustand/middleware'
import {
  getAssetsFuturesSettingCache,
  getPositionStrategyCache,
  setAssetsFuturesSettingCache,
  setPositionStrategyCache,
} from '@/helper/cache'
import {
  AssetsCurrencySettingsResp,
  DetailMarginListChild,
  FuturesGroupDetailResp,
  IPerpetualAssetsTransferAccountList,
  MarginSettingsList,
  PositionList,
} from '@/typings/api/assets/futures'
import {
  FuturesDetailsTabEnum,
  StopLimitEntrustTypeEnum,
  StopLimitTriggerPriceTypeEnum,
} from '@/constants/assets/futures'
import { WsBizEnum, WsThrottleTimeEnum, WsTypesEnum } from '@/constants/ws'
// import { WSThrottleTypeEnum } from '@nbit/chart-utils'
import ws from '@/plugins/ws/futures'
import { PerpetualIndexPrice } from '@/plugins/ws/protobuf/ts/proto/PerpetualIndexPrice'
import { formatCurrency } from '@/helper/decimal'
import { SpotAssetsChange } from '@/plugins/ws/protobuf/ts/proto/SpotAssetsChange'
import { CoinListResp } from '@/typings/api/assets/assets'

type IStore = ReturnType<typeof getStore>

export const defaultUserAssetsFutures = {
  availableBalanceValue: '0', // 可用保证金 - 根据设置的保证金币种折算
}

export const defaultFuturesDetails = {
  groupId: '',
  groupName: '',
  baseCoin: '',
  groupAsset: '',
  marginAvailable: '',
  positionMargin: '',
  marginCoin: [],
  positionAsset: [],
  marginAssets: '',
  marginAvailableScale: '',
  unrealizedProfit: '',
  openLockAsset: '',
  groupCount: 0,
  isAutoAdd: 'no',
}

function getStore(set, get) {
  return {
    /** 资产 - 合约组本地设置缓存 */
    assetsFuturesSetting: getAssetsFuturesSettingCache() || {
      /** 是否首次使用一键锁仓 */
      isFirstLock: true,
      /** 交易 - 是否隐藏其他合约 */
      hideOthers: false,
    },
    updateAssetsFuturesSetting: (values: any) => {
      set((store: IStore) => {
        return produce(store, _store => {
          const newAssetsFuturesSetting = { ..._store.assetsFuturesSetting, ...values }
          _store.assetsFuturesSetting = newAssetsFuturesSetting
          setAssetsFuturesSettingCache(newAssetsFuturesSetting)
        })
      })
    },
    positionModule: {
      strategyInfo: getPositionStrategyCache() || {
        /** 止盈止损触发类型 */
        triggerPriceType: StopLimitTriggerPriceTypeEnum.new,
        /** 止盈止损委托类型 */
        entrustType: StopLimitEntrustTypeEnum.market,
        /** 仓位止盈触发类型 */
        profitTriggerPriceType: StopLimitTriggerPriceTypeEnum.new,
        /** 仓位止盈触发类型 */
        lossTriggerPriceType: StopLimitTriggerPriceTypeEnum.new,
        /** 平仓委托类型 */
        closeEntrustType: StopLimitEntrustTypeEnum.market,
      },
      updateStrategyInfo: (newStrategyInfo: any) =>
        set((store: IStore) => {
          return produce(store, _store => {
            const newPositionModule = { ..._store.positionModule, strategyInfo: newStrategyInfo }
            _store.positionModule = newPositionModule
            setPositionStrategyCache(newStrategyInfo)
          })
        }),
    },

    /** 合约资产 - 交易页用 */
    userAssetsFutures: defaultUserAssetsFutures,
    updateUserAssetsFutures: newUserAssetsFutures => set(produce(() => ({ userAssetsFutures: newUserAssetsFutures }))),
    /** 交易 - 当前持仓列表 */
    positionListFutures: [] as PositionList[],
    updatePositionListFutures: newPositionListFutures =>
      set(produce(() => ({ positionListFutures: newPositionListFutures || [] }))),
    /** 合约币对详情 */
    tradePairDetail: {},
    updateTradePairDetail: newTradePairDetail => set(produce(() => ({ tradePairDetail: newTradePairDetail }))),
    /** 合约 - 商户法币配置 */
    futuresCurrencySettings: {} as AssetsCurrencySettingsResp,
    updateFuturesCurrencySettings: (values: AssetsCurrencySettingsResp) =>
      set((store: IStore) => {
        return produce(store, _store => {
          const newFuturesCurrencySettings = { ..._store.futuresCurrencySettings, ...values }
          _store.futuresCurrencySettings = newFuturesCurrencySettings
        })
      }),
    /** 合约组详情 */
    futuresDetails: {
      activeTab: FuturesDetailsTabEnum.position,
      details: defaultFuturesDetails as FuturesGroupDetailResp,
      // 保证金列表
      margin: {
        baseCoin: '',
        list: [] as DetailMarginListChild[],
      },
      // 商户保证金币种配置
      marginSettings: [] as MarginSettingsList[],
    },
    updateFuturesDetails: (values: any) => {
      set((store: IStore) => {
        return produce(store, _store => {
          const newFuturesDetails = { ..._store.futuresDetails, ...values }

          _store.futuresDetails = newFuturesDetails
        })
      })
    },
    /** 合约组详情推送 */
    wsPerpetualGroupDetailSubscribe: (callback, throttleType) => {
      ws.subscribe({
        subs: { biz: WsBizEnum.perpetual, type: WsTypesEnum.perpetualGroupDetail },
        throttleTime: WsThrottleTimeEnum.Market,
        throttleType,
        callback,
      })
    },
    wsPerpetualGroupDetailUnSubscribe: callback => {
      ws.unsubscribe({
        subs: { biz: WsBizEnum.perpetual, type: WsTypesEnum.perpetualGroupDetail },
        callback,
      })
    },
    /** 持仓当前币对 */
    symbolWassName: '',
    updateSymbolWassName: (value: string) =>
      set((store: IStore) => {
        return produce(store, _store => {
          _store.symbolWassName = value
        })
      }),
    /** 最新价格 */
    positionDealPrice: '',
    updatePositionDealPrice: (value: string) =>
      set((store: IStore) => {
        return produce(store, _store => {
          _store.positionDealPrice = value
        })
      }),
    wsDealPriceCallback: (dealPriceData: any) =>
      set((store: IStore) => {
        return produce(store, _store => {
          dealPriceData = dealPriceData[0]
          if (_store.symbolWassName === dealPriceData.symbolWassName) {
            _store.positionDealPrice = dealPriceData.price
          }
        })
      }),
    /** 最新价格推送 */
    wsDealSubscribe: (subs, callback?) => {
      const state: IStore = get()
      ws.subscribe({
        subs,
        throttleTime: WsThrottleTimeEnum.Medium,
        // throttleType: WSThrottleTypeEnum.cover,
        callback: callback || state.wsDealPriceCallback,
      })
    },
    wsDealUnSubscribe: (subs, callback?) => {
      const state: IStore = get()
      ws.unsubscribe({
        subs,
        callback: callback || state.wsDealPriceCallback,
      })
    },
    /** 标记价格 */
    positionMarkPrice: '',
    updatePositionMarkPrice: (value: string) =>
      set((store: IStore) => {
        return produce(store, _store => {
          _store.positionMarkPrice = value
        })
      }),
    wsMarkPriceCallback: (markPriceData: PerpetualIndexPrice) =>
      set((store: IStore) => {
        return produce(store, _store => {
          markPriceData = markPriceData[0]
          if (_store.symbolWassName === markPriceData.symbolWassName) {
            _store.positionMarkPrice = markPriceData.markPrice
          }
        })
      }),
    /** 标记价格推送 */
    wsMarkPriceSubscribe: (subs, callback?) => {
      const state: IStore = get()
      ws.subscribe({
        subs,
        throttleTime: WsThrottleTimeEnum.Medium,
        // throttleType: WSThrottleTypeEnum.cover,
        callback: callback || state.wsMarkPriceCallback,
      })
    },
    wsMarkPriceUnSubscribe: (subs, callback?) => {
      const state: IStore = get()
      ws.unsubscribe({
        subs,
        callback: callback || state.wsMarkPriceCallback,
      })
    },
    /** 持仓列表 symbolWassName */
    positionSymbolWassNameList: [] as string[],
    updatePositionSymbolWassNameList: (value: string[]) =>
      set((store: IStore) => {
        return produce(store, _store => {
          _store.positionSymbolWassNameList = value
        })
      }),

    /** 推送回调 - 合约组可用资产 - 现货资产购买力 */
    async wsSpotAssetsChangeCallback(spotAssetsData: SpotAssetsChange) {
      const data = spotAssetsData[0]
      const store: IStore = get()
      const offset = store.futuresCurrencySettings.offset
      const newAssetData = {
        availableBalanceValue: data.assets,
        availableBalanceValueText: formatCurrency(String(data.assets), offset || 2),
      }

      store.updateUserAssetsFutures(newAssetData)
    },
    /** 订阅 - 合约组可用资产 - 现货资产购买力 */
    wsSpotAssetsChangeSubscribe: () => {
      const state: IStore = get()
      ws.subscribe({
        subs: { biz: WsBizEnum.perpetual, type: WsTypesEnum.spotAssetsChange },
        throttleTime: WsThrottleTimeEnum.Market,
        // throttleType: WSThrottleTypeEnum.cover,
        callback: state.wsSpotAssetsChangeCallback,
      })
    },
    /** 取消订阅 - 合约组可用资产 - 现货资产购买力 */
    wsSpotAssetsChangeUnSubscribe: () => {
      const state: IStore = get()
      ws.unsubscribe({
        subs: { biz: WsBizEnum.perpetual, type: WsTypesEnum.spotAssetsChange },
        callback: state.wsSpotAssetsChangeCallback,
      })
    },
    /** 资金划转模块 */
    assetsTransfer: {
      /** 划转账号列表 */
      accountList: [] as IPerpetualAssetsTransferAccountList[],
      /** 划转币种列表 */
      coinList: [] as DetailMarginListChild[] | CoinListResp[],
    },
    updateAssetsTransfer: values => {
      set((store: IStore) => {
        return produce(store, _store => {
          const newAssetsTransfer = { ..._store.assetsTransfer, ...values }
          _store.assetsTransfer = newAssetsTransfer
        })
      })
    },
  }
}

const baseAssetsFuturesStore = create(subscribeWithSelector(getStore))

const useAssetsFuturesStore = createTrackedSelector(baseAssetsFuturesStore)

export { useAssetsFuturesStore, baseAssetsFuturesStore }
