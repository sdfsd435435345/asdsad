/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [上传文件↗](https://yapi.nbttfc365.com/project/77/interface/api/6799) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `POST /v1/storage/file/upload`
 * @更新时间 `2023-06-08 16:50:22`
 */
export interface YapiPostV1StorageFileUploadApiRequest {
  /**
   * base64
   */
  image: string
}

/**
 * 接口 [上传文件↗](https://yapi.nbttfc365.com/project/77/interface/api/6799) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `POST /v1/storage/file/upload`
 * @更新时间 `2023-06-08 16:50:22`
 */
export interface YapiPostV1StorageFileUploadApiResponse {
  /**
   * url地址
   */
  url: string
  /**
   * 节点域名
   */
  endpoint: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [上传文件↗](https://yapi.nbttfc365.com/project/77/interface/api/6799)
// **/
// export const postV1StorageFileUploadApiRequest: MarkcoinRequest<
//   YapiPostV1StorageFileUploadApiRequest,
//   YapiPostV1StorageFileUploadApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/storage/file/upload",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [上传文件↗](https://yapi.nbttfc365.com/project/44/interface/api/3357) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `POST /v1/storage/file/upload`
 * @更新时间 `2022-11-07 20:31:43`
 */
export interface YapiPostV1StorageFileUploadApiRequest {
  /**
   * base64
   */
  image: string
}

/**
 * 接口 [上传文件↗](https://yapi.nbttfc365.com/project/44/interface/api/3357) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `POST /v1/storage/file/upload`
 * @更新时间 `2022-11-07 20:31:43`
 */
export interface YapiPostV1StorageFileUploadApiResponse {
  /**
   * url地址
   */
  url: string
  /**
   * 节点域名
   */
  endpoint: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [上传文件↗](https://yapi.nbttfc365.com/project/44/interface/api/3357)
// **/
// export const postV1StorageFileUploadApiRequest: MarkcoinRequest<
//   YapiPostV1StorageFileUploadApiRequest,
//   YapiPostV1StorageFileUploadApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/storage/file/upload",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
