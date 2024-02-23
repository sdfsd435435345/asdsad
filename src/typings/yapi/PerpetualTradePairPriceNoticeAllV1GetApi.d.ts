/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [币对-获取全部提醒↗](https://yapi.nbttfc365.com/project/44/interface/api/5724) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/priceNoticeAll`
 * @更新时间 `2023-05-09 13:57:38`
 */
export interface YapiGetV1PerpetualTradePairPriceNoticeAllApiRequest {
  pageNum: string
  pageSize: string
}

/**
 * 接口 [币对-获取全部提醒↗](https://yapi.nbttfc365.com/project/44/interface/api/5724) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/priceNoticeAll`
 * @更新时间 `2023-05-09 13:57:38`
 */
export interface YapiGetV1PerpetualTradePairPriceNoticeAllApiResponse {
  code?: number
  data?: YapiGetV1PerpetualTradePairPriceNoticeAllData
  message?: string
}
export interface YapiGetV1PerpetualTradePairPriceNoticeAllData {
  total?: number
  pageSize?: number
  list?: YapiGetV1PerpetualTradePairPriceNoticeAllListData[]
  pageNum?: number
}
export interface YapiGetV1PerpetualTradePairPriceNoticeAllListData {
  id: string
  /**
   * 币对
   */
  symbolName: string
  /**
   * 计价币
   */
  quoteSymbolName: string
  /**
   * 标的币
   */
  baseSymbolName: string
  /**
   * 分类id, 1=价格上涨, 2=价格下跌, 3= 24小时涨幅, 4=24小时跌幅
   */
  type: string
  value: string
  /**
   * 是否重复通知, 1=重复通知, 2=不重复通知
   */
  isRepeatNotice: string
  /**
   * 创建时间
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
// * [币对-获取全部提醒↗](https://yapi.nbttfc365.com/project/44/interface/api/5724)
// **/
// export const getV1PerpetualTradePairPriceNoticeAllApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualTradePairPriceNoticeAllApiRequest,
//   YapiGetV1PerpetualTradePairPriceNoticeAllApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/tradePair/priceNoticeAll",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
