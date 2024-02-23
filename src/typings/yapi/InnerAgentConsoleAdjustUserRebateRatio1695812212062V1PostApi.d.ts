/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [内部接口-console调整用户返佣比例_copy↗](https://yapi.nbttfc365.com/project/44/interface/api/18689) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /inner/v1/agent/console/adjustUserRebateRatio_1695812212062`
 * @更新时间 `2023-09-27 18:56:52`
 */
export interface YapiPostInnerV1AgentConsoleAdjustUserRebateRatio_1695812212062ApiRequest {
  /**
   * 被迁移的用户
   */
  uid: number
  /**
   * 商户id
   */
  businessId: number
  /**
   * 系统模式id
   */
  agtSystemModelId: number
  products: YapiPostInnerV1AgentConsoleAdjustUserRebateRatio_1695812212062ApiRequestListProducts[]
}
export interface YapiPostInnerV1AgentConsoleAdjustUserRebateRatio_1695812212062ApiRequestListProducts {
  /**
   * 产品线
   */
  productCd: string
  /**
   * 比例
   */
  selfRatio: number
}

/**
 * 接口 [内部接口-console调整用户返佣比例_copy↗](https://yapi.nbttfc365.com/project/44/interface/api/18689) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /inner/v1/agent/console/adjustUserRebateRatio_1695812212062`
 * @更新时间 `2023-09-27 18:56:52`
 */
export interface YapiPostInnerV1AgentConsoleAdjustUserRebateRatio_1695812212062ApiResponse {
  /**
   * true=成功, false=失败
   */
  isSuccess: boolean
  /**
   * 失败原因
   */
  reason: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [内部接口-console调整用户返佣比例_copy↗](https://yapi.nbttfc365.com/project/44/interface/api/18689)
// **/
// export const postInnerV1AgentConsoleAdjustUserRebateRatio_1695812212062ApiRequest: MarkcoinRequest<
//   YapiPostInnerV1AgentConsoleAdjustUserRebateRatio_1695812212062ApiRequest,
//   YapiPostInnerV1AgentConsoleAdjustUserRebateRatio_1695812212062ApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/agent/console/adjustUserRebateRatio_1695812212062",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
