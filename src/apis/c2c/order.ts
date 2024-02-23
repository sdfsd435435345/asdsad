import request, { MarkcoinRequest } from '@/plugins/request'
import {
  IC2cAppealOrderReq,
  IC2cCancelOrderReq,
  IC2cOrderDetail,
  IC2cQueryOrderListReq,
  IC2cQueryOrderListResp,
  IC2cUpdateOrderStatusReq,
} from '@/typings/api/c2c/order'
import {
  YapiGetV1AppealGetReasonListApiRequest,
  YapiGetV1AppealGetReasonListData,
} from '@/typings/yapi/AppealGetReasonListV1GetApi'
import {
  YapiPostV1C2cCoinOrderListApiRequest,
  YapiPostV1C2CCoinOrderListData,
} from '@/typings/yapi/C2cCoinOrderListV1PostApi'
import { YapiPostV1C2cOrderAddComplaintInformationApiRequest } from '@/typings/yapi/C2cOrderAddComplaintInformationV1PostApi'

/**
 * 获取订单列表
 * https://yapi.nbttfc365.com/project/73/interface/api/4967
 */
export const queryC2cOrderList: MarkcoinRequest<IC2cQueryOrderListReq, IC2cQueryOrderListResp> = params => {
  return request({
    path: '/v1/c2c/order/getsPageBy',
    params,
  })
}
/**
 * 查询订单详情
 * https://yapi.nbttfc365.com/project/73/interface/api/4563
 */
export const queryC2cOrderDetail: MarkcoinRequest<{ id: string }, IC2cOrderDetail> = ({ id }) => {
  return request({
    path: `/v1/c2c/order/detail`,
    params: {
      id,
    },
  })
}
/**
 * 更新订单状态
 * https://yapi.nbttfc365.com/project/73/interface/api/4555
 */
export const updateC2cOrderStatus: MarkcoinRequest<IC2cUpdateOrderStatusReq> = data => {
  return request({
    path: `/v1/c2c/order/changeStatus`,
    data,
    method: 'POST',
  })
}
/**
 * 催对方转币
 * https://yapi.nbttfc365.com/project/73/interface/api/5345
 */
export const urgeC2cOrder: MarkcoinRequest<{ id: string }> = ({ id }) => {
  return request({
    path: `/v1/c2c/order/urge`,
    method: 'POST',
    data: {
      id,
    },
  })
}
/**
 * 取消订单
 * https://yapi.nbttfc365.com/project/73/interface/api/4551
 */
export const cancelC2cOrder: MarkcoinRequest<IC2cCancelOrderReq> = data => {
  return request({
    path: `/v1/c2c/order/cancel`,
    data,
    method: 'POST',
  })
}

/**
 * 申诉订单
 * https://yapi.nbttfc365.com/project/73/interface/api/4559
 */
export const appealC2cOrder: MarkcoinRequest<IC2cAppealOrderReq> = data => {
  return request({
    path: `/v1/c2c/order/appeal`,
    data,
    method: 'POST',
  })
}
/**
 * 上传申诉资料
 * https://yapi.nbttfc365.com/project/73/interface/api/5201
 */
export const appealC2cOrderUpload: MarkcoinRequest<YapiPostV1C2cOrderAddComplaintInformationApiRequest> = data => {
  return request({
    path: `/v1/c2c/order/addComplaintInformation`,
    data,
    method: 'POST',
  })
}

/**
 * [交易过的币种列表↗](https://yapi.nbttfc365.com/project/73/interface/api/5519)
 * */
export const getC2cCoinsTraded: MarkcoinRequest<
  YapiPostV1C2cCoinOrderListApiRequest,
  YapiPostV1C2CCoinOrderListData[]
> = data => {
  return request({
    path: '/v1/c2c/coin/order/list',
    method: 'POST',
    data,
  })
}

/**
 * [获取申诉原因的集合↗](https://yapi.nbttfc365.com/project/73/interface/api/5529)
 * */
export const getV1AppealGetReasonListApiRequest: MarkcoinRequest<
  YapiGetV1AppealGetReasonListApiRequest,
  YapiGetV1AppealGetReasonListData[]
> = params => {
  return request({
    path: '/v1/appeal/getReasonList',
    method: 'GET',
    params,
  })
}
