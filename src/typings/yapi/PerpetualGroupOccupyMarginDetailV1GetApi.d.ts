/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组占用保证金详情↗](https://yapi.nbttfc365.com/project/44/interface/api/5699) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/occupyMargin/detail`
 * @更新时间 `2023-11-03 14:36:29`
 */
export interface YapiGetV1PerpetualGroupOccupyMarginDetailApiRequest {
  /**
   * 合约组id
   */
  groupId: string
}

/**
 * 接口 [合约组占用保证金详情↗](https://yapi.nbttfc365.com/project/44/interface/api/5699) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/occupyMargin/detail`
 * @更新时间 `2023-11-03 14:36:29`
 */
export interface YapiGetV1PerpetualGroupOccupyMarginDetailApiResponse {
  code?: number
  field_1: string
  data?: YapiGetV1PerpetualGroupOccupyMarginDetailData
}
export interface YapiGetV1PerpetualGroupOccupyMarginDetailData {
  /**
   * 计价币
   */
  occupyMargin?: string
  /**
   * 币种价值
   */
  coinValue: string
  /**
   * 保证金价值
   */
  marginValue: string
  /**
   * 平均折算比率
   */
  averageScale?: string
  /**
   * 保证金折算率列表
   */
  marginScale?: YapiGetV1PerpetualGroupOccupyMarginDetailListMarginScaleData[]
  /**
   * 体验金价值
   */
  voucherValue: string
}
export interface YapiGetV1PerpetualGroupOccupyMarginDetailListMarginScaleData {
  /**
   * 币种id
   */
  coinId: string
  /**
   * 币种名称
   */
  coinName: string
  /**
   * app logo
   */
  appLogo: string
  /**
   * web logo
   */
  webLogo: string
  /**
   * 保证金折算率
   */
  scale: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组占用保证金详情↗](https://yapi.nbttfc365.com/project/44/interface/api/5699)
// **/
// export const getV1PerpetualGroupOccupyMarginDetailApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualGroupOccupyMarginDetailApiRequest,
//   YapiGetV1PerpetualGroupOccupyMarginDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/group/occupyMargin/detail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
