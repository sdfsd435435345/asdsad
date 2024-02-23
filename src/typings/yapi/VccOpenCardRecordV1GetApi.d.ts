/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [开卡记录↗](https://yapi.nbttfc365.com/project/77/interface/api/11809) 的 **请求类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/openCard/record`
 * @更新时间 `2023-08-02 14:01:27`
 */
export interface YapiGetV1VccOpenCardRecordApiRequest {}

/**
 * 接口 [开卡记录↗](https://yapi.nbttfc365.com/project/77/interface/api/11809) 的 **返回类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `GET /v1/vcc/openCard/record`
 * @更新时间 `2023-08-02 14:01:27`
 */
export interface YapiGetV1VccOpenCardRecordApiResponse {
  /**
   * 200，成功，其他失败
   */
  code: number
  /**
   * 描述消息
   */
  message: string
  /**
   * 开卡记录数据
   */
  data: YapiGetV1VccOpenCardRecordListData[]
}
export interface YapiGetV1VccOpenCardRecordListData {
  /**
   * 状态，create，审核中，success,成功，fail，失败
   */
  status: string
  /**
   * 卡别名
   */
  cardAlias: string
  /**
   * 余额
   */
  limitAmount: number
  /**
   * 开卡时间，时间戳格式
   */
  createTime: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [开卡记录↗](https://yapi.nbttfc365.com/project/77/interface/api/11809)
// **/
// export const getV1VccOpenCardRecordApiRequest: MarkcoinRequest<
//   YapiGetV1VccOpenCardRecordApiRequest,
//   YapiGetV1VccOpenCardRecordApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/vcc/openCard/record",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
