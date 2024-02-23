/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-获取邀请用户明细导出地址↗](https://yapi.nbttfc365.com/project/44/interface/api/4343) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/inviteHistory/getUrl`
 * @更新时间 `2023-07-09 23:57:31`
 */
export interface YapiGetV1AgentInviteHistoryGetUrlApiRequest {
  /**
   * 搜索用户的uid
   */
  uid?: string
  /**
   * 是否是代理商
   */
  isAgt?: string
  /**
   * kyc认证专题
   */
  kycStatus?: string
  /**
   * 傘下人數最小人数
   */
  minChildNum?: string
  /**
   * 傘下人數最大人数
   */
  maxChildNum?: string
  /**
   * 好友現貨手續費最小比例
   */
  minSpot?: string
  /**
   * 好友現貨手續費最大比例
   */
  maxSpot?: string
  /**
   * 好友合約手續費最小比例
   */
  minContract?: string
  /**
   * 好友合約手續費最大比例
   */
  maxContract?: string
  /**
   * 好友借幣利息最小比例
   *
   */
  minBorrow?: string
  /**
   * 好友借幣利息最大比例
   *
   */
  maxBorrow?: string
  /**
   * 註冊开始時間，时间戳格式
   */
  registerStartTime?: string
  /**
   * 註冊结束時間，时间戳格式
   */
  registerEndTime?: string
}

/**
 * 接口 [代理商-获取邀请用户明细导出地址↗](https://yapi.nbttfc365.com/project/44/interface/api/4343) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/inviteHistory/getUrl`
 * @更新时间 `2023-07-09 23:57:31`
 */
export interface YapiGetV1AgentInviteHistoryGetUrlApiResponse {
  code?: number
  message?: string
  data?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-获取邀请用户明细导出地址↗](https://yapi.nbttfc365.com/project/44/interface/api/4343)
// **/
// export const getV1AgentInviteHistoryGetUrlApiRequest: MarkcoinRequest<
//   YapiGetV1AgentInviteHistoryGetUrlApiRequest,
//   YapiGetV1AgentInviteHistoryGetUrlApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/inviteHistory/getUrl",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
