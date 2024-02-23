/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [仓位迁移--检查是否有同方向同杠杆的持仓↗](https://yapi.nbttfc365.com/project/44/interface/api/3967) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/checkMerge`
 * @更新时间 `2023-06-27 16:33:32`
 */
export interface YapiPostV1PerpetualPositionCheckMergeApiRequest {
  /**
   * 迁移的仓位id
   */
  positionId: string
  fromGroupId: string
  /**
   * 目标合约组
   */
  toGroupId: string
}

/**
 * 接口 [仓位迁移--检查是否有同方向同杠杆的持仓↗](https://yapi.nbttfc365.com/project/44/interface/api/3967) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/checkMerge`
 * @更新时间 `2023-06-27 16:33:32`
 */
export interface YapiPostV1PerpetualPositionCheckMergeApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualPositionCheckMergeData
}
export interface YapiPostV1PerpetualPositionCheckMergeData {
  /**
   * true=存在同方向同杠杆的持仓
   */
  exist: boolean
  /**
   * true=目标合约组是处于锁仓状态
   */
  lock: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [仓位迁移--检查是否有同方向同杠杆的持仓↗](https://yapi.nbttfc365.com/project/44/interface/api/3967)
// **/
// export const postV1PerpetualPositionCheckMergeApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPositionCheckMergeApiRequest,
//   YapiPostV1PerpetualPositionCheckMergeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/position/checkMerge",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
