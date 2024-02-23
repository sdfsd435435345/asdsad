/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [撤消仓位的委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/4163) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/cancelEntrustOrder`
 * @更新时间 `2023-01-31 23:11:18`
 */
export interface YapiPostV1PerpetualPositionCancelEntrustOrderApiRequest {
  groupId: string
  positionId: string
}

/**
 * 接口 [撤消仓位的委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/4163) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/cancelEntrustOrder`
 * @更新时间 `2023-01-31 23:11:18`
 */
export interface YapiPostV1PerpetualPositionCancelEntrustOrderApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualPositionCancelEntrustOrderData
}
export interface YapiPostV1PerpetualPositionCancelEntrustOrderData {
  /**
   * 是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [撤消仓位的委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/4163)
// **/
// export const postV1PerpetualPositionCancelEntrustOrderApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPositionCancelEntrustOrderApiRequest,
//   YapiPostV1PerpetualPositionCancelEntrustOrderApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/position/cancelEntrustOrder",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
