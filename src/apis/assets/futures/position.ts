/**
 * 合约组 - 持仓
 */
import request, { MarkcoinRequest } from '@/plugins/request'
import {
  FuturesGroupMarginAvailableReq,
  FuturesGroupMarginAvailableResp,
  FuturesGroupPurchasingPowerReq,
  FuturesGroupPurchasingPowerResp,
  FuturesLockPositionSettingReq,
  FuturesLockPositionSettingResp,
  FuturesPerpetualAssetsReq,
  FuturesPerpetualAssetsResp,
  FuturesPositionCheckExistReq,
  FuturesPositionCheckExistResp,
  FuturesPositionCheckMergeReq,
  FuturesPositionCheckMergeResp,
  FuturesPositionCheckMigrateMarginReq,
  FuturesPositionCheckMigrateMarginResp,
  FuturesPositionCheckMinSizeReq,
  FuturesPositionCheckMinSizeResp,
  FuturesPositionCurrentListReq,
  FuturesPositionCurrentListResp,
  FuturesPositionLeverCheckMaxSizeReq,
  FuturesPositionLeverCheckMaxSizeResp,
  FuturesPositionMaxSizeLimitReq,
  FuturesPositionMaxSizeLimitResp,
  FuturesPositionMigrateMarginReq,
  FuturesPositionMigrateMarginResp,
  FuturesPositionMigrateReq,
  FuturesPositionMigrateResp,
  FuturesPositionMigrateSizeReq,
  FuturesPositionMigrateSizeResp,
  FuturesPositionModifyLeverReq,
  FuturesPositionModifyLeverResp,
  FuturesPositionReverseInfoReq,
  FuturesPositionReverseInfoResp,
  FuturesPositionStrategyCancelAllReq,
  FuturesPositionStrategyCancelAllResp,
  FuturesPositionStrategyCancelReq,
  FuturesPositionStrategyCancelResp,
  FuturesPositionStrategyDetailsReq,
  FuturesPositionStrategyDetailsResp,
  FuturesPositionSymbolSizeReq,
  FuturesPositionSymbolSizeResp,
  OrdersPlaceReq,
  OrdersPlaceResp,
  PositionCancelOrderReq,
  PositionCancelOrderResp,
  PositionCheckLockReq,
  PositionCheckLockResp,
  PositionExistEntrustOrderReq,
  PositionExistEntrustOrderResp,
  PositionLockFeeReq,
  PositionLockFeeResp,
  PositionLockReq,
  PositionLockResp,
  StrategyPlaceReq,
  StrategyPlaceResp,
} from '@/typings/api/assets/futures'

/**
 * 交易 - 获取当前持仓列表
 */
export const getPerpetualPositionCurrentList: MarkcoinRequest<
  FuturesPositionCurrentListReq,
  FuturesPositionCurrentListResp
> = params => {
  return request({
    path: `/v1/perpetual/position/current`,
    method: 'GET',
    params,
  })
}

/**
 * 交易 - 获取现货资产购买力（可用保证金）
 */
export const getPerpetualAssets: MarkcoinRequest<FuturesPerpetualAssetsReq, FuturesPerpetualAssetsResp> = params => {
  return request({
    path: `/v1/perpetual/assets/queryAsset`,
    method: 'GET',
    params,
  })
}

/**
 * 交易-一键锁仓-获取锁仓时间周期/费率等设置
 */
export const getPerpetualLockPositionSetting: MarkcoinRequest<
  FuturesLockPositionSettingReq,
  FuturesLockPositionSettingResp
> = params => {
  return request({
    path: `/v1/perpetual/lockPosition/setting`,
    method: 'GET',
    params,
  })
}

/**
 * 交易 - 一键锁仓 - 仓位是否存在委托订单
 */
export const postPerpetualPositionExistEntrustOrder: MarkcoinRequest<
  PositionExistEntrustOrderReq,
  PositionExistEntrustOrderResp
> = data => {
  return request({
    path: `/v1/perpetual/position/existEntrustOrder`,
    method: 'POST',
    data,
  })
}

/**
 * 交易 - 撤销仓位所有委托订单
 */
export const postPerpetualPositionCancelEntrustOrder: MarkcoinRequest<
  PositionCancelOrderReq,
  PositionCancelOrderResp
> = data => {
  return request({
    path: `/v1/perpetual/position/cancelEntrustOrder`,
    method: 'POST',
    data,
  })
}

/**
 * 交易 - 一键锁仓 - 检查能否锁仓
 */
export const postPerpetualPositionCheckLock: MarkcoinRequest<PositionCheckLockReq, PositionCheckLockResp> = data => {
  return request({
    path: `/v1/perpetual/position/checkLock`,
    method: 'POST',
    data,
  })
}

/**
 * 交易 - 一键锁仓 - 计算锁仓费用等信息
 */
export const postPerpetualPositionLockFee: MarkcoinRequest<PositionLockFeeReq, PositionLockFeeResp> = data => {
  return request({
    path: `/v1/perpetual/position/lockFee`,
    method: 'POST',
    data,
  })
}

/**
 * 交易 - 一键锁仓
 */
export const postPerpetualPositionLock: MarkcoinRequest<PositionLockReq, PositionLockResp> = data => {
  return request({
    path: `/v1/perpetual/position/lock`,
    method: 'POST',
    data,
  })
}

/**
 * 交易 - 一键反向 - 获取币对持仓数量
 */
export const getPerpetualPositionSymbolSize: MarkcoinRequest<
  FuturesPositionSymbolSizeReq,
  FuturesPositionSymbolSizeResp
> = params => {
  return request({
    path: `/v1/perpetual/position/symbol/querySize`,
    method: 'GET',
    params,
  })
}

/**
 * 交易 - 一键反向 - 获取反向开仓信息
 */
export const getPerpetualPositionReverseInfo: MarkcoinRequest<
  FuturesPositionReverseInfoReq,
  FuturesPositionReverseInfoResp
> = params => {
  return request({
    path: `/v1/perpetual/position/reverseInfo`,
    method: 'GET',
    params,
  })
}

/**
 * 交易 - 一键反向 - 获取币对最大可开仓数量
 */
export const getPerpetualPositionMaxSizeLimit: MarkcoinRequest<
  FuturesPositionMaxSizeLimitReq,
  FuturesPositionMaxSizeLimitResp
> = params => {
  return request({
    path: `/v1/perpetual/position/maxSizeLimit`,
    method: 'GET',
    params,
  })
}

/**
 * 交易 - 新建普通委托单（平仓/一键反向）
 */
export const postPerpetualOrdersPlace: MarkcoinRequest<OrdersPlaceReq, OrdersPlaceResp> = data => {
  return request({
    path: `/v1/perpetual/orders/place`,
    method: 'POST',
    data,
  })
}

/**
 * 交易-止盈止损-新增止盈止损/仓位止盈止损
 */
export const postPerpetualStrategyPlace: MarkcoinRequest<StrategyPlaceReq, StrategyPlaceResp> = data => {
  return request({
    path: `/v1/perpetual/strategy/place`,
    method: 'POST',
    data,
  })
}

/**
 * 交易 - 止盈止损 - 查询仓位止盈止损详情
 */
export const getPerpetualPositionStrategyDetails: MarkcoinRequest<
  FuturesPositionStrategyDetailsReq,
  FuturesPositionStrategyDetailsResp
> = params => {
  return request({
    path: `/v1/perpetual/position/${params.id}/strategy/details`,
    method: 'GET',
  })
}

/**
 * 交易 - 止盈止损 - 取消仓位止盈止损
 */
export const deletePerpetualStrategy: MarkcoinRequest<
  FuturesPositionStrategyCancelReq,
  FuturesPositionStrategyCancelResp
> = data => {
  return request({
    path: `/v1/perpetual/strategy/cancel`,
    method: 'POST',
    data,
  })
}

/**
 * 交易 - 止盈止损 - 撤销全部仓位止盈止损
 */
export const deletePerpetualStrategyAll: MarkcoinRequest<
  FuturesPositionStrategyCancelAllReq,
  FuturesPositionStrategyCancelAllResp
> = data => {
  return request({
    path: `/v1/perpetual/strategy/cancelAll`,
    method: 'POST',
    data,
  })
}

/**
 * 交易 - 平仓 - 检测仓位是否存在
 */
export const postPerpetualPositionCheckExist: MarkcoinRequest<
  FuturesPositionCheckExistReq,
  FuturesPositionCheckExistResp
> = data => {
  return request({
    path: `/v1/perpetual/position/checkExist`,
    method: 'POST',
    data,
  })
}

/**
 * 交易 - 迁移 - 获取能迁移的数量
 */
export const postPerpetualPositionMigrateSize: MarkcoinRequest<
  FuturesPositionMigrateSizeReq,
  FuturesPositionMigrateSizeResp
> = data => {
  return request({
    path: `/v1/perpetual/position/migrateSize`,
    method: 'POST',
    data,
  })
}

/**
 * 交易 - 迁移 - 获取能迁移的保证金
 */
export const postPerpetualPositionMigrateMargin: MarkcoinRequest<
  FuturesPositionMigrateMarginReq,
  FuturesPositionMigrateMarginResp
> = data => {
  return request({
    path: `/v1/perpetual/position/migrateMargin`,
    method: 'POST',
    data,
  })
}

/**
 * 交易 - 迁移 - 检查最小持仓数量
 */
export const postPerpetualPositionCheckMinSize: MarkcoinRequest<
  FuturesPositionCheckMinSizeReq,
  FuturesPositionCheckMinSizeResp
> = data => {
  return request({
    path: `/v1/perpetual/position/checkMinSize`,
    method: 'POST',
    data,
  })
}

/**
 * 交易 - 迁移 - 检查迁移的保证金
 */
export const postPerpetualPositionCheckMigrateMargin: MarkcoinRequest<
  FuturesPositionCheckMigrateMarginReq,
  FuturesPositionCheckMigrateMarginResp
> = data => {
  return request({
    path: `/v1/perpetual/position/checkMigrateMargin`,
    method: 'POST',
    data,
  })
}

/**
 * 交易 - 迁移 - 检查是否有可合并的仓位
 */
export const postPerpetualPositionCheckMerge: MarkcoinRequest<
  FuturesPositionCheckMergeReq,
  FuturesPositionCheckMergeResp
> = data => {
  return request({
    path: `/v1/perpetual/position/checkMerge`,
    method: 'POST',
    data,
  })
}

/**
 * 交易 - 迁移
 */
export const postPerpetualPositionMigrate: MarkcoinRequest<
  FuturesPositionMigrateReq,
  FuturesPositionMigrateResp
> = data => {
  return request({
    path: `/v1/perpetual/position/migrate`,
    method: 'POST',
    data,
  })
}

/**
 * 交易 - 平仓 - 合约组额外保证金
 */
export const getGroupPurchasingPower: MarkcoinRequest<
  FuturesGroupPurchasingPowerReq,
  FuturesGroupPurchasingPowerResp
> = params => {
  return request({
    path: `/v1/perpetual/group/queryGroupPurchasingPower`,
    method: 'GET',
    params,
  })
}

/**
 * 交易 - 调整持仓杠杆 - 查询合约组剩余购买力信息（可用保证金）
 */
export const getGroupMarginAvailable: MarkcoinRequest<
  FuturesGroupMarginAvailableReq,
  FuturesGroupMarginAvailableResp
> = params => {
  return request({
    path: `/v1/perpetual/group/queryPurchasingPower`,
    method: 'GET',
    params,
  })
}

/**
 * 交易 - 调整持仓杠杆 - 修改仓位杠杆倍数
 */
export const postPerpetualPositionModifyLever: MarkcoinRequest<
  FuturesPositionModifyLeverReq,
  FuturesPositionModifyLeverResp
> = data => {
  return request({
    path: `/v1/perpetual/position/modifyLever`,
    method: 'POST',
    data,
  })
}

/**
 * 交易 - 调整持仓杠杆 - 修改仓位杠杆倍数检查最大持仓量
 */
export const postPerpetualLeverCheckMaxSize: MarkcoinRequest<
  FuturesPositionLeverCheckMaxSizeReq,
  FuturesPositionLeverCheckMaxSizeResp
> = data => {
  return request({
    path: `/v1/perpetual/position/modifyLever/checkMaxSize`,
    method: 'POST',
    data,
  })
}
