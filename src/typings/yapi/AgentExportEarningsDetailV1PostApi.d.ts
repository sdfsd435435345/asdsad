/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理中心-收益详情-导出Excel↗](https://yapi.nbttfc365.com/project/44/interface/api/18734) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/export/earningsDetail`
 * @更新时间 `2023-10-07 14:57:51`
 */
export interface YapiPostV1AgentExportEarningsDetailApiRequest {
  /**
   * 模式
   */
  model: string
  /**
   * 产品线
   */
  productCd?: number
  /**
   * 收益计算开始时间
   */
  startTime: number
  /**
   * 收益计算结束时间
   */
  endTime: number
  /**
   * 返佣类型
   */
  rebateType?: number
  /**
   * 金额大小范围(USD)最低价
   */
  minAmount?: number
  /**
   * 金额大小范围(USD)最高价
   */
  maxAmount?: number
  /**
   * 返佣层级
   */
  rebateLevel?: string
}

/**
 * 接口 [代理中心-收益详情-导出Excel↗](https://yapi.nbttfc365.com/project/44/interface/api/18734) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/export/earningsDetail`
 * @更新时间 `2023-10-07 14:57:51`
 */
export interface YapiPostV1AgentExportEarningsDetailApiResponse {
  message?: string
  data?: string
  code?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理中心-收益详情-导出Excel↗](https://yapi.nbttfc365.com/project/44/interface/api/18734)
// **/
// export const postV1AgentExportEarningsDetailApiRequest: MarkcoinRequest<
//   YapiPostV1AgentExportEarningsDetailApiRequest,
//   YapiPostV1AgentExportEarningsDetailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/export/earningsDetail",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
