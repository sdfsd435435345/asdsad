/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [仓位迁移--获取能迁移的保证金↗](https://yapi.nbttfc365.com/project/44/interface/api/3959) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/migrateMargin`
 * @更新时间 `2023-02-04 10:26:34`
 */
export interface YapiPostV1PerpetualPositionMigrateMarginApiRequest {
  /**
   * 迁移的仓位id
   */
  positionId: string
  fromGroupId: string
  /**
   * 迁移数量
   */
  size: string
}

/**
 * 接口 [仓位迁移--获取能迁移的保证金↗](https://yapi.nbttfc365.com/project/44/interface/api/3959) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/migrateMargin`
 * @更新时间 `2023-02-04 10:26:34`
 */
export interface YapiPostV1PerpetualPositionMigrateMarginApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualPositionMigrateMarginData
}
export interface YapiPostV1PerpetualPositionMigrateMarginData {
  /**
   * 最小可用迁移的保证金
   */
  min: string
  /**
   * 最大可迁移的值
   */
  max: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [仓位迁移--获取能迁移的保证金↗](https://yapi.nbttfc365.com/project/44/interface/api/3959)
// **/
// export const postV1PerpetualPositionMigrateMarginApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPositionMigrateMarginApiRequest,
//   YapiPostV1PerpetualPositionMigrateMarginApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/position/migrateMargin",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
