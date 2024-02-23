/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [仓位是否存在↗](https://yapi.nbttfc365.com/project/44/interface/api/4323) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/checkExist`
 * @更新时间 `2023-01-31 23:29:34`
 */
export interface YapiPostV1PerpetualPositionCheckExistApiRequest {
  /**
   * 合约组id
   */
  groupId: string
  /**
   * 仓位id
   */
  positionId: string
}

/**
 * 接口 [仓位是否存在↗](https://yapi.nbttfc365.com/project/44/interface/api/4323) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/checkExist`
 * @更新时间 `2023-01-31 23:29:34`
 */
export interface YapiPostV1PerpetualPositionCheckExistApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualPositionCheckExistData
}
export interface YapiPostV1PerpetualPositionCheckExistData {
  exist: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [仓位是否存在↗](https://yapi.nbttfc365.com/project/44/interface/api/4323)
// **/
// export const postV1PerpetualPositionCheckExistApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPositionCheckExistApiRequest,
//   YapiPostV1PerpetualPositionCheckExistApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/position/checkExist",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
