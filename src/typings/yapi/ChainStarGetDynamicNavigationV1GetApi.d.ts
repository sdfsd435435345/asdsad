/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [VIP跳转菜单查询↗](https://yapi.nbttfc365.com/project/44/interface/api/18979) 的 **请求类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /v1/chainStar/getDynamicNavigation`
 * @更新时间 `2023-10-23 11:51:13`
 */
export interface YapiGetV1ChainStarGetDynamicNavigationApiRequest {
  /**
   * 1:衍生品，2：交易
   */
  type: string
}

/**
 * 接口 [VIP跳转菜单查询↗](https://yapi.nbttfc365.com/project/44/interface/api/18979) 的 **返回类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /v1/chainStar/getDynamicNavigation`
 * @更新时间 `2023-10-23 11:51:13`
 */
export interface YapiGetV1ChainStarGetDynamicNavigationApiResponse {
  code: number
  data: YapiGetV1ChainStarGetDynamicNavigationData
  message?: string
}
export interface YapiGetV1ChainStarGetDynamicNavigationData {
  id: number
  code: string
  businessId: number
  parentId: null
  name: string
  describe: string
  isParent: number
  lanTypeCd: string
  url: string | null
  icon: null
  sortCode: number
  typeCd: string
  androidLink: string
  iosLink: string
  h5Link: string
  /**
   * open: 外链 close:非外链
   */
  isOutlink: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [VIP跳转菜单查询↗](https://yapi.nbttfc365.com/project/44/interface/api/18979)
// **/
// export const getV1ChainStarGetDynamicNavigationApiRequest: MarkcoinRequest<
//   YapiGetV1ChainStarGetDynamicNavigationApiRequest,
//   YapiGetV1ChainStarGetDynamicNavigationApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/chainStar/getDynamicNavigation",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
