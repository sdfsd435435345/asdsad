/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取娱乐区用户常用金额设置↗](https://yapi.nbttfc365.com/project/44/interface/api/12139) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/users/setting/getAmount`
 * @更新时间 `2023-08-21 14:02:29`
 */
export interface YapiGetV1RaUsersSettingGetAmountApiRequest {
  /**
   * 项目id
   */
  projectId: string
}

/**
 * 接口 [获取娱乐区用户常用金额设置↗](https://yapi.nbttfc365.com/project/44/interface/api/12139) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/users/setting/getAmount`
 * @更新时间 `2023-08-21 14:02:29`
 */
export interface YapiGetV1RaUsersSettingGetAmountApiResponse {
  code?: string
  message?: string
  data?: YapiGetV1RaUsersSettingGetAmountData
}
export interface YapiGetV1RaUsersSettingGetAmountData {
  /**
   * 常用金额, 逗号分隔
   */
  amounts: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取娱乐区用户常用金额设置↗](https://yapi.nbttfc365.com/project/44/interface/api/12139)
// **/
// export const getV1RaUsersSettingGetAmountApiRequest: MarkcoinRequest<
//   YapiGetV1RaUsersSettingGetAmountApiRequest,
//   YapiGetV1RaUsersSettingGetAmountApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/users/setting/getAmount",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
