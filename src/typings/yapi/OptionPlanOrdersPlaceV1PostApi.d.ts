/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [新建计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/10929) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `POST /v1/option/plan/orders/place`
 * @更新时间 `2023-10-30 15:43:09`
 */
export interface YapiPostV1OptionPlanOrdersPlaceApiRequest {
  /**
   * 三元期权产品id
   */
  optionId: number
  /**
   * 三元期权选择的时间id
   */
  periodId: number
  /**
   * 三预期权收益率配置id
   */
  yieldId: number
  /**
   * 方向 买涨 call  买跌 put 买涨超 over_call 买跌超 over_put
   */
  sideInd: string
  /**
   * 下单金额
   */
  amount: number
  /**
   * 最大触发次数
   */
  cycles: number
  /**
   * 最大累计金额
   */
  maxAmount: number
  /**
   * 是否智能翻倍 1 是 2 否
   */
  isSmart: number
  /**
   * 选择的优惠券
   */
  coupons?: YapiPostV1OptionPlanOrdersPlaceApiRequestListCoupons[]
  /**
   * 下单金额中包含多少体验金，选择了体验金优惠券才会有值
   */
  voucherAmount?: string
}
export interface YapiPostV1OptionPlanOrdersPlaceApiRequestListCoupons {
  /**
   * 选择的优惠券的id
   */
  couponId: string
  /**
   * 选择的优惠券的couponType
   */
  couponType: string
  /**
   * 选择的优惠券的couponCode
   */
  couponCode: string
}

/**
 * 接口 [新建计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/10929) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `POST /v1/option/plan/orders/place`
 * @更新时间 `2023-10-30 15:43:09`
 */
export interface YapiPostV1OptionPlanOrdersPlaceApiResponse {
  /**
   * 订单ID
   */
  data?: string
  /**
   * 错误消息
   */
  message?: string
  /**
   * 200表示成功 其他code表示失败
   */
  code?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [新建计划委托↗](https://yapi.nbttfc365.com/project/44/interface/api/10929)
// **/
// export const postV1OptionPlanOrdersPlaceApiRequest: MarkcoinRequest<
//   YapiPostV1OptionPlanOrdersPlaceApiRequest,
//   YapiPostV1OptionPlanOrdersPlaceApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/option/plan/orders/place",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
