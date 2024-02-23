/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [开卡申请↗](https://yapi.nbttfc365.com/project/77/interface/api/8974) 的 **请求类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `POST /v1/vcc/cardApply`
 * @更新时间 `2023-06-19 18:07:12`
 */
export interface YapiPostV1VccCardApplyApiRequest {
  /**
   * 充值币种ID
   */
  rechargeCoinId: number
  /**
   * 卡头ID，卡头列表接口数据的<cardBin>字段
   */
  binRangeId: string
  /**
   * 充值金额
   */
  limitAmount: number
  /**
   * 卡别名
   */
  cardAlias: string
  /**
   * 支付密码
   */
  password: string
}

/**
 * 接口 [开卡申请↗](https://yapi.nbttfc365.com/project/77/interface/api/8974) 的 **返回类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `POST /v1/vcc/cardApply`
 * @更新时间 `2023-06-19 18:07:12`
 */
export interface YapiPostV1VccCardApplyApiResponse {
  /**
   * 200为成功，其他均为失败
   */
  code: number
  msg: string
  data: null
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [开卡申请↗](https://yapi.nbttfc365.com/project/77/interface/api/8974)
// **/
// export const postV1VccCardApplyApiRequest: MarkcoinRequest<
//   YapiPostV1VccCardApplyApiRequest,
//   YapiPostV1VccCardApplyApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/vcc/cardApply",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
