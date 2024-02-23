/**
 * 资产 - 币币
 */
import request, { MarkcoinRequest } from '@/plugins/request'
import {
  AssetsCoinListReq,
  AssetsCoinListResp,
  AssetsCoinDetailReq,
  AssetsCoinDetailResp,
  AssetsTradeListReq,
  AssetsTradeListResp,
  ICoinBalanceRequest,
  ICoinBalanceData,
  AssetsCoinOverviewReq,
  AssetsCoinOverviewResp,
} from '@/typings/api/assets/assets'

/**
 * 获取币种资产 - 总览
 */
export const getCoinOverview: MarkcoinRequest<AssetsCoinOverviewReq, AssetsCoinOverviewResp> = params => {
  return request({
    path: `/v1/asset/coin/overview`,
    method: 'GET',
    params,
  })
}

/**
 * 获取币种资产列表
 */
export const getCoinList: MarkcoinRequest<AssetsCoinListReq, AssetsCoinListResp> = params => {
  return request({
    path: `/v1/pay/asset/coin/balance`,
    method: 'GET',
    params,
  })
}

/**
 * 资产 - 币种资产详情
 */
export const postCoinDetail: MarkcoinRequest<AssetsCoinDetailReq, AssetsCoinDetailResp> = data => {
  return request({
    path: `/v1/asset/coin/balance/detail`,
    method: 'POST',
    data,
  })
}

/**
 * 行情 - 搜索交易对 (币对模糊查询，交易币搜索)
 */
export const getTradeList: MarkcoinRequest<AssetsTradeListReq, AssetsTradeListResp> = params => {
  return request({
    path: `/v1/tradePair/search`,
    method: 'GET',
    params,
  })
}

/**
 * 资产 - 币种资产详情 - 交易页面用
 */
export const getCoinBalance: MarkcoinRequest<ICoinBalanceRequest, ICoinBalanceData> = params => {
  return request({
    path: `/v1/asset/getCoinBalance`,
    method: 'GET',
    params,
  })
}
