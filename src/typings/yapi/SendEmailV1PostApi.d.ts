/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [发送邮件验证码↗](https://yapi.nbttfc365.com/project/77/interface/api/6029) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/send/email`
 * @更新时间 `2023-06-08 16:52:14`
 */
export interface YapiPostV1SendEmailApiRequest {
  /**
   * 类型1注册，2登录，3.提币 4.已登录修改密码 5.修改邮箱前进行通用验证 6.关闭邮箱前进行通用验证 7.修改手机号码 8绑定手机号码 9修改手机号前进行通用验证 10关闭手机号前进行通用验证 13重置安全项验证 21商户注册
   */
  type: number
  /**
   * 邮箱账号，未登陆必传
   */
  email?: string
}

/**
 * 接口 [发送邮件验证码↗](https://yapi.nbttfc365.com/project/77/interface/api/6029) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/send/email`
 * @更新时间 `2023-06-08 16:52:14`
 */
export interface YapiPostV1SendEmailApiResponse {
  /**
   * 200成功
   */
  code: number
  message: string
  data: YapiPostV1SendEmailData
}
export interface YapiPostV1SendEmailData {
  /**
   * true，成功，false,失败
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [发送邮件验证码↗](https://yapi.nbttfc365.com/project/77/interface/api/6029)
// **/
// export const postV1SendEmailApiRequest: MarkcoinRequest<
//   YapiPostV1SendEmailApiRequest,
//   YapiPostV1SendEmailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/send/email",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [发送邮件验证码↗](https://yapi.nbttfc365.com/project/44/interface/api/557) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/send/email`
 * @更新时间 `2023-09-06 17:08:19`
 */
export interface YapiPostV1SendEmailApiRequest {
  /**
   * 类型1注册，2登录，3.提币 4.已登录修改密码 5.修改邮箱前进行通用验证 6.关闭邮箱前进行通用验证 7.修改手机号码 8绑定手机号码 9修改手机号前进行通用验证 10关闭手机号前进行通用验证 13重置安全项验证 21商户注册 24用户注销申请
   */
  type: number
  /**
   * 邮箱账号，未登陆必传
   */
  email?: string
  uid: string
  businessId: string
}

/**
 * 接口 [发送邮件验证码↗](https://yapi.nbttfc365.com/project/44/interface/api/557) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/send/email`
 * @更新时间 `2023-09-06 17:08:19`
 */
export interface YapiPostV1SendEmailApiResponse {
  /**
   * 200成功
   */
  code: number
  message: string
  data: YapiPostV1SendEmailData
}
export interface YapiPostV1SendEmailData {
  /**
   * true，成功，false,失败
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [发送邮件验证码↗](https://yapi.nbttfc365.com/project/44/interface/api/557)
// **/
// export const postV1SendEmailApiRequest: MarkcoinRequest<
//   YapiPostV1SendEmailApiRequest,
//   YapiPostV1SendEmailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/send/email",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
