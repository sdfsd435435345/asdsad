import { getMarketSectorList } from '@/apis/market/market-sector'
import {
  YapiGetV1ConceptConceptPriceListApiRequest,
  YapiGetV1ConceptConceptPriceListData,
} from '@/typings/yapi/ConceptConceptPriceListV1GetApi'
import { useSafeState } from 'ahooks'
import useReqeustMarketHelper from '@/hooks/features/market/common/use-request-market'
import { sortByHelper } from '@/helper/market/market-list'
import { swrKeyMarketSpotSectorConceptPriceList } from '@/helper/cache'
import { useWsSpotMarketSectorConceptFullAmount } from '@/hooks/features/market/common/market-ws/use-ws-market-sector-concept-full-amount'
import { chgTableSorter } from '@/constants/market/market-list'

export default function useWsMarketSectorAllConceptList({
  apiParams,
}: {
  apiParams: YapiGetV1ConceptConceptPriceListApiRequest
}) {
  const [apiData, setApiData] = useSafeState<YapiGetV1ConceptConceptPriceListData[] | null>(null)
  const [resolvedData, setResolvedData] = useWsSpotMarketSectorConceptFullAmount({ apiData }) || []

  const { refreshCallback: refresh, apiStatus } = useReqeustMarketHelper({
    setApiData,
    cacheKey: swrKeyMarketSpotSectorConceptPriceList,
    apiRequest: (resolve, reject) => {
      getMarketSectorList(apiParams).then(res => {
        if (res.isOk) {
          return resolve(sortByHelper(res.data || [], chgTableSorter))
        }
        reject()
      })
    },
  })

  return { resolvedData, setResolvedData, apiStatus, refresh, apiData }
}
