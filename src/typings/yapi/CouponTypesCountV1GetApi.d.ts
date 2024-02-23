/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [各类卡券数量统计↗](https://yapi.nbttfc365.com/project/44/interface/api/18849) 的 **请求类型**
 *
 * @分类 [优惠券↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1026)
 * @请求头 `GET /v1/coupon/types/count`
 * @更新时间 `2023-10-27 16:53:45`
 */
export interface YapiGetV1CouponTypesCountApiRequest {}

/**
 * 接口 [各类卡券数量统计↗](https://yapi.nbttfc365.com/project/44/interface/api/18849) 的 **返回类型**
 *
 * @分类 [优惠券↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1026)
 * @请求头 `GET /v1/coupon/types/count`
 * @更新时间 `2023-10-27 16:53:45`
 */
export interface YapiGetV1CouponTypesCountApiResponse {
  /**
   * 200-成功
   */
  code: number
  /**
   * 描述
   */
  message: string
  data: YapiGetV1CouponTypesCountData
}
export interface YapiGetV1CouponTypesCountData {
  /**
   * 兑换中心券模板数量
   */
  activityCouponNum: number
  /**
   * 兑换中心是否有新未领取
   */
  activityCouponNew: boolean
  /**
   * 优惠券有效总数
   */
  validNum: number
  /**
   * 不可用卡券总数(3个月内)
   */
  invalidNum: number
  /**
   * 是否有新领取券
   */
  couponNew: boolean
  /**
   * 分类数据
   */
  couponTypes: YapiGetV1CouponTypesCountListCouponTypesData[]
}
export interface YapiGetV1CouponTypesCountListCouponTypesData {
  /**
   * 卡券分类CODE
   */
  couponType: string
  /**
   * 分类可用数量
   */
  validNum: number
  /**
   * 分类不可用总数(3个月内)
   */
  invalidNum: number
  /**
   * 是否有新领取券
   */
  hasNew: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [各类卡券数量统计↗](https://yapi.nbttfc365.com/project/44/interface/api/18849)
// **/
// export const getV1CouponTypesCountApiRequest: MarkcoinRequest<
//   YapiGetV1CouponTypesCountApiRequest,
//   YapiGetV1CouponTypesCountApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/coupon/types/count",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
