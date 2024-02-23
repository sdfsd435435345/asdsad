/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [新增止盈止损  (作废)↗](https://yapi.nbttfc365.com/project/44/interface/api/3719) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/contract/order/{id}/stop`
 * @更新时间 `2022-12-30 16:46:18`
 */
export interface YapiPostV1ContractOrderIdStopApiRequest {
  /**
   * 触发价格
   */
  triggerPrice: number
  /**
   * 触发价格类型 （mark 标记，new 最新）
   */
  triggerTypeInd: string
  /**
   * 方向 close_long 平多 , close_short 平空
   */
  triggerSideInd: string
  /**
   * 委托价格类型 limit 限价 market 市价
   */
  entrustTypeInd: string
  /**
   * 委托价格
   */
  price?: number
  /**
   * 委托数量
   */
  size: number
  /**
   * 类型,  profit 止盈   loss  止损
   */
  type: string
  /**
   * 合约组ID
   */
  groupId: number
  /**
   * 交易对id
   */
  tradeId: number
  /**
   * 订单id
   */
  id: string
}

/**
 * 接口 [新增止盈止损  (作废)↗](https://yapi.nbttfc365.com/project/44/interface/api/3719) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/contract/order/{id}/stop`
 * @更新时间 `2022-12-30 16:46:18`
 */
export interface YapiPostV1ContractOrderIdStopApiResponse {
  code?: number
  msg?: string
  data?: YapiPostV1ContractOrderIdStopData
}
export interface YapiPostV1ContractOrderIdStopData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [新增止盈止损  (作废)↗](https://yapi.nbttfc365.com/project/44/interface/api/3719)
// **/
// export const postV1ContractOrderIdStopApiRequest: MarkcoinRequest<
//   YapiPostV1ContractOrderIdStopApiRequest,
//   YapiPostV1ContractOrderIdStopApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/contract/order/{id}/stop",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
