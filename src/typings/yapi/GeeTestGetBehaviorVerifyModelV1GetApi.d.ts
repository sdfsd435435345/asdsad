/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取极验信息码↗](https://yapi.nbttfc365.com/project/77/interface/api/8369) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `GET /v1/gee_test/get_behavior_verify_model`
 * @更新时间 `2023-06-08 16:52:34`
 */
export interface YapiGetV1GeeTestGetBehaviorVerifyModelApiRequest {
  /**
   * 账号
   */
  account: string
  /**
   * 客户端类型（注：1.web 2.h5 3.android  4.ios)
   */
  clientType: string
  /**
   * 操作的类型（注：1.注册 2.登录 3.修改密码 4.重置安全验证)
   */
  operateType: string
}

/**
 * 接口 [获取极验信息码↗](https://yapi.nbttfc365.com/project/77/interface/api/8369) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `GET /v1/gee_test/get_behavior_verify_model`
 * @更新时间 `2023-06-08 16:52:34`
 */
export interface YapiGetV1GeeTestGetBehaviorVerifyModelApiResponse {
  geeTest?: YapiGetV1GeeTestGetBehaviorVerifyModelGeeTest
}
export interface YapiGetV1GeeTestGetBehaviorVerifyModelGeeTest {
  challenge?: string
  gt?: string
  new_captcha?: boolean
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取极验信息码↗](https://yapi.nbttfc365.com/project/77/interface/api/8369)
// **/
// export const getV1GeeTestGetBehaviorVerifyModelApiRequest: MarkcoinRequest<
//   YapiGetV1GeeTestGetBehaviorVerifyModelApiRequest,
//   YapiGetV1GeeTestGetBehaviorVerifyModelApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/gee_test/get_behavior_verify_model",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取极验信息码↗](https://yapi.nbttfc365.com/project/44/interface/api/2585) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `GET /v1/gee_test/get_behavior_verify_model`
 * @更新时间 `2022-10-20 18:09:00`
 */
export interface YapiGetV1GeeTestGetBehaviorVerifyModelApiRequest {
  /**
   * 账号
   */
  account: string
  /**
   * 客户端类型（注：1.web 2.h5 3.android  4.ios)
   */
  clientType: string
  /**
   * 操作的类型（注：1.注册 2.登录 3.修改密码 4.重置安全验证)
   */
  operateType: string
}

/**
 * 接口 [获取极验信息码↗](https://yapi.nbttfc365.com/project/44/interface/api/2585) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `GET /v1/gee_test/get_behavior_verify_model`
 * @更新时间 `2022-10-20 18:09:00`
 */
export interface YapiGetV1GeeTestGetBehaviorVerifyModelApiResponse {
  geeTest?: YapiGetV1GeeTestGetBehaviorVerifyModelGeeTest
}
export interface YapiGetV1GeeTestGetBehaviorVerifyModelGeeTest {
  challenge?: string
  gt?: string
  new_captcha?: boolean
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取极验信息码↗](https://yapi.nbttfc365.com/project/44/interface/api/2585)
// **/
// export const getV1GeeTestGetBehaviorVerifyModelApiRequest: MarkcoinRequest<
//   YapiGetV1GeeTestGetBehaviorVerifyModelApiRequest,
//   YapiGetV1GeeTestGetBehaviorVerifyModelApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/gee_test/get_behavior_verify_model",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
