/**
 * 资产总览
 */

import { getC2CList, getV1C2cBalanceAllApiRequest } from '@/apis/assets/c2c'
import { getCoinList, getCoinOverview } from '@/apis/assets/coin'
import { getAssetsOverview } from '@/apis/assets/common'
import {
  getAssetsFuturesAssetsList,
  getAssetsFuturesList,
  getAssetsFuturesOverview,
} from '@/apis/assets/futures/overview'
import { FuturesOverviewTabTypeEnum } from '@/constants/assets/futures'
import { baseAssetsStore } from '@/store/assets/spot'
import { t } from '@lingui/macro'
import { YapiGetV1C2cBalanceAllApiRequest } from '@/typings/yapi/C2cBalanceAllV1GetApi'
import { rateFilterFutures } from './spot'
import { getFuturesCurrencySettings } from './futures'
import { getBusinessName } from '../common'

/**
 * 根据合约组列表计算合约总览数据
 */
export const onTotalContractOverview = (type: string, list) => {
  let total = 0
  if (!type || !list || list.length === 0) {
    return `${total}`
  }
  for (let index = 0; index < list.length; index += 1) {
    const element = list[index]
    total += Number(element[type]) || 0
  }
  return `${total}`
}

/**
 * 资产总览 - 查询总览总资产
 */
export const onGetAssetsOverview = async () => {
  const { assetsModule } = baseAssetsStore.getState()

  const res = await getAssetsOverview({})
  const { isOk, data } = res || {}
  if (!isOk || !data) return

  assetsModule.updateAssetsModule({ assetsData: data })

  return data
}

/**
 * 资产总览 - 查询币种资产
 */
export const onGetCoinOverview = async () => {
  const { assetsModule } = baseAssetsStore.getState()
  const res = await getCoinOverview({})
  const { isOk, data } = res || {}

  if (!isOk || !data) return
  assetsModule.updateAssetsModule({ coinAssets: data })
}

/**
 * 资产总览 - 获取资产币种列表
 */
export const onGetAssetsCoinList = async (sort = false) => {
  const { assetsModule } = baseAssetsStore.getState()

  const res = await getCoinList({
    pageNum: 1,
    pageSize: 0,
  })
  const { isOk, data } = res || {}
  const { list = [] } = data || {}

  if (!isOk || !data) return

  const newList = sort
    ? (list &&
        list.sort(function (a, b) {
          return (b.usdBalance as unknown as number) - (a.usdBalance as unknown as number)
        })) ||
      []
    : list || []

  assetsModule.updateAssetsModule({ coinAssetsList: newList })
}

/**
 * 资产总览 - 查询合约资产列表
 */
export const onGetContractAssetsList = async () => {
  const { assetsModule } = baseAssetsStore.getState()
  const res = await getAssetsFuturesAssetsList({})

  const { isOk, data } = res || {}
  if (!isOk || !data) return

  assetsModule.updateAssetsModule({
    futuresAssetsMarginList: data?.list,
  })
}

/**
 * 资产总览 - 查询合约逐仓列表
 */
export const onGetContractList = async () => {
  const { assetsModule } = baseAssetsStore.getState()
  const res = await getAssetsFuturesList({})

  const { isOk, data } = res || {}
  if (!isOk || !data) return []

  assetsModule.updateAssetsModule({
    futuresAssetsList: data?.list,
  })

  return data?.list
}

/**
 * 资产总览 - 查询合约资产/合约逐仓列表
 * @param isPolling  是否需要轮询
 */
export const onGetContractOverview = async (isPolling = false) => {
  const { assetsModule } = baseAssetsStore.getState()

  let newFuturesAssets =
    isPolling && assetsModule.futuresAssets?.baseCoin
      ? { ...assetsModule.futuresAssets }
      : await (async () => {
          const res = await getAssetsFuturesOverview({})
          const { isOk = false, data } = res || {}
          if (!isOk || !data) return assetsModule.futuresAssets
          return { ...data }
        })()

  const newFutures = await onGetContractList()
  newFuturesAssets = {
    ...newFuturesAssets,
    totalPerpetualAsset: onTotalContractOverview('groupCoinAsset', newFutures),
    totalMarginCoinAvailable: onTotalContractOverview('marginCoinAvailable', newFutures),
    totalMarginAvailable: onTotalContractOverview('marginAvailable', newFutures),
    totalPositionAssets: onTotalContractOverview('positionAsset', newFutures),
    totalPositionCoinAsset: onTotalContractOverview('positionCoinAsset', newFutures),
    totalLockCoinAsset: onTotalContractOverview('lockCoinAsset', newFutures),
    totalLockMarginAsset: onTotalContractOverview('lockMarginAsset', newFutures),
    totalUnrealizedProfit: onTotalContractOverview('unrealizedProfit', newFutures),
  }

  assetsModule.updateAssetsModule({
    futuresAssets: newFuturesAssets,
  })

  if (assetsModule.futuresActiveTab === FuturesOverviewTabTypeEnum.assets) onGetContractAssetsList()

  return newFuturesAssets
}

/**
 * 资产总览 - 查询 c2c 资产列表
 */
export const onGetC2cAssetsList = async () => {
  const { assetsModule } = baseAssetsStore.getState()
  const res = await getC2CList({})
  const { isOk, data } = res || {}

  if (!isOk || !data) return
  assetsModule.updateAssetsModule({ c2cAssetsList: data })
}

/**
 * 资产总览 - 查询 c2c 资产列表 all
 */
export const onGetC2cAssetsListAll = async (params: YapiGetV1C2cBalanceAllApiRequest) => {
  const { assetsModule } = baseAssetsStore.getState()
  const res = await getV1C2cBalanceAllApiRequest(params)
  const { isOk, data } = res || {}
  const { list = [] } = data || {}

  if (!isOk || !data) return
  assetsModule.updateAssetsModule({ c2cAssetsListAll: list })
}

/**
 * 资产总览 - 获取折算成商户设置法币的总资产
 */
export const onGetMyTotalAssets = async () => {
  const { assetsModule } = baseAssetsStore.getState()
  assetsModule.fetchCoinRate()
  const res = await onGetAssetsOverview()
  const settings = await getFuturesCurrencySettings()

  const { totalAmount, symbol } = res || {}
  if (!totalAmount || !symbol) return '--'

  const newTotalAmount = rateFilterFutures({
    amount: totalAmount,
    symbol,
    calcSymbol: settings?.currencySymbol,
    showUnit: false,
    isFormat: false,
  })
  return newTotalAmount
}

export function getAssetsDefaultSeoMeta(pageTitle?: string) {
  const values = {
    businessName: getBusinessName(),
  }

  return {
    title: pageTitle,
    description: t({
      id: `constants_seo_i467vaqbwg`,
      values,
    }),
  }
}

export function getMarketDefaultSeoMeta(pageTitle?: string) {
  const values = {
    businessName: getBusinessName(),
  }

  return {
    title: pageTitle,
    description: t({
      id: `modules_market_activity_index_page_umxmniyicf`,
      values,
    }),
  }
}
