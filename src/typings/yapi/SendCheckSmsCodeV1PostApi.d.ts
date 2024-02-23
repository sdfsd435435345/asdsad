/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [短信验证码校验↗](https://yapi.nbttfc365.com/project/77/interface/api/6049) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/send/checkSmsCode`
 * @更新时间 `2023-06-08 16:52:14`
 */
export interface YapiPostV1SendCheckSmsCodeApiRequest {
  /**
   * (注：类型要与之前的发送一致）    类型1注册，2登录，3.提币 4.已登录修改密码 5.修改邮箱前进行通用验证 6.关闭邮箱前进行通用验证  9修改手机号前进行通用验证 10关闭手机号前进行通用验证 11.修改手机号码 12绑定手机号码 13重置安全项验证 21商户注册
   */
  type: number
  /**
   * 验证码
   */
  verifyCode: string
  /**
   * 手机号，未登陆必传
   */
  mobile?: string
  /**
   * 手机区号，未登陆必传
   */
  mobileCountryCode?: string
}

/**
 * 接口 [短信验证码校验↗](https://yapi.nbttfc365.com/project/77/interface/api/6049) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/send/checkSmsCode`
 * @更新时间 `2023-06-08 16:52:14`
 */
export interface YapiPostV1SendCheckSmsCodeApiResponse {
  /**
   * 200成功
   */
  code: number
  /**
   * 返回信息
   */
  message: string
  data: YapiPostV1SendCheckSmsCodeData
}
export interface YapiPostV1SendCheckSmsCodeData {
  /**
   * true成功，false，失败
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [短信验证码校验↗](https://yapi.nbttfc365.com/project/77/interface/api/6049)
// **/
// export const postV1SendCheckSmsCodeApiRequest: MarkcoinRequest<
//   YapiPostV1SendCheckSmsCodeApiRequest,
//   YapiPostV1SendCheckSmsCodeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/send/checkSmsCode",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [短信验证码校验↗](https://yapi.nbttfc365.com/project/44/interface/api/560) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/send/checkSmsCode`
 * @更新时间 `2023-09-06 17:43:32`
 */
export interface YapiPostV1SendCheckSmsCodeApiRequest {
  /**
   * (注：类型要与之前的发送一致）    类型1注册，2登录，3.提币 4.已登录修改密码 5.修改邮箱前进行通用验证 6.关闭邮箱前进行通用验证  9修改手机号前进行通用验证 10关闭手机号前进行通用验证 11.修改手机号码 12绑定手机号码 13重置安全项验证 21商户注册
   */
  type: number
  /**
   * 验证码
   */
  verifyCode: string
  /**
   * 手机号，未登陆必传
   */
  mobile?: string
  /**
   * 手机区号，未登陆必传
   */
  mobileCountryCode?: string
  businessId?: string
}

/**
 * 接口 [短信验证码校验↗](https://yapi.nbttfc365.com/project/44/interface/api/560) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/send/checkSmsCode`
 * @更新时间 `2023-09-06 17:43:32`
 */
export interface YapiPostV1SendCheckSmsCodeApiResponse {
  /**
   * 200成功
   */
  code: number
  /**
   * 返回信息
   */
  message: string
  data: YapiPostV1SendCheckSmsCodeData
}
export interface YapiPostV1SendCheckSmsCodeData {
  /**
   * true成功，false，失败
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [短信验证码校验↗](https://yapi.nbttfc365.com/project/44/interface/api/560)
// **/
// export const postV1SendCheckSmsCodeApiRequest: MarkcoinRequest<
//   YapiPostV1SendCheckSmsCodeApiRequest,
//   YapiPostV1SendCheckSmsCodeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/send/checkSmsCode",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
