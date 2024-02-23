/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [根据uid获取用户详情↗](https://yapi.nbttfc365.com/project/77/interface/api/8299) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/base/info`
 * @更新时间 `2023-06-08 16:52:16`
 */
export interface YapiGetV1MemberBaseInfoApiRequest {}

/**
 * 接口 [根据uid获取用户详情↗](https://yapi.nbttfc365.com/project/77/interface/api/8299) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `GET /v1/member/base/info`
 * @更新时间 `2023-06-08 16:52:16`
 */
export interface YapiGetV1MemberBaseInfoApiResponse {
  code?: number
  data?: YapiGetV1MemberBaseInfoData
  message?: string
}
export interface YapiGetV1MemberBaseInfoData {
  /**
   * 商户的id
   */
  businessId?: number
  /**
   * 合约交易状态 1 可合约交易、2 不可合约交易
   */
  contractStatusInd?: number
  /**
   * 充提状态 1=可充币不可提币；2=可提币不可充币；3=不可充提币；
   */
  deWStatusInd?: number
  /**
   * 邮箱号
   */
  email?: string
  /**
   * 主键id
   */
  id?: number
  /**
   * 是否已经删除的标志位
   */
  isDelete?: number
  /**
   * 是否启用邮箱验证 1 已开启 ， 2 未开启
   */
  isOpenEmailVerify?: number
  /**
   * 是否启用google验证 1 已开启 ， 2 未开启
   */
  isOpenGoogleVerify?: number
  /**
   * 是否启用手机验证 1 已开启 ， 2 未开启
   */
  isOpenPhoneVerify?: number
  /**
   * 注册的账号
   */
  regAccount?: string
  /**
   * 注册国籍 字典表编码
   */
  regCountryCd?: string
  /**
   * 注册方式 1=邮箱注册；2=console台注册；3=手机号注册；4=appid注册；5=google注册
   */
  regTypeInd?: number
  /**
   * 重置密码特殊限制到期时间
   */
  rsPwdLimitExpDate?: string
  /**
   * 重置密码特殊限制 1=已限制24小时； 2=无限制
   */
  rsPwdLimitInd?: number
  /**
   * 重置安全项特殊限制 到期时间
   */
  rsSafeLimitExpDate?: string
  /**
   * 重置安全项特殊限制 1=限制48小时；2=无限制；
   */
  rsSafeLimitInd?: number
  /**
   * 是否已设置昵称 1 ture 2 false
   */
  setNicknameInd?: number
  /**
   * 是否设置了交易密码1=true 2=false
   */
  setTradePwdInd: number
  /**
   * 现货交易状态 1 可买可卖、2 不可买可卖、3 不可卖可买
   */
  spotStatusInd?: number
  /**
   * 用户状态 1 正常，2 失效
   */
  statusInd?: number
  /**
   * 用户的uid
   */
  uid?: number
  /**
   * 版本号
   */
  version?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [根据uid获取用户详情↗](https://yapi.nbttfc365.com/project/77/interface/api/8299)
// **/
// export const getV1MemberBaseInfoApiRequest: MarkcoinRequest<
//   YapiGetV1MemberBaseInfoApiRequest,
//   YapiGetV1MemberBaseInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/base/info",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [根据uid获取用户详情↗](https://yapi.nbttfc365.com/project/44/interface/api/2576) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/base/info`
 * @更新时间 `2023-10-18 11:38:52`
 */
export interface YapiGetV1MemberBaseInfoApiRequest {}

/**
 * 接口 [根据uid获取用户详情↗](https://yapi.nbttfc365.com/project/44/interface/api/2576) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `GET /v1/member/base/info`
 * @更新时间 `2023-10-18 11:38:52`
 */
export interface YapiGetV1MemberBaseInfoApiResponse {
  code?: number
  data?: YapiGetV1MemberBaseInfoData
  message?: string
}
export interface YapiGetV1MemberBaseInfoData {
  /**
   * 商户的id
   */
  businessId?: number
  /**
   * 合约交易状态 1 可合约交易、2 不可合约交易
   */
  contractStatusInd?: number
  /**
   * 充提状态 1=可充币不可提币；2=可提币不可充币；3=不可充提币；
   */
  deWStatusInd?: number
  /**
   * 邮箱号
   */
  email?: string
  /**
   * 主键id
   */
  id?: number
  /**
   * 是否已经删除的标志位
   */
  isDelete?: number
  /**
   * 是否启用邮箱验证 1 已开启 ， 2 未开启
   */
  isOpenEmailVerify?: number
  /**
   * 是否启用google验证 1 已开启 ， 2 未开启
   */
  isOpenGoogleVerify?: number
  /**
   * 是否启用手机验证 1 已开启 ， 2 未开启
   */
  isOpenPhoneVerify?: number
  /**
   * 注册的账号
   */
  regAccount?: string
  /**
   * 注册国籍 字典表编码
   */
  regCountryCd?: string
  /**
   * 注册方式 1=邮箱注册；2=console台注册；3=手机号注册；4=appid注册；5=google注册
   */
  regTypeInd?: number
  /**
   * 重置密码特殊限制到期时间
   */
  rsPwdLimitExpDate?: string
  /**
   * 重置密码特殊限制 1=已限制24小时； 2=无限制
   */
  rsPwdLimitInd?: number
  /**
   * 重置安全项特殊限制 到期时间
   */
  rsSafeLimitExpDate?: string
  /**
   * 重置安全项特殊限制 1=限制48小时；2=无限制；
   */
  rsSafeLimitInd?: number
  /**
   * 是否已设置昵称 1 ture 2 false
   */
  setNicknameInd?: number
  /**
   * 是否设置了交易密码1=true 2=false
   */
  setTradePwdInd: number
  /**
   * 现货交易状态 1 可买可卖、2 不可买可卖、3 不可卖可买
   */
  spotStatusInd?: number
  /**
   * 用户状态 1 正常，2 失效
   */
  statusInd?: number
  /**
   * 用户的uid
   */
  uid?: number
  /**
   * 版本号
   */
  version?: number
  /**
   * 三方谷歌账号
   */
  googleAccount?: string
  /**
   * 三方apple账号
   */
  appleAccount?: string
  /**
   * 是否绑定三方苹果登录
   */
  thirdAppleBind?: boolean
  /**
   * 是否绑定三方google登录
   */
  thirdGoogleBind?: boolean
  /**
   * 头像地址
   */
  avatarPath?: string
  /**
   * 昵称修改次数
   */
  nickNameChangeTime?: number
  /**
   * 头像修改次数
   */
  avatarChangeTime?: number
  /**
   * 个人简介
   */
  introduction?: string
  /**
   * 会员等级
   */
  levelCode?: string
  /**
   * 是否允许修改
   */
  avatarApprove?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [根据uid获取用户详情↗](https://yapi.nbttfc365.com/project/44/interface/api/2576)
// **/
// export const getV1MemberBaseInfoApiRequest: MarkcoinRequest<
//   YapiGetV1MemberBaseInfoApiRequest,
//   YapiGetV1MemberBaseInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/member/base/info",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
