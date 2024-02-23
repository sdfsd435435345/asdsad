/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取导航栏↗](https://yapi.nbttfc365.com/project/44/interface/api/11989) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/chainStar/getNavigation`
 * @更新时间 `2023-11-07 17:08:05`
 */
export interface YapiGetV1ChainStarGetNavigationApiRequest {}

/**
 * 接口 [获取导航栏↗](https://yapi.nbttfc365.com/project/44/interface/api/11989) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/chainStar/getNavigation`
 * @更新时间 `2023-11-07 17:08:05`
 */
export interface YapiGetV1ChainStarGetNavigationApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1ChainStarGetNavigationData
}
export interface YapiGetV1ChainStarGetNavigationData {
  navigationBarList?: YapiGetV1ChainStarGetNavigationListNavigationBarListData[]
}
export interface YapiGetV1ChainStarGetNavigationListNavigationBarListData {
  id: number
  businessId: number
  parentId: null
  name: string
  describe: string
  isParent: number
  lanTypeCd: string
  url: string | null
  icon: null
  sortCode: number
  submenu: YapiGetV1ChainStarGetNavigationListSubmenuListNavigationBarListData[]
  typeCd: string
  /**
   * 暗黑模式下的icon
   */
  whiteIcon: string
  /**
   * 明亮模式下的icon
   */
  blackIcon: string
}
export interface YapiGetV1ChainStarGetNavigationListSubmenuListNavigationBarListData {
  id: number
  businessId: number
  parentId: number
  name: string
  describe: string
  isParent: number
  lanTypeCd: string
  url: string
  icon: string
  sortCode: number
  submenu: null
  typeCd: string
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
// * [获取导航栏↗](https://yapi.nbttfc365.com/project/44/interface/api/11989)
// **/
// export const getV1ChainStarGetNavigationApiRequest: MarkcoinRequest<
//   YapiGetV1ChainStarGetNavigationApiRequest,
//   YapiGetV1ChainStarGetNavigationApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/chainStar/getNavigation",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
