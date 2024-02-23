/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-默认添加自选列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2810) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/favourite/default`
 * @更新时间 `2022-11-01 10:30:31`
 */
export interface YapiGetV1FavouriteDefaultApiRequest {}

/**
 * 接口 [现货-默认添加自选列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2810) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/favourite/default`
 * @更新时间 `2022-11-01 10:30:31`
 */
export interface YapiGetV1FavouriteDefaultApiResponse {
  list?: YapiGetV1FavouriteDefaultList[]
}
export interface YapiGetV1FavouriteDefaultList {
  /**
   * 币对ID
   */
  tradePairId?: number
  /**
   * 计价币
   */
  quoteSymbolName?: string
  /**
   * 标的币
   */
  baseSymbolName?: string
  /**
   * 标的币全名
   */
  baseSymbolFullName?: string
  /**
   * 币对名
   */
  symbolName: string
  /**
   * 币对钱包名，ws用这个
   */
  symbolWassName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-默认添加自选列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2810)
// **/
// export const getV1FavouriteDefaultApiRequest: MarkcoinRequest<
//   YapiGetV1FavouriteDefaultApiRequest,
//   YapiGetV1FavouriteDefaultApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/favourite/default",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
