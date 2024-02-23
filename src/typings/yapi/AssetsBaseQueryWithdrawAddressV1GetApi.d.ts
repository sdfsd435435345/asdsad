/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-币币-获取常用提现地址列表↗](https://yapi.nbttfc365.com/project/44/interface/api/404) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/assets/base/queryWithdrawAddress`
 * @更新时间 `2022-10-20 10:34:04`
 */
export interface YapiGetV1AssetsBaseQueryWithdrawAddressApiRequest {}

/**
 * 接口 [资产-币币-获取常用提现地址列表↗](https://yapi.nbttfc365.com/project/44/interface/api/404) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/assets/base/queryWithdrawAddress`
 * @更新时间 `2022-10-20 10:34:04`
 */
export interface YapiGetV1AssetsBaseQueryWithdrawAddressApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1AssetsBaseQueryWithdrawAddressData
}
export interface YapiGetV1AssetsBaseQueryWithdrawAddressData {
  addressList?: YapiGetV1AssetsBaseQueryWithdrawAddressListAddressListData[]
}
export interface YapiGetV1AssetsBaseQueryWithdrawAddressListAddressListData {
  id: string
  /**
   * 地址
   */
  address: string | null
  /**
   * 备注
   */
  remark: null | string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-币币-获取常用提现地址列表↗](https://yapi.nbttfc365.com/project/44/interface/api/404)
// **/
// export const getV1AssetsBaseQueryWithdrawAddressApiRequest: MarkcoinRequest<
//   YapiGetV1AssetsBaseQueryWithdrawAddressApiRequest,
//   YapiGetV1AssetsBaseQueryWithdrawAddressApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/assets/base/queryWithdrawAddress",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
