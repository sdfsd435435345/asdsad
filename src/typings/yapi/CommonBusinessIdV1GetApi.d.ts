/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取businessId↗](https://yapi.nbttfc365.com/project/44/interface/api/3472) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/common/businessId`
 * @更新时间 `2022-11-15 23:22:16`
 */
export interface YapiGetV1CommonBusinessIdApiRequest {}

/**
 * 接口 [获取businessId↗](https://yapi.nbttfc365.com/project/44/interface/api/3472) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/common/businessId`
 * @更新时间 `2022-11-15 23:22:16`
 */
export interface YapiGetV1CommonBusinessIdApiResponse {
  code?: number
  data?: YapiGetV1CommonBusinessIdData
  message?: string
}
export interface YapiGetV1CommonBusinessIdData {
  businessId?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取businessId↗](https://yapi.nbttfc365.com/project/44/interface/api/3472)
// **/
// export const getV1CommonBusinessIdApiRequest: MarkcoinRequest<
//   YapiGetV1CommonBusinessIdApiRequest,
//   YapiGetV1CommonBusinessIdApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/common/businessId",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
