/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询收益率列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11069) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/product/yieldRate`
 * @更新时间 `2023-08-29 11:35:13`
 */
export interface YapiGetV1OptionProductYieldRateApiRequest {
  /**
   * 三元产品ID
   */
  optionId: string
  /**
   * 玩法时间ID
   */
  periodId: string
  /**
   * 方向枚举， 买涨 call  买跌 put 买涨超 over_call 买跌超 over_put，不传查所有
   */
  sideInd?: string
}

/**
 * 接口 [查询收益率列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11069) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/product/yieldRate`
 * @更新时间 `2023-08-29 11:35:13`
 */
export interface YapiGetV1OptionProductYieldRateApiResponse {
  code: number
  message: string
  data: YapiGetV1OptionProductYieldRateListData[]
}
export interface YapiGetV1OptionProductYieldRateListData {
  /**
   * 收益配置Id
   */
  id: number
  /**
   * 收益
   */
  yield: number
  /**
   * 价差  看涨看跌没有
   */
  amplitude?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询收益率列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11069)
// **/
// export const getV1OptionProductYieldRateApiRequest: MarkcoinRequest<
//   YapiGetV1OptionProductYieldRateApiRequest,
//   YapiGetV1OptionProductYieldRateApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/option/product/yieldRate",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
