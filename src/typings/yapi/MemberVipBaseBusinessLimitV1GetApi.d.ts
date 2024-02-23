/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取VIP商户限制↗](https://yapi.nbttfc365.com/project/44/interface/api/18974) 的 **请求类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /v1/member/vip/base/businessLimit`
 * @更新时间 `2023-10-18 18:46:49`
 */
export interface YapiGetV1MemberVipBaseBusinessLimitApiRequest {}

/**
 * 接口 [获取VIP商户限制↗](https://yapi.nbttfc365.com/project/44/interface/api/18974) 的 **返回类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /v1/member/vip/base/businessLimit`
 * @更新时间 `2023-10-18 18:46:49`
 */
export interface YapiGetV1MemberVipBaseBusinessLimitApiResponse {
  code: number
  data: YapiGetV1MemberVipBaseBusinessLimitData
  message?: string
}
export interface YapiGetV1MemberVipBaseBusinessLimitData {
  showVipMenu?: boolean
  userKycLimit?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取VIP商户限制↗](https://yapi.nbttfc365.com/project/44/interface/api/18974)
// **/
// export const getV1MemberVipBaseBusinessLimitApiRequest: MarkcoinRequest<
//   YapiGetV1MemberVipBaseBusinessLimitApiRequest,
//   YapiGetV1MemberVipBaseBusinessLimitApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/vip/base/businessLimit",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
