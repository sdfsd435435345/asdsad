/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邀请返佣-金字塔返佣首次设置是否已读↗](https://yapi.nbttfc365.com/project/44/interface/api/18624) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/pyramid/firstSetting/read`
 * @更新时间 `2023-09-22 14:15:14`
 */
export interface YapiPostV1AgentPyramidFirstSettingReadApiRequest {}

/**
 * 接口 [邀请返佣-金字塔返佣首次设置是否已读↗](https://yapi.nbttfc365.com/project/44/interface/api/18624) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/pyramid/firstSetting/read`
 * @更新时间 `2023-09-22 14:15:14`
 */
export interface YapiPostV1AgentPyramidFirstSettingReadApiResponse {
  code: number
  message: string
  data: YapiPostV1AgentPyramidFirstSettingReadData
}
export interface YapiPostV1AgentPyramidFirstSettingReadData {
  /**
   * 操作是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邀请返佣-金字塔返佣首次设置是否已读↗](https://yapi.nbttfc365.com/project/44/interface/api/18624)
// **/
// export const postV1AgentPyramidFirstSettingReadApiRequest: MarkcoinRequest<
//   YapiPostV1AgentPyramidFirstSettingReadApiRequest,
//   YapiPostV1AgentPyramidFirstSettingReadApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/pyramid/firstSetting/read",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
