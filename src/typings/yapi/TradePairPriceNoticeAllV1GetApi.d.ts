/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-币对-获取全部提醒↗](https://yapi.nbttfc365.com/project/44/interface/api/3462) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/priceNoticeAll`
 * @更新时间 `2022-11-24 11:06:44`
 */
export interface YapiGetV1TradePairPriceNoticeAllApiRequest {
  pageNum: string
  pageSize: string
}

/**
 * 接口 [现货-币对-获取全部提醒↗](https://yapi.nbttfc365.com/project/44/interface/api/3462) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/priceNoticeAll`
 * @更新时间 `2022-11-24 11:06:44`
 */
export interface YapiGetV1TradePairPriceNoticeAllApiResponse {
  code?: number
  data: YapiGetV1TradePairPriceNoticeAllData
  message?: string
}
export interface YapiGetV1TradePairPriceNoticeAllData {
  pageNum: number
  pageSize: number
  total: number
  list: YapiGetV1TradePairPriceNoticeAllListData[]
}
export interface YapiGetV1TradePairPriceNoticeAllListData {
  id: number
  /**
   * 币对名称
   */
  symbolName: string
  /**
   * 计价币
   */
  quoteSymbolName: string
  /**
   * 交易币
   */
  baseSymbolName: string
  /**
   * 分类id, 1=价格上涨, 2=价格下跌, 3= 24小时涨幅, 4=24小时跌幅
   */
  type: number
  value: string
  /**
   * 是否重复通知, 1=重复通知, 2=不重复通知
   */
  isRepeatNotice: number
  /**
   * 创建时间,毫秒
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
// * [现货-币对-获取全部提醒↗](https://yapi.nbttfc365.com/project/44/interface/api/3462)
// **/
// export const getV1TradePairPriceNoticeAllApiRequest: MarkcoinRequest<
//   YapiGetV1TradePairPriceNoticeAllApiRequest,
//   YapiGetV1TradePairPriceNoticeAllApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/tradePair/priceNoticeAll",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
