import { getAllCoinSymbolInfoList } from '@/apis/market'
import { clearCache, useMount, useRequest } from 'ahooks'
import { useMarketStore } from '@/store/market'
import { swrKeyMarketSpotAllCoinSymbolBasicInfo, swrKeyMarketSpotAllTradePairs } from '@/helper/cache'
import { ahookRequestSWRConfig } from '@/constants/market'
import { getV1PerpetualTradePairListApiRequest } from '@/apis/market/futures'
import useReqeustMarketHelper from '@/hooks/features/market/common/use-request-market'
import { useContractMarketStore } from '@/store/market/contract'

/**
 * 所有币种的基本信息
 */
export default function useApiAllCoinSymbolInfo(isForceUpdate = false) {
  const store = useMarketStore()

  const { run } = useRequest(
    async () => {
      getAllCoinSymbolInfoList({}).then(res => {
        if (!res.isOk || !res.data?.coinList) return
        store.udpateAllCoinSymbolInfo(res.data.coinList || [])
      })
    },
    {
      cacheKey: swrKeyMarketSpotAllCoinSymbolBasicInfo,
      ...ahookRequestSWRConfig,
    }
  )

  useMount(() => {
    if (isForceUpdate) clearCache(swrKeyMarketSpotAllTradePairs)
    run()
  })

  return store.allCoinSymbolInfo
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
