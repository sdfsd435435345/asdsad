import { FutureOrderSystemTypeEnum, OrderTabTypeEnum } from '@/constants/order'
import { paramsArrayToString } from '@/helper/order'
import request, { MarkcoinRequest } from '@/plugins/request'
import {
  IBaseOrderItem,
  ICreateFutureStopLimitReq,
  IIQuerySpotPlanHistoryOrderListReq,
  IIQuerySpotPlanOpenOrderListReq,
  IOrderActionPrams,
  IQueryFutureOrderDetailReq,
  IQueryFutureOrderDetailResp,
  IQueryFutureOrderListReq,
  IQueryFutureOrderListResp,
  IQueryOrderDetailResp,
  IQuerySpotNormalHistoryOrderListReq,
  IQuerySpotNormalHistoryOrderListResp,
  IQuerySpotNormalOpenOrderListReq,
  IQuerySpotNormalOpenOrderListResp,
  IQuerySpotPlanHistoryOrderListResp,
  IQuerySpotPlanOpenOrderListResp,
  ISpotBatchCancelOrderReq,
  ISpotPlanOrderItem,
  IUpdateFutureStopLimitReq,
} from '@/typings/api/order'

const inGetParamsArrayKeys = ['status']

/**
 * 获取现货普通当前订单列表
 * https://yapi.admin-devops.com/project/44/interface/api/2774
 */
export const querySpotNormalOpenOrderList: MarkcoinRequest<
  IQuerySpotNormalOpenOrderListReq,
  IQuerySpotNormalOpenOrderListResp
> = params => {
  return request({
    path: `/v1/orders/current`,
    method: 'GET',
    params,
  })
}
/**
 * 获取现货普通订单详情
 * https://yapi.admin-devops.com/project/44/interface/api/2663
 */
export const querySpotNormalOpenOrderDetail: MarkcoinRequest<{ id }, IBaseOrderItem> = ({ id }) => {
  return request({
    path: `/v1/orders/details/${id}`,
    method: 'GET',
  })
}
/**
 * 获取现货普通历史订单列表
 * https://yapi.admin-devops.com/project/44/interface/api/2669
 */
export const querySpotNormalHistoryOrderList: MarkcoinRequest<
  IQuerySpotNormalHistoryOrderListReq,
  IQuerySpotNormalHistoryOrderListResp
> = params => {
  return request({
    path: `/v1/orders/history`,
    method: 'GET',
    params: paramsArrayToString(params, inGetParamsArrayKeys),
  })
}
/**
 * 获取现货计划订单当前订单列表
 * https://yapi.admin-devops.com/project/44/interface/api/2930
 */
export const querySpotPlanOpenOrderList: MarkcoinRequest<
  IIQuerySpotPlanOpenOrderListReq,
  IQuerySpotPlanOpenOrderListResp
> = params => {
  return request({
    path: `/v1/spl/page/current`,
    method: 'GET',
    params,
  })
}
/**
 * 获取现货计划订单历史订单列表
 * https://yapi.admin-devops.com/project/44/interface/api/2843
 */
export const querySpotPlanHistoryOrderList: MarkcoinRequest<
  IIQuerySpotPlanHistoryOrderListReq,
  IQuerySpotPlanHistoryOrderListResp
> = params => {
  return request({
    path: `/v1/spl/page/history`,
    method: 'GET',
    params: paramsArrayToString(params, inGetParamsArrayKeys),
  })
}
const futureOrderListUrlMap = {
  [OrderTabTypeEnum.holdings]: '/v1/perpetual/position/list-all',
  [OrderTabTypeEnum.current]: '/v2/perpetual/products/list',
  [OrderTabTypeEnum.plan]: '/v2/perpetual/products/condition/list',
  [OrderTabTypeEnum.profitLoss]: '/v2/perpetual/products/condition/list',
  [OrderTabTypeEnum.history]: '/v2/perpetual/products/history-list',
  [OrderTabTypeEnum.margin]: '/v1/perpetual/log/position-adjust',
}
/**
 * 获取合约订单列表
 * TODO: 地址
 */
export const queryFutureOrderList: MarkcoinRequest<
  IQueryFutureOrderListReq,
  IQueryFutureOrderListResp
> = async params => {
  const res = await request({
    path: futureOrderListUrlMap[params.tab],
    method: 'GET',
    params,
  })

  if (res.isOk && res.data) {
    // 处理数据结构不同步的问题
    res.data = {
      ...res.data,
      rows: res.data.rows || res.data.data || res.data,
      total: res.data.total || res.data.totalCount || res.data.length,
    }
  }

  return res
}
/**
 * 获取合约订单详情
 * TODO: 地址
 */
export const queryFutureOrderDetail: MarkcoinRequest<IQueryFutureOrderDetailReq, IQueryFutureOrderDetailResp> = ({
  order,
}) => {
  const isConditionOrder = order.refConditionOrderId !== '' && (order.refConditionOrderId as any) > 0
  return request({
    path: isConditionOrder
      ? `v2/perpetual/products/condition/detail/${order.contractCode}/${order.id}`
      : `/v1/perpetual/products/detail/${order.contractCode}/${order.id}`,
    method: 'GET',
  })
}

/**
 * 取消现货普通订单
 * https://yapi.admin-devops.com/project/44/interface/api/2672
 */
export const cancelSpotNormalOrder: MarkcoinRequest<IOrderActionPrams> = data => {
  return request({
    path: `/v1/orders/cancel/${data.id}`,
    method: 'DELETE',
  })
}
/**
 * 取消现货计划订单
 * https://yapi.admin-devops.com/project/44/interface/api/2997
 */
export const cancelAllSpotNormalOrder: MarkcoinRequest<ISpotBatchCancelOrderReq> = params => {
  return request({
    path: `/v1/orders/cancelAll`,
    method: 'DELETE',
    params,
  })
}
/**
 * 取消现货计划订单
 * https://yapi.admin-devops.com/project/44/interface/api/2997
 */
export const cancelSpotPlanOrder: MarkcoinRequest<IOrderActionPrams> = data => {
  return request({
    path: `/v1/spl/cancel/${data.id}`,
    method: 'DELETE',
  })
}
/**
 * 取消全部现货计划订单
 * https://yapi.admin-devops.com/project/44/interface/api/2933
 */
export const cancelAllSpotPlanOrder: MarkcoinRequest<ISpotBatchCancelOrderReq> = params => {
  return request({
    path: `/v1/spl/batchCancel`,
    method: 'DELETE',
    params,
  })
}
/**
 * 获取订单成交详情
 * TODO: 地址
 */
export const queryOrderDetail: MarkcoinRequest<IOrderActionPrams, IQueryOrderDetailResp> = params => {
  return request({
    path: `entrust/detail`,
    method: 'GET',
    params,
  })
}

/**
 * 撤销全部订单
 * TODO: 地址
 */
export const batchCancelOrder: MarkcoinRequest<{
  placeOrderType: number
}> = data => {
  return request({
    path: `v1/entrust/batchcancel`,
    method: 'POST',
    data,
  })
}
/**
 * 取消合约计划订单
 * TODO: 地址
 */
export const cancelFuturePlanOrder: MarkcoinRequest<IOrderActionPrams> = ({ code, id }) => {
  return request({
    path: `v1/perpetual/condition/${code}/order/${id}`,
    method: 'DELETE',
  })
}
/**
 * 调整保证金
 * TODO: 地址
 */
export const modifyOrderMargin: MarkcoinRequest<{
  code: string
  side: string
  margin: string
}> = params => {
  return request({
    path: `v1/perpetual/position/${params.code}/change-margin`,
    method: 'POST',
    params,
  })
}
/**
 * 设置止盈止损
 * TODO: 地址
 */
export const setFutureOrderStopLimit: MarkcoinRequest<ICreateFutureStopLimitReq> = params => {
  return request({
    path: `v1/perpetual/products/${params.code}/batch-order`,
    method: 'POST',
    data: params.data,
  })
}
/**
 * 更新止盈止损
 * TODO: 地址
 */
export const updateFutureOrderStopLimit: MarkcoinRequest<IUpdateFutureStopLimitReq> = params => {
  return request({
    path: `v2/perpetual/products/condition/modify/${params.id}`,
    method: 'PUT',
    params,
  })
}
/**
 * 查询最新价
 * TODO: 地址
 */
export const queryFutureLatestPrice: MarkcoinRequest<
  {
    code: string
  },
  {
    11: string
  }
> = ({ code }) => {
  return request({
    path: `v1/perpetual/public/products/${code}/ticker`,
    method: 'GET',
  })
}
/**
 * 持仓市价全平
 * TODO: 地址待定
 */
export const cancelAllHoldingOrderByMarketPrice: MarkcoinRequest<{
  code: string
  side: string
  amount: string
  triggerPrice: string
}> = ({ code, ...params }) => {
  return request({
    path: `v1/perpetual/products/${code}/order`,
    method: 'POST',
    contentType: 1,
    params: {
      ...params,
      triggerBy: null,
      type: FutureOrderSystemTypeEnum.market,
    },
  })
}
/**
 * 获取杠杆订单 交易区
 * TODO: 地址
 */
export const getLeverOrderAreaList: MarkcoinRequest<
  any,
  {
    areas: {
      areaId: string
      tradeArea: string
    }[]
  }
> = () => {
  return request({
    path: `margin/tradeArea/list`,
    method: 'GET',
  })
}
/**
 * 迁移合约持仓订单
 * TODO: 地址
 */
export const migrateFutureHoldingOrder: MarkcoinRequest<{
  groupId: string
  amount: number
  orderId: string
}> = data => {
  return request({
    path: `v2/perpetual/products/condition/modify`,
    method: 'PUT',
    data,
  })
}
/**
 * 锁仓合约订单
 * TODO: 地址
 */
export const lockPositionFutureHoldingOrder: MarkcoinRequest<{
  percent: number
  orderId: string
}> = data => {
  return request({
    path: `v2/perpetual/products/condition/modify`,
    method: 'PUT',
    data,
  })
}
