/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合并合约组↗](https://yapi.nbttfc365.com/project/44/interface/api/3831) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/merge`
 * @更新时间 `2023-02-01 10:47:01`
 */
export interface YapiPostV1PerpetualGroupMergeApiRequest {
  /**
   * 原始合约组id
   */
  fromGroupId: string
  /**
   * 目标合约组id
   */
  toGroupId: string
}

/**
 * 接口 [合并合约组↗](https://yapi.nbttfc365.com/project/44/interface/api/3831) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/merge`
 * @更新时间 `2023-02-01 10:47:01`
 */
export interface YapiPostV1PerpetualGroupMergeApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualGroupMergeData
}
export interface YapiPostV1PerpetualGroupMergeData {
  /**
   * 是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合并合约组↗](https://yapi.nbttfc365.com/project/44/interface/api/3831)
// **/
// export const postV1PerpetualGroupMergeApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualGroupMergeApiRequest,
//   YapiPostV1PerpetualGroupMergeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/group/merge",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
