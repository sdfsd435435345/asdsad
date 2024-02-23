/**
 * 资产 - 提现
 */
import request, { MarkcoinRequest } from '@/plugins/request'
import {
  AssetsWithdrawAddressReq,
  AssetsWithdrawAddressResp,
  AssetsWithdrawCoinInfoReq,
  AssetsWithdrawCoinInfoResp,
  AssetsWithdrawAddressVerifyReq,
  AssetsWithdrawAddressVerifyResp,
  AssetsAddWithdrawAddressReq,
  AssetsAddWithdrawAddressResp,
  AssetsWithdrawSubmitReq,
  AssetsWithdrawSubmitResp,
  AssetsDelWithdrawAddressReq,
  AssetsDelWithdrawAddressResp,
  AssetsNickNameReq,
  AssetsNickNameResp,
  AssetsSettingCoinPushReq,
  AssetsSettingCoinPushResp,
  AssetsCoinPushStatusReq,
  AssetsCoinPushStatusResp,
} from '@/typings/api/assets/assets'

/**
 * 资产 -币币 - 获取常用提现地址列表
 */
export const getWithdrawAddress: MarkcoinRequest<AssetsWithdrawAddressReq, AssetsWithdrawAddressResp> = () => {
  return request({
    path: `/v1/assets/base/queryWithdrawAddress`,
    method: 'GET',
  })
}

/**
 * 资产 - 获取提币信息
 */
export const postWithdrawCoinInfo: MarkcoinRequest<AssetsWithdrawCoinInfoReq, AssetsWithdrawCoinInfoResp> = data => {
  return request({
    path: `/v1/pay/asset/withdraw/getCoinInfo`,
    method: 'POST',
    data,
  })
}

/**
 * 资产 - 提现地址校验
 */
export const postWithdrawAddressVerify: MarkcoinRequest<
  AssetsWithdrawAddressVerifyReq,
  AssetsWithdrawAddressVerifyResp
> = data => {
  return request({
    path: `/v1/asset/withdraw/address/verify`,
    method: 'POST',
    data,
  })
}

/**
 * 资产-新增/编辑常用提现地址
 */
export const postAddWithdrawAddress: MarkcoinRequest<
  AssetsAddWithdrawAddressReq,
  AssetsAddWithdrawAddressResp
> = data => {
  return request({
    path: `/v1/assets/base/setting/withdrawAddress`,
    method: 'POST',
    data,
  })
}

/**
 * 资产 - 常用提现地址删除
 */
export const postDelWithdrawAddress: MarkcoinRequest<
  AssetsDelWithdrawAddressReq,
  AssetsDelWithdrawAddressResp
> = data => {
  return request({
    path: `/v1/assets/base/deleteWithdrawAddress`,
    method: 'POST',
    data,
  })
}

/**
 * 资产 - 发起提现申请
 */
export const postWithdrawSubmit: MarkcoinRequest<AssetsWithdrawSubmitReq, AssetsWithdrawSubmitResp> = data => {
  return request({
    path: `/v1/pay/asset/withdraw/submit`,
    method: 'POST',
    data,
  })
}

/**
 * 个人中心 - 通过 uid 查询昵称
 */
export const getNickName: MarkcoinRequest<AssetsNickNameReq, AssetsNickNameResp> = params => {
  return request({
    path: `/v1/member/base/info/nickName`,
    method: 'GET',
    params,
  })
}

/**
 * 资产 - 设置币种充提通知
 */
export const postSettingCoinPush: MarkcoinRequest<AssetsSettingCoinPushReq, AssetsSettingCoinPushResp> = data => {
  return request({
    path: `/v1/coin/settingCoinPush`,
    method: 'POST',
    data,
  })
}

/**
 * 资产 - 获取币种开启充提推送状态
 */
export const getCoinPushStatus: MarkcoinRequest<AssetsCoinPushStatusReq, AssetsCoinPushStatusResp> = params => {
  return request({
    path: `/v1/coin/getCoinPushStatus`,
    method: 'GET',
    params,
  })
}
