import Request, { MarkcoinRequest } from '@/plugins/request'
import {
  YapiGetV1HomeAppinfoGetListApiRequest,
  YapiGetV1HomeAppinfoGetListApiResponse,
} from '@/typings/yapi/HomeAppinfoGetListV1GetApi'
import {
  YapiGetV1HomeColumnGetListApiRequest,
  YapiGetV1HomeColumnGetListApiResponse,
} from '@/typings/yapi/HomeColumnGetListV1GetApi'

export const getDownloadApiData: MarkcoinRequest<
  YapiGetV1HomeAppinfoGetListApiRequest,
  YapiGetV1HomeAppinfoGetListApiResponse['data']
> = params => {
  return Request({
    path: '/v1/home/appinfo/getList',
    method: 'GET',
    params,
  })
}
