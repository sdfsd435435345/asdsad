/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取用户可用券及VIP费率↗](https://yapi.nbttfc365.com/project/44/interface/api/18989) 的 **请求类型**
 *
 * @分类 [优惠券↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1026)
 * @请求头 `GET /v1/coupon/selectCoupons`
 * @更新时间 `2023-10-30 15:55:35`
 */
export interface YapiGetV1CouponSelectCouponsApiRequest {
  /**
   * 使用场景枚举字典值,
   */
  businessScene: string
}

/**
 * 接口 [获取用户可用券及VIP费率↗](https://yapi.nbttfc365.com/project/44/interface/api/18989) 的 **返回类型**
 *
 * @分类 [优惠券↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1026)
 * @请求头 `GET /v1/coupon/selectCoupons`
 * @更新时间 `2023-10-30 15:55:35`
 */
export interface YapiGetV1CouponSelectCouponsApiResponse {
  /**
   * 200成功
   */
  code: number
  /**
   * 描述
   */
  message: string
  data: YapiGetV1CouponSelectCouponsData
}
export interface YapiGetV1CouponSelectCouponsData {
  /**
   * 是否是VIP
   */
  isVipUser: boolean
  /**
   * vip折扣费率（实际值）
   */
  vipFeeRate: string
  /**
   * 券列表（面值大到小，折扣大到小, 过期时间先后排序）
   */
  coupons: YapiGetV1CouponSelectCouponsListCouponsData[]
}
export interface YapiGetV1CouponSelectCouponsListCouponsData {
  /**
   * 卡券ID
   */
  id: string
  /**
   * 卡券模板ID
   */
  couponTemplateId: string
  /**
   * 卡劵分类类型code ,字典值
   */
  couponType: string
  /**
   * 卡劵类型code ,字典值
   */
  couponCode: string
  /**
   * 卡劵类型使用业务场景，字典值
   */
  businessScene: string
  /**
   * 是否有使用门槛 是 enable 否disable
   */
  useRuleStatus: string
  /**
   * 当有使用门槛时，不为空，大于0
   */
  useThreshold: number
  /**
   * 是否支持和会员叠加使用 是 enable 否disable
   */
  useOverlayVipStatus: string
  /**
   * 抵扣方式，direct直接抵扣 rate比例折扣
   */
  useDiscountRule: string
  /**
   * 比例折扣时，必填。60表示60%
   */
  useDiscountRuleRate: string
  /**
   * 是否指定币种 是 enable 否disable
   */
  coinStatus: string
  /**
   * 指定币种id
   */
  coinId: string
  /**
   * 指定币种symbol
   */
  coinSymbol: string
  /**
   * 优惠券面值选
   */
  couponValue: number
  /**
   * 领取时间戳
   */
  assignByTime: number
  /**
   * 失效时间戳
   */
  invalidByTime: number
  /**
   * 活动ID
   */
  activityId: string
  /**
   * 活动名称
   */
  activityName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取用户可用券及VIP费率↗](https://yapi.nbttfc365.com/project/44/interface/api/18989)
// **/
// export const getV1CouponSelectCouponsApiRequest: MarkcoinRequest<
//   YapiGetV1CouponSelectCouponsApiRequest,
//   YapiGetV1CouponSelectCouponsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/coupon/selectCoupons",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
