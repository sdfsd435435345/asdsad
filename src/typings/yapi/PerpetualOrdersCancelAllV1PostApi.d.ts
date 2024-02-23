/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [按筛选条件全部撤销_普通委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3747) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/orders/cancelAll`
 * @更新时间 `2023-02-16 11:32:04`
 */
export interface YapiPostV1PerpetualOrdersCancelAllApiRequest {
  /**
   * 交易对id
   */
  tradeId: string
  /**
   * 合约组id
   */
  groupId: string
}

/**
 * 接口 [按筛选条件全部撤销_普通委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3747) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/orders/cancelAll`
 * @更新时间 `2023-02-16 11:32:04`
 */
export interface YapiPostV1PerpetualOrdersCancelAllApiResponse {
  /**
   * 返回状态码200为成功，其他code值为失败
   */
  code?: number
  /**
   * 返回信息说明 success
   */
  message?: string
  /**
   * success
   */
  data?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [按筛选条件全部撤销_普通委托↗](https://yapi.nbttfc365.com/project/44/interface/api/3747)
// **/
// export const postV1PerpetualOrdersCancelAllApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualOrdersCancelAllApiRequest,
//   YapiPostV1PerpetualOrdersCancelAllApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/orders/cancelAll",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
