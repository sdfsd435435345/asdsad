/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [个人信息更新(头像、昵称、简介)↗](https://yapi.nbttfc365.com/project/44/interface/api/18879) 的 **请求类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `POST /v1/member/base/extendInfo`
 * @更新时间 `2023-10-12 18:04:52`
 */
export interface YapiPostV1MemberBaseExtendInfoApiRequest {
  /**
   * 头像地址，至少修改一项.注意如果没有修改对应值未null，修改未空则对应值为空字符串""
   */
  avatarPath?: string
  /**
   * 昵称地址，至少修改一项.注意如果没有修改对应值未null，修改未空则对应值为空字符串""
   */
  nickName?: string
  /**
   * 个人简介，至少修改一项.注意如果没有修改对应值未null，修改未空则对应值为空字符串""
   */
  introduction?: string
}

/**
 * 接口 [个人信息更新(头像、昵称、简介)↗](https://yapi.nbttfc365.com/project/44/interface/api/18879) 的 **返回类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `POST /v1/member/base/extendInfo`
 * @更新时间 `2023-10-12 18:04:52`
 */
export interface YapiPostV1MemberBaseExtendInfoApiResponse {
  code: number
  data: boolean
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [个人信息更新(头像、昵称、简介)↗](https://yapi.nbttfc365.com/project/44/interface/api/18879)
// **/
// export const postV1MemberBaseExtendInfoApiRequest: MarkcoinRequest<
//   YapiPostV1MemberBaseExtendInfoApiRequest,
//   YapiPostV1MemberBaseExtendInfoApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/base/extendInfo",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
