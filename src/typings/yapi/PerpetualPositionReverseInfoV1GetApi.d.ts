/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取反向开仓信息↗](https://yapi.nbttfc365.com/project/44/interface/api/4231) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/position/reverseInfo`
 * @更新时间 `2023-03-09 12:09:53`
 */
export interface YapiGetV1PerpetualPositionReverseInfoApiRequest {
  /**
   * 合约组id
   */
  groupId: string
  /**
   * 仓位id
   */
  positionId: string
  /**
   * wallet:使用资产账户的资金开仓;  group:使用当前合约组的额外保证金开仓
   */
  marginType: string
}

/**
 * 接口 [获取反向开仓信息↗](https://yapi.nbttfc365.com/project/44/interface/api/4231) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `GET /v1/perpetual/position/reverseInfo`
 * @更新时间 `2023-03-09 12:09:53`
 */
export interface YapiGetV1PerpetualPositionReverseInfoApiResponse {
  code: number
  msg: string
  data: YapiGetV1PerpetualPositionReverseInfoData
}
export interface YapiGetV1PerpetualPositionReverseInfoData {
  /**
   * taker手续费率
   */
  takerFeeRate: string
  /**
   * 对手价
   */
  opponentPrice: string
  /**
   * 可用开仓保证金
   */
  availableOpenMargin: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取反向开仓信息↗](https://yapi.nbttfc365.com/project/44/interface/api/4231)
// **/
// export const getV1PerpetualPositionReverseInfoApiRequest: MarkcoinRequest<
//   YapiGetV1PerpetualPositionReverseInfoApiRequest,
//   YapiGetV1PerpetualPositionReverseInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/perpetual/position/reverseInfo",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
