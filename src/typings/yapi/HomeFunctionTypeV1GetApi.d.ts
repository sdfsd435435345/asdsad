/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [首页-金刚区分类↗](https://yapi.nbttfc365.com/project/44/interface/api/3352) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/homeFunction/type`
 * @更新时间 `2022-11-28 10:17:51`
 */
export interface YapiGetV1HomeFunctionTypeApiRequest {}

/**
 * 接口 [首页-金刚区分类↗](https://yapi.nbttfc365.com/project/44/interface/api/3352) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/homeFunction/type`
 * @更新时间 `2022-11-28 10:17:51`
 */
export interface YapiGetV1HomeFunctionTypeApiResponse {
  code?: number
  data?: YapiGetV1HomeFunctionTypeListData[]
  message?: string
}
export interface YapiGetV1HomeFunctionTypeListData {
  /**
   * 分类名
   */
  name: string
  /**
   * 分类id
   */
  typeId: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [首页-金刚区分类↗](https://yapi.nbttfc365.com/project/44/interface/api/3352)
// **/
// export const getV1HomeFunctionTypeApiRequest: MarkcoinRequest<
//   YapiGetV1HomeFunctionTypeApiRequest,
//   YapiGetV1HomeFunctionTypeApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/homeFunction/type",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
