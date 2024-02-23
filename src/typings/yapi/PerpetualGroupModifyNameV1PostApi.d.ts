/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [修改合约组名称↗](https://yapi.nbttfc365.com/project/44/interface/api/5629) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/modifyName`
 * @更新时间 `2023-04-26 18:08:02`
 */
export interface YapiPostV1PerpetualGroupModifyNameApiRequest {
  /**
   * 合约组id
   */
  groupId: string
  /**
   * 合约组名称
   */
  name: string
}

/**
 * 接口 [修改合约组名称↗](https://yapi.nbttfc365.com/project/44/interface/api/5629) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/modifyName`
 * @更新时间 `2023-04-26 18:08:02`
 */
export interface YapiPostV1PerpetualGroupModifyNameApiResponse {
  code: number
  msg: string
  data: YapiPostV1PerpetualGroupModifyNameData
}
export interface YapiPostV1PerpetualGroupModifyNameData {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [修改合约组名称↗](https://yapi.nbttfc365.com/project/44/interface/api/5629)
// **/
// export const postV1PerpetualGroupModifyNameApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualGroupModifyNameApiRequest,
//   YapiPostV1PerpetualGroupModifyNameApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/group/modifyName",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
