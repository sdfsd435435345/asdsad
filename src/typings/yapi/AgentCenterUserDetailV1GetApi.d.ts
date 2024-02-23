/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理中心-更多详情-个人详情(弃用)↗](https://yapi.nbttfc365.com/project/44/interface/api/18464) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/center/userDetail`
 * @更新时间 `2023-09-25 14:59:05`
 */
export interface YapiGetV1AgentCenterUserDetailApiRequest {
  /**
   * 模式
   */
  model: string
  /**
   * uid
   */
  uid: string
  /**
   * 产品线
   */
  productCd: string
}

/**
 * 接口 [代理中心-更多详情-个人详情(弃用)↗](https://yapi.nbttfc365.com/project/44/interface/api/18464) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/center/userDetail`
 * @更新时间 `2023-09-25 14:59:05`
 */
export interface YapiGetV1AgentCenterUserDetailApiResponse {
  code?: number
  data?: YapiGetV1AgentCenterUserDetailData
  message?: string
}
export interface YapiGetV1AgentCenterUserDetailData {
  areaAgentUserDetailDto?: YapiGetV1AgentCenterUserDetailAreaAgentUserDetailDtoData
  pyramidAgentUserDetailDto?: YapiGetV1AgentCenterUserDetailPyramidAgentUserDetailDtoData
  thirdLevelUserDetailDto?: YapiGetV1AgentCenterUserDetailThirdLevelUserDetailDtoData
}
export interface YapiGetV1AgentCenterUserDetailAreaAgentUserDetailDtoData {
  /**
   * 产品线
   */
  productCd?: string
  /**
   * 用户UID
   */
  uid?: string
  /**
   * 上级UID
   */
  parentUid?: string
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 手机号
   */
  mobileNumber?: string
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
export interface YapiGetV1AgentCenterUserDetailPyramidAgentUserDetailDtoData {
  /**
   * 产品线
   */
  productCd?: string
  /**
   * 用户UID
   */
  uid?: string
  /**
   * 上级UID
   */
  parentUid?: string
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 手机号
   */
  mobileNumber?: string
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
  productRebateList?: YapiGetV1AgentCenterUserDetailListProductRebateListPyramidAgentUserDetailDtoData[]
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
export interface YapiGetV1AgentCenterUserDetailListProductRebateListPyramidAgentUserDetailDtoData {
  /**
   * 现货、合约、娱乐区、三元期权等
   */
  product?: string
  /**
   * 比例
   */
  ratio?: string
}
export interface YapiGetV1AgentCenterUserDetailThirdLevelUserDetailDtoData {
  /**
   * 产品线
   */
  productCd?: string
  /**
   * 用户UID
   */
  uid?: string
  /**
   * 上级UID
   */
  parentUid?: string
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 手机号
   */
  mobileNumber?: string
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
// * [代理中心-更多详情-个人详情(弃用)↗](https://yapi.nbttfc365.com/project/44/interface/api/18464)
// **/
// export const getV1AgentCenterUserDetailApiRequest: MarkcoinRequest<
//   YapiGetV1AgentCenterUserDetailApiRequest,
//   YapiGetV1AgentCenterUserDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/center/userDetail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
