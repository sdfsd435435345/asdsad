/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [通过币种namel获取主链信息↗](https://yapi.nbttfc365.com/project/73/interface/api/5549) 的 **请求类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_584)
 * @请求头 `POST /v1/c2c/coin/mainChain/list`
 * @更新时间 `2023-05-05 12:04:34`
 */
export interface YapiPostV1C2cCoinMainChainListApiRequest {
  /**
   * 币种的名词
   */
  name: string
}

/**
 * 接口 [通过币种namel获取主链信息↗](https://yapi.nbttfc365.com/project/73/interface/api/5549) 的 **返回类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_584)
 * @请求头 `POST /v1/c2c/coin/mainChain/list`
 * @更新时间 `2023-05-05 12:04:34`
 */
export interface YapiPostV1C2cCoinMainChainListApiResponse {
  code?: number
  data?: YapiPostV1C2CCoinMainChainListData[]
  message?: string
}
export interface YapiPostV1C2CCoinMainChainListData {
  /**
   * 链路类型
   */
  name?: string
  id?: string
  /**
   * 地址
   */
  addr?: string
  /**
   * 是否开启充值, 1 开启，2 关闭
   */
  isDeposit?: string
  /**
   * 是否可以提现 1 开启，2 关闭
   */
  isWithdraw?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [通过币种namel获取主链信息↗](https://yapi.nbttfc365.com/project/73/interface/api/5549)
// **/
// export const postV1C2cCoinMainChainListApiRequest: MarkcoinRequest<
//   YapiPostV1C2cCoinMainChainListApiRequest,
//   YapiPostV1C2cCoinMainChainListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/coin/mainChain/list",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [通过币种namel获取主链信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6794) 的 **请求类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_632)
 * @请求头 `POST /v1/c2c/coin/mainChain/list`
 * @更新时间 `2023-06-08 16:47:20`
 */
export interface YapiPostV1C2cCoinMainChainListApiRequest {
  /**
   * 币种的名词
   */
  name: string
}

/**
 * 接口 [通过币种namel获取主链信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6794) 的 **返回类型**
 *
 * @分类 [C2C交易↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_632)
 * @请求头 `POST /v1/c2c/coin/mainChain/list`
 * @更新时间 `2023-06-08 16:47:20`
 */
export interface YapiPostV1C2cCoinMainChainListApiResponse {
  code?: number
  data?: YapiPostV1C2CCoinMainChainListData[]
  message?: string
}
export interface YapiPostV1C2CCoinMainChainListData {
  /**
   * 链路类型
   */
  name?: string
  id?: string
  /**
   * 地址
   */
  addr?: string
  /**
   * 是否开启充值, 1 开启，2 关闭
   */
  isDeposit?: string
  /**
   * 是否可以提现 1 开启，2 关闭
   */
  isWithdraw?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [通过币种namel获取主链信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6794)
// **/
// export const postV1C2cCoinMainChainListApiRequest: MarkcoinRequest<
//   YapiPostV1C2cCoinMainChainListApiRequest,
//   YapiPostV1C2cCoinMainChainListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/coin/mainChain/list",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
