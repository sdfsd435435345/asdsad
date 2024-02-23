/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [锁仓--检查能否锁仓↗](https://yapi.nbttfc365.com/project/44/interface/api/3971) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/checkLock`
 * @更新时间 `2023-01-31 23:27:30`
 */
export interface YapiPostV1PerpetualPositionCheckLockApiRequest {
  positionId: string
  groupId: string
}

/**
 * 接口 [锁仓--检查能否锁仓↗](https://yapi.nbttfc365.com/project/44/interface/api/3971) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/checkLock`
 * @更新时间 `2023-01-31 23:27:30`
 */
export interface YapiPostV1PerpetualPositionCheckLockApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualPositionCheckLockData
}
export interface YapiPostV1PerpetualPositionCheckLockData {
  /**
   * 检查是否通过
   */
  pass: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [锁仓--检查能否锁仓↗](https://yapi.nbttfc365.com/project/44/interface/api/3971)
// **/
// export const postV1PerpetualPositionCheckLockApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPositionCheckLockApiRequest,
//   YapiPostV1PerpetualPositionCheckLockApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/position/checkLock",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
