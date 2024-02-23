import request, { MarkcoinRequest } from '@/plugins/request'
import {
  ICurrentFundingRateReq,
  ICurrentFundingRateResp,
  IFundingRateHistoryReq,
  IFundingRateHistoryResp,
  IIndexIngredientReq,
  IIndexIngredientResp,
  IIndexPriceHistoryReq,
  IIndexPriceHistoryResp,
  IQueryInsuranceFundLogsReq,
  IQueryInsuranceFundTrendReq,
} from '@/typings/api/future/funding-history'
import {
  YapiGetV1PerpetualInsuranceFundCurrentApiRequest,
  YapiGetV1PerpetualInsuranceFundCurrentData,
} from '@/typings/yapi/PerpetualInsuranceFundCurrentV1GetApi'
import {
  YapiGetV1PerpetualInsuranceFundLogsApiRequest,
  YapiGetV1PerpetualInsuranceFundLogsData,
} from '@/typings/yapi/PerpetualInsuranceFundLogsV1GetApi'
import {
  YapiGetV1PerpetualInsuranceFundTrendApiRequest,
  YapiGetV1PerpetualInsuranceFundTrendData,
} from '@/typings/yapi/PerpetualInsuranceFundTrendV1GetApi'

/**
 * 获取资金费率历史
 * https://yapi.coin-online.cc/project/44/interface/api/449
 */
export const queryFundingRateHistory: MarkcoinRequest<IFundingRateHistoryReq, IFundingRateHistoryResp> = params => {
  return request({
    path: `/v1/perpetual/assetsFeeRate/list`,
    method: 'GET',
    params,
  })
}

/**
 * 获取当前资金费率
 * https://yapi.coin-online.cc/project/44/interface/api/452
 */
export const queryCurrentFundingRate: MarkcoinRequest<ICurrentFundingRateReq, ICurrentFundingRateResp> = ({ id }) => {
  return request({
    path: `/v1/perpetual/assetsFeeRate/current`,
    method: 'GET',
    params: {
      tradePairId: id,
    },
  })
}
/**
 * 获取指数价格 & 标记价格历史
 * https://yapi.coin-online.cc/project/44/interface/api/455
 */
export const queryFundingPriceHistory: MarkcoinRequest<IIndexPriceHistoryReq, IIndexPriceHistoryResp> = params => {
  return request({
    path: `/v1/perpetual/markPriceHistory/list`,
    method: 'GET',
    params,
  })
}

/**
 * 获取指数成分
 * https://yapi.coin-online.cc/project/44/interface/api/458
 */
export const queryIndexIngredientList: MarkcoinRequest<IIndexIngredientReq, IIndexIngredientResp> = params => {
  return request({
    path: `/v1/perpetual/markPriceHistory/marketFrom`,
    method: 'GET',
    params,
  })
}
/**
 * [风险准备金每日记录↗](https://yapi.nbttfc365.com/project/44/interface/api/5839)
 * */
export const queryInsuranceFundLogs: MarkcoinRequest<
  IQueryInsuranceFundLogsReq,
  YapiGetV1PerpetualInsuranceFundLogsData
> = params => {
  return request({
    path: '/v1/perpetual/insuranceFund/logs',
    method: 'GET',
    params,
  })
}
/**
 * [当前风险准备金↗](https://yapi.nbttfc365.com/project/44/interface/api/5834)
 * */
export const queryInsuranceFundCurrent: MarkcoinRequest<
  YapiGetV1PerpetualInsuranceFundCurrentApiRequest,
  YapiGetV1PerpetualInsuranceFundCurrentData
> = params => {
  return request({
    path: '/v1/perpetual/insuranceFund/current',
    method: 'GET',
    params,
  })
}
/**
 * [风险准备金趋势↗](https://yapi.nbttfc365.com/project/44/interface/api/5849)
 * */
export const queryInsuranceFundTrend: MarkcoinRequest<
  IQueryInsuranceFundTrendReq,
  YapiGetV1PerpetualInsuranceFundTrendData
> = params => {
  return request({
    path: '/v1/perpetual/insuranceFund/trend',
    method: 'GET',
    params,
  })
}
