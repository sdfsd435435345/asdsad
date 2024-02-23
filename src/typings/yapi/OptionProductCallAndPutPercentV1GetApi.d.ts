/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [下单涨跌比例↗](https://yapi.nbttfc365.com/project/44/interface/api/11064) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/product/callAndPutPercent`
 * @更新时间 `2023-07-17 18:21:13`
 */
export interface YapiGetV1OptionProductCallAndPutPercentApiRequest {
  /**
   * 三元产品ID
   */
  optionId: string
}

/**
 * 接口 [下单涨跌比例↗](https://yapi.nbttfc365.com/project/44/interface/api/11064) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/product/callAndPutPercent`
 * @更新时间 `2023-07-17 18:21:13`
 */
export interface YapiGetV1OptionProductCallAndPutPercentApiResponse {
  code: number
  message: string
  data: YapiGetV1OptionProductCallAndPutPercentData
}
export interface YapiGetV1OptionProductCallAndPutPercentData {
  /**
   * 看涨百分比   48.5
   */
  call: number
  /**
   * 看跌百分比  51.5
   */
  put: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [下单涨跌比例↗](https://yapi.nbttfc365.com/project/44/interface/api/11064)
// **/
// export const getV1OptionProductCallAndPutPercentApiRequest: MarkcoinRequest<
//   YapiGetV1OptionProductCallAndPutPercentApiRequest,
//   YapiGetV1OptionProductCallAndPutPercentApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/option/product/callAndPutPercent",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
