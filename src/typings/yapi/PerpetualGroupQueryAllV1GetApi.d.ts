/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询所有合约组↗](https://yapi.nbttfc365.com/project/44/interface/api/4355) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/queryAll`
 * @更新时间 `2023-04-27 21:36:09`
 */
export interface YapiGetV1PerpetualGroupQueryAllApiRequest {}

/**
 * 接口 [查询所有合约组↗](https://yapi.nbttfc365.com/project/44/interface/api/4355) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/queryAll`
 * @更新时间 `2023-04-27 21:36:09`
 */
export interface YapiGetV1PerpetualGroupQueryAllApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PerpetualGroupQueryAllData
}
export interface YapiGetV1PerpetualGroupQueryAllData {
  list?: YapiGetV1PerpetualGroupQueryAllListData[]
}
export interface YapiGetV1PerpetualGroupQueryAllListData {
  id: string
  /**
   * 合约组名称
   */
  name: string
  /**
   * 是否自动追加保证金
   */
  isAutoAdd: string
  /**
   * 已实现盈亏
   */
  realizedProfit: string
  /**
   * 计价币
   */
  baseCoin: string
  /**
   * 未实现盈亏
   */
  unrealizedProfit: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询所有合约组↗](https://yapi.nbttfc365.com/project/44/interface/api/4355)
// **/
// export const getV1PerpetualGroupQueryAllApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualGroupQueryAllApiRequest,
//   YapiGetV1PerpetualGroupQueryAllApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/group/queryAll",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
