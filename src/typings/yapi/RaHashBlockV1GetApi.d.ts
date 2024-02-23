/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [hash区块信息↗](https://yapi.nbttfc365.com/project/44/interface/api/11764) 的 **请求类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/hash/block`
 * @更新时间 `2023-09-14 13:58:14`
 */
export interface YapiGetV1RaHashBlockApiRequest {
  /**
   * 产品id
   */
  productId: string
}

/**
 * 接口 [hash区块信息↗](https://yapi.nbttfc365.com/project/44/interface/api/11764) 的 **返回类型**
 *
 * @分类 [娱乐区↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_810)
 * @请求头 `GET /v1/ra/hash/block`
 * @更新时间 `2023-09-14 13:58:14`
 */
export interface YapiGetV1RaHashBlockApiResponse {
  code: string
  message: string
  data: YapiGetV1RaHashBlockData
}
export interface YapiGetV1RaHashBlockData {
  /**
   * 区块信息数组
   */
  list: YapiGetV1RaHashBlockListData[]
  /**
   * 主网定位链接,https://etherscan.io
   */
  chainUrl: string
  /**
   * 区块高度跳转地址;https://etherscan.io/block/%s
   */
  chainBlockUrl: string
  /**
   * 链名
   */
  chainName: string
}
/**
 * 区块信息
 */
export interface YapiGetV1RaHashBlockListData {
  /**
   * 区块高度
   */
  height: string
  /**
   * hash值
   */
  hash: string
  /**
   * 区块创建时间
   */
  createTime: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [hash区块信息↗](https://yapi.nbttfc365.com/project/44/interface/api/11764)
// **/
// export const getV1RaHashBlockApiRequest: MarkcoinRequest<
//   YapiGetV1RaHashBlockApiRequest,
//   YapiGetV1RaHashBlockApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/ra/hash/block",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
