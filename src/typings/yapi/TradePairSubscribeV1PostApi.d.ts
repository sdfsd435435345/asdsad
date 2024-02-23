/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-订阅币对开盘通知↗](https://yapi.nbttfc365.com/project/44/interface/api/2992) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `POST /v1/tradePair/subscribe`
 * @更新时间 `2022-11-05 17:17:28`
 */
export interface YapiPostV1TradePairSubscribeApiRequest {
  tradeId?: number
}

/**
 * 接口 [现货-订阅币对开盘通知↗](https://yapi.nbttfc365.com/project/44/interface/api/2992) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `POST /v1/tradePair/subscribe`
 * @更新时间 `2022-11-05 17:17:28`
 */
export interface YapiPostV1TradePairSubscribeApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-订阅币对开盘通知↗](https://yapi.nbttfc365.com/project/44/interface/api/2992)
// **/
// export const postV1TradePairSubscribeApiRequest: MarkcoinRequest<
//   YapiPostV1TradePairSubscribeApiRequest,
//   YapiPostV1TradePairSubscribeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/tradePair/subscribe",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
