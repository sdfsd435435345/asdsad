/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询合约组剩余购买力信息↗](https://yapi.nbttfc365.com/project/44/interface/api/4255) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/queryPurchasingPower`
 * @更新时间 `2023-01-16 11:09:30`
 */
export interface YapiGetV1PerpetualGroupQueryPurchasingPowerApiRequest {
  /**
   * 合约组id
   */
  groupId: string
}

/**
 * 接口 [查询合约组剩余购买力信息↗](https://yapi.nbttfc365.com/project/44/interface/api/4255) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/queryPurchasingPower`
 * @更新时间 `2023-01-16 11:09:30`
 */
export interface YapiGetV1PerpetualGroupQueryPurchasingPowerApiResponse {
  code: string
  msg: string
  data: YapiGetV1PerpetualGroupQueryPurchasingPowerData
}
export interface YapiGetV1PerpetualGroupQueryPurchasingPowerData {
  /**
   * 合约组的剩余购买力
   */
  purchasingPower: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询合约组剩余购买力信息↗](https://yapi.nbttfc365.com/project/44/interface/api/4255)
// **/
// export const getV1PerpetualGroupQueryPurchasingPowerApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualGroupQueryPurchasingPowerApiRequest,
//   YapiGetV1PerpetualGroupQueryPurchasingPowerApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/group/queryPurchasingPower",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
