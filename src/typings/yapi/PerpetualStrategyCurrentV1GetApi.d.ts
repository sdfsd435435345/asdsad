/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [当前委托_止盈止损↗](https://yapi.nbttfc365.com/project/44/interface/api/4035) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/strategy/current`
 * @更新时间 `2023-02-04 14:41:01`
 */
export interface YapiGetV1PerpetualStrategyCurrentApiRequest {
  /**
   * 交易对ID
   */
  tradeId?: string
  /**
   * 分页参数页号 ，从1开始
   */
  pageNum: string
  /**
   * 分页大小 默认 20 ，最小1，最大500
   */
  pageSize: string
  /**
   * 是否计算总数 true 是 false 否;不传默认为true
   */
  count?: string
  /**
   * 需要置顶的交易对id
   */
  priorTrade?: string
  /**
   * 合约组id ,不传则筛选出所有合约组的
   */
  groupId?: string
  /**
   * 委托类型   市价/限价
   */
  entrustTypeInd?: string
}

/**
 * 接口 [当前委托_止盈止损↗](https://yapi.nbttfc365.com/project/44/interface/api/4035) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/strategy/current`
 * @更新时间 `2023-02-04 14:41:01`
 */
export interface YapiGetV1PerpetualStrategyCurrentApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1PerpetualStrategyCurrentData
}
export interface YapiGetV1PerpetualStrategyCurrentData {
  /**
   * 总条数
   */
  total: number
  /**
   * 当前页码
   */
  pageNum: number
  /**
   * 每页的数量
   */
  pageSize: number
  list: YapiGetV1PerpetualStrategyCurrentListData[]
}
export interface YapiGetV1PerpetualStrategyCurrentListData {
  /**
   * 止盈止损策略id
   */
  id: string
  /**
   * 策略类型    stop_profit 止盈 stop_loss 止损
   */
  strategyTypeInd: string
  /**
   * 合约组id
   */
  groupId: string
  /**
   * 合约组名称
   */
  groupName: string
  /**
   * 委托状态 not_triggered 未生效
   */
  statusCd: string
  /**
   * 方向close_long 平多, close_short 平空
   */
  triggerSideInd: string
  /**
   * 委托价格类型 limit限价 market市价
   */
  entrustTypeInd: string
  /**
   * 杠杆倍数
   */
  lever: string
  /**
   * 合约交易对id
   */
  tradeId: string
  /**
   * 合约交易对名称
   */
  symbol: string
  /**
   * 委托价格
   */
  price: string
  /**
   * 委托数量
   */
  size: string
  /**
   * 创建时间 13位毫秒值
   */
  createdByTime: string
  /**
   * 标的币 symbol
   */
  baseCoinShortName: string
  /**
   * 计价币 symbol
   */
  quoteCoinShortName: string
  /**
   * 触发价格类型 （mark 标记价格，new 最新价格）
   */
  triggerPriceTypeInd: string
  /**
   * 触发价格
   */
  triggerPrice: string
  /**
   * 触发方向 up=向上  大于等于，down=向下  小于等于
   */
  triggerDirectionInd: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [当前委托_止盈止损↗](https://yapi.nbttfc365.com/project/44/interface/api/4035)
// **/
// export const getV1PerpetualStrategyCurrentApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualStrategyCurrentApiRequest,
//   YapiGetV1PerpetualStrategyCurrentApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/strategy/current",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
