/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [是否境外ip的判断↗](https://yapi.nbttfc365.com/project/44/interface/api/5884) 的 **请求类型**
 *
 * @分类 [chainStar官网↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_586)
 * @请求头 `GET /v1/chainStar/isAreaAwayIp`
 * @更新时间 `2023-05-27 17:51:38`
 */
export interface YapiGetV1ChainStarIsAreaAwayIpApiRequest {}

/**
 * 接口 [是否境外ip的判断↗](https://yapi.nbttfc365.com/project/44/interface/api/5884) 的 **返回类型**
 *
 * @分类 [chainStar官网↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_586)
 * @请求头 `GET /v1/chainStar/isAreaAwayIp`
 * @更新时间 `2023-05-27 17:51:38`
 */
export interface YapiGetV1ChainStarIsAreaAwayIpApiResponse {
  code?: number
  data?: YapiGetV1ChainStarIsAreaAwayIpData
  message?: string
}
export interface YapiGetV1ChainStarIsAreaAwayIpData {
  /**
   * 是境外，不是境外的
   */
  areaAwayIp?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [是否境外ip的判断↗](https://yapi.nbttfc365.com/project/44/interface/api/5884)
// **/
// export const getV1ChainStarIsAreaAwayIpApiRequest: MarkcoinRequest<
//   YapiGetV1ChainStarIsAreaAwayIpApiRequest,
//   YapiGetV1ChainStarIsAreaAwayIpApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/chainStar/isAreaAwayIp",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
