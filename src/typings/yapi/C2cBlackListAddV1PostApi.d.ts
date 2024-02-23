/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [添加黑名单↗](https://yapi.nbttfc365.com/project/73/interface/api/4922) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `POST /v1/c2c/blackList/add`
 * @更新时间 `2023-03-03 16:16:34`
 */
export interface YapiPostV1C2cBlackListAddApiRequest {
  userId: number
  /**
   * 拉黑原因code。 见备注
   */
  reasonCode: string
}

/**
 * 接口 [添加黑名单↗](https://yapi.nbttfc365.com/project/73/interface/api/4922) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `POST /v1/c2c/blackList/add`
 * @更新时间 `2023-03-03 16:16:34`
 */
export interface YapiPostV1C2cBlackListAddApiResponse {
  /**
   * success
   */
  data: string
  /**
   * 200
   */
  code: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [添加黑名单↗](https://yapi.nbttfc365.com/project/73/interface/api/4922)
// **/
// export const postV1C2cBlackListAddApiRequest: MarkcoinRequest<
//   YapiPostV1C2cBlackListAddApiRequest,
//   YapiPostV1C2cBlackListAddApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/blackList/add",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [添加黑名单↗](https://yapi.nbttfc365.com/project/77/interface/api/6584) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `POST /v1/c2c/blackList/add`
 * @更新时间 `2023-06-08 16:47:05`
 */
export interface YapiPostV1C2cBlackListAddApiRequest {
  userId: number
  /**
   * 拉黑原因code。 见备注
   */
  reasonCode: string
}

/**
 * 接口 [添加黑名单↗](https://yapi.nbttfc365.com/project/77/interface/api/6584) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `POST /v1/c2c/blackList/add`
 * @更新时间 `2023-06-08 16:47:05`
 */
export interface YapiPostV1C2cBlackListAddApiResponse {
  /**
   * success
   */
  data: string
  /**
   * 200
   */
  code: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [添加黑名单↗](https://yapi.nbttfc365.com/project/77/interface/api/6584)
// **/
// export const postV1C2cBlackListAddApiRequest: MarkcoinRequest<
//   YapiPostV1C2cBlackListAddApiRequest,
//   YapiPostV1C2cBlackListAddApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/blackList/add",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
