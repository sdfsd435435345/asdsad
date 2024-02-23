/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [总资产接口(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/18969) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /inner/v1/asset/total`
 * @更新时间 `2023-10-17 18:19:01`
 */
export interface YapiGetInnerV1AssetTotalApiRequest {
  /**
   * 商户id
   */
  businessId: string
  uid: string
}

/**
 * 接口 [总资产接口(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/18969) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /inner/v1/asset/total`
 * @更新时间 `2023-10-17 18:19:01`
 */
export interface YapiGetInnerV1AssetTotalApiResponse {
  totalAsset: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [总资产接口(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/18969)
// **/
// export const getInnerV1AssetTotalApiRequest: MarkcoinRequest<
//   YapiGetInnerV1AssetTotalApiRequest,
//   YapiGetInnerV1AssetTotalApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/asset/total",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
