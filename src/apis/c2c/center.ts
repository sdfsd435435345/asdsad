import request, { MarkcoinRequest } from '@/plugins/request'
import { YapiGetV1C2CCoinAllListData } from '@/typings/yapi/C2cCoinAllV1GetApi'

/** 广告账户余额列表* */
export const getBalanceC2cList: MarkcoinRequest = () => {
  return request({
    path: '/v1/c2c/balance/list',
    method: 'GET',
  })
}

/** 关注列表* */
export const getFollowList: MarkcoinRequest = params => {
  return request({
    path: '/v1/c2c/follow/list',
    method: 'GET',
    params,
  })
}

/** 添加关注* */
export const addFollowUser: MarkcoinRequest = data => {
  return request({
    path: '/v1/c2c/follow/add',
    method: 'POST',
    data,
  })
}

/** 取消关注* */
export const unFollowUser: MarkcoinRequest = data => {
  return request({
    path: '/v1/c2c/follow/unFollow',
    method: 'POST',
    data,
  })
}

/** 黑名单列表* */
export const getBlackList: MarkcoinRequest = params => {
  return request({
    path: '/v1/c2c/blackList',
    method: 'GET',
    params,
  })
}

/** 加入黑名单列表* */
export const addBlackList: MarkcoinRequest = data => {
  return request({
    path: '/v1/c2c/blackList/add',
    method: 'POST',
    data,
  })
}

/** 移除黑名单列表* */
export const delBlackList: MarkcoinRequest = data => {
  return request({
    path: '/v1/c2c/blackList/cancel',
    method: 'POST',
    data,
  })
}

/** 获取当前设置* */
export const getC2cPersonSetting: MarkcoinRequest = () => {
  return request({
    path: '/v1/c2c/setting',
    method: 'GET',
  })
}

/** 设置接口* */
export const setC2cPersonSetting: MarkcoinRequest = data => {
  return request({
    path: '/v1/c2c/setting',
    method: 'POST',
    data,
  })
}

/** 获取币种* */
export const getC2cCoinTypeList: MarkcoinRequest<any, YapiGetV1C2CCoinAllListData[]> = () => {
  return request({
    path: '/v1/c2c/coin/all',
    method: 'GET',
  })
}

/** 资金划转* */
export const addC2cFundsTransfer: MarkcoinRequest = data => {
  return request({
    path: '/v1/c2c/balance/transfer',
    method: 'POST',
    data,
  })
}

/** 广告列表* */
export const getAdvertList: MarkcoinRequest = data => {
  return request({
    path: '/v1/c2c/advert/list',
    method: 'POST',
    data,
  })
}

/** 获取可交易区列表* */
export const getAreaList: MarkcoinRequest = params => {
  return request({
    path: '/v1/c2c/area/list',
    method: 'GET',
    params,
  })
}
