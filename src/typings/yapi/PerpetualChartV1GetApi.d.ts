/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [ 查询用户图表设置(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3799) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/chart`
 * @更新时间 `2023-09-12 14:11:13`
 */
export interface YapiGetV1PerpetualChartApiRequest {}

/**
 * 接口 [ 查询用户图表设置(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3799) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/chart`
 * @更新时间 `2023-09-12 14:11:13`
 */
export interface YapiGetV1PerpetualChartApiResponse {
  /**
   * 200成功，其他失败
   */
  code: string
  message: string
  data: YapiGetV1PerpetualChartData
}
export interface YapiGetV1PerpetualChartData {
  /**
   * 图表高度     1-100
   */
  chartHight: number
  /**
   * 时间维度    json格式数据
   */
  timeDimension: string
  /**
   * 指标设置     json格式数据
   */
  kpi: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [ 查询用户图表设置(废弃)↗](https://yapi.nbttfc365.com/project/44/interface/api/3799)
// **/
// export const getV1PerpetualChartApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualChartApiRequest,
//   YapiGetV1PerpetualChartApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/chart",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
