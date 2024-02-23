/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-币种概况↗](https://yapi.nbttfc365.com/project/44/interface/api/2840) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/coinExt`
 * @更新时间 `2023-02-09 17:11:12`
 */
export interface YapiGetV1TradePairCoinExtApiRequest {
  /**
   * 币种ID
   */
  coinId?: string
  /**
   * BTC
   */
  coinName?: string
}

/**
 * 接口 [现货-币种概况↗](https://yapi.nbttfc365.com/project/44/interface/api/2840) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/coinExt`
 * @更新时间 `2023-02-09 17:11:12`
 */
export interface YapiGetV1TradePairCoinExtApiResponse {
  id?: number
  coinId?: number
  coinName?: string
  appLogo?: null
  webLogo?: null
  /**
   * 全名
   */
  fullName?: string
  /**
   * 添加自选的比例
   */
  favouritePercent?: number
  favouritePercentFrom?: number
  /**
   * 最高价
   */
  highest?: number
  /**
   * 最高价的时间
   */
  highestTime?: null
  /**
   * 最低价的时间
   */
  lowestTime?: null
  /**
   * 最低价
   */
  lowest?: number
  /**
   * 首发时间
   */
  startTime?: number
  /**
   * 公链
   */
  publicChain?: string
  /**
   * 首发价
   */
  startPrice?: number
  /**
   * 最大供应量
   */
  maxSupply?: number
  /**
   * 流通量
   */
  circulatingSupply?: number
  /**
   * 流通比例
   */
  circulatingPercent?: number
  /**
   * 币种详情
   */
  coinRemarks?: string
  /**
   * 官网链接
   */
  officialUrl?: string
  /**
   * 白皮书
   */
  whitePaper?: string
  /**
   * 区块链浏览器
   */
  explorerAddressUrl?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-币种概况↗](https://yapi.nbttfc365.com/project/44/interface/api/2840)
// **/
// export const getV1TradePairCoinExtApiRequest: MarkcoinRequest<
//   YapiGetV1TradePairCoinExtApiRequest,
//   YapiGetV1TradePairCoinExtApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/tradePair/coinExt",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
