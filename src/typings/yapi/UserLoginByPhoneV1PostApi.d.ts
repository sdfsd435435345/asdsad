/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [手机号码登录(演示)↗](https://yapi.nbttfc365.com/project/77/interface/api/6224) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/user/login_by_phone`
 * @更新时间 `2023-06-08 16:52:31`
 */
export interface YapiPostV1UserLoginByPhoneApiRequest {
  phone: string
  country_code: string
  password: string
}

/**
 * 接口 [手机号码登录(演示)↗](https://yapi.nbttfc365.com/project/77/interface/api/6224) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_606)
 * @请求头 `POST /v1/user/login_by_phone`
 * @更新时间 `2023-06-08 16:52:31`
 */
export interface YapiPostV1UserLoginByPhoneApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [手机号码登录(演示)↗](https://yapi.nbttfc365.com/project/77/interface/api/6224)
// **/
// export const postV1UserLoginByPhoneApiRequest: MarkcoinRequest<
//   YapiPostV1UserLoginByPhoneApiRequest,
//   YapiPostV1UserLoginByPhoneApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/user/login_by_phone",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [手机号码登录(演示)↗](https://yapi.nbttfc365.com/project/44/interface/api/121) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/user/login_by_phone`
 * @更新时间 `2022-07-13 15:35:24`
 */
export interface YapiPostV1UserLoginByPhoneApiRequest {
  phone: string
  country_code: string
  password: string
}

/**
 * 接口 [手机号码登录(演示)↗](https://yapi.nbttfc365.com/project/44/interface/api/121) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/user/login_by_phone`
 * @更新时间 `2022-07-13 15:35:24`
 */
export interface YapiPostV1UserLoginByPhoneApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [手机号码登录(演示)↗](https://yapi.nbttfc365.com/project/44/interface/api/121)
// **/
// export const postV1UserLoginByPhoneApiRequest: MarkcoinRequest<
//   YapiPostV1UserLoginByPhoneApiRequest,
//   YapiPostV1UserLoginByPhoneApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/user/login_by_phone",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
