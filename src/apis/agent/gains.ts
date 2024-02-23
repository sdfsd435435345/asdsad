import Request, { MarkcoinRequest } from '@/plugins/request'
import {
  YapiGetV1AgtRebateInfoHistoryOverviewApiRequest,
  YapiGetV1AgtRebateInfoHistoryOverviewApiResponse,
} from '@/typings/yapi/AgtRebateInfoHistoryOverviewV1GetApi'
import {
  YapiPostV1AgtRebateInfoHistoryQueryDetailsAnalysisApiRequest,
  YapiPostV1AgtRebateInfoHistoryQueryDetailsAnalysisApiResponse,
} from '@/typings/yapi/AgtRebateInfoHistoryQueryDetailsAnalysisV1PostApi'
import {
  YapiPostV1AgtRebateInfoHistoryQueryDetailsApiRequest,
  YapiPostV1AgtRebateInfoHistoryQueryDetailsApiResponse,
} from '@/typings/yapi/AgtRebateInfoHistoryQueryDetailsV1PostApi'

export const getRebateInfoHistoryDetails: MarkcoinRequest<
  YapiPostV1AgtRebateInfoHistoryQueryDetailsAnalysisApiRequest,
  YapiPostV1AgtRebateInfoHistoryQueryDetailsAnalysisApiResponse
> = params => {
  return Request({
    path: `/v1/agtRebateInfoHistory/queryDetailsAnalysis`,
    method: 'POST',
    data: params,
  })
}

export const getRebateInfoHistory: MarkcoinRequest<
  YapiGetV1AgtRebateInfoHistoryOverviewApiRequest,
  YapiGetV1AgtRebateInfoHistoryOverviewApiResponse['data']
> = params => {
  return Request({
    path: `/v1/agtRebateInfoHistory/overview`,
    method: `GET`,
    data: params,
  })
}

export const queryRebateInfoHistory: MarkcoinRequest<
  YapiPostV1AgtRebateInfoHistoryQueryDetailsApiRequest,
  YapiPostV1AgtRebateInfoHistoryQueryDetailsApiResponse
> = params => {
  return Request({
    path: `/v1/agtRebateInfoHistory/queryDetails`,
    method: `POST`,
    data: params,
  })
}
