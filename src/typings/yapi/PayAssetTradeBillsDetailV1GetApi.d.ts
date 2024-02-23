/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-财务日志详情↗](https://yapi.nbttfc365.com/project/77/interface/api/6324) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/asset/trade/bills/detail`
 * @更新时间 `2023-06-12 14:16:40`
 */
export interface YapiGetV1PayAssetTradeBillsDetailApiRequest {
  /**
   * 财务记录id
   */
  id: string
}

/**
 * 接口 [资产-财务日志详情↗](https://yapi.nbttfc365.com/project/77/interface/api/6324) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `GET /v1/pay/asset/trade/bills/detail`
 * @更新时间 `2023-06-12 14:16:40`
 */
export interface YapiGetV1PayAssetTradeBillsDetailApiResponse {
  data?: YapiGetV1PayAssetTradeBillsDetailData
  message?: string
  code?: number
}
export interface YapiGetV1PayAssetTradeBillsDetailData {
  /**
   * 币种
   */
  businessCoin?: string
  /**
   * 类型， 1. 充币， 2. 提币，3.pay ,4.冲正
   */
  typeInd?: number
  /**
   * 区块总数
   */
  blockTotal?: number
  /**
   * 区块确认数
   */
  confirmation?: number
  /**
   * 1 区块链充提币；2 Pay；3 平台内区块链地址
   */
  channelInd?: number
  /**
   * 币种代码
   */
  symbol?: string
  /**
   * 充值地址
   */
  address?: string
  /**
   * 充值地址memo
   */
  memo?: string
  /**
   * 交易hash
   */
  txHash?: string
  /**
   * 到账金额
   */
  amount?: number
  /**
   * 手续费
   */
  fee?: number
  /**
   * 总金额
   */
  total?: number
  /**
   * 提现状态      * 1 用户提交，2 用户验证通过， 3 待审核， 4 审核通过， 5 等待区块确认, 6 钱包机交易失败， 7钱包机交易成功，8 驳回 ，      *      * 充值状态      * 11 收到充值， 12 充值已记分， 13 充值冻结
   */
  statusCd?: number
  /**
   * 驳回原因
   */
  reason?: string
  /**
   * 创建时间
   */
  createdByTime?: number
  /**
   * 完成时间
   */
  updatedByTime?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-财务日志详情↗](https://yapi.nbttfc365.com/project/77/interface/api/6324)
// **/
// export const getV1PayAssetTradeBillsDetailApiRequest: MarkcoinRequest<
//   YapiGetV1PayAssetTradeBillsDetailApiRequest,
//   YapiGetV1PayAssetTradeBillsDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/pay/asset/trade/bills/detail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
