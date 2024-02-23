/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [申请成为商家↗](https://yapi.nbttfc365.com/project/73/interface/api/4595) 的 **请求类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_565)
 * @请求头 `POST /v1/c2c/merchant/apply`
 * @更新时间 `2023-03-06 17:00:10`
 */
export interface YapiPostV1C2cMerchantApplyApiRequest {
  /**
   * 昵称
   */
  nickName: string
  /**
   * 电话
   */
  phone: string
  /**
   * 邮箱
   */
  email: string
  /**
   * 申请法币市场（json类型[1,2,3]）
   */
  legalCurrencyIds: string
  /**
   * 申请冻结数量
   */
  freezeCount: number
  /**
   * 申请冻结币种
   */
  freezeSymbolId: number
  /**
   * 申请信誉额度
   */
  reputationVal: number
  /**
   * 省、市
   */
  province: string
  /**
   * 国家/地区
   */
  region: string
  /**
   * 详细地址
   */
  address: string
  /**
   * 手持身份证明
   */
  identityFileAddr: string
  /**
   * 身份视频
   */
  identityVideoAddr: string
  /**
   * 紧急联系人
   */
  urgentName: string
  /**
   * 与本人关系
   */
  urgentRelation: string
  /**
   * 紧急联系人电话
   */
  urgentTel: string
}

/**
 * 接口 [申请成为商家↗](https://yapi.nbttfc365.com/project/73/interface/api/4595) 的 **返回类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_565)
 * @请求头 `POST /v1/c2c/merchant/apply`
 * @更新时间 `2023-03-06 17:00:10`
 */
export interface YapiPostV1C2cMerchantApplyApiResponse {
  code?: number
  /**
   * sucess
   */
  data?: string
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [申请成为商家↗](https://yapi.nbttfc365.com/project/73/interface/api/4595)
// **/
// export const postV1C2cMerchantApplyApiRequest: MarkcoinRequest<
//   YapiPostV1C2cMerchantApplyApiRequest,
//   YapiPostV1C2cMerchantApplyApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/merchant/apply",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [申请成为商家↗](https://yapi.nbttfc365.com/project/77/interface/api/6629) 的 **请求类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_626)
 * @请求头 `POST /v1/c2c/merchant/apply`
 * @更新时间 `2023-06-08 16:47:07`
 */
export interface YapiPostV1C2cMerchantApplyApiRequest {
  /**
   * 昵称
   */
  nickName: string
  /**
   * 电话
   */
  phone: string
  /**
   * 邮箱
   */
  email: string
  /**
   * 申请法币市场（json类型[1,2,3]）
   */
  legalCurrencyIds: string
  /**
   * 申请冻结数量
   */
  freezeCount: number
  /**
   * 申请冻结币种
   */
  freezeSymbolId: number
  /**
   * 申请信誉额度
   */
  reputationVal: number
  /**
   * 省、市
   */
  province: string
  /**
   * 国家/地区
   */
  region: string
  /**
   * 详细地址
   */
  address: string
  /**
   * 手持身份证明
   */
  identityFileAddr: string
  /**
   * 身份视频
   */
  identityVideoAddr: string
  /**
   * 紧急联系人
   */
  urgentName: string
  /**
   * 与本人关系
   */
  urgentRelation: string
  /**
   * 紧急联系人电话
   */
  urgentTel: string
}

/**
 * 接口 [申请成为商家↗](https://yapi.nbttfc365.com/project/77/interface/api/6629) 的 **返回类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_626)
 * @请求头 `POST /v1/c2c/merchant/apply`
 * @更新时间 `2023-06-08 16:47:07`
 */
export interface YapiPostV1C2cMerchantApplyApiResponse {
  code?: number
  /**
   * sucess
   */
  data?: string
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [申请成为商家↗](https://yapi.nbttfc365.com/project/77/interface/api/6629)
// **/
// export const postV1C2cMerchantApplyApiRequest: MarkcoinRequest<
//   YapiPostV1C2cMerchantApplyApiRequest,
//   YapiPostV1C2cMerchantApplyApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/merchant/apply",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
