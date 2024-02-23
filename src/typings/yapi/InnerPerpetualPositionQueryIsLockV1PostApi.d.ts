/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询是否有锁仓的仓位(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4868) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/position/queryIsLock`
 * @更新时间 `2023-02-24 14:47:16`
 */
export interface YapiPostInnerV1PerpetualPositionQueryIsLockApiRequest {
  /**
   * 商户id
   */
  businessId: number
  /**
   * 用户id
   */
  uid: number
  /**
   * 商户id
   */
  groupId: number
  /**
   * 交易对id
   */
  tradeId: number
  /**
   * 方向(多=long, 空=short)
   */
  sideInd: string
  /**
   * 杠杆
   */
  lever: number
}

/**
 * 接口 [查询是否有锁仓的仓位(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4868) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/position/queryIsLock`
 * @更新时间 `2023-02-24 14:47:16`
 */
export interface YapiPostInnerV1PerpetualPositionQueryIsLockApiResponse {
  /**
   * 锁仓=true, 未锁仓=false
   */
  isLock: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询是否有锁仓的仓位(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4868)
// **/
// export const postInnerV1PerpetualPositionQueryIsLockApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualPositionQueryIsLockApiRequest,
//   YapiPostInnerV1PerpetualPositionQueryIsLockApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/position/queryIsLock",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
