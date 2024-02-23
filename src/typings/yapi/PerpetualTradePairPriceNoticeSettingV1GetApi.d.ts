/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取价格订阅的配置信息↗](https://yapi.nbttfc365.com/project/44/interface/api/5714) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/priceNotice/setting`
 * @更新时间 `2023-05-06 17:07:50`
 */
export interface YapiGetV1PerpetualTradePairPriceNoticeSettingApiRequest {}

/**
 * 接口 [获取价格订阅的配置信息↗](https://yapi.nbttfc365.com/project/44/interface/api/5714) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/priceNotice/setting`
 * @更新时间 `2023-05-06 17:07:50`
 */
export interface YapiGetV1PerpetualTradePairPriceNoticeSettingApiResponse {
  code?: number
  data?: YapiGetV1PerpetualTradePairPriceNoticeSettingData
  message?: string
}
export interface YapiGetV1PerpetualTradePairPriceNoticeSettingData {
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
// * [获取价格订阅的配置信息↗](https://yapi.nbttfc365.com/project/44/interface/api/5714)
// **/
// export const getV1PerpetualTradePairPriceNoticeSettingApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualTradePairPriceNoticeSettingApiRequest,
//   YapiGetV1PerpetualTradePairPriceNoticeSettingApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/tradePair/priceNotice/setting",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
