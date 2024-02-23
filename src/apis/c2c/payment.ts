import request, { MarkcoinRequest } from '@/plugins/request'
import {
  YapiGetV1C2cPaymentReciveListApiRequest,
  YapiGetV1C2CPaymentReciveData,
} from '@/typings/yapi/C2cPaymentReciveListV1GetApi'
import { YapiGetV1C2cPaymentListApiRequest, YapiGetV1C2CPaymentData } from '@/typings/yapi/C2cPaymentListV1GetApi'
import { YapiPostV1C2cPaymentReciveEnabledApiRequest } from '@/typings/yapi/C2cPaymentReciveEnabledV1PostApi'
import { YapiPostV1C2cPaymentEnabledApiRequest } from '@/typings/yapi/C2cPaymentEnabledV1PostApi'

/** 收款方式列表* */
export const getPaymentReciveList: MarkcoinRequest<
  YapiGetV1C2cPaymentReciveListApiRequest,
  YapiGetV1C2CPaymentReciveData
> = params => {
  return request({
    path: '/v1/c2c/payment/reciveList',
    method: 'GET',
    params,
  })
}

/** 付款方式列表* */
export const getPaymentList: MarkcoinRequest<YapiGetV1C2cPaymentListApiRequest, YapiGetV1C2CPaymentData> = params => {
  return request({
    path: '/v1/c2c/payment/list',
    method: 'GET',
    params,
  })
}

/** 付款方式开关* */
export const getPaymentReciveEnabled: MarkcoinRequest<YapiPostV1C2cPaymentReciveEnabledApiRequest> = data => {
  return request({
    path: '/v1/c2c/payment/recive/enabled',
    method: 'POST',
    data,
  })
}

/** 收款方式开关* */
export const getPaymentEnabled: MarkcoinRequest<YapiPostV1C2cPaymentEnabledApiRequest> = data => {
  return request({
    path: '/v1/c2c/payment/enabled',
    method: 'POST',
    data,
  })
}

/** 收付款顺序* */
export const getDragChangePayment: MarkcoinRequest = data => {
  return request({
    path: '/v1/c2c/payment/receiveList/sort',
    method: 'POST',
    data,
  })
}

/** 获取付款用户详情* */
export const getPaymentUser: MarkcoinRequest = params => {
  return request({
    path: '/v1/c2c/payment/get',
    method: 'GET',
    params,
  })
}

/** 收款方式修改前置判断* */
export const setReciveEditJudge: MarkcoinRequest = data => {
  return request({
    path: '/v1/c2c/payment/recive/edit/judge',
    method: 'POST',
    data,
  })
}

/** 增加收款方式* */
export const addPayment: MarkcoinRequest = data => {
  return request({
    path: '/v1/c2c/payment/add',
    method: 'POST',
    data,
  })
}

/** 修改收款方式* */
export const modifyPayment: MarkcoinRequest = data => {
  return request({
    path: '/v1/c2c/payment/modify',
    method: 'POST',
    data,
  })
}

/** 删除收款方式* */
export const removePayment: MarkcoinRequest = data => {
  return request({
    path: '/v1/c2c/payment/remove',
    method: 'POST',
    data,
  })
}
