/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [手机号\/邮箱登陆密码设置↗](https://yapi.nbttfc365.com/project/44/interface/api/18629) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/passwordSet`
 * @更新时间 `2023-09-22 15:14:46`
 */
export interface YapiPostV1MemberLoginPasswordSetApiRequest {
  /**
   * 账号类型，1，手机，2，邮箱
   */
  accountType: number
  /**
   * 账号
   */
  account: string
  /**
   * 密码
   */
  password: string
  /**
   * 手机号地区码，手机号登录上传
   */
  mobileCountryCode?: string
}

/**
 * 接口 [手机号\/邮箱登陆密码设置↗](https://yapi.nbttfc365.com/project/44/interface/api/18629) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/login/passwordSet`
 * @更新时间 `2023-09-22 15:14:46`
 */
export interface YapiPostV1MemberLoginPasswordSetApiResponse {
  success: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [手机号/邮箱登陆密码设置↗](https://yapi.nbttfc365.com/project/44/interface/api/18629)
// **/
// export const postV1MemberLoginPasswordSetApiRequest: MarkcoinRequest<
//   YapiPostV1MemberLoginPasswordSetApiRequest,
//   YapiPostV1MemberLoginPasswordSetApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/login/passwordSet",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
