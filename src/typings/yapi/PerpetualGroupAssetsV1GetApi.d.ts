/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约资产↗](https://yapi.nbttfc365.com/project/44/interface/api/4171) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/assets`
 * @更新时间 `2023-01-28 15:24:40`
 */
export interface YapiGetV1PerpetualGroupAssetsApiRequest {}

/**
 * 接口 [合约资产↗](https://yapi.nbttfc365.com/project/44/interface/api/4171) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/assets`
 * @更新时间 `2023-01-28 15:24:40`
 */
export interface YapiGetV1PerpetualGroupAssetsApiResponse {
  code: number
  msg: string
  data: YapiGetV1PerpetualGroupAssetsData
}
export interface YapiGetV1PerpetualGroupAssetsData {
  /**
   * 追加保证金剩余额度
   */
  marginAmount: string
  /**
   * 是否开通合约
   */
  isOpen: boolean
  /**
   * 是否自动追加保证金
   */
  isAutoAdd: boolean
  /**
   * 计价币
   */
  baseCoin: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约资产↗](https://yapi.nbttfc365.com/project/44/interface/api/4171)
// **/
// export const getV1PerpetualGroupAssetsApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualGroupAssetsApiRequest,
//   YapiGetV1PerpetualGroupAssetsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/group/assets",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
