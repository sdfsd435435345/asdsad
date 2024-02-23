/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邀请返佣-获取默认邀请码↗](https://yapi.nbttfc365.com/project/44/interface/api/18499) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/invitationCode/default`
 * @更新时间 `2023-10-07 14:00:39`
 */
export interface YapiGetV1AgentInvitationCodeDefaultApiRequest {}

/**
 * 接口 [邀请返佣-获取默认邀请码↗](https://yapi.nbttfc365.com/project/44/interface/api/18499) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/invitationCode/default`
 * @更新时间 `2023-10-07 14:00:39`
 */
export interface YapiGetV1AgentInvitationCodeDefaultApiResponse {
  code: number
  message: string
  data: YapiGetV1AgentInvitationCodeDefaultData
}
export interface YapiGetV1AgentInvitationCodeDefaultData {
  /**
   * 邀请码id
   */
  id: string
  invitationCode: string
  /**
   * 邀请码slogan
   */
  slogan: string
  area: YapiGetV1AgentInvitationCodeDefaultAreaData
  threeLevel: YapiGetV1AgentInvitationCodeDefaultThreeLevelData
  pyramid: YapiGetV1AgentInvitationCodeDefaultPyramidData
  /**
   * 返佣类型: pyramid, area, threeLevel
   */
  agentLine: string[]
}
export interface YapiGetV1AgentInvitationCodeDefaultAreaData {
  /**
   * 返佣比例, 50%=50
   */
  ratio: number
  /**
   * 等级
   */
  grade: number
}
export interface YapiGetV1AgentInvitationCodeDefaultThreeLevelData {
  /**
   * 等级; v1=1, v2=2
   */
  grade: number
  firstLevelRatio: number
  secondLevelRatio: number
  thirdLevelRatio: number
}
/**
 * 只有审核通过后才返回,其他情况返回null
 */
export interface YapiGetV1AgentInvitationCodeDefaultPyramidData {
  /**
   * 产品线
   */
  products: YapiGetV1AgentInvitationCodeDefaultListProductsPyramidData[]
  /**
   * 名称
   */
  name: string
  /**
   * true=显示, false=不显示(未进行首次分配)
   */
  showPyramidSetting: boolean
}
export interface YapiGetV1AgentInvitationCodeDefaultListProductsPyramidData {
  selfRatio: number
  childRatio: number
  /**
   * 产品线code, 数据字典:agent_product_cd
   */
  productCd: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邀请返佣-获取默认邀请码↗](https://yapi.nbttfc365.com/project/44/interface/api/18499)
// **/
// export const getV1AgentInvitationCodeDefaultApiRequest: MarkcoinRequest<
//   YapiGetV1AgentInvitationCodeDefaultApiRequest,
//   YapiGetV1AgentInvitationCodeDefaultApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/invitationCode/default",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
