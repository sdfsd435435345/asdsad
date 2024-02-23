import { mergeTradePairWithWsDataByWassName } from '@/helper/market/market-list'
import { useSafeState, useUpdateEffect } from 'ahooks'
import {
  wsContractTradePairSubSlow,
  wsFuturesMarketCommonSub,
  wsSpotMarketCommonSub,
  wsSpotTradePairSubSlow,
} from '@/helper/market/market-list/market-ws'
import { useEffect } from 'react'
import ws from '@/plugins/ws'
import futuresWs from '@/plugins/ws/futures'
import { WsThrottleTimeEnum } from '@/constants/ws'
import { useWsMultiSub } from '../use-ws-sub'

export const getWsMarketTradePairBySub = (subscription, ws, intervalTime) => {
  return ({ apiData }: { apiData: any[] | undefined | null }) => {
    const [resolvedData, setResolvedData] = useSafeState<any[] | null | undefined>(apiData)
    const wsData: any[] | null = useWsMultiSub({ apiData, sub: subscription, ws, intervalTime }) as any

    useEffect(() => {
      setResolvedData(apiData)
    }, [apiData])

    useUpdateEffect(() => {
      if (!wsData) return
      setResolvedData(mergeTradePairWithWsDataByWassName(resolvedData || [], wsData))
    }, [wsData])

    return resolvedData || []
  }
}

/**
 * 现货单个币对的行情订阅，支持多个币对传参
 */
export const useWsSpotMarketTradePairRealTime = getWsMarketTradePairBySub(
  wsSpotMarketCommonSub,
  ws,
  WsThrottleTimeEnum.Market
)
export const useWsFuturesMarketTradePairRealTime = getWsMarketTradePairBySub(
  wsFuturesMarketCommonSub,
  futuresWs,
  WsThrottleTimeEnum.Market
)

/**
 * 现货单个币对的行情慢速（2s）订阅，支持多个币对传参
 * 当前使用场景：首页币对信息 (热门、推荐、涨跌榜)，自选缺省推荐，历史选择币对
 */
export const useWsSpotMarketTradePairSlow = getWsMarketTradePairBySub(
  wsSpotTradePairSubSlow,
  ws,
  WsThrottleTimeEnum.Slower
)
export const useWsFuturesMarketTradePairSlow = getWsMarketTradePairBySub(
  wsContractTradePairSubSlow,
  futuresWs,
  WsThrottleTimeEnum.Slower
)

export const useWsMarketTradePairByType = (subscription, ws, time: WsThrottleTimeEnum) =>
  getWsMarketTradePairBySub(subscription, ws, time)
