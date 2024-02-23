/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [收款方式排序↗](https://yapi.nbttfc365.com/project/44/interface/api/5584) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v1/c2c/payment/receiveList/sort`
 * @更新时间 `2023-04-06 16:02:11`
 */
export interface YapiPostV1C2cPaymentReceiveListSortApiRequest {
  /**
   * 收款方式排序数据
   */
  paymentList: YapiPostV1C2CPaymentReceiveSortApiRequestListPaymentList[]
}
export interface YapiPostV1C2CPaymentReceiveSortApiRequestListPaymentList {
  /**
   * 收款方式唯一ID
   */
  id: string
  /**
   * 排序
   */
  sort: number
}

/**
 * 接口 [收款方式排序↗](https://yapi.nbttfc365.com/project/44/interface/api/5584) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v1/c2c/payment/receiveList/sort`
 * @更新时间 `2023-04-06 16:02:11`
 */
export interface YapiPostV1C2cPaymentReceiveListSortApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: number
  data: YapiPostV1C2CPaymentReceiveSortData
}
/**
 * 返回数据
 */
export interface YapiPostV1C2CPaymentReceiveSortData {
  /**
   * true，成功，false，失败
   */
  success: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [收款方式排序↗](https://yapi.nbttfc365.com/project/44/interface/api/5584)
// **/
// export const postV1C2cPaymentReceiveListSortApiRequest: MarkcoinRequest<
//   YapiPostV1C2cPaymentReceiveListSortApiRequest,
//   YapiPostV1C2cPaymentReceiveListSortApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/payment/receiveList/sort",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [收款方式排序↗](https://yapi.nbttfc365.com/project/77/interface/api/6689) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `POST /v1/c2c/payment/receiveList/sort`
 * @更新时间 `2023-06-08 16:47:11`
 */
export interface YapiPostV1C2cPaymentReceiveListSortApiRequest {
  /**
   * 收款方式排序数据
   */
  paymentList: YapiPostV1C2CPaymentReceiveSortApiRequestListPaymentList[]
}
export interface YapiPostV1C2CPaymentReceiveSortApiRequestListPaymentList {
  /**
   * 收款方式唯一ID
   */
  id: string
  /**
   * 排序
   */
  sort: number
}

/**
 * 接口 [收款方式排序↗](https://yapi.nbttfc365.com/project/77/interface/api/6689) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `POST /v1/c2c/payment/receiveList/sort`
 * @更新时间 `2023-06-08 16:47:11`
 */
export interface YapiPostV1C2cPaymentReceiveListSortApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: number
  data: YapiPostV1C2CPaymentReceiveSortData
}
/**
 * 返回数据
 */
export interface YapiPostV1C2CPaymentReceiveSortData {
  /**
   * true，成功，false，失败
   */
  success: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [收款方式排序↗](https://yapi.nbttfc365.com/project/77/interface/api/6689)
// **/
// export const postV1C2cPaymentReceiveListSortApiRequest: MarkcoinRequest<
//   YapiPostV1C2cPaymentReceiveListSortApiRequest,
//   YapiPostV1C2cPaymentReceiveListSortApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/payment/receiveList/sort",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
