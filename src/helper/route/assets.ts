import { AssetsWithdrawTypeEnum } from '@/constants/assets'
import { AssetsTransferTypeEnum } from '@/constants/assets/common'

/**
 * 资产 - 提币
 * @param type 提币类型 AssetsWithdrawTypeEnum.platform 站内 AssetsWithdrawTypeEnum.blockchain 站外
 * @param address 提币地址
 * @param symbol 币种名称
 * @param count 数量
 * @param withdrawNet 主网地址
 */
export function getAssetsWithdrawPageRoutePath(params) {
  const {
    type = AssetsWithdrawTypeEnum.blockchain,
    symbol = '',
    withdrawNet = '',
    address = '',
    count = '',
  } = params || {}
  let url = `/assets/withdraw?type=${type}`
  if (symbol) url += `&symbol=${symbol}`
  if (withdrawNet) url += `&symbol=${withdrawNet}`
  if (address) url += `&symbol=${address}`
  if (count) url += `&symbol=${count}`

  return url
}
/**
 * 资产 - 提币
 */
export function getAssetsDefaultWithdrawPageRoutePath() {
  let url = `/assets/withdraw`
  return url
}

/**
 * 资产 - 充币
 * @param id 币种 coinId
 */
export function getAssetsRechargePageRoutePath(id?: string) {
  let url = `/assets/recharge?`
  if (id) url += `&id=${id}`
  return url
}

/**
 * 资产 - 首页
 * @param type 资产 tab 类型 AssetsRouteEnum
 */
export function getAssetsPageRoutePath(type?: number) {
  return '/'
}
/**
 * 资产 - 财务记录
 * @param logType 财务记录 tab 类型 AssetsRecordTypeEnum
 * @param type 财务记录类型 AssetsRouteEnum
 */
export function getAssetsHistoryPageRoutePath(logType?: number, type?: number) {
  return `/assets/financial-record`
}

/**
 * 资产 - 财务记录
 * @param logType 财务记录 tab 类型 AssetsRecordTypeEnum
 * @param type 财务记录类型 AssetsRouteEnum
 */
export function getFastPayAssetsHistoryPageRoutePath(logType?: number, type?: number) {
  let url = `/assets/financial-records`
  if (logType) url += `?logType=${logType}`
  if (type) url += `&type=${type}`

  return url
}

/**
 * 资产 - 财务记录详情
 * @param id 财务记录 ID
 * @param type 财务记录类型
 * @param page 来源页面类型 AssetsHistoryPageTypeEnum
 */
export function getAssetsHistoryDetailPageRoutePath({
  id,
  type,
  page,
  amount,
}: {
  id: string
  type?: number
  page?: string
  amount?: string
}) {
  let url = `/assets/financial-record/detail`
  if (id) url += `?id=${id}`
  if (type) url += `&type=${type}`
  if (page) url += `&page=${page}`
  if (amount) url += `&amount=${amount}`

  return url
}

/**
 * 资产 - 财务记录详情
 * @param id 财务记录 ID
 * @param type 财务记录类型
 * @param page 来源页面类型 AssetsHistoryPageTypeEnum
 */
export function getFastPayAssetsHistoryDetailPageRoutePath({
  id,
  type,
  page,
  amount,
}: {
  id: string
  type?: number
  page?: string
  amount?: string
}) {
  let url = `/assets/financial-records/detail`
  if (id) url += `?id=${id}`
  if (type) url += `&type=${type}`
  if (page) url += `&page=${page}`
  if (amount) url += `&amount=${amount}`

  return url
}

/**
 * 资产 - 币种详情
 * @param id 币种 coinId
 */
export function getAssetsCoinDetailPageRoutePath(id: string) {
  return `/assets/coin-details?id=${id}`
}

/**
 * 资产 - 开通合约账户
 */
export function getAssetsOpenFuturesAccountPageRoutePath() {
  return `/assets/open/futures/account`
}

/**
 * 资产 - 合约详情
 * @param id 合约 id
 * @param length 合约列表长度
 */
export function getAssetsFuturesDetailPageRoutePath(id: string) {
  return `/assets/futures/details/${id}`
}

/**
 * 资产 - 合约资金划转
 * @param id 逐仓 ID
 * @param type 划转类型 AssetsTransferTypeEnum
 * @param symbol 币种代码
 * @param coinId 币种 ID
 */
export function getAssetsFuturesTransferPageRoutePath({
  groupId = '',
  type = AssetsTransferTypeEnum.to,
  coinId = '',
  symbol = '',
}: {
  groupId: string
  type?: string
  coinId?: string
  symbol?: string
}) {
  let url = `/assets/futures/transfer?groupId=${groupId}&type=${type}`
  if (coinId) url += `&coinId=${coinId}`
  if (symbol) url += `&symbol=${symbol}`

  return url
}
