/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组修改是否强平状态（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/3871) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/group/updateStatus`
 * @更新时间 `2023-01-29 11:09:47`
 */
export interface YapiPostInnerV1PerpetualGroupUpdateStatusApiRequest {
  groupId: number
  uid: number
  /**
   * yes/no
   */
  isBankrupt: string
}

/**
 * 接口 [合约组修改是否强平状态（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/3871) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/group/updateStatus`
 * @更新时间 `2023-01-29 11:09:47`
 */
export interface YapiPostInnerV1PerpetualGroupUpdateStatusApiResponse {
  code: number
  msg: string
  data: YapiPostInnerV1PerpetualGroupUpdateStatusData
}
export interface YapiPostInnerV1PerpetualGroupUpdateStatusData {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组修改是否强平状态（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/3871)
// **/
// export const postInnerV1PerpetualGroupUpdateStatusApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualGroupUpdateStatusApiRequest,
//   YapiPostInnerV1PerpetualGroupUpdateStatusApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/group/updateStatus",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
