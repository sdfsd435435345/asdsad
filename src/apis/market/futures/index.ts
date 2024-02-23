import request, { MarkcoinRequest } from '@/plugins/request'
import {
  YapiGetV1PerpetualAssetsFeeRateCurrentApiRequest,
  YapiGetV1PerpetualAssetsFeeRateCurrentApiResponse,
} from '@/typings/yapi/PerpetualAssetsFeeRateCurrentV1GetApi'
import {
  YapiGetV1PerpetualAssetsFeeRateListApiRequest,
  YapiGetV1PerpetualAssetsFeeRateListApiResponse,
} from '@/typings/yapi/PerpetualAssetsFeeRateListV1GetApi'
import {
  YapiPostV1PerpetualFavouriteTradePairAddApiRequest,
  YapiPostV1PerpetualFavouriteTradePairAddApiResponse,
} from '@/typings/yapi/PerpetualFavouriteTradePairAddV1PostApi'
import {
  YapiGetV1PerpetualFavouriteTradePairDefaultApiRequest,
  YapiGetV1PerpetualFavouriteTradePairDefaultApiResponse,
} from '@/typings/yapi/PerpetualFavouriteTradePairDefaultV1GetApi'
import {
  YapiPostV1PerpetualFavouriteTradePairDeleteApiRequest,
  YapiPostV1PerpetualFavouriteTradePairDeleteApiResponse,
} from '@/typings/yapi/PerpetualFavouriteTradePairDeleteV1PostApi'
import {
  YapiPostV1PerpetualFavouriteTradePairEditApiRequest,
  YapiPostV1PerpetualFavouriteTradePairEditApiResponse,
} from '@/typings/yapi/PerpetualFavouriteTradePairEditV1PostApi'
import {
  YapiGetV1PerpetualFavouriteTradePairListApiRequest,
  YapiGetV1PerpetualFavouriteTradePairListApiResponse,
} from '@/typings/yapi/PerpetualFavouriteTradePairListV1GetApi'
import {
  YapiGetPerpetualMarketRestV1MarketDepthApiRequest,
  YapiGetPerpetualMarketRestV1MarketDepthApiResponse,
} from '@/typings/yapi/PerpetualMarketRestMarketDepthV1GetApi'
import {
  YapiGetPerpetualMarketRestV1MarketKlinesApiRequest,
  YapiGetPerpetualMarketRestV1MarketKlinesApiResponse,
} from '@/typings/yapi/PerpetualMarketRestMarketKlinesV1GetApi'
import {
  YapiGetPerpetualMarketRestV1MarketTradesApiRequest,
  YapiGetPerpetualMarketRestV1MarketTradesApiResponse,
} from '@/typings/yapi/PerpetualMarketRestMarketTradesV1GetApi'
import {
  YapiGetV1PerpetualMarkPriceHistoryListApiRequest,
  YapiGetV1PerpetualMarkPriceHistoryListApiResponse,
} from '@/typings/yapi/PerpetualMarkPriceHistoryListV1GetApi'
import {
  YapiGetV1PerpetualMarkPriceHistoryMarketFromApiRequest,
  YapiGetV1PerpetualMarkPriceHistoryMarketFromApiResponse,
} from '@/typings/yapi/PerpetualMarkPriceHistoryMarketFromV1GetApi'
import {
  YapiGetV1PerpetualTradePairConceptListApiRequest,
  YapiGetV1PerpetualTradePairConceptListApiResponse,
} from '@/typings/yapi/PerpetualTradePairConceptListV1GetApi'
import {
  YapiGetV1PerpetualTradePairDetailApiRequest,
  YapiGetV1PerpetualTradePairDetailApiResponse,
} from '@/typings/yapi/PerpetualTradePairDetailV1GetApi'
import {
  YapiGetV1PerpetualTradePairHotApiRequest,
  YapiGetV1PerpetualTradePairHotApiResponse,
} from '@/typings/yapi/PerpetualTradePairHotV1GetApi'
import {
  YapiGetV1PerpetualTradePairListApiRequest,
  YapiGetV1PerpetualTradePairListApiResponse,
} from '@/typings/yapi/PerpetualTradePairListV1GetApi'

/**
 * [合约指数 - 资金费率列表↗](https://yapi.nbttfc365.com/project/44/interface/api/449)
 * */
export const getV1PerpetualAssetsFeeRateListApiRequest: MarkcoinRequest<
  YapiGetV1PerpetualAssetsFeeRateListApiRequest,
  YapiGetV1PerpetualAssetsFeeRateListApiResponse['data']
> = params => {
  return request({
    path: '/v1/perpetual/assetsFeeRate/list',
    method: 'GET',
    params,
  })
}

/**
 * [合约指数 - 当前资金费率↗](https://yapi.nbttfc365.com/project/44/interface/api/452)
 * */
export const getV1PerpetualAssetsFeeRateCurrentApiRequest: MarkcoinRequest<
  YapiGetV1PerpetualAssetsFeeRateCurrentApiRequest,
  YapiGetV1PerpetualAssetsFeeRateCurrentApiResponse['data']
> = params => {
  return request({
    path: '/v1/perpetual/assetsFeeRate/current',
    method: 'GET',
    params,
  })
}

/**
 * [合约指数 - 指数/标记价格列表↗](https://yapi.nbttfc365.com/project/44/interface/api/455)
 * */
export const getV1PerpetualMarkPriceHistoryListApiRequest: MarkcoinRequest<
  YapiGetV1PerpetualMarkPriceHistoryListApiRequest,
  YapiGetV1PerpetualMarkPriceHistoryListApiResponse['data']
> = params => {
  return request({
    path: '/v1/perpetual/markPriceHistory/list',
    method: 'GET',
    params,
  })
}

/**
 * [合约指数 - 合约成分↗](https://yapi.nbttfc365.com/project/44/interface/api/458)
 * */
export const getV1PerpetualMarkPriceHistoryMarketFromApiRequest: MarkcoinRequest<
  YapiGetV1PerpetualMarkPriceHistoryMarketFromApiRequest,
  YapiGetV1PerpetualMarkPriceHistoryMarketFromApiResponse['data']
> = params => {
  return request({
    path: '/v1/perpetual/markPriceHistory/marketFrom',
    method: 'GET',
    params,
  })
}

/**
 * [合约币对列表  ↗](https://yapi.nbttfc365.com/project/44/interface/api/461)
 * */
export const getV1PerpetualTradePairListApiRequest: MarkcoinRequest<
  Partial<YapiGetV1PerpetualTradePairListApiRequest>,
  YapiGetV1PerpetualTradePairListApiResponse['data']
> = params => {
  return request({
    path: '/v1/perpetual/tradePair/list',
    method: 'GET',
    params,
  })
}

/**
 * [合约 k 线↗](https://yapi.nbttfc365.com/project/44/interface/api/3783)
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
 * [合约 - 最新成交↗](https://yapi.nbttfc365.com/project/44/interface/api/4015)
 * */
export const getPerpetualMarketRestV1MarketTradesApiRequest: MarkcoinRequest<
  YapiGetPerpetualMarketRestV1MarketTradesApiRequest,
  YapiGetPerpetualMarketRestV1MarketTradesApiResponse['data']
> = params => {
  return request({
    path: '/perpetual-market-rest/v1/market/trades',
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
 * [合约 - 自选推荐↗](https://yapi.nbttfc365.com/project/44/interface/api/4055)
 * */
export const getV1PerpetualFavouriteTradePairDefaultApiRequest: MarkcoinRequest<
  YapiGetV1PerpetualFavouriteTradePairDefaultApiRequest,
  YapiGetV1PerpetualFavouriteTradePairDefaultApiResponse['data']
> = params => {
  return request({
    path: '/v1/perpetual/favouriteTradePair/default',
    method: 'GET',
    params,
  })
}

/**
 * [合约 - 自选列表，返回结构与<合约 - 币对列表一致>↗](https://yapi.nbttfc365.com/project/44/interface/api/4059)
 * */
export const getV1PerpetualFavouriteTradePairListApiRequest: MarkcoinRequest<
  YapiGetV1PerpetualFavouriteTradePairListApiRequest,
  YapiGetV1PerpetualFavouriteTradePairListApiResponse['data']
> = params => {
  return request({
    path: '/v1/perpetual/favouriteTradePair/list',
    method: 'GET',
    params,
  })
}

/**
 * [合约 - 自选添加↗](https://yapi.nbttfc365.com/project/44/interface/api/4063)
 * */
export const postV1PerpetualFavouriteTradePairAddApiRequest: MarkcoinRequest<
  YapiPostV1PerpetualFavouriteTradePairAddApiRequest,
  YapiPostV1PerpetualFavouriteTradePairAddApiResponse
> = params => {
  return request({
    path: '/v1/perpetual/favouriteTradePair/add',
    method: 'POST',
    params,
  })
}

/**
 * [合约 - 自选编辑↗](https://yapi.nbttfc365.com/project/44/interface/api/4067)
 * */
export const postV1PerpetualFavouriteTradePairEditApiRequest: MarkcoinRequest<
  YapiPostV1PerpetualFavouriteTradePairEditApiRequest,
  YapiPostV1PerpetualFavouriteTradePairEditApiResponse
> = params => {
  return request({
    path: '/v1/perpetual/favouriteTradePair/edit',
    method: 'POST',
    params,
  })
}

/**
 * [合约 - 自选删除↗](https://yapi.nbttfc365.com/project/44/interface/api/4071)
 * */
export const postV1PerpetualFavouriteTradePairDeleteApiRequest: MarkcoinRequest<
  YapiPostV1PerpetualFavouriteTradePairDeleteApiRequest,
  YapiPostV1PerpetualFavouriteTradePairDeleteApiResponse
> = params => {
  return request({
    path: '/v1/perpetual/favouriteTradePair/delete',
    method: 'POST',
    params,
  })
}

// /**
// * [合约 - 热门币对↗](https://yapi.nbttfc365.com/project/44/interface/api/5589)
// **/
export const getV1PerpetualTradePairHotApiRequest: MarkcoinRequest<
  YapiGetV1PerpetualTradePairHotApiRequest,
  YapiGetV1PerpetualTradePairHotApiResponse['data']
> = params => {
  return request({
    path: '/v1/perpetual/tradePair/hot',
    method: 'GET',
    params,
  })
}

// /**
// * [板块列表↗](https://yapi.nbttfc365.com/project/44/interface/api/5709)
// **/
export const getV1PerpetualTradePairConceptListApiRequest: MarkcoinRequest<
  YapiGetV1PerpetualTradePairConceptListApiRequest,
  YapiGetV1PerpetualTradePairConceptListApiResponse['data']
> = params => {
  return request({
    path: '/v1/perpetual/tradePair/conceptList',
    method: 'GET',
    params,
  })
}
