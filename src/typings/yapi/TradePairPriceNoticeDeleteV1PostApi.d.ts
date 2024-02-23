/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-币对-删除价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/3565) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `POST /v1/tradePair/priceNotice/delete`
 * @更新时间 `2022-11-24 11:02:41`
 */
export interface YapiPostV1TradePairPriceNoticeDeleteApiRequest {
  id?: number
}

/**
 * 接口 [现货-币对-删除价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/3565) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `POST /v1/tradePair/priceNotice/delete`
 * @更新时间 `2022-11-24 11:02:41`
 */
export interface YapiPostV1TradePairPriceNoticeDeleteApiResponse {
  code?: number
  data?: {}
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-币对-删除价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/3565)
// **/
// export const postV1TradePairPriceNoticeDeleteApiRequest: MarkcoinRequest<
//   YapiPostV1TradePairPriceNoticeDeleteApiRequest,
//   YapiPostV1TradePairPriceNoticeDeleteApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/tradePair/priceNotice/delete",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
