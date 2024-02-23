/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-币币-提现二因素认证(废弃)↗](https://yapi.nbttfc365.com/project/77/interface/api/6299) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/asset/withdraw/verify_code`
 * @更新时间 `2023-06-08 16:52:49`
 */
export interface YapiPostV1AssetWithdrawVerifyCodeApiRequest {
  /**
   * 短信验证码
   */
  smsCode: string
  /**
   * 邮箱验证码
   */
  emailCode: number
  /**
   * 谷歌验证码，用户开启了谷歌验证必传
   */
  googleCode?: string
}

/**
 * 接口 [资产-币币-提现二因素认证(废弃)↗](https://yapi.nbttfc365.com/project/77/interface/api/6299) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/asset/withdraw/verify_code`
 * @更新时间 `2023-06-08 16:52:49`
 */
export interface YapiPostV1AssetWithdrawVerifyCodeApiResponse {
  /**
   * 200成功
   */
  code: string
  message: string
  data: YapiPostV1AssetWithdrawVerifyCodeData
}
export interface YapiPostV1AssetWithdrawVerifyCodeData {
  /**
   * 校验成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-币币-提现二因素认证(废弃)↗](https://yapi.nbttfc365.com/project/77/interface/api/6299)
// **/
// export const postV1AssetWithdrawVerifyCodeApiRequest: MarkcoinRequest<
//   YapiPostV1AssetWithdrawVerifyCodeApiRequest,
//   YapiPostV1AssetWithdrawVerifyCodeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/asset/withdraw/verify_code",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [资产-币币-提现二因素认证(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/416) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/asset/withdraw/verify_code`
 * @更新时间 `2022-09-26 14:05:22`
 */
export interface YapiPostV1AssetWithdrawVerifyCodeApiRequest {
  /**
   * 短信验证码
   */
  smsCode: string
  /**
   * 邮箱验证码
   */
  emailCode: number
  /**
   * 谷歌验证码，用户开启了谷歌验证必传
   */
  googleCode?: string
}

/**
 * 接口 [资产-币币-提现二因素认证(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/416) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/asset/withdraw/verify_code`
 * @更新时间 `2022-09-26 14:05:22`
 */
export interface YapiPostV1AssetWithdrawVerifyCodeApiResponse {
  /**
   * 200成功
   */
  code: string
  message: string
  data: YapiPostV1AssetWithdrawVerifyCodeData
}
export interface YapiPostV1AssetWithdrawVerifyCodeData {
  /**
   * 校验成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-币币-提现二因素认证(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/416)
// **/
// export const postV1AssetWithdrawVerifyCodeApiRequest: MarkcoinRequest<
//   YapiPostV1AssetWithdrawVerifyCodeApiRequest,
//   YapiPostV1AssetWithdrawVerifyCodeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/asset/withdraw/verify_code",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
