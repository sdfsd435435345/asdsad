/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [当前作战↗](https://yapi.nbttfc365.com/project/44/interface/api/11349) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/orders/current`
 * @更新时间 `2023-08-14 17:33:56`
 */
export interface YapiGetV1RaOrdersCurrentApiRequest {
  pageNum: string
  pageSize: string
  /**
   * 项目id
   */
  projectId?: string
  /**
   * 订单状态 ing=进行中,frozen=异常冻结
   */
  status?: string
}

/**
 * 接口 [当前作战↗](https://yapi.nbttfc365.com/project/44/interface/api/11349) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/orders/current`
 * @更新时间 `2023-08-14 17:33:56`
 */
export interface YapiGetV1RaOrdersCurrentApiResponse {
  code?: string
  message?: string
  data?: YapiGetV1RaOrdersCurrentData
}
export interface YapiGetV1RaOrdersCurrentData {
  list: YapiGetV1RaOrdersCurrentListData[]
  total: number
  pageNum: number
  pageSize: number
}
export interface YapiGetV1RaOrdersCurrentListData {
  /**
   * 项目id
   */
  projectId: number
  /**
   * id
   */
  id: string
  /**
   * 产品名称，哈希是获取
   */
  productName: string
  /**
   * 订单编号
   */
  orderDetailId: string
  /**
   * 项目code
   */
  projectCode: string
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
   * 开奖时间
   */
  lotteryTime: number
  /**
   * 金额
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
   * 下单区块高度
   */
  height: number
  /**
   * 预计区块高度
   */
  predictHeight: number
  /**
   * 订单状态 ing=进行中,frozen=异常冻结
   */
  status: string
  /**
   * 冻结时间
   */
  freezeByTime: number
  /**
   * 冻结原因
   */
  exceptionReason: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [当前作战↗](https://yapi.nbttfc365.com/project/44/interface/api/11349)
// **/
// export const getV1RaOrdersCurrentApiRequest: MarkcoinRequest<
//   YapiGetV1RaOrdersCurrentApiRequest,
//   YapiGetV1RaOrdersCurrentApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/orders/current",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
