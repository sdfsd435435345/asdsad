/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [三方登录解除绑定↗](https://yapi.nbttfc365.com/project/44/interface/api/18604) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/thirdBind/bindRemove`
 * @更新时间 `2023-09-24 14:08:59`
 */
export interface YapiPostV1MemberThirdBindBindRemoveApiRequest {
  /**
   * 可手机号邮箱
   */
  token: string
  /**
   * 绑定类型：google、appid
   */
  type: string
}

/**
 * 接口 [三方登录解除绑定↗](https://yapi.nbttfc365.com/project/44/interface/api/18604) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/member/thirdBind/bindRemove`
 * @更新时间 `2023-09-24 14:08:59`
 */
export interface YapiPostV1MemberThirdBindBindRemoveApiResponse {
  /**
   * 200成功，其他均为失败
   */
  code: number
  message?: string
  data?: YapiPostV1MemberThirdBindBindRemoveData
}
export interface YapiPostV1MemberThirdBindBindRemoveData {
  /**
   * true-成功，false-失败
   */
  success?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [三方登录解除绑定↗](https://yapi.nbttfc365.com/project/44/interface/api/18604)
// **/
// export const postV1MemberThirdBindBindRemoveApiRequest: MarkcoinRequest<
//   YapiPostV1MemberThirdBindBindRemoveApiRequest,
//   YapiPostV1MemberThirdBindBindRemoveApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/thirdBind/bindRemove",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
