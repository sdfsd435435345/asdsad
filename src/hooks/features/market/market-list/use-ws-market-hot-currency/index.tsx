import { getHotCurrencies } from '@/apis/market/market-list'
import { mergeTradePairWithSymbolInfo } from '@/helper/market/market-list'
import { TradePairWithCoinInfoType } from '@/typings/api/market/market-list'
import { useSafeState } from 'ahooks'
import useReqeustMarketHelper from '@/hooks/features/market/common/use-request-market'
import {
  useWsFuturesMarketTradePairFullAmount,
  useWsSpotMarketTradePairFullAmount,
} from '@/hooks/features/market/common/market-ws/use-ws-market-trade-pair-full-amount'
import { getV1PerpetualTradePairHotApiRequest } from '@/apis/market/futures'
import useApiAllCoinSymbolInfo from '../../common/use-api-all-coin-symbol-info/index'

function useWsMarketHotCurrency(contextApiReq, contextWs) {
  const [apiData, setApiData] = useSafeState<TradePairWithCoinInfoType[]>([])
  const resolvedData = contextWs({ apiData })
  const allCoinSymbolInfo = useApiAllCoinSymbolInfo()

  const { apiStatus, refreshCallback } = useReqeustMarketHelper({
    apiRequest: (resolve, reject) => {
      contextApiReq({}).then(res => {
        if (res.isOk) {
          const mergedList = mergeTradePairWithSymbolInfo(res.data?.list || [], allCoinSymbolInfo)
          return resolve(mergedList)
        }

        return reject()
      })
    },
    setApiData,
    deps: [allCoinSymbolInfo],
  })

  return { resolvedData, apiStatus, refreshCallback, setApiData }
}

export const useWsSpotMarketHotCurrency = () =>
  useWsMarketHotCurrency(getHotCurrencies, useWsSpotMarketTradePairFullAmount)
export const useWsFuturesMarketHotCurrency = () =>
  useWsMarketHotCurrency(getV1PerpetualTradePairHotApiRequest, useWsFuturesMarketTradePairFullAmount)
