import Request, { MarkcoinRequest } from '@/plugins/request'
import {
  YapiPostV1C2cMerchantApplyApiRequest,
  YapiPostV1C2cMerchantApplyApiResponse,
} from '@/typings/yapi/C2cMerchantApplyV1PostApi'
import {
  YapiGetV1C2cMerchantCurrentApplyApiRequest,
  YapiGetV1C2cMerchantCurrentApplyApiResponse,
} from '@/typings/yapi/C2cMerchantCurrentApplyV1GetApi'
import {
  YapiGetV1C2cMerchantInfoApiRequest,
  YapiGetV1C2cMerchantInfoApiResponse,
} from '@/typings/yapi/C2cMerchantInfoV1GetApi'
import {
  YapiPostV1C2cMerchantTerminateApiRequest,
  YapiPostV1C2cMerchantTerminateApiResponse,
} from '@/typings/yapi/C2cMerchantTerminateV1PostApi'
import { YapiPostV1C2cSettingApiRequest, YapiPostV1C2cSettingApiResponse } from '@/typings/yapi/C2cSettingV1PostApi'
import {
  YapiGetV1C2cUserProfileApiRequest,
  YapiGetV1C2cUserProfileApiResponse,
} from '@/typings/yapi/C2cUserProfileV1GetApi'
import { YapiGetV1OtcIsOpenOtcApiRequest, YapiGetV1OtcIsOpenOtcApiResponse } from '@/typings/yapi/OtcIsOpenOtcV1GetApi'

/**
 * [当前的商家状态↗](https://yapi.nbttfc365.com/project/73/interface/api/5093)
 * */
export const getV1C2cMerchantInfoApiRequest: MarkcoinRequest<
  YapiGetV1C2cMerchantInfoApiRequest,
  YapiGetV1C2cMerchantInfoApiResponse['data']
> = params => {
  return Request({
    path: '/v1/c2c/merchant/info',
    method: 'GET',
    params,
  })
}

export const getV1C2cMerchantCurrentApplyApiRequest: MarkcoinRequest<
  YapiGetV1C2cMerchantCurrentApplyApiRequest,
  YapiGetV1C2cMerchantCurrentApplyApiResponse['data']
> = params => {
  return Request({
    path: '/v1/c2c/merchant/currentApply',
    method: 'GET',
    params,
  })
}

/**
 * [申请解除商家↗](https://yapi.nbttfc365.com/project/73/interface/api/4599)
 * */
export const postV1C2cMerchantTerminateApiRequest: MarkcoinRequest<
  YapiPostV1C2cMerchantTerminateApiRequest,
  YapiPostV1C2cMerchantTerminateApiResponse['data']
> = data => {
  return Request({
    path: '/v1/c2c/merchant/terminate',
    method: 'POST',
    data,
  })
}

/**
 * [申请成为商家↗](https://yapi.nbttfc365.com/project/73/interface/api/4595)
 * */
export const postV1C2cMerchantApplyApiRequest: MarkcoinRequest<
  YapiPostV1C2cMerchantApplyApiRequest,
  YapiPostV1C2cMerchantApplyApiResponse['data']
> = data => {
  return Request({
    path: '/v1/c2c/merchant/apply',
    method: 'POST',
    data,
  })
}

/**
 * [设置接口↗](https://yapi.nbttfc365.com/project/73/interface/api/4523)
 * */
export const postV1C2cSettingApiRequest: MarkcoinRequest<
  YapiPostV1C2cSettingApiRequest,
  YapiPostV1C2cSettingApiResponse['data']
> = data => {
  return Request({
    path: '/v1/c2c/setting',
    method: 'POST',
    data,
  })
}

/**
 * [个人主页 (自己/他人)↗](https://yapi.nbttfc365.com/project/73/interface/api/4940)
 * */
export const getV1C2cUserProfileApiRequest: MarkcoinRequest<
  YapiGetV1C2cUserProfileApiRequest,
  YapiGetV1C2cUserProfileApiResponse['data']
> = params => {
  return Request({
    path: '/v1/c2c/user/profile',
    method: 'GET',
    params,
  })
}

/**
 * [查询是否开通OTC↗](https://yapi.nbttfc365.com/project/44/interface/api/19405)
 * */
export const getV1OtcIsOpenOtcApiRequest: MarkcoinRequest<
  YapiGetV1OtcIsOpenOtcApiRequest,
  YapiGetV1OtcIsOpenOtcApiResponse['data']
> = params => {
  return Request({
    path: '/v1/otc/isOpenOTC',
    method: 'GET',
    params,
  })
}
