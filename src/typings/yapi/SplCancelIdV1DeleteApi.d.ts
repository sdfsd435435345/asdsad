/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [（计划委托）用户单个撤销计划委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/2997) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `DELETE /v1/spl/cancel/{id}`
 * @更新时间 `2022-11-24 22:47:52`
 */
export interface YapiDeleteV1SplCancelIdApiRequest {
  /**
   * 计划委托单id
   */
  id: string
}

/**
 * 接口 [（计划委托）用户单个撤销计划委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/2997) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `DELETE /v1/spl/cancel/{id}`
 * @更新时间 `2022-11-24 22:47:52`
 */
export interface YapiDeleteV1SplCancelIdApiResponse {
  /**
   * 订单id，字符串
   */
  data?: string
  code?: number
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [（计划委托）用户单个撤销计划委托单↗](https://yapi.nbttfc365.com/project/44/interface/api/2997)
// **/
// export const deleteV1SplCancelIdApiRequest: MarkcoinRequest<
//   YapiDeleteV1SplCancelIdApiRequest,
//   YapiDeleteV1SplCancelIdApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/spl/cancel/{id}",
//     method: "DELETE",
//     data
//   })
// }

/* prettier-ignore-end */
