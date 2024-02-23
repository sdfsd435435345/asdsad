/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [虚拟卡充值↗](https://yapi.nbttfc365.com/project/77/interface/api/8984) 的 **请求类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `POST /v1/vcc/cardRecharge`
 * @更新时间 `2023-06-17 01:59:08`
 */
export interface YapiPostV1VccCardRechargeApiRequest {
  /**
   * 充值扣减的币种
   */
  coinId: number
  /**
   * 虚拟卡编号
   */
  cardId: string
  /**
   * 充值金额:(开卡金额单位为：USD) 需要在前端通过汇率大概计算
   */
  amount: number
  /**
   * 支付密码
   */
  password: string
}

/**
 * 接口 [虚拟卡充值↗](https://yapi.nbttfc365.com/project/77/interface/api/8984) 的 **返回类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `POST /v1/vcc/cardRecharge`
 * @更新时间 `2023-06-17 01:59:08`
 */
export interface YapiPostV1VccCardRechargeApiResponse {
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
// * [虚拟卡充值↗](https://yapi.nbttfc365.com/project/77/interface/api/8984)
// **/
// export const postV1VccCardRechargeApiRequest: MarkcoinRequest<
//   YapiPostV1VccCardRechargeApiRequest,
//   YapiPostV1VccCardRechargeApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/vcc/cardRecharge",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
