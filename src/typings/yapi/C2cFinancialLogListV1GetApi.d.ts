/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [财务记录列表 弃用↗](https://yapi.nbttfc365.com/project/73/interface/api/4587) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `GET /c2c/v1/financialLogList`
 * @更新时间 `2023-03-03 16:18:40`
 */
export interface YapiGetC2cV1FinancialLogListApiRequest {
  /**
   * 币种id
   */
  coin_id?: string
  /**
   * 1划转至交易账户、2划转至广告账户、3站内卖币、4仲裁赔付
   */
  trading_type?: string
}

/**
 * 接口 [财务记录列表 弃用↗](https://yapi.nbttfc365.com/project/73/interface/api/4587) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `GET /c2c/v1/financialLogList`
 * @更新时间 `2023-03-03 16:18:40`
 */
export interface YapiGetC2cV1FinancialLogListApiResponse {
  code?: number
  message?: string
  data?: YapiGetC2CV1FinancialLogListData[]
}
export interface YapiGetC2CV1FinancialLogListData {
  /**
   * 交易id
   */
  id?: number
  /**
   * 创建时间
   */
  create_time?: number
  /**
   * 完成时间
   */
  finish_time?: number
  /**
   * 变化值
   */
  change_vale?: string
  /**
   * 交易类型1划转至交易账户、2划转至广告账户、3站内卖币、4仲裁赔付
   */
  trading_type?: number
  /**
   * 交易状态1成功、2失败、3进行中
   */
  trading_status?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [财务记录列表 弃用↗](https://yapi.nbttfc365.com/project/73/interface/api/4587)
// **/
// export const getC2cV1FinancialLogListApiRequest: MarkcoinRequest<
//   YapiGetC2cV1FinancialLogListApiRequest,
//   YapiGetC2cV1FinancialLogListApiResponse['data']
// > = params => {
//   return request({
//     path: "/c2c/v1/financialLogList",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [财务记录列表 弃用↗](https://yapi.nbttfc365.com/project/77/interface/api/6599) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `GET /c2c/v1/financialLogList`
 * @更新时间 `2023-06-08 16:47:05`
 */
export interface YapiGetC2cV1FinancialLogListApiRequest {
  /**
   * 币种id
   */
  coin_id?: string
  /**
   * 1划转至交易账户、2划转至广告账户、3站内卖币、4仲裁赔付
   */
  trading_type?: string
}

/**
 * 接口 [财务记录列表 弃用↗](https://yapi.nbttfc365.com/project/77/interface/api/6599) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_624)
 * @请求头 `GET /c2c/v1/financialLogList`
 * @更新时间 `2023-06-08 16:47:05`
 */
export interface YapiGetC2cV1FinancialLogListApiResponse {
  code?: number
  message?: string
  data?: YapiGetC2CV1FinancialLogListData[]
}
export interface YapiGetC2CV1FinancialLogListData {
  /**
   * 交易id
   */
  id?: number
  /**
   * 创建时间
   */
  create_time?: number
  /**
   * 完成时间
   */
  finish_time?: number
  /**
   * 变化值
   */
  change_vale?: string
  /**
   * 交易类型1划转至交易账户、2划转至广告账户、3站内卖币、4仲裁赔付
   */
  trading_type?: number
  /**
   * 交易状态1成功、2失败、3进行中
   */
  trading_status?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [财务记录列表 弃用↗](https://yapi.nbttfc365.com/project/77/interface/api/6599)
// **/
// export const getC2cV1FinancialLogListApiRequest: MarkcoinRequest<
//   YapiGetC2cV1FinancialLogListApiRequest,
//   YapiGetC2cV1FinancialLogListApiResponse['data']
// > = params => {
//   return request({
//     path: "/c2c/v1/financialLogList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
