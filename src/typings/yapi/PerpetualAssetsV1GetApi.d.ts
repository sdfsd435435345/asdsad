/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组维度资产查询(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3695) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/assets`
 * @更新时间 `2023-09-21 14:48:37`
 */
export interface YapiGetV1PerpetualAssetsApiRequest {
  /**
   * 合约组id
   */
  groupId?: string
  /**
   * 名称模糊搜索
   */
  nameLike?: string
}

/**
 * 接口 [合约组维度资产查询(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3695) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/assets`
 * @更新时间 `2023-09-21 14:48:37`
 */
export interface YapiGetV1PerpetualAssetsApiResponse {
  code?: number
  message?: string
  data?: {}
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组维度资产查询(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3695)
// **/
// export const getV1PerpetualAssetsApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualAssetsApiRequest,
//   YapiGetV1PerpetualAssetsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/assets",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
