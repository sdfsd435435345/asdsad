/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [全部撤销_普通_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2882) 的 **请求类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /inner/v1/orders/batch/cancel`
 * @更新时间 `2022-10-24 14:03:26`
 */
export interface YapiPostInnerV1OrdersBatchCancelApiRequest {
  /**
   * 订单 id
   */
  ids?: number[]
  /**
   * 用户id
   */
  uid: number
  /**
   * 商户id
   */
  businessId: number
}

/**
 * 接口 [全部撤销_普通_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2882) 的 **返回类型**
 *
 * @分类 [现货订单↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_488)
 * @请求头 `POST /inner/v1/orders/batch/cancel`
 * @更新时间 `2022-10-24 14:03:26`
 */
export interface YapiPostInnerV1OrdersBatchCancelApiResponse {
  /**
   * success
   */
  data?: string
  /**
   * 200
   */
  code?: number
  /**
   * 相应描述信息
   */
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [全部撤销_普通_内部接口↗](https://yapi.nbttfc365.com/project/44/interface/api/2882)
// **/
// export const postInnerV1OrdersBatchCancelApiRequest: MarkcoinRequest<
//   YapiPostInnerV1OrdersBatchCancelApiRequest,
//   YapiPostInnerV1OrdersBatchCancelApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/orders/batch/cancel",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
