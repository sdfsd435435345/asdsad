/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [hash区块下单前检查↗](https://yapi.nbttfc365.com/project/44/interface/api/11969) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `POST /v1/ra/hash/orders/place/check`
 * @更新时间 `2023-08-10 11:30:15`
 */
export interface YapiPostV1RaHashOrdersPlaceCheckApiRequest {
  /**
   * 产品id
   */
  productId: string
}

/**
 * 接口 [hash区块下单前检查↗](https://yapi.nbttfc365.com/project/44/interface/api/11969) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `POST /v1/ra/hash/orders/place/check`
 * @更新时间 `2023-08-10 11:30:15`
 */
export interface YapiPostV1RaHashOrdersPlaceCheckApiResponse {
  code?: string
  message?: string
  data?: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [hash区块下单前检查↗](https://yapi.nbttfc365.com/project/44/interface/api/11969)
// **/
// export const postV1RaHashOrdersPlaceCheckApiRequest: MarkcoinRequest<
//   YapiPostV1RaHashOrdersPlaceCheckApiRequest,
//   YapiPostV1RaHashOrdersPlaceCheckApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/ra/hash/orders/place/check",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
