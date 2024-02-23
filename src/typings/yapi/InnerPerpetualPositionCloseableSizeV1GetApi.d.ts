/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [仓位可平仓数量(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4019) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /inner/v1/perpetual/position/closeableSize`
 * @更新时间 `2023-02-05 22:02:17`
 */
export interface YapiGetInnerV1PerpetualPositionCloseableSizeApiRequest {
  /**
   * 用户id
   */
  uid: string
  /**
   * 合约组id
   */
  groupId: string
  /**
   * 仓位id
   */
  positionId: string
}

/**
 * 接口 [仓位可平仓数量(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4019) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /inner/v1/perpetual/position/closeableSize`
 * @更新时间 `2023-02-05 22:02:17`
 */
export interface YapiGetInnerV1PerpetualPositionCloseableSizeApiResponse {
  code: number
  msg: string
  data: YapiGetInnerV1PerpetualPositionCloseableSizeData
}
export interface YapiGetInnerV1PerpetualPositionCloseableSizeData {
  /**
   * 可平仓的数量
   */
  size: string
  /**
   * 方向;long,short
   */
  sideInd: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [仓位可平仓数量(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4019)
// **/
// export const getInnerV1PerpetualPositionCloseableSizeApiRequest: MarkcoinRequest<
//   YapiGetInnerV1PerpetualPositionCloseableSizeApiRequest,
//   YapiGetInnerV1PerpetualPositionCloseableSizeApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/perpetual/position/closeableSize",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
