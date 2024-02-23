import { useWsSpotMarketTradePairSlow } from '@/hooks/features/market/common/market-ws/use-ws-market-trade-pair'
import { YapiGetV1TradePairRecommendListData } from '@/typings/yapi/TradePairRecommendV1GetApi'
import useApiRecommendedCoins from './use-api-recommended-coins'

export default function useWsRecommendedCoins() {
  const apiData = useApiRecommendedCoins() as YapiGetV1TradePairRecommendListData[]
  const resolvedData = useWsSpotMarketTradePairSlow({ apiData })
  return resolvedData
}
