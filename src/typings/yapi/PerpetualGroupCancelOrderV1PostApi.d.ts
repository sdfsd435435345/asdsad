/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [撤销合约组所有委托↗](https://yapi.nbttfc365.com/project/44/interface/api/4351) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/cancelOrder`
 * @更新时间 `2023-01-30 16:34:24`
 */
export interface YapiPostV1PerpetualGroupCancelOrderApiRequest {
  groupId: string
}

/**
 * 接口 [撤销合约组所有委托↗](https://yapi.nbttfc365.com/project/44/interface/api/4351) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/cancelOrder`
 * @更新时间 `2023-01-30 16:34:24`
 */
export interface YapiPostV1PerpetualGroupCancelOrderApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualGroupCancelOrderData
}
export interface YapiPostV1PerpetualGroupCancelOrderData {
  /**
   * 是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [撤销合约组所有委托↗](https://yapi.nbttfc365.com/project/44/interface/api/4351)
// **/
// export const postV1PerpetualGroupCancelOrderApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualGroupCancelOrderApiRequest,
//   YapiPostV1PerpetualGroupCancelOrderApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/group/cancelOrder",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
