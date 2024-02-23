/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询商户是否开启试玩↗](https://yapi.nbttfc365.com/project/44/interface/api/11124) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/demo/isOpen`
 * @更新时间 `2023-07-19 17:29:18`
 */
export interface YapiGetV1DemoIsOpenApiRequest {}

/**
 * 接口 [查询商户是否开启试玩↗](https://yapi.nbttfc365.com/project/44/interface/api/11124) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/demo/isOpen`
 * @更新时间 `2023-07-19 17:29:18`
 */
export interface YapiGetV1DemoIsOpenApiResponse {
  code?: number
  data?: YapiGetV1DemoIsOpenData
  message?: string
}
export interface YapiGetV1DemoIsOpenData {
  /**
   * true:开启,false:关闭
   */
  isOpen?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询商户是否开启试玩↗](https://yapi.nbttfc365.com/project/44/interface/api/11124)
// **/
// export const getV1DemoIsOpenApiRequest: MarkcoinRequest<
//   YapiGetV1DemoIsOpenApiRequest,
//   YapiGetV1DemoIsOpenApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/demo/isOpen",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
