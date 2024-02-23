/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [历史战绩_详情↗](https://yapi.nbttfc365.com/project/44/interface/api/12014) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/orders/history/detail`
 * @更新时间 `2023-08-18 15:30:32`
 */
export interface YapiGetV1RaOrdersHistoryDetailApiRequest {
  id: string
}

/**
 * 接口 [历史战绩_详情↗](https://yapi.nbttfc365.com/project/44/interface/api/12014) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/orders/history/detail`
 * @更新时间 `2023-08-18 15:30:32`
 */
export interface YapiGetV1RaOrdersHistoryDetailApiResponse {
  code?: string
  message?: string
  data?: YapiGetV1RaOrdersHistoryDetailData
}
export interface YapiGetV1RaOrdersHistoryDetailData {
  detail: YapiGetV1RaOrdersHistoryDetailDetailData
}
export interface YapiGetV1RaOrdersHistoryDetailDetailData {
  /**
   * 项目code
   */
  projectCode: string
  /**
   * 产品名称，哈希是获取
   */
  productName: string
  orderDetailId: string
  /**
   * 订单id
   */
  id: number
  /**
   * 交易对id
   */
  tradePairId: string
  /**
   * 交易对symbol
   */
  tradePairSymbol: string
  /**
   * 合约类型, delivery 交割,perpetual 永续
   */
  swapTypeInd: string
  /**
   * 作战区，1m,2m,3m,4m,5m
   */
  combatArea: string
  /**
   * 作战期数
   */
  seasonId: number
  /**
   * 策略类型大小(big_or_small), 数字(number), 单双(parity)
   */
  strategy: string
  /**
   * 精度位数, 个位...
   */
  precisionDigit: string
  /**
   * 下注对应的值，数字(0,1,2,3,4,5,6,7,8,9), 大小(b=大,s=小), 单双(odd=单,even=双)
   */
  bettingValue: string
  /**
   * 真实赔率
   */
  realOdds: string
  /**
   * 手续费
   */
  fee: string
  /**
   * 开奖时的原始值，比如标记价格/完整的hash
   */
  lotterySourceValue: string
  /**
   * 作战结果，success,fail，cancel
   */
  result: string
  /**
   * 消耗或者盈利
   */
  amount: string
  /**
   * 币种名称
   */
  coinName: string
  /**
   * 创建时间
   */
  createTime: number
  /**
   * 区块高度
   */
  height: string
  /**
   * 下单时区块高度
   */
  hashHeightNow: string
  /**
   * 取消时间
   */
  cancelByTime: number
  /**
   * 取消原因
   */
  cancelReason: string
  /**
   * 出块时间
   */
  blockTimestamp: number
  /**
   * 获取时间
   */
  blockTimestampGot: number
  /**
   * 区块链高度跳转地址
   */
  chainBlockUrl: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [历史战绩_详情↗](https://yapi.nbttfc365.com/project/44/interface/api/12014)
// **/
// export const getV1RaOrdersHistoryDetailApiRequest: MarkcoinRequest<
//   YapiGetV1RaOrdersHistoryDetailApiRequest,
//   YapiGetV1RaOrdersHistoryDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/orders/history/detail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
