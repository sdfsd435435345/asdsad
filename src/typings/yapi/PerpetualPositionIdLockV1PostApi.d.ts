/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [一键锁仓(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3659) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/position/{id}/lock`
 * @更新时间 `2023-09-19 11:34:36`
 */
export interface YapiPostV1PerpetualPositionIdLockApiRequest {
  /**
   * 仓位id
   */
  id: string
}

/**
 * 接口 [一键锁仓(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3659) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/position/{id}/lock`
 * @更新时间 `2023-09-19 11:34:36`
 */
export interface YapiPostV1PerpetualPositionIdLockApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1PerpetualPositionIdLockData
}
export interface YapiPostV1PerpetualPositionIdLockData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [一键锁仓(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3659)
// **/
// export const postV1PerpetualPositionIdLockApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPositionIdLockApiRequest,
//   YapiPostV1PerpetualPositionIdLockApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/position/{id}/lock",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
