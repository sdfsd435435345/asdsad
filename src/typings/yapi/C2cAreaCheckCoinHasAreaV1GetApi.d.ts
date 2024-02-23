/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [检测币种是否存在交易区↗](https://yapi.nbttfc365.com/project/73/interface/api/18589) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `GET /v1/c2c/area/checkCoinHasArea`
 * @更新时间 `2023-09-21 14:48:46`
 */
export interface YapiGetV1C2cAreaCheckCoinHasAreaApiRequest {
  /**
   * 币种id
   */
  coinId: string
}

/**
 * 接口 [检测币种是否存在交易区↗](https://yapi.nbttfc365.com/project/73/interface/api/18589) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `GET /v1/c2c/area/checkCoinHasArea`
 * @更新时间 `2023-09-21 14:48:46`
 */
export interface YapiGetV1C2cAreaCheckCoinHasAreaApiResponse {
  code?: number
  /**
   * true 有区域可以交易该币种，false 没有区域可以交易币种
   */
  data?: boolean
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [检测币种是否存在交易区↗](https://yapi.nbttfc365.com/project/73/interface/api/18589)
// **/
// export const getV1C2cAreaCheckCoinHasAreaApiRequest: MarkcoinRequest<
//   YapiGetV1C2cAreaCheckCoinHasAreaApiRequest,
//   YapiGetV1C2cAreaCheckCoinHasAreaApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/area/checkCoinHasArea",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
