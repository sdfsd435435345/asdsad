/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理中心-邀请详情-TA的邀请↗](https://yapi.nbttfc365.com/project/44/interface/api/18369) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/center/hisInvitation`
 * @更新时间 `2023-09-28 17:18:59`
 */
export interface YapiGetV1AgentCenterHisInvitationApiRequest {
  /**
   * uid
   */
  uid: string
  /**
   * 模式("threeLevel", "三级代理"), PYRAMID("pyramid", "金字塔代理"), AREA("area", "区域代理")
   */
  model: string
}

/**
 * 接口 [代理中心-邀请详情-TA的邀请↗](https://yapi.nbttfc365.com/project/44/interface/api/18369) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/center/hisInvitation`
 * @更新时间 `2023-09-28 17:18:59`
 */
export interface YapiGetV1AgentCenterHisInvitationApiResponse {
  message?: string
  data?: YapiGetV1AgentCenterHisInvitationData
  code?: number
}
export interface YapiGetV1AgentCenterHisInvitationData {
  areaAgentInviteDto?: YapiGetV1AgentCenterHisInvitationAreaAgentInviteDtoData
  pyramidAgentInviteDto?: YapiGetV1AgentCenterHisInvitationPyramidAgentInviteDtoData
  threeLevelAgentInviteDto?: YapiGetV1AgentCenterHisInvitationThreeLevelAgentInviteDtoData
}
/**
 * 区域代理
 */
export interface YapiGetV1AgentCenterHisInvitationAreaAgentInviteDtoData {
  /**
   * uid
   */
  uid?: number
  /**
   * TA的区域返佣比例
   */
  rebateRatio?: number
  /**
   * 昵称:昵称＞邮箱＞手机号
   */
  nickName?: string
  /**
   * 是否已实名,1.是，2.否
   */
  isRealName?: number
  /**
   * 代理等级
   */
  rebateLevel?: number
  /**
   * 代理层级
   */
  agentLevel?: number
  /**
   * TA的邀请人数
   */
  inviteNum?: number
  /**
   * TA的团队人数
   */
  teamNum?: number
  /**
   * 注册时间
   */
  registerDate?: number
  parentUid?: number
  id?: number
}
/**
 * 金字塔代理
 */
export interface YapiGetV1AgentCenterHisInvitationPyramidAgentInviteDtoData {
  /**
   * 昵称:昵称＞邮箱＞手机号
   */
  nickName?: string
  /**
   * TA的邀请人数
   */
  inviteNum?: number
  /**
   * TA的团队人数
   */
  teamNum?: number
  /**
   * 注册时间
   */
  registerDate?: number
  /**
   * uid
   */
  uid?: string
  /**
   * 是否已实名,1.是，2.否
   */
  isRealName?: number
  /**
   * 金字塔返佣
   */
  productRebateList?: YapiGetV1AgentCenterHisInvitationListProductRebateListPyramidAgentInviteDtoData[]
  /**
   * 代理层级
   */
  agentLevel?: number
  parentUid?: number
  id?: number
}
export interface YapiGetV1AgentCenterHisInvitationListProductRebateListPyramidAgentInviteDtoData {
  /**
   * 现货、合约、娱乐区、三元期权等
   */
  productCd?: string
  /**
   * 我的返佣比例
   */
  selfRatio?: number
  /**
   * 好友返佣比例
   */
  childRatio?: number
}
export interface YapiGetV1AgentCenterHisInvitationThreeLevelAgentInviteDtoData {
  /**
   * 昵称:昵称＞邮箱＞手机号
   */
  nickName?: string
  /**
   * 是否已实名,1.是，2.否
   */
  isRealName?: number
  /**
   * uid
   */
  uid?: number
  /**
   * TA的邀请人数
   */
  inviteNum?: number
  /**
   * 注册时间
   */
  registerDate?: number
  /**
   * TA的代理层级
   */
  agentLevel?: number
  parentUid?: number
  id?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理中心-邀请详情-TA的邀请↗](https://yapi.nbttfc365.com/project/44/interface/api/18369)
// **/
// export const getV1AgentCenterHisInvitationApiRequest: MarkcoinRequest<
//   YapiGetV1AgentCenterHisInvitationApiRequest,
//   YapiGetV1AgentCenterHisInvitationApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/center/hisInvitation",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
