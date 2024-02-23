import request, { MarkcoinRequest } from '@/plugins/request'
import { IPostCoinInfoReq, IPostCoinInfoResp, IPostFavoriteJsonReq, IPostFavoriteJsonResp } from '@/typings/api/market'
import { YapiGetV1MarketKlinesApiRequest, YapiGetV1MarketKlinesApiResponse } from '@/typings/yapi/MarketKlinesV1GetApi'
import { YapiGetV1MarketDepthApiRequest, YapiGetV1MarketDepthApiResponse } from '@/typings/yapi/MarketDepthV1GetApi'
import { YapiGetV1TradePairHotApiRequest, YapiGetV1TradePairHotApiResponse } from '@/typings/yapi/TradePairHotV1GetApi'
import {
  YapiGetV1TradePairTopFallingApiRequest,
  YapiGetV1TradePairTopFallingApiResponse,
} from '@/typings/yapi/TradePairTopFallingV1GetApi'
import {
  YapiGetV1TradePairTopRisingApiRequest,
  YapiGetV1TradePairTopRisingApiResponse,
} from '@/typings/yapi/TradePairTopRisingV1GetApi'
import {
  YapiGetV1TradePairTopVolumeApiRequest,
  YapiGetV1TradePairTopVolumeApiResponse,
} from '@/typings/yapi/TradePairTopVolumeV1GetApi'
import {
  YapiGetV1TradePairListApiRequest,
  YapiGetV1TradePairListApiResponse,
} from '@/typings/yapi/TradePairListV1GetApi'
import {
  YapiGetV1TradePairDetailApiRequest,
  YapiGetV1TradePairDetailApiResponse,
} from '@/typings/yapi/TradePairDetailV1GetApi'
import {
  YapiGetV1CoinQueryMainCoinListApiRequest,
  YapiGetV1CoinQueryMainCoinListApiResponse,
} from '@/typings/yapi/CoinQueryMainCoinListV1GetApi'
import {
  YapiGetV1OrdersHistoryKlineApiRequest,
  YapiGetV1OrdersHistoryKlineApiResponse,
} from '@/typings/yapi/OrdersHistoryKlineV1GetApi'
import { YapiGetV1MarketMarketActivitiesApiResponse } from '@/typings/yapi/MarketMarketActivitiesV1GetApi'
import {
  YapiGetV1MarketMarketActivitiesStatisticsApiRequest,
  YapiGetV1MarketMarketActivitiesStatisticsApiResponse,
} from '@/typings/yapi/MarketMarketActivitiesStatisticsV1GetApi'
import {
  YapiGetV1TradePairCoinExtApiRequest,
  YapiGetV1TradePairCoinExtApiResponse,
} from '@/typings/yapi/TradePairCoinExtV1GetApi'
import {
  YapiGetV1PerpetualTradePairDetailApiRequest,
  YapiGetV1PerpetualTradePairDetailApiResponse,
} from '@/typings/yapi/PerpetualTradePairDetailV1GetApi'
import {
  YapiGetPerpetualMarketRestV1MarketDepthApiRequest,
  YapiGetPerpetualMarketRestV1MarketDepthApiResponse,
} from '@/typings/yapi/PerpetualMarketRestMarketDepthV1GetApi'
import {
  YapiGetPerpetualMarketRestV1MarketKlinesApiRequest,
  YapiGetPerpetualMarketRestV1MarketKlinesApiResponse,
} from '@/typings/yapi/PerpetualMarketRestMarketKlinesV1GetApi'
import {
  YapiGetPerpetualMarketRestV1MarketIndexPriceKlinesApiRequest,
  YapiGetPerpetualMarketRestV1MarketIndexPriceKlinesApiResponse,
} from '@/typings/yapi/PerpetualMarketRestMarketIndexPriceKlinesV1GetApi'
import {
  YapiGetPerpetualMarketRestV1MarketMarketPriceKlinesApiRequest,
  YapiGetPerpetualMarketRestV1MarketMarketPriceKlinesApiResponse,
} from '@/typings/yapi/PerpetualMarketRestMarketMarketPriceKlinesV1GetApi'

export type IMarketActivitiesReq = {
  symbol?: string
  limit?: number
}

/**
 * 获取当前币种详情
 */
export const postCoinInfo: MarkcoinRequest<IPostCoinInfoReq, IPostCoinInfoResp> = data => {
  return request({
    path: `v2/coin_info`,
    method: 'POST',
    data,
  })
}

/**
 * 获取收藏币种
 */
export const postFavoriteJson: MarkcoinRequest<IPostFavoriteJsonReq, IPostFavoriteJsonResp> = params => {
  return request({
    path: `user/user_favorite_json`,
    method: 'POST',
    params,
  })
}

/**
 * 获取币种列表
 */
export const getSymbolLabelInfo: MarkcoinRequest<
  YapiGetV1TradePairListApiRequest,
  YapiGetV1TradePairListApiResponse['data']
> = params => {
  return request({
    path: `/v1/tradePair/list`,
    method: 'GET',
    params,
  })
}

/**
 * 获取我的成交
 */
export const getOrdersHistoryKline: MarkcoinRequest<
  YapiGetV1OrdersHistoryKlineApiRequest,
  YapiGetV1OrdersHistoryKlineApiResponse['data']
> = params => {
  return request({
    path: `/v1/orders/history/kline`,
    method: 'GET',
    params,
  })
}

/**
 * 24 小时行情
 */
export const getMarketTicker: MarkcoinRequest<
  YapiGetV1TradePairDetailApiRequest,
  YapiGetV1TradePairDetailApiResponse['data']
> = params => {
  return request({
    path: `/v1/tradePair/detail`,
    method: 'GET',
    params,
  })
}

/**
 * 获取币种买卖价格
 */
export const postV3FullDepth: MarkcoinRequest<
  YapiGetV1MarketDepthApiRequest,
  YapiGetV1MarketDepthApiResponse['data']
> = params => {
  return request({
    path: `v1/market/depth`,
    method: 'GET',
    params,
  })
}

/**
 * 获取当前币种详情 postCoinInfo
 */
export const getTradePairCoinExt: MarkcoinRequest<
  YapiGetV1TradePairCoinExtApiRequest,
  YapiGetV1TradePairCoinExtApiResponse
> = params => {
  return request({
    path: `/v1/tradePair/coinExt`,
    method: 'GET',
    params,
  })
}

/**
 * 获取 k 线数据
 */
export const getKlineHistory: MarkcoinRequest<
  YapiGetV1MarketKlinesApiRequest,
  YapiGetV1MarketKlinesApiResponse['data']
> = params => {
  return request({
    path: `v1/market/klines`,
    method: 'GET',
    params,
  })
}

/**
 * 获取所有币种基本信息
 */
export const getAllCoinSymbolInfoList: MarkcoinRequest<
  YapiGetV1CoinQueryMainCoinListApiRequest,
  YapiGetV1CoinQueryMainCoinListApiResponse['data']
> = params => {
  return request({
    path: `v1/coin/queryMainCoinList`,
    method: 'GET',
    params,
  })
}

/**
 * 首页 - 热门币对
 */
export const getHotTradePair: MarkcoinRequest<
  YapiGetV1TradePairHotApiRequest,
  YapiGetV1TradePairHotApiResponse
> = params => {
  return request({
    path: `v1/tradePair/hot`,
    method: 'GET',
    params,
  })
}

/**
 * 首页 - 涨幅榜
 */
export const getTopRising: MarkcoinRequest<
  YapiGetV1TradePairTopRisingApiRequest,
  YapiGetV1TradePairTopRisingApiResponse
> = params => {
  return request({
    path: `v1/tradePair/topRising`,
    method: 'GET',
    params,
  })
}

/**
 * 首页 - 跌幅榜
 */
export const getTopFalling: MarkcoinRequest<
  YapiGetV1TradePairTopFallingApiRequest,
  YapiGetV1TradePairTopFallingApiResponse
> = params => {
  return request({
    path: `v1/tradePair/topFalling`,
    method: 'GET',
    params,
  })
}

/**
 * 首页 -24 小时成交额
 */
export const getTopVolume: MarkcoinRequest<
  YapiGetV1TradePairTopVolumeApiRequest,
  YapiGetV1TradePairTopVolumeApiResponse
> = params => {
  return request({
    path: `v1/tradePair/topVolume`,
    method: 'GET',
    params,
  })
}

/**
 * 行情异动
 */
export const getMarketActivities: MarkcoinRequest<
  IMarketActivitiesReq,
  YapiGetV1MarketMarketActivitiesApiResponse
> = params => {
  return request({
    path: `/v1/market/marketActivities`,
    method: 'GET',
    params,
  })
}

/**
 * 行情异动统计
 */
export const getMarketActivitiesStatistics: MarkcoinRequest<
  YapiGetV1MarketMarketActivitiesStatisticsApiRequest,
  YapiGetV1MarketMarketActivitiesStatisticsApiResponse
> = params => {
  return request({
    path: `/v1/market/marketActivities/statistics`,
    method: 'GET',
    params,
  })
}

/**
 * [合约币对详情↗](https://yapi.nbttfc365.com/project/44/interface/api/4047)
 * */
export const getV1PerpetualTradePairDetailApiRequest: MarkcoinRequest<
  YapiGetV1PerpetualTradePairDetailApiRequest,
  YapiGetV1PerpetualTradePairDetailApiResponse['data']
> = params => {
  return request({
    path: '/v1/perpetual/tradePair/detail',
    method: 'GET',
    params,
  })
}

/**
 * [合约盘口深度↗](https://yapi.nbttfc365.com/project/44/interface/api/3787)
 * */
export const getPerpetualMarketRestV1MarketDepthApiRequest: MarkcoinRequest<
  YapiGetPerpetualMarketRestV1MarketDepthApiRequest,
  YapiGetPerpetualMarketRestV1MarketDepthApiResponse['data']
> = params => {
  return request({
    path: '/perpetual-market-rest/v1/market/depth',
    method: 'GET',
    params,
  })
}

/**
 * [合约k线↗](https://yapi.nbttfc365.com/project/44/interface/api/3783)
 * */
export const getPerpetualMarketRestV1MarketKlinesApiRequest: MarkcoinRequest<
  YapiGetPerpetualMarketRestV1MarketKlinesApiRequest,
  YapiGetPerpetualMarketRestV1MarketKlinesApiResponse['data']
> = params => {
  return request({
    path: '/perpetual-market-rest/v1/market/klines',
    method: 'GET',
    params,
  })
}

/**
 * [合约指数价格K线图接口↗](https://yapi.nbttfc365.com/project/44/interface/api/4211)
 * */
export const getPerpetualMarketRestV1MarketIndexPriceKlinesApiRequest: MarkcoinRequest<
  YapiGetPerpetualMarketRestV1MarketIndexPriceKlinesApiRequest,
  YapiGetPerpetualMarketRestV1MarketIndexPriceKlinesApiResponse['data']
> = params => {
  return request({
    path: '/perpetual-market-rest/v1/market/indexPriceKlines',
    method: 'GET',
    params,
  })
}

/**
 * [合约标记价格k线图数据↗](https://yapi.nbttfc365.com/project/44/interface/api/4215)
 * */
export const getPerpetualMarketRestV1MarketMarketPriceKlinesApiRequest: MarkcoinRequest<
  YapiGetPerpetualMarketRestV1MarketMarketPriceKlinesApiRequest,
  YapiGetPerpetualMarketRestV1MarketMarketPriceKlinesApiResponse['data']
> = params => {
  return request({
    path: '/perpetual-market-rest/v1/market/marketPriceKlines',
    method: 'GET',
    params,
  })
}
