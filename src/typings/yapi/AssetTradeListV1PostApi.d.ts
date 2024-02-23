/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货交易对资产列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18559) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/asset/trade/list`
 * @更新时间 `2023-09-25 10:49:59`
 */
export interface YapiPostV1AssetTradeListApiRequest {
  /**
   * 现货交易对id
   */
  tradeId: string
}

/**
 * 接口 [现货交易对资产列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18559) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/asset/trade/list`
 * @更新时间 `2023-09-25 10:49:59`
 */
export interface YapiPostV1AssetTradeListApiResponse {
  code?: string
  massge?: string
  data?: YapiPostV1AssetTradeData
}
export interface YapiPostV1AssetTradeData {
  list?: YapiPostV1AssetTradeListData[]
}
export interface YapiPostV1AssetTradeListData {
  /**
   * 币种id
   */
  coinId?: string
  /**
   * 币种符号
   */
  symbol?: string
  /**
   * 币种名称
   */
  coinName?: string
  appLogo?: string
  webLogo?: string
  /**
   * 总数量
   */
  totalAmount?: string
  /**
   * 可用数量
   */
  availableAmount?: string
  /**
   * 冻结数量
   */
  lockAmount?: string
  /**
   * 是否交易对币种
   */
  isTradeCoin?: boolean
  trades?: YapiPostV1AssetTradeListTradesListData[]
}
export interface YapiPostV1AssetTradeListTradesListData {
  /**
   * 交易对id
   */
  tradeId?: string
  /**
   * 类型，spot：现货， swap：合约
   */
  type?: string
  /**
   * 交易对名称
   */
  tradeName?: string
  /**
   * 计价币
   */
  quoteSymbolName?: string
  /**
   * 标的币
   */
  baseSymbolName?: string
  /**
   * 合约类型 delivery =交割 ,perpetual =永续
   */
  typeInd?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货交易对资产列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18559)
// **/
// export const postV1AssetTradeListApiRequest: MarkcoinRequest<
//   YapiPostV1AssetTradeListApiRequest,
//   YapiPostV1AssetTradeListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/asset/trade/list",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
