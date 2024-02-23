/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-币对-设置价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/3447) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `POST /v1/tradePair/priceNotice/add`
 * @更新时间 `2022-12-19 11:45:31`
 */
export interface YapiPostV1TradePairPriceNoticeAddApiRequest {
  /**
   * 币对
   */
  symbol?: string
  /**
   * 分类id, 1=价格上涨, 2=价格下跌, 3= 24小时涨幅, 4=24小时跌幅
   */
  type?: number
  /**
   * 值
   */
  value?: string
  /**
   * 是否重复通知, 1=重复通知, 2=不重复通知
   */
  isRepeatNotice?: number
}

/**
 * 接口 [现货-币对-设置价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/3447) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `POST /v1/tradePair/priceNotice/add`
 * @更新时间 `2022-12-19 11:45:31`
 */
export interface YapiPostV1TradePairPriceNoticeAddApiResponse {
  code?: number
  data?: {}
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-币对-设置价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/3447)
// **/
// export const postV1TradePairPriceNoticeAddApiRequest: MarkcoinRequest<
//   YapiPostV1TradePairPriceNoticeAddApiRequest,
//   YapiPostV1TradePairPriceNoticeAddApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/tradePair/priceNotice/add",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
