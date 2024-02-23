/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理中心-邀请详情-TA的邀请-被邀请人信息↗](https://yapi.nbttfc365.com/project/44/interface/api/18394) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/center/hisInvitee`
 * @更新时间 `2023-10-11 14:38:31`
 */
export interface YapiPostV1AgentCenterHisInviteeApiRequest {
  /**
   * 邀请的用户uid
   */
  uid?: number
  /**
   * 模式
   */
  model?: string
  /**
   * 注册时间排序，默认倒序，1.正，2.倒
   */
  registerDateSort?: number
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
  page: number
  /**
   * 每页条数
   */
  pageSize: number
  searchUid?: number
  rebateLevel?: number
  sort?: number
}

/**
 * 接口 [代理中心-邀请详情-TA的邀请-被邀请人信息↗](https://yapi.nbttfc365.com/project/44/interface/api/18394) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/center/hisInvitee`
 * @更新时间 `2023-10-11 14:38:31`
 */
export interface YapiPostV1AgentCenterHisInviteeApiResponse {
  code?: number
  data?: YapiPostV1AgentCenterHisInviteeData
  message?: string
}
export interface YapiPostV1AgentCenterHisInviteeData {
  /**
   * 金字塔代理被邀请人列表
   */
  pyramidAgentInviteeList?: YapiPostV1AgentCenterHisInviteeListPyramidAgentInviteeListData[]
  /**
   * 区域代理被邀请人列表
   */
  areaAgentInviteeList?: YapiPostV1AgentCenterHisInviteeListAreaAgentInviteeListData[]
  /**
   * 三级代理被邀请人列表
   */
  threeLevelAgentInviteeList?: YapiPostV1AgentCenterHisInviteeListThreeLevelAgentInviteeListData[]
  /**
   * 查看页码
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
   * 总页码
   */
  pageTotal?: number
}
export interface YapiPostV1AgentCenterHisInviteeListPyramidAgentInviteeListData {
  /**
   * 注册时间
   */
  registerDate?: number
  /**
   * 昵称:昵称＞邮箱＞手机号
   */
  nickName?: string
  /**
   * uid
   */
  uid?: string
  /**
   * 金字塔返佣
   */
  productRebateList?: YapiPostV1AgentCenterHisInviteeListProductRebateListPyramidAgentInviteeListData[]
  /**
   * 是否已实名,1.是，2.否
   */
  isRealName?: number
  /**
   * TA的团队人数
   */
  teamNum?: number
  /**
   * TA的邀请人数
   */
  inviteNum?: number
}
export interface YapiPostV1AgentCenterHisInviteeListProductRebateListPyramidAgentInviteeListData {
  /**
   * 我的返佣比例
   */
  myRatio?: number
  /**
   * 好友返佣比例
   */
  friendRatio?: number
  /**
   * 现货、合约、娱乐区、三元期权等
   */
  productCd?: string
}
export interface YapiPostV1AgentCenterHisInviteeListAreaAgentInviteeListData {
  /**
   * 是否已实名,1.是，2.否
   */
  isRealName?: number
  /**
   * TA的区域返佣比例
   */
  rebateRatio?: number
  /**
   * TA的邀请人数
   */
  inviteNum?: string
  /**
   * 昵称:昵称＞邮箱＞手机号
   */
  nickName?: string
  /**
   * uid
   */
  uid?: string
  /**
   * 注册时间
   */
  registerDate?: string
  /**
   * TA的团队人数
   */
  teamNum?: string
  /**
   * 代理等级
   */
  rebateLevel?: string
}
export interface YapiPostV1AgentCenterHisInviteeListThreeLevelAgentInviteeListData {
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
  uid?: string
  /**
   * TA的邀请人数
   */
  inviteNum?: number
  /**
   * 注册时间
   */
  registerDate?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理中心-邀请详情-TA的邀请-被邀请人信息↗](https://yapi.nbttfc365.com/project/44/interface/api/18394)
// **/
// export const postV1AgentCenterHisInviteeApiRequest: MarkcoinRequest<
//   YapiPostV1AgentCenterHisInviteeApiRequest,
//   YapiPostV1AgentCenterHisInviteeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/center/hisInvitee",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
