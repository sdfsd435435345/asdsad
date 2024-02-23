/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取app最新版本↗](https://yapi.nbttfc365.com/project/77/interface/api/6839) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/common/app/version/new`
 * @更新时间 `2023-06-08 16:50:26`
 */
export interface YapiGetV1CommonAppVersionNewApiRequest {
  /**
   * 语言类型
   */
  lanType: string
}

/**
 * 接口 [获取app最新版本↗](https://yapi.nbttfc365.com/project/77/interface/api/6839) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/common/app/version/new`
 * @更新时间 `2023-06-08 16:50:26`
 */
export interface YapiGetV1CommonAppVersionNewApiResponse {
  /**
   * 返回code
   */
  code: number
  data: YapiGetV1CommonAppVersionNewData
  /**
   * 返回信息
   */
  message: string
}
/**
 * 返回data
 */
export interface YapiGetV1CommonAppVersionNewData {
  /**
   * 类型  1、红点+弹窗、2、红点、3、强制升级（包含红点+弹窗）
   */
  type: number
  /**
   * 下载链接
   */
  downloadUrl: string
  /**
   * 描述
   */
  remark: string
  /**
   * 版本号(展示)
   */
  appVerison: string
  /**
   * 版本号(程序比对)
   */
  versionCode: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取app最新版本↗](https://yapi.nbttfc365.com/project/77/interface/api/6839)
// **/
// export const getV1CommonAppVersionNewApiRequest: MarkcoinRequest<
//   YapiGetV1CommonAppVersionNewApiRequest,
//   YapiGetV1CommonAppVersionNewApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/common/app/version/new",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取app最新版本↗](https://yapi.nbttfc365.com/project/44/interface/api/3755) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/common/app/version/new`
 * @更新时间 `2022-12-16 16:05:25`
 */
export interface YapiGetV1CommonAppVersionNewApiRequest {
  /**
   * 语言类型
   */
  lanType: string
}

/**
 * 接口 [获取app最新版本↗](https://yapi.nbttfc365.com/project/44/interface/api/3755) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/common/app/version/new`
 * @更新时间 `2022-12-16 16:05:25`
 */
export interface YapiGetV1CommonAppVersionNewApiResponse {
  /**
   * 返回code
   */
  code: number
  data: YapiGetV1CommonAppVersionNewData
  /**
   * 返回信息
   */
  message: string
}
/**
 * 返回data
 */
export interface YapiGetV1CommonAppVersionNewData {
  /**
   * 类型  1、红点+弹窗、2、红点、3、强制升级（包含红点+弹窗）
   */
  type: number
  /**
   * 下载链接
   */
  downloadUrl: string
  /**
   * 描述
   */
  remark: string
  /**
   * 版本号(展示)
   */
  appVerison: string
  /**
   * 版本号(程序比对)
   */
  versionCode: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取app最新版本↗](https://yapi.nbttfc365.com/project/44/interface/api/3755)
// **/
// export const getV1CommonAppVersionNewApiRequest: MarkcoinRequest<
//   YapiGetV1CommonAppVersionNewApiRequest,
//   YapiGetV1CommonAppVersionNewApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/common/app/version/new",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
