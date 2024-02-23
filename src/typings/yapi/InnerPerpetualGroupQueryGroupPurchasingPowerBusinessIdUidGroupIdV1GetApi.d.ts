/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [订单服务查询合约组可用保证金（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/4877) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /inner/v1/perpetual/group/queryGroupPurchasingPower/{businessId}/{uid}/{groupId}`
 * @更新时间 `2023-02-24 14:44:13`
 */
export interface YapiGetInnerV1PerpetualGroupQueryGroupPurchasingPowerBusinessIdUidGroupIdApiRequest {
  businessId: string
  uid: string
  groupId: string
}

/**
 * 接口 [订单服务查询合约组可用保证金（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/4877) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /inner/v1/perpetual/group/queryGroupPurchasingPower/{businessId}/{uid}/{groupId}`
 * @更新时间 `2023-02-24 14:44:13`
 */
export interface YapiGetInnerV1PerpetualGroupQueryGroupPurchasingPowerBusinessIdUidGroupIdApiResponse {
  /**
   * 合约组购买力
   */
  purchasingPower: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [订单服务查询合约组可用保证金（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/4877)
// **/
// export const getInnerV1PerpetualGroupQueryGroupPurchasingPowerBusinessIdUidGroupIdApiRequest: MarkcoinRequest<
//   YapiGetInnerV1PerpetualGroupQueryGroupPurchasingPowerBusinessIdUidGroupIdApiRequest,
//   YapiGetInnerV1PerpetualGroupQueryGroupPurchasingPowerBusinessIdUidGroupIdApiResponse['data']
// > = params => {
//   return request({
//     path: "/inner/v1/perpetual/group/queryGroupPurchasingPower/{businessId}/{uid}/{groupId}",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
