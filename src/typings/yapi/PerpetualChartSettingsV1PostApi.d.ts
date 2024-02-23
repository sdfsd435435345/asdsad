/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [个人图表偏好设置（废弃）↗](https://yapi.nbttfc365.com/project/44/interface/api/3707) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/chart/settings`
 * @更新时间 `2023-09-12 14:11:21`
 */
export interface YapiPostV1PerpetualChartSettingsApiRequest {
  /**
   * 高度设置    1-100
   */
  chartHight?: number
  /**
   * 时间维度  json格式数据
   */
  timeDimension?: string
  /**
   * 指标设置  json格式数据
   */
  kpi?: string
}

/**
 * 接口 [个人图表偏好设置（废弃）↗](https://yapi.nbttfc365.com/project/44/interface/api/3707) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/chart/settings`
 * @更新时间 `2023-09-12 14:11:21`
 */
export interface YapiPostV1PerpetualChartSettingsApiResponse {
  code?: number
  message?: string
  /**
   * true成功，其他失败
   */
  data?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [个人图表偏好设置（废弃）↗](https://yapi.nbttfc365.com/project/44/interface/api/3707)
// **/
// export const postV1PerpetualChartSettingsApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualChartSettingsApiRequest,
//   YapiPostV1PerpetualChartSettingsApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/chart/settings",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
