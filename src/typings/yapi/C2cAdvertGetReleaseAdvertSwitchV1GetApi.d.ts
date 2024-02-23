/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取广告发布开关↗](https://yapi.nbttfc365.com/project/73/interface/api/5554) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `GET /v1/c2c/advert/getReleaseAdvertSwitch`
 * @更新时间 `2023-03-28 11:31:11`
 */
export interface YapiGetV1C2cAdvertGetReleaseAdvertSwitchApiRequest {
  /**
   * 交易区ID
   */
  areaId: string
}

/**
 * 接口 [获取广告发布开关↗](https://yapi.nbttfc365.com/project/73/interface/api/5554) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `GET /v1/c2c/advert/getReleaseAdvertSwitch`
 * @更新时间 `2023-03-28 11:31:11`
 */
export interface YapiGetV1C2cAdvertGetReleaseAdvertSwitchApiResponse {
  /**
   * 200成功，其它失败
   */
  code: number
  /**
   * 接口描述信息
   */
  message: string
  data: YapiGetV1C2CAdvertGetReleaseAdvertSwitchData
}
/**
 * 数据
 */
export interface YapiGetV1C2CAdvertGetReleaseAdvertSwitchData {
  /**
   * true,可以发布广告，false，不可以发布广告
   */
  releaseAdvertSwitch: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取广告发布开关↗](https://yapi.nbttfc365.com/project/73/interface/api/5554)
// **/
// export const getV1C2cAdvertGetReleaseAdvertSwitchApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAdvertGetReleaseAdvertSwitchApiRequest,
//   YapiGetV1C2cAdvertGetReleaseAdvertSwitchApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/advert/getReleaseAdvertSwitch",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取广告发布开关↗](https://yapi.nbttfc365.com/project/77/interface/api/6429) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `GET /v1/c2c/advert/getReleaseAdvertSwitch`
 * @更新时间 `2023-06-08 16:46:54`
 */
export interface YapiGetV1C2cAdvertGetReleaseAdvertSwitchApiRequest {
  /**
   * 交易区ID
   */
  areaId: string
}

/**
 * 接口 [获取广告发布开关↗](https://yapi.nbttfc365.com/project/77/interface/api/6429) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `GET /v1/c2c/advert/getReleaseAdvertSwitch`
 * @更新时间 `2023-06-08 16:46:54`
 */
export interface YapiGetV1C2cAdvertGetReleaseAdvertSwitchApiResponse {
  /**
   * 200成功，其它失败
   */
  code: number
  /**
   * 接口描述信息
   */
  message: string
  data: YapiGetV1C2CAdvertGetReleaseAdvertSwitchData
}
/**
 * 数据
 */
export interface YapiGetV1C2CAdvertGetReleaseAdvertSwitchData {
  /**
   * true,可以发布广告，false，不可以发布广告
   */
  releaseAdvertSwitch: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取广告发布开关↗](https://yapi.nbttfc365.com/project/77/interface/api/6429)
// **/
// export const getV1C2cAdvertGetReleaseAdvertSwitchApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAdvertGetReleaseAdvertSwitchApiRequest,
//   YapiGetV1C2cAdvertGetReleaseAdvertSwitchApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/advert/getReleaseAdvertSwitch",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
