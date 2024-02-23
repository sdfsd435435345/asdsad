/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [（计划委托）新增计划委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/2666) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /v1/spl/saveStrategy`
 * @更新时间 `2023-10-25 14:03:26`
 */
export interface YapiPostV1SplSaveStrategyApiRequest {
  /**
   * 交易币对id（非空校验）
   */
  tradeId: number
  /**
   * 触发方式（1=标记，2=最新） code:trigger_type_ind（非空校验） 现货写死为2
   */
  triggerTypeInd: number
  /**
   * 触发价格（非空校验）
   */
  triggerPrice: number
  /**
   * 触发方向（1=向上，2=向下） code:trigger_direction_ind（非空校验）  此处注意：    向上 和 向下 这个方向是由前端开发人员 根据当前最新价格 和 用户在此处设置的触发价格 做对比得出，若当前价格 > 触发价格，方向为向下，当前价格 < 触发价格，方向为向上
   */
  triggerDirectionInd: number
  /**
   * 委托单类型 1买单 2卖单，来源于字典表type_cd（非空校验）
   */
  side: number
  /**
   * 撮合类型（非空校验） 1限价 2市价
   */
  matchType: number
  /**
   * 订单数量 当撮合类型为 市价的时候，此字段和下方orderPrice 2选1填写；当撮合类型为限价的时候，必传
   */
  orderAmount?: number
  /**
   * 订单价格 当撮合类型为 市价的时候，此字段和上方orderAmount 2选1填写；当撮合类型为限价的时候，必传
   */
  orderPrice?: number
  /**
   * 优惠券列表
   */
  coupons?: YapiPostV1SplSaveStrategyApiRequestListCoupons[]
}
export interface YapiPostV1SplSaveStrategyApiRequestListCoupons {
  /**
   * 卡券ID
   */
  couponId: number
  /**
   * 卡券类型码
   */
  couponCode: string
  /**
   * 卡券分类
   */
  couponType: string
}

/**
 * 接口 [（计划委托）新增计划委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/2666) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /v1/spl/saveStrategy`
 * @更新时间 `2023-10-25 14:03:26`
 */
export interface YapiPostV1SplSaveStrategyApiResponse {
  /**
   * 备注
   */
  msg?: string
  /**
   * CODE 200为成功
   */
  code?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [（计划委托）新增计划委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/2666)
// **/
// export const postV1SplSaveStrategyApiRequest: MarkcoinRequest<
//   YapiPostV1SplSaveStrategyApiRequest,
//   YapiPostV1SplSaveStrategyApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/spl/saveStrategy",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
