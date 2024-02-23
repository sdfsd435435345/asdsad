/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [（后台接口）扣减用户余额_inner↗](https://yapi.nbttfc365.com/project/44/interface/api/19314) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /inner/v1/balance/subBalance`
 * @更新时间 `2023-11-06 15:33:39`
 */
export interface YapiPostInnerV1BalanceSubBalanceApiRequest {
  /**
   * 用户uid
   */
  uid: number
  /**
   * 商户id
   */
  businessId: number
  /**
   * 新增的币种id
   */
  coinId: number
  /**
   * 扣减金额
   */
  amount: number
  /**
   * 日志类型
   */
  reason: number
  /**
   * 来源id
   */
  srcId: number
  /**
   * 幂等参数
   */
  uuid: string
  /**
   * 手续费币种
   */
  feeCoinId?: number
  /**
   * 手续费
   */
  fee: number
  /**
   * 手续费类型
   */
  feeReason?: number
}

/**
 * 接口 [（后台接口）扣减用户余额_inner↗](https://yapi.nbttfc365.com/project/44/interface/api/19314) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /inner/v1/balance/subBalance`
 * @更新时间 `2023-11-06 15:33:39`
 */
export interface YapiPostInnerV1BalanceSubBalanceApiResponse {
  isSuccess?: boolean
  msg?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [（后台接口）扣减用户余额_inner↗](https://yapi.nbttfc365.com/project/44/interface/api/19314)
// **/
// export const postInnerV1BalanceSubBalanceApiRequest: MarkcoinRequest<
//   YapiPostInnerV1BalanceSubBalanceApiRequest,
//   YapiPostInnerV1BalanceSubBalanceApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/balance/subBalance",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
