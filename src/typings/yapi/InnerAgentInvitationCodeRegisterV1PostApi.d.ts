/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [内部接口-注册生成邀请码↗](https://yapi.nbttfc365.com/project/44/interface/api/18514) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /inner/v1/agent/invitationCode/register`
 * @更新时间 `2023-10-11 10:50:35`
 */
export interface YapiPostInnerV1AgentInvitationCodeRegisterApiRequest {
  /**
   * 用户id
   */
  uid: number
  /**
   * 域名
   */
  domain: string
  /**
   * 邀请码
   */
  invitationCode: string
  /**
   * 商户id
   */
  businessId: number
  /**
   * 语言编码
   */
  language: string
}

/**
 * 接口 [内部接口-注册生成邀请码↗](https://yapi.nbttfc365.com/project/44/interface/api/18514) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /inner/v1/agent/invitationCode/register`
 * @更新时间 `2023-10-11 10:50:35`
 */
export interface YapiPostInnerV1AgentInvitationCodeRegisterApiResponse {
  /**
   * 是否成功
   */
  isSuccess: boolean
  /**
   * 原因
   */
  reason: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [内部接口-注册生成邀请码↗](https://yapi.nbttfc365.com/project/44/interface/api/18514)
// **/
// export const postInnerV1AgentInvitationCodeRegisterApiRequest: MarkcoinRequest<
//   YapiPostInnerV1AgentInvitationCodeRegisterApiRequest,
//   YapiPostInnerV1AgentInvitationCodeRegisterApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/agent/invitationCode/register",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
