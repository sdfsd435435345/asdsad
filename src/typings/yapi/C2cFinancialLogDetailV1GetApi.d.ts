/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [财务记录详情（不同类型考虑拆分接口）弃用 ↗](https://yapi.nbttfc365.com/project/73/interface/api/4591) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `GET /c2c/v1/financialLog/detail`
 * @更新时间 `2023-03-03 16:18:33`
 */
export interface YapiGetC2cV1FinancialLogDetailApiRequest {}

/**
 * 接口 [财务记录详情（不同类型考虑拆分接口）弃用 ↗](https://yapi.nbttfc365.com/project/73/interface/api/4591) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `GET /c2c/v1/financialLog/detail`
 * @更新时间 `2023-03-03 16:18:33`
 */
export interface YapiGetC2cV1FinancialLogDetailApiResponse {
  message?: string
  code?: number
  data?: YapiGetC2CV1FinancialLogDetailListData[]
}
export interface YapiGetC2CV1FinancialLogDetailListData {
  /**
   * 创建时间
   */
  create_time?: number
  /**
   * 完成时间
   */
  finish_time?: number
  /**
   * 币种
   */
  symbol?: number
  /**
   * 记录id
   */
  id?: number
  /**
   * 交易类型1划转至交易账户、2划转至广告账户、3站内卖币、4仲裁赔付
   */
  trading_status?: number
  /**
   * 交易状态1成功、2失败、3进行中
   */
  trading_type?: number
  /**
   * 交易区
   */
  area?: string
  /**
   * 改变值
   */
  change_vale?: string
  /**
   * 订单编号
   */
  trade_id: string
  /**
   * 广告单号
   */
  advert_id: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [财务记录详情（不同类型考虑拆分接口）弃用 ↗](https://yapi.nbttfc365.com/project/73/interface/api/4591)
// **/
// export const getC2cV1FinancialLogDetailApiRequest: MarkcoinRequest<
//   YapiGetC2cV1FinancialLogDetailApiRequest,
//   YapiGetC2cV1FinancialLogDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/c2c/v1/financialLog/detail",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [财务记录详情（不同类型考虑拆分接口）弃用 ↗](https://yapi.nbttfc365.com/project/77/interface/api/6604) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `GET /c2c/v1/financialLog/detail`
 * @更新时间 `2023-06-08 16:47:06`
 */
export interface YapiGetC2cV1FinancialLogDetailApiRequest {}

/**
 * 接口 [财务记录详情（不同类型考虑拆分接口）弃用 ↗](https://yapi.nbttfc365.com/project/77/interface/api/6604) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `GET /c2c/v1/financialLog/detail`
 * @更新时间 `2023-06-08 16:47:06`
 */
export interface YapiGetC2cV1FinancialLogDetailApiResponse {
  message?: string
  code?: number
  data?: YapiGetC2CV1FinancialLogDetailListData[]
}
export interface YapiGetC2CV1FinancialLogDetailListData {
  /**
   * 创建时间
   */
  create_time?: number
  /**
   * 完成时间
   */
  finish_time?: number
  /**
   * 币种
   */
  symbol?: number
  /**
   * 记录id
   */
  id?: number
  /**
   * 交易类型1划转至交易账户、2划转至广告账户、3站内卖币、4仲裁赔付
   */
  trading_status?: number
  /**
   * 交易状态1成功、2失败、3进行中
   */
  trading_type?: number
  /**
   * 交易区
   */
  area?: string
  /**
   * 改变值
   */
  change_vale?: string
  /**
   * 订单编号
   */
  trade_id: string
  /**
   * 广告单号
   */
  advert_id: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [财务记录详情（不同类型考虑拆分接口）弃用 ↗](https://yapi.nbttfc365.com/project/77/interface/api/6604)
// **/
// export const getC2cV1FinancialLogDetailApiRequest: MarkcoinRequest<
//   YapiGetC2cV1FinancialLogDetailApiRequest,
//   YapiGetC2cV1FinancialLogDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/c2c/v1/financialLog/detail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
