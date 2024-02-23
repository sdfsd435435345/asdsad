import request, { MarkcoinRequest } from '@/plugins/request'
import {
  YapiPostV1AssetTransferFastPayApiRequest,
  YapiPostV1AssetTransferFastPayApiResponse,
} from '@/typings/yapi/AssetTransferFastPayV1PostApi'
import {
  YapiGetV1HomeGetC2cTypeApiRequest,
  YapiGetV1HomeGetC2cTypeApiResponse,
} from '@/typings/yapi/HomeGetC2cTypeV1GetApi'
import {
  YapiPostV1LinkedUserLoginApiRequest,
  YapiPostV1LinkedUserLoginApiResponse,
} from '@/typings/yapi/LinkedUserLoginV1PostApi'

/**
 * [获取商户c2c模式↗](https://yapi.nbttfc365.com/project/44/interface/api/18469)
 * */
export const getC2cTypeApiRequest: MarkcoinRequest<
  YapiGetV1HomeGetC2cTypeApiRequest,
  YapiGetV1HomeGetC2cTypeApiResponse['data']
> = params => {
  return request({
    path: '/v1/home/getC2cType',
    method: 'GET',
    params,
  })
}
/**
 * [fastPay划转↗](https://yapi.nbttfc365.com/project/44/interface/api/18449)
 * */
export const transferFastPayApiRequest: MarkcoinRequest<
  YapiPostV1AssetTransferFastPayApiRequest,
  YapiPostV1AssetTransferFastPayApiResponse['data']
> = data => {
  return request({
    path: '/v1/asset/transfer/fastPay',
    method: 'POST',
    data,
  })
}

/**
 * [c2c 公有关联账户注册/登陆↗](https://yapi.nbttfc365.com/project/44/interface/api/18444)
 * */
export const loginWithFastPayApiRequest: MarkcoinRequest<
  YapiPostV1LinkedUserLoginApiRequest,
  YapiPostV1LinkedUserLoginApiResponse['data']
> = data => {
  return request({
    path: '/v1/linked/user/login',
    method: 'POST',
    data,
  })
}
