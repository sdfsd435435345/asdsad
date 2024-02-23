/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [删除自选↗](https://yapi.nbttfc365.com/project/44/interface/api/10959) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `POST /v1/option/favouriteTradePair/delete`
 * @更新时间 `2023-07-11 09:16:47`
 */
export interface YapiPostV1OptionFavouriteTradePairDeleteApiRequest {
  /**
   * 删除的交易对id集合
   */
  tradeIdList: string[]
}

/**
 * 接口 [删除自选↗](https://yapi.nbttfc365.com/project/44/interface/api/10959) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `POST /v1/option/favouriteTradePair/delete`
 * @更新时间 `2023-07-11 09:16:47`
 */
export interface YapiPostV1OptionFavouriteTradePairDeleteApiResponse {
  message?: string
  code?: number
  data?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除自选↗](https://yapi.nbttfc365.com/project/44/interface/api/10959)
// **/
// export const postV1OptionFavouriteTradePairDeleteApiRequest: MarkcoinRequest<
//   YapiPostV1OptionFavouriteTradePairDeleteApiRequest,
//   YapiPostV1OptionFavouriteTradePairDeleteApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/option/favouriteTradePair/delete",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
