/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [会员基本信息获取↗](https://yapi.nbttfc365.com/project/44/interface/api/18794) 的 **请求类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /v1/member/vip/base/info`
 * @更新时间 `2023-10-26 15:00:06`
 */
export interface YapiGetV1MemberVipBaseInfoApiRequest {}

/**
 * 接口 [会员基本信息获取↗](https://yapi.nbttfc365.com/project/44/interface/api/18794) 的 **返回类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /v1/member/vip/base/info`
 * @更新时间 `2023-10-26 15:00:06`
 */
export interface YapiGetV1MemberVipBaseInfoApiResponse {
  /**
   * 当前用户会员等级
   */
  levelCode: string
  level: string
  /**
   * 会员装扮
   */
  avatarIcon: string
  /**
   * 保护天数
   */
  protectDay: number
  /**
   * 会员近30天现货交易量 usd
   */
  vipSpotAmount: number
  /**
   * 会员近30天衍生品交易量 usd
   */
  vipDerivativesAmount: number
  /**
   * 会员资产余额 usd
   */
  vipBalanceAmount: number
  /**
   * 等级费率
   */
  feeList: YapiGetV1MemberVipBaseInfoListFeeList[]
  /**
   * 会员权益
   */
  vipBenefits: YapiGetV1MemberVipBaseInfoListVipBenefits[]
  /**
   * 娱乐区跳转链接：临时
   */
  raJumpLink: string
}
export interface YapiGetV1MemberVipBaseInfoListFeeList {
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
export interface YapiGetV1MemberVipBaseInfoListVipBenefits {
  /**
   * 权益名称,字典值，多语言
   */
  benefitCode: string
  benefitId: number
  /**
   * 图片路径，存储到aws bulket
   */
  benefitIcon: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [会员基本信息获取↗](https://yapi.nbttfc365.com/project/44/interface/api/18794)
// **/
// export const getV1MemberVipBaseInfoApiRequest: MarkcoinRequest<
//   YapiGetV1MemberVipBaseInfoApiRequest,
//   YapiGetV1MemberVipBaseInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/vip/base/info",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
