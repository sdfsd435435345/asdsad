/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取用户信息↗](https://yapi.nbttfc365.com/project/44/interface/api/15169) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /inner/v1/user/query/nickName`
 * @更新时间 `2023-09-14 17:05:31`
 */
export interface YapiPostInnerV1UserQueryNickNameApiRequest {
  uid: number
  password: string
}

/**
 * 接口 [获取用户信息↗](https://yapi.nbttfc365.com/project/44/interface/api/15169) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /inner/v1/user/query/nickName`
 * @更新时间 `2023-09-14 17:05:31`
 */
export interface YapiPostInnerV1UserQueryNickNameApiResponse {
  code: string
  message: string
  data: YapiPostInnerV1UserQueryNickNameData
}
export interface YapiPostInnerV1UserQueryNickNameData {
  /**
   * 商户id
   */
  businessId: number
  /**
   * 昵称
   */
  nickName: string
  /**
   * 是否开启谷歌校验1 已开启 ， 2 未开启
   */
  isOpenGoogleVerify: number
  /**
   * 是否开启手机号校验 1 已开启 ， 2 未开启
   */
  isOpenPhoneVerify: number
  /**
   * 是否开启邮箱校验 1 已开启 ， 2 未开启
   */
  isOpenEmailVerify: number
  /**
   * 手机号
   */
  mobileNumber?: string
  /**
   * 邮箱
   */
  email?: string
  /**
   * 手机区号
   */
  mobileCountryCd?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取用户信息↗](https://yapi.nbttfc365.com/project/44/interface/api/15169)
// **/
// export const postInnerV1UserQueryNickNameApiRequest: MarkcoinRequest<
//   YapiPostInnerV1UserQueryNickNameApiRequest,
//   YapiPostInnerV1UserQueryNickNameApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/user/query/nickName",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
