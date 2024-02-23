/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [当前结算币种及结算币种列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18229) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/systemConfig/getCurrencyList`
 * @更新时间 `2023-09-11 11:31:52`
 */
export interface YapiPostV1AgentSystemConfigGetCurrencyListApiRequest {
  /**
   * 平台
   */
  businessId: string
  productId: string
}

/**
 * 接口 [当前结算币种及结算币种列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18229) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/systemConfig/getCurrencyList`
 * @更新时间 `2023-09-11 11:31:52`
 */
export interface YapiPostV1AgentSystemConfigGetCurrencyListApiResponse {
  code: string
  message: string
  data: YapiPostV1AgentSystemConfigGetCurrencyData
}
export interface YapiPostV1AgentSystemConfigGetCurrencyData {
  currencyList: YapiPostV1AgentSystemConfigGetCurrencyCurrencyListData
}
/**
 * 币种list
 */
export interface YapiPostV1AgentSystemConfigGetCurrencyCurrencyListData {
  /**
   * id
   */
  id: string
  /**
   * 名称
   */
  name: string
  /**
   * 代码
   */
  code: string
  /**
   * 是否当前默认
   */
  isDef: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [当前结算币种及结算币种列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18229)
// **/
// export const postV1AgentSystemConfigGetCurrencyListApiRequest: MarkcoinRequest<
//   YapiPostV1AgentSystemConfigGetCurrencyListApiRequest,
//   YapiPostV1AgentSystemConfigGetCurrencyListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/systemConfig/getCurrencyList",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
