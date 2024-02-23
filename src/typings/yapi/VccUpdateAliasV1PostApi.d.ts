/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [更新卡别名↗](https://yapi.nbttfc365.com/project/77/interface/api/9024) 的 **请求类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `POST /v1/vcc/updateAlias`
 * @更新时间 `2023-06-17 01:59:23`
 */
export interface YapiPostV1VccUpdateAliasApiRequest {
  /**
   * 虚拟卡ID
   */
  cardId: string
  /**
   * 卡别名
   */
  cardAlias: string
}

/**
 * 接口 [更新卡别名↗](https://yapi.nbttfc365.com/project/77/interface/api/9024) 的 **返回类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `POST /v1/vcc/updateAlias`
 * @更新时间 `2023-06-17 01:59:23`
 */
export interface YapiPostV1VccUpdateAliasApiResponse {
  /**
   * 200为成功，其他均为失败
   */
  code: number
  msg: string
  data?: null
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [更新卡别名↗](https://yapi.nbttfc365.com/project/77/interface/api/9024)
// **/
// export const postV1VccUpdateAliasApiRequest: MarkcoinRequest<
//   YapiPostV1VccUpdateAliasApiRequest,
//   YapiPostV1VccUpdateAliasApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/vcc/updateAlias",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
