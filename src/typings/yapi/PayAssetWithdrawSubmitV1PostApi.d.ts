/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-币币-发起提现申请↗](https://yapi.nbttfc365.com/project/77/interface/api/6284) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/pay/asset/withdraw/submit`
 * @更新时间 `2023-06-12 14:10:26`
 */
export interface YapiPostV1PayAssetWithdrawSubmitApiRequest {
  /**
   * 币种ID，连上转账传主网id，pay传主币id
   */
  coinId: string
  /**
   * 提币地址，连上转账必传
   */
  address?: string
  /**
   * 币种符号，连上转账传主网符号，pay传主币符号
   */
  symbol: string
  /**
   * 提币数量
   */
  amount: number
  /**
   * 充值地址标签，如果需要memo，此处为必填
   */
  memo: string
  /**
   * 1.链上转账，2，内部转账
   */
  type: number
  /**
   * 用户唯一的uid,内部转账必传
   */
  uid?: string
}

/**
 * 接口 [资产-币币-发起提现申请↗](https://yapi.nbttfc365.com/project/77/interface/api/6284) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/pay/asset/withdraw/submit`
 * @更新时间 `2023-06-12 14:10:26`
 */
export interface YapiPostV1PayAssetWithdrawSubmitApiResponse {
  code: number
  message: string
  data: YapiPostV1PayAssetWithdrawSubmitData
}
export interface YapiPostV1PayAssetWithdrawSubmitData {
  /**
   * 是否成功
   */
  isSuccess: boolean
  /**
   * 申请确认时间
   */
  submitTime: number
  /**
   * 预计完成时间
   */
  estimatedFinishTime: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-币币-发起提现申请↗](https://yapi.nbttfc365.com/project/77/interface/api/6284)
// **/
// export const postV1PayAssetWithdrawSubmitApiRequest: MarkcoinRequest<
//   YapiPostV1PayAssetWithdrawSubmitApiRequest,
//   YapiPostV1PayAssetWithdrawSubmitApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/pay/asset/withdraw/submit",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
