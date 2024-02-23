/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [删除合约组↗](https://yapi.nbttfc365.com/project/44/interface/api/9049) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/delete`
 * @更新时间 `2023-06-20 17:02:43`
 */
export interface YapiPostV1PerpetualGroupDeleteApiRequest {
  /**
   * 子账户id
   */
  groupId: string
}

/**
 * 接口 [删除合约组↗](https://yapi.nbttfc365.com/project/44/interface/api/9049) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/delete`
 * @更新时间 `2023-06-20 17:02:43`
 */
export interface YapiPostV1PerpetualGroupDeleteApiResponse {
  code: number
  message: string
  data: YapiPostV1PerpetualGroupDeleteData
}
export interface YapiPostV1PerpetualGroupDeleteData {
  /**
   * 是否成功
   */
  isSuccess: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除合约组↗](https://yapi.nbttfc365.com/project/44/interface/api/9049)
// **/
// export const postV1PerpetualGroupDeleteApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualGroupDeleteApiRequest,
//   YapiPostV1PerpetualGroupDeleteApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/group/delete",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
