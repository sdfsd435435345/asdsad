/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [全部撤销_普通↗](https://yapi.nbttfc365.com/project/44/interface/api/2798) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /v1/orders/batch/cancel`
 * @更新时间 `2022-10-14 14:13:49`
 */
export interface YapiPostV1OrdersBatchCancelApiRequest {
  /**
   * 订单 id
   */
  ids?: number[]
}

/**
 * 接口 [全部撤销_普通↗](https://yapi.nbttfc365.com/project/44/interface/api/2798) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /v1/orders/batch/cancel`
 * @更新时间 `2022-10-14 14:13:49`
 */
export interface YapiPostV1OrdersBatchCancelApiResponse {
  /**
   * success
   */
  data?: string
  /**
   * 200
   */
  code?: number
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [全部撤销_普通↗](https://yapi.nbttfc365.com/project/44/interface/api/2798)
// **/
// export const postV1OrdersBatchCancelApiRequest: MarkcoinRequest<
//   YapiPostV1OrdersBatchCancelApiRequest,
//   YapiPostV1OrdersBatchCancelApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/orders/batch/cancel",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
