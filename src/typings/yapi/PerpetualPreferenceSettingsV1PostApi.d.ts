/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [个人偏好设置↗](https://yapi.nbttfc365.com/project/44/interface/api/3635) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/preference/settings`
 * @更新时间 `2023-05-06 11:56:43`
 */
export interface YapiPostV1PerpetualPreferenceSettingsApiRequest {
  /**
   * 是否自动追加保证金  yes 是  no 否
   */
  isAutoAdd?: string
  /**
   * 是否自动转入额外保证金  yes 是  no 否
   */
  isAutoAddExtra?: string
  /**
   * 自动追加保证金 补齐保证金档位  低  70%  中 85%   高 100%  取值范围 (0-1]  例: 0.70
   */
  autoAddThreshold?: number
  /**
   * 保证金取回方式   auto 自动取回 , manual 手动取回
   */
  retrieveWay?: string
  /**
   * 价差保护   open 开启   close 关闭
   */
  protect?: string
  /**
   * 扣款是否均摊     yes 是  no 否
   */
  isAvg?: string
  /**
   *  开仓额外保证金来源   --wallet   资金账户      --group   合约组剩余额外保证金
   */
  marginSource?: string
  /**
   * 用户设置的自动追加保证金法币(USD)价值
   */
  autoAddQuota: number
  /**
   * 无保证金自动关闭逐仓,open 开启,close 关闭
   */
  autoCloseIsolatedPosition: string
}

/**
 * 接口 [个人偏好设置↗](https://yapi.nbttfc365.com/project/44/interface/api/3635) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/preference/settings`
 * @更新时间 `2023-05-06 11:56:43`
 */
export interface YapiPostV1PerpetualPreferenceSettingsApiResponse {
  code?: number
  msg?: string
  /**
   * true成功，其他失败
   */
  data?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [个人偏好设置↗](https://yapi.nbttfc365.com/project/44/interface/api/3635)
// **/
// export const postV1PerpetualPreferenceSettingsApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualPreferenceSettingsApiRequest,
//   YapiPostV1PerpetualPreferenceSettingsApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/preference/settings",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
