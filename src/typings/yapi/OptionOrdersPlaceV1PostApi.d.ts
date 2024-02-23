/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [新建普通委托↗](https://yapi.nbttfc365.com/project/44/interface/api/10914) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `POST /v1/option/orders/place`
 * @更新时间 `2023-10-30 15:51:06`
 */
export interface YapiPostV1OptionOrdersPlaceApiRequest {
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
  coupons?: YapiPostV1OptionOrdersPlaceApiRequestListCoupons[]
  /**
   * 下单金额中包含多少体验金，选择了体验金优惠券才会有值
   */
  voucherAmount?: string
}
export interface YapiPostV1OptionOrdersPlaceApiRequestListCoupons {
  /**
   * 选择的优惠券的id
   */
  couponId: number
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
 * 接口 [新建普通委托↗](https://yapi.nbttfc365.com/project/44/interface/api/10914) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `POST /v1/option/orders/place`
 * @更新时间 `2023-10-30 15:51:06`
 */
export interface YapiPostV1OptionOrdersPlaceApiResponse {
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
// * [新建普通委托↗](https://yapi.nbttfc365.com/project/44/interface/api/10914)
// **/
// export const postV1OptionOrdersPlaceApiRequest: MarkcoinRequest<
//   YapiPostV1OptionOrdersPlaceApiRequest,
//   YapiPostV1OptionOrdersPlaceApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/option/orders/place",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
