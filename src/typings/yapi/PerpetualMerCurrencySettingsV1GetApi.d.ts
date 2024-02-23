/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取商户法币配置↗](https://yapi.nbttfc365.com/project/44/interface/api/4499) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/mer/currency/settings`
 * @更新时间 `2023-05-17 15:28:53`
 */
export interface YapiGetV1PerpetualMerCurrencySettingsApiRequest {}

/**
 * 接口 [获取商户法币配置↗](https://yapi.nbttfc365.com/project/44/interface/api/4499) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/mer/currency/settings`
 * @更新时间 `2023-05-17 15:28:53`
 */
export interface YapiGetV1PerpetualMerCurrencySettingsApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  /**
   * 返回信息
   */
  message: string
  data: YapiGetV1PerpetualMerCurrencySettingsData
}
export interface YapiGetV1PerpetualMerCurrencySettingsData {
  /**
   * 国家ID
   */
  countryId: number
  /**
   * 法币名称
   */
  currencyName: string
  /**
   * 法币英文名称
   */
  currencyEnName: string
  /**
   * 国旗
   */
  countryFlagImg: string
  /**
   * 法币符号
   */
  currencySymbol: string
  /**
   * 法币精度
   */
  offset: string
  /**
   * 法币图标
   */
  legalIcon: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取商户法币配置↗](https://yapi.nbttfc365.com/project/44/interface/api/4499)
// **/
// export const getV1PerpetualMerCurrencySettingsApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualMerCurrencySettingsApiRequest,
//   YapiGetV1PerpetualMerCurrencySettingsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/mer/currency/settings",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
