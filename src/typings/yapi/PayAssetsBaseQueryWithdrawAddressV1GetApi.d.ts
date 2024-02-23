/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-币币-获取常用提现地址列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8559) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/assets/base/queryWithdrawAddress`
 * @更新时间 `2023-06-12 14:42:59`
 */
export interface YapiGetV1PayAssetsBaseQueryWithdrawAddressApiRequest {}

/**
 * 接口 [资产-币币-获取常用提现地址列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8559) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/assets/base/queryWithdrawAddress`
 * @更新时间 `2023-06-12 14:42:59`
 */
export interface YapiGetV1PayAssetsBaseQueryWithdrawAddressApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PayAssetsBaseQueryWithdrawAddressData
}
export interface YapiGetV1PayAssetsBaseQueryWithdrawAddressData {
  addressList?: YapiGetV1PayAssetsBaseQueryWithdrawAddressListAddressListData[]
}
export interface YapiGetV1PayAssetsBaseQueryWithdrawAddressListAddressListData {
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
// * [资产-币币-获取常用提现地址列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8559)
// **/
// export const getV1PayAssetsBaseQueryWithdrawAddressApiRequest: MarkcoinRequest<
//   YapiGetV1PayAssetsBaseQueryWithdrawAddressApiRequest,
//   YapiGetV1PayAssetsBaseQueryWithdrawAddressApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/pay/assets/base/queryWithdrawAddress",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
