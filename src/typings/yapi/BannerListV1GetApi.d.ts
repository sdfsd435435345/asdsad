/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [首页-banner↗](https://yapi.nbttfc365.com/project/44/interface/api/2723) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/banner/list`
 * @更新时间 `2023-11-09 19:03:03`
 */
export interface YapiGetV1BannerListApiRequest {}

/**
 * 接口 [首页-banner↗](https://yapi.nbttfc365.com/project/44/interface/api/2723) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/banner/list`
 * @更新时间 `2023-11-09 19:03:03`
 */
export interface YapiGetV1BannerListApiResponse {
  code?: number
  data?: YapiGetV1BannerData
  message?: string
}
export interface YapiGetV1BannerData {
  list?: YapiGetV1BannerListData[]
}
export interface YapiGetV1BannerListData {
  /**
   * web用的图片
   */
  webImage?: string
  imageUrl?: string
  name?: string
  /**
   * app用
   */
  appImage?: string
  id?: number
  /**
   * 跳转链接
   */
  targetUrl?: string
  androidTargetUrl?: string
  webTargetUrl: string
  iosTargetUrl: string
  h5TargetUrl: string
  /**
   * 是否显示审批文案：1显示，2不显示
   */
  isCopyWriting: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [首页-banner↗](https://yapi.nbttfc365.com/project/44/interface/api/2723)
// **/
// export const getV1BannerListApiRequest: MarkcoinRequest<
//   YapiGetV1BannerListApiRequest,
//   YapiGetV1BannerListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/banner/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
