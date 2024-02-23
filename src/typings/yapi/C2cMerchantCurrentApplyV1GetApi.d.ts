/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [当前的商家申请↗](https://yapi.nbttfc365.com/project/73/interface/api/4895) 的 **请求类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_565)
 * @请求头 `GET /v1/c2c/merchant/currentApply`
 * @更新时间 `2023-03-03 16:19:43`
 */
export interface YapiGetV1C2cMerchantCurrentApplyApiRequest {}

/**
 * 接口 [当前的商家申请↗](https://yapi.nbttfc365.com/project/73/interface/api/4895) 的 **返回类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_565)
 * @请求头 `GET /v1/c2c/merchant/currentApply`
 * @更新时间 `2023-03-03 16:19:43`
 */
export interface YapiGetV1C2cMerchantCurrentApplyApiResponse {
  code?: number
  data?: YapiGetV1C2CMerchantCurrentApplyData
}
export interface YapiGetV1C2CMerchantCurrentApplyData {
  id?: number
  businessId?: number
  uid?: number
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 手机
   */
  phone?: string
  /**
   * 邮箱
   */
  email?: string
  /**
   * 国家、地区
   */
  region?: string
  /**
   * 省份
   */
  province?: string
  /**
   * 地址
   */
  address?: string
  /**
   * 经济联系人名称
   */
  urgentName?: string
  /**
   * 紧急联系人关系
   */
  urgentRelation?: string
  /**
   * 紧急联系人电话
   */
  urgentTel?: string
  /**
   * 冻结金额
   */
  freezeCount?: number
  /**
   * 冻结币种ID
   */
  freezeSymbolId?: number
  /**
   * 申请信誉额度
   */
  reputationVal?: number
  /**
   * 申请法币市场（json类型[1,2,3]）
   */
  legalCurrencyIds?: string
  /**
   * 手持身份证明
   */
  identityFileAddr?: null
  /**
   * 身份视频
   */
  identityVideoAddr?: null
  /**
   * 申请状态（0:申请中 1:申请通过 2：申请拒绝）
   */
  applyInd?: number
  statusInd?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [当前的商家申请↗](https://yapi.nbttfc365.com/project/73/interface/api/4895)
// **/
// export const getV1C2cMerchantCurrentApplyApiRequest: MarkcoinRequest<
//   YapiGetV1C2cMerchantCurrentApplyApiRequest,
//   YapiGetV1C2cMerchantCurrentApplyApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/merchant/currentApply",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [当前的商家申请↗](https://yapi.nbttfc365.com/project/77/interface/api/6624) 的 **请求类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_626)
 * @请求头 `GET /v1/c2c/merchant/currentApply`
 * @更新时间 `2023-06-08 16:47:07`
 */
export interface YapiGetV1C2cMerchantCurrentApplyApiRequest {}

/**
 * 接口 [当前的商家申请↗](https://yapi.nbttfc365.com/project/77/interface/api/6624) 的 **返回类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_626)
 * @请求头 `GET /v1/c2c/merchant/currentApply`
 * @更新时间 `2023-06-08 16:47:07`
 */
export interface YapiGetV1C2cMerchantCurrentApplyApiResponse {
  code?: number
  data?: YapiGetV1C2CMerchantCurrentApplyData
}
export interface YapiGetV1C2CMerchantCurrentApplyData {
  id?: number
  businessId?: number
  uid?: number
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 手机
   */
  phone?: string
  /**
   * 邮箱
   */
  email?: string
  /**
   * 国家、地区
   */
  region?: string
  /**
   * 省份
   */
  province?: string
  /**
   * 地址
   */
  address?: string
  /**
   * 经济联系人名称
   */
  urgentName?: string
  /**
   * 紧急联系人关系
   */
  urgentRelation?: string
  /**
   * 紧急联系人电话
   */
  urgentTel?: string
  /**
   * 冻结金额
   */
  freezeCount?: number
  /**
   * 冻结币种ID
   */
  freezeSymbolId?: number
  /**
   * 申请信誉额度
   */
  reputationVal?: number
  /**
   * 申请法币市场（json类型[1,2,3]）
   */
  legalCurrencyIds?: string
  /**
   * 手持身份证明
   */
  identityFileAddr?: null
  /**
   * 身份视频
   */
  identityVideoAddr?: null
  /**
   * 申请状态（0:申请中 1:申请通过 2：申请拒绝）
   */
  applyInd?: number
  statusInd?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [当前的商家申请↗](https://yapi.nbttfc365.com/project/77/interface/api/6624)
// **/
// export const getV1C2cMerchantCurrentApplyApiRequest: MarkcoinRequest<
//   YapiGetV1C2cMerchantCurrentApplyApiRequest,
//   YapiGetV1C2cMerchantCurrentApplyApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/merchant/currentApply",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
