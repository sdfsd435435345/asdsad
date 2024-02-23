/**
 * 资产 - 财务记录
 */
import request, { MarkcoinRequest } from '@/plugins/request'
import {
  AssetsRecordsCoinListReq,
  AssetsRecordsCoinListResp,
  AssetsRecordsListReq,
  AssetsRecordsListResp,
  AssetsRecordsDetailsReq,
  AssetsRecordsDetailsResp,
} from '@/typings/api/assets/assets'
import {
  YapiPostV1VccCardRechargeApiRequest,
  YapiPostV1VccCardRechargeApiResponse,
} from '@/typings/yapi/VccCardRechargeV1PostApi'
import {
  YapiGetV1VccGetRechargeCoinListApiRequest,
  YapiGetV1VccGetRechargeCoinListApiResponse,
} from '@/typings/yapi/VccGetRechargeCoinListV1GetApi'
import {
  YapiGetV1VccGetRechargeListApiRequest,
  YapiGetV1VccGetRechargeListApiResponse,
} from '@/typings/yapi/VccGetRechargeListV1GetApi'
import { YapiGetV1VccGetTradesApiRequest, YapiGetV1VccGetTradesApiResponse } from '@/typings/yapi/VccGetTradesV1GetApi'

/**
 * 财务记录 - 获取财务日志币种列表
 */
export const getRecordsCoinList: MarkcoinRequest<AssetsRecordsCoinListReq, AssetsRecordsCoinListResp> = params => {
  return request({
    path: `/v1/bill/log/coinList`,
    method: 'GET',
    params,
  })
}

/**
 * 财务记录 - 财务记录列表
 */
export const postRecordsList: MarkcoinRequest<AssetsRecordsListReq, AssetsRecordsListResp> = data => {
  return request({
    path: `/v1/pay/bill/log/list`,
    method: 'POST',
    data,
  })
}

/**
 * 财务记录 - 财务日志详情
 */
export const getRecordsDetails: MarkcoinRequest<AssetsRecordsDetailsReq, AssetsRecordsDetailsResp> = params => {
  return request({
    path: `/v1/bill/log/detail`,
    method: 'GET',
    params,
  })
}

/**
 * [获取卡收支记录↗](https://yapi.nbttfc365.com/project/77/interface/api/9029)
 * */
export const getV1VccGetTradesApiRequest: MarkcoinRequest<
  YapiGetV1VccGetTradesApiRequest,
  YapiGetV1VccGetTradesApiResponse['data']
> = params => {
  return request({
    path: '/v1/vcc/getTrades',
    method: 'GET',
    params,
  })
}

/**
 * [获取卡充值记录↗](https://yapi.nbttfc365.com/project/77/interface/api/9014)
 * */
export const getV1VccGetRechargeListApiRequest: MarkcoinRequest<
  YapiGetV1VccGetRechargeListApiRequest,
  YapiGetV1VccGetRechargeListApiResponse['data']
> = params => {
  return request({
    path: '/v1/vcc/getRechargeList',
    method: 'GET',
    params,
  })
}

/**
 * [虚拟卡充值↗](https://yapi.nbttfc365.com/project/77/interface/api/8984)
 * */
export const postV1VccCardRechargeApiRequest: MarkcoinRequest<
  YapiPostV1VccCardRechargeApiRequest,
  YapiPostV1VccCardRechargeApiResponse['data']
> = data => {
  return request({
    path: '/v1/vcc/cardRecharge',
    method: 'POST',
    data,
  })
}

/**
 * [获取可充值币种列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8969)
 * */
export const getV1VccGetRechargeCoinListApiRequest: MarkcoinRequest<
  YapiGetV1VccGetRechargeCoinListApiRequest,
  YapiGetV1VccGetRechargeCoinListApiResponse['data']
> = params => {
  return request({
    path: '/v1/vcc/getRechargeCoinList',
    method: 'GET',
    params,
  })
}
