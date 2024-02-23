/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [设置营销邮件开关↗](https://yapi.nbttfc365.com/project/77/interface/api/7199) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/inbox/setting/marketingEmail`
 * @更新时间 `2023-06-08 16:50:57`
 */
export interface YapiPostV1InboxSettingMarketingEmailApiRequest {
  /**
   * 是否开启营销类邮件,1=开启; 2= 不开启
   */
  isOpenMarketingEmail?: number
}

/**
 * 接口 [设置营销邮件开关↗](https://yapi.nbttfc365.com/project/77/interface/api/7199) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/inbox/setting/marketingEmail`
 * @更新时间 `2023-06-08 16:50:57`
 */
export interface YapiPostV1InboxSettingMarketingEmailApiResponse {
  code?: number
  message?: string
  data: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [设置营销邮件开关↗](https://yapi.nbttfc365.com/project/77/interface/api/7199)
// **/
// export const postV1InboxSettingMarketingEmailApiRequest: MarkcoinRequest<
//   YapiPostV1InboxSettingMarketingEmailApiRequest,
//   YapiPostV1InboxSettingMarketingEmailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/inbox/setting/marketingEmail",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [设置营销邮件开关↗](https://yapi.nbttfc365.com/project/44/interface/api/3397) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/inbox/setting/marketingEmail`
 * @更新时间 `2022-11-21 10:00:11`
 */
export interface YapiPostV1InboxSettingMarketingEmailApiRequest {
  /**
   * 是否开启营销类邮件,1=开启; 2= 不开启
   */
  isOpenMarketingEmail?: number
}

/**
 * 接口 [设置营销邮件开关↗](https://yapi.nbttfc365.com/project/44/interface/api/3397) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/inbox/setting/marketingEmail`
 * @更新时间 `2022-11-21 10:00:11`
 */
export interface YapiPostV1InboxSettingMarketingEmailApiResponse {
  code?: number
  message?: string
  data: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [设置营销邮件开关↗](https://yapi.nbttfc365.com/project/44/interface/api/3397)
// **/
// export const postV1InboxSettingMarketingEmailApiRequest: MarkcoinRequest<
//   YapiPostV1InboxSettingMarketingEmailApiRequest,
//   YapiPostV1InboxSettingMarketingEmailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/inbox/setting/marketingEmail",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
