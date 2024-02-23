/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [锁仓↗](https://yapi.nbttfc365.com/project/44/interface/api/3863) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/lock`
 * @更新时间 `2023-03-21 11:50:16`
 */
export interface YapiPostV1PerpetualPositionLockApiRequest {
  positionId: string
  groupId: string
  /**
   * 锁仓数量
   */
  size: string
  /**
   * 锁仓比例;传原始值,如果是10%,传"0.1"
   */
  percent: string
}

/**
 * 接口 [锁仓↗](https://yapi.nbttfc365.com/project/44/interface/api/3863) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/lock`
 * @更新时间 `2023-03-21 11:50:16`
 */
export interface YapiPostV1PerpetualPositionLockApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualPositionLockData
}
export interface YapiPostV1PerpetualPositionLockData {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [锁仓↗](https://yapi.nbttfc365.com/project/44/interface/api/3863)
// **/
// export const postV1PerpetualPositionLockApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPositionLockApiRequest,
//   YapiPostV1PerpetualPositionLockApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/position/lock",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
