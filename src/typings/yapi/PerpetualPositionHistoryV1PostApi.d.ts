/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [历史仓位↗](https://yapi.nbttfc365.com/project/44/interface/api/9054) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/history`
 * @更新时间 `2023-11-06 16:48:19`
 */
export interface YapiPostV1PerpetualPositionHistoryApiRequest {
  /**
   * 合约币对
   */
  symbol?: string
  /**
   * close_position_type_cd字典;closeAll=全部平仓, partialClose=部分平仓,liquidation=强制平仓
   */
  operationTypeCd?: string
  /**
   * 开始时间
   */
  startTime?: number
  /**
   * 结束时间
   */
  endTime?: number
  /**
   * 页数
   */
  pageNum: number
  /**
   * 每页数量
   */
  pageSize: number
}

/**
 * 接口 [历史仓位↗](https://yapi.nbttfc365.com/project/44/interface/api/9054) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/history`
 * @更新时间 `2023-11-06 16:48:19`
 */
export interface YapiPostV1PerpetualPositionHistoryApiResponse {
  code: number
  message: string
  data: YapiPostV1PerpetualPositionHistoryData
}
export interface YapiPostV1PerpetualPositionHistoryData {
  list: YapiPostV1PerpetualPositionHistoryListData[]
  total: string
  pageNum: string
  pageSize: string
}
export interface YapiPostV1PerpetualPositionHistoryListData {
  /**
   * symbol
   */
  symbol: string
  /**
   * 交易对id
   */
  tradeId: number
  /**
   * 标的币名称
   */
  baseSymbolName: string
  /**
   * 计价币名称
   */
  quoteSymbolName: string
  /**
   * 合约类型:delivery=交割perpetual=永续
   */
  swapTypeInd: string
  /**
   * closeAll=全部平仓, partialClose=部分平仓,liquidation=强制平仓
   */
  operationTypeCd: string
  /**
   * long: 多仓位 short:空仓位
   */
  sideInd: string
  /**
   * 杠杆倍数
   */
  lever: number
  /**
   * 开仓均价
   */
  openPrice: string
  /**
   * 收益
   */
  profit: string
  /**
   * 持仓数量
   */
  size: string
  /**
   * 平仓均价
   */
  closePrice: string
  /**
   * 收益率
   */
  profitRatio: string
  /**
   * 平仓数量
   */
  closeSize: string
  /**
   * 开仓时间
   */
  openPositionTime: number
  /**
   * 平仓时间
   */
  closePositionTime: number
  /**
   * 平仓时标记价
   */
  closeMarkPrice: string
  /**
   * 数量精度
   */
  amountOffset: string
  /**
   * 价格精度
   */
  priceOffset: string
  /**
   * 最新价
   */
  latestPrice: string
  /**
   * id
   */
  id: string
  /**
   * web logo
   */
  webLogo: string
  /**
   * app logo
   */
  appLogo: string
  /**
   * 订单号
   */
  orderId: string
  /**
   * 保险金抵扣
   */
  insuranceDeductionAmount: string
  /**
   * 体验金抵扣
   */
  voucherDeductionAmount: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [历史仓位↗](https://yapi.nbttfc365.com/project/44/interface/api/9054)
// **/
// export const postV1PerpetualPositionHistoryApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPositionHistoryApiRequest,
//   YapiPostV1PerpetualPositionHistoryApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/position/history",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
