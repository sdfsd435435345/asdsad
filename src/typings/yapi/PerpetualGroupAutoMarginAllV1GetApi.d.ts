/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [查询已设置自动追加保证金的合约组↗](https://yapi.nbttfc365.com/project/44/interface/api/3951) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/group/autoMargin/all`
 * @更新时间 `2023-02-01 16:55:27`
 */
export interface YapiGetV1PerpetualGroupAutoMarginAllApiRequest {}

/**
 * 接口 [查询已设置自动追加保证金的合约组↗](https://yapi.nbttfc365.com/project/44/interface/api/3951) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `GET /v1/perpetual/group/autoMargin/all`
 * @更新时间 `2023-02-01 16:55:27`
 */
export interface YapiGetV1PerpetualGroupAutoMarginAllApiResponse {
  /**
   * 200成功，其他失败
   */
  code: number
  message: string
  /**
   * 返回数据
   */
  data: YapiGetV1PerpetualGroupAutoMarginAllListData[]
}
export interface YapiGetV1PerpetualGroupAutoMarginAllListData {
  /**
   * 合约组Id
   */
  id: string
  /**
   * 合约组名称
   */
  name: string
  /**
   *  是否自动追加保证金 yes 是 no 否
   */
  isAutoAdd: string
  /**
   * 已实现盈亏
   */
  realizedProfit: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [查询已设置自动追加保证金的合约组↗](https://yapi.nbttfc365.com/project/44/interface/api/3951)
// **/
// export const getV1PerpetualGroupAutoMarginAllApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualGroupAutoMarginAllApiRequest,
//   YapiGetV1PerpetualGroupAutoMarginAllApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/group/autoMargin/all",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
