/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [测试接口,与业务无关↗](https://yapi.nbttfc365.com/project/77/interface/api/7179) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/test/notice/send`
 * @更新时间 `2023-06-08 16:50:56`
 */
export interface YapiPostV1TestNoticeSendApiRequest {
  eventType: string
  businessId: number
  eventTime: number
  data: YapiPostV1TestNoticeSendApiRequestData
}
export interface YapiPostV1TestNoticeSendApiRequestData {
  fromUid: number
  amount: string
  symbol: string
  targetUid: number
}

/**
 * 接口 [测试接口,与业务无关↗](https://yapi.nbttfc365.com/project/77/interface/api/7179) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_642)
 * @请求头 `POST /v1/test/notice/send`
 * @更新时间 `2023-06-08 16:50:56`
 */
export interface YapiPostV1TestNoticeSendApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [测试接口,与业务无关↗](https://yapi.nbttfc365.com/project/77/interface/api/7179)
// **/
// export const postV1TestNoticeSendApiRequest: MarkcoinRequest<
//   YapiPostV1TestNoticeSendApiRequest,
//   YapiPostV1TestNoticeSendApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/test/notice/send",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [测试接口,与业务无关↗](https://yapi.nbttfc365.com/project/44/interface/api/3591) 的 **请求类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/test/notice/send`
 * @更新时间 `2023-08-03 15:36:25`
 */
export interface YapiPostV1TestNoticeSendApiRequest {
  eventType: string
  businessId: number
  eventTime: number
  data: YapiPostV1TestNoticeSendApiRequestData
}
export interface YapiPostV1TestNoticeSendApiRequestData {
  targetUid: number
}

/**
 * 接口 [测试接口,与业务无关↗](https://yapi.nbttfc365.com/project/44/interface/api/3591) 的 **返回类型**
 *
 * @分类 [站内信↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_524)
 * @请求头 `POST /v1/test/notice/send`
 * @更新时间 `2023-08-03 15:36:25`
 */
export interface YapiPostV1TestNoticeSendApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [测试接口,与业务无关↗](https://yapi.nbttfc365.com/project/44/interface/api/3591)
// **/
// export const postV1TestNoticeSendApiRequest: MarkcoinRequest<
//   YapiPostV1TestNoticeSendApiRequest,
//   YapiPostV1TestNoticeSendApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/test/notice/send",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
