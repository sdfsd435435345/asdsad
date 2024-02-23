import { YapiGetV1FavouriteListApiRequest } from '@/typings/yapi/FavouriteListV1GetApi'
import { useFuturesFavList, useSpotFavList } from '@/hooks/features/market/favourite'
import {
  useWsFuturesMarketTradePairFullAmount,
  useWsSpotMarketTradePairFullAmount,
} from '@/hooks/features/market/common/market-ws/use-ws-market-trade-pair-full-amount'

export function useWsMarketSpotUserFavListFullAmount({
  apiParams,
}: {
  apiParams: Partial<YapiGetV1FavouriteListApiRequest>
}) {
  const { state, refreshCallback, apiStatus, setState } = useSpotFavList()
  const resolvedData = useWsSpotMarketTradePairFullAmount({ apiData: state }) as any

  return { resolvedData, setState, refreshCallback, apiStatus }
}

export function useWsMarketFuturesUserFavListFullAmount({
  apiParams,
}: {
  apiParams: Partial<YapiGetV1FavouriteListApiRequest>
}) {
  const { state, refreshCallback, apiStatus, setState } = useFuturesFavList()
  const resolvedData = useWsFuturesMarketTradePairFullAmount({ apiData: state }) as any

  return { resolvedData, setState, refreshCallback, apiStatus }
}
