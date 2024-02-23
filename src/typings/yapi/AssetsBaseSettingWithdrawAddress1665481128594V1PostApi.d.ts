/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [设置常用提现地址_copy↗](https://yapi.nbttfc365.com/project/77/interface/api/8544) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/assets/base/setting/withdrawAddress_1665481128594`
 * @更新时间 `2023-06-08 16:52:48`
 */
export interface YapiPostV1AssetsBaseSettingWithdrawAddress_1665481128594ApiRequest {
  /**
   * 地址
   */
  address: string
  /**
   * 币种
   */
  coinId: number
  /**
   * 备注
   */
  remark?: string
}

/**
 * 接口 [设置常用提现地址_copy↗](https://yapi.nbttfc365.com/project/77/interface/api/8544) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/assets/base/setting/withdrawAddress_1665481128594`
 * @更新时间 `2023-06-08 16:52:48`
 */
export interface YapiPostV1AssetsBaseSettingWithdrawAddress_1665481128594ApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1AssetsBaseSettingWithdrawAddress_1665481128594Data
}
export interface YapiPostV1AssetsBaseSettingWithdrawAddress_1665481128594Data {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [设置常用提现地址_copy↗](https://yapi.nbttfc365.com/project/77/interface/api/8544)
// **/
// export const postV1AssetsBaseSettingWithdrawAddress_1665481128594ApiRequest: MarkcoinRequest<
//   YapiPostV1AssetsBaseSettingWithdrawAddress_1665481128594ApiRequest,
//   YapiPostV1AssetsBaseSettingWithdrawAddress_1665481128594ApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/assets/base/setting/withdrawAddress_1665481128594",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [设置常用提现地址_copy↗](https://yapi.nbttfc365.com/project/44/interface/api/2780) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/assets/base/setting/withdrawAddress_1665481128594`
 * @更新时间 `2022-10-11 17:38:48`
 */
export interface YapiPostV1AssetsBaseSettingWithdrawAddress_1665481128594ApiRequest {
  /**
   * 地址
   */
  address: string
  /**
   * 币种
   */
  coinId: number
  /**
   * 备注
   */
  remark?: string
}

/**
 * 接口 [设置常用提现地址_copy↗](https://yapi.nbttfc365.com/project/44/interface/api/2780) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/assets/base/setting/withdrawAddress_1665481128594`
 * @更新时间 `2022-10-11 17:38:48`
 */
export interface YapiPostV1AssetsBaseSettingWithdrawAddress_1665481128594ApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1AssetsBaseSettingWithdrawAddress_1665481128594Data
}
export interface YapiPostV1AssetsBaseSettingWithdrawAddress_1665481128594Data {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [设置常用提现地址_copy↗](https://yapi.nbttfc365.com/project/44/interface/api/2780)
// **/
// export const postV1AssetsBaseSettingWithdrawAddress_1665481128594ApiRequest: MarkcoinRequest<
//   YapiPostV1AssetsBaseSettingWithdrawAddress_1665481128594ApiRequest,
//   YapiPostV1AssetsBaseSettingWithdrawAddress_1665481128594ApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/assets/base/setting/withdrawAddress_1665481128594",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
