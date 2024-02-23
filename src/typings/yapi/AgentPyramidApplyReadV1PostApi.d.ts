/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邀请返佣-金字塔返佣申请(未通过时)设置为已读↗](https://yapi.nbttfc365.com/project/44/interface/api/18494) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/pyramid/apply/read`
 * @更新时间 `2023-09-21 10:48:01`
 */
export interface YapiPostV1AgentPyramidApplyReadApiRequest {}

/**
 * 接口 [邀请返佣-金字塔返佣申请(未通过时)设置为已读↗](https://yapi.nbttfc365.com/project/44/interface/api/18494) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/pyramid/apply/read`
 * @更新时间 `2023-09-21 10:48:01`
 */
export interface YapiPostV1AgentPyramidApplyReadApiResponse {
  code: number
  message: string
  data: YapiPostV1AgentPyramidApplyReadData
}
export interface YapiPostV1AgentPyramidApplyReadData {
  /**
   * 操作是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邀请返佣-金字塔返佣申请(未通过时)设置为已读↗](https://yapi.nbttfc365.com/project/44/interface/api/18494)
// **/
// export const postV1AgentPyramidApplyReadApiRequest: MarkcoinRequest<
//   YapiPostV1AgentPyramidApplyReadApiRequest,
//   YapiPostV1AgentPyramidApplyReadApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/pyramid/apply/read",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
