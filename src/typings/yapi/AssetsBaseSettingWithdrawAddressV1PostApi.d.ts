/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [设置常用提现地址↗](https://yapi.nbttfc365.com/project/44/interface/api/2708) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/assets/base/setting/withdrawAddress`
 * @更新时间 `2022-10-20 10:47:59`
 */
export interface YapiPostV1AssetsBaseSettingWithdrawAddressApiRequest {
  /**
   * 地址
   */
  address: string
  /**
   * 备注
   */
  remark?: string
  /**
   * 地址id，修改时必传
   */
  id?: string
}

/**
 * 接口 [设置常用提现地址↗](https://yapi.nbttfc365.com/project/44/interface/api/2708) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/assets/base/setting/withdrawAddress`
 * @更新时间 `2022-10-20 10:47:59`
 */
export interface YapiPostV1AssetsBaseSettingWithdrawAddressApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1AssetsBaseSettingWithdrawAddressData
}
export interface YapiPostV1AssetsBaseSettingWithdrawAddressData {
  isSuccess?: boolean
  /**
   * 错误提示，isSuccess为false时有值
   */
  errMsg?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [设置常用提现地址↗](https://yapi.nbttfc365.com/project/44/interface/api/2708)
// **/
// export const postV1AssetsBaseSettingWithdrawAddressApiRequest: MarkcoinRequest<
//   YapiPostV1AssetsBaseSettingWithdrawAddressApiRequest,
//   YapiPostV1AssetsBaseSettingWithdrawAddressApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/assets/base/setting/withdrawAddress",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
