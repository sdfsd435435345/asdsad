/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [设置支付密码↗](https://yapi.nbttfc365.com/project/77/interface/api/9019) 的 **请求类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `POST /v1/vcc/setPayPassword`
 * @更新时间 `2023-06-20 10:10:24`
 */
export interface YapiPostV1VccSetPayPasswordApiRequest {
  /**
   * 密码：六位纯数字
   */
  password: string
  /**
   * 二次确认密码：六位纯数字
   */
  repeatPassword: string
}

/**
 * 接口 [设置支付密码↗](https://yapi.nbttfc365.com/project/77/interface/api/9019) 的 **返回类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `POST /v1/vcc/setPayPassword`
 * @更新时间 `2023-06-20 10:10:24`
 */
export interface YapiPostV1VccSetPayPasswordApiResponse {
  /**
   * 200成功，其他均为失败
   */
  code: number
  msg: string
  data?: null
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [设置支付密码↗](https://yapi.nbttfc365.com/project/77/interface/api/9019)
// **/
// export const postV1VccSetPayPasswordApiRequest: MarkcoinRequest<
//   YapiPostV1VccSetPayPasswordApiRequest,
//   YapiPostV1VccSetPayPasswordApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/vcc/setPayPassword",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
