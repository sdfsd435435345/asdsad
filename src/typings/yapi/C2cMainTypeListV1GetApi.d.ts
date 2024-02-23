/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取币种对应的mainType↗](https://yapi.nbttfc365.com/project/73/interface/api/5102) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `GET /v1/c2c/mainType/list`
 * @更新时间 `2023-04-24 18:41:28`
 */
export interface YapiGetV1C2cMainTypeListApiRequest {
  /**
   * 币种id
   */
  coinId: string
}

/**
 * 接口 [获取币种对应的mainType↗](https://yapi.nbttfc365.com/project/73/interface/api/5102) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_553)
 * @请求头 `GET /v1/c2c/mainType/list`
 * @更新时间 `2023-04-24 18:41:28`
 */
export interface YapiGetV1C2cMainTypeListApiResponse {
  code?: number
  data?: YapiGetV1C2CMainTypeListData[]
  message?: string
}
export interface YapiGetV1C2CMainTypeListData {
  symbol?: string
  /**
   * appLogo
   */
  appLogo?: string
  /**
   * webLogo
   */
  webLogo?: string
  /**
   * 是否可以提现 1 开启，2 关闭
   */
  isWithdraw?: number
  /**
   * 币种名称
   */
  coinFullName?: string
  /**
   * id
   */
  id?: string
  /**
   * 币种名称
   */
  coinName?: string
  /**
   * 主链类型
   */
  mainType?: string
  /**
   * 是否开启充值, 1 开启，2 关闭
   */
  isDeposit?: number
  /**
   * 是否使用地址标签, 1 是，2 否
   */
  isUseMemo?: number
  mainnet?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取币种对应的mainType↗](https://yapi.nbttfc365.com/project/73/interface/api/5102)
// **/
// export const getV1C2cMainTypeListApiRequest: MarkcoinRequest<
//   YapiGetV1C2cMainTypeListApiRequest,
//   YapiGetV1C2cMainTypeListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/mainType/list",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取币种对应的mainType↗](https://yapi.nbttfc365.com/project/77/interface/api/6404) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/c2c/mainType/list`
 * @更新时间 `2023-06-08 16:46:52`
 */
export interface YapiGetV1C2cMainTypeListApiRequest {
  /**
   * 币种id
   */
  coinId: string
}

/**
 * 接口 [获取币种对应的mainType↗](https://yapi.nbttfc365.com/project/77/interface/api/6404) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/c2c/mainType/list`
 * @更新时间 `2023-06-08 16:46:52`
 */
export interface YapiGetV1C2cMainTypeListApiResponse {
  code?: number
  data?: YapiGetV1C2CMainTypeListData[]
  message?: string
}
export interface YapiGetV1C2CMainTypeListData {
  symbol?: string
  /**
   * appLogo
   */
  appLogo?: string
  /**
   * webLogo
   */
  webLogo?: string
  /**
   * 是否可以提现 1 开启，2 关闭
   */
  isWithdraw?: number
  /**
   * 币种名称
   */
  coinFullName?: string
  /**
   * id
   */
  id?: string
  /**
   * 币种名称
   */
  coinName?: string
  /**
   * 主链类型
   */
  mainType?: string
  /**
   * 是否开启充值, 1 开启，2 关闭
   */
  isDeposit?: number
  /**
   * 是否使用地址标签, 1 是，2 否
   */
  isUseMemo?: number
  mainnet?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取币种对应的mainType↗](https://yapi.nbttfc365.com/project/77/interface/api/6404)
// **/
// export const getV1C2cMainTypeListApiRequest: MarkcoinRequest<
//   YapiGetV1C2cMainTypeListApiRequest,
//   YapiGetV1C2cMainTypeListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/mainType/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
