/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取用户币种充值地址↗](https://yapi.nbttfc365.com/project/77/interface/api/8514) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/pay/assets/base/queryDepositAddress`
 * @更新时间 `2023-06-12 14:37:58`
 */
export interface YapiPostV1PayAssetsBaseQueryDepositAddressApiRequest {
  /**
   * 子币种id
   */
  coinId?: string
}

/**
 * 接口 [获取用户币种充值地址↗](https://yapi.nbttfc365.com/project/77/interface/api/8514) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/pay/assets/base/queryDepositAddress`
 * @更新时间 `2023-06-12 14:37:58`
 */
export interface YapiPostV1PayAssetsBaseQueryDepositAddressApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1PayAssetsBaseQueryDepositAddressData
}
export interface YapiPostV1PayAssetsBaseQueryDepositAddressData {
  /**
   * 地址
   */
  address: string
  /**
   * 充值说明，没有值时返回空字符串
   */
  hint: string
  /**
   * 地址标签，没有值时返回空字符串
   */
  memo: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取用户币种充值地址↗](https://yapi.nbttfc365.com/project/77/interface/api/8514)
// **/
// export const postV1PayAssetsBaseQueryDepositAddressApiRequest: MarkcoinRequest<
//   YapiPostV1PayAssetsBaseQueryDepositAddressApiRequest,
//   YapiPostV1PayAssetsBaseQueryDepositAddressApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/pay/assets/base/queryDepositAddress",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
