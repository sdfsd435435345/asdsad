/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理中心-邀请详情-导出Excel↗](https://yapi.nbttfc365.com/project/44/interface/api/18904) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/export/inviteeDetail`
 * @更新时间 `2023-10-10 14:57:53`
 */
export interface YapiPostV1AgentExportInviteeDetailApiRequest {
  /**
   * 被邀请的用户uid(模糊查询)
   */
  uid?: number
  /**
   * 模式
   */
  model?: string
  /**
   * 排序规则 1.正，2.倒
   */
  registerDateSort?: string
  /**
   * 排序字段 ，默认按时间倒序 可传字段：1 时间；2 邀请人数；3团队人数
   */
  sort?: number
  /**
   * 代理等级(区域代理字段)
   */
  rebateLevel?: number
  /**
   * 实名状态,1.是，2.否
   */
  isRealName?: number
  /**
   * 团队人数(低)
   */
  teamNumMin?: number
  /**
   * 团队人数(高)
   */
  teamNumMax?: number
  /**
   * 注册时间(起)
   */
  startTime?: number
  /**
   * 注册时间(止)
   */
  endTime?: number
}

/**
 * 接口 [代理中心-邀请详情-导出Excel↗](https://yapi.nbttfc365.com/project/44/interface/api/18904) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/export/inviteeDetail`
 * @更新时间 `2023-10-10 14:57:53`
 */
export interface YapiPostV1AgentExportInviteeDetailApiResponse {
  code?: number
  message?: string
  data?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理中心-邀请详情-导出Excel↗](https://yapi.nbttfc365.com/project/44/interface/api/18904)
// **/
// export const postV1AgentExportInviteeDetailApiRequest: MarkcoinRequest<
//   YapiPostV1AgentExportInviteeDetailApiRequest,
//   YapiPostV1AgentExportInviteeDetailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/export/inviteeDetail",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
