/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询券类型关系↗](https://yapi.nbttfc365.com/project/44/interface/api/18949) 的 **请求类型**
 *
 * @分类 [优惠券↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1026)
 * @请求头 `GET /v1/coupon/typeSceneList`
 * @更新时间 `2023-10-16 11:01:02`
 */
export interface YapiGetV1CouponTypeSceneListApiRequest {
  /**
   * 券类型
   */
  codeVal?: string
}

/**
 * 接口 [查询券类型关系↗](https://yapi.nbttfc365.com/project/44/interface/api/18949) 的 **返回类型**
 *
 * @分类 [优惠券↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1026)
 * @请求头 `GET /v1/coupon/typeSceneList`
 * @更新时间 `2023-10-16 11:01:02`
 */
export interface YapiGetV1CouponTypeSceneListApiResponse {
  /**
   * 200-成功
   */
  code?: number
  message?: string
  data?: YapiGetV1CouponTypeSceneListData[]
}
export interface YapiGetV1CouponTypeSceneListData {
  /**
   * 券类型
   */
  codeVal: string
  list: YapiGetV1CouponTypeSceneListListData[]
}
export interface YapiGetV1CouponTypeSceneListListData {
  /**
   * 适用场景
   */
  businessScene: string
  /**
   * 子券类型
   */
  subCodeVal: string
  /**
   * 券类型
   */
  codeVal: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询券类型关系↗](https://yapi.nbttfc365.com/project/44/interface/api/18949)
// **/
// export const getV1CouponTypeSceneListApiRequest: MarkcoinRequest<
//   YapiGetV1CouponTypeSceneListApiRequest,
//   YapiGetV1CouponTypeSceneListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/coupon/typeSceneList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
