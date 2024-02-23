/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取提币信息↗](https://yapi.nbttfc365.com/project/77/interface/api/8509) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/pay/asset/withdraw/getCoinInfo`
 * @更新时间 `2023-06-12 14:37:48`
 */
export interface YapiPostV1PayAssetWithdrawGetCoinInfoApiRequest {
  /**
   * 币种id，type为1时，传子币id，type为2时，传主币id
   */
  coinId: string
  /**
   * 1.链上转账，2，内部转账
   */
  type: number
}

/**
 * 接口 [获取提币信息↗](https://yapi.nbttfc365.com/project/77/interface/api/8509) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/pay/asset/withdraw/getCoinInfo`
 * @更新时间 `2023-06-12 14:37:48`
 */
export interface YapiPostV1PayAssetWithdrawGetCoinInfoApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1PayAssetWithdrawGetCoinInfoData
}
export interface YapiPostV1PayAssetWithdrawGetCoinInfoData {
  /**
   * 最小提币数量（根据提币币种）
   */
  minAmount?: string
  /**
   * 主网手续费（根据提币币种）
   */
  fee?: string
  /**
   * 可用提币数量（根据提币币种）
   */
  availableAmount?: string
  /**
   * 总金额（根据提币币种）
   */
  amount?: string
  /**
   * 剩余24小时内可提现USD额度，-1表示无限制
   */
  remainingWithdrawalAmount?: string
  /**
   * 提现精度
   */
  withdrawPrecision?: number
  /**
   * 手续费币种
   */
  feeCoinName?: string
  /**
   * 用户手续费币种可用数量
   */
  usrFeeAmount?: string
  /**
   * 手续费币种符号
   */
  feeSymbol?: string
  /**
   * 单次最大提币数量（根据提币币种）
   */
  maxWithdrawAmount?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取提币信息↗](https://yapi.nbttfc365.com/project/77/interface/api/8509)
// **/
// export const postV1PayAssetWithdrawGetCoinInfoApiRequest: MarkcoinRequest<
//   YapiPostV1PayAssetWithdrawGetCoinInfoApiRequest,
//   YapiPostV1PayAssetWithdrawGetCoinInfoApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/pay/asset/withdraw/getCoinInfo",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
