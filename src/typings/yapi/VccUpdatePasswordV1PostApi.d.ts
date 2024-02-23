/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [更新支付密码↗](https://yapi.nbttfc365.com/project/77/interface/api/10399) 的 **请求类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `POST /v1/vcc/updatePassword`
 * @更新时间 `2023-06-27 11:53:32`
 */
export interface YapiPostV1VccUpdatePasswordApiRequest {
  /**
   * 确认新密码
   */
  repeatPassword: string
  /**
   * 新密码
   */
  newPassword: string
}

/**
 * 接口 [更新支付密码↗](https://yapi.nbttfc365.com/project/77/interface/api/10399) 的 **返回类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `POST /v1/vcc/updatePassword`
 * @更新时间 `2023-06-27 11:53:32`
 */
export interface YapiPostV1VccUpdatePasswordApiResponse {
  /**
   * 200成功，其他均为失败
   */
  code: number
  msg: string
  data?: YapiPostV1VccUpdatePasswordData
}
export interface YapiPostV1VccUpdatePasswordData {
  /**
   * 是否更新成功，true成功，false失败
   */
  isTrue: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [更新支付密码↗](https://yapi.nbttfc365.com/project/77/interface/api/10399)
// **/
// export const postV1VccUpdatePasswordApiRequest: MarkcoinRequest<
//   YapiPostV1VccUpdatePasswordApiRequest,
//   YapiPostV1VccUpdatePasswordApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/vcc/updatePassword",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
