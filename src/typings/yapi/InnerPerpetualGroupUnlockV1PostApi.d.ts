/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [强平取消合约组仓位锁仓(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4495) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/group/unlock`
 * @更新时间 `2023-02-13 14:56:30`
 */
export interface YapiPostInnerV1PerpetualGroupUnlockApiRequest {
  /**
   * uid
   */
  uid: number
  /**
   * 合约组id
   */
  groupId: number
  /**
   * 仓位id
   */
  businessId: number
}

/**
 * 接口 [强平取消合约组仓位锁仓(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4495) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/group/unlock`
 * @更新时间 `2023-02-13 14:56:30`
 */
export interface YapiPostInnerV1PerpetualGroupUnlockApiResponse {
  /**
   * 是否成功,true=成功,false=不成功
   */
  isSuccess: boolean
  /**
   * 失败原因
   */
  reason: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [强平取消合约组仓位锁仓(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4495)
// **/
// export const postInnerV1PerpetualGroupUnlockApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualGroupUnlockApiRequest,
//   YapiPostInnerV1PerpetualGroupUnlockApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/group/unlock",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
