/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [提现地址校验↗](https://yapi.nbttfc365.com/project/44/interface/api/2783) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/asset/withdraw/address/verify`
 * @更新时间 `2023-03-20 16:36:35`
 */
export interface YapiPostV1AssetWithdrawAddressVerifyApiRequest {
  /**
   * 币种代码如：USDT，USDT(TRC20)
   */
  symbol: string
  /**
   * 提现地址
   */
  address: string
}

/**
 * 接口 [提现地址校验↗](https://yapi.nbttfc365.com/project/44/interface/api/2783) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/asset/withdraw/address/verify`
 * @更新时间 `2023-03-20 16:36:35`
 */
export interface YapiPostV1AssetWithdrawAddressVerifyApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1AssetWithdrawAddressVerifyData
}
export interface YapiPostV1AssetWithdrawAddressVerifyData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [提现地址校验↗](https://yapi.nbttfc365.com/project/44/interface/api/2783)
// **/
// export const postV1AssetWithdrawAddressVerifyApiRequest: MarkcoinRequest<
//   YapiPostV1AssetWithdrawAddressVerifyApiRequest,
//   YapiPostV1AssetWithdrawAddressVerifyApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/asset/withdraw/address/verify",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
