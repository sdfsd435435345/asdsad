/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [关联账户注册\/登陆↗](https://yapi.nbttfc365.com/project/44/interface/api/18444) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/linked/user/login`
 * @更新时间 `2023-09-14 14:28:55`
 */
export interface YapiPostV1LinkedUserLoginApiRequest {
  /**
   * 账户类型
   */
  accountType?: string
}

/**
 * 接口 [关联账户注册\/登陆↗](https://yapi.nbttfc365.com/project/44/interface/api/18444) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/linked/user/login`
 * @更新时间 `2023-09-14 14:28:55`
 */
export interface YapiPostV1LinkedUserLoginApiResponse {
  code: number
  message: string
  data: YapiPostV1LinkedUserLoginData
}
export interface YapiPostV1LinkedUserLoginData {
  h5Url: string
  uid: number
  webUrl: string
  token: string
  h5AccessKey: string
  webAccessKey: string
  androidAccessKey: string
  iosAccessKey: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [关联账户注册/登陆↗](https://yapi.nbttfc365.com/project/44/interface/api/18444)
// **/
// export const postV1LinkedUserLoginApiRequest: MarkcoinRequest<
//   YapiPostV1LinkedUserLoginApiRequest,
//   YapiPostV1LinkedUserLoginApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/linked/user/login",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
