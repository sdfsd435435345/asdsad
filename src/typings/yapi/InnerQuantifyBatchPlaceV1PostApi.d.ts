/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [量化交易_批量_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2897) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /inner/v1/quantify/batch/place`
 * @更新时间 `2022-11-14 18:10:32`
 */
export type YapiPostInnerV1QuantifyBatchPlaceApiRequest = YapiPostInnerV1QuantifyBatchPlaceApiRequestList[]

export interface YapiPostInnerV1QuantifyBatchPlaceApiRequestList {
  /**
   * 不为空,交易对id
   */
  tradeId: number
  /**
   * 下单数量
   */
  placeCount: number
  /**
   * 下单价格
   */
  placePrice: number
  /**
   * 1买入 2 卖出
   */
  side: number
  /**
   * 下单时间 13位毫秒值,不传会取当前服务所在机器时间
   */
  tradeTime?: number
}

/**
 * 接口 [量化交易_批量_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2897) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /inner/v1/quantify/batch/place`
 * @更新时间 `2022-11-14 18:10:32`
 */
export interface YapiPostInnerV1QuantifyBatchPlaceApiResponse {
  /**
   * success
   */
  data?: string
  /**
   * 200 标识成功 其他code值标识失败
   */
  code?: number
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [量化交易_批量_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2897)
// **/
// export const postInnerV1QuantifyBatchPlaceApiRequest: MarkcoinRequest<
//   YapiPostInnerV1QuantifyBatchPlaceApiRequest,
//   YapiPostInnerV1QuantifyBatchPlaceApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/quantify/batch/place",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
