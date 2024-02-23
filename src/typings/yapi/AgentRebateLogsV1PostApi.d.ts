/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-返佣记录查询↗](https://yapi.nbttfc365.com/project/44/interface/api/5899) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agent/rebateLogs`
 * @更新时间 `2023-06-13 14:37:52`
 */
export interface YapiPostV1AgentRebateLogsApiRequest {
  /**
   * 产品线 字典表code：agent_product_cd
   */
  productCd?: string
  /**
   * 用户uid
   */
  targetUid?: number
  /**
   * 展示层级限制, 默认不限制 如需要只看我的下级，此处应传 1
   */
  levelLimit?: number
  /**
   * 1=发放, 2=未发放
   */
  isGrant: number
  /**
   * 开始时间时间戳（默认传最近三个月）
   */
  startDate: number
  /**
   * 结束时间时间戳（默认传最近三个月）
   */
  endDate: number
  page: number
  pageSize: number
}

/**
 * 接口 [代理商-返佣记录查询↗](https://yapi.nbttfc365.com/project/44/interface/api/5899) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agent/rebateLogs`
 * @更新时间 `2023-06-13 14:37:52`
 */
export interface YapiPostV1AgentRebateLogsApiResponse {
  /**
   * 总条数
   */
  total: number
  /**
   * 页数                                                                                                                                                                                                                            0                              000000
   */
  page: number
  /**
   * 每页数
   */
  pageSize: number
  list: YapiPostV1AgentRebateLogsList[]
}
export interface YapiPostV1AgentRebateLogsList {
  /**
   * 用户uid
   */
  uid: number
  /**
   * 登录名
   */
  nickName: string
  /**
   * 上级uid
   */
  parentUid: number
  /**
   * 1=代理商, 2=直推
   */
  isAgt: string
  /**
   * 代理级别
   */
  level: number
  /**
   * 返佣比例
   */
  ratios: YapiPostV1AgentRebateLogsListRatiosList[]
  /**
   * 字典表code：rebate_type_cd 不填=全部,selfRebate=自返佣, teamRebate=团队返佣
   */
  rebateTypeCd: string
  /**
   * 产品线 字典表code：agent_product_cd
   */
  productCd: string
  /**
   * 返佣币种
   */
  settleSymbol: string
  /**
   * 预计返佣
   */
  predictRebate: string
  /**
   * 实际返佣
   */
  actualRebate: string
  /**
   * 1=发放, 2=未发放
   */
  isGrant: string
  /**
   * 发放时间
   */
  createdByTime: string
}
export interface YapiPostV1AgentRebateLogsListRatiosList {
  /**
   * 产品线
   */
  productCd: string
  /**
   * 上级返佣比例
   */
  parentRatio: string
  /**
   * 自己返佣比例
   */
  selfRatio: string
  /**
   * 好友返佣比例
   */
  childRatio: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-返佣记录查询↗](https://yapi.nbttfc365.com/project/44/interface/api/5899)
// **/
// export const postV1AgentRebateLogsApiRequest: MarkcoinRequest<
//   YapiPostV1AgentRebateLogsApiRequest,
//   YapiPostV1AgentRebateLogsApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/rebateLogs",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
