/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [hash区块产品最新期数↗](https://yapi.nbttfc365.com/project/44/interface/api/11734) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/hash/latestSeason`
 * @更新时间 `2023-09-14 13:57:54`
 */
export interface YapiGetV1RaHashLatestSeasonApiRequest {
  /**
   * 产品id
   */
  productId: string
}

/**
 * 接口 [hash区块产品最新期数↗](https://yapi.nbttfc365.com/project/44/interface/api/11734) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/hash/latestSeason`
 * @更新时间 `2023-09-14 13:57:54`
 */
export interface YapiGetV1RaHashLatestSeasonApiResponse {
  code: string
  message: string
  data: YapiGetV1RaHashLatestSeasonData
}
export interface YapiGetV1RaHashLatestSeasonData {
  /**
   * 产品id
   */
  productId: number
  /**
   * 产品名称
   */
  productName: string
  /**
   * 策略数组
   */
  strategyArray: YapiGetV1RaHashLatestSeasonListStrategyArrayData[]
  /**
   * 资产
   */
  balance: string
  /**
   * 币种名称.比如USDT
   */
  coinName: string
  /**
   * 币种id
   */
  coinId: number
  /**
   * 币种精度
   */
  coinPrecision: number
  /**
   * 支持的精度,"1,2,3,4,5," 逗号隔空,("1"=一号,"2"=二号,"3"=三号,"4"=四号,"5"=五号)
   */
  precisions: string
  /**
   * 当前作战数量
   */
  currentFightNum: number
  /**
   * 最大作战数量
   */
  maxFightNum: number
  /**
   * 项目id
   */
  projectId: number
  /**
   * 最小下单金额
   */
  minAmount: string
  /**
   * 最大下单金额
   */
  maxAmount: string
}
export interface YapiGetV1RaHashLatestSeasonListStrategyArrayData {
  /**
   * 大小(big_or_small), 数字(number), 单双(parity)
   */
  strategy: string
  /**
   * 赔率
   */
  odds: string
  /**
   * 数字(0,1,2,3,4,5,6,7,8,9), 大小(b=大,s=小), 单双(odd=单,even=双)
   */
  values: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [hash区块产品最新期数↗](https://yapi.nbttfc365.com/project/44/interface/api/11734)
// **/
// export const getV1RaHashLatestSeasonApiRequest: MarkcoinRequest<
//   YapiGetV1RaHashLatestSeasonApiRequest,
//   YapiGetV1RaHashLatestSeasonApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/hash/latestSeason",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
