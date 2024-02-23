/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [移出黑名单↗](https://yapi.nbttfc365.com/project/73/interface/api/4931) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `POST /v1/c2c/blackList/cancel`
 * @更新时间 `2023-03-03 16:16:23`
 */
export interface YapiPostV1C2cBlackListCancelApiRequest {
  userIds?: number[]
}

/**
 * 接口 [移出黑名单↗](https://yapi.nbttfc365.com/project/73/interface/api/4931) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `POST /v1/c2c/blackList/cancel`
 * @更新时间 `2023-03-03 16:16:23`
 */
export interface YapiPostV1C2cBlackListCancelApiResponse {
  /**
   * 200
   */
  code: number
  /**
   * success
   */
  data: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [移出黑名单↗](https://yapi.nbttfc365.com/project/73/interface/api/4931)
// **/
// export const postV1C2cBlackListCancelApiRequest: MarkcoinRequest<
//   YapiPostV1C2cBlackListCancelApiRequest,
//   YapiPostV1C2cBlackListCancelApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/blackList/cancel",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [移出黑名单↗](https://yapi.nbttfc365.com/project/77/interface/api/6589) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `POST /v1/c2c/blackList/cancel`
 * @更新时间 `2023-06-08 16:47:05`
 */
export interface YapiPostV1C2cBlackListCancelApiRequest {
  userIds?: number[]
}

/**
 * 接口 [移出黑名单↗](https://yapi.nbttfc365.com/project/77/interface/api/6589) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `POST /v1/c2c/blackList/cancel`
 * @更新时间 `2023-06-08 16:47:05`
 */
export interface YapiPostV1C2cBlackListCancelApiResponse {
  /**
   * 200
   */
  code: number
  /**
   * success
   */
  data: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [移出黑名单↗](https://yapi.nbttfc365.com/project/77/interface/api/6589)
// **/
// export const postV1C2cBlackListCancelApiRequest: MarkcoinRequest<
//   YapiPostV1C2cBlackListCancelApiRequest,
//   YapiPostV1C2cBlackListCancelApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/blackList/cancel",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
