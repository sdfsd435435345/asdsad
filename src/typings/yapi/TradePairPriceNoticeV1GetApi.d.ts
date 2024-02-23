/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-币对-获取币对设置的价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/3442) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/priceNotice`
 * @更新时间 `2022-11-21 10:00:43`
 */
export interface YapiGetV1TradePairPriceNoticeApiRequest {
  symbol: string
}

/**
 * 接口 [现货-币对-获取币对设置的价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/3442) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/priceNotice`
 * @更新时间 `2022-11-21 10:00:43`
 */
export interface YapiGetV1TradePairPriceNoticeApiResponse {
  code?: number
  data?: YapiGetV1TradePairPriceNoticeListData[]
  message?: string
}
export interface YapiGetV1TradePairPriceNoticeListData {
  /**
   * id
   */
  id: number
  symbol: string
  /**
   * 分类id, 1=价格上涨, 2=价格下跌, 3= 24小时涨幅, 4=24小时跌幅
   */
  type: number
  /**
   * 价格
   */
  value: string
  /**
   * 是否重复通知, 1=重复通知, 2=不重复通知
   */
  isRepeatNotice: number
  /**
   * 时间搓,毫秒
   */
  createTime: number
  /**
   * 过期时间
   */
  expireTime: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-币对-获取币对设置的价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/3442)
// **/
// export const getV1TradePairPriceNoticeApiRequest: MarkcoinRequest<
//   YapiGetV1TradePairPriceNoticeApiRequest,
//   YapiGetV1TradePairPriceNoticeApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/tradePair/priceNotice",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
