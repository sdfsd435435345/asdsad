/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [修改引导图状态↗](https://yapi.nbttfc365.com/project/77/interface/api/7254) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `POST /v1/guideMap/update`
 * @更新时间 `2023-06-08 16:51:01`
 */
export interface YapiPostV1GuideMapUpdateApiRequest {
  /**
   * 设备id
   */
  deviceId?: string
  /**
   * 用户id
   */
  uid?: string
  /**
   * 引导图key
   */
  key: string
}

/**
 * 接口 [修改引导图状态↗](https://yapi.nbttfc365.com/project/77/interface/api/7254) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `POST /v1/guideMap/update`
 * @更新时间 `2023-06-08 16:51:01`
 */
export interface YapiPostV1GuideMapUpdateApiResponse {
  code: number
  message: string
  /**
   * Success
   */
  data: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [修改引导图状态↗](https://yapi.nbttfc365.com/project/77/interface/api/7254)
// **/
// export const postV1GuideMapUpdateApiRequest: MarkcoinRequest<
//   YapiPostV1GuideMapUpdateApiRequest,
//   YapiPostV1GuideMapUpdateApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/guideMap/update",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [修改引导图状态↗](https://yapi.nbttfc365.com/project/44/interface/api/5619) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `POST /v1/guideMap/update`
 * @更新时间 `2023-04-27 13:49:56`
 */
export interface YapiPostV1GuideMapUpdateApiRequest {
  /**
   * 设备id
   */
  deviceId?: string
  /**
   * 用户id
   */
  uid?: string
  /**
   * 引导图key
   */
  key: string
}

/**
 * 接口 [修改引导图状态↗](https://yapi.nbttfc365.com/project/44/interface/api/5619) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `POST /v1/guideMap/update`
 * @更新时间 `2023-04-27 13:49:56`
 */
export interface YapiPostV1GuideMapUpdateApiResponse {
  code: number
  message: string
  /**
   * Success
   */
  data: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [修改引导图状态↗](https://yapi.nbttfc365.com/project/44/interface/api/5619)
// **/
// export const postV1GuideMapUpdateApiRequest: MarkcoinRequest<
//   YapiPostV1GuideMapUpdateApiRequest,
//   YapiPostV1GuideMapUpdateApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/guideMap/update",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
