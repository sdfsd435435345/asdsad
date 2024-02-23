/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [币对-删除价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/5734) 的 **请求类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/priceNotice/delete`
 * @更新时间 `2023-05-06 19:29:25`
 */
export interface YapiGetV1PerpetualTradePairPriceNoticeDeleteApiRequest {
  /**
   * 价格订阅的id
   */
  id: string
}

/**
 * 接口 [币对-删除价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/5734) 的 **返回类型**
 *
 * @分类 [合约行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_190)
 * @请求头 `GET /v1/perpetual/tradePair/priceNotice/delete`
 * @更新时间 `2023-05-06 19:29:25`
 */
export interface YapiGetV1PerpetualTradePairPriceNoticeDeleteApiResponse {
  code: number
  message: string
  data: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [币对-删除价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/5734)
// **/
// export const getV1PerpetualTradePairPriceNoticeDeleteApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualTradePairPriceNoticeDeleteApiRequest,
//   YapiGetV1PerpetualTradePairPriceNoticeDeleteApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/tradePair/priceNotice/delete",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
