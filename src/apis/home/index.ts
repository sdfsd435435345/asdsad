import Request, { MarkcoinRequest } from '@/plugins/request'
import { GetNoticesApiReq, GetNoticesApiRes } from '@/typings/api/home/notice'
import { GetRecommendedCoinsApiReq, GetRecommendedCoinsApiRes } from '@/typings/api/home/recommend'
import {
  YapiGetV1HelpCenterMainPageApiRequest,
  YapiGetV1HelpCenterMainPageApiResponse,
} from '@/typings/yapi/HelpCenterMainPageV1GetApi'
import {
  YapiGetV1HomeFunctionAllApiRequest,
  YapiGetV1HomeFunctionAllApiResponse,
} from '@/typings/yapi/HomeFunctionAllV1GetApi'
import {
  YapiPostV1HomeFunctionEditUserConfigApiRequest,
  YapiPostV1HomeFunctionEditUserConfigApiResponse,
} from '@/typings/yapi/HomeFunctionEditUserConfigV1PostApi'
import {
  YapiGetV1HomeFunctionTypeApiRequest,
  YapiGetV1HomeFunctionTypeApiResponse,
} from '@/typings/yapi/HomeFunctionTypeV1GetApi'
import {
  YapiGetV1HomeFunctionUserConfigListApiRequest,
  YapiGetV1HomeFunctionUserConfigListApiResponse,
} from '@/typings/yapi/HomeFunctionUserConfigListV1GetApi'
import {
  YapiGetV1TradePairRecommendApiRequest,
  YapiGetV1TradePairRecommendApiResponse,
} from '@/typings/yapi/TradePairRecommendV1GetApi'
import { GetBannersApiReq } from '../../typings/api/home/banner'

const getNotices: MarkcoinRequest<
  YapiGetV1HelpCenterMainPageApiRequest,
  YapiGetV1HelpCenterMainPageApiResponse['data']
> = params => {
  return Request({
    path: `/v1/helpCenter/mainPage`,
    method: 'GET',
    params,
  })
}

const getBanners: MarkcoinRequest<GetBannersApiReq, GetNoticesApiRes['data']> = params => {
  return Request({
    path: `/v1/banner/list`,
    method: `GET`,
    params,
  })
}

const getRecommendedCoins: MarkcoinRequest<
  YapiGetV1TradePairRecommendApiRequest,
  YapiGetV1TradePairRecommendApiResponse['data']
> = params => {
  return Request({
    path: '/v1/tradePair/recommend',
    method: 'GET',
    params,
  })
}

const getAllTools: MarkcoinRequest<
  YapiGetV1HomeFunctionAllApiRequest,
  YapiGetV1HomeFunctionAllApiResponse['data']
> = params => {
  return Request({
    path: '/v1/homeFunction/all',
    method: 'GET',
    params,
  })
}

const getAllToolsCategories: MarkcoinRequest<
  YapiGetV1HomeFunctionTypeApiRequest,
  YapiGetV1HomeFunctionTypeApiResponse['data']
> = params => {
  return Request({
    path: '/v1/homeFunction/type',
    method: 'GET',
    params,
  })
}

const getUserTools: MarkcoinRequest<
  YapiGetV1HomeFunctionUserConfigListApiRequest,
  YapiGetV1HomeFunctionUserConfigListApiResponse['data']
> = params => {
  return Request({
    path: '/v1/homeFunction/userConfigList',
    method: 'GET',
    params,
  })
}

const updateUserTools: MarkcoinRequest<
  YapiPostV1HomeFunctionEditUserConfigApiRequest,
  YapiPostV1HomeFunctionEditUserConfigApiResponse
> = params => {
  return Request({
    path: '/v1/homeFunction/editUserConfig',
    method: 'POST',
    data: params,
  })
}

export {
  getNotices,
  getBanners,
  getRecommendedCoins,
  getAllTools,
  getAllToolsCategories,
  getUserTools,
  updateUserTools,
}
