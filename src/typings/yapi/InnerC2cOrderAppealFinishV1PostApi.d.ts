/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [申诉完成↗](https://yapi.nbttfc365.com/project/73/interface/api/5469) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `POST /inner/v1/c2c/order/appealFinish`
 * @更新时间 `2023-08-24 14:51:38`
 */
export interface YapiPostInnerV1C2cOrderAppealFinishApiRequest {
  /**
   * 订单ID
   */
  orderId: number
  /**
   * 1 =买方获胜,2=卖方获胜
   */
  winner: number
  /**
   * BigDecimal类型;赔付金额;如果不需要赔付传0
   */
  compensationAmount: number
  /**
   * 额外赔付的金额
   */
  additionalCompensationAmount?: number
}

/**
 * 接口 [申诉完成↗](https://yapi.nbttfc365.com/project/73/interface/api/5469) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `POST /inner/v1/c2c/order/appealFinish`
 * @更新时间 `2023-08-24 14:51:38`
 */
export interface YapiPostInnerV1C2cOrderAppealFinishApiResponse {
  /**
   * true=成功, false=失败
   */
  isSuccess?: boolean
  /**
   * 失败原因, 成功返回ok
   */
  reason?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [申诉完成↗](https://yapi.nbttfc365.com/project/73/interface/api/5469)
// **/
// export const postInnerV1C2cOrderAppealFinishApiRequest: MarkcoinRequest<
//   YapiPostInnerV1C2cOrderAppealFinishApiRequest,
//   YapiPostInnerV1C2cOrderAppealFinishApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/c2c/order/appealFinish",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [申诉完成↗](https://yapi.nbttfc365.com/project/77/interface/api/6544) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `POST /inner/v1/c2c/order/appealFinish`
 * @更新时间 `2023-06-08 16:47:02`
 */
export interface YapiPostInnerV1C2cOrderAppealFinishApiRequest {
  /**
   * 订单ID
   */
  orderId: number
  /**
   * 1 =买方获胜,2=卖方获胜
   */
  winner: number
  /**
   * BigDecimal类型;赔付金额;如果不需要赔付传0
   */
  compensationAmount: number
}

/**
 * 接口 [申诉完成↗](https://yapi.nbttfc365.com/project/77/interface/api/6544) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `POST /inner/v1/c2c/order/appealFinish`
 * @更新时间 `2023-06-08 16:47:02`
 */
export interface YapiPostInnerV1C2cOrderAppealFinishApiResponse {
  /**
   * true=成功, false=失败
   */
  isSuccess?: boolean
  /**
   * 失败原因, 成功返回ok
   */
  reason?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [申诉完成↗](https://yapi.nbttfc365.com/project/77/interface/api/6544)
// **/
// export const postInnerV1C2cOrderAppealFinishApiRequest: MarkcoinRequest<
//   YapiPostInnerV1C2cOrderAppealFinishApiRequest,
//   YapiPostInnerV1C2cOrderAppealFinishApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/c2c/order/appealFinish",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
