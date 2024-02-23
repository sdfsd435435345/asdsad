/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [平仓时-亏损校验-合约组额外保证金↗](https://yapi.nbttfc365.com/project/44/interface/api/4886) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/queryGroupPurchasingPower`
 * @更新时间 `2023-02-24 17:56:58`
 */
export interface YapiGetV1PerpetualGroupQueryGroupPurchasingPowerApiRequest {
  /**
   * 合约组id
   */
  groupId: string
}

/**
 * 接口 [平仓时-亏损校验-合约组额外保证金↗](https://yapi.nbttfc365.com/project/44/interface/api/4886) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/queryGroupPurchasingPower`
 * @更新时间 `2023-02-24 17:56:58`
 */
export interface YapiGetV1PerpetualGroupQueryGroupPurchasingPowerApiResponse {
  code: number
  message: string
  data: YapiGetV1PerpetualGroupQueryGroupPurchasingPowerData
}
export interface YapiGetV1PerpetualGroupQueryGroupPurchasingPowerData {
  /**
   * 剩余购买力
   */
  purchasingPower: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [平仓时-亏损校验-合约组额外保证金↗](https://yapi.nbttfc365.com/project/44/interface/api/4886)
// **/
// export const getV1PerpetualGroupQueryGroupPurchasingPowerApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualGroupQueryGroupPurchasingPowerApiRequest,
//   YapiGetV1PerpetualGroupQueryGroupPurchasingPowerApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/group/queryGroupPurchasingPower",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
