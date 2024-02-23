/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组开仓冻结保证金详情↗](https://yapi.nbttfc365.com/project/44/interface/api/5814) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/lockMargin/detail`
 * @更新时间 `2023-05-10 16:37:47`
 */
export interface YapiGetV1PerpetualGroupLockMarginDetailApiRequest {
  /**
   * 合约组id
   */
  groupId: string
}

/**
 * 接口 [合约组开仓冻结保证金详情↗](https://yapi.nbttfc365.com/project/44/interface/api/5814) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/group/lockMargin/detail`
 * @更新时间 `2023-05-10 16:37:47`
 */
export interface YapiGetV1PerpetualGroupLockMarginDetailApiResponse {
  code?: number
  msg: string
  data?: YapiGetV1PerpetualGroupLockMarginDetailData
}
export interface YapiGetV1PerpetualGroupLockMarginDetailData {
  /**
   * 计价币
   */
  baseCoin?: string
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
  marginScale?: YapiGetV1PerpetualGroupLockMarginDetailListMarginScaleData[]
}
export interface YapiGetV1PerpetualGroupLockMarginDetailListMarginScaleData {
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
// * [合约组开仓冻结保证金详情↗](https://yapi.nbttfc365.com/project/44/interface/api/5814)
// **/
// export const getV1PerpetualGroupLockMarginDetailApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualGroupLockMarginDetailApiRequest,
//   YapiGetV1PerpetualGroupLockMarginDetailApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/group/lockMargin/detail",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
