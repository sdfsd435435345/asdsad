/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取商户c2c模式↗](https://yapi.nbttfc365.com/project/44/interface/api/18469) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/home/getC2cType`
 * @更新时间 `2023-09-13 11:52:12`
 */
export interface YapiGetV1HomeGetC2cTypeApiRequest {}

/**
 * 接口 [获取商户c2c模式↗](https://yapi.nbttfc365.com/project/44/interface/api/18469) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/home/getC2cType`
 * @更新时间 `2023-09-13 11:52:12`
 */
export interface YapiGetV1HomeGetC2cTypeApiResponse {
  code: string
  message: string
  data: YapiGetV1HomeGetC2CTypeData
}
export interface YapiGetV1HomeGetC2CTypeData {
  /**
   * c2c模式
   */
  c2cType: string
  /**
   * c2c商户id
   */
  c2cBid?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取商户c2c模式↗](https://yapi.nbttfc365.com/project/44/interface/api/18469)
// **/
// export const getV1HomeGetC2cTypeApiRequest: MarkcoinRequest<
//   YapiGetV1HomeGetC2cTypeApiRequest,
//   YapiGetV1HomeGetC2cTypeApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/home/getC2cType",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
