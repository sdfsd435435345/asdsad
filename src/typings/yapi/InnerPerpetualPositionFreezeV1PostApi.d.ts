/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [冻结仓位(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4023) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/position/freeze`
 * @更新时间 `2023-03-20 12:01:47`
 */
export interface YapiPostInnerV1PerpetualPositionFreezeApiRequest {
  /**
   * 商户id
   */
  businessId: number
  /**
   * 用户ID
   */
  uid: number
  /**
   * 合约组id
   */
  groupId: number
  /**
   * 仓位id
   */
  positionId: number
  /**
   * 冻结数量
   */
  freezeSize: number
  /**
   * 订单id
   */
  orderId: number
}

/**
 * 接口 [冻结仓位(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4023) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/position/freeze`
 * @更新时间 `2023-03-20 12:01:47`
 */
export interface YapiPostInnerV1PerpetualPositionFreezeApiResponse {
  isSuccess: boolean
  reason: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [冻结仓位(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4023)
// **/
// export const postInnerV1PerpetualPositionFreezeApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualPositionFreezeApiRequest,
//   YapiPostInnerV1PerpetualPositionFreezeApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/position/freeze",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
