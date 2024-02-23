/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邀请返佣-金字塔返佣申请信息↗](https://yapi.nbttfc365.com/project/44/interface/api/18429) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/pyramid/applyInfo`
 * @更新时间 `2023-09-26 15:22:41`
 */
export interface YapiGetV1AgentPyramidApplyInfoApiRequest {}

/**
 * 接口 [邀请返佣-金字塔返佣申请信息↗](https://yapi.nbttfc365.com/project/44/interface/api/18429) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/pyramid/applyInfo`
 * @更新时间 `2023-09-26 15:22:41`
 */
export interface YapiGetV1AgentPyramidApplyInfoApiResponse {
  code: number
  message: string
  data: YapiGetV1AgentPyramidApplyInfoData
}
export interface YapiGetV1AgentPyramidApplyInfoData {
  /**
   * 是否显示申请金字塔代理商模式的banner; true=显示, false=不显示
   */
  showBanner: boolean
  /**
   * 申请状态数据字典:approvalStatusInd:, -1=未申请,0=待审核, 1=申请通过, 2=申请未通过
   */
  applyStatus: number
  /**
   * 拒绝原因, 申请不通过时取该值
   */
  rejectReason: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邀请返佣-金字塔返佣申请信息↗](https://yapi.nbttfc365.com/project/44/interface/api/18429)
// **/
// export const getV1AgentPyramidApplyInfoApiRequest: MarkcoinRequest<
//   YapiGetV1AgentPyramidApplyInfoApiRequest,
//   YapiGetV1AgentPyramidApplyInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/pyramid/applyInfo",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
