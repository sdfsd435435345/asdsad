/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取锁仓时间周期\/费率等设置↗](https://yapi.nbttfc365.com/project/44/interface/api/4219) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/lockPosition/setting`
 * @更新时间 `2023-01-18 11:00:49`
 */
export interface YapiGetV1PerpetualLockPositionSettingApiRequest {
  /**
   * 币对id
   */
  tradeId: string
}

/**
 * 接口 [获取锁仓时间周期\/费率等设置↗](https://yapi.nbttfc365.com/project/44/interface/api/4219) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/lockPosition/setting`
 * @更新时间 `2023-01-18 11:00:49`
 */
export interface YapiGetV1PerpetualLockPositionSettingApiResponse {
  code: number
  msg: string
  data: YapiGetV1PerpetualLockPositionSettingData
}
export interface YapiGetV1PerpetualLockPositionSettingData {
  /**
   * 时间段 单位min     5,10,15,20,25,30
   */
  interval: number
  /**
   * 费率比例
   */
  fees: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取锁仓时间周期/费率等设置↗](https://yapi.nbttfc365.com/project/44/interface/api/4219)
// **/
// export const getV1PerpetualLockPositionSettingApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualLockPositionSettingApiRequest,
//   YapiGetV1PerpetualLockPositionSettingApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/lockPosition/setting",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
