/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邀请返佣-查询用户联系方式↗](https://yapi.nbttfc365.com/project/44/interface/api/18569) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/member/contractInfo`
 * @更新时间 `2023-09-19 19:48:33`
 */
export interface YapiGetV1AgentMemberContractInfoApiRequest {}

/**
 * 接口 [邀请返佣-查询用户联系方式↗](https://yapi.nbttfc365.com/project/44/interface/api/18569) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/member/contractInfo`
 * @更新时间 `2023-09-19 19:48:33`
 */
export interface YapiGetV1AgentMemberContractInfoApiResponse {
  code: number
  message: string
  data: YapiGetV1AgentMemberContractInfoData
}
export interface YapiGetV1AgentMemberContractInfoData {
  /**
   * 手机号
   */
  mobile: string
  /**
   * 手机区号, 中国=86
   */
  mobileCountryCd: string
  /**
   * 邮箱
   */
  email: string
  /**
   * 国家代码,CN=中国
   */
  countryCd: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邀请返佣-查询用户联系方式↗](https://yapi.nbttfc365.com/project/44/interface/api/18569)
// **/
// export const getV1AgentMemberContractInfoApiRequest: MarkcoinRequest<
//   YapiGetV1AgentMemberContractInfoApiRequest,
//   YapiGetV1AgentMemberContractInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/member/contractInfo",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
