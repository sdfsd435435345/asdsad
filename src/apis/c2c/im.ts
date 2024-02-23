import request, { MarkcoinRequest } from '@/plugins/request'

/* ========== 聊天服务 ========== */
/**
 * 获取 IM Token
 * https://yapi.nbttfc365.com/project/73/interface/api/5012
 */
export const getImToken: MarkcoinRequest<{ uid?: any }> = ({ customConfig = {}, ...options }) => {
  return request({
    path: `/v1/im/refreshToken`,
    method: 'POST',
    data: {
      uid: options.uid, // 用户 uid
    },
    ...customConfig,
  })
}

/**
 * 注册 im（此接口并未使用）
 * https://yapi.nbttfc365.com/project/73/interface/api/4985
 */
export const postRegisterIm: MarkcoinRequest = options => {
  return request({
    path: `/v1/im/register`,
    method: 'POST',
    data: {
      uid: options.uid, // 用户 uid
      userName: options.userName, // 昵称
      gender: options.gender, // 性别 0-未知 1 男 2 女
      icon: options.icon, // 头像
    },
  })
}

/**
 * 订单详情
 * https://yapi.nbttfc365.com/project/73/interface/api/4563
 */
export const getOrderDetail: MarkcoinRequest = options => {
  return request({
    path: `/v1/c2c/order/detail`,
    method: 'GET',
    params: {
      id: options.id, // 订单 id
    },
  })
}

/**
 * M 根据订单 ID 查询群 ID
 * https://yapi.nbttfc365.com/project/73/interface/api/5138
 */
export const getTeamId: MarkcoinRequest = options => {
  return request({
    path: `/v1/im/order/getTeamInfo`,
    method: 'GET',
    params: {
      orderId: options.orderId, // 订单 id
    },
  })
}
