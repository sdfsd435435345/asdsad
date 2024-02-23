/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [玩法时间列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11059) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/product/periods`
 * @更新时间 `2023-09-18 12:30:39`
 */
export interface YapiGetV1OptionProductPeriodsApiRequest {
  /**
   * 三元期权产品ID
   */
  optionId: string
}

/**
 * 接口 [玩法时间列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11059) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `GET /v1/option/product/periods`
 * @更新时间 `2023-09-18 12:30:39`
 */
export interface YapiGetV1OptionProductPeriodsApiResponse {
  code: number
  message: string
  data: YapiGetV1OptionProductPeriodsListData[]
}
export interface YapiGetV1OptionProductPeriodsListData {
  /**
   * 周期ID
   */
  id: number
  /**
   * 周期   单位秒
   */
  period: number
  /**
   * 时间范围内，单位秒
   */
  limitRange?: number
  /**
   * 允许次数，大于0
   */
  limitCount?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [玩法时间列表↗](https://yapi.nbttfc365.com/project/44/interface/api/11059)
// **/
// export const getV1OptionProductPeriodsApiRequest: MarkcoinRequest<
//   YapiGetV1OptionProductPeriodsApiRequest,
//   YapiGetV1OptionProductPeriodsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/option/product/periods",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
