/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [娱乐区用户常用金额设置↗](https://yapi.nbttfc365.com/project/44/interface/api/12134) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `POST /v1/ra/users/setting/amount`
 * @更新时间 `2023-08-21 14:02:16`
 */
export interface YapiPostV1RaUsersSettingAmountApiRequest {
  /**
   * 常用金额, 逗号分割
   */
  amounts: string
  /**
   * 项目id
   */
  projectId: number
}

/**
 * 接口 [娱乐区用户常用金额设置↗](https://yapi.nbttfc365.com/project/44/interface/api/12134) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `POST /v1/ra/users/setting/amount`
 * @更新时间 `2023-08-21 14:02:16`
 */
export interface YapiPostV1RaUsersSettingAmountApiResponse {
  code?: string
  message?: string
  data?: YapiPostV1RaUsersSettingAmountData
}
export interface YapiPostV1RaUsersSettingAmountData {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [娱乐区用户常用金额设置↗](https://yapi.nbttfc365.com/project/44/interface/api/12134)
// **/
// export const postV1RaUsersSettingAmountApiRequest: MarkcoinRequest<
//   YapiPostV1RaUsersSettingAmountApiRequest,
//   YapiPostV1RaUsersSettingAmountApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/ra/users/setting/amount",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
