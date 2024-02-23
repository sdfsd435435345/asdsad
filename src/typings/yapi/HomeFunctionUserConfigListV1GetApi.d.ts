/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [首页-金刚区用户的功能列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2738) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/homeFunction/userConfigList`
 * @更新时间 `2023-11-09 19:07:22`
 */
export interface YapiGetV1HomeFunctionUserConfigListApiRequest {}

/**
 * 接口 [首页-金刚区用户的功能列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2738) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/homeFunction/userConfigList`
 * @更新时间 `2023-11-09 19:07:22`
 */
export interface YapiGetV1HomeFunctionUserConfigListApiResponse {
  code?: number
  data?: YapiGetV1HomeFunctionUserConfigListData[]
  message?: string
}
export interface YapiGetV1HomeFunctionUserConfigListData {
  /**
   * ht链接
   */
  h5Link: string
  /**
   * android链接
   */
  androidLink: string
  /**
   * ios链接
   */
  iosLink: string
  /**
   * 功能名
   */
  name: string
  /**
   * 图标
   */
  logo: string
  /**
   * 所属类型id
   */
  typeId: number
  /**
   * 功能id
   */
  id: number
  /**
   * 暗黑模式下的icon
   */
  whiteIcon: string
  /**
   * 明亮模式下的icon
   */
  blackIcon: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [首页-金刚区用户的功能列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2738)
// **/
// export const getV1HomeFunctionUserConfigListApiRequest: MarkcoinRequest<
//   YapiGetV1HomeFunctionUserConfigListApiRequest,
//   YapiGetV1HomeFunctionUserConfigListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/homeFunction/userConfigList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
