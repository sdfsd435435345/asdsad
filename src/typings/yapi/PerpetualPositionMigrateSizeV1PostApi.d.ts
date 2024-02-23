/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [仓位迁移--获取能迁移的数量↗](https://yapi.nbttfc365.com/project/44/interface/api/3955) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/migrateSize`
 * @更新时间 `2023-02-04 10:26:20`
 */
export interface YapiPostV1PerpetualPositionMigrateSizeApiRequest {
  /**
   * 迁移的仓位id
   */
  positionId: string
  /**
   * 合约组id
   */
  fromGroupId: string
}

/**
 * 接口 [仓位迁移--获取能迁移的数量↗](https://yapi.nbttfc365.com/project/44/interface/api/3955) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/migrateSize`
 * @更新时间 `2023-02-04 10:26:20`
 */
export interface YapiPostV1PerpetualPositionMigrateSizeApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualPositionMigrateSizeData
}
export interface YapiPostV1PerpetualPositionMigrateSizeData {
  /**
   * 可迁移的数量
   */
  quantity: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [仓位迁移--获取能迁移的数量↗](https://yapi.nbttfc365.com/project/44/interface/api/3955)
// **/
// export const postV1PerpetualPositionMigrateSizeApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPositionMigrateSizeApiRequest,
//   YapiPostV1PerpetualPositionMigrateSizeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/position/migrateSize",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
