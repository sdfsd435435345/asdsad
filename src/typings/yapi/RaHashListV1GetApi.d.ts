/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [hash娱乐下拉列表列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11749) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/hash/list`
 * @更新时间 `2023-08-03 15:21:36`
 */
export interface YapiGetV1RaHashListApiRequest {}

/**
 * 接口 [hash娱乐下拉列表列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11749) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/hash/list`
 * @更新时间 `2023-08-03 15:21:36`
 */
export interface YapiGetV1RaHashListApiResponse {
  code: number
  message: string
  data: YapiGetV1RaHashData
}
export interface YapiGetV1RaHashData {
  list: YapiGetV1RaHashListData[]
}
export interface YapiGetV1RaHashListData {
  /**
   * 名称
   */
  productName: string
  /**
   * 产品id
   */
  productId: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [hash娱乐下拉列表列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11749)
// **/
// export const getV1RaHashListApiRequest: MarkcoinRequest<
//   YapiGetV1RaHashListApiRequest,
//   YapiGetV1RaHashListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/hash/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
