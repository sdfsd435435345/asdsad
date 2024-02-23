/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [仓位迁移↗](https://yapi.nbttfc365.com/project/44/interface/api/3859) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/migrate`
 * @更新时间 `2023-07-05 17:53:14`
 */
export interface YapiPostV1PerpetualPositionMigrateApiRequest {
  /**
   * 迁移的仓位id
   */
  positionId: string
  /**
   * 迁移的合约组
   */
  fromGroupId: string
  /**
   * 目标合约组
   */
  toGroupId?: string
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
 * 接口 [仓位迁移↗](https://yapi.nbttfc365.com/project/44/interface/api/3859) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/migrate`
 * @更新时间 `2023-07-05 17:53:14`
 */
export interface YapiPostV1PerpetualPositionMigrateApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualPositionMigrateData
}
export interface YapiPostV1PerpetualPositionMigrateData {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [仓位迁移↗](https://yapi.nbttfc365.com/project/44/interface/api/3859)
// **/
// export const postV1PerpetualPositionMigrateApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPositionMigrateApiRequest,
//   YapiPostV1PerpetualPositionMigrateApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/position/migrate",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
