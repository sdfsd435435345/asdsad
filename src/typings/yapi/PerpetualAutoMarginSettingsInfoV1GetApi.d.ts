/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [用户自动追加保证金信息查询↗](https://yapi.nbttfc365.com/project/44/interface/api/4011) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/autoMargin/settings/info`
 * @更新时间 `2023-03-28 18:18:42`
 */
export interface YapiGetV1PerpetualAutoMarginSettingsInfoApiRequest {}

/**
 * 接口 [用户自动追加保证金信息查询↗](https://yapi.nbttfc365.com/project/44/interface/api/4011) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/autoMargin/settings/info`
 * @更新时间 `2023-03-28 18:18:42`
 */
export interface YapiGetV1PerpetualAutoMarginSettingsInfoApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  message: string
  data: YapiGetV1PerpetualAutoMarginSettingsInfoData
}
export interface YapiGetV1PerpetualAutoMarginSettingsInfoData {
  /**
   * 可用usd数量
   */
  available: string
  /**
   * 是否设置过自动追加保证金，true,设置过，false，未设置过
   */
  isSettingAutoMargin: boolean
  /**
   * 上次设置保证金剩余量usd
   */
  remaining: string
  /**
   * 已追加的保证金usd
   */
  total: string
  /**
   * 法币符号
   */
  currencySymbol: string
  /**
   * 自动追加保证金最大设置金额
   */
  maxSettingAmount: string
  /**
   *  上一次是否设置过自动追加保证金，true,设置过，false,未设置过
   */
  lastTimeSettingAutoMargin: boolean
  /**
   * 上次设置剩余量
   */
  lastTimeRemaining: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [用户自动追加保证金信息查询↗](https://yapi.nbttfc365.com/project/44/interface/api/4011)
// **/
// export const getV1PerpetualAutoMarginSettingsInfoApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualAutoMarginSettingsInfoApiRequest,
//   YapiGetV1PerpetualAutoMarginSettingsInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/autoMargin/settings/info",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
