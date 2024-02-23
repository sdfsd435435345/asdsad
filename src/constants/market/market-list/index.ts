import {
  getV1PerpetualTradePairDefaultApiRequest,
  getV1PerpetualTradePairDefaultQuoteCoinApiRequest,
} from '@/apis/market/market-list'
import { tableSortHelper } from '@/helper/market/market-list'
import { baseContractMarketStore } from '@/store/market/contract'
import { YapiGetV1PerpetualTradePairDetailData } from '@/typings/yapi/PerpetualTradePairDetailV1GetApi'
import { ColumnSort } from '@tanstack/react-table'

/**
 * marketModule 下的子模块
 */
export enum MarketSubModuleEnum {
  marketSpotModule = 'marketSpotModuleState',
  marketFuturesModule = 'marketFuturesModuleState',
}

export enum ApiStatusEnum {
  default = 'default',
  fetching = 'fetching',
  succeed = 'succeed',
  failed = 'failed',
}

export const quoteVolumneTableSorter: ColumnSort = {
  desc: true,
  id: 'quoteVolume',
}

export const chgTableSorter: ColumnSort = {
  desc: true,
  id: 'chg',
}

export const sortBy24QuoteVolume = (data: any[]) => {
  const res = data.slice().sort((a, b) => tableSortHelper.common(quoteVolumneTableSorter, a, b))
  return res
}

export const getFuturesDefaultTradePair = () => {
  const store = baseContractMarketStore.getState()
  const currentCoin = store.currentCoin

  // 获取合约默认币对
  getV1PerpetualTradePairDefaultApiRequest({}).then(res => {
    if (res.isOk && (res.data as any)?.symbolName) {
      const data = res.data as YapiGetV1PerpetualTradePairDetailData
      store.updateDefaultCoin(data)
      // store.updateCurrentCoin({ ...currentCoin, ...data })
    }
  })

  // 获取商户的合约默认法币
  getV1PerpetualTradePairDefaultQuoteCoinApiRequest({}).then(res => {
    if (res.isOk && res.data) {
      const data = res.data as string
      store.updateContractCurrencyType(data)
    }
  })
}
