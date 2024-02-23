import request, { MarkcoinRequest } from '@/plugins/request'
import {
  YapiGetV1ConceptConceptPriceListApiRequest,
  YapiGetV1ConceptConceptPriceListApiResponse,
} from '@/typings/yapi/ConceptConceptPriceListV1GetApi'

/**
 * 获取板块指数列表
 */
export const getMarketSectorList: MarkcoinRequest<
  YapiGetV1ConceptConceptPriceListApiRequest,
  YapiGetV1ConceptConceptPriceListApiResponse['data']
> = () => {
  return request({
    path: `/v1/concept/conceptPriceList`,
    method: 'GET',
  })
}

/**
 * 获取行情 - 板块详情
 */
export const getMarketSectorDetail: MarkcoinRequest = params => {
  return request({
    path: `/v1/concept/detail`,
    method: 'GET',
    params,
  })
}
