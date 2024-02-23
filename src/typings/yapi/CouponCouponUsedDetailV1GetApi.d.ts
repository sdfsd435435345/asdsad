/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [优惠券使用详情(新)↗](https://yapi.nbttfc365.com/project/44/interface/api/19124) 的 **请求类型**
 *
 * @分类 [优惠券↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1026)
 * @请求头 `GET /v1/coupon/couponUsedDetail`
 * @更新时间 `2023-11-02 16:33:30`
 */
export interface YapiGetV1CouponCouponUsedDetailApiRequest {
  /**
   * 优惠券的ID
   */
  id: string
}

/**
 * 接口 [优惠券使用详情(新)↗](https://yapi.nbttfc365.com/project/44/interface/api/19124) 的 **返回类型**
 *
 * @分类 [优惠券↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1026)
 * @请求头 `GET /v1/coupon/couponUsedDetail`
 * @更新时间 `2023-11-02 16:33:30`
 */
export interface YapiGetV1CouponCouponUsedDetailApiResponse {
  /**
   * 200成功
   */
  code: number
  /**
   * 描述
   */
  message: string
  data: YapiGetV1CouponCouponUsedDetailData
}
export interface YapiGetV1CouponCouponUsedDetailData {
  /**
   * 是否有使用门槛 是 enable 否disable
   */
  useRuleStatus?: string
  /**
   * 当有使用门槛时，不为空，大于0
   */
  useThreshold?: number
  /**
   * 抵扣方式，direct直接抵扣 rate比例折扣
   */
  useDiscountRule?: string
  /**
   * 比例折扣时，必填。60表示60%，6折
   */
  useDiscountRuleRate?: number
  /**
   * 优惠券面值
   */
  couponValue?: number
  /**
   * 卡券ID
   */
  id: number
  /**
   * 卡劵分类code ,字典值
   */
  couponType: string
  /**
   * 卡劵类型code ,字典值
   */
  couponCode: string
  /**
   * 卡劵类型使用业务场景，字典值，也就是交易场景
   */
  businessScene?: string
  /**
   * 使用时间
   */
  usedByTime?: string
  /**
   * 过期时间
   */
  invalidByTime: string
  /**
   * 卡券状态 字典值，见备注
   */
  status: number
  /**
   * 订单ID
   */
  orderId: string
  /**
   * 活动名称
   */
  activityName?: string
  /**
   * 账户 如果是ASSET表示‘交易账户’，前端需写死。其他值直接展示。
   */
  accountName: string
  /**
   * 交易场景二级场景,字典值
   */
  businessLine: string
  /**
   * 交易类型 字典值
   */
  businessType: string
  /**
   * 展示值1 例如手续费
   */
  valueFirst: string
  /**
   * 展示值2 例如卡券抵扣
   */
  valueSecond: string
  /**
   * 展示值3 例如实际手续费
   */
  valueThird: string
  /**
   * 优惠券币种symbol
   */
  couponSymbol: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [优惠券使用详情(新)↗](https://yapi.nbttfc365.com/project/44/interface/api/19124)
// **/
// export const getV1CouponCouponUsedDetailApiRequest: MarkcoinRequest<
//   YapiGetV1CouponCouponUsedDetailApiRequest,
//   YapiGetV1CouponCouponUsedDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/coupon/couponUsedDetail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
