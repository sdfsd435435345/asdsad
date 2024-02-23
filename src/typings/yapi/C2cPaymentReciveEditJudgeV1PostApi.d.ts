/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [收款方式修改前置判断↗](https://yapi.nbttfc365.com/project/44/interface/api/5336) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v1/c2c/payment/recive/edit/judge`
 * @更新时间 `2023-03-08 16:38:59`
 */
export interface YapiPostV1C2cPaymentReciveEditJudgeApiRequest {
  /**
   * 收款账号唯一ID
   */
  id: string
  /**
   * 修改类型，modify，修改，unbind,解绑
   */
  type: string
}

/**
 * 接口 [收款方式修改前置判断↗](https://yapi.nbttfc365.com/project/44/interface/api/5336) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_568)
 * @请求头 `POST /v1/c2c/payment/recive/edit/judge`
 * @更新时间 `2023-03-08 16:38:59`
 */
export interface YapiPostV1C2cPaymentReciveEditJudgeApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiPostV1C2CPaymentReciveEditJudgeData
}
export interface YapiPostV1C2CPaymentReciveEditJudgeData {
  /**
   * true,通过，false，不通过
   */
  isPass: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [收款方式修改前置判断↗](https://yapi.nbttfc365.com/project/44/interface/api/5336)
// **/
// export const postV1C2cPaymentReciveEditJudgeApiRequest: MarkcoinRequest<
//   YapiPostV1C2cPaymentReciveEditJudgeApiRequest,
//   YapiPostV1C2cPaymentReciveEditJudgeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/payment/recive/edit/judge",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [收款方式修改前置判断↗](https://yapi.nbttfc365.com/project/77/interface/api/6664) 的 **请求类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `POST /v1/c2c/payment/recive/edit/judge`
 * @更新时间 `2023-06-08 16:47:10`
 */
export interface YapiPostV1C2cPaymentReciveEditJudgeApiRequest {
  /**
   * 收款账号唯一ID
   */
  id: string
  /**
   * 修改类型，modify，修改，unbind,解绑
   */
  type: string
}

/**
 * 接口 [收款方式修改前置判断↗](https://yapi.nbttfc365.com/project/77/interface/api/6664) 的 **返回类型**
 *
 * @分类 [收付方式↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_628)
 * @请求头 `POST /v1/c2c/payment/recive/edit/judge`
 * @更新时间 `2023-06-08 16:47:10`
 */
export interface YapiPostV1C2cPaymentReciveEditJudgeApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  /**
   * 描述信息
   */
  message: string
  data: YapiPostV1C2CPaymentReciveEditJudgeData
}
export interface YapiPostV1C2CPaymentReciveEditJudgeData {
  /**
   * true,通过，false，不通过
   */
  isPass: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [收款方式修改前置判断↗](https://yapi.nbttfc365.com/project/77/interface/api/6664)
// **/
// export const postV1C2cPaymentReciveEditJudgeApiRequest: MarkcoinRequest<
//   YapiPostV1C2cPaymentReciveEditJudgeApiRequest,
//   YapiPostV1C2cPaymentReciveEditJudgeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/payment/recive/edit/judge",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
