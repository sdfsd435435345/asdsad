/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-管理邀请码查询↗](https://yapi.nbttfc365.com/project/44/interface/api/4283) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/invitationCode/pageList`
 * @更新时间 `2023-08-18 16:31:43`
 */
export interface YapiGetV1AgentInvitationCodePageListApiRequest {
  /**
   * 1
   */
  page: string
  /**
   * 10
   */
  pageSize: string
}

/**
 * 接口 [代理商-管理邀请码查询↗](https://yapi.nbttfc365.com/project/44/interface/api/4283) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/invitationCode/pageList`
 * @更新时间 `2023-08-18 16:31:43`
 */
export interface YapiGetV1AgentInvitationCodePageListApiResponse {
  code: string
  message: string
  data: YapiGetV1AgentInvitationCodePageData
}
export interface YapiGetV1AgentInvitationCodePageData {
  /**
   * 邀请码名称
   */
  invitationCodeName: string
  /**
   * 邀请码
   */
  invitationCode: string
  /**
   * 创建时间戳
   */
  createdByTime: number
  /**
   * 好友数
   */
  invitationNum: string
  /**
   * 邀请连接
   */
  invitationLink: string
  /**
   * 自身现货分成
   */
  spotSelfRate: string
  /**
   * 好友现货分成
   */
  spotChildRate: string
  /**
   * 自身合约分成
   */
  contractSelfRate: string
  /**
   * 好友合约分成
   */
  contractChildRate: string
  /**
   * 自身借币分成
   */
  borrowCoinSelfRate: string
  /**
   * 好友借币分成
   */
  borrowCoinChildRate: string
  /**
   * 三元期权自身分成
   */
  optionSelfRate: string
  /**
   * 三元期权好友分成
   */
  optionChildRate: string
  /**
   * 娱乐区自身分成
   */
  recreationSelfRate: string
  /**
   * 娱乐区好友分成
   */
  recreationChildRate: string
  /**
   * 邀请人详情
   */
  analysisList: YapiGetV1AgentInvitationCodePageListAnalysisListData[]
  /**
   * 邀请码id
   */
  id: string
  /**
   * 是否默认邀请码: 1是2否
   */
  isDefault: string
  /**
   * 可创建二维码数量
   */
  createdCode: string
}
export interface YapiGetV1AgentInvitationCodePageListAnalysisListData {
  /**
   * 时间戳
   */
  date: number
  uid: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-管理邀请码查询↗](https://yapi.nbttfc365.com/project/44/interface/api/4283)
// **/
// export const getV1AgentInvitationCodePageListApiRequest: MarkcoinRequest<
//   YapiGetV1AgentInvitationCodePageListApiRequest,
//   YapiGetV1AgentInvitationCodePageListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/invitationCode/pageList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
