/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [会员等级费率列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18799) 的 **请求类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /v1/member/vip/base/feeList`
 * @更新时间 `2023-10-20 14:25:12`
 */
export interface YapiGetV1MemberVipBaseFeeListApiRequest {
  /**
   * spot:现货、perpetual:合约
   */
  feeType: string
}

/**
 * 接口 [会员等级费率列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18799) 的 **返回类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /v1/member/vip/base/feeList`
 * @更新时间 `2023-10-20 14:25:12`
 */
export interface YapiGetV1MemberVipBaseFeeListApiResponse {
  code: number
  data: YapiGetV1MemberVipBaseFeeData
  message: string
}
export interface YapiGetV1MemberVipBaseFeeData {
  /**
   * 挂单(Maker) %
   */
  makerFee: string
  /**
   * 吃单(Taker) %
   */
  takerFee: string
  levelCondition: YapiGetV1MemberVipBaseFeeLevelConditionData
}
export interface YapiGetV1MemberVipBaseFeeLevelConditionData {
  /**
   * 近30天现货交易量 usd
   */
  spotAmount: number
  /**
   * 会员等级
   */
  levelCode: string
  /**
   * 近30天衍生品交易量 usd
   */
  derivativesAmount: number
  /**
   * 资产余额 usd
   */
  balanceAmount: number
  /**
   * 近30天现货交易量 usd，开关，开enable 关disable
   */
  spotAmountCalStatus: string
  /**
   * 近30天衍生品交易量 usd，开关，开enable 关disable
   */
  derivativesAmountCalStatus: string
  /**
   * 资产余额 usd，开关，开enable 关disable
   */
  balanceAmountCalStatus: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [会员等级费率列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18799)
// **/
// export const getV1MemberVipBaseFeeListApiRequest: MarkcoinRequest<
//   YapiGetV1MemberVipBaseFeeListApiRequest,
//   YapiGetV1MemberVipBaseFeeListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/vip/base/feeList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
