/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [当前的商家状态↗](https://yapi.nbttfc365.com/project/73/interface/api/5093) 的 **请求类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_565)
 * @请求头 `GET /v1/c2c/merchant/info`
 * @更新时间 `2023-04-04 12:13:50`
 */
export interface YapiGetV1C2cMerchantInfoApiRequest {}

/**
 * 接口 [当前的商家状态↗](https://yapi.nbttfc365.com/project/73/interface/api/5093) 的 **返回类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_565)
 * @请求头 `GET /v1/c2c/merchant/info`
 * @更新时间 `2023-04-04 12:13:50`
 */
export interface YapiGetV1C2cMerchantInfoApiResponse {
  code?: number
  data?: YapiGetV1C2CMerchantInfoData
  message?: string
}
export interface YapiGetV1C2CMerchantInfoData {
  merchantInfo?: YapiGetV1C2CMerchantInfoMerchantInfoData
  /**
   * applying= 商户申请审核中 enable= 正常商家 none= 当前不是商户，terminating =解除中
   */
  status?: string
}
/**
 * 当用户为正常商家时 ，该字段才会存在
 */
export interface YapiGetV1C2CMerchantInfoMerchantInfoData {
  /**
   * 法币市场
   */
  legalCurrencyIds?: string
  /**
   * 地址
   */
  address?: string
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 商户id
   */
  businessId?: number
  /**
   * 用户ID
   */
  uid?: number
  /**
   * 省份
   */
  province?: string
  /**
   * 紧急联系人关系
   */
  urgentRelation?: string
  /**
   * 手机号
   */
  phone?: string
  /**
   * 紧急联系人电话
   */
  urgentTel?: string
  /**
   * 身份证明图片地址
   */
  identityFileAddr?: string
  /**
   * 状态 enable: 正常，disable: 禁用交易，terminating:解除中，terminated：已解除
   */
  statusInd?: number
  /**
   * 申请冻结数量
   */
  freezeCount?: number
  /**
   * 紧急联系人名
   */
  urgentName?: string
  /**
   * 信誉额度
   */
  reputationVal?: number
  /**
   * 身份视频
   */
  identityVideoAddr?: string
  id?: number
  /**
   * 国家
   */
  region?: string
  /**
   * 冻结信誉额度
   */
  freezeReputationVal?: number
  /**
   * 邮箱
   */
  email?: string
  /**
   * 冻结的币种ID
   */
  freezeSymbolId?: number
  /**
   * 冻结的币种symbol
   */
  freezeSymbol: string
  /**
   * 上架中的广告数
   */
  onlineAdvertCount: number
  /**
   * 广告数
   */
  advertCount: number
  /**
   * 订单数
   */
  orderCount: number
  /**
   * 是否可以站外交易 1 是 2否
   */
  canOutTrade: number
  /**
   * 进行中的订单数
   */
  processingOrderCount: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [当前的商家状态↗](https://yapi.nbttfc365.com/project/73/interface/api/5093)
// **/
// export const getV1C2cMerchantInfoApiRequest: MarkcoinRequest<
//   YapiGetV1C2cMerchantInfoApiRequest,
//   YapiGetV1C2cMerchantInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/merchant/info",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [当前的商家状态↗](https://yapi.nbttfc365.com/project/77/interface/api/6619) 的 **请求类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_626)
 * @请求头 `GET /v1/c2c/merchant/info`
 * @更新时间 `2023-06-08 16:47:07`
 */
export interface YapiGetV1C2cMerchantInfoApiRequest {}

/**
 * 接口 [当前的商家状态↗](https://yapi.nbttfc365.com/project/77/interface/api/6619) 的 **返回类型**
 *
 * @分类 [商家↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_626)
 * @请求头 `GET /v1/c2c/merchant/info`
 * @更新时间 `2023-06-08 16:47:07`
 */
export interface YapiGetV1C2cMerchantInfoApiResponse {
  code?: number
  data?: YapiGetV1C2CMerchantInfoData
  message?: string
}
export interface YapiGetV1C2CMerchantInfoData {
  merchantInfo?: YapiGetV1C2CMerchantInfoMerchantInfoData
  /**
   * applying= 商户申请审核中 enable= 正常商家 none= 当前不是商户，terminating =解除中
   */
  status?: string
}
/**
 * 当用户为正常商家时 ，该字段才会存在
 */
export interface YapiGetV1C2CMerchantInfoMerchantInfoData {
  /**
   * 法币市场
   */
  legalCurrencyIds?: string
  /**
   * 地址
   */
  address?: string
  /**
   * 昵称
   */
  nickName?: string
  /**
   * 商户id
   */
  businessId?: number
  /**
   * 用户ID
   */
  uid?: number
  /**
   * 省份
   */
  province?: string
  /**
   * 紧急联系人关系
   */
  urgentRelation?: string
  /**
   * 手机号
   */
  phone?: string
  /**
   * 紧急联系人电话
   */
  urgentTel?: string
  /**
   * 身份证明图片地址
   */
  identityFileAddr?: string
  /**
   * 状态 enable: 正常，disable: 禁用交易，terminating:解除中，terminated：已解除
   */
  statusInd?: number
  /**
   * 申请冻结数量
   */
  freezeCount?: number
  /**
   * 紧急联系人名
   */
  urgentName?: string
  /**
   * 信誉额度
   */
  reputationVal?: number
  /**
   * 身份视频
   */
  identityVideoAddr?: string
  id?: number
  /**
   * 国家
   */
  region?: string
  /**
   * 冻结信誉额度
   */
  freezeReputationVal?: number
  /**
   * 邮箱
   */
  email?: string
  /**
   * 冻结的币种ID
   */
  freezeSymbolId?: number
  /**
   * 冻结的币种symbol
   */
  freezeSymbol: string
  /**
   * 上架中的广告数
   */
  onlineAdvertCount: number
  /**
   * 广告数
   */
  advertCount: number
  /**
   * 订单数
   */
  orderCount: number
  /**
   * 是否可以站外交易 1 是 2否
   */
  canOutTrade: number
  /**
   * 进行中的订单数
   */
  processingOrderCount: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [当前的商家状态↗](https://yapi.nbttfc365.com/project/77/interface/api/6619)
// **/
// export const getV1C2cMerchantInfoApiRequest: MarkcoinRequest<
//   YapiGetV1C2cMerchantInfoApiRequest,
//   YapiGetV1C2cMerchantInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/c2c/merchant/info",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
