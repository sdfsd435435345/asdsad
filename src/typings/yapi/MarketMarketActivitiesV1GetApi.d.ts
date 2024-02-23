/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [行情异动↗](https://yapi.nbttfc365.com/project/44/interface/api/3502) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/market/marketActivities`
 * @更新时间 `2022-12-09 13:52:02`
 */
export interface YapiGetV1MarketMarketActivitiesApiRequest {
  /**
   * 交易对名称
   */
  symbol?: string
  /**
   * 数据量，默认200
   */
  limit?: string
}

/**
 * 接口 [行情异动↗](https://yapi.nbttfc365.com/project/44/interface/api/3502) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/market/marketActivities`
 * @更新时间 `2022-12-09 13:52:02`
 */
export interface YapiGetV1MarketMarketActivitiesApiResponse {
  code?: number
  data?: YapiGetV1MarketMarketActivitiesListData[]
  message?: string
}
export interface YapiGetV1MarketMarketActivitiesListData {
  /**
   * 交易对名字
   */
  symbol: string
  /**
   * 显示的类型
   */
  dataType: number
  /**
   * 图标
   */
  icon: string
  /**
   * 交易对标识
   */
  symbolwassname: string
  /**
   * 这个字段后面会去掉，不要使用了
   */
  type: number
  /**
   * 标题
   */
  title: string
  /**
   * 涨跌色
   */
  colorType: number
  /**
   * 计价币
   */
  quote: string
  /**
   * 价格
   */
  price: number
  /**
   * id
   */
  id: number
  /**
   * 触发时间
   */
  time: number
  /**
   * 内容描述
   */
  describe: null
  /**
   * 异动值
   */
  value: string
  /**
   * 异动类型
   */
  key: string
  /**
   * 标的币
   */
  base: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [行情异动↗](https://yapi.nbttfc365.com/project/44/interface/api/3502)
// **/
// export const getV1MarketMarketActivitiesApiRequest: MarkcoinRequest<
//   YapiGetV1MarketMarketActivitiesApiRequest,
//   YapiGetV1MarketMarketActivitiesApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/market/marketActivities",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
