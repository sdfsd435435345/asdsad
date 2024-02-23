/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取app马甲包(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/10989) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/common/app/vest`
 * @更新时间 `2023-09-19 14:12:05`
 */
export interface YapiGetV1CommonAppVestApiRequest {
  /**
   * 包名
   */
  packageName: string
}

/**
 * 接口 [获取app马甲包(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/10989) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/common/app/vest`
 * @更新时间 `2023-09-19 14:12:05`
 */
export interface YapiGetV1CommonAppVestApiResponse {
  /**
   * 返回code
   */
  code: number
  data: YapiGetV1CommonAppVestData
  /**
   * 返回信息
   */
  message: string
}
/**
 * 返回data
 */
export interface YapiGetV1CommonAppVestData {
  /**
   * app名称
   */
  appName: string
  /**
   * 包名
   */
  packageName: string
  /**
   * h5地址
   */
  h5Url: string
  /**
   * 变身密码
   */
  changePassword: string
  /**
   * 删除标识 1删除 2未删除
   */
  isDelete: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取app马甲包(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/10989)
// **/
// export const getV1CommonAppVestApiRequest: MarkcoinRequest<
//   YapiGetV1CommonAppVestApiRequest,
//   YapiGetV1CommonAppVestApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/common/app/vest",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
