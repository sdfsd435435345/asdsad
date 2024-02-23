import {
  YapiGetV1TradePairRecommendApiRequest,
  YapiGetV1TradePairRecommendApiResponse,
  YapiGetV1TradePairRecommendListData,
} from '@/typings/yapi/TradePairRecommendV1GetApi'

type GetRecommendedCoinsApiReq = YapiGetV1TradePairRecommendApiRequest

type GetRecommendedCoinsApiRes = YapiGetV1TradePairRecommendApiResponse

type RecommendedCoinsApiModel = YapiGetV1TradePairRecommendListData & {lastPrev?: string | number}

export { GetRecommendedCoinsApiReq, GetRecommendedCoinsApiRes, RecommendedCoinsApiModel }