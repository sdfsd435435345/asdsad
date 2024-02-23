/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [虚拟卡销卡↗](https://yapi.nbttfc365.com/project/77/interface/api/8989) 的 **请求类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `POST /v1/vcc/cardClose`
 * @更新时间 `2023-09-21 14:58:05`
 */
export interface YapiPostV1VccCardCloseApiRequest {
  /**
   * 虚拟卡编号
   */
  cardId: string
  /**
   * 支付密码
   */
  password: string
}

/**
 * 接口 [虚拟卡销卡↗](https://yapi.nbttfc365.com/project/77/interface/api/8989) 的 **返回类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `POST /v1/vcc/cardClose`
 * @更新时间 `2023-09-21 14:58:05`
 */
export interface YapiPostV1VccCardCloseApiResponse {
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
// * [虚拟卡销卡↗](https://yapi.nbttfc365.com/project/77/interface/api/8989)
// **/
// export const postV1VccCardCloseApiRequest: MarkcoinRequest<
//   YapiPostV1VccCardCloseApiRequest,
//   YapiPostV1VccCardCloseApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/vcc/cardClose",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
