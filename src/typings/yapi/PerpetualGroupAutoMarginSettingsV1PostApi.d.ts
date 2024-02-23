/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组追加保证金设置↗](https://yapi.nbttfc365.com/project/44/interface/api/4031) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/group/autoMargin/settings`
 * @更新时间 `2023-02-02 15:05:08`
 */
export interface YapiPostV1PerpetualGroupAutoMarginSettingsApiRequest {
  /**
   * 合约组追加保证金设置数据
   */
  groupAutoMarginSettingData: YapiPostV1PerpetualGroupAutoMarginSettingsApiRequestListGroupAutoMarginSettingData[]
}
export interface YapiPostV1PerpetualGroupAutoMarginSettingsApiRequestListGroupAutoMarginSettingData {
  /**
   * 合约组ID
   */
  groupId: string
  /**
   * 是否追击保证金，yes，追加，no，不追加
   */
  isAutoAdd: string
}

/**
 * 接口 [合约组追加保证金设置↗](https://yapi.nbttfc365.com/project/44/interface/api/4031) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/group/autoMargin/settings`
 * @更新时间 `2023-02-02 15:05:08`
 */
export interface YapiPostV1PerpetualGroupAutoMarginSettingsApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  message: string
  /**
   * true，成功，false，失败
   */
  data: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组追加保证金设置↗](https://yapi.nbttfc365.com/project/44/interface/api/4031)
// **/
// export const postV1PerpetualGroupAutoMarginSettingsApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualGroupAutoMarginSettingsApiRequest,
//   YapiPostV1PerpetualGroupAutoMarginSettingsApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/group/autoMargin/settings",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
