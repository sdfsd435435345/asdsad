/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取头像装扮列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18819) 的 **请求类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /v1/member/vip/base/avatarList`
 * @更新时间 `2023-10-11 16:29:14`
 */
export interface YapiGetV1MemberVipBaseAvatarListApiRequest {}

/**
 * 接口 [获取头像装扮列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18819) 的 **返回类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /v1/member/vip/base/avatarList`
 * @更新时间 `2023-10-11 16:29:14`
 */
export interface YapiGetV1MemberVipBaseAvatarListApiResponse {
  code: number
  data: YapiGetV1MemberVipBaseAvatarListData[]
  message?: string
}
export interface YapiGetV1MemberVipBaseAvatarListData {
  /**
   * 会员等级code
   */
  levelCode: string
  level: number
  /**
   * 会员头像框
   */
  vipIcon: string
  /**
   * 是否允许使用
   */
  allowDress: boolean
  /**
   * 是否装扮中
   */
  dressing: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取头像装扮列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18819)
// **/
// export const getV1MemberVipBaseAvatarListApiRequest: MarkcoinRequest<
//   YapiGetV1MemberVipBaseAvatarListApiRequest,
//   YapiGetV1MemberVipBaseAvatarListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/vip/base/avatarList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
