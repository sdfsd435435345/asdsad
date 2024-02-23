/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-邀请明细-Ta的活跃度-用户信息↗](https://yapi.nbttfc365.com/project/44/interface/api/6004) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agent/activation/userInfo`
 * @更新时间 `2023-07-07 18:11:35`
 */
export interface YapiPostV1AgentActivationUserInfoApiRequest {
  /**
   * 邀请的uid
   */
  targetUid: number
}

/**
 * 接口 [代理商-邀请明细-Ta的活跃度-用户信息↗](https://yapi.nbttfc365.com/project/44/interface/api/6004) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agent/activation/userInfo`
 * @更新时间 `2023-07-07 18:11:35`
 */
export interface YapiPostV1AgentActivationUserInfoApiResponse {
  code: number
  message: string
  data: YapiPostV1AgentActivationUserInfoData
}
export interface YapiPostV1AgentActivationUserInfoData {
  /**
   * 返佣比例
   */
  ratios: YapiPostV1AgentActivationUserInfoListRatiosData[]
  /**
   * 用户呢称
   */
  nickName: string
  /**
   * uid
   */
  uid: number
  /**
   * 是否是代理商
   */
  isAgt: string
  /**
   * 1=未认证，2，标准认证，3，高级认证，4，企业认证
   */
  kycTypeInd: number
  /**
   * 邮箱
   */
  email: string
  /**
   * 手机号
   */
  mobileNumber: string
  /**
   * 注册时间
   */
  registerTime: number
}
export interface YapiPostV1AgentActivationUserInfoListRatiosData {
  /**
   * 产品线
   */
  productCd: string
  /**
   * 上级返佣比例
   */
  parentRatio: string
  /**
   * 自身返佣比例
   */
  selfRatio: string
  /**
   * 好友返佣比例
   */
  childRatio: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-邀请明细-Ta的活跃度-用户信息↗](https://yapi.nbttfc365.com/project/44/interface/api/6004)
// **/
// export const postV1AgentActivationUserInfoApiRequest: MarkcoinRequest<
//   YapiPostV1AgentActivationUserInfoApiRequest,
//   YapiPostV1AgentActivationUserInfoApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/activation/userInfo",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
