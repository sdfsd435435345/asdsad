/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [当前风险准备金↗](https://yapi.nbttfc365.com/project/44/interface/api/5834) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/insuranceFund/current`
 * @更新时间 `2023-05-23 15:07:01`
 */
export interface YapiGetV1PerpetualInsuranceFundCurrentApiRequest {}

/**
 * 接口 [当前风险准备金↗](https://yapi.nbttfc365.com/project/44/interface/api/5834) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/insuranceFund/current`
 * @更新时间 `2023-05-23 15:07:01`
 */
export interface YapiGetV1PerpetualInsuranceFundCurrentApiResponse {
  code: number
  message: string
  data: YapiGetV1PerpetualInsuranceFundCurrentData
}
export interface YapiGetV1PerpetualInsuranceFundCurrentData {
  totalAsset: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [当前风险准备金↗](https://yapi.nbttfc365.com/project/44/interface/api/5834)
// **/
// export const getV1PerpetualInsuranceFundCurrentApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualInsuranceFundCurrentApiRequest,
//   YapiGetV1PerpetualInsuranceFundCurrentApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/insuranceFund/current",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
