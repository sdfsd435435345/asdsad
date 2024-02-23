/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [修改子账户类型↗](https://yapi.nbttfc365.com/project/44/interface/api/9044) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/modifyAccountType`
 * @更新时间 `2023-06-20 16:08:03`
 */
export interface YapiPostV1PerpetualGroupModifyAccountTypeApiRequest {
  /**
   * 子账户id
   */
  groupId: string
  /**
   * 子账户类型：temporary：临时，immobilization：永久
   */
  accountType: string
}

/**
 * 接口 [修改子账户类型↗](https://yapi.nbttfc365.com/project/44/interface/api/9044) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/modifyAccountType`
 * @更新时间 `2023-06-20 16:08:03`
 */
export interface YapiPostV1PerpetualGroupModifyAccountTypeApiResponse {
  code: number
  message: string
  data: YapiPostV1PerpetualGroupModifyAccountTypeData
}
export interface YapiPostV1PerpetualGroupModifyAccountTypeData {
  /**
   * 是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [修改子账户类型↗](https://yapi.nbttfc365.com/project/44/interface/api/9044)
// **/
// export const postV1PerpetualGroupModifyAccountTypeApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualGroupModifyAccountTypeApiRequest,
//   YapiPostV1PerpetualGroupModifyAccountTypeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/group/modifyAccountType",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
