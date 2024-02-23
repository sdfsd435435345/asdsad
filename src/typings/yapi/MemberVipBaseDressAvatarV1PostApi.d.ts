/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [会员头像装扮↗](https://yapi.nbttfc365.com/project/44/interface/api/18834) 的 **请求类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `POST /v1/member/vip/base/dressAvatar`
 * @更新时间 `2023-10-09 16:04:56`
 */
export interface YapiPostV1MemberVipBaseDressAvatarApiRequest {
  /**
   * 装扮头像对应会员等级code
   */
  dressLevelCode: string
}

/**
 * 接口 [会员头像装扮↗](https://yapi.nbttfc365.com/project/44/interface/api/18834) 的 **返回类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `POST /v1/member/vip/base/dressAvatar`
 * @更新时间 `2023-10-09 16:04:56`
 */
export interface YapiPostV1MemberVipBaseDressAvatarApiResponse {
  code: number
  data: boolean
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [会员头像装扮↗](https://yapi.nbttfc365.com/project/44/interface/api/18834)
// **/
// export const postV1MemberVipBaseDressAvatarApiRequest: MarkcoinRequest<
//   YapiPostV1MemberVipBaseDressAvatarApiRequest,
//   YapiPostV1MemberVipBaseDressAvatarApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/member/vip/base/dressAvatar",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
