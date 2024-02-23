/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取关联账户信息(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/18519) 的 **请求类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/linked/user/info`
 * @更新时间 `2023-09-14 17:21:53`
 */
export interface YapiPostV1LinkedUserInfoApiRequest {
  businessId: number
  uid: number
}

/**
 * 接口 [获取关联账户信息(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/18519) 的 **返回类型**
 *
 * @分类 [用户中心↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_85)
 * @请求头 `POST /v1/linked/user/info`
 * @更新时间 `2023-09-14 17:21:53`
 */
export interface YapiPostV1LinkedUserInfoApiResponse {
  uid: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取关联账户信息(内部接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/18519)
// **/
// export const postV1LinkedUserInfoApiRequest: MarkcoinRequest<
//   YapiPostV1LinkedUserInfoApiRequest,
//   YapiPostV1LinkedUserInfoApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/linked/user/info",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
