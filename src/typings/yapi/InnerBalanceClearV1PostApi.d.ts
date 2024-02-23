/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [清理用户资产（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/11159) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /inner/v1/balance/clear`
 * @更新时间 `2023-07-24 11:18:14`
 */
export interface YapiPostInnerV1BalanceClearApiRequest {
  businessId: number
  uid: number
}

/**
 * 接口 [清理用户资产（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/11159) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /inner/v1/balance/clear`
 * @更新时间 `2023-07-24 11:18:14`
 */
export interface YapiPostInnerV1BalanceClearApiResponse {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [清理用户资产（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/11159)
// **/
// export const postInnerV1BalanceClearApiRequest: MarkcoinRequest<
//   YapiPostInnerV1BalanceClearApiRequest,
//   YapiPostInnerV1BalanceClearApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/balance/clear",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
