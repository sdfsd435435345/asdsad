/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [登录&注册\/登录\/重置安全验证（人工）↗](https://yapi.nbttfc365.com/project/77/interface/api/6239) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `POST /member/safe/reset`
 * @更新时间 `2023-06-08 16:52:34`
 */
export interface YapiPostMemberSafeResetApiRequest {
  /**
   * 安全认证类型 1 手机 2 邮箱 3 google认证码 4 密码
   */
  type_ind: string
  /**
   * google密钥
   */
  google_secret_key?: string
  /**
   * google验证码
   */
  google_secret_key_code?: string
  /**
   * 新认证的邮箱
   */
  email?: string
  /**
   * 新认证的邮箱验证码
   */
  email_code?: string
  /**
   * 新认证的手机号区号
   */
  mobile_area_code?: string
  /**
   * 新认证的手机号
   */
  mobile_number?: string
  /**
   * 新认证的手机号验证码
   */
  mobile_number_code?: string
  /**
   * 联系电话
   */
  contacts_number?: string
  /**
   * 联系电话验证码
   */
  contacts_number_code?: string
  /**
   * 认证照片OSS地址
   */
  reset_photos_path: string
  /**
   * 联系电话区号
   */
  contacts_number_area?: string
  /**
   * 会员id
   */
  uid: string
}

/**
 * 接口 [登录&注册\/登录\/重置安全验证（人工）↗](https://yapi.nbttfc365.com/project/77/interface/api/6239) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_608)
 * @请求头 `POST /member/safe/reset`
 * @更新时间 `2023-06-08 16:52:34`
 */
export interface YapiPostMemberSafeResetApiResponse {
  /**
   * 返回状态
   */
  code: number
  data: YapiPostMemberSafeResetData
  /**
   * 返回的消息内容
   */
  message: string
}
/**
 * 数据集合
 */
export interface YapiPostMemberSafeResetData {
  /**
   * 表单提交结果：1成功，0失败
   */
  result: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [登录&注册/登录/重置安全验证（人工）↗](https://yapi.nbttfc365.com/project/77/interface/api/6239)
// **/
// export const postMemberSafeResetApiRequest: MarkcoinRequest<
//   YapiPostMemberSafeResetApiRequest,
//   YapiPostMemberSafeResetApiResponse['data']
// > = data => {
//   return request({
//     path: "/member/safe/reset",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [登录&注册\/登录\/重置安全验证（人工）↗](https://yapi.nbttfc365.com/project/44/interface/api/133) 的 **请求类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `POST /member/safe/reset`
 * @更新时间 `2022-10-16 16:15:08`
 */
export interface YapiPostMemberSafeResetApiRequest {
  /**
   * 安全认证类型 1 手机 2 邮箱 3 google认证码 4 密码
   */
  type_ind: string
  /**
   * google密钥
   */
  google_secret_key?: string
  /**
   * google验证码
   */
  google_secret_key_code?: string
  /**
   * 新认证的邮箱
   */
  email?: string
  /**
   * 新认证的邮箱验证码
   */
  email_code?: string
  /**
   * 新认证的手机号区号
   */
  mobile_area_code?: string
  /**
   * 新认证的手机号
   */
  mobile_number?: string
  /**
   * 新认证的手机号验证码
   */
  mobile_number_code?: string
  /**
   * 联系电话
   */
  contacts_number?: string
  /**
   * 联系电话验证码
   */
  contacts_number_code?: string
  /**
   * 认证照片OSS地址
   */
  reset_photos_path: string
  /**
   * 联系电话区号
   */
  contacts_number_area?: string
  /**
   * 会员id
   */
  uid: string
}

/**
 * 接口 [登录&注册\/登录\/重置安全验证（人工）↗](https://yapi.nbttfc365.com/project/44/interface/api/133) 的 **返回类型**
 *
 * @分类 [安全验证↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_94)
 * @请求头 `POST /member/safe/reset`
 * @更新时间 `2022-10-16 16:15:08`
 */
export interface YapiPostMemberSafeResetApiResponse {
  /**
   * 返回状态
   */
  code: number
  data: YapiPostMemberSafeResetData
  /**
   * 返回的消息内容
   */
  message: string
}
/**
 * 数据集合
 */
export interface YapiPostMemberSafeResetData {
  /**
   * 表单提交结果：1成功，0失败
   */
  result: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [登录&注册/登录/重置安全验证（人工）↗](https://yapi.nbttfc365.com/project/44/interface/api/133)
// **/
// export const postMemberSafeResetApiRequest: MarkcoinRequest<
//   YapiPostMemberSafeResetApiRequest,
//   YapiPostMemberSafeResetApiResponse['data']
// > = data => {
//   return request({
//     path: "/member/safe/reset",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
