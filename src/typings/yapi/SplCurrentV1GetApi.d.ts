/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询现货普通\/计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/11384) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /v1/spl/current`
 * @更新时间 `2023-07-25 18:40:46`
 */
export interface YapiGetV1SplCurrentApiRequest {
  /**
   * 交易对ID
   */
  tradeId: string
}

/**
 * 接口 [查询现货普通\/计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/11384) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `GET /v1/spl/current`
 * @更新时间 `2023-07-25 18:40:46`
 */
export interface YapiGetV1SplCurrentApiResponse {
  /**
   * 返回信息
   */
  msg?: string
  /**
   * 返回Code标识，200为成功
   */
  code?: number
  data?: YapiGetV1SplCurrentListData[]
}
export interface YapiGetV1SplCurrentListData {
  /**
   * 1普通委托  2计划委托
   */
  category: number
  /**
   * 撮合类型 1限价 2市价 3撤单
   */
  matchType: number
  /**
   * 下单类型 1买单 2卖单 3撤单
   */
  side: number
  /**
   * 价格
   */
  price: number
  /**
   * 数量
   */
  size: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询现货普通/计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/11384)
// **/
// export const getV1SplCurrentApiRequest: MarkcoinRequest<
//   YapiGetV1SplCurrentApiRequest,
//   YapiGetV1SplCurrentApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/spl/current",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
