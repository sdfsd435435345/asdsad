/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取优惠券列表-支持分页(作废)↗](https://yapi.nbttfc365.com/project/44/interface/api/18824) 的 **请求类型**
 *
 * @分类 [优惠券↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1026)
 * @请求头 `GET /v1/coupon/list2`
 * @更新时间 `2023-10-10 14:00:30`
 */
export interface YapiGetV1CouponList2ApiRequest {
  /**
   * 卡券类型枚举值（数据字典）见备注
   */
  couponCode?: string
  /**
   * 状态枚举值（数据字典）见备注
   */
  couponStatus: string
  /**
   * 筛选开始日期时间戳(不能超过三个月)
   */
  startDatetime?: string
  /**
   * 筛选结束日期时间戳
   */
  endDatetime?: string
  /**
   * 不传查所有
   */
  pageNum?: string
  /**
   * 不传查所有
   */
  pageSize?: string
}

/**
 * 接口 [获取优惠券列表-支持分页(作废)↗](https://yapi.nbttfc365.com/project/44/interface/api/18824) 的 **返回类型**
 *
 * @分类 [优惠券↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1026)
 * @请求头 `GET /v1/coupon/list2`
 * @更新时间 `2023-10-10 14:00:30`
 */
export interface YapiGetV1CouponList2ApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1Coupon2Data
}
export interface YapiGetV1Coupon2Data {
  /**
   * 当前页
   */
  pageNum?: number
  /**
   * 每页数量
   */
  pageSize?: number
  /**
   * 总数
   */
  total?: number
  /**
   * 数据列表
   */
  list?: YapiGetV1Coupon2ListData[]
}
export interface YapiGetV1Coupon2ListData {
  /**
   * 是否有使用门槛 是 enable 否disable
   */
  useRuleStatus?: string
  /**
   * 当有使用门槛时，不为空，大于0
   */
  useThreshold?: number
  /**
   * 是否支持和会员叠加使用 是 enable 否disable
   */
  useOverlayVipStatus?: string
  /**
   * 抵扣方式，direct直接抵扣 rate比例折扣
   */
  useDiscountRule?: string
  /**
   * 是否指定币种 是 enable 否disable
   */
  coinStatus?: string
  /**
   * 效结束时间 有效期类型为 time_period 时必填
   */
  validDateTo?: string
  /**
   * 有效开始时间 有效期类型为 time_period 时必填
   */
  validDateFrom?: string
  /**
   * 卡劵有效时间 天数 大于0，有效期类型为 after_receive时必填
   */
  validDay?: number
  /**
   * 有效期类型 after_receive 领取后N天有效，time_period 时间段
   */
  validityType?: string
  /**
   * 比例折扣时，必填。60表示60%
   */
  useDiscountRuleRate?: number
  /**
   * 可发放数量是否无限制 是 enable 否disable
   */
  couponLimitStatus?: string
  /**
   * 选择的币种id
   */
  coinId?: number
  /**
   * 优惠券面值
   */
  couponValue?: number
  /**
   * 选择的币种symbol
   */
  coinSymbol?: string
  /**
   * 用户可领次数上限，默认1次
   */
  couponAcquireLimit?: number
  /**
   * 可发放数量限制 大于0的整数
   */
  couponLimit?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取优惠券列表-支持分页(作废)↗](https://yapi.nbttfc365.com/project/44/interface/api/18824)
// **/
// export const getV1CouponList2ApiRequest: MarkcoinRequest<
//   YapiGetV1CouponList2ApiRequest,
//   YapiGetV1CouponList2ApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/coupon/list2",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
