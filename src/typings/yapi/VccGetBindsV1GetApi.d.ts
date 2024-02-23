/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取卡头列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8964) 的 **请求类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/getBinds`
 * @更新时间 `2023-06-17 01:59:01`
 */
export interface YapiGetV1VccGetBindsApiRequest {}

/**
 * 接口 [获取卡头列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8964) 的 **返回类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/getBinds`
 * @更新时间 `2023-06-17 01:59:01`
 */
export interface YapiGetV1VccGetBindsApiResponse {
  /**
   * 200为成功，其他均为失败
   */
  code?: number
  /**
   * 请求状态消息
   */
  msg?: string
  data?: YapiGetV1VccGetBindsListData[]
}
export interface YapiGetV1VccGetBindsListData {
  /**
   * 卡头信息
   */
  cardBin: string
  /**
   * 卡类型
   */
  cardType: string
  /**
   * 卡币种
   */
  supportCcy: string
  /**
   * 状态：yes 可用，no 不可用
   */
  status: string
  /**
   * 描述
   */
  enDesc: string
  /**
   * 备注
   */
  remark: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取卡头列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8964)
// **/
// export const getV1VccGetBindsApiRequest: MarkcoinRequest<
//   YapiGetV1VccGetBindsApiRequest,
//   YapiGetV1VccGetBindsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/vcc/getBinds",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
