/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [首页-轮播图↗](https://yapi.nbttfc365.com/project/44/interface/api/19394) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/homeCarousel/list2`
 * @更新时间 `2023-11-09 18:03:39`
 */
export interface YapiGetV1HomeCarouselList2ApiRequest {}

/**
 * 接口 [首页-轮播图↗](https://yapi.nbttfc365.com/project/44/interface/api/19394) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/homeCarousel/list2`
 * @更新时间 `2023-11-09 18:03:39`
 */
export interface YapiGetV1HomeCarouselList2ApiResponse {
  code?: number
  data?: YapiGetV1HomeCarousel2Data
  message?: string
}
export interface YapiGetV1HomeCarousel2Data {
  list?: YapiGetV1HomeCarousel2ListData[]
}
export interface YapiGetV1HomeCarousel2ListData {
  /**
   * h5跳转地址
   */
  h5TargetUrl?: string
  businessId?: number
  /**
   * ios跳转地址
   */
  iosTargetUrl?: string
  /**
   * web跳转地址
   */
  webTargetUrl?: string
  sortCode?: number
  /**
   * android跳转地址
   */
  androidTargetUrl?: string
  /**
   * 标题
   */
  carouselTitle?: string
  /**
   * web图
   */
  webImage?: string
  /**
   * 通用图
   */
  imageUrl?: null
  /**
   * app图
   */
  appImage?: string
  id?: number
  /**
   * 描述
   */
  remarks?: string
  /**
   * 是否app专属: 1 是 2 否
   */
  isAppOnly?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [首页-轮播图↗](https://yapi.nbttfc365.com/project/44/interface/api/19394)
// **/
// export const getV1HomeCarouselList2ApiRequest: MarkcoinRequest<
//   YapiGetV1HomeCarouselList2ApiRequest,
//   YapiGetV1HomeCarouselList2ApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/homeCarousel/list2",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
