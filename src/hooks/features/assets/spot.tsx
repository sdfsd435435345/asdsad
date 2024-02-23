import { useEffect } from 'react'
import { useSafeState, useMemoizedFn } from 'ahooks'
import { getMyAssetsDataProps } from '@/typings/assets'
import { useMarketStore } from '@/store/market'
import { useContractMarketStore } from '@/store/market/contract'
import { defaultUserAssetsFutures, useAssetsFuturesStore } from '@/store/assets/futures'
import { AssetWsSubscribePageEnum } from '@/constants/assets'
import { TradeModeEnum, UserFuturesTradeStatus } from '@/constants/trade'
import { useUserStore } from '@/store/user'
import { useAssetsStore } from '@/store/assets/spot'
import { getMyAssetsData, onUpdateCoinList } from '@/helper/assets/spot'
import { getIsLogin } from '@/helper/auth'
import { Asset_Body } from '@/plugins/ws/protobuf/ts/proto/Asset'
import { getCoinBalance } from '@/apis/assets/coin'
import { ICoinBalanceDataList } from '@/typings/api/assets/assets'

/**
 * 注册资产币种列表推送
 * @params isUpdateOverview 是否更新资产总览（默认更新）
 * @params callBack 推送回调方法
 */
export const useGetWsAssets = (params?) => {
  const { isUpdateOverview = true, callBack } = params || {}
  const isLogin = getIsLogin()
  const { wsSpotAssetsSubscribe, wsSpotAssetsUnSubscribe } = useAssetsStore()

  const coinWSCallBack = useMemoizedFn((data: Asset_Body) => {
    // 先考虑覆盖式更新，后续考虑增量覆盖
    data = data[0]
    onUpdateCoinList(data, isUpdateOverview)
  })

  // websocket 推送资产
  useEffect(() => {
    // 未登录不订阅
    if (!isLogin) return
    wsSpotAssetsSubscribe(callBack || coinWSCallBack)

    return () => {
      wsSpotAssetsUnSubscribe(callBack || coinWSCallBack)
    }
  }, [useMarketStore().currentCoin.id, isLogin])
}

/** 获取用户资产 - 方法入参 */
type useGetMyAssetsWSProps = {
  /** ws subs 入参 */
  subs?: any
  /** 订阅来源：trade、other，交易页订阅判断币对 id */
  page?: string
  accountType?: TradeModeEnum
}

/**
 * 交易页查可用资产数据推送 - 目前支持币币资产、合约资产
 * @param page: trade、other，ws 订阅来源：交易页订阅判断币对 id
 */
export function useGetMyAssetsWS({ page = AssetWsSubscribePageEnum.other, accountType }: useGetMyAssetsWSProps) {
  const marketState = useMarketStore()
  const marketFuturesState = useContractMarketStore()
  const {
    isLogin,
    personalCenterSettings: { isOpenContractStatus },
  } = useUserStore()
  const isOpenFutures = isOpenContractStatus === UserFuturesTradeStatus.open

  const assetsStore = useAssetsStore()
  const assetsFuturesStore = useAssetsFuturesStore()
  const { wsSpotAssetsSubscribe, wsSpotAssetsUnSubscribe } = {
    ...assetsStore,
  }
  const { wsSpotAssetsChangeSubscribe, wsSpotAssetsChangeUnSubscribe } = { ...assetsFuturesStore }
  // websocket 推送资产
  useEffect(() => {
    // 未登录不订阅
    if (!isLogin) return

    switch (accountType) {
      case TradeModeEnum.spot:
        // 现货交易页 - 未拿到币对信息时不订阅
        if (page === AssetWsSubscribePageEnum.trade && !marketState.currentCoin.id) return
        wsSpotAssetsSubscribe()
        break
      case TradeModeEnum.futures:
        // 合约交易页 - 未拿到币对信息时不订阅
        if (!marketFuturesState.currentCoin.id || !isOpenFutures) return
        wsSpotAssetsChangeSubscribe()
        break
      default:
        break
    }

    return () => {
      switch (accountType) {
        case TradeModeEnum.spot:
          wsSpotAssetsUnSubscribe()
          break
        case TradeModeEnum.futures:
          wsSpotAssetsChangeUnSubscribe()
          break
        default:
          break
      }
    }
  }, [marketState.currentCoin.id, isLogin, isOpenFutures])
}

/**
 * 查询现货、合约、杠杆的资产信息
 * @param options
 */
export const useGetMyAssets = (options: getMyAssetsDataProps) => {
  const marketState = useMarketStore()
  const assetsStore = useAssetsStore()
  const assetsFuturesStore = useAssetsFuturesStore()
  const {
    isLogin,
    personalCenterSettings: { isOpenContractStatus },
  } = useUserStore()
  const isOpenFutures = isOpenContractStatus === UserFuturesTradeStatus.open
  const { userAssetsSpot, userAssetsMargin } = {
    ...assetsStore,
  }
  let defaultAsset

  const { accountType } = options
  if (accountType === TradeModeEnum.margin) {
    defaultAsset = userAssetsMargin
  } else if (accountType === TradeModeEnum.futures) {
    // 合约 - 可用资产
    defaultAsset = assetsFuturesStore.userAssetsFutures
  } else {
    // 默认现货
    defaultAsset = userAssetsSpot
  }

  const [assetData, setAssetData] = useSafeState(defaultAsset)
  const getAssetData = async () => {
    const userAssets = await getMyAssetsData(options)
    setAssetData(userAssets)
  }

  useEffect(() => {
    if (!isLogin) return
    if (!marketState.currentCoin.id && accountType === TradeModeEnum.spot) return
    if (accountType === TradeModeEnum.futures && !isOpenFutures) {
      assetsFuturesStore.updateUserAssetsFutures(defaultUserAssetsFutures)
      return
    }
    getAssetData()
  }, [marketState.currentCoin.id, isLogin, isOpenFutures])

  // websocket 资产推送
  useGetMyAssetsWS({ page: AssetWsSubscribePageEnum.trade, accountType })

  // 暂时只支持现货资产
  return assetData
}
/** 获取币种余额，只返回可用不返回冻结 */
export function useSpotCoinBalance(coinId: any) {
  const [balanceList, setBalanceList] = useSafeState([] as ICoinBalanceDataList[])

  const fetchAssets = async () => {
    const res = await getCoinBalance({
      coinId,
    })
    if (!res.isOk || !res.data) {
      return
    }

    setBalanceList(res.data.list!)
  }

  useEffect(() => {
    fetchAssets()
  }, [])
  const coin = balanceList.find(item => item.coinId?.toString() === coinId?.toString())
  // 只返回可用余额
  return Number(coin?.availableAmount || 0)
}
