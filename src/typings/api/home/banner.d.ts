import {
  YapiGetV1BannerListApiRequest,
  YapiGetV1BannerListApiResponse,
  YapiGetV1BannerListData,
} from '@/typings/yapi/BannerListV1GetApi'

type GetBannersApiReq = YapiGetV1BannerListApiRequest

type GetBannersApiRes = YapiGetV1BannerListApiResponse

type BannerApiModel = YapiGetV1BannerListData

export { GetBannersApiReq, GetBannersApiRes, BannerApiModel }
