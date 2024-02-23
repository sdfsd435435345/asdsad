/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [删除合约组(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/5494) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/group/delete`
 * @更新时间 `2023-03-16 10:55:02`
 */
export interface YapiPostInnerV1PerpetualGroupDeleteApiRequest {
  /**
   * 商户id
   */
  businessId: number
  /**
   * uid
   */
  uid: number
  /**
   * 合约组id
   */
  groupId: number
}

/**
 * 接口 [删除合约组(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/5494) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/group/delete`
 * @更新时间 `2023-03-16 10:55:02`
 */
export interface YapiPostInnerV1PerpetualGroupDeleteApiResponse {
  /**
   * 是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [删除合约组(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/5494)
// **/
// export const postInnerV1PerpetualGroupDeleteApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualGroupDeleteApiRequest,
//   YapiPostInnerV1PerpetualGroupDeleteApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/group/delete",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
