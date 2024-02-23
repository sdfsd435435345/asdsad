/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [划转账户选择↗](https://yapi.nbttfc365.com/project/44/interface/api/5819) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/assets/transfer/account`
 * @更新时间 `2023-05-29 17:58:10`
 */
export interface YapiGetV1PerpetualAssetsTransferAccountApiRequest {
  /**
   * 币种id
   */
  coinId?: string
}

/**
 * 接口 [划转账户选择↗](https://yapi.nbttfc365.com/project/44/interface/api/5819) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/assets/transfer/account`
 * @更新时间 `2023-05-29 17:58:10`
 */
export interface YapiGetV1PerpetualAssetsTransferAccountApiResponse {
  code: number
  message: string
  data: YapiGetV1PerpetualAssetsTransferAccountData
}
export interface YapiGetV1PerpetualAssetsTransferAccountData {
  list: YapiGetV1PerpetualAssetsTransferAccountListData[]
}
export interface YapiGetV1PerpetualAssetsTransferAccountListData {
  /**
   * 合约组id，没有时前端写死交易账户
   */
  groupId?: string
  /**
   * 合约组名称
   */
  groupName?: string
  /**
   * 可划转币种数量
   */
  amount: string
  /**
   * 币种id
   */
  coinId?: string
  /**
   * 币种名称
   */
  coinName?: string
  /**
   * 币种数量
   */
  totalAmount: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [划转账户选择↗](https://yapi.nbttfc365.com/project/44/interface/api/5819)
// **/
// export const getV1PerpetualAssetsTransferAccountApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualAssetsTransferAccountApiRequest,
//   YapiGetV1PerpetualAssetsTransferAccountApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/assets/transfer/account",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
