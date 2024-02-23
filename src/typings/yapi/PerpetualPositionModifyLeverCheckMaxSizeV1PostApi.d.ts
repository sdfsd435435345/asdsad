/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [修改仓位杠杆倍数检查最大持仓量↗](https://yapi.nbttfc365.com/project/44/interface/api/5869) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/modifyLever/checkMaxSize`
 * @更新时间 `2023-05-25 15:31:32`
 */
export interface YapiPostV1PerpetualPositionModifyLeverCheckMaxSizeApiRequest {
  /**
   * 合约组id
   */
  groupId: string
  /**
   * 仓位Id
   */
  positionId: string
  /**
   * 杠杆倍数
   */
  lever: string
}

/**
 * 接口 [修改仓位杠杆倍数检查最大持仓量↗](https://yapi.nbttfc365.com/project/44/interface/api/5869) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/modifyLever/checkMaxSize`
 * @更新时间 `2023-05-25 15:31:32`
 */
export interface YapiPostV1PerpetualPositionModifyLeverCheckMaxSizeApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualPositionModifyLeverCheckMaxSizeData
}
export interface YapiPostV1PerpetualPositionModifyLeverCheckMaxSizeData {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [修改仓位杠杆倍数检查最大持仓量↗](https://yapi.nbttfc365.com/project/44/interface/api/5869)
// **/
// export const postV1PerpetualPositionModifyLeverCheckMaxSizeApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPositionModifyLeverCheckMaxSizeApiRequest,
//   YapiPostV1PerpetualPositionModifyLeverCheckMaxSizeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/position/modifyLever/checkMaxSize",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
