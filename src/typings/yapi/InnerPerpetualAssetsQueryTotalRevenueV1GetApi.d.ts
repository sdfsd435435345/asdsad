/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约总收益（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/5859) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /inner/v1/perpetual/assets/query/totalRevenue`
 * @更新时间 `2023-05-22 14:00:19`
 */
export interface YapiGetInnerV1PerpetualAssetsQueryTotalRevenueApiRequest {
  /**
   * 商户id
   */
  businessId: string
  uid: string
}

/**
 * 接口 [合约总收益（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/5859) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /inner/v1/perpetual/assets/query/totalRevenue`
 * @更新时间 `2023-05-22 14:00:19`
 */
export interface YapiGetInnerV1PerpetualAssetsQueryTotalRevenueApiResponse {
  /**
   * 合约总收益
   */
  totalRevenue: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约总收益（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/5859)
// **/
// export const getInnerV1PerpetualAssetsQueryTotalRevenueApiRequest: MarkcoinRequest<
//   YapiGetInnerV1PerpetualAssetsQueryTotalRevenueApiRequest,
//   YapiGetInnerV1PerpetualAssetsQueryTotalRevenueApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/perpetual/assets/query/totalRevenue",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
