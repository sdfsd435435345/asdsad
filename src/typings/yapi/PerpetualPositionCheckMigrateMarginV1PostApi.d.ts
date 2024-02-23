/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [仓位迁移--检查迁移的保证金↗](https://yapi.nbttfc365.com/project/44/interface/api/4359) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/checkMigrateMargin`
 * @更新时间 `2023-01-31 23:23:30`
 */
export interface YapiPostV1PerpetualPositionCheckMigrateMarginApiRequest {
  /**
   * 迁移的合约组
   */
  fromGroupId: string
  /**
   * 迁移的仓位id
   */
  positionId: string
  /**
   * 迁移数量
   */
  size: string
  /**
   * 迁移的保证金
   */
  margin: string
}

/**
 * 接口 [仓位迁移--检查迁移的保证金↗](https://yapi.nbttfc365.com/project/44/interface/api/4359) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/checkMigrateMargin`
 * @更新时间 `2023-01-31 23:23:30`
 */
export interface YapiPostV1PerpetualPositionCheckMigrateMarginApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualPositionCheckMigrateMarginData
}
export interface YapiPostV1PerpetualPositionCheckMigrateMarginData {
  /**
   * 检查通过
   */
  pass: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [仓位迁移--检查迁移的保证金↗](https://yapi.nbttfc365.com/project/44/interface/api/4359)
// **/
// export const postV1PerpetualPositionCheckMigrateMarginApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPositionCheckMigrateMarginApiRequest,
//   YapiPostV1PerpetualPositionCheckMigrateMarginApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/position/checkMigrateMargin",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
