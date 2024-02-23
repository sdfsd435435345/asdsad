/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [锁仓--计算锁仓费用等信息↗](https://yapi.nbttfc365.com/project/44/interface/api/3867) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/lockFee`
 * @更新时间 `2023-01-31 23:28:40`
 */
export interface YapiPostV1PerpetualPositionLockFeeApiRequest {
  /**
   * 仓位id
   */
  positionId: string
  groupId: string
  /**
   * 锁仓数量
   */
  size: string
}

/**
 * 接口 [锁仓--计算锁仓费用等信息↗](https://yapi.nbttfc365.com/project/44/interface/api/3867) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/lockFee`
 * @更新时间 `2023-01-31 23:28:40`
 */
export interface YapiPostV1PerpetualPositionLockFeeApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualPositionLockFeeData
}
export interface YapiPostV1PerpetualPositionLockFeeData {
  /**
   * 本次手续费
   */
  fee: string
  /**
   * 下次收费时间
   */
  nextTime: number
  /**
   * 预计锁仓费用
   */
  predictFee: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [锁仓--计算锁仓费用等信息↗](https://yapi.nbttfc365.com/project/44/interface/api/3867)
// **/
// export const postV1PerpetualPositionLockFeeApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPositionLockFeeApiRequest,
//   YapiPostV1PerpetualPositionLockFeeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/position/lockFee",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
