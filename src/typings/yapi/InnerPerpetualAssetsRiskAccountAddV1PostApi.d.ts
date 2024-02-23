/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [风险保证金账户增加余额↗](https://yapi.nbttfc365.com/project/44/interface/api/5914) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/assets/riskAccount/add`
 * @更新时间 `2023-06-01 15:15:45`
 */
export interface YapiPostInnerV1PerpetualAssetsRiskAccountAddApiRequest {
  /**
   * 商户id
   */
  businessId: number
  /**
   * 账号uid
   */
  uid: number
  /**
   * 合约组id
   */
  groupId: number
  /**
   * 增加金额（USD）
   */
  amount: number
}

/**
 * 接口 [风险保证金账户增加余额↗](https://yapi.nbttfc365.com/project/44/interface/api/5914) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/assets/riskAccount/add`
 * @更新时间 `2023-06-01 15:15:45`
 */
export interface YapiPostInnerV1PerpetualAssetsRiskAccountAddApiResponse {
  code: number
  message: string
  data: YapiPostInnerV1PerpetualAssetsRiskAccountAddData
}
export interface YapiPostInnerV1PerpetualAssetsRiskAccountAddData {
  /**
   * 是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [风险保证金账户增加余额↗](https://yapi.nbttfc365.com/project/44/interface/api/5914)
// **/
// export const postInnerV1PerpetualAssetsRiskAccountAddApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualAssetsRiskAccountAddApiRequest,
//   YapiPostInnerV1PerpetualAssetsRiskAccountAddApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/assets/riskAccount/add",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
