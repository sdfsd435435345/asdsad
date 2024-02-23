/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取用户币种充值地址↗](https://yapi.nbttfc365.com/project/44/interface/api/2714) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/assets/base/queryDepositAddress`
 * @更新时间 `2023-06-16 11:31:34`
 */
export interface YapiPostV1AssetsBaseQueryDepositAddressApiRequest {
  /**
   * 子币种id
   */
  coinId?: string
}

/**
 * 接口 [获取用户币种充值地址↗](https://yapi.nbttfc365.com/project/44/interface/api/2714) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/assets/base/queryDepositAddress`
 * @更新时间 `2023-06-16 11:31:34`
 */
export interface YapiPostV1AssetsBaseQueryDepositAddressApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1AssetsBaseQueryDepositAddressData
}
export interface YapiPostV1AssetsBaseQueryDepositAddressData {
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
  /**
   * 最小充值金额
   */
  depositMinLimit: string
  /**
   * 充值确认数
   */
  depositConfirmNum: string
  /**
   * 提现解锁确认数
   */
  withdrawConfirmNum: string
  /**
   * 合约信息
   */
  contractInfo: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取用户币种充值地址↗](https://yapi.nbttfc365.com/project/44/interface/api/2714)
// **/
// export const postV1AssetsBaseQueryDepositAddressApiRequest: MarkcoinRequest<
//   YapiPostV1AssetsBaseQueryDepositAddressApiRequest,
//   YapiPostV1AssetsBaseQueryDepositAddressApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/assets/base/queryDepositAddress",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
