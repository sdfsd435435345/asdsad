/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [用户注销申请↗](https://yapi.nbttfc365.com/project/44/interface/api/12094) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/user/logoff`
 * @更新时间 `2023-09-24 13:26:52`
 */
export interface YapiPostV1UserLogoffApiRequest {
  /**
   * 给邮箱就不要给手机号
   */
  email?: string
  /**
   * 给手机号就不要给邮箱
   */
  mobileCountry?: string
  /**
   * 给手机号就不要给邮箱
   */
  mobileNumber?: string
  /**
   * 原因
   */
  reason: string
  /**
   * 验证码
   */
  verifyCode: string
}

/**
 * 接口 [用户注销申请↗](https://yapi.nbttfc365.com/project/44/interface/api/12094) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/user/logoff`
 * @更新时间 `2023-09-24 13:26:52`
 */
export interface YapiPostV1UserLogoffApiResponse {
  data?: YapiPostV1UserLogoffData
  messsage?: string
  code?: number
}
export interface YapiPostV1UserLogoffData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [用户注销申请↗](https://yapi.nbttfc365.com/project/44/interface/api/12094)
// **/
// export const postV1UserLogoffApiRequest: MarkcoinRequest<
//   YapiPostV1UserLogoffApiRequest,
//   YapiPostV1UserLogoffApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/user/logoff",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
