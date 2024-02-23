/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组持仓详情↗](https://yapi.nbttfc365.com/project/44/interface/api/4227) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/position`
 * @更新时间 `2023-02-01 11:34:15`
 */
export interface YapiGetV1PerpetualGroupPositionApiRequest {
  /**
   * 合约组id
   */
  groupId: string
}

/**
 * 接口 [合约组持仓详情↗](https://yapi.nbttfc365.com/project/44/interface/api/4227) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/position`
 * @更新时间 `2023-02-01 11:34:15`
 */
export interface YapiGetV1PerpetualGroupPositionApiResponse {
  code: number
  message: string
  data: YapiGetV1PerpetualGroupPositionData
}
export interface YapiGetV1PerpetualGroupPositionData {
  list: string[]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组持仓详情↗](https://yapi.nbttfc365.com/project/44/interface/api/4227)
// **/
// export const getV1PerpetualGroupPositionApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualGroupPositionApiRequest,
//   YapiGetV1PerpetualGroupPositionApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/group/position",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
