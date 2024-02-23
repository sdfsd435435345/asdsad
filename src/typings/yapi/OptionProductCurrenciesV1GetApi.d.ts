/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [保证金币种列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11084) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/product/currencies`
 * @更新时间 `2023-07-19 14:32:42`
 */
export interface YapiGetV1OptionProductCurrenciesApiRequest {}

/**
 * 接口 [保证金币种列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11084) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/product/currencies`
 * @更新时间 `2023-07-19 14:32:42`
 */
export interface YapiGetV1OptionProductCurrenciesApiResponse {
  code: string
  message: string
  data: string[]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [保证金币种列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11084)
// **/
// export const getV1OptionProductCurrenciesApiRequest: MarkcoinRequest<
//   YapiGetV1OptionProductCurrenciesApiRequest,
//   YapiGetV1OptionProductCurrenciesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/option/product/currencies",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
