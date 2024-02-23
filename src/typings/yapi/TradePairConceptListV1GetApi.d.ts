/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [现货-某个计价币对应的板块列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2807) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/conceptList`
 * @更新时间 `2022-10-25 09:54:02`
 */
export interface YapiGetV1TradePairConceptListApiRequest {
  /**
   * 计价币id
   */
  buyCoinId: string
}

/**
 * 接口 [现货-某个计价币对应的板块列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2807) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `GET /v1/tradePair/conceptList`
 * @更新时间 `2022-10-25 09:54:02`
 */
export interface YapiGetV1TradePairConceptListApiResponse {
  list?: YapiGetV1TradePairConceptList[]
}
export interface YapiGetV1TradePairConceptList {
  /**
   * 板块ID
   */
  id?: number
  /**
   * 板块名
   */
  name?: string
  /**
   * 板块图标
   */
  icon?: null
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [现货-某个计价币对应的板块列表↗](https://yapi.nbttfc365.com/project/44/interface/api/2807)
// **/
// export const getV1TradePairConceptListApiRequest: MarkcoinRequest<
//   YapiGetV1TradePairConceptListApiRequest,
//   YapiGetV1TradePairConceptListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/tradePair/conceptList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
