/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理中心-金字塔代理-调整返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/18434) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/center/setRebateRatio`
 * @更新时间 `2023-09-25 17:33:04`
 */
export interface YapiPostV1AgentCenterSetRebateRatioApiRequest {
  /**
   * uid
   */
  uid: string
  rebateRatio: YapiPostV1AgentCenterSetRebateRatioApiRequestListRebateRatio[]
}
export interface YapiPostV1AgentCenterSetRebateRatioApiRequestListRebateRatio {
  /**
   * 我的比例
   */
  selfRatio: number
  /**
   * 好友比例
   */
  childRatio: number
  /**
   * 产品线
   */
  productCd: string
}

/**
 * 接口 [代理中心-金字塔代理-调整返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/18434) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/center/setRebateRatio`
 * @更新时间 `2023-09-25 17:33:04`
 */
export interface YapiPostV1AgentCenterSetRebateRatioApiResponse {
  code?: number
  messsage?: string
  data?: YapiPostV1AgentCenterSetRebateRatioData
}
export interface YapiPostV1AgentCenterSetRebateRatioData {
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理中心-金字塔代理-调整返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/18434)
// **/
// export const postV1AgentCenterSetRebateRatioApiRequest: MarkcoinRequest<
//   YapiPostV1AgentCenterSetRebateRatioApiRequest,
//   YapiPostV1AgentCenterSetRebateRatioApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/center/setRebateRatio",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
