/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [风险账户接管(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4507) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/riskAccountTakeover`
 * @更新时间 `2023-02-11 16:36:16`
 */
export interface YapiPostV1PerpetualGroupRiskAccountTakeoverApiRequest {
  /**
   * 请求唯一标识
   */
  uuid: string
  /**
   * 用户id
   */
  uid: number
  /**
   * 合约组id
   */
  groupId: number
  /**
   * 风险账户id
   */
  takeover: {}
  /**
   * symbol
   */
  symbol?: string
}

/**
 * 接口 [风险账户接管(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4507) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/riskAccountTakeover`
 * @更新时间 `2023-02-11 16:36:16`
 */
export interface YapiPostV1PerpetualGroupRiskAccountTakeoverApiResponse {
  /**
   * 是否成功
   */
  isSuccess: boolean
  /**
   * 失败原因
   */
  reason: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [风险账户接管(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4507)
// **/
// export const postV1PerpetualGroupRiskAccountTakeoverApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualGroupRiskAccountTakeoverApiRequest,
//   YapiPostV1PerpetualGroupRiskAccountTakeoverApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/group/riskAccountTakeover",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
