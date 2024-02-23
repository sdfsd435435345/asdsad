/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邀请返佣-金字塔返佣申请↗](https://yapi.nbttfc365.com/project/44/interface/api/18424) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/pyramid/apply`
 * @更新时间 `2023-09-20 11:44:11`
 */
export interface YapiPostV1AgentPyramidApplyApiRequest {
  /**
   * 联系类型：1手机，2邮箱
   */
  contact: number
  /**
   * 联系方式,手机号或者邮箱
   */
  contactInformation: string
  /**
   * 手机区号
   */
  mobileCountryCd?: string
  /**
   * 社交媒体
   */
  socialMedia: string
  /**
   * 社交媒体账号
   */
  socialMediaInfo: string
  /**
   * 补充说明
   */
  content?: string
}

/**
 * 接口 [邀请返佣-金字塔返佣申请↗](https://yapi.nbttfc365.com/project/44/interface/api/18424) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/pyramid/apply`
 * @更新时间 `2023-09-20 11:44:11`
 */
export interface YapiPostV1AgentPyramidApplyApiResponse {
  code: number
  message: string
  data: YapiPostV1AgentPyramidApplyData
}
export interface YapiPostV1AgentPyramidApplyData {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邀请返佣-金字塔返佣申请↗](https://yapi.nbttfc365.com/project/44/interface/api/18424)
// **/
// export const postV1AgentPyramidApplyApiRequest: MarkcoinRequest<
//   YapiPostV1AgentPyramidApplyApiRequest,
//   YapiPostV1AgentPyramidApplyApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/pyramid/apply",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
