import { getTradePairList } from '@/apis/market/market-list'
import { YapiGetV1TradePairListData } from '@/typings/yapi/TradePairListV1GetApi'
import { YapiGetV1TradePairListApiRequestWithPagination } from '@/typings/api/market/market-list'
import { isEmpty, omitBy } from 'lodash'
import useApiAllCoinSymbolInfo from '@/hooks/features/market/common/use-api-all-coin-symbol-info'
import { YapiGetV1CoinQueryCoinPageListCoinListData } from '@/typings/yapi/CoinQueryCoinPageListV1GetApi'
import { mergeTradePairWithSymbolInfo, sortByHelper } from '@/helper/market/market-list'
import { useSafeState } from 'ahooks'
import { SpotMarketBaseCurrenyEnum, SpotMarketSectorCategoryEnum } from '@/constants/market/market-list/market-module'
import useReqeustMarketHelper from '@/hooks/features/market/common/use-request-market'
import {
  swrKeyMarketFuturesTradePairListByBaseCurrenty,
  swrKeyMarketSpotTradePairListByCurrencyAndCategory,
} from '@/helper/cache'
import { getV1PerpetualTradePairListApiRequest } from '@/apis/market/futures'
import {
  useWsFuturesMarketTradePairFullAmount,
  useWsSpotMarketTradePairFullAmount,
} from '@/hooks/features/market/common/market-ws/use-ws-market-trade-pair-full-amount'
import {
  YapiGetV1PerpetualTradePairListApiRequest,
  YapiGetV1PerpetualTradePairListData,
} from '@/typings/yapi/PerpetualTradePairListV1GetApi'
import { quoteVolumneTableSorter, sortBy24QuoteVolume } from '@/constants/market/market-list'
import { ColumnSort } from '@tanstack/react-table'

/**
 * 用于行情 - 现货的币对列表
 */
export default function useWsMarketTradePair({
  apiParams,
  sorter = quoteVolumneTableSorter,
}: {
  apiParams: YapiGetV1TradePairListApiRequestWithPagination
  sorter?: ColumnSort
}) {
  const [apiData, setApiData] = useSafeState<YapiGetV1TradePairListData[]>([])
  const resolvedData = useWsSpotMarketTradePairFullAmount({ apiData })

  const apiPreValidation = () => {
    // 行情模块暂时没有返回所有数据的需求
    if (isEmpty(apiParams)) return false
    if (
      apiParams.buyCoinId === SpotMarketBaseCurrenyEnum.favorites ||
      apiParams.buyCoinId === SpotMarketSectorCategoryEnum.total
    )
      return false

    if (
      apiParams.conceptId === SpotMarketSectorCategoryEnum.total ||
      apiParams.conceptId === SpotMarketBaseCurrenyEnum.favorites
    ) {
      apiParams.conceptId = ''
    }

    apiParams = omitBy(apiParams || {}, x => !x)

    return true
  }

  const apiRequest = (resolve, reject) => {
    getTradePairList(apiParams).then(res => {
      if (res.isOk) {
        const data = res?.data?.list || []
        return resolve(sortByHelper(data, sorter))
      }

      return reject()
    })
  }

  const { refreshCallback: refresh, apiStatus } = useReqeustMarketHelper({
    apiRequest,
    setApiData,
    apiPreValidation,
    deps: [apiParams.buyCoinId, apiParams.conceptId],
    cacheKey: swrKeyMarketSpotTradePairListByCurrencyAndCategory,
  })

  return { resolvedData, setApiData, refresh, apiStatus }
}

export function useWsMarketFuturesTradePair({
  apiParams,
  sorter = quoteVolumneTableSorter,
}: {
  apiParams: Partial<YapiGetV1PerpetualTradePairListApiRequest>
  sorter: ColumnSort
}) {
  const [apiData, setApiData] = useSafeState<YapiGetV1PerpetualTradePairListData[]>([])
  const resolvedData = useWsFuturesMarketTradePairFullAmount({ apiData })

  const apiPreValidation = () => {
    if (apiParams.buyCoin === SpotMarketBaseCurrenyEnum.favorites) return false
    if (apiParams.buyCoin === SpotMarketSectorCategoryEnum.total) apiParams.buyCoin = ''
    apiParams = omitBy(apiParams || {}, x => !x)

    return true
  }
  const apiRequest = (resolve, reject) => {
    getV1PerpetualTradePairListApiRequest(apiParams).then(res => {
      if (res.isOk) {
        const data = res?.data?.list || []
        return resolve(sortByHelper(data, sorter))
      }
      return reject()
    })
  }

  const { refreshCallback: refresh, apiStatus } = useReqeustMarketHelper({
    apiRequest,
    setApiData,
    apiPreValidation,
    deps: [apiParams.buyCoin, apiParams.typeInd, apiParams.conceptId],
    cacheKey: swrKeyMarketFuturesTradePairListByBaseCurrenty,
  })

  return { resolvedData, setApiData, refresh, apiStatus }
}

/**
 * 用于行情 - 板块的现货币对列表
 */
export function useWsMarketSectorTradePairListWithSymbolInfo({
  apiParams,
}: {
  apiParams: YapiGetV1TradePairListApiRequestWithPagination
}) {
  const [apiData, setApiData] = useSafeState<
    (YapiGetV1TradePairListData & YapiGetV1CoinQueryCoinPageListCoinListData)[]
  >([])
  const resolvedData = useWsSpotMarketTradePairFullAmount({ apiData })
  const symbolInfo = useApiAllCoinSymbolInfo()

  // apiParams = omitBy(apiParams || {}, x => !x)

  const apiRequest = (resolve, reject) => {
    getTradePairList(apiParams).then(res => {
      if (res.isOk) {
        const data = mergeTradePairWithSymbolInfo((res.data?.list || []) as any, symbolInfo)

        return resolve(sortBy24QuoteVolume(data))
      }
      return reject()
    })
  }

  const { refreshCallback: refresh, apiStatus } = useReqeustMarketHelper({
    apiRequest,
    setApiData,
    deps: [apiParams.conceptId, symbolInfo],
  })

  return { resolvedData, setApiData, refresh, apiStatus }
}

/**
 * 用于行情 - 板块的 Futures 币对列表
 */
export function useWsFuturesMarketSectorTradePairListWithSymbolInfo({
  apiParams,
}: {
  apiParams: YapiGetV1PerpetualTradePairListApiRequest
}) {
  const [apiData, setApiData] = useSafeState<
    (YapiGetV1TradePairListData & YapiGetV1CoinQueryCoinPageListCoinListData)[]
  >([])
  const resolvedData = useWsFuturesMarketTradePairFullAmount({ apiData })
  const symbolInfo = useApiAllCoinSymbolInfo()

  // apiParams = omitBy(apiParams || {}, x => !x)

  const apiRequest = (resolve, reject) => {
    getV1PerpetualTradePairListApiRequest(apiParams).then(res => {
      if (res.isOk) {
        const data = mergeTradePairWithSymbolInfo((res.data?.list || []) as any, symbolInfo)
        return resolve(sortBy24QuoteVolume(data))
      }
      return reject()
    })
  }

  const { refreshCallback: refresh, apiStatus } = useReqeustMarketHelper({
    apiRequest,
    setApiData,
    deps: [apiParams.conceptId, symbolInfo],
  })

  return { resolvedData, setApiData, refresh, apiStatus }
}
