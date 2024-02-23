/**
 * 资产 - 公共
 */
import request, { MarkcoinRequest } from '@/plugins/request'
import {
  AssetsOverviewReq,
  AssetsOverviewResp,
  AssetsCoinRateReq,
  AssetsCoinRateResp,
  AssetsWithdrawVerifyReq,
  AssetsWithdrawVerifyResp,
  AssetsQueryCoinPageListReq,
  AssetsQueryCoinPageListResp,
  AssetsQuerySubCoinListReq,
  AssetsQuerySubCoinListResp,
  AssetsV2CoinRateReq,
  AssetsV2CoinRateResp,
} from '@/typings/api/assets/assets'

/**
 * 获取资产总览
 * @returns
 */
export const getAssetsOverview: MarkcoinRequest<AssetsOverviewReq, AssetsOverviewResp> = () => {
  return request({
    path: `/v1/asset/overview`,
    method: 'GET',
  })
}

/**
 * 获取用户资产汇率
 */
export const getCoinRate: MarkcoinRequest<AssetsCoinRateReq, AssetsCoinRateResp> = () => {
  return request({
    path: `/v1/pay/coin/rate`,
    method: 'GET',
  })
}

/**
 * 获取用户资产汇率-v2
 */
export const getV2CoinRate: MarkcoinRequest<AssetsV2CoinRateReq, AssetsV2CoinRateResp> = () => {
  return request({
    path: `/v2/coin/rate`,
    method: 'GET',
  })
}

/**
 * 提币前校验
 */
export const getWithdrawVerify: MarkcoinRequest<AssetsWithdrawVerifyReq, AssetsWithdrawVerifyResp> = () => {
  return request({
    path: `/v1/pay/asset/withdraw/verify`,
    method: 'GET',
  })
}

/**
 * 获取主币种信息
 */
export const getQueryCoinPageList: MarkcoinRequest<
  AssetsQueryCoinPageListReq,
  AssetsQueryCoinPageListResp
> = params => {
  return request({
    path: `/v1/coin/queryCoinPageList`,
    method: 'GET',
    params,
  })
}

/**
 * 资产 - 币币 - 根据主币获取子币列表
 */
export const getQuerySubCoinList: MarkcoinRequest<AssetsQuerySubCoinListReq, AssetsQuerySubCoinListResp> = params => {
  return request({
    path: `/v1/coin/querySubCoinList`,
    method: 'GET',
    params,
  })
}
