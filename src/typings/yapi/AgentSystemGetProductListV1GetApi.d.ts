/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理中心-产品线查询↗](https://yapi.nbttfc365.com/project/44/interface/api/18264) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/system/getProductList`
 * @更新时间 `2023-10-05 11:15:50`
 */
export interface YapiGetV1AgentSystemGetProductListApiRequest {}

/**
 * 接口 [代理中心-产品线查询↗](https://yapi.nbttfc365.com/project/44/interface/api/18264) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/system/getProductList`
 * @更新时间 `2023-10-05 11:15:50`
 */
export interface YapiGetV1AgentSystemGetProductListApiResponse {
  code: string
  message: string
  data: string[]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理中心-产品线查询↗](https://yapi.nbttfc365.com/project/44/interface/api/18264)
// **/
// export const getV1AgentSystemGetProductListApiRequest: MarkcoinRequest<
//   YapiGetV1AgentSystemGetProductListApiRequest,
//   YapiGetV1AgentSystemGetProductListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/system/getProductList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
