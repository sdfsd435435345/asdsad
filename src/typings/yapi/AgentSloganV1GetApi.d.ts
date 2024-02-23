/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邀请返佣-查询分享海报文案↗](https://yapi.nbttfc365.com/project/44/interface/api/18554) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/slogan`
 * @更新时间 `2023-09-19 16:23:20`
 */
export interface YapiGetV1AgentSloganApiRequest {}

/**
 * 接口 [邀请返佣-查询分享海报文案↗](https://yapi.nbttfc365.com/project/44/interface/api/18554) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/slogan`
 * @更新时间 `2023-09-19 16:23:20`
 */
export interface YapiGetV1AgentSloganApiResponse {
  code: number
  message: string
  data: YapiGetV1AgentSloganData
}
export interface YapiGetV1AgentSloganData {
  slogan: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邀请返佣-查询分享海报文案↗](https://yapi.nbttfc365.com/project/44/interface/api/18554)
// **/
// export const getV1AgentSloganApiRequest: MarkcoinRequest<
//   YapiGetV1AgentSloganApiRequest,
//   YapiGetV1AgentSloganApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/slogan",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
