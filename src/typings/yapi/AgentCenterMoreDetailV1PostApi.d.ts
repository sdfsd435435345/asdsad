/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理中心-更多详情↗](https://yapi.nbttfc365.com/project/44/interface/api/18509) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/center/moreDetail`
 * @更新时间 `2023-10-09 16:55:58`
 */
export interface YapiPostV1AgentCenterMoreDetailApiRequest {
  /**
   * 模式("threeLevel", "三级代理"), PYRAMID("pyramid", "金字塔代理"), AREA("area", "区域代理")
   */
  model: string
  /**
   * uid
   */
  uid?: number
  /**
   * 产品线
   */
  productCd?: string
  /**
   * 区域等级
   */
  areaLevel?: number
  /**
   * 团队人数(低)/邀请人数
   */
  inviteNumMin?: number
  /**
   * 团队人数(高)/邀请人数
   */
  inviteNumMax?: number
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
  pageNum: number
  /**
   * 每页条数
   */
  pageSize: number
  /**
   * 是否查看直属下级1是，2否 默认否(web页面使用)
   */
  isChildUid?: number
  /**
   * 1查询用户uid，2查询上级uid
   */
  queryUidType?: number
  parentUid?: number
}

/**
 * 接口 [代理中心-更多详情↗](https://yapi.nbttfc365.com/project/44/interface/api/18509) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/center/moreDetail`
 * @更新时间 `2023-10-09 16:55:58`
 */
export interface YapiPostV1AgentCenterMoreDetailApiResponse {
  code?: number
  data?: YapiPostV1AgentCenterMoreDetailData
  message?: string
}
export interface YapiPostV1AgentCenterMoreDetailData {
  areaAgentUserDetailList?: YapiPostV1AgentCenterMoreDetailListAreaAgentUserDetailListData[]
  pyramidAgentUserDetailList?: YapiPostV1AgentCenterMoreDetailListPyramidAgentUserDetailListData[]
  thirdLevelUserDetailList?: YapiPostV1AgentCenterMoreDetailListThirdLevelUserDetailListData[]
  /**
   * 币种
   */
  currencySymbol: string
}
export interface YapiPostV1AgentCenterMoreDetailListAreaAgentUserDetailListData {
  /**
   * 产品线
   */
  productCd?: string
  /**
   * 用户UID
   */
  uid?: number
  /**
   * 上级UID
   */
  parentUid?: number
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 手机号
   */
  mobileNumber?: number
  /**
   * 邮箱
   */
  email?: string
  /**
   * KYC认证类型
   */
  kycType?: number
  /**
   * 邀请人数
   */
  inviteNum?: number
  /**
   * 团队人数
   */
  teamNum?: number
  /**
   * 代理级别
   */
  agentLevel?: number
  /**
   * 区域返佣等级
   */
  rebateLevel?: number
  /**
   * 区域返佣比例
   */
  rebateRatio?: number
  /**
   * 团队返佣(USD)
   */
  teamRebate?: number
  /**
   * 团队手续费(USD)
   */
  teamFee?: number
  /**
   * 团队贡献返佣(USD)
   */
  teamContributionRebate?: number
  /**
   * 总入金(USD)
   */
  incoming?: number
  /**
   * 总出金(USD)
   */
  withdraw?: number
  /**
   * 注册时间
   */
  registerDate?: number
}
export interface YapiPostV1AgentCenterMoreDetailListPyramidAgentUserDetailListData {
  /**
   * 产品线
   */
  productCd?: string
  /**
   * 用户UID
   */
  uid?: number
  /**
   * 上级UID
   */
  parentUid?: number
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 手机号
   */
  mobileNumber?: number
  /**
   * 邮箱
   */
  email?: string
  /**
   * KYC认证类型
   */
  kycType?: number
  /**
   * 邀请人数
   */
  inviteNum?: number
  /**
   * 团队人数
   */
  teamNum?: number
  /**
   * 代理级别
   */
  agentLevel?: number
  /**
   * 产品线返佣比例列表
   */
  productRebateList?: YapiPostV1AgentCenterMoreDetailListProductRebateListPyramidAgentUserDetailListData[]
  /**
   * 团队返佣(USD)
   */
  teamRebate?: number
  /**
   * 团队手续费(USD)
   */
  teamFee?: number
  /**
   * 团队贡献返佣(USD)
   */
  teamContributionRebate?: number
  /**
   * 总入金(USD)
   */
  incoming?: number
  /**
   * 总出金(USD)
   */
  withdraw?: number
  /**
   * 注册时间
   */
  registerDate?: number
}
export interface YapiPostV1AgentCenterMoreDetailListProductRebateListPyramidAgentUserDetailListData {
  /**
   * 现货、合约、娱乐区、三元期权等
   */
  productCd?: string
  /**
   * 比例
   */
  ratio?: number
}
export interface YapiPostV1AgentCenterMoreDetailListThirdLevelUserDetailListData {
  /**
   * 产品线
   */
  productCd?: string
  /**
   * 用户UID
   */
  uid?: number
  /**
   * 上级UID
   */
  parentUid?: number
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 手机号
   */
  mobileNumber?: number
  /**
   * 邮箱
   */
  email?: string
  /**
   * KYC认证类型
   */
  kycType?: number
  /**
   * 邀请人数
   */
  inviteNum?: number
  /**
   * 代理级别
   */
  agentLevel?: number
  /**
   * TA的手续费(USD)
   */
  fee?: number
  /**
   * TA的贡献返佣(USD)
   */
  contributionRebate?: number
  /**
   * 总入金(USD)
   */
  incoming?: number
  /**
   * 总出金(USD)
   */
  withdraw?: number
  /**
   * 注册时间
   */
  registerDate?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理中心-更多详情↗](https://yapi.nbttfc365.com/project/44/interface/api/18509)
// **/
// export const postV1AgentCenterMoreDetailApiRequest: MarkcoinRequest<
//   YapiPostV1AgentCenterMoreDetailApiRequest,
//   YapiPostV1AgentCenterMoreDetailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/center/moreDetail",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
