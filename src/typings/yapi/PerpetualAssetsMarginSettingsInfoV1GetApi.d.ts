/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [ 查询设置用户保证金币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/4139) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/assetsMargin/settings/info`
 * @更新时间 `2023-01-10 16:28:31`
 */
export interface YapiGetV1PerpetualAssetsMarginSettingsInfoApiRequest {}

/**
 * 接口 [ 查询设置用户保证金币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/4139) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/assetsMargin/settings/info`
 * @更新时间 `2023-01-10 16:28:31`
 */
export interface YapiGetV1PerpetualAssetsMarginSettingsInfoApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  message: string
  data: YapiGetV1PerpetualAssetsMarginSettingsInfoData
}
export interface YapiGetV1PerpetualAssetsMarginSettingsInfoData {
  /**
   * 扣款是否均摊     yes是（等比扣款）  no否（顺序扣款）
   */
  isAvg: string
  coinData: YapiGetV1PerpetualAssetsMarginSettingsInfoListCoinData[]
}
export interface YapiGetV1PerpetualAssetsMarginSettingsInfoListCoinData {
  /**
   * 币种Id
   */
  coinId: number
  /**
   * 排序
   */
  sort: number
  /**
   * 汇率
   */
  rate: string
  /**
   * 法币符号
   */
  currencySymbol: string
  /**
   * 币种名称
   */
  coinName: string
  /**
   * 是否选中，true选中，false,不选中
   */
  selected: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [ 查询设置用户保证金币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/4139)
// **/
// export const getV1PerpetualAssetsMarginSettingsInfoApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualAssetsMarginSettingsInfoApiRequest,
//   YapiGetV1PerpetualAssetsMarginSettingsInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/assetsMargin/settings/info",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
