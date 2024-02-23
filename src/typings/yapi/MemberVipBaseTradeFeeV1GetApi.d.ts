/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约\/现货 币对费率详情↗](https://yapi.nbttfc365.com/project/44/interface/api/18809) 的 **请求类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /v1/member/vip/base/tradeFee`
 * @更新时间 `2023-10-17 16:11:02`
 */
export interface YapiGetV1MemberVipBaseTradeFeeApiRequest {
  symbolName: string
  /**
   * spot:现货、perpetual:合约
   */
  feeType: string
}

/**
 * 接口 [合约\/现货 币对费率详情↗](https://yapi.nbttfc365.com/project/44/interface/api/18809) 的 **返回类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /v1/member/vip/base/tradeFee`
 * @更新时间 `2023-10-17 16:11:02`
 */
export interface YapiGetV1MemberVipBaseTradeFeeApiResponse {
  code: number
  data: YapiGetV1MemberVipBaseTradeFeeData
  message?: string
}
export interface YapiGetV1MemberVipBaseTradeFeeData {
  markerFeeRate: number
  takerFeeRate: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约/现货 币对费率详情↗](https://yapi.nbttfc365.com/project/44/interface/api/18809)
// **/
// export const getV1MemberVipBaseTradeFeeApiRequest: MarkcoinRequest<
//   YapiGetV1MemberVipBaseTradeFeeApiRequest,
//   YapiGetV1MemberVipBaseTradeFeeApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/vip/base/tradeFee",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
