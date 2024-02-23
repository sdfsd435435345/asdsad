/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [新建合约组(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/3823) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/group/create`
 * @更新时间 `2023-06-19 17:55:31`
 */
export interface YapiPostInnerV1PerpetualGroupCreateApiRequest {
  /**
   * 是否自动追加保证金
   */
  isAutoAdd: boolean
  businessId: number
  uid: number
  /**
   * 账户类型：temporary:临时，immobilization：长期
   */
  accountType: string
}

/**
 * 接口 [新建合约组(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/3823) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/group/create`
 * @更新时间 `2023-06-19 17:55:31`
 */
export interface YapiPostInnerV1PerpetualGroupCreateApiResponse {
  code: number
  msg: string
  data: YapiPostInnerV1PerpetualGroupCreateData
}
export interface YapiPostInnerV1PerpetualGroupCreateData {
  /**
   * 合约组id
   */
  groupId: number
  /**
   * 合约组名字
   */
  groupName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [新建合约组(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/3823)
// **/
// export const postInnerV1PerpetualGroupCreateApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualGroupCreateApiRequest,
//   YapiPostInnerV1PerpetualGroupCreateApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/group/create",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
