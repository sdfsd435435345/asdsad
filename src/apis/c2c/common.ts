/**
 * c2c-公共
 */
import request, { MarkcoinRequest } from '@/plugins/request'
import {
  C2CAreaListReq,
  C2CAreaListResp,
  C2CCoinListReq,
  C2CCoinListResp,
  C2CMainTypeListReq,
  C2CMainTypeListResp,
  IC2cCommonSettings,
} from '@/typings/api/c2c/common'
import { YapiGetV1C2cCommonSettingApiRequest } from '@/typings/yapi/C2cCommonSettingV1GetApi'
import {
  YapiPostV1C2cCoinAdvertListApiRequest,
  YapiPostV1C2CCoinAdvertListData,
} from '@/typings/yapi/C2cCoinAdvertListV1PostApi.d'

/**
 * 获取可交易的区域列表
 */
export const getAreaList: MarkcoinRequest<C2CAreaListReq, C2CAreaListResp[]> = params => {
  return request({
    path: `/v1/c2c/area/list`,
    method: 'GET',
    params,
  })
}

/**
 * 获取可交易的区域下的币种列表
 */
export const postCoinList: MarkcoinRequest<C2CCoinListReq, C2CCoinListResp[]> = data => {
  return request({
    path: `/v1/c2c/coin/list`,
    method: 'POST',
    data,
  })
}

/** 发布过广告的币种列表* */
export const postReleasesCoinList: MarkcoinRequest<
  YapiPostV1C2cCoinAdvertListApiRequest,
  YapiPostV1C2CCoinAdvertListData[]
> = data => {
  return request({
    path: `/v1/c2c/coin/advert/list`,
    method: 'POST',
    data,
  })
}

/**
 * 获取币种对应的 mainType
 */
export const getMainTypeList: MarkcoinRequest<C2CMainTypeListReq, C2CMainTypeListResp[]> = params => {
  return request({
    path: `/v1/c2c/mainType/list`,
    method: 'GET',
    params,
  })
}
/**
 * [c2c 通用配置↗]
 * (https://yapi.nbttfc365.com/project/73/interface/api/5273)
 * */
export const getC2cCommonSettings: MarkcoinRequest<
  YapiGetV1C2cCommonSettingApiRequest,
  IC2cCommonSettings
> = params => {
  return request({
    path: '/v1/c2c/commonSetting',
    method: 'GET',
    params,
  })
}
/**
 * [c2c 交易所需等级]
 * (https://yapi.nbttfc365.com/project/73/interface/api/5255)
 * */
export const getC2cCommonSettingsKycLevel: MarkcoinRequest<
  any,
  {
    level: string
  }
> = params => {
  return request({
    path: '/v1/c2c/commonSetting/kycLevel',
    method: 'GET',
    params,
  })
}
