/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-获取邀请用户详情导出地址↗](https://yapi.nbttfc365.com/project/44/interface/api/4661) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/getUrl`
 * @更新时间 `2023-07-10 00:18:24`
 */
export interface YapiGetV1AgentGetUrlApiRequest {
  /**
   * 查询方式，1，用户UID,2,上级UID
   */
  queryType?: string
  /**
   * 查看指定的UID
   */
  targetUid?: string
  /**
   * 展示层级限制, 默认不限制 如需要只看我的下级，此处应传 1
   */
  levelLimit?: string
  /**
   * 上级uid
   */
  parentUid?: string
  /**
   * 产品线 字典表code：agent_product_cd
   */
  productCd?: string
  /**
   * 总返佣最低价
   */
  minTotalRebate?: string
  /**
   * 总返佣最高价
   */
  maxTotalRebate?: string
  /**
   * 最低返佣比例
   */
  minRebateRatio?: string
  /**
   * 最高返佣比例
   */
  maxRebateRatio?: string
  /**
   * 开始时间
   */
  startDate?: string
  /**
   * 结束时间
   */
  endDate?: string
}

/**
 * 接口 [代理商-获取邀请用户详情导出地址↗](https://yapi.nbttfc365.com/project/44/interface/api/4661) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `GET /v1/agent/getUrl`
 * @更新时间 `2023-07-10 00:18:24`
 */
export interface YapiGetV1AgentGetUrlApiResponse {
  code?: number
  message?: string
  data?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-获取邀请用户详情导出地址↗](https://yapi.nbttfc365.com/project/44/interface/api/4661)
// **/
// export const getV1AgentGetUrlApiRequest: MarkcoinRequest<
//   YapiGetV1AgentGetUrlApiRequest,
//   YapiGetV1AgentGetUrlApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/getUrl",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
