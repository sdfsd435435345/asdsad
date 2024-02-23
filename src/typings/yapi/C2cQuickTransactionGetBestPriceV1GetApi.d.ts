/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [快捷交易获取最优价格↗](https://yapi.nbttfc365.com/project/73/interface/api/5474) 的 **请求类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_584)
 * @请求头 `GET /v1/c2c/quickTransaction/getBestPrice`
 * @更新时间 `2023-11-03 14:17:33`
 */
export interface YapiGetV1C2cQuickTransactionGetBestPriceApiRequest {
  /**
   * 方向，BUY,买，SELL,买
   */
  side: string
  /**
   * 要购买的币种ID
   */
  coinId: string
  /**
   * 交易区ID
   */
  areaId: string
  /**
   * 输入的数量,type=quantity必传，默认传0
   */
  amount?: string
  /**
   * 输入金额，type=amount必传，默认传0
   */
  quoteAmount?: string
  /**
   * quantity按数量购买，amount,按金额购买
   */
  type: string
  /**
   * 是否需要otc价格参与
   */
  isSupportOtc?: string
}

/**
 * 接口 [快捷交易获取最优价格↗](https://yapi.nbttfc365.com/project/73/interface/api/5474) 的 **返回类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_584)
 * @请求头 `GET /v1/c2c/quickTransaction/getBestPrice`
 * @更新时间 `2023-11-03 14:17:33`
 */
export interface YapiGetV1C2cQuickTransactionGetBestPriceApiResponse {
  /**
   * 200成交，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiGetV1C2CQuickTransactionGetBestPriceData
}
/**
 * 最优价格
 */
export interface YapiGetV1C2CQuickTransactionGetBestPriceData {
  /**
   * 最优价格
   */
  price: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [快捷交易获取最优价格↗](https://yapi.nbttfc365.com/project/73/interface/api/5474)
// **/
// export const getV1C2cQuickTransactionGetBestPriceApiRequest: MarkcoinRequest<
//   YapiGetV1C2cQuickTransactionGetBestPriceApiRequest,
//   YapiGetV1C2cQuickTransactionGetBestPriceApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/quickTransaction/getBestPrice",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [快捷交易获取最优价格↗](https://yapi.nbttfc365.com/project/77/interface/api/6754) 的 **请求类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_632)
 * @请求头 `GET /v1/c2c/quickTransaction/getBestPrice`
 * @更新时间 `2023-06-08 16:47:16`
 */
export interface YapiGetV1C2cQuickTransactionGetBestPriceApiRequest {
  /**
   * 方向，BUY,买，SELL,买
   */
  side: string
  /**
   * 要购买的币种ID
   */
  coinId: string
  /**
   * 交易区ID
   */
  areaId: string
  /**
   * 输入的数量,type=quantity必传，默认传0
   */
  amount?: string
  /**
   * 输入金额，type=amount必传，默认传0
   */
  quoteAmount?: string
  /**
   * quantity按数量购买，amount,按金额购买
   */
  type: string
}

/**
 * 接口 [快捷交易获取最优价格↗](https://yapi.nbttfc365.com/project/77/interface/api/6754) 的 **返回类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_632)
 * @请求头 `GET /v1/c2c/quickTransaction/getBestPrice`
 * @更新时间 `2023-06-08 16:47:16`
 */
export interface YapiGetV1C2cQuickTransactionGetBestPriceApiResponse {
  /**
   * 200成交，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiGetV1C2CQuickTransactionGetBestPriceData
}
/**
 * 最优价格
 */
export interface YapiGetV1C2CQuickTransactionGetBestPriceData {
  /**
   * 最优价格
   */
  price: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [快捷交易获取最优价格↗](https://yapi.nbttfc365.com/project/77/interface/api/6754)
// **/
// export const getV1C2cQuickTransactionGetBestPriceApiRequest: MarkcoinRequest<
//   YapiGetV1C2cQuickTransactionGetBestPriceApiRequest,
//   YapiGetV1C2cQuickTransactionGetBestPriceApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/quickTransaction/getBestPrice",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
