import request, { MarkcoinRequest } from '@/plugins/request'
import {
  ICreateFutureNormalOrderReq,
  ICreateFuturePlanOrderReq,
  ICreateSpotNormalOrderReq,
  ICreateSpotPlanOrderReq,
  IOpenFutureReq,
  IQueryCloseCoinsResp,
  IQueryMarginCoinsResp,
  IQueryTradeNotificationsReq,
  IQueryTradeNotificationsResp,
  WithdrawsFeeListReq,
  WithdrawsFeeListResp,
} from '@/typings/api/trade'

/**
 * 现货普通下单，包括市价和限价
 * https://yapi.admin-devops.com/project/44/interface/api/2666
 */
export const createSpotNormalOrder: MarkcoinRequest<ICreateSpotNormalOrderReq> = data => {
  return request({
    path: `/v1/orders/place`,
    method: 'POST',
    data,
    signature: true,
  })
}
/**
 * 现货计划下单
 * https://yapi.admin-devops.com/project/44/interface/api/2666
 */
export const createSpotPlanOrder: MarkcoinRequest<ICreateSpotPlanOrderReq> = data => {
  return request({
    path: `/v1/spl/saveStrategy`,
    method: 'POST',
    data,
    signature: true,
  })
}

/**
 * 开通合约交易
 */
export const enableFutureTrade: MarkcoinRequest = params => {
  return request({
    path: `/trade/future/open`,
    method: 'POST',
    data: params,
    signature: true,
    contentType: 1,
  })
}

/**
 * 获取所有可用保证金币种
 */
export const queryAllMarginCoins: MarkcoinRequest<any, IQueryMarginCoinsResp> = params => {
  return request({
    path: `/trade/future/margin/coins`,
    method: 'GET',
    params,
  })
}
/**
 * 设置保证金币种
 */
export const setMarginCoins: MarkcoinRequest<{ ids: string[] }> = data => {
  return request({
    path: `/trade/future/margin/coins`,
    method: 'POST',
    data,
  })
}
/**
 * 获取所有可用平仓结算币种
 */
export const queryCloseCoins: MarkcoinRequest<any, IQueryCloseCoinsResp> = params => {
  return request({
    path: `/trade/future/margin/settled/coins`,
    method: 'GET',
    params,
  })
}
/**
 * 设置平仓结算币种
 */
export const setCloseCoin: MarkcoinRequest<{ id: string }> = data => {
  return request({
    path: `/trade/future/margin/settled/coin`,
    method: 'POST',
    data,
  })
}
/**
 * 设置合约交易版本
 */
export const setFutureTradeVersion: MarkcoinRequest<{ version: string }> = data => {
  return request({
    path: `/trade/future/version`,
    method: 'POST',
    data,
  })
}

/**
 * 订阅币种上线通知
 * https://yapi.admin-devops.com/project/44/interface/api/2992
 */
export const subscribeSpotCoin: MarkcoinRequest<{
  tradeId: number
}> = data => {
  return request({
    path: `/v1/tradePair/subscribe`,
    method: 'POST',
    data,
  })
}

/**
 * 获取交易通知列表
 * https://yapi.admin-devops.com/project/44/interface/api/3002
 */
export const queryTradeNotifications: MarkcoinRequest<
  IQueryTradeNotificationsReq,
  IQueryTradeNotificationsResp
> = data => {
  return request({
    path: `/v1/helpCenter/horseLamp`,
    method: 'POST',
    data,
  })
}

/**
 * 获取最新交易数据
 */
export const getMarketTrades: MarkcoinRequest<{
  limit: number
  symbol: string
}> = params => {
  return request({
    path: `/v1/market/trades`,
    method: 'GET',
    params,
  })
}

/**
 * 手续费 - 提现列表
 */
export const getWithdrawsFeeList: MarkcoinRequest<WithdrawsFeeListReq, WithdrawsFeeListResp> = params => {
  return request({
    path: `/v1/asset/withdraw/getWithdraws`,
    method: 'GET',
    params,
  })
}

/**
 * 查询设置用户保证金币种信息
 */
export const getAssetsMarginInfo: MarkcoinRequest = () => {
  return request({
    path: '/v1/perpetual/assetsMargin/settings/info',
    method: 'GET',
  })
}

/**
 * 提交用户保证金币种信息设置
 */
export const setAssetsMarginInfo: MarkcoinRequest = data => {
  return request({
    path: 'v1/perpetual/assetsMargin/settings',
    method: 'POST',
    data,
  })
}

/**
 * 查询个人合约偏好设置
 */
export const getPersonalPreference: MarkcoinRequest = () => {
  return request({
    path: `/v1/perpetual/preference`,
    method: 'GET',
  })
}

/**
 * 个人偏好设置
 */
export const setUserAutoMarginInfo: MarkcoinRequest = data => {
  return request({
    path: `/v1/perpetual/preference/settings`,
    method: 'POST',
    data,
  })
}

/**
 * 查询用户平仓结算币种设置
 */
export const getMemberClearingCoin: MarkcoinRequest = () => {
  return request({
    path: `/v1/perpetual/clearingCoin`,
    method: 'GET',
  })
}

/**
 * 查询平台平仓结算币种设置
 */
export const getPlatformClearingCoin: MarkcoinRequest = () => {
  return request({
    path: `/v1/perpetual/mer/clearingCoin`,
    method: 'GET',
  })
}

/**
 * 用户平仓结算币种设置
 */
export const postMemberContractClearingCoinSettings: MarkcoinRequest = options => {
  return request({
    path: `/v1/perpetual/clearingCoin/settings`,
    method: 'POST',
    data: {
      coinData: options.coinData, // 币种配置
    },
  })
}

/** 修改保证金来源_查询是否有普通委托挂单* */
export const hasOpenOrders: MarkcoinRequest = () => {
  return request({
    path: `/v1/perpetual/order/usr/existOpenOrder`,
    method: 'GET',
  })
}

/**
 * 用户自动追加保证金信息查询
 */
export const getUserAutoMarginInfo: MarkcoinRequest = () => {
  return request({
    path: `/v1/perpetual/autoMargin/settings/info`,
    method: 'GET',
  })
}

/**
 * 查询已设置自动追加保证金的合约组
 */
export const getUserAutoMarginGroup: MarkcoinRequest = () => {
  return request({
    path: `/v1/perpetual/group/autoMargin/all`,
    method: 'GET',
  })
}

/**
 * 查询已设置自动追加保证金的合约组
 */
export const setUserAutoMarginGroup: MarkcoinRequest = data => {
  return request({
    path: `/v1/perpetual/group/autoMargin/settings`,
    method: 'POST',
    data,
  })
}

/**
 * 合约组保证金币种
 */
export const marginCoinListPerpetual: MarkcoinRequest = () => {
  return request({
    path: `/v1/perpetual/assets/queryMarginCoinInfo`,
    method: 'GET',
  })
}

/**
 * 开通合约
 * https://yapi.nbttfc365.com/project/44/interface/api/3623
 */
export const postMemberOpenContract: MarkcoinRequest = options => {
  return request({
    path: `/v1/perpetual/open/perpetual`,
    method: 'POST',
    data: {
      assetsMarginData: options.assetsMarginData, // 保证金币种配置
      clearingCoinData: options.clearingCoinData, // 结算币种配置
      perpetualVersion: options.perpetualVersion, // 合约版本
    },
  })
}

/**
 * 合约普通下单，包括市价和限价、止盈止损
 * https://yapi.admin-devops.com/project/44/interface/api/3639
 */
export const createFutureNormalOrder: MarkcoinRequest<ICreateFutureNormalOrderReq> = data => {
  return request({
    path: `/v1/perpetual/orders/place`,
    method: 'POST',
    data,
    signature: true,
  })
}
/**
 * 合约计划下单，包括市价和限价、止盈止损
 * https://yapi.admin-devops.com/project/44/interface/api/3891
 */
export const createFuturePlanOrder: MarkcoinRequest<ICreateFuturePlanOrderReq> = data => {
  return request({
    path: `/v1/perpetual/plan/orders/place`,
    method: 'POST',
    data,
    signature: true,
  })
}
/**
 * 开通合约
 * https://yapi.admin-devops.com/project/44/interface/api/3623
 */
export const openFuture: MarkcoinRequest = data => {
  return request({
    path: `/v1/perpetual/open/perpetual`,
    method: 'POST',
    data,
  })
}

/**
 * 合约版本切换
 */
export const setContractVersionChange: MarkcoinRequest = data => {
  return request({
    path: `/v1/perpetual/version/switch`,
    method: 'POST',
    data,
  })
}

/**
 * 查询用户平台保证金币种设置
 */
export const getMerAssetsMargin: MarkcoinRequest = () => {
  return request({
    path: `/v1/perpetual/mer/assetsMargin`,
    method: 'GET',
  })
}

/**
 * 查询用户平台结算币种设置
 */
export const getMerClearingCoin: MarkcoinRequest = () => {
  return request({
    path: `/v1/perpetual/mer/assetsMargin`,
    method: 'GET',
  })
}

/**
 * 查询用户平台结算币种设置
 */
export const getGroupQueryAll: MarkcoinRequest = () => {
  return request({
    path: `/v1/perpetual/group/queryAll`,
    method: 'GET',
  })
}

/**
 * 自动追加保证金记录列表
 */
export const getAutoAddMarginRecord: MarkcoinRequest = params => {
  return request({
    path: `/v1/perpetual/log/autoAddMarginRecord`,
    method: 'GET',
    params,
  })
}

/**
 * 开通合约专业版阈值
 */
export const getSpecializeThreshold: MarkcoinRequest = () => {
  return request({
    path: `/v1/perpetual/specialize/perpetual/threshold`,
    method: 'GET',
  })
}
