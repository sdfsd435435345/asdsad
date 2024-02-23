import { YapiGetV1PerpetualAssetsFeeRateCurrentData } from "@/typings/yapi/PerpetualAssetsFeeRateCurrentV1GetApi"
import { YapiGetV1PerpetualInsuranceFundLogsApiRequest, YapiGetV1PerpetualInsuranceFundLogsListData } from "@/typings/yapi/PerpetualInsuranceFundLogsV1GetApi"
import { YapiGetV1PerpetualInsuranceFundTrendApiRequest } from "@/typings/yapi/PerpetualInsuranceFundTrendV1GetApi"
import { YapiGetV1PerpetualMarkPriceHistoryData, YapiGetV1PerpetualMarkPriceHistoryListData } from "@/typings/yapi/PerpetualMarkPriceHistoryListV1GetApi"

type IFundingRateListResBase<T> = {
  list: T[]
  total: number
}
export type IFundingRate = {
  timeIndex: number
  feeRate: string
  settleSpan: number
}
export type IFundingRateHistoryReq = {
  pageNum?: number
  pageSize?: number
  startTime?: number
  tradePairId: string | number
}
export type IFundingRateHistoryResp = IFundingRateListResBase<IFundingRate>
export type ICurrentFundingRate = YapiGetV1PerpetualAssetsFeeRateCurrentData
export type ICurrentFundingRateReq = {
  id: string
}
export type ICurrentFundingRateResp = ICurrentFundingRate
export type IIndexPrice = YapiGetV1PerpetualMarkPriceHistoryListData
export type IIndexPriceHistoryReq = {
  tradePairId: string | number
  pageSize?: number
  pageNum?: number
}
export type IIndexPriceHistoryResp = YapiGetV1PerpetualMarkPriceHistoryData
export type IIndexIngredient = {
  webName: string
  symbol: string
}
export type IIndexIngredientReq = {
  tradePairId: string | number
}
export type IIndexIngredientResp = IIndexIngredient[]

export type IFutureInsuranceFundLog = YapiGetV1PerpetualInsuranceFundLogsListData

export type IQueryInsuranceFundTrendReq = YapiGetV1PerpetualInsuranceFundTrendApiRequest
export type IQueryInsuranceFundLogsReq = YapiGetV1PerpetualInsuranceFundLogsApiRequest