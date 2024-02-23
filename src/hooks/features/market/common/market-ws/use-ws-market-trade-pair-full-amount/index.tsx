import { mergeTradePairWithWsDataByWassName } from '@/helper/market/market-list'
import { useEffect } from 'react'
import { useSafeState, useUpdateEffect } from 'ahooks'
import { TradePairs_TradePair } from '@/plugins/ws/protobuf/ts/proto/TradePairs'
import { isEmpty } from 'lodash'
import { wsContractTradePairSubFullAmount, wsSpotTradePairSubFullAmount } from '@/helper/market/market-list/market-ws'
import ws from '@/plugins/ws'
import futuresWs from '@/plugins/ws/futures'
import { useWsSingleSubByBizId } from '../use-ws-sub'

const getWsMarketTradeBySub = (subscription, ws) => {
  return ({ apiData }) => {
    const wsData = useWsSingleSubByBizId({ apiData, sub: subscription, ws }) as TradePairs_TradePair[]
    const [resolvedData, setResolvedData] = useSafeState([])

    useEffect(() => {
      setResolvedData(apiData || [])
    }, [apiData])

    useUpdateEffect(() => {
      if (isEmpty(wsData)) return
      setResolvedData((mergeTradePairWithWsDataByWassName(resolvedData as any, wsData || []) || []) as any)
    }, [wsData])

    return resolvedData || []
  }
}

/**
 * 行情信息的全量订阅，2s 一次推送
 * 当前使用场景：行情列表、自选列表，现货交易区，现货交易区搜索
 */
export const useWsSpotMarketTradePairFullAmount = getWsMarketTradeBySub(wsSpotTradePairSubFullAmount, ws)
export const useWsFuturesMarketTradePairFullAmount = getWsMarketTradeBySub(wsContractTradePairSubFullAmount, futuresWs)
