/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [确认卖币↗](https://yapi.nbttfc365.com/project/73/interface/api/5237) 的 **请求类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_584)
 * @请求头 `POST /v1/c2c/quickTransaction/confirmSell`
 * @更新时间 `2023-04-11 17:30:44`
 */
export interface YapiPostV1C2cQuickTransactionConfirmSellApiRequest {
  /**
   * 币种id
   */
  coinId: number
  /**
   * 主链类型ID
   */
  mainchainAddrId?: number
  /**
   * NUMBER按数量购买/TOTAL_PRICE按金额购买
   */
  typeCd: string
  /**
   * 数量，typeCd=NUMBER时必填
   */
  number?: number
  /**
   * 总价，typeCd=TOTAL_PRICE时必填
   */
  totalPrice?: number
  /**
   * 支付id
   */
  paymentId: number
  /**
   * 广告ID
   */
  advertId: number
  /**
   * 区域id
   */
  areaId: string
}

/**
 * 接口 [确认卖币↗](https://yapi.nbttfc365.com/project/73/interface/api/5237) 的 **返回类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_584)
 * @请求头 `POST /v1/c2c/quickTransaction/confirmSell`
 * @更新时间 `2023-04-11 17:30:44`
 */
export interface YapiPostV1C2cQuickTransactionConfirmSellApiResponse {
  /**
   * code=10106004，已刷新价格，请重新购买
   */
  code: number
  /**
   * 是否成功
   */
  data: boolean
  message: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [确认卖币↗](https://yapi.nbttfc365.com/project/73/interface/api/5237)
// **/
// export const postV1C2cQuickTransactionConfirmSellApiRequest: MarkcoinRequest<
//   YapiPostV1C2cQuickTransactionConfirmSellApiRequest,
//   YapiPostV1C2cQuickTransactionConfirmSellApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/quickTransaction/confirmSell",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [确认卖币↗](https://yapi.nbttfc365.com/project/77/interface/api/6779) 的 **请求类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_632)
 * @请求头 `POST /v1/c2c/quickTransaction/confirmSell`
 * @更新时间 `2023-06-08 16:47:18`
 */
export interface YapiPostV1C2cQuickTransactionConfirmSellApiRequest {
  /**
   * 币种id
   */
  coinId: number
  /**
   * 主链类型ID
   */
  mainchainAddrId?: number
  /**
   * NUMBER按数量购买/TOTAL_PRICE按金额购买
   */
  typeCd: string
  /**
   * 数量，typeCd=NUMBER时必填
   */
  number?: number
  /**
   * 总价，typeCd=TOTAL_PRICE时必填
   */
  totalPrice?: number
  /**
   * 支付id
   */
  paymentId: number
  /**
   * 广告ID
   */
  advertId: number
  /**
   * 区域id
   */
  areaId: string
}

/**
 * 接口 [确认卖币↗](https://yapi.nbttfc365.com/project/77/interface/api/6779) 的 **返回类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_632)
 * @请求头 `POST /v1/c2c/quickTransaction/confirmSell`
 * @更新时间 `2023-06-08 16:47:18`
 */
export interface YapiPostV1C2cQuickTransactionConfirmSellApiResponse {
  /**
   * code=10106004，已刷新价格，请重新购买
   */
  code: number
  /**
   * 是否成功
   */
  data: boolean
  message: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [确认卖币↗](https://yapi.nbttfc365.com/project/77/interface/api/6779)
// **/
// export const postV1C2cQuickTransactionConfirmSellApiRequest: MarkcoinRequest<
//   YapiPostV1C2cQuickTransactionConfirmSellApiRequest,
//   YapiPostV1C2cQuickTransactionConfirmSellApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/quickTransaction/confirmSell",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
