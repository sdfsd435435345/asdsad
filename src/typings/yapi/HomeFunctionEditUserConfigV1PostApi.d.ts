/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [首页-金刚区 编辑功能菜单↗](https://yapi.nbttfc365.com/project/44/interface/api/2747) 的 **请求类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `POST /v1/homeFunction/editUserConfig`
 * @更新时间 `2022-11-07 21:55:22`
 */
export interface YapiPostV1HomeFunctionEditUserConfigApiRequest {
  /**
   * 功能ID数组 比如 [1,2,3]
   */
  ids?: string[]
}

/**
 * 接口 [首页-金刚区 编辑功能菜单↗](https://yapi.nbttfc365.com/project/44/interface/api/2747) 的 **返回类型**
 *
 * @分类 [现货-行情↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_494)
 * @请求头 `POST /v1/homeFunction/editUserConfig`
 * @更新时间 `2022-11-07 21:55:22`
 */
export interface YapiPostV1HomeFunctionEditUserConfigApiResponse {
  /**
   * success
   */
  data: boolean
  code: string
  message: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [首页-金刚区 编辑功能菜单↗](https://yapi.nbttfc365.com/project/44/interface/api/2747)
// **/
// export const postV1HomeFunctionEditUserConfigApiRequest: MarkcoinRequest<
//   YapiPostV1HomeFunctionEditUserConfigApiRequest,
//   YapiPostV1HomeFunctionEditUserConfigApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/homeFunction/editUserConfig",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
