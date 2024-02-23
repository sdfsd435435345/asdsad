/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [发布广告单↗](https://yapi.nbttfc365.com/project/73/interface/api/4535) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `POST /v1/c2c/advert/add`
 * @更新时间 `2023-08-15 11:28:31`
 */
export interface YapiPostV1C2cAdvertAddApiRequest {
  /**
   * 区域id
   */
  areaId: string
  /**
   * 币种id
   */
  coinId: string
  /**
   * 订单方向BUY买SELL卖
   */
  advertDirectCd: string
  /**
   * 交易类型INSIDE站内OUTSIDE站外
   */
  dealTypeCd: string
  /**
   * 主链类型--用于站外-买币和卖币(json数组)
   */
  chainAddress?: YapiPostV1C2CAdvertAddApiRequestListChainAddress[]
  /**
   * 价格（广告汇率）
   */
  price: number
  /**
   * 单笔限数-最小值
   */
  minAmount: number
  /**
   * 单笔限数-最大值
   */
  maxAmount: number
  /**
   * 有效期(天)比如 30天传30
   */
  validDays: number
  /**
   * 成单数大于
   */
  completedOrderCount: number
  /**
   * 认证等级(NONE不需要认证ELEMENTARY初级认证 SENIOR高级认证 ENTERPRISE企业认证)
   */
  certificationLevelCd: string
  /**
   * 备注
   */
  remark?: string
  /**
   * 购买数量（买币才需要）
   */
  quantity: number
  payments: YapiPostV1C2CAdvertAddApiRequestListPayments[]
  /**
   * 1:是，2:否
   */
  isPriceRemind: number
  /**
   * 价格波动低于目标值
   */
  minPriceRemind?: number
  /**
   * 价格波动高于目标值
   */
  maxPriceRemind?: number
}
export interface YapiPostV1C2CAdvertAddApiRequestListChainAddress {
  /**
   * 类型（对应mainType）
   */
  name?: string
  /**
   * 地址
   */
  address?: string
  /**
   * memo
   */
  memo?: string
  /**
   * id
   */
  id?: string
}
export interface YapiPostV1C2CAdvertAddApiRequestListPayments {
  /**
   * 支付类型BANK、WECHAT、ALIPAY
   */
  type: string
  /**
   * 支付方式对应的数据id(卖币才需要、买币不需要传)
   */
  id?: string
}

/**
 * 接口 [发布广告单↗](https://yapi.nbttfc365.com/project/73/interface/api/4535) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_556)
 * @请求头 `POST /v1/c2c/advert/add`
 * @更新时间 `2023-08-15 11:28:31`
 */
export interface YapiPostV1C2cAdvertAddApiResponse {
  code?: number
  data?: YapiPostV1C2CAdvertAddData
  message?: string
}
export interface YapiPostV1C2CAdvertAddData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [发布广告单↗](https://yapi.nbttfc365.com/project/73/interface/api/4535)
// **/
// export const postV1C2cAdvertAddApiRequest: MarkcoinRequest<
//   YapiPostV1C2cAdvertAddApiRequest,
//   YapiPostV1C2cAdvertAddApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/advert/add",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [发布广告单↗](https://yapi.nbttfc365.com/project/77/interface/api/6434) 的 **请求类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `POST /v1/c2c/advert/add`
 * @更新时间 `2023-06-08 16:46:55`
 */
export interface YapiPostV1C2cAdvertAddApiRequest {
  /**
   * 区域id
   */
  areaId: string
  /**
   * 币种id
   */
  coinId: string
  /**
   * 订单方向BUY买SELL卖
   */
  advertDirectCd: string
  /**
   * 交易类型INSIDE站内OUTSIDE站外
   */
  dealTypeCd: string
  /**
   * 主链类型--用于站外-买币和卖币(json数组)
   */
  chainAddress?: YapiPostV1C2CAdvertAddApiRequestListChainAddress[]
  /**
   * 价格（广告汇率）
   */
  price: number
  /**
   * 单笔限数-最小值
   */
  minAmount: number
  /**
   * 单笔限数-最大值
   */
  maxAmount: number
  /**
   * 有效期(天)比如 30天传30
   */
  validDays: number
  /**
   * 成单数大于
   */
  completedOrderCount: number
  /**
   * 认证等级(NONE不需要认证ELEMENTARY初级认证 SENIOR高级认证 ENTERPRISE企业认证)
   */
  certificationLevelCd: string
  /**
   * 备注
   */
  remark?: string
  /**
   * 购买数量（买币才需要）
   */
  quantity: number
  payments: YapiPostV1C2CAdvertAddApiRequestListPayments[]
}
export interface YapiPostV1C2CAdvertAddApiRequestListChainAddress {
  /**
   * 类型（对应mainType）
   */
  name?: string
  /**
   * 地址
   */
  address?: string
  /**
   * memo
   */
  memo?: string
  /**
   * id
   */
  id?: string
}
export interface YapiPostV1C2CAdvertAddApiRequestListPayments {
  /**
   * 支付类型BANK、WECHAT、ALIPAY
   */
  type: string
  /**
   * 支付方式对应的数据id(卖币才需要、买币不需要传)
   */
  id?: string
}

/**
 * 接口 [发布广告单↗](https://yapi.nbttfc365.com/project/77/interface/api/6434) 的 **返回类型**
 *
 * @分类 [广告↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_620)
 * @请求头 `POST /v1/c2c/advert/add`
 * @更新时间 `2023-06-08 16:46:55`
 */
export interface YapiPostV1C2cAdvertAddApiResponse {
  code?: number
  data?: YapiPostV1C2CAdvertAddData
  message?: string
}
export interface YapiPostV1C2CAdvertAddData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [发布广告单↗](https://yapi.nbttfc365.com/project/77/interface/api/6434)
// **/
// export const postV1C2cAdvertAddApiRequest: MarkcoinRequest<
//   YapiPostV1C2cAdvertAddApiRequest,
//   YapiPostV1C2cAdvertAddApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/advert/add",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
