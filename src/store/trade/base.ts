import { EntrustStopLimitType, EntrustTypeEnum, TradeFutureMarginTypeInReqEnum, TradeUnitEnum } from '@/constants/trade'
import { IOrderConfirmSettings } from '@/typings/api/trade'
import produce from 'immer'

const orderCOnfirmDefaultSettings = [
  [EntrustTypeEnum.normal, EntrustTypeEnum.limit, EntrustStopLimitType.none],
  [EntrustTypeEnum.normal, EntrustTypeEnum.limit, EntrustStopLimitType.stopProfitAndLoss],
  [EntrustTypeEnum.normal, EntrustTypeEnum.market, EntrustStopLimitType.none],
  [EntrustTypeEnum.normal, EntrustTypeEnum.market, EntrustStopLimitType.stopProfitAndLoss],
  [EntrustTypeEnum.plan, EntrustTypeEnum.limit, EntrustStopLimitType.none],
  [EntrustTypeEnum.plan, EntrustTypeEnum.limit, EntrustStopLimitType.stopProfitAndLoss],
  [EntrustTypeEnum.plan, EntrustTypeEnum.market, EntrustStopLimitType.none],
  [EntrustTypeEnum.plan, EntrustTypeEnum.market, EntrustStopLimitType.stopProfitAndLoss],
] as IOrderConfirmSettings

function updateOrderConfirmSettings(id: IOrderConfirmSettings[0] | null, settings: IOrderConfirmSettings) {
  if (!id) {
    settings.length = 0
    return
  }
  const index = settings.findIndex(item => item.every((v, i) => v === id[i]))
  if (index >= 0) {
    settings.splice(index, 1)
  } else {
    settings.push(id as any)
  }
}
/** 合约现货都有，但是分开的设置 */
export function getCommonSettings(set: any) {
  const updateSettings = (fn: (oldSettings: typeof settings) => void) => {
    set(
      produce((draft: any) => {
        const oldSettings = draft.settings
        fn(oldSettings)
      })
    )
  }
  const settings = {
    orderConfirmSettings: orderCOnfirmDefaultSettings.slice(),
    entrustType: EntrustTypeEnum.market,
    modalEntrustType: EntrustTypeEnum.market,
    tradeUnit: TradeUnitEnum.indexBase,
    showCurrentCoinOrders: false,
    leverCache: {} as Record<string | number, number>,
    groupMarginSourceCache: {} as Record<string | number, TradeFutureMarginTypeInReqEnum>,
    /** 公告栏是否可见 */
    noticeBarVisible: true,
    /** 为了判断公告是否应该弹出而设置的币対 id */
    preCoinIdForNotifications: -1,
    /**  公共是否已加载完成，主要用于新手引导，初始化为 false 即可，切换交易对不需要重置 */
    notificationLoaded: false,
    updateNotificationLoaded(loaded: boolean) {
      updateSettings(oldSettings => {
        oldSettings.notificationLoaded = loaded
      })
    },
    updatePreCoinIdForNotifications: (id: number) => {
      updateSettings(oldSettings => {
        oldSettings.preCoinIdForNotifications = id
      })
    },
    updateNoticeBarVisible(visible: boolean) {
      updateSettings(oldSettings => {
        oldSettings.noticeBarVisible = visible
      })
    },
    updateLever(id: string | number, lever: number) {
      updateSettings(oldSettings => {
        oldSettings.leverCache[id] = lever
      })
    },
    updateGroupMarginSource(id: string | number, source: TradeFutureMarginTypeInReqEnum) {
      updateSettings(oldSettings => {
        oldSettings.groupMarginSourceCache[id] = source
      })
    },
    updateShowCurrentCoinOrders(show: boolean) {
      updateSettings(oldSettings => {
        oldSettings.showCurrentCoinOrders = show
      })
    },
    updateTradeUnit(tradeUnit: TradeUnitEnum) {
      updateSettings(oldSettings => {
        oldSettings.tradeUnit = tradeUnit
      })
    },
    updateEntrustType(entrustType: EntrustTypeEnum) {
      updateSettings(oldSettings => {
        oldSettings.entrustType = entrustType
      })
    },
    updateModalEntrustType(entrustType: EntrustTypeEnum) {
      updateSettings(oldSettings => {
        oldSettings.modalEntrustType = entrustType
      })
    },
    updateOrderConfirmSettings(id: IOrderConfirmSettings[0] | null) {
      updateSettings(oldSettings => {
        updateOrderConfirmSettings(id, oldSettings.orderConfirmSettings)
      })
    },
  }
  return settings
}
export type ITradeCommonSettings = ReturnType<typeof getCommonSettings>
