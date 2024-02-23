/** ws 所有状态 */
export enum WSStatusEnum {
  connecting,
  open,
  closing,
  closed,
  reconnect,
  fail,
}

/** 发送消息类型 */
export enum WSSendTypeEnum {
  login = 'login',
  logout = 'logout',
  subscribe = 'subscribe',
  unsubscribe = 'unsubscribe',
  connect = 'connect',
}

export enum WSThrottleTypeEnum {
  // 不需要延迟
  none,
  // 覆盖式更新数据
  cover,
  // 增量更新数据
  increment,
}
export enum WSBaseThrottleWaitEnum {
  // 不需要
  none = -1,
}

export enum WSSubscribeChannelsEnum {
  ticker = 'ticker',
}
// https://cd.admin-devops.com/zentao/doc-objectLibs-custom-0-79-665.html#app=doc
export const subscribeReqKeys = ['biz', 'type', 'contractCode', 'granularity']
