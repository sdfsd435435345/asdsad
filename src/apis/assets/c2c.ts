/**
 * 资产-c2c
 */
import request, { MarkcoinRequest } from '@/plugins/request'
import { AssetsC2CListReq, AssetsC2CListResp } from '@/typings/api/assets/assets'
import {
  YapiGetV1C2cBalanceAllApiRequest,
  YapiGetV1C2cBalanceAllApiResponse,
} from '@/typings/yapi/C2cBalanceAllV1GetApi'
import {
  YapiGetV1C2cBalanceFastPayDetailApiRequest,
  YapiGetV1C2cBalanceFastPayDetailApiResponse,
} from '@/typings/yapi/C2cBalanceFastPayDetailV1GetApi'

/**
 * 获取广告账户余额列表
 */
export const getC2CList: MarkcoinRequest<AssetsC2CListReq, AssetsC2CListResp[]> = params => {
  return request({
    path: `/v1/c2c/balance/list`,
    method: 'GET',
    params,
  })
}

/**
 * [资产列表接口↗](https://yapi.nbttfc365.com/project/73/interface/api/10354)
 * */
export const getV1C2cBalanceAllApiRequest: MarkcoinRequest<
  YapiGetV1C2cBalanceAllApiRequest,
  YapiGetV1C2cBalanceAllApiResponse['data']
> = params => {
  return request({
    path: '/v1/c2c/balance/all',
    method: 'GET',
    params,
  })
}

/**
 * [单个币种资产详情↗](https://yapi.nbttfc365.com/project/73/interface/api/10359)
 * */
export const getV1C2cBalanceFastPayDetailApiRequest: MarkcoinRequest<
  YapiGetV1C2cBalanceFastPayDetailApiRequest,
  YapiGetV1C2cBalanceFastPayDetailApiResponse['data']
> = params => {
  return request({
    path: '/v1/c2c/balance/fastPay/detail',
    method: 'GET',
    params,
  })
}
