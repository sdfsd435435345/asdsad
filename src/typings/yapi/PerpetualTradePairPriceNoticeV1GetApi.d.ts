/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [币对-获取币对设置的价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/5719) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/priceNotice`
 * @更新时间 `2023-05-09 13:58:04`
 */
export interface YapiGetV1PerpetualTradePairPriceNoticeApiRequest {
  /**
   * 交易对
   */
  symbol: string
}

/**
 * 接口 [币对-获取币对设置的价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/5719) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/priceNotice`
 * @更新时间 `2023-05-09 13:58:04`
 */
export interface YapiGetV1PerpetualTradePairPriceNoticeApiResponse {
  code: number
  message: string
  data: YapiGetV1PerpetualTradePairPriceNoticeListData[]
}
export interface YapiGetV1PerpetualTradePairPriceNoticeListData {
  id: string
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
  isRepeatNotice: string
  /**
   * 时间搓,毫秒
   */
  createTime: string
  /**
   * 过期时间
   */
  expireTime: string
  /**
   * 合约类型
   */
  typeInd: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [币对-获取币对设置的价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/5719)
// **/
// export const getV1PerpetualTradePairPriceNoticeApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualTradePairPriceNoticeApiRequest,
//   YapiGetV1PerpetualTradePairPriceNoticeApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/tradePair/priceNotice",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
