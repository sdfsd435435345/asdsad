/**
 * 广告
 */
import request, { MarkcoinRequest } from '@/plugins/request'
import {
  AdvertAddReq,
  AdvertAddResp,
  AdvertAppealStatusReq,
  AdvertAppealStatusResp,
  AdvertCoincidenceListReq,
  AdvertCoincidenceListResp,
  AdvertCoinListReq,
  AdvertCoinListResp,
  AdvertDetailReq,
  AdvertDetailResp,
  AdvertDownReq,
  AdvertDownResp,
  AdvertListReq,
  AdvertListResp,
  AdvertMerchantInfoReq,
  AdvertMerchantInfoResp,
  AdvertOrderHistoryReq,
  AdvertOrderHistoryResp,
  AdvertPaymentListReq,
  AdvertPaymentListResp,
  AdvertReceiptListReq,
  AdvertReceiptListResp,
  AdvertReopenReq,
  AdvertReopenResp,
} from '@/typings/api/c2c/advertise/post-advertise'

/**
 * 发布广告单 - 获取广告重合度列表
 */
export const postAdvertCoincidenceList: MarkcoinRequest<AdvertCoincidenceListReq, AdvertCoincidenceListResp> = data => {
  return request({
    path: `/v1/c2c/advert/coincidenceList`,
    method: 'POST',
    data,
  })
}

/**
 * 发布广告单 - 获取支付方式列表
 */
export const getPaymentList: MarkcoinRequest<AdvertPaymentListReq, AdvertPaymentListResp> = params => {
  return request({
    path: `/v1/c2c/payment/list`,
    method: 'GET',
    params,
  })
}

/**
 * 发布广告单 - 获取交易区下收款账号列表
 */
export const getReceiptList: MarkcoinRequest<AdvertReceiptListReq, AdvertReceiptListResp> = params => {
  return request({
    path: `/v1/c2c/payment/reciveList/group`,
    method: 'GET',
    params,
  })
}

/**
 * 发布广告单
 */
export const postAdvertAdd: MarkcoinRequest<AdvertAddReq, AdvertAddResp> = data => {
  return request({
    path: `/v1/c2c/advert/add`,
    method: 'POST',
    data,
  })
}

/**
 * 发布广告单 - 获取当前的商家状态
 */
export const getMerchantInfo: MarkcoinRequest<AdvertMerchantInfoReq, AdvertMerchantInfoResp> = params => {
  return request({
    path: `/v1/c2c/merchant/info`,
    method: 'GET',
    params,
  })
}

/**
 * 广告记录 - 获取商户广告列表
 */
export const postAdvertList: MarkcoinRequest<AdvertListReq, AdvertListResp> = data => {
  return request({
    path: `/v1/c2c/advert/list`,
    method: 'POST',
    data,
  })
}

/**
 * 下架广告
 */
export const getAdvertDown: MarkcoinRequest<AdvertDownReq, AdvertDownResp> = params => {
  return request({
    path: `/v1/c2c/advert/down`,
    method: 'GET',
    params,
  })
}

/**
 * 删除广告
 */
export const getAdvertDelete: MarkcoinRequest<AdvertDownReq, AdvertDownResp> = params => {
  return request({
    path: `/v1/c2c/advert/delete`,
    method: 'GET',
    params,
  })
}

/**
 * 广告是否含有申诉中的订单
 */
export const getAdvertAppealStatus: MarkcoinRequest<AdvertAppealStatusReq, AdvertAppealStatusResp> = params => {
  return request({
    path: `/v1/c2c/advert/hasAppealOrder`,
    method: 'GET',
    params,
  })
}

/**
 * 广告是否有进行中的订单
 */
export const getAdvertProgressStatus: MarkcoinRequest<AdvertAppealStatusReq, AdvertAppealStatusResp> = params => {
  return request({
    path: `/v1/c2c/advert/hasProgressOrder`,
    method: 'GET',
    params,
  })
}

/**
 * 重新上架广告
 */
export const postAdvertReopen: MarkcoinRequest<AdvertReopenReq, AdvertReopenResp> = data => {
  return request({
    path: `/v1/c2c/advert/up`,
    method: 'POST',
    data,
  })
}

/**
 * 广告详情
 */
export const getAdvertDetail: MarkcoinRequest<AdvertDetailReq, AdvertDetailResp> = params => {
  return request({
    path: `/v1/c2c/advert/detail`,
    method: 'GET',
    params,
  })
}

/**
 * 广告详情 - 历史订单
 */
export const getAdvertOrderHistory: MarkcoinRequest<AdvertOrderHistoryReq, AdvertOrderHistoryResp> = params => {
  return request({
    path: `/v1/c2c/order/getsPageBy`,
    method: 'GET',
    params,
  })
}

/**
 * 广告记录 - 获取发布过广告的币种列表
 */
export const postAdvertCoinList: MarkcoinRequest<AdvertCoinListReq, AdvertCoinListResp[]> = data => {
  return request({
    path: `/v1/c2c/coin/advert/list`,
    method: 'POST',
    data,
  })
}
