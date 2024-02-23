/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询合约组剩余购买力信息(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/3827) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /inner/v1/perpetual/group/queryPurchasingPower/{businessId}/{uid}/{groupId}`
 * @更新时间 `2023-01-16 11:13:40`
 */
export interface YapiGetInnerV1PerpetualGroupQueryPurchasingPowerBusinessIdUidGroupIdApiRequest {
  businessId: string
  uid: string
  groupId: string
}

/**
 * 接口 [查询合约组剩余购买力信息(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/3827) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /inner/v1/perpetual/group/queryPurchasingPower/{businessId}/{uid}/{groupId}`
 * @更新时间 `2023-01-16 11:13:40`
 */
export interface YapiGetInnerV1PerpetualGroupQueryPurchasingPowerBusinessIdUidGroupIdApiResponse {
  code: string
  msg: string
  data: YapiGetInnerV1PerpetualGroupQueryPurchasingPowerBusinessIdUidGroupIdData
}
export interface YapiGetInnerV1PerpetualGroupQueryPurchasingPowerBusinessIdUidGroupIdData {
  /**
   * 合约组的剩余购买力
   */
  purchasingPower: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询合约组剩余购买力信息(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/3827)
// **/
// export const getInnerV1PerpetualGroupQueryPurchasingPowerBusinessIdUidGroupIdApiRequest: MarkcoinRequest<
//   YapiGetInnerV1PerpetualGroupQueryPurchasingPowerBusinessIdUidGroupIdApiRequest,
//   YapiGetInnerV1PerpetualGroupQueryPurchasingPowerBusinessIdUidGroupIdApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/perpetual/group/queryPurchasingPower/{businessId}/{uid}/{groupId}",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
