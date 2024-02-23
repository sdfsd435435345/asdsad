import request, { MarkcoinRequest } from '@/plugins/request'
import {
  IFutureGroup,
  IFutureGroupRecord,
  IFutureListReq,
  IFutureListResp,
  IPerpetualFutureListResp,
  IQueryFutureGroupRecordsReq,
} from '@/typings/api/future/common'

import {
  YapiGetV1PerpetualClearingFundingRateListApiRequest,
  YapiGetV1PerpetualClearingFundingRateData,
} from '@/typings/yapi/PerpetualClearingFundingRateListV1GetApi'

import {
  YapiGetV1PerpetualClearingTradeHistoryApiRequest,
  YapiGetV1PerpetualClearingTradeHistoryData,
} from '@/typings/yapi/PerpetualClearingTradeHistoryV1GetApi.d'

import {
  YapiGetV1PerpetualOrderDetailListApiRequest,
  YapiGetV1PerpetualOrderDetailListApiResponse,
} from '@/typings/yapi/PerpetualOrderDetailListV1GetApi.d'

import {
  YapiGetV1PerpetualTradePairListApiRequest,
  YapiGetV1PerpetualTradePairData,
} from '@/typings/yapi/PerpetualTradePairListV1GetApi.d'

import {
  YapiGetV1PerpetualTradePairDetailApiRequest,
  YapiGetV1PerpetualTradePairDetailData,
} from '@/typings/yapi/PerpetualTradePairDetailV1GetApi.d'

import {
  YapiGetV1PerpetualOrdersStrategyDetailsIdApiRequest,
  YapiGetV1PerpetualOrdersStrategyDetailsIdApiResponse,
} from '@/typings/yapi/PerpetualOrdersStrategyDetailsIdV1GetApi.d'

import {
  YapiGetV1PerpetualPlanOrdersStrategyDetailsIdApiRequest,
  YapiGetV1PerpetualPlanOrdersStrategyDetailsIdApiResponse,
} from '@/typings/yapi/PerpetualPlanOrdersStrategyDetailsIdV1GetApi.d'

import {
  YapiGetV1PerpetualOrdersCurrentApiRequest,
  YapiGetV1PerpetualOrdersCurrentData,
} from '@/typings/yapi/PerpetualOrdersCurrentV1GetApi.d'

import {
  YapiGetV1PerpetualStrategyCurrentApiRequest,
  YapiGetV1PerpetualStrategyCurrentData,
} from '@/typings/yapi/PerpetualStrategyCurrentV1GetApi.d'

import {
  YapiGetV1PerpetualPlanOrdersCurrentApiRequest,
  YapiGetV1PerpetualPlanOrdersCurrentData,
} from '@/typings/yapi/PerpetualPlanOrdersCurrentV1GetApi.d'

import {
  YapiPostV1PerpetualOrdersCancelAllApiRequest,
  YapiPostV1PerpetualOrdersCancelAllApiResponse,
} from '@/typings/yapi/PerpetualOrdersCancelAllV1PostApi.d'

import {
  YapiPostV1PerpetualGroupCreateApiRequest,
  YapiPostV1PerpetualGroupCreateData,
} from '@/typings/yapi/PerpetualGroupCreateV1PostApi.d'

import {
  YapiPostV1PerpetualOrdersCancelApiRequest,
  YapiPostV1PerpetualOrdersCancelApiResponse,
} from '@/typings/yapi/PerpetualOrdersCancelV1PostApi.d'

/**
 * 获取合约列表
 * https://yapi.coin-online.cc/project/44/interface/api/461
 */
export const queryFutureList: MarkcoinRequest<IFutureListReq, IFutureListResp> = () => {
  return request({
    path: `/perpetual-market-rest/v1/contract/list`,
    method: 'GET',
    params: {
      pageSize: 400,
    },
  })
}
/** 更新设置，估计应该是以 key-value 存储而不是每个设置一个接口 */
export const updateSettings: MarkcoinRequest<{
  key: string
  value: any
}> = () => {
  return request({
    path: `/future/settings/update`,
    method: 'POST',
  })
}
/**
 * 查询合约组详情
 */
export const queryFutureGroupDetail: MarkcoinRequest<
  {
    id: string
  },
  IFutureGroup
> = ({ id }) => {
  return request({
    path: `/trade/future/groups/${id}`,
    method: 'GET',
  })
}
/**
 * 查询合约组取消质押后是否会爆仓
 */
export const queryFutureGroupWillCloseWhenCancelPledge: MarkcoinRequest<
  {
    id: string
  },
  boolean
> = ({ id }) => {
  return request({
    path: `/trade/future/groups/${id}/will-close`,
    method: 'GET',
  })
}
/**
 * 质押/取消质押合约组
 */
export const updateFutureGroupPledge: MarkcoinRequest<{
  id: string
}> = ({ id }) => {
  return request({
    path: `/trade/future/groups/${id}/pledge`,
    method: 'POST',
  })
}

/**
 * 查询合约组记录
 */
export const queryFutureGroupRecords: MarkcoinRequest<IQueryFutureGroupRecordsReq, IFutureGroupRecord[]> = ({
  id,
  ...params
}) => {
  return request({
    path: `/future/groups/${id}/records`,
    method: 'GET',
    params,
  })
}
/**
 * 查询质押的合约组
 */
export const queryDepositFutureGroups: MarkcoinRequest<any, IFutureGroup[]> = () => {
  return request({
    path: `/trade/future/deposit/groups`,
    method: 'GET',
  })
}
/**
 * 查询所有合约组
 */
export const queryFutureGroups: MarkcoinRequest<
  any,
  {
    list: IFutureGroup[]
  }
> = () => {
  return request({
    path: `/v1/perpetual/group/list`,
    method: 'GET',
  })
}
/**
 * 创建新合约组
 */
export const createFutureGroups: MarkcoinRequest<any, IFutureGroup> = () => {
  return request({
    path: `/trade/future/groups`,
    method: 'POST',
  })
}
/**
 * 获取永续合约列表（老版本接口）
 *
 */
export const queryPerpetualFutureList: MarkcoinRequest<any, IPerpetualFutureListResp> = () => {
  return request({
    path: `v2/perpetual/public/list`,
    method: 'POST',
    contentType: 1,
  })
}

/**
 * 获取合约当前委托普通委托的列表
 *
 */
export const queryPerpetualOrdersCurrent: MarkcoinRequest<
  YapiGetV1PerpetualOrdersCurrentApiRequest,
  YapiGetV1PerpetualOrdersCurrentData
> = params => {
  return request({
    path: `/v1/perpetual/orders/current`,
    method: 'GET',
    params,
  })
}

/**
 * 普通委托全部撤销
 *
 */
export const cancelAllNormalConstract: MarkcoinRequest<
  YapiPostV1PerpetualOrdersCancelAllApiRequest,
  YapiPostV1PerpetualOrdersCancelAllApiResponse
> = data => {
  return request({
    path: `/v1/perpetual/orders/cancelAll`,
    method: 'POST',
    data,
  })
}

/**
 * 普通委托指定撤销
 *
 */
export const cancelNormalConstract: MarkcoinRequest<
  YapiPostV1PerpetualOrdersCancelApiRequest,
  YapiPostV1PerpetualOrdersCancelApiResponse
> = data => {
  return request({
    path: `/v1/perpetual/orders/cancel`,
    method: 'POST',
    data,
  })
}

/**
 * 普通委托订单止盈止损详情查询
 *
 */
export const getPerpetualStrategyDetails: MarkcoinRequest<
  YapiGetV1PerpetualOrdersStrategyDetailsIdApiRequest,
  YapiGetV1PerpetualOrdersStrategyDetailsIdApiResponse
> = params => {
  return request({
    path: `/v1/perpetual/orders/strategy/details/${params.id}`,
    method: 'GET',
  })
}

/**
 * 当前委托 - 计划委托订单止盈止损详情查询
 *
 */
export const getPerpetualPlanStrategyDetails: MarkcoinRequest<
  YapiGetV1PerpetualPlanOrdersStrategyDetailsIdApiRequest,
  YapiGetV1PerpetualPlanOrdersStrategyDetailsIdApiResponse
> = params => {
  return request({
    path: `/v1/perpetual/plan/orders/strategy/details/${params.id}`,
    method: 'GET',
  })
}

/**
 * 获取合约当前委托止盈止损的列表
 *
 */
export const queryPerpetualStopProfitLossCurrent: MarkcoinRequest<
  YapiGetV1PerpetualStrategyCurrentApiRequest,
  YapiGetV1PerpetualStrategyCurrentData
> = params => {
  return request({
    path: `/v1/perpetual/strategy/current`,
    method: 'GET',
    params,
  })
}

/**
 * 获取合约当前委托止盈止损的列表
 *
 */
export const queryPerpetualPlanOrdersCurrent: MarkcoinRequest<
  YapiGetV1PerpetualPlanOrdersCurrentApiRequest,
  YapiGetV1PerpetualPlanOrdersCurrentData
> = params => {
  return request({
    path: `/v1/perpetual/plan/orders/current`,
    method: 'GET',
    params,
  })
}

/**
 * 止盈止损全部撤销
 *
 */
export const cancelAllStrategyConstract: MarkcoinRequest<any> = data => {
  return request({
    path: `/v1/perpetual/strategy/cancelAll`,
    method: 'POST',
    data,
  })
}

/**
 * 止盈止损指定撤销
 *
 */
export const cancelStrategyConstract: MarkcoinRequest<any> = data => {
  return request({
    path: `/v1/perpetual/strategy/cancel`,
    method: 'POST',
    data,
  })
}

/**
 * 计划委托全部撤销
 *
 */
export const cancelAllPlanConstract: MarkcoinRequest<any> = data => {
  return request({
    path: `/v1/perpetual/plan/orders/cancelAll`,
    method: 'POST',
    data,
  })
}

/**
 * 计划委托指定撤销
 *
 */
export const cancelPlanConstract: MarkcoinRequest<any> = data => {
  return request({
    path: `/v1/perpetual/plan/orders/cancel`,
    method: 'POST',
    data,
  })
}

/**
 * 当前委托 - 普通委托 - 止盈止损详情修改触发价格触发价格类型
 *
 */
export const setStrategyUpdate: MarkcoinRequest<any> = data => {
  return request({
    path: `/v1/perpetual/orders/strategy/update`,
    method: 'POST',
    data,
  })
}

/**
 * 当前委托 - 计划委托 - 止盈止损详情修改触发价格触发价格类型
 *
 */
export const setPlanStrategyUpdate: MarkcoinRequest<any> = data => {
  return request({
    path: `/v1/perpetual/plan/orders/strategy/update`,
    method: 'POST',
    data,
  })
}

/**
 * 当前委托 - 计划委托 - 止盈止损详情修改触发价格触发价格类型
 *
 */
export const setPerpetualPlanOrders: MarkcoinRequest<any> = data => {
  return request({
    path: `/v1/perpetual/plan/orders/${data.id}/margin`,
    method: 'POST',
    data: data.params,
  })
}

/**
 * 合约币对列表
 *
 */
export const getPerpetualTradePairList: MarkcoinRequest<
  YapiGetV1PerpetualTradePairListApiRequest,
  YapiGetV1PerpetualTradePairData
> = params => {
  return request({
    path: `/v1/perpetual/tradePair/list`,
    method: 'GET',
    params,
  })
}

/**
 * 合约币对详情
 *
 */
export const getPerpetualTradePairDetail: MarkcoinRequest<YapiGetV1PerpetualTradePairDetailApiRequest> = params => {
  return request({
    path: `/v1/perpetual/tradePair/detail`,
    method: 'GET',
    params,
  })
}

/**
 * 历史委托_普通委托
 *
 */
export const getPerpetualOrdersHistory: MarkcoinRequest<any> = params => {
  return request({
    path: `/v1/perpetual/orders/history`,
    method: 'GET',
    params,
  })
}

/**
 * 历史委托_计划委托
 *
 */
export const getPerpetualPlanOrdersHistory: MarkcoinRequest<any> = params => {
  return request({
    path: `/v1/perpetual/plan/orders/history`,
    method: 'GET',
    params,
  })
}

/**
 * 历史委托_止盈止损
 *
 */
export const getPerpetualStrategyOrdersHistory: MarkcoinRequest<any> = params => {
  return request({
    path: `/v1/perpetual/strategy/history`,
    method: 'GET',
    params,
  })
}

/**
 * 订单详情
 *
 */
export const getPerpetualOrdersDetails: MarkcoinRequest<any> = params => {
  return request({
    path: `/v1/perpetual/orders/details/${params.id}`,
    method: 'GET',
    params,
  })
}

/**
 * 查询成交历史
 *
 */

export const getClearingTradeHistory: MarkcoinRequest<
  YapiGetV1PerpetualClearingTradeHistoryApiRequest,
  YapiGetV1PerpetualClearingTradeHistoryData
> = params => {
  return request({
    path: `/v1/perpetual/clearing/trade/history`,
    method: 'GET',
    params,
  })
}

export const getFutureMarketTrades: MarkcoinRequest<{
  limit: number
  symbol: string
}> = params => {
  return request({
    path: `/perpetual-market-rest/v1/market/trades`,
    method: 'GET',
    params,
  })
}

/**
 * 查询成交历史
 *
 */

export const getFundingRateList: MarkcoinRequest<
  YapiGetV1PerpetualClearingFundingRateListApiRequest,
  YapiGetV1PerpetualClearingFundingRateData
> = params => {
  return request({
    path: `/v1/perpetual/clearing/fundingRate/list`,
    method: 'GET',
    params,
  })
}

/**
 * 订单详情成交历史
 *
 */

export const getFundingRateDetail: MarkcoinRequest<any> = params => {
  return request({
    path: `/v1/perpetual/assets/fundingRateDetail`,
    method: 'GET',
    params,
  })
}

/**
 * 订单详情资金明细列表
 *
 */

export const getPerpetualDetailList: MarkcoinRequest<
  YapiGetV1PerpetualOrderDetailListApiRequest,
  YapiGetV1PerpetualOrderDetailListApiResponse
> = params => {
  return request({
    path: `/v1/perpetual/order/detail/list`,
    method: 'GET',
    params,
  })
}

/**
 * 新建合约组
 */
export const setFutureGroupCreate: MarkcoinRequest<
  YapiPostV1PerpetualGroupCreateApiRequest,
  YapiPostV1PerpetualGroupCreateData
> = data => {
  return request({
    path: `/v1/perpetual/group/create`,
    method: 'POST',
    data,
  })
}
