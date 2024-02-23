/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组是否存在委托订单↗](https://yapi.nbttfc365.com/project/44/interface/api/4259) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/existEntrustOrder`
 * @更新时间 `2023-01-30 16:34:31`
 */
export interface YapiPostV1PerpetualGroupExistEntrustOrderApiRequest {
  groupId: string
}

/**
 * 接口 [合约组是否存在委托订单↗](https://yapi.nbttfc365.com/project/44/interface/api/4259) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/existEntrustOrder`
 * @更新时间 `2023-01-30 16:34:31`
 */
export interface YapiPostV1PerpetualGroupExistEntrustOrderApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualGroupExistEntrustOrderData
}
export interface YapiPostV1PerpetualGroupExistEntrustOrderData {
  /**
   * 是否存在
   */
  exist: boolean
  /**
   * 是否有锁仓
   */
  lock: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组是否存在委托订单↗](https://yapi.nbttfc365.com/project/44/interface/api/4259)
// **/
// export const postV1PerpetualGroupExistEntrustOrderApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualGroupExistEntrustOrderApiRequest,
//   YapiPostV1PerpetualGroupExistEntrustOrderApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/group/existEntrustOrder",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
