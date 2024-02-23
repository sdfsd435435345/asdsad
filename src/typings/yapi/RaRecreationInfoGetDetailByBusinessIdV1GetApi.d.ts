/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [娱乐区基本信息↗](https://yapi.nbttfc365.com/project/44/interface/api/11774) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/recreationInfo/getDetailByBusinessId`
 * @更新时间 `2023-08-29 18:36:01`
 */
export interface YapiGetV1RaRecreationInfoGetDetailByBusinessIdApiRequest {}

/**
 * 接口 [娱乐区基本信息↗](https://yapi.nbttfc365.com/project/44/interface/api/11774) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/recreationInfo/getDetailByBusinessId`
 * @更新时间 `2023-08-29 18:36:01`
 */
export interface YapiGetV1RaRecreationInfoGetDetailByBusinessIdApiResponse {
  code: string
  message: string
  data: YapiGetV1RaRecreationInfoGetDetailByBusinessIdData
}
export interface YapiGetV1RaRecreationInfoGetDetailByBusinessIdData {
  /**
   * slogan
   */
  slogan: string
  /**
   * logo url
   */
  logo: string
  /**
   * 参与人次
   */
  pt: number
  /**
   * 维护状态 true=enable /  false=disable
   */
  enableState: boolean
  /**
   * 项目数量
   */
  projectNum: number
  /**
   * 公告链接
   */
  noticeUrl: string
  /**
   * 维护通知
   */
  maintenanceNotice: string
  /**
   * 娱乐区维护开始时间
   */
  fixStartTime: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [娱乐区基本信息↗](https://yapi.nbttfc365.com/project/44/interface/api/11774)
// **/
// export const getV1RaRecreationInfoGetDetailByBusinessIdApiRequest: MarkcoinRequest<
//   YapiGetV1RaRecreationInfoGetDetailByBusinessIdApiRequest,
//   YapiGetV1RaRecreationInfoGetDetailByBusinessIdApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/recreationInfo/getDetailByBusinessId",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
