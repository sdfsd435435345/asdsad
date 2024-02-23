/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [设置通知类型↗](https://yapi.nbttfc365.com/project/77/interface/api/7194) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/inbox/setting/modules`
 * @更新时间 `2023-06-08 16:50:57`
 */
export interface YapiPostV1InboxSettingModulesApiRequest {
  /**
   * moduleIds表示打开的模块, 比如传[1,2,3]表示1,2,3模块打开,其他模块关闭
   */
  moduleIds: number[]
}

/**
 * 接口 [设置通知类型↗](https://yapi.nbttfc365.com/project/77/interface/api/7194) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/inbox/setting/modules`
 * @更新时间 `2023-06-08 16:50:57`
 */
export interface YapiPostV1InboxSettingModulesApiResponse {
  code?: number
  message?: string
  data: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [设置通知类型↗](https://yapi.nbttfc365.com/project/77/interface/api/7194)
// **/
// export const postV1InboxSettingModulesApiRequest: MarkcoinRequest<
//   YapiPostV1InboxSettingModulesApiRequest,
//   YapiPostV1InboxSettingModulesApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/inbox/setting/modules",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [设置通知类型↗](https://yapi.nbttfc365.com/project/44/interface/api/3392) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/inbox/setting/modules`
 * @更新时间 `2022-11-21 20:03:52`
 */
export interface YapiPostV1InboxSettingModulesApiRequest {
  /**
   * moduleIds表示打开的模块, 比如传[1,2,3]表示1,2,3模块打开,其他模块关闭
   */
  moduleIds: number[]
}

/**
 * 接口 [设置通知类型↗](https://yapi.nbttfc365.com/project/44/interface/api/3392) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/inbox/setting/modules`
 * @更新时间 `2022-11-21 20:03:52`
 */
export interface YapiPostV1InboxSettingModulesApiResponse {
  code?: number
  message?: string
  data: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [设置通知类型↗](https://yapi.nbttfc365.com/project/44/interface/api/3392)
// **/
// export const postV1InboxSettingModulesApiRequest: MarkcoinRequest<
//   YapiPostV1InboxSettingModulesApiRequest,
//   YapiPostV1InboxSettingModulesApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/inbox/setting/modules",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
