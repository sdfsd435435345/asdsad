/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理中心-更多详情(弃用)↗](https://yapi.nbttfc365.com/project/44/interface/api/18459) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/center/moreDetail-delete`
 * @更新时间 `2023-09-25 14:58:56`
 */
export interface YapiGetV1AgentCenterMoreDetailDeleteApiRequest {
  /**
   * 模式
   */
  model: string
  /**
   * uid
   */
  uid?: string
  /**
   * 产品线
   */
  productCd?: string
  /**
   * 区域等级
   */
  areaLevel?: string
  /**
   * 团队人数(低)/邀请人数
   */
  inviteNumMin?: string
  /**
   * 团队人数(高)/邀请人数
   */
  inviteNumMax?: string
  /**
   * 注册时间(起)
   */
  startTime?: string
  /**
   * 注册时间(止)
   */
  endTime?: string
  /**
   * 当前页
   */
  pageNum: string
  /**
   * 每页条数
   */
  pageSize: string
}

/**
 * 接口 [代理中心-更多详情(弃用)↗](https://yapi.nbttfc365.com/project/44/interface/api/18459) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/center/moreDetail-delete`
 * @更新时间 `2023-09-25 14:58:56`
 */
export interface YapiGetV1AgentCenterMoreDetailDeleteApiResponse {
  data?: YapiGetV1AgentCenterMoreDetailDeleteData
  messsage?: string
  code?: number
}
export interface YapiGetV1AgentCenterMoreDetailDeleteData {
  /**
   * 详情列表
   */
  detailList?: YapiGetV1AgentCenterMoreDetailDeleteListDetailListData[]
}
export interface YapiGetV1AgentCenterMoreDetailDeleteListDetailListData {
  /**
   * 用户UID
   */
  uid?: string
  /**
   * 上级UID
   */
  parentUid?: string
  /**
   * 团队手续费/TA的手续费
   */
  fee?: number
  /**
   * 团队贡献返佣/TA的贡献返佣
   */
  rebate?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理中心-更多详情(弃用)↗](https://yapi.nbttfc365.com/project/44/interface/api/18459)
// **/
// export const getV1AgentCenterMoreDetailDeleteApiRequest: MarkcoinRequest<
//   YapiGetV1AgentCenterMoreDetailDeleteApiRequest,
//   YapiGetV1AgentCenterMoreDetailDeleteApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/center/moreDetail-delete",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
