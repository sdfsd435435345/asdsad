/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取最新的app下载包信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6859) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/home/appinfo/getNewestApp`
 * @更新时间 `2023-06-08 16:50:27`
 */
export interface YapiGetV1HomeAppinfoGetNewestAppApiRequest {
  /**
   * 语言类型 字典Code：lan_type_cd
   */
  lanType: string
  /**
   * 商户ID
   */
  businessId: string
  /**
   * app类型 字典Code：app_type_cd 具体常量看数据字典
   */
  appType: string
}

/**
 * 接口 [获取最新的app下载包信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6859) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/home/appinfo/getNewestApp`
 * @更新时间 `2023-06-08 16:50:27`
 */
export interface YapiGetV1HomeAppinfoGetNewestAppApiResponse {
  /**
   * 返回code
   */
  code: number
  data: YapiGetV1HomeAppinfoGetNewestAppData
  /**
   * 返回信息
   */
  message: string
}
/**
 * 返回data
 */
export interface YapiGetV1HomeAppinfoGetNewestAppData {
  /**
   * 是否上架 1为上架 2为下架 对应字典表：app_status_ind
   */
  appStatusInd: number
  /**
   * app版本
   */
  appVersion: string
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
   * app类型 对应字典表：app_type_cd ios、android、googleplay、macos、windows等平台标识
   */
  appTypeCd: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取最新的app下载包信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6859)
// **/
// export const getV1HomeAppinfoGetNewestAppApiRequest: MarkcoinRequest<
//   YapiGetV1HomeAppinfoGetNewestAppApiRequest,
//   YapiGetV1HomeAppinfoGetNewestAppApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/home/appinfo/getNewestApp",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取最新的app下载包信息↗](https://yapi.nbttfc365.com/project/44/interface/api/3751) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/home/appinfo/getNewestApp`
 * @更新时间 `2022-12-14 15:12:45`
 */
export interface YapiGetV1HomeAppinfoGetNewestAppApiRequest {
  /**
   * 语言类型 字典Code：lan_type_cd
   */
  lanType: string
  /**
   * 商户ID
   */
  businessId: string
  /**
   * app类型 字典Code：app_type_cd 具体常量看数据字典
   */
  appType: string
}

/**
 * 接口 [获取最新的app下载包信息↗](https://yapi.nbttfc365.com/project/44/interface/api/3751) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/home/appinfo/getNewestApp`
 * @更新时间 `2022-12-14 15:12:45`
 */
export interface YapiGetV1HomeAppinfoGetNewestAppApiResponse {
  /**
   * 返回code
   */
  code: number
  data: YapiGetV1HomeAppinfoGetNewestAppData
  /**
   * 返回信息
   */
  message: string
}
/**
 * 返回data
 */
export interface YapiGetV1HomeAppinfoGetNewestAppData {
  /**
   * 是否上架 1为上架 2为下架 对应字典表：app_status_ind
   */
  appStatusInd: number
  /**
   * app版本
   */
  appVersion: string
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
   * app类型 对应字典表：app_type_cd ios、android、googleplay、macos、windows等平台标识
   */
  appTypeCd: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取最新的app下载包信息↗](https://yapi.nbttfc365.com/project/44/interface/api/3751)
// **/
// export const getV1HomeAppinfoGetNewestAppApiRequest: MarkcoinRequest<
//   YapiGetV1HomeAppinfoGetNewestAppApiRequest,
//   YapiGetV1HomeAppinfoGetNewestAppApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/home/appinfo/getNewestApp",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
