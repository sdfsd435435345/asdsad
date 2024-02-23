/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [计划委托全部删除↗](https://yapi.nbttfc365.com/project/44/interface/api/10944) 的 **请求类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `POST /v1/option/plan/orders/cancelAll`
 * @更新时间 `2023-07-13 11:37:48`
 */
export interface YapiPostV1OptionPlanOrdersCancelAllApiRequest {}

/**
 * 接口 [计划委托全部删除↗](https://yapi.nbttfc365.com/project/44/interface/api/10944) 的 **返回类型**
 *
 * @分类 [三元期权↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_790)
 * @请求头 `POST /v1/option/plan/orders/cancelAll`
 * @更新时间 `2023-07-13 11:37:48`
 */
export interface YapiPostV1OptionPlanOrdersCancelAllApiResponse {
  /**
   * 200表示成功 其他code表示失败
   */
  code: number
  /**
   * 错误消息
   */
  message: string
  /**
   * success
   */
  data: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [计划委托全部删除↗](https://yapi.nbttfc365.com/project/44/interface/api/10944)
// **/
// export const postV1OptionPlanOrdersCancelAllApiRequest: MarkcoinRequest<
//   YapiPostV1OptionPlanOrdersCancelAllApiRequest,
//   YapiPostV1OptionPlanOrdersCancelAllApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/option/plan/orders/cancelAll",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
