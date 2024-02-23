/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邀请返佣-金字塔邀请码列表(分页查询)↗](https://yapi.nbttfc365.com/project/44/interface/api/18379) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/pyramid/invitationCode/list`
 * @更新时间 `2023-10-07 14:01:42`
 */
export interface YapiGetV1AgentPyramidInvitationCodeListApiRequest {
  pageNum: string
  pageSize: string
}

/**
 * 接口 [邀请返佣-金字塔邀请码列表(分页查询)↗](https://yapi.nbttfc365.com/project/44/interface/api/18379) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/pyramid/invitationCode/list`
 * @更新时间 `2023-10-07 14:01:42`
 */
export interface YapiGetV1AgentPyramidInvitationCodeListApiResponse {
  code: number
  message: string
  data: YapiGetV1AgentPyramidInvitationCodeData
}
export interface YapiGetV1AgentPyramidInvitationCodeData {
  /**
   * 金字塔返佣信息
   */
  list: YapiGetV1AgentPyramidInvitationCodeListData[]
  /**
   * 分享海报
   */
  slogan: string
  pageNum: number
  pageSize: number
  total: number
}
export interface YapiGetV1AgentPyramidInvitationCodeListData {
  /**
   * 邀请码id
   */
  id: string
  /**
   * 邀请码
   */
  invitationCode: string
  /**
   * 名称
   */
  name: string
  /**
   * 1=默认邀请码, 2=非默认邀请码
   */
  isDefault: number
  /**
   * 好友数(该邀请码邀请的人数)
   */
  invitedNum: number
  /**
   * 创建时间
   */
  createdByTime: number
  products: YapiGetV1AgentPyramidInvitationCodeListProductsListData[]
}
export interface YapiGetV1AgentPyramidInvitationCodeListProductsListData {
  /**
   * 产品线code, 数据字典agent_product_cd
   */
  productCd: string
  /**
   * 自身返佣比例
   */
  selfRatio: number
  /**
   * 好友返佣比例
   */
  childRatio: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邀请返佣-金字塔邀请码列表(分页查询)↗](https://yapi.nbttfc365.com/project/44/interface/api/18379)
// **/
// export const getV1AgentPyramidInvitationCodeListApiRequest: MarkcoinRequest<
//   YapiGetV1AgentPyramidInvitationCodeListApiRequest,
//   YapiGetV1AgentPyramidInvitationCodeListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/pyramid/invitationCode/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
