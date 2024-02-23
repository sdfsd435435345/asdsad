/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取权益列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18919) 的 **请求类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /v1/member/vip/base/benefitList`
 * @更新时间 `2023-10-12 18:13:08`
 */
export interface YapiGetV1MemberVipBaseBenefitListApiRequest {}

/**
 * 接口 [获取权益列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18919) 的 **返回类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /v1/member/vip/base/benefitList`
 * @更新时间 `2023-10-12 18:13:08`
 */
export interface YapiGetV1MemberVipBaseBenefitListApiResponse {
  code: number
  data: YapiGetV1MemberVipBaseBenefitListData[]
  message?: string
}
export interface YapiGetV1MemberVipBaseBenefitListData {
  /**
   * 会员等级code
   */
  levelCode: string
  level: string
  /**
   * 图片路径，存储到aws bulket
   */
  benefitIcon: string
  /**
   * 权益名称,字典值，多语言
   */
  benefitCode: string
  /**
   * 权益描述
   */
  description: boolean
  /**
   * 权益介绍
   */
  introduction: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取权益列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18919)
// **/
// export const getV1MemberVipBaseBenefitListApiRequest: MarkcoinRequest<
//   YapiGetV1MemberVipBaseBenefitListApiRequest,
//   YapiGetV1MemberVipBaseBenefitListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/vip/base/benefitList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
