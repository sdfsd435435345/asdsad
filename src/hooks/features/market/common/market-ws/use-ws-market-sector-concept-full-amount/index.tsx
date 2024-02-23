import { mergeMarketSectorConceptListById } from '@/helper/market/market-list'
import { wsSpotMarketSectorConceptList } from '@/helper/market/market-list/market-ws'
import ws from '@/plugins/ws'
import { ConceptPrice_Body } from '@/plugins/ws/protobuf/ts/proto/ConceptPrice'
import { useSafeState, useUpdateEffect } from 'ahooks'
import { isEmpty } from 'lodash'
import { useEffect } from 'react'
import { useWsSingleSubByBizId } from '../use-ws-sub'

const getWsSectorBySub = (subscription, ws) => {
  return ({ apiData }: { apiData: any[] | null }) => {
    const wsData = useWsSingleSubByBizId({ apiData, sub: subscription, ws }) as ConceptPrice_Body[]
    const [resolvedData, setResolvedData] = useSafeState<any>(apiData || [])

    useEffect(() => {
      setResolvedData(apiData || [])
    }, [apiData])

    useUpdateEffect(() => {
      if (isEmpty(wsData)) return
      setResolvedData((mergeMarketSectorConceptListById(resolvedData, wsData || []) || []) as any)
    }, [wsData])

    return [resolvedData, setResolvedData]
  }
}

/**
 * 行情板块列表信息的全量订阅，按照后端的推送速度（2s）来订阅
 */
const useWsSpotMarketSectorConceptFullAmount = getWsSectorBySub(wsSpotMarketSectorConceptList, ws)

export { useWsSpotMarketSectorConceptFullAmount }
