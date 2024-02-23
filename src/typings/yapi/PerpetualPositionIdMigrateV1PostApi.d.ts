/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [仓位迁移↗](https://yapi.nbttfc365.com/project/44/interface/api/3663) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/position/{id}/migrate`
 * @更新时间 `2023-02-04 14:44:23`
 */
export interface YapiPostV1PerpetualPositionIdMigrateApiRequest {
  /**
   * 目标合约组id
   */
  targetGroupId: number
  /**
   * 数量
   */
  size: number
  /**
   * 迁移的额外保证金
   */
  assetsMargin: number
  /**
   * 仓位id
   */
  id: string
}

/**
 * 接口 [仓位迁移↗](https://yapi.nbttfc365.com/project/44/interface/api/3663) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/position/{id}/migrate`
 * @更新时间 `2023-02-04 14:44:23`
 */
export interface YapiPostV1PerpetualPositionIdMigrateApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1PerpetualPositionIdMigrateData
}
export interface YapiPostV1PerpetualPositionIdMigrateData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [仓位迁移↗](https://yapi.nbttfc365.com/project/44/interface/api/3663)
// **/
// export const postV1PerpetualPositionIdMigrateApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPositionIdMigrateApiRequest,
//   YapiPostV1PerpetualPositionIdMigrateApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/position/{id}/migrate",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
