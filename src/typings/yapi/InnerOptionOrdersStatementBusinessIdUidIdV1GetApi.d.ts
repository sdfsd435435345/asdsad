/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [财务记录详情内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/10949) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /inner/v1/option/orders/statement/{businessId}/{uid}/{id}`
 * @更新时间 `2023-07-13 11:56:00`
 */
export interface YapiGetInnerV1OptionOrdersStatementBusinessIdUidIdApiRequest {
  /**
   * 商户ID
   */
  businessId: string
  /**
   * uid
   */
  uid: string
  /**
   * 订单ID
   */
  id: string
}

/**
 * 接口 [财务记录详情内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/10949) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /inner/v1/option/orders/statement/{businessId}/{uid}/{id}`
 * @更新时间 `2023-07-13 11:56:00`
 */
export interface YapiGetInnerV1OptionOrdersStatementBusinessIdUidIdApiResponse {
  code?: number
  message?: string
  data?: YapiGetInnerV1OptionOrdersStatementBusinessIdUidIdData
}
/**
 * 订单数据
 */
export interface YapiGetInnerV1OptionOrdersStatementBusinessIdUidIdData {
  id: string
  sideInd: string
  periodDisplay: string
  periodUnit: string
  amplitude: string
  coinSymbol: string
  quoteCoinShortName: string
  baseCoinShortName: string
  createdByTime: string
  updatedByTime: string
  /**
   * 合约类型     delivery 交割    perpetual 永续
   */
  typeInd: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [财务记录详情内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/10949)
// **/
// export const getInnerV1OptionOrdersStatementBusinessIdUidIdApiRequest: MarkcoinRequest<
//   YapiGetInnerV1OptionOrdersStatementBusinessIdUidIdApiRequest,
//   YapiGetInnerV1OptionOrdersStatementBusinessIdUidIdApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/option/orders/statement/{businessId}/{uid}/{id}",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
