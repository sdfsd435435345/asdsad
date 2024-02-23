/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [仓位是否存在委托订单↗](https://yapi.nbttfc365.com/project/44/interface/api/3975) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/existEntrustOrder`
 * @更新时间 `2023-02-05 20:25:52`
 */
export interface YapiPostV1PerpetualPositionExistEntrustOrderApiRequest {
  groupId: string
  positionId: string
}

/**
 * 接口 [仓位是否存在委托订单↗](https://yapi.nbttfc365.com/project/44/interface/api/3975) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/position/existEntrustOrder`
 * @更新时间 `2023-02-05 20:25:52`
 */
export interface YapiPostV1PerpetualPositionExistEntrustOrderApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualPositionExistEntrustOrderData
}
export interface YapiPostV1PerpetualPositionExistEntrustOrderData {
  /**
   * 是否存在
   */
  exist: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [仓位是否存在委托订单↗](https://yapi.nbttfc365.com/project/44/interface/api/3975)
// **/
// export const postV1PerpetualPositionExistEntrustOrderApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPositionExistEntrustOrderApiRequest,
//   YapiPostV1PerpetualPositionExistEntrustOrderApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/position/existEntrustOrder",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
