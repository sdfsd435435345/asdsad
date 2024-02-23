import request, { MarkcoinRequest } from '@/plugins/request'
import {
  YapiGetV1VccOpenCardRecordApiRequest,
  YapiGetV1VccOpenCardRecordListData,
} from '@/typings/yapi/VccOpenCardRecordV1GetApi'

/**
 * [开卡记录↗](https://yapi.nbttfc365.com/project/77/interface/api/11809)
 * */
export const queryCardOpenLogs: MarkcoinRequest<
  YapiGetV1VccOpenCardRecordApiRequest,
  YapiGetV1VccOpenCardRecordListData[]
> = params => {
  return request({
    path: '/v1/vcc/openCard/record',
    method: 'GET',
    params,
  })
}
