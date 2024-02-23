/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [币对-设置价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/5729) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `POST /v1/perpetual/tradePair/priceNotice/add`
 * @更新时间 `2023-05-06 16:50:30`
 */
export interface YapiPostV1PerpetualTradePairPriceNoticeAddApiRequest {
  symbol: string
  /**
   * 分类id, 1=价格上涨, 2=价格下跌, 3= 24小时涨幅, 4=24小时跌幅
   */
  type: string
  /**
   * 值
   */
  value: string
  /**
   * 是否重复通知, 1=重复通知, 2=不重复通知
   */
  isRepeatNotice: string
}

/**
 * 接口 [币对-设置价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/5729) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `POST /v1/perpetual/tradePair/priceNotice/add`
 * @更新时间 `2023-05-06 16:50:30`
 */
export interface YapiPostV1PerpetualTradePairPriceNoticeAddApiResponse {
  code: number
  message: string
  /**
   * 是否成功
   */
  data: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [币对-设置价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/5729)
// **/
// export const postV1PerpetualTradePairPriceNoticeAddApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualTradePairPriceNoticeAddApiRequest,
//   YapiPostV1PerpetualTradePairPriceNoticeAddApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/tradePair/priceNotice/add",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
