/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [自动追加保证金（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/3843) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/assets/autoAdd`
 * @更新时间 `2023-01-29 11:09:38`
 */
export interface YapiPostInnerV1PerpetualAssetsAutoAddApiRequest {
  groupId: number
  uid: number
  /**
   * 需要追加的购买力
   */
  needSize: number
}

/**
 * 接口 [自动追加保证金（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/3843) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/assets/autoAdd`
 * @更新时间 `2023-01-29 11:09:38`
 */
export interface YapiPostInnerV1PerpetualAssetsAutoAddApiResponse {
  code: number
  msg: string
  data: YapiPostInnerV1PerpetualAssetsAutoAddData
}
export interface YapiPostInnerV1PerpetualAssetsAutoAddData {
  isSuccess: boolean
  /**
   * 追加的币种信息
   */
  coins: YapiPostInnerV1PerpetualAssetsAutoAddListCoinsData[]
}
export interface YapiPostInnerV1PerpetualAssetsAutoAddListCoinsData {
  coinId: number
  size: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [自动追加保证金（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/3843)
// **/
// export const postInnerV1PerpetualAssetsAutoAddApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualAssetsAutoAddApiRequest,
//   YapiPostInnerV1PerpetualAssetsAutoAddApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/assets/autoAdd",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
