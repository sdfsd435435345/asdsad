import request, { MarkcoinRequest } from '@/plugins/request'
import {
  FuturesAssetsListReq,
  FuturesAssetsListResp,
  FuturesAssetsReq,
  FuturesAssetsResp,
  FuturesDetailCoinListReq,
  FuturesDetailCoinListResp,
  FuturesDetailIsLiquidateReq,
  FuturesDetailIsLiquidateResp,
  FuturesDetailMarginListReq,
  FuturesDetailMarginListResp,
  FuturesDetailMarginScaleDetailReq,
  FuturesDetailMarginScaleDetailResp,
  FuturesDetailPositionFlashAllReq,
  FuturesDetailPositionFlashAllResp,
  FuturesDetailPositionListReq,
  FuturesDetailPositionListResp,
  FuturesDetailRechargeMarginReq,
  FuturesDetailRechargeMarginResp,
  FuturesDetailWithdrawMarginReq,
  FuturesDetailWithdrawMarginResp,
  FuturesGroupCancelOrderReq,
  FuturesGroupCancelOrderResp,
  FuturesGroupDetailReq,
  FuturesGroupDetailResp,
  FuturesGroupMergeReq,
  FuturesGroupMergeResp,
  FuturesListReq,
  FuturesListResp,
} from '@/typings/api/assets/futures'

/**
 * 资产 - 获取合约资产
 * @returns
 */
export const getAssetsFuturesOverview: MarkcoinRequest<FuturesAssetsReq, FuturesAssetsResp> = () => {
  return request({
    path: `/v1/perpetual/group/assets`,
    method: 'GET',
  })
}

/**
 * 资产 - 获取资产合约逐仓列表
 */
export const getAssetsFuturesList: MarkcoinRequest<FuturesListReq, FuturesListResp> = () => {
  return request({
    path: `/v1/perpetual/group/list`,
    method: 'GET',
  })
}

/**
 * 资产 - 获取合约资产列表
 */
export const getAssetsFuturesAssetsList: MarkcoinRequest<FuturesAssetsListReq, FuturesAssetsListResp> = () => {
  return request({
    path: `/v1/perpetual/assets/list`,
    method: 'GET',
  })
}

/**
 * 资产 - 获取合约组详情
 */
export const getFuturesGroupDetail: MarkcoinRequest<FuturesGroupDetailReq, FuturesGroupDetailResp> = params => {
  return request({
    path: `/v1/perpetual/group/detail`,
    method: 'GET',
    params,
  })
}

/**
 * 合约组详情 - 获取合约组保证金列表
 */
export const getPerpetualGroupMarginList: MarkcoinRequest<
  FuturesDetailMarginListReq,
  FuturesDetailMarginListResp
> = params => {
  return request({
    path: `/v1/perpetual/group/margin/list`,
    method: 'GET',
    params,
  })
}

/**
 * 合约组详情 - 获取合约组保证金提取币种列表
 */
export const getPerpetualGroupCoinList: MarkcoinRequest<
  FuturesDetailCoinListReq,
  FuturesDetailCoinListResp
> = params => {
  return request({
    path: `/v1/perpetual/group/coinInfo`,
    method: 'GET',
    params,
  })
}

/**
 * 合约组详情 - 获取合约组详情保证金充值币种列表
 */
export const getPerpetualGroupRechargeCoinList: MarkcoinRequest<
  FuturesDetailCoinListReq,
  FuturesDetailCoinListResp
> = () => {
  return request({
    path: `/v1/perpetual/group/assetsCoinInfo`,
    method: 'GET',
  })
}

/**
 * 合约组详情 - 合约组保证金提取
 */
export const postPerpetualGroupWithdrawMargin: MarkcoinRequest<
  FuturesDetailWithdrawMarginReq,
  FuturesDetailWithdrawMarginResp
> = data => {
  return request({
    path: `/v1/perpetual/group/coin/submit`,
    method: 'POST',
    data,
  })
}

/**
 * 合约组详情 - 合约组保证金充值
 */
export const postPerpetualGroupRechargeMargin: MarkcoinRequest<
  FuturesDetailRechargeMarginReq,
  FuturesDetailRechargeMarginResp
> = data => {
  return request({
    path: `/v1/perpetual/group/margin/deposit`,
    method: 'POST',
    data,
  })
}

/**
 * 合约组详情 - 持仓详情列表
 */
export const postPerpetualGroupPositionList: MarkcoinRequest<
  FuturesDetailPositionListReq,
  FuturesDetailPositionListResp
> = params => {
  return request({
    path: `/v1/perpetual/group/position`,
    method: 'GET',
    params,
  })
}

/**
 * 合约组详情 - 闪电平仓
 */
export const postPerpetualGroupPositionFlashAll: MarkcoinRequest<
  FuturesDetailPositionFlashAllReq,
  FuturesDetailPositionFlashAllResp
> = data => {
  return request({
    path: `/v1/perpetual/orders/position/flashAll`,
    method: 'POST',
    data,
  })
}

/**
 * 合约组详情 - 闪电平仓 - 合约组是否强平中
 */
export const getPerpetualGroupIsLiquidate: MarkcoinRequest<
  FuturesDetailIsLiquidateReq,
  FuturesDetailIsLiquidateResp
> = params => {
  return request({
    path: `/v1/perpetual/group/isLiquidate`,
    method: 'GET',
    params,
  })
}

/**
 * 资产 - 合约组 - 撤销合约组所有委托
 */
export const postPerpetualGroupCancelOrder: MarkcoinRequest<
  FuturesGroupCancelOrderReq,
  FuturesGroupCancelOrderResp
> = data => {
  return request({
    path: `/v1/perpetual/group/cancelOrder`,
    method: 'POST',
    data,
  })
}

/**
 * 资产 - 合约组 - 一键合组
 */
export const postPerpetualGroupMerge: MarkcoinRequest<FuturesGroupMergeReq, FuturesGroupMergeResp> = data => {
  return request({
    path: `/v1/perpetual/group/merge`,
    method: 'POST',
    data,
  })
}

/**
 * 合约组详情 - 逐仓总价值
 */
export const postPerpetualTotalMarginDetail: MarkcoinRequest<
  FuturesDetailMarginScaleDetailReq,
  FuturesDetailMarginScaleDetailResp
> = params => {
  return request({
    path: `/v1/perpetual/group/totalValue/detail`,
    method: 'GET',
    params,
  })
}

/**
 * 合约组详情 - 可用保证金
 */
export const postPerpetualAvailableMarginDetail: MarkcoinRequest<
  FuturesDetailMarginScaleDetailReq,
  FuturesDetailMarginScaleDetailResp
> = params => {
  return request({
    path: `/v1/perpetual/group/availableMargin/detail`,
    method: 'GET',
    params,
  })
}

/**
 * 合约组详情 - 仓位占用保证金
 */
export const postPerpetualOccupyMarginDetail: MarkcoinRequest<
  FuturesDetailMarginScaleDetailReq,
  FuturesDetailMarginScaleDetailResp
> = params => {
  return request({
    path: `/v1/perpetual/group/occupyMargin/detail`,
    method: 'GET',
    params,
  })
}

/**
 * 合约组详情 - 开仓冻结保证金
 */
export const postPerpetualLockMarginDetail: MarkcoinRequest<
  FuturesDetailMarginScaleDetailReq,
  FuturesDetailMarginScaleDetailResp
> = params => {
  return request({
    path: `/v1/perpetual/group/lockMargin/detail`,
    method: 'GET',
    params,
  })
}
