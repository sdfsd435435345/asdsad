/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取app下载页面信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6834) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/home/appinfo/getList`
 * @更新时间 `2023-06-08 16:50:25`
 */
export interface YapiGetV1HomeAppinfoGetListApiRequest {
  /**
   * 商户ID
   */
  businessId: string
  /**
   * 语言类型，字典Code：lan_type_cd
   */
  lanType: string
}

/**
 * 接口 [获取app下载页面信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6834) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/home/appinfo/getList`
 * @更新时间 `2023-06-08 16:50:25`
 */
export interface YapiGetV1HomeAppinfoGetListApiResponse {
  /**
   * 返回code
   */
  code: number
  /**
   * 返回data
   */
  data: YapiGetV1HomeAppinfoGetListData[]
  /**
   * 返回信息
   */
  message: string
}
/**
 * app下载信息 list
 */
export interface YapiGetV1HomeAppinfoGetListData {
  /**
   * app类型 对应字典表：app_type_cd
   */
  appStatusInd: number
  /**
   * 语言类型 对应字典表：lan_type_cd
   */
  lanTypeCd: string
  /**
   * 下载链接
   */
  downloadUrl: string
  /**
   * 下载描述
   */
  description: string
  /**
   * app版本
   */
  appVersion: string
  /**
   * 是否上架 1为上架 2为下架 对应字典表：app_status_cd
   */
  appTypeCd: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取app下载页面信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6834)
// **/
// export const getV1HomeAppinfoGetListApiRequest: MarkcoinRequest<
//   YapiGetV1HomeAppinfoGetListApiRequest,
//   YapiGetV1HomeAppinfoGetListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/home/appinfo/getList",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取app下载页面信息↗](https://yapi.nbttfc365.com/project/44/interface/api/3735) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/home/appinfo/getList`
 * @更新时间 `2022-12-14 16:54:32`
 */
export interface YapiGetV1HomeAppinfoGetListApiRequest {
  /**
   * 商户ID
   */
  businessId: string
  /**
   * 语言类型，字典Code：lan_type_cd
   */
  lanType: string
}

/**
 * 接口 [获取app下载页面信息↗](https://yapi.nbttfc365.com/project/44/interface/api/3735) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/home/appinfo/getList`
 * @更新时间 `2022-12-14 16:54:32`
 */
export interface YapiGetV1HomeAppinfoGetListApiResponse {
  /**
   * 返回code
   */
  code: number
  /**
   * 返回data
   */
  data: YapiGetV1HomeAppinfoGetListData[]
  /**
   * 返回信息
   */
  message: string
}
/**
 * app下载信息 list
 */
export interface YapiGetV1HomeAppinfoGetListData {
  /**
   * app类型 对应字典表：app_type_cd
   */
  appStatusInd: number
  /**
   * 语言类型 对应字典表：lan_type_cd
   */
  lanTypeCd: string
  /**
   * 下载链接
   */
  downloadUrl: string
  /**
   * 下载描述
   */
  description: string
  /**
   * app版本
   */
  appVersion: string
  /**
   * 是否上架 1为上架 2为下架 对应字典表：app_status_cd
   */
  appTypeCd: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取app下载页面信息↗](https://yapi.nbttfc365.com/project/44/interface/api/3735)
// **/
// export const getV1HomeAppinfoGetListApiRequest: MarkcoinRequest<
//   YapiGetV1HomeAppinfoGetListApiRequest,
//   YapiGetV1HomeAppinfoGetListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/home/appinfo/getList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
