/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [常用提现地址删除↗](https://yapi.nbttfc365.com/project/77/interface/api/8464) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/pay/assets/base/deleteWithdrawAddress`
 * @更新时间 `2023-06-12 14:19:10`
 */
export interface YapiPostV1PayAssetsBaseDeleteWithdrawAddressApiRequest {
  id?: string
}

/**
 * 接口 [常用提现地址删除↗](https://yapi.nbttfc365.com/project/77/interface/api/8464) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/pay/assets/base/deleteWithdrawAddress`
 * @更新时间 `2023-06-12 14:19:10`
 */
export interface YapiPostV1PayAssetsBaseDeleteWithdrawAddressApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1PayAssetsBaseDeleteWithdrawAddressData
}
export interface YapiPostV1PayAssetsBaseDeleteWithdrawAddressData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [常用提现地址删除↗](https://yapi.nbttfc365.com/project/77/interface/api/8464)
// **/
// export const postV1PayAssetsBaseDeleteWithdrawAddressApiRequest: MarkcoinRequest<
//   YapiPostV1PayAssetsBaseDeleteWithdrawAddressApiRequest,
//   YapiPostV1PayAssetsBaseDeleteWithdrawAddressApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/pay/assets/base/deleteWithdrawAddress",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
