import { getTradePairList } from '@/apis/market/market-list'
import { clearCache, useMount, useRequest } from 'ahooks'
import { swrKeyMarketSpotAllTradePairs } from '@/helper/cache'
import { useMarketStore } from '@/store/market'
import { ahookRequestSWRConfig } from '@/constants/market'
import useReqeustMarketHelper from '@/hooks/features/market/common/use-request-market'
import { useContractMarketStore } from '@/store/market/contract'
import { getV1PerpetualTradePairListApiRequest } from '@/apis/market/futures'

const mockAlTradePairs = [
  {
    amountOffset: '',
    baseSymbolName: 'BTC',
    buyCoinId: 3,
    chg: '1.84',
    conceptId: 7,
    conceptName: 'NFT',
    favourite: 0,
    high: '19508.52',
    id: 5,
    last: '19484.43',
    low: '19470.00',
    maxAmount: 0,
    maxCount: 0,
    minAmount: 0,
    minCount: 0,
    open: '19504.08',
    priceOffset: '',
    quoteSymbolName: 'USDT',
    quoteVolume: '41127800',
    sellCoinId: 2,
    sort: 0,
    symbolName: 'BTCUSDT',
    symbolWassName: 'BTC_USDT_1',
    time: 1665481080000,
    tradeArea: 0,
    volume: '212.78',
  },
]

/**
 * 所有币对信息
 *
 */
export default function useApiAllMarketTradePair(isForceUpdate = false) {
  const store = useMarketStore()

  const { loading, run } = useRequest(
    async () => {
      getTradePairList({}).then(res => {
        if (!res.isOk || !res.data?.list) return
        store.updateAllTradePairs(res.data.list || [])
      })
    },
    {
      ...ahookRequestSWRConfig,
      cacheKey: swrKeyMarketSpotAllTradePairs,
    }
  )

  useMount(() => {
    if (isForceUpdate) clearCache(swrKeyMarketSpotAllTradePairs)
    run()
  })

  return { loading, data: store.allTradePairs }
}

/**
 * 所有合约币对信息
 */
export function useApiAllMarketFuturesTradePair() {
  const store = useContractMarketStore()

  const { refreshCallback, apiStatus } = useReqeustMarketHelper({
    apiRequest: (resolve, reject) => {
      getV1PerpetualTradePairListApiRequest({} as any).then(res => {
        if (res.isOk && res.data?.list) return resolve(res.data?.list)
        return reject()
      })
    },
    setApiData: store.updateAllTradePairs,
  })

  return { apiStatus, data: store.allTradePairs, refreshCallback }
}
