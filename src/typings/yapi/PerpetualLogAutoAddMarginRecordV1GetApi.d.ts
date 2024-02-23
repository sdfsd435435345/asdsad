/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [自动追加保证金记录列表↗](https://yapi.nbttfc365.com/project/44/interface/api/4395) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/log/autoAddMarginRecord`
 * @更新时间 `2023-02-02 17:34:24`
 */
export interface YapiGetV1PerpetualLogAutoAddMarginRecordApiRequest {
  /**
   * 页码
   */
  pageNum: string
  /**
   * 每页条数
   */
  pageSize: string
  /**
   * 开始时间毫秒数
   */
  startDate?: string
  /**
   * 结束时间毫秒数
   */
  endDate?: string
}

/**
 * 接口 [自动追加保证金记录列表↗](https://yapi.nbttfc365.com/project/44/interface/api/4395) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/log/autoAddMarginRecord`
 * @更新时间 `2023-02-02 17:34:24`
 */
export interface YapiGetV1PerpetualLogAutoAddMarginRecordApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PerpetualLogAutoAddMarginRecordData
}
export interface YapiGetV1PerpetualLogAutoAddMarginRecordData {
  /**
   * 页码
   */
  pageNum?: number
  /**
   * 每页条数
   */
  pageSize?: number
  /**
   * 总数
   */
  total?: number
  list?: YapiGetV1PerpetualLogAutoAddMarginRecordListData[]
}
export interface YapiGetV1PerpetualLogAutoAddMarginRecordListData {
  id?: string
  /**
   * 时间
   */
  time?: number
  /**
   * 币种名称
   */
  coinName?: string
  /**
   * 合约组名称
   */
  groupName?: string
  /**
   * 数量
   */
  amount?: string
  /**
   * 状态
   */
  status?: string
  /**
   * 日志类型
   */
  logType?: string
  /**
   * 自动/手动
   */
  operationType?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [自动追加保证金记录列表↗](https://yapi.nbttfc365.com/project/44/interface/api/4395)
// **/
// export const getV1PerpetualLogAutoAddMarginRecordApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualLogAutoAddMarginRecordApiRequest,
//   YapiGetV1PerpetualLogAutoAddMarginRecordApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/log/autoAddMarginRecord",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
