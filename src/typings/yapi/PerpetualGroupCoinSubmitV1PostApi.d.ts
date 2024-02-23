/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组保证金提取(过期）↗](https://yapi.nbttfc365.com/project/44/interface/api/4179) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/coin/submit`
 * @更新时间 `2023-04-26 16:54:06`
 */
export interface YapiPostV1PerpetualGroupCoinSubmitApiRequest {
  /**
   * 合约组id
   */
  groupId: string
  /**
   * 币种id
   */
  coinId: string
  /**
   * 数量
   */
  amount: string
}

/**
 * 接口 [合约组保证金提取(过期）↗](https://yapi.nbttfc365.com/project/44/interface/api/4179) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/coin/submit`
 * @更新时间 `2023-04-26 16:54:06`
 */
export interface YapiPostV1PerpetualGroupCoinSubmitApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualGroupCoinSubmitData
}
export interface YapiPostV1PerpetualGroupCoinSubmitData {
  /**
   * 是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组保证金提取(过期）↗](https://yapi.nbttfc365.com/project/44/interface/api/4179)
// **/
// export const postV1PerpetualGroupCoinSubmitApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualGroupCoinSubmitApiRequest,
//   YapiPostV1PerpetualGroupCoinSubmitApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/group/coin/submit",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
