/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [fastPay划转↗](https://yapi.nbttfc365.com/project/44/interface/api/18449) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/asset/transfer/fastPay`
 * @更新时间 `2023-09-13 09:57:03`
 */
export interface YapiPostV1AssetTransferFastPayApiRequest {
  /**
   * 币种id
   */
  coinId: string
  /**
   * 数量
   */
  amount: number
  /**
   * 去向类型：monkey：交易所，fastPay：fastPay
   */
  type: string
  /**
   * 需要划转到的bid
   */
  linkedBusinessId: number
}

/**
 * 接口 [fastPay划转↗](https://yapi.nbttfc365.com/project/44/interface/api/18449) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/asset/transfer/fastPay`
 * @更新时间 `2023-09-13 09:57:03`
 */
export interface YapiPostV1AssetTransferFastPayApiResponse {
  code: number
  message: string
  data: YapiPostV1AssetTransferFastPayData
}
export interface YapiPostV1AssetTransferFastPayData {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [fastPay划转↗](https://yapi.nbttfc365.com/project/44/interface/api/18449)
// **/
// export const postV1AssetTransferFastPayApiRequest: MarkcoinRequest<
//   YapiPostV1AssetTransferFastPayApiRequest,
//   YapiPostV1AssetTransferFastPayApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/asset/transfer/fastPay",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
