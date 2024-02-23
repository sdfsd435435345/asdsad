import { useEffect } from 'react'
import { getDefaultFavList, getDefaultFavListFutures } from '@/apis/market/market-list/market-favourites'
import { YapiGetV1FavouriteDefaultApiRequest } from '@/typings/yapi/FavouriteDefaultV1GetApi'
import { WsSpotFavouriteDefaultDataType } from '@/typings/api/market/market-list'
import { mergeTradePairWithFavDefault, mergeTradePairWithSymbolInfo } from '@/helper/market/market-list'
import { useSafeState } from 'ahooks'
import { isEmpty } from 'lodash'
import {
  useWsFuturesMarketTradePairSlow,
  useWsSpotMarketTradePairSlow,
} from '@/hooks/features/market/common/market-ws/use-ws-market-trade-pair'
import useApiAllMarketTradePair from '../../common/use-api-all-market-trade-pair/index'
import useApiAllCoinSymbolInfo, { useApiAllMarketFuturesTradePair } from '../../common/use-api-all-coin-symbol-info'

export function useWsMarketSpotFavouriteDefault({ apiParams }: { apiParams?: YapiGetV1FavouriteDefaultApiRequest }) {
  const [apiData, setApiData] = useSafeState<WsSpotFavouriteDefaultDataType[]>([])
  const resolvedData = useWsSpotMarketTradePairSlow({ apiData })

  const allTradePair = useApiAllMarketTradePair().data
  const allCoinsLogo = useApiAllCoinSymbolInfo()

  useEffect(() => {
    if (isEmpty(allCoinsLogo) || isEmpty(allTradePair)) return

    getDefaultFavList(apiParams || {}).then(res => {
      // add id to fav default list
      const processed =
        res?.data?.list.map(each => {
          return {
            ...each,
            id: each.tradePairId,
          }
        }) || []
      // merge with full trade pair info in case ws no response
      const merged = mergeTradePairWithFavDefault(allTradePair as any, processed)
      const resolved = mergeTradePairWithSymbolInfo(merged as any, allCoinsLogo)

      setApiData(resolved)
    })
  }, [allTradePair, allCoinsLogo])

  return [apiData, resolvedData]
}

export function useWsMarketFuturesFavouriteDefault({ apiParams }: { apiParams?: YapiGetV1FavouriteDefaultApiRequest }) {
  const [apiData, setApiData] = useSafeState<WsSpotFavouriteDefaultDataType[]>([])
  const resolvedData = useWsSpotMarketTradePairSlow({ apiData })

  const allTradePair = useApiAllMarketFuturesTradePair().data
  const allCoinsLogo = useApiAllCoinSymbolInfo()

  useEffect(() => {
    if (isEmpty(allCoinsLogo) || isEmpty(allTradePair)) return

    getDefaultFavListFutures(apiParams || {}).then(res => {
      // add id to fav default list
      const processed =
        (res?.data?.list || []).map(each => {
          return {
            ...each,
            id: each.tradePairId,
          }
        }) || []
      // merge with full trade pair info in case ws no response
      const merged = mergeTradePairWithFavDefault(allTradePair as any, processed)
      const resolved = mergeTradePairWithSymbolInfo(merged as any, allCoinsLogo)

      setApiData(resolved)
    })
  }, [allTradePair, allCoinsLogo])

  return [apiData, resolvedData]
}
