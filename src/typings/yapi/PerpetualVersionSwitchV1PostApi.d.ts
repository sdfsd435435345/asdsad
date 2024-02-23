/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [切换合约版本↗](https://yapi.nbttfc365.com/project/44/interface/api/4275) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/version/switch`
 * @更新时间 `2023-01-16 17:25:21`
 */
export interface YapiPostV1PerpetualVersionSwitchApiRequest {
  /**
   * 合约版本,1,专业版,2,普通版
   */
  version: number
}

/**
 * 接口 [切换合约版本↗](https://yapi.nbttfc365.com/project/44/interface/api/4275) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/version/switch`
 * @更新时间 `2023-01-16 17:25:21`
 */
export interface YapiPostV1PerpetualVersionSwitchApiResponse {
  /**
   * 200,请求成功，其他失败
   */
  code: number
  message: string
  /**
   * true成功，false，失败
   */
  data: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [切换合约版本↗](https://yapi.nbttfc365.com/project/44/interface/api/4275)
// **/
// export const postV1PerpetualVersionSwitchApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualVersionSwitchApiRequest,
//   YapiPostV1PerpetualVersionSwitchApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/version/switch",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
