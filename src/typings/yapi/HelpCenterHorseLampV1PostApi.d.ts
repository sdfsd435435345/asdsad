/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [公告中心的跑马灯↗](https://yapi.nbttfc365.com/project/77/interface/api/7319) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `POST /v1/helpCenter/horseLamp`
 * @更新时间 `2023-06-08 16:51:05`
 */
export interface YapiPostV1HelpCenterHorseLampApiRequest {
  /**
   * 1.获取首页的跑马灯 2.获取首页以外的跑马灯
   */
  operateType: number
  /**
   * 币对的表示 spot现货 swap 合约 两者传一个
   */
  symbol: string
  /**
   * 币对的id集合
   */
  coindIdList: string[]
}

/**
 * 接口 [公告中心的跑马灯↗](https://yapi.nbttfc365.com/project/77/interface/api/7319) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_644)
 * @请求头 `POST /v1/helpCenter/horseLamp`
 * @更新时间 `2023-06-08 16:51:05`
 */
export interface YapiPostV1HelpCenterHorseLampApiResponse {
  lampList?: YapiPostV1HelpCenterHorseLampListLampList[]
}
export interface YapiPostV1HelpCenterHorseLampListLampList {
  /**
   * 公告的id
   */
  id: string
  /**
   * 是否可以所有全部现货1.是 2否
   */
  ifViewAllSpot: number
  /**
   * 是否可以所有全部合约1是 2否
   */
  ifViewAllSwap: number
  /**
   * 标题
   */
  name: string
  spotList: number[]
  /**
   * 支持合约的集合
   */
  swapList: number[]
  /**
   * 创建的时间
   */
  pushTime: string
  parentId: string
  /**
   * 1为强制弹窗
   */
  forceViewModal: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [公告中心的跑马灯↗](https://yapi.nbttfc365.com/project/77/interface/api/7319)
// **/
// export const postV1HelpCenterHorseLampApiRequest: MarkcoinRequest<
//   YapiPostV1HelpCenterHorseLampApiRequest,
//   YapiPostV1HelpCenterHorseLampApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/helpCenter/horseLamp",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [公告中心的跑马灯↗](https://yapi.nbttfc365.com/project/44/interface/api/3002) 的 **请求类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `POST /v1/helpCenter/horseLamp`
 * @更新时间 `2023-08-23 18:05:18`
 */
export interface YapiPostV1HelpCenterHorseLampApiRequest {
  /**
   * 1.获取首页的跑马灯 2.获取首页以外的跑马灯
   */
  operateType: number
  /**
   * 币对的表示 spot现货 swap 合约 两者传一个
   */
  symbol: string
  /**
   * 币对的id集合
   */
  coindIdList: string[]
  /**
   * 目录ID
   */
  parentId?: string
}

/**
 * 接口 [公告中心的跑马灯↗](https://yapi.nbttfc365.com/project/44/interface/api/3002) 的 **返回类型**
 *
 * @分类 [帮助中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_500)
 * @请求头 `POST /v1/helpCenter/horseLamp`
 * @更新时间 `2023-08-23 18:05:18`
 */
export interface YapiPostV1HelpCenterHorseLampApiResponse {
  lampList?: YapiPostV1HelpCenterHorseLampListLampList[]
}
export interface YapiPostV1HelpCenterHorseLampListLampList {
  /**
   * 公告的id
   */
  id: string
  /**
   * 是否可以所有全部现货1.是 2否
   */
  ifViewAllSpot: number
  /**
   * 是否可以所有全部合约1是 2否
   */
  ifViewAllSwap: number
  /**
   * 标题
   */
  name: string
  spotList: number[]
  /**
   * 支持合约的集合
   */
  swapList: number[]
  /**
   * 创建的时间
   */
  pushTime: string
  parentId: string
  /**
   * 1为强制弹窗
   */
  forceViewModal: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [公告中心的跑马灯↗](https://yapi.nbttfc365.com/project/44/interface/api/3002)
// **/
// export const postV1HelpCenterHorseLampApiRequest: MarkcoinRequest<
//   YapiPostV1HelpCenterHorseLampApiRequest,
//   YapiPostV1HelpCenterHorseLampApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/helpCenter/horseLamp",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
