/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [仓位迁移--检查最小持仓数量↗](https://yapi.nbttfc365.com/project/44/interface/api/3963) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/checkMinSize`
 * @更新时间 `2023-02-08 20:39:26`
 */
export interface YapiPostV1PerpetualPositionCheckMinSizeApiRequest {
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
}

/**
 * 接口 [仓位迁移--检查最小持仓数量↗](https://yapi.nbttfc365.com/project/44/interface/api/3963) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/checkMinSize`
 * @更新时间 `2023-02-08 20:39:26`
 */
export interface YapiPostV1PerpetualPositionCheckMinSizeApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualPositionCheckMinSizeData
}
export interface YapiPostV1PerpetualPositionCheckMinSizeData {
  /**
   * 检查通过
   */
  pass: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [仓位迁移--检查最小持仓数量↗](https://yapi.nbttfc365.com/project/44/interface/api/3963)
// **/
// export const postV1PerpetualPositionCheckMinSizeApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPositionCheckMinSizeApiRequest,
//   YapiPostV1PerpetualPositionCheckMinSizeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/position/checkMinSize",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
