/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资金划转(inner)↗](https://yapi.nbttfc365.com/project/73/interface/api/18639) 的 **请求类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `POST /inner/c2c/v1/balance/transfer`
 * @更新时间 `2023-09-23 13:47:38`
 */
export interface YapiPostInnerC2cV1BalanceTransferApiRequest {
  /**
   * 1.划转至交易账户 2.划转至广告账户
   */
  typeCd: string
  /**
   * 币种id
   */
  coinId: string
  /**
   * 金额
   */
  amount: string
  /**
   * 订单号
   */
  orderId?: string
  /**
   * uid
   */
  uid: string
  /**
   * 商户id
   */
  bid: string
}

/**
 * 接口 [资金划转(inner)↗](https://yapi.nbttfc365.com/project/73/interface/api/18639) 的 **返回类型**
 *
 * @分类 [C2C中心↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_562)
 * @请求头 `POST /inner/c2c/v1/balance/transfer`
 * @更新时间 `2023-09-23 13:47:38`
 */
export interface YapiPostInnerC2cV1BalanceTransferApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资金划转(inner)↗](https://yapi.nbttfc365.com/project/73/interface/api/18639)
// **/
// export const postInnerC2cV1BalanceTransferApiRequest: MarkcoinRequest<
//   YapiPostInnerC2cV1BalanceTransferApiRequest,
//   YapiPostInnerC2cV1BalanceTransferApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/c2c/v1/balance/transfer",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
