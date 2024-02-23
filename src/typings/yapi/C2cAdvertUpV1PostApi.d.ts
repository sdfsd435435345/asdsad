/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [广告重新上架↗](https://yapi.nbttfc365.com/project/73/interface/api/4619) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `POST /v1/c2c/advert/up`
 * @更新时间 `2023-03-03 22:59:46`
 */
export interface YapiPostV1C2cAdvertUpApiRequest {
  /**
   * 广告id
   */
  advertId?: string
  /**
   * 广告有效期
   */
  validDays: number
}

/**
 * 接口 [广告重新上架↗](https://yapi.nbttfc365.com/project/73/interface/api/4619) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `POST /v1/c2c/advert/up`
 * @更新时间 `2023-03-03 22:59:46`
 */
export interface YapiPostV1C2cAdvertUpApiResponse {
  code: number
  message: string
  /**
   * 成功|失败
   */
  data: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告重新上架↗](https://yapi.nbttfc365.com/project/73/interface/api/4619)
// **/
// export const postV1C2cAdvertUpApiRequest: MarkcoinRequest<
//   YapiPostV1C2cAdvertUpApiRequest,
//   YapiPostV1C2cAdvertUpApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/advert/up",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [广告重新上架↗](https://yapi.nbttfc365.com/project/77/interface/api/6469) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `POST /v1/c2c/advert/up`
 * @更新时间 `2023-06-08 16:46:58`
 */
export interface YapiPostV1C2cAdvertUpApiRequest {
  /**
   * 广告id
   */
  advertId?: string
  /**
   * 广告有效期
   */
  validDays: number
}

/**
 * 接口 [广告重新上架↗](https://yapi.nbttfc365.com/project/77/interface/api/6469) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `POST /v1/c2c/advert/up`
 * @更新时间 `2023-06-08 16:46:58`
 */
export interface YapiPostV1C2cAdvertUpApiResponse {
  code: number
  message: string
  /**
   * 成功|失败
   */
  data: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [广告重新上架↗](https://yapi.nbttfc365.com/project/77/interface/api/6469)
// **/
// export const postV1C2cAdvertUpApiRequest: MarkcoinRequest<
//   YapiPostV1C2cAdvertUpApiRequest,
//   YapiPostV1C2cAdvertUpApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/advert/up",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
