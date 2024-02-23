/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约\/现货 币对列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18804) 的 **请求类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /`
 * @更新时间 `2023-10-11 16:26:08`
 */
export interface YapiGetApiRequest {
  /**
   * spot:现货、perpetual:合约
   */
  feeType: string
}

/**
 * 接口 [合约\/现货 币对列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18804) 的 **返回类型**
 *
 * @分类 [vip↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_1024)
 * @请求头 `GET /`
 * @更新时间 `2023-10-11 16:26:08`
 */
export interface YapiGetApiResponse {
  code: number
  data: YapiGetData
  message: string
}
export interface YapiGetData {
  /**
   * 币对名称
   */
  symbolName: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约/现货 币对列表↗](https://yapi.nbttfc365.com/project/44/interface/api/18804)
// **/
// export const getApiRequest: MarkcoinRequest<
//   YapiGetApiRequest,
//   YapiGetApiResponse['data']
// > = params => {
//   return request({
//     path: "/",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
