import request, { MarkcoinRequest } from '@/plugins/request'
import {
  YapiPostV1VccCardApplyApiRequest,
  YapiPostV1VccCardApplyApiResponse,
} from '@/typings/yapi/VccCardApplyV1PostApi'
import {
  YapiPostV1VccCardCloseApiRequest,
  YapiPostV1VccCardCloseApiResponse,
} from '@/typings/yapi/VccCardCloseV1PostApi'
import { YapiGetV1VccGetBindsApiRequest, YapiGetV1VccGetBindsApiResponse } from '@/typings/yapi/VccGetBindsV1GetApi'
import {
  YapiGetV1VccGetCardDescApiRequest,
  YapiGetV1VccGetCardDescApiResponse,
} from '@/typings/yapi/VccGetCardDescV1GetApi'
import {
  YapiPostV1VccGetCardInfoApiRequest,
  YapiPostV1VccGetCardInfoApiResponse,
} from '@/typings/yapi/VccGetCardInfoV1PostApi'
import {
  YapiGetV1VccGetCardListApiRequest,
  YapiGetV1VccGetCardListApiResponse,
} from '@/typings/yapi/VccGetCardListV1GetApi'
import {
  YapiGetV1VccGetRechargeDefaultCoinApiRequest,
  YapiGetV1VccGetRechargeDefaultCoinApiResponse,
} from '@/typings/yapi/VccGetRechargeDefaultCoinV1GetApi'
import {
  YapiGetV1VccGetUserVccInfoApiRequest,
  YapiGetV1VccGetUserVccInfoApiResponse,
} from '@/typings/yapi/VccGetUserVccInfoV1GetApi'
import {
  YapiGetV1VccHistoryCardApiRequest,
  YapiGetV1VccHistoryCardApiResponse,
} from '@/typings/yapi/VccHistoryCardV1GetApi'
import {
  YapiPostV1VccSetPayPasswordApiRequest,
  YapiPostV1VccSetPayPasswordApiResponse,
} from '@/typings/yapi/VccSetPayPasswordV1PostApi'
import {
  YapiPostV1VccUpdateAliasApiRequest,
  YapiPostV1VccUpdateAliasApiResponse,
} from '@/typings/yapi/VccUpdateAliasV1PostApi'

// /**
// * [虚拟卡列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8994)
// **/
export const getCradList: MarkcoinRequest<
  YapiGetV1VccGetCardListApiRequest,
  YapiGetV1VccGetCardListApiResponse['data']
> = params => {
  return request({
    path: '/v1/vcc/getCardList',
    method: 'GET',
    params,
  })
}

// /**
// * [获取可充值默认币种↗](https://yapi.nbttfc365.com/project/77/interface/api/9039)
// **/
export const getRechargeDefaultCoin: MarkcoinRequest<
  YapiGetV1VccGetRechargeDefaultCoinApiRequest,
  YapiGetV1VccGetRechargeDefaultCoinApiResponse['data']
> = params => {
  return request({
    path: '/v1/vcc/getRechargeDefaultCoin',
    method: 'GET',
    params,
  })
}

/**
 * [获取平台 VCC 配置↗](https://yapi.nbttfc365.com/project/77/interface/api/9004)
 * 返回 VCC 平台设置，包含：销卡费用币种，销卡费用，开卡费用，开卡币种等，同时返回用户 是否已设置<支付密码>
 * */
export const getUserVccInfo: MarkcoinRequest<
  YapiGetV1VccGetUserVccInfoApiRequest,
  YapiGetV1VccGetUserVccInfoApiResponse['data']
> = params => {
  return request({
    path: '/v1/vcc/getUserVccInfo',
    method: 'GET',
    params,
  })
}

/**
 * [获取卡头列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8964)
 * */
export const getBinds: MarkcoinRequest<
  YapiGetV1VccGetBindsApiRequest,
  YapiGetV1VccGetBindsApiResponse['data']
> = params => {
  return request({
    path: '/v1/vcc/getBinds',
    method: 'GET',
    params,
  })
}

/* *
 * [设置支付密码↗](https://yapi.nbttfc365.com/project/77/interface/api/9019)
 * */
export const setPayPassword: MarkcoinRequest<
  YapiPostV1VccSetPayPasswordApiRequest,
  YapiPostV1VccSetPayPasswordApiResponse['data']
> = data => {
  return request({
    path: '/v1/vcc/setPayPassword',
    method: 'POST',
    data,
  })
}
/**
 * [开卡申请↗](https://yapi.nbttfc365.com/project/77/interface/api/8974)
 * */
export const setCardApply: MarkcoinRequest<
  YapiPostV1VccCardApplyApiRequest,
  YapiPostV1VccCardApplyApiResponse['data']
> = data => {
  return request({
    path: '/v1/vcc/cardApply',
    method: 'POST',
    data,
  })
}

/**
 * [历史信用卡列表 (销毁的卡)↗](https://yapi.nbttfc365.com/project/77/interface/api/10404)
 * */
export const getHistoryCard: MarkcoinRequest<
  YapiGetV1VccHistoryCardApiRequest,
  YapiGetV1VccHistoryCardApiResponse['data']
> = params => {
  return request({
    path: '/v1/vcc/historyCard',
    method: 'GET',
    params,
  })
}

/**
 * [获取卡详情信息 (卡号解密)↗](https://yapi.nbttfc365.com/project/77/interface/api/8979)
 * */
export const getCardInfo: MarkcoinRequest<
  YapiPostV1VccGetCardInfoApiRequest,
  YapiPostV1VccGetCardInfoApiResponse['data']
> = data => {
  return request({
    path: '/v1/vcc/getCardInfo',
    method: 'POST',
    data,
  })
}

/**
 * [更新卡别名↗](https://yapi.nbttfc365.com/project/77/interface/api/9024)
 * */
export const setupdateAlias: MarkcoinRequest<
  YapiPostV1VccUpdateAliasApiRequest,
  YapiPostV1VccUpdateAliasApiResponse['data']
> = data => {
  return request({
    path: '/v1/vcc/updateAlias',
    method: 'POST',
    data,
  })
}
/**
 * [虚拟卡销卡↗](https://yapi.nbttfc365.com/project/77/interface/api/8989)
 * */
export const setcardClose: MarkcoinRequest<
  YapiPostV1VccCardCloseApiRequest,
  YapiPostV1VccCardCloseApiResponse['data']
> = data => {
  return request({
    path: '/v1/vcc/cardClose',
    method: 'POST',
    data,
  })
}
/**
 * [获取卡详情信息 (卡号加密)↗](https://yapi.nbttfc365.com/project/77/interface/api/9009)
 * */
export const getCardDesc: MarkcoinRequest<
  YapiGetV1VccGetCardDescApiRequest,
  YapiGetV1VccGetCardDescApiResponse['data']
> = params => {
  return request({
    path: '/v1/vcc/getCardDesc',
    method: 'GET',
    params,
  })
}

/**
 * [公告中心的跑马灯↗](https://yapi.nbttfc365.com/project/44/interface/api/3002)
 * */
export const postV1HelpCenterHorseLampApiRequest: MarkcoinRequest<{ operateType: 1 }> = data => {
  return request({
    path: '/v1/helpCenter/horseLamp',
    method: 'POST',
    data,
  })
}
