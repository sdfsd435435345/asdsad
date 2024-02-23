/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邀请返佣-申请金字塔时可获得的最大返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/18929) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/pyramid/maxRatio`
 * @更新时间 `2023-10-11 17:45:05`
 */
export interface YapiGetV1AgentPyramidMaxRatioApiRequest {}

/**
 * 接口 [邀请返佣-申请金字塔时可获得的最大返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/18929) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/pyramid/maxRatio`
 * @更新时间 `2023-10-11 17:45:05`
 */
export interface YapiGetV1AgentPyramidMaxRatioApiResponse {
  code: number
  message: string
  data: YapiGetV1AgentPyramidMaxRatioData
}
export interface YapiGetV1AgentPyramidMaxRatioData {
  /**
   * 可获得的最大返佣比例
   */
  maxRatio: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邀请返佣-申请金字塔时可获得的最大返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/18929)
// **/
// export const getV1AgentPyramidMaxRatioApiRequest: MarkcoinRequest<
//   YapiGetV1AgentPyramidMaxRatioApiRequest,
//   YapiGetV1AgentPyramidMaxRatioApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/pyramid/maxRatio",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
