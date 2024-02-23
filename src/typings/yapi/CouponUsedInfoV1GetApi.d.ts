/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [优惠券使用详情↗](https://yapi.nbttfc365.com/project/44/interface/api/18964) 的 **请求类型**
 *
 * @分类 [优惠券↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1026)
 * @请求头 `GET /v1/coupon/usedInfo`
 * @更新时间 `2023-10-30 17:48:58`
 */
export interface YapiGetV1CouponUsedInfoApiRequest {
  /**
   * 订单来源ID
   */
  srcId?: string
  /**
   * 实际订单ID
   */
  orderId?: string
  /**
   * 卡券分类 字典值  见枚举
   */
  couponType?: string
  /**
   * 场景类型 字典值
   */
  businessScene?: string
}

/**
 * 接口 [优惠券使用详情↗](https://yapi.nbttfc365.com/project/44/interface/api/18964) 的 **返回类型**
 *
 * @分类 [优惠券↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1026)
 * @请求头 `GET /v1/coupon/usedInfo`
 * @更新时间 `2023-10-30 17:48:58`
 */
export interface YapiGetV1CouponUsedInfoApiResponse {
  /**
   * 200成功
   */
  code: number
  /**
   * 描述
   */
  message: string
  data: YapiGetV1CouponUsedInfoListData[]
}
export interface YapiGetV1CouponUsedInfoListData {
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
   * 实际订单ID
   */
  orderId: string
  /**
   * 活动名称
   */
  activityName?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [优惠券使用详情↗](https://yapi.nbttfc365.com/project/44/interface/api/18964)
// **/
// export const getV1CouponUsedInfoApiRequest: MarkcoinRequest<
//   YapiGetV1CouponUsedInfoApiRequest,
//   YapiGetV1CouponUsedInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/coupon/usedInfo",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
