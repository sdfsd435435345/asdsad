import { getMarketTicker } from '@/apis/market'
import { useMarketStore, baseMarketStore } from '@/store/market'
import {
  YapiGetV1TradePairDetailData as ISpotCoin,
  YapiGetV1TradePairDetailData,
} from '@/typings/yapi/TradePairDetailV1GetApi'
import { useRequest } from 'ahooks'
import ws from '@/plugins/ws'
import { useEffect, useState } from 'react'
import { WSThrottleTypeEnum } from '@/plugins/ws/constants'
import { WsBizEnum, WsThrottleTimeEnum, WsTypesEnum } from '@/constants/ws'
import { requestWithLoading } from '@/helper/order'
import { useContractMarketStore } from '@/store/market/contract'
import { getFutureTradePairDetail } from '@/apis/market/future'
import { PerpetualIndexPrice } from '@/plugins/ws/protobuf/ts/proto/PerpetualIndexPrice'
import { YapiGetV1PerpetualTradePairDetailData } from '@/typings/yapi/PerpetualTradePairDetailV1GetApi'
import { Market_Body } from '@/plugins/ws/protobuf/ts/proto/Market'

const SpotCoinDetailCache = {} as Record<any, ISpotCoin | true>
const FutureCoinDetailCache = {} as Record<any, YapiGetV1PerpetualTradePairDetailData | true>
/** 获取币対详情并存储到 market store 中 */
export function useFetchMarketCurrentSpotCoin(symbol: string, manualFetch?: boolean, withLoading?: boolean) {
  const marketState = useMarketStore()

  const { runAsync: fetch, loading } = useRequest(
    async () => {
      if (!symbol) {
        return
      }
      // 避免组件会多次请求
      if (SpotCoinDetailCache[symbol] === true) {
        return
      }
      if (SpotCoinDetailCache[symbol]) {
        marketState.updateCurrentCoin(SpotCoinDetailCache[symbol])
        return
      }
      SpotCoinDetailCache[symbol] = true
      const promise = getMarketTicker({ symbol })
      const res = await (withLoading ? requestWithLoading(promise) : promise)
      if (!res.isOk || !res.data) {
        return
      }
      const { chg, id, quoteSymbolName, baseSymbolName } = res.data as YapiGetV1TradePairDetailData
      const coinDetail = {
        tradeId: id,
        change: chg,
        buySymbol: quoteSymbolName,
        sellSymbol: baseSymbolName,
        ...res.data,
      }
      marketState.updateCurrentCoin(coinDetail)
      Object.freeze(coinDetail)
      SpotCoinDetailCache[symbol] = coinDetail as any
    },
    {
      manual: true,
    }
  )

  useEffect(() => {
    if (manualFetch) {
      return
    }
    fetch()
  }, [symbol])

  return {
    loading,
    fetch,
    data: marketState.currentCoin,
  }
}
/** 获取指定交易对最新价格推送 */
export function useSpotCoinSubscribe({
  symbol,
  baseSymbolName,
  symbolWassName,
  quoteSymbolName,
  shouldSubscribe = true,
}: {
  symbol: string
  baseSymbolName: string
  symbolWassName: string
  quoteSymbolName: string
  /** 此参数用来解决某些需要不销毁组件但是又不想订阅 ws 的场景 */
  shouldSubscribe?: boolean
}) {
  const [changedData, setChangedData] = useState<Market_Body>({} as any)
  useEffect(() => {
    if (!shouldSubscribe) {
      return
    }
    const subs = {
      base: baseSymbolName,
      biz: WsBizEnum.spot,
      contractCode: symbolWassName,
      quote: quoteSymbolName,
      type: WsTypesEnum.market,
    }
    const callback = (res: Market_Body[]) => {
      if (res.length === 0) {
        return
      }
      const data = res[0]
      setChangedData({
        chg: Number(data.chg).toFixed(2),
        high: Number(data.high).toFixed(2),
        last: Number(data.last).toFixed(2),
        time: data.time,
        symbolWassName: data.symbolWassName,
        low: Number(data.low).toFixed(2),
        open: Number(data.open).toFixed(2),
        volume: Number(data.volume).toFixed(2),
        quoteVolume: Number(data.quoteVolume).toFixed(2),
      })
    }

    ws.subscribe({
      subs,
      callback,
      throttleType: WSThrottleTypeEnum.cover,
      throttleTime: WsThrottleTimeEnum.Market,
    })
    return () => {
      ws.unsubscribe({
        subs,
        callback,
      })
    }
  }, [baseSymbolName, quoteSymbolName, symbol, symbolWassName, shouldSubscribe])
  if (SpotCoinDetailCache[symbol] && changedData.symbolWassName === symbolWassName) {
    SpotCoinDetailCache[symbol] = {
      ...(SpotCoinDetailCache[symbol] as ISpotCoin),
      ...(changedData as any),
    }
  }

  return changedData
}
/** 获取合约交易对指数价格推送 */
export function useFutureCoinIndexPriceSubscribe({
  symbolWassName,
  shouldSubscribe = true,
}: {
  symbolWassName: string
  /** 此参数用来解决某些需要不销毁组件但是又不想订阅 ws 的场景 */
  shouldSubscribe?: boolean
}) {
  const [changedData, setChangedData] = useState<PerpetualIndexPrice>({} as any)
  useEffect(() => {
    if (!shouldSubscribe) {
      return
    }
    const subs = {
      biz: WsBizEnum.perpetual,
      contractCode: symbolWassName,
      type: WsTypesEnum.perpetualIndex,
    }
    const callback = (res: PerpetualIndexPrice[]) => {
      if (res.length === 0) {
        return
      }
      const data = res[0]
      setChangedData({
        indexPrice: Number(data.indexPrice).toFixed(2),
        markPrice: Number(data.markPrice).toFixed(2),
        time: data.time,
        assetFeeRate: data.assetFeeRate,
        symbolWassName,
      })
    }

    ws.subscribe({
      subs,
      callback,
      throttleType: WSThrottleTypeEnum.cover,
      throttleTime: WsThrottleTimeEnum.Market,
    })
    return () => {
      ws.unsubscribe({
        subs,
        callback,
      })
    }
  }, [symbolWassName, shouldSubscribe])

  return changedData
}
/** 获取合约交易对最新价格推送 */
export function useFutureCoinSubscribe({
  symbol,
  symbolWassName,
  shouldSubscribe = true,
}: {
  symbol: string
  symbolWassName: string
  /** 此参数用来解决某些需要不销毁组件但是又不想订阅 ws 的场景 */
  shouldSubscribe?: boolean
}) {
  const [changedData, setChangedData] = useState<Market_Body>({} as any)
  useEffect(() => {
    if (!shouldSubscribe) {
      return
    }
    const subs = {
      biz: WsBizEnum.perpetual,
      contractCode: symbolWassName,
      type: WsTypesEnum.perpetualMarket,
    }
    const callback = (res: Market_Body[]) => {
      if (res.length === 0) {
        return
      }
      const data = res[0]
      setChangedData({
        chg: Number(data.chg).toFixed(2),
        high: Number(data.high).toFixed(2),
        last: Number(data.last).toFixed(2),
        time: data.time,
        symbolWassName: data.symbolWassName,
        low: Number(data.low).toFixed(2),
        open: Number(data.open).toFixed(2),
        volume: Number(data.volume).toFixed(2),
        quoteVolume: Number(data.quoteVolume).toFixed(2),
      })
    }

    ws.subscribe({
      subs,
      callback,
      throttleType: WSThrottleTypeEnum.cover,
      throttleTime: WsThrottleTimeEnum.Market,
    })
    return () => {
      ws.unsubscribe({
        subs,
        callback,
      })
    }
  }, [symbolWassName, shouldSubscribe])
  if (FutureCoinDetailCache[symbol] && changedData.symbolWassName === symbolWassName) {
    FutureCoinDetailCache[symbol] = {
      ...(FutureCoinDetailCache[symbol] as YapiGetV1PerpetualTradePairDetailData),
      ...(changedData as any),
    }
  }

  return changedData
}
/** 获取合约币対详情并存储到 market store 中 */
export function useFetchMarketCurrentFutureCoin(symbol: string, manualFetch?: boolean, withLoading?: boolean) {
  const marketState = useContractMarketStore()
  const { runAsync: fetch, loading } = useRequest(
    async () => {
      if (!symbol) {
        return
      }
      // 避免组件会多次请求
      if (FutureCoinDetailCache[symbol] === true) {
        return
      }
      if (FutureCoinDetailCache[symbol]) {
        marketState.updateCurrentCoin(SpotCoinDetailCache[symbol])
        return
      }
      FutureCoinDetailCache[symbol] = true
      const promise = getFutureTradePairDetail({ symbol })
      const res = await (withLoading ? requestWithLoading(promise) : promise)
      if (!res.isOk || !res.data) {
        return
      }
      const { chg, id, quoteSymbolName, baseSymbolName } = res.data
      const coinDetail = {
        ...marketState.currentCoin,
        tradeId: id,
        change: chg,
        buySymbol: quoteSymbolName,
        sellSymbol: baseSymbolName,
        ...res.data,
      }
      marketState.updateCurrentCoin(coinDetail)
      SpotCoinDetailCache[symbol] = coinDetail as any
    },
    {
      manual: true,
    }
  )

  useEffect(() => {
    if (manualFetch) {
      return
    }
    fetch()
  }, [symbol])

  return {
    loading,
    fetch,
    data: marketState.currentCoin,
  }
}
