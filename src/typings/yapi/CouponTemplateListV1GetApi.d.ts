/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取兑换中心列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18889) 的 **请求类型**
 *
 * @分类 [优惠券↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1026)
 * @请求头 `GET /v1/coupon/template/list`
 * @更新时间 `2023-10-27 16:53:19`
 */
export interface YapiGetV1CouponTemplateListApiRequest {
  /**
   * 活动页码
   */
  pageNum?: string
  /**
   * 活动分页大小
   */
  pageSize?: string
}

/**
 * 接口 [获取兑换中心列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18889) 的 **返回类型**
 *
 * @分类 [优惠券↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1026)
 * @请求头 `GET /v1/coupon/template/list`
 * @更新时间 `2023-10-27 16:53:19`
 */
export interface YapiGetV1CouponTemplateListApiResponse {
  /**
   * 200成功
   */
  code: number
  /**
   * 描述
   */
  message: string
  data: YapiGetV1CouponTemplateListData[]
}
export interface YapiGetV1CouponTemplateListData {
  /**
   * 活动ID
   */
  activityId: number
  /**
   * 活动名称
   */
  activityName: string
  /**
   * 券列表
   */
  list: YapiGetV1CouponTemplateListListData[]
}
export interface YapiGetV1CouponTemplateListListData {
  /**
   * 卡券模板ID
   */
  id: number
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
   * 是否指定币种 是 enable 否disable
   */
  coinStatus: string
  /**
   * 效结束时间 有效期类型为 time_period 时必填
   */
  validDateTo: string
  /**
   * 有效开始时间 有效期类型为 time_period 时必填
   */
  validDateFrom: string
  /**
   * 卡劵有效时间 天数 大于0，有效期类型为 after_receive时必填
   */
  validDay: number
  /**
   * 有效期类型 after_receive 领取后N天有效，time_period 时间段
   */
  validityType: string
  /**
   * 比例折扣时，必填。60表示60%
   */
  useDiscountRuleRate: number
  /**
   * 选择的币种id
   */
  coinId: string
  /**
   * 优惠券面值
   */
  couponValue: number
  /**
   * 选择的币种symbol
   */
  coinSymbol: string
  /**
   * 用户可领次数上限，默认1次
   */
  couponAcquireLimit: number
  /**
   * 状态 启用enable 禁用disable
   */
  status: string
  /**
   * 是否过期 1 未过期 2 过期
   */
  expired: number
  /**
   * 是否领完 1 未领完 2  领完
   */
  finished: number
  /**
   * 用户是否已达到最大领取数量
   */
  isMaxReceived: boolean
  /**
   * 活动名称
   */
  activityName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取兑换中心列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18889)
// **/
// export const getV1CouponTemplateListApiRequest: MarkcoinRequest<
//   YapiGetV1CouponTemplateListApiRequest,
//   YapiGetV1CouponTemplateListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/coupon/template/list",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
