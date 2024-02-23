/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取优惠券列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18814) 的 **请求类型**
 *
 * @分类 [优惠券↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1026)
 * @请求头 `GET /v1/coupon/list`
 * @更新时间 `2023-10-30 15:23:53`
 */
export interface YapiGetV1CouponListApiRequest {
  /**
   * 卡券状态， 0无效（除可用之外的其他）, 1 可用，2 已使用，3 已失效
   */
  couponStatus: string
  /**
   * 卡券分类 字典值  见枚举
   */
  couponType?: string
  /**
   * 卡券类型枚举值（数据字典）见备注
   */
  couponCode?: string
  /**
   * 场景类型 字典值
   */
  businessScene?: string
  /**
   * 筛选开始日期时间戳（无效券不能超过最近3个月）
   */
  startDatetime?: string
  /**
   * 筛选结束日期时间戳（一天的最后一毫秒时间戳）
   */
  endDatetime?: string
  /**
   * 页码
   */
  pageNum?: string
  /**
   * 每页大小
   */
  pageSize?: string
}

/**
 * 接口 [获取优惠券列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18814) 的 **返回类型**
 *
 * @分类 [优惠券↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1026)
 * @请求头 `GET /v1/coupon/list`
 * @更新时间 `2023-10-30 15:23:53`
 */
export interface YapiGetV1CouponListApiResponse {
  /**
   * 200成功
   */
  code: number
  /**
   * 描述
   */
  message: string
  data: YapiGetV1CouponListData[]
}
export interface YapiGetV1CouponListData {
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
   * 比例折扣时，必填。60表示60%
   */
  useDiscountRuleRate?: number
  /**
   * 是否指定币种 是 enable 否disable
   */
  coinStatus?: string
  /**
   * 选择的币种id
   */
  coinId?: number
  /**
   * 选择的币种symbol
   */
  coinSymbol?: string
  /**
   * 优惠券面值
   */
  couponValue?: number
  /**
   * 累计核销金额
   */
  cumulativeAmount?: number
  /**
   * 累计核销前金额
   */
  amount?: number
  /**
   * 卡券ID
   */
  id: number
  /**
   * 卡券模板ID
   */
  couponTemplateId: number
  /**
   * 卡劵分类code ,字典值
   */
  couponType: string
  /**
   * 卡劵类型code ,字典值
   */
  couponCode: string
  /**
   * 卡劵类型使用业务场景，字典值
   */
  businessScene?: string
  /**
   * 领取时间
   */
  assignByTime?: string
  /**
   * 使用时间
   */
  usedByTime?: string
  /**
   * 过期时间
   */
  invalidByTime: string
  /**
   * 券码
   */
  couponTokenCode?: string
  /**
   * 卡券状态 字典值，见备注
   */
  status: number
  /**
   * 订单来源Id
   */
  srcId?: string
  /**
   * 订单ID
   */
  orderId?: string
  /**
   * 活动名称
   */
  activityName?: string
  /**
   * 记录总数
   */
  totalNum: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取优惠券列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18814)
// **/
// export const getV1CouponListApiRequest: MarkcoinRequest<
//   YapiGetV1CouponListApiRequest,
//   YapiGetV1CouponListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/coupon/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
