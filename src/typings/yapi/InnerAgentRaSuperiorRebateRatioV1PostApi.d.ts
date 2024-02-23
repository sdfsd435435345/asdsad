/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [内部接口-娱乐区用户上级返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/11794) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /inner/v1/agent/ra/superiorRebateRatio`
 * @更新时间 `2023-09-21 17:09:08`
 */
export interface YapiPostInnerV1AgentRaSuperiorRebateRatioApiRequest {
  /**
   * 用户id
   */
  uid: number
}

/**
 * 接口 [内部接口-娱乐区用户上级返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/11794) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /inner/v1/agent/ra/superiorRebateRatio`
 * @更新时间 `2023-09-21 17:09:08`
 */
export interface YapiPostInnerV1AgentRaSuperiorRebateRatioApiResponse {
  /**
   * 上级返佣比例之和
   */
  ratio: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [内部接口-娱乐区用户上级返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/11794)
// **/
// export const postInnerV1AgentRaSuperiorRebateRatioApiRequest: MarkcoinRequest<
//   YapiPostInnerV1AgentRaSuperiorRebateRatioApiRequest,
//   YapiPostInnerV1AgentRaSuperiorRebateRatioApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/agent/ra/superiorRebateRatio",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
