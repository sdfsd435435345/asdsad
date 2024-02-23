/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [添加自选↗](https://yapi.nbttfc365.com/project/44/interface/api/10954) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `POST /v1/option/favouriteTradePair/add`
 * @更新时间 `2023-07-11 09:17:06`
 */
export interface YapiPostV1OptionFavouriteTradePairAddApiRequest {
  /**
   * 关注的交易对id集合
   */
  tradeIdList: string[]
}

/**
 * 接口 [添加自选↗](https://yapi.nbttfc365.com/project/44/interface/api/10954) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `POST /v1/option/favouriteTradePair/add`
 * @更新时间 `2023-07-11 09:17:06`
 */
export interface YapiPostV1OptionFavouriteTradePairAddApiResponse {
  code?: number
  message?: string
  data?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [添加自选↗](https://yapi.nbttfc365.com/project/44/interface/api/10954)
// **/
// export const postV1OptionFavouriteTradePairAddApiRequest: MarkcoinRequest<
//   YapiPostV1OptionFavouriteTradePairAddApiRequest,
//   YapiPostV1OptionFavouriteTradePairAddApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/option/favouriteTradePair/add",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
