/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [(后台接口)扣减冻结资金↗](https://yapi.nbttfc365.com/project/77/interface/api/8424) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/balance/unlockAndSub`
 * @更新时间 `2023-06-08 16:52:40`
 */
export interface YapiPostV1BalanceUnlockAndSubApiRequest {
  /**
   * 币种id
   */
  coinId: number
  /**
   * 数量
   */
  amount: number
  /**
   * 财务类型 1 下单冻结, 2 订单成交扣除, 3 成交成交到账, 4 币币手续费, 5 借款手续费, 6 借款冻结, 7 借款手续费, 8 还款手续费, 9 还款解冻, 10 借款, 11 充值冻结，12 充值到账， 13 提现冻结， 14 撤销提现解冻， 15 提现成功扣款'
   */
  reason: number
  /**
   * 业务id
   */
  srcId: number
  /**
   * 唯一健，业务类型+唯一号
   */
  uuid: string
  /**
   * 手续费
   */
  fee?: number
  /**
   * 财务类型 1 下单冻结, 2 订单成交扣除, 3 成交成交到账, 4 币币手续费, 5 借款手续费, 6 借款冻结, 7 借款手续费, 8 还款手续费, 9 还款解冻, 10 借款, 11 充值冻结，12 充值到账， 13 提现冻结， 14 撤销提现解冻， 15 提现成功扣款'
   */
  feeReason?: number
}

/**
 * 接口 [(后台接口)扣减冻结资金↗](https://yapi.nbttfc365.com/project/77/interface/api/8424) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/balance/unlockAndSub`
 * @更新时间 `2023-06-08 16:52:40`
 */
export interface YapiPostV1BalanceUnlockAndSubApiResponse {
  code?: number
  data?: YapiPostV1BalanceUnlockAndSubData
  message?: string
}
export interface YapiPostV1BalanceUnlockAndSubData {
  msg?: string
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [(后台接口)扣减冻结资金↗](https://yapi.nbttfc365.com/project/77/interface/api/8424)
// **/
// export const postV1BalanceUnlockAndSubApiRequest: MarkcoinRequest<
//   YapiPostV1BalanceUnlockAndSubApiRequest,
//   YapiPostV1BalanceUnlockAndSubApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/balance/unlockAndSub",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
