/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-币对-价格预警全局配置↗](https://yapi.nbttfc365.com/project/44/interface/api/3497) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/priceNotice/setting`
 * @更新时间 `2022-11-21 10:00:41`
 */
export interface YapiGetV1TradePairPriceNoticeSettingApiRequest {}

/**
 * 接口 [现货-币对-价格预警全局配置↗](https://yapi.nbttfc365.com/project/44/interface/api/3497) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/priceNotice/setting`
 * @更新时间 `2022-11-21 10:00:41`
 */
export interface YapiGetV1TradePairPriceNoticeSettingApiResponse {
  status?: number
  message?: string
  data?: YapiGetV1TradePairPriceNoticeSettingData
}
export interface YapiGetV1TradePairPriceNoticeSettingData {
  /**
   * 每个交易对可配置的价格提醒条数
   */
  single?: number
  /**
   * 所有交易对价格提醒总条数
   */
  total?: number
  /**
   * 每条价格提醒有效期天数
   */
  validDays?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-币对-价格预警全局配置↗](https://yapi.nbttfc365.com/project/44/interface/api/3497)
// **/
// export const getV1TradePairPriceNoticeSettingApiRequest: MarkcoinRequest<
//   YapiGetV1TradePairPriceNoticeSettingApiRequest,
//   YapiGetV1TradePairPriceNoticeSettingApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/tradePair/priceNotice/setting",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
