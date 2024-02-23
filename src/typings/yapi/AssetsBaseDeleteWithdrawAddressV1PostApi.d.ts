/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [常用提现地址删除↗](https://yapi.nbttfc365.com/project/44/interface/api/2837) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/assets/base/deleteWithdrawAddress`
 * @更新时间 `2022-10-24 18:00:07`
 */
export interface YapiPostV1AssetsBaseDeleteWithdrawAddressApiRequest {
  id?: string
}

/**
 * 接口 [常用提现地址删除↗](https://yapi.nbttfc365.com/project/44/interface/api/2837) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/assets/base/deleteWithdrawAddress`
 * @更新时间 `2022-10-24 18:00:07`
 */
export interface YapiPostV1AssetsBaseDeleteWithdrawAddressApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1AssetsBaseDeleteWithdrawAddressData
}
export interface YapiPostV1AssetsBaseDeleteWithdrawAddressData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [常用提现地址删除↗](https://yapi.nbttfc365.com/project/44/interface/api/2837)
// **/
// export const postV1AssetsBaseDeleteWithdrawAddressApiRequest: MarkcoinRequest<
//   YapiPostV1AssetsBaseDeleteWithdrawAddressApiRequest,
//   YapiPostV1AssetsBaseDeleteWithdrawAddressApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/assets/base/deleteWithdrawAddress",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
