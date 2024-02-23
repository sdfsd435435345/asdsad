import request, { MarkcoinRequest } from '@/plugins/request'
import {
  AssetsCurrencySettingsReq,
  AssetsCurrencySettingsResp,
  AssetsMarginettingsReq,
  AssetsMarginSettingsResp,
  GroupExistEntrustOrderReq,
  GroupExistEntrustOrderResp,
  PerpetualGroupModifyNameReq,
  PerpetualGroupModifyNameResp,
} from '@/typings/api/assets/futures'

/**
 * 合约组是否存在委托订单
 */
export const postGroupExistEntrustOrder: MarkcoinRequest<
  GroupExistEntrustOrderReq,
  GroupExistEntrustOrderResp
> = data => {
  return request({
    path: `/v1/perpetual/group/existEntrustOrder`,
    method: 'POST',
    data,
  })
}

/**
 * 资产 - 获取商户法币配置
 */
export const getCurrencySettings: MarkcoinRequest<AssetsCurrencySettingsReq, AssetsCurrencySettingsResp> = params => {
  return request({
    path: `/v1/perpetual/mer/currency/settings`,
    method: 'GET',
    params,
  })
}

/**
 * 资产 - 获取商户保证金币种配置
 */
export const getPerpetualMarginSettings: MarkcoinRequest<AssetsMarginettingsReq, AssetsMarginSettingsResp> = params => {
  return request({
    path: `/v1/perpetual/mer/asset/margin/settings`,
    method: 'GET',
    params,
  })
}

/**
 * 合约 - 修改逐仓名称
 */
export const postPerpetualGroupModifyName: MarkcoinRequest<
  PerpetualGroupModifyNameReq,
  PerpetualGroupModifyNameResp
> = data => {
  return request({
    path: `/v1/perpetual/group/modifyName`,
    method: 'POST',
    data,
  })
}
