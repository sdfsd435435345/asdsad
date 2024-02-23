import request, { MarkcoinRequest } from '@/plugins/request'
import {
  YapiGetV1PerpetualTradePairDetailApiRequest,
  YapiGetV1PerpetualTradePairDetailData,
} from '@/typings/yapi/PerpetualTradePairDetailV1GetApi'

/**
 * 合约交易对详情
 */
export const getFutureTradePairDetail: MarkcoinRequest<
  YapiGetV1PerpetualTradePairDetailApiRequest,
  YapiGetV1PerpetualTradePairDetailData
> = params => {
  return request({
    path: `/v1/perpetual/tradePair/detail`,
    method: 'GET',
    params,
  })
}
