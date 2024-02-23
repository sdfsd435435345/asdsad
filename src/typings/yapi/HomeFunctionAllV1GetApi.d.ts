/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [首页-金刚区全部功能菜单↗](https://yapi.nbttfc365.com/project/44/interface/api/2744) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/homeFunction/all`
 * @更新时间 `2023-08-22 15:12:40`
 */
export interface YapiGetV1HomeFunctionAllApiRequest {}

/**
 * 接口 [首页-金刚区全部功能菜单↗](https://yapi.nbttfc365.com/project/44/interface/api/2744) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/homeFunction/all`
 * @更新时间 `2023-08-22 15:12:40`
 */
export interface YapiGetV1HomeFunctionAllApiResponse {
  code?: number
  data?: YapiGetV1HomeFunctionAllListData[]
  message?: string
}
export interface YapiGetV1HomeFunctionAllListData {
  h5Link: string
  androidLink: string
  iosLink: string
  name: string
  logo: string
  typeId: number
  id: number
  isOutlink: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [首页-金刚区全部功能菜单↗](https://yapi.nbttfc365.com/project/44/interface/api/2744)
// **/
// export const getV1HomeFunctionAllApiRequest: MarkcoinRequest<
//   YapiGetV1HomeFunctionAllApiRequest,
//   YapiGetV1HomeFunctionAllApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/homeFunction/all",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
