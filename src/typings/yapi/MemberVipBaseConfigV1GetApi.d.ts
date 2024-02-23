/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [会员等级基础配置信息获取-x详情↗](https://yapi.nbttfc365.com/project/44/interface/api/18854) 的 **请求类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /v1/member/vip/base/config`
 * @更新时间 `2023-10-12 11:32:28`
 */
export interface YapiGetV1MemberVipBaseConfigApiRequest {
  /**
   * 查询等级
   */
  levelCode: string
}

/**
 * 接口 [会员等级基础配置信息获取-x详情↗](https://yapi.nbttfc365.com/project/44/interface/api/18854) 的 **返回类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /v1/member/vip/base/config`
 * @更新时间 `2023-10-12 11:32:28`
 */
export interface YapiGetV1MemberVipBaseConfigApiResponse {
  code: number
  data: YapiGetV1MemberVipBaseConfigData
  message?: string
}
export interface YapiGetV1MemberVipBaseConfigData {
  /**
   * 保护期
   */
  period: number
  /**
   * 下一等级
   */
  nextLevelCode: string
  /**
   * 是否保护中
   */
  protecting: boolean
  /**
   * 字典配置，等级状态：arrive已到达、current当前等级、notArrived未到达
   */
  levelStatus: string
  /**
   * 近30天衍生品交易量 包含哪些产品，字典值，可多选，用逗号分隔，例如 perpetual 合约，option 三元期权，ra 娱乐区
   */
  derivatives: string[]
  levelCondition: YapiGetV1MemberVipBaseConfigLevelConditionData
  /**
   * 等级费率
   */
  feeList: YapiGetV1MemberVipBaseConfigListFeeListData[]
  vipBenefits: YapiGetV1MemberVipBaseConfigListVipBenefitsData[]
}
/**
 * 升级条件
 */
export interface YapiGetV1MemberVipBaseConfigLevelConditionData {
  /**
   * 近30天现货交易量 usd
   */
  spotAmount: number
  /**
   * 近30天衍生品交易量 usd
   */
  derivativesAmount: number
  /**
   * 资产余额 usd
   */
  balanceAmount: number
  /**
   * 近30天现货交易量 usd，开关，开enable 关disable
   */
  spotAmountCalStatus: string
  /**
   * 近30天衍生品交易量 usd，开关，开enable 关disable
   */
  derivativesAmountCalStatus: string
  /**
   * 资产余额 usd，开关，开enable 关disable
   */
  balanceAmountCalStatus: string
}
export interface YapiGetV1MemberVipBaseConfigListFeeListData {
  /**
   * 产品线：spot现货、perpetual合约
   */
  productCd: string
  /**
   * Maker费率折扣率%
   */
  makerFee: number
  /**
   * Taker费率折扣率%
   */
  takerFee: number
  /**
   * 下一等级maker费率折扣率%
   */
  nextMakerFee: number
  /**
   * 下一等级Taker费率折扣率%
   */
  nextTakerFee: number
}
export interface YapiGetV1MemberVipBaseConfigListVipBenefitsData {
  /**
   * 权益名称,字典值，多语言
   */
  benefitCode: string
  benefitId: string
  /**
   * 图片路径，存储到aws bulket
   */
  benefitIcon: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [会员等级基础配置信息获取-x详情↗](https://yapi.nbttfc365.com/project/44/interface/api/18854)
// **/
// export const getV1MemberVipBaseConfigApiRequest: MarkcoinRequest<
//   YapiGetV1MemberVipBaseConfigApiRequest,
//   YapiGetV1MemberVipBaseConfigApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/vip/base/config",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
