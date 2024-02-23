/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组保证金划转↗](https://yapi.nbttfc365.com/project/44/interface/api/5634) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/assets/transfer`
 * @更新时间 `2023-05-12 17:07:15`
 */
export interface YapiPostV1PerpetualAssetsTransferApiRequest {
  /**
   * 目标合约组id，type为空时必传
   */
  fromGroupId?: string
  /**
   * 币种id
   */
  coinId: string
  /**
   * 数量
   */
  amount: string
  /**
   * 账户类型，合约组id为空时必传，asset 资产
   */
  fromType?: string
  /**
   * 账户类型，合约组id为空时必传，asset 资产,group 新建合约组
   */
  toType?: string
  /**
   * 目标合约组id，type为空时必传
   */
  toGroupId?: string
}

/**
 * 接口 [合约组保证金划转↗](https://yapi.nbttfc365.com/project/44/interface/api/5634) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/assets/transfer`
 * @更新时间 `2023-05-12 17:07:15`
 */
export interface YapiPostV1PerpetualAssetsTransferApiResponse {
  code: number
  message: string
  data: YapiPostV1PerpetualAssetsTransferData
}
export interface YapiPostV1PerpetualAssetsTransferData {
  /**
   * 是否成功
   */
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组保证金划转↗](https://yapi.nbttfc365.com/project/44/interface/api/5634)
// **/
// export const postV1PerpetualAssetsTransferApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualAssetsTransferApiRequest,
//   YapiPostV1PerpetualAssetsTransferApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/assets/transfer",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
