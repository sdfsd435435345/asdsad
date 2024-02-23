/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理中心-邀请详情↗](https://yapi.nbttfc365.com/project/44/interface/api/15209) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/center/inviteeDetail`
 * @更新时间 `2023-10-11 14:37:09`
 */
export interface YapiPostV1AgentCenterInviteeDetailApiRequest {
  /**
   * 被邀请的用户uid(模糊查询)
   */
  uid?: number
  /**
   * 模式
   */
  model?: string
  /**
   * 排序规则 1.正，2.倒
   */
  registerDateSort?: string
  /**
   * 排序字段 ，默认按时间倒序 可传字段：1 时间；2 邀请人数；3团队人数
   */
  sort?: number
  /**
   * 代理等级(区域代理字段)
   */
  rebateLevel?: number
  /**
   * 实名状态,1.是，2.否
   */
  isRealName?: number
  /**
   * 团队人数(低)
   */
  teamNumMin?: number
  /**
   * 团队人数(高)
   */
  teamNumMax?: number
  /**
   * 注册时间(起)
   */
  startTime?: number
  /**
   * 注册时间(止)
   */
  endTime?: number
  /**
   * 当前页
   */
  pageNum?: number
  /**
   * 每页条数
   */
  pageSize?: number
}

/**
 * 接口 [代理中心-邀请详情↗](https://yapi.nbttfc365.com/project/44/interface/api/15209) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/center/inviteeDetail`
 * @更新时间 `2023-10-11 14:37:09`
 */
export interface YapiPostV1AgentCenterInviteeDetailApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1AgentCenterInviteeDetailData
}
export interface YapiPostV1AgentCenterInviteeDetailData {
  /**
   * 金字塔邀请详情列表
   */
  pyramidAgentInviteeList?: YapiPostV1AgentCenterInviteeDetailListPyramidAgentInviteeListData[]
  /**
   * 区域代理邀请详情列表
   */
  areaAgentInviteeList?: YapiPostV1AgentCenterInviteeDetailListAreaAgentInviteeListData[]
  threeLevelAgentInviteeList?: YapiPostV1AgentCenterInviteeDetailListThreeLevelAgentInviteeListData[]
  /**
   * 页码
   */
  pageNum?: number
  /**
   * 每页条数
   */
  pageSize?: number
  /**
   * 总条数
   */
  total?: number
  /**
   * 总页数
   */
  pageTotal?: number
}
export interface YapiPostV1AgentCenterInviteeDetailListPyramidAgentInviteeListData {
  /**
   * TA的邀请人数
   */
  inviteNum?: number
  /**
   * 是否已实名,1.是，2.否
   */
  isRealName?: number
  /**
   * 注册时间
   */
  registerDate?: number
  /**
   * TA的团队人数
   */
  teamNum?: number
  /**
   * uid
   */
  uid?: string
  /**
   * 金字塔产品返佣
   */
  productRebateList?: YapiPostV1AgentCenterInviteeDetailListProductRebateListPyramidAgentInviteeListData[]
  /**
   * 昵称:昵称＞邮箱＞手机号
   */
  nickName?: string
  /**
   * 是否调整过比例1是，2否
   */
  isTrimRatio?: number
}
export interface YapiPostV1AgentCenterInviteeDetailListProductRebateListPyramidAgentInviteeListData {
  /**
   * 我的返佣比例
   */
  selfRatio?: number
  /**
   * 好友返佣比例
   */
  childRatio?: number
  /**
   * 现货、合约、娱乐区、三元期权等
   */
  productCd?: string
}
export interface YapiPostV1AgentCenterInviteeDetailListAreaAgentInviteeListData {
  /**
   * TA的团队人数
   */
  teamNum?: number
  /**
   * uid
   */
  uid?: number
  /**
   * 区域等级标签
   */
  rebateLevel?: number
  /**
   * TA的邀请人数
   */
  inviteNum?: number
  /**
   * 昵称:昵称＞邮箱＞手机号
   */
  nickName?: string
  /**
   * 注册时间
   */
  registerDate?: number
  /**
   * TA的区域返佣比例
   */
  rebateRatio?: number
  /**
   * 是否已实名,1.是，2.否
   */
  isRealName?: number
}
export interface YapiPostV1AgentCenterInviteeDetailListThreeLevelAgentInviteeListData {
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
   * 团队人数
   */
  teamNum: number
  /**
   * 注册时间
   */
  registerDate?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理中心-邀请详情↗](https://yapi.nbttfc365.com/project/44/interface/api/15209)
// **/
// export const postV1AgentCenterInviteeDetailApiRequest: MarkcoinRequest<
//   YapiPostV1AgentCenterInviteeDetailApiRequest,
//   YapiPostV1AgentCenterInviteeDetailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/center/inviteeDetail",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
