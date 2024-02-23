/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-财务记录列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6329) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/pay/asset/trade/bills/list`
 * @更新时间 `2023-06-12 14:17:39`
 */
export interface YapiPostV1PayAssetTradeBillsListApiRequest {
  /**
   * 类型， 1. 充币， 2. 提币 ,3 pay , 4. 冲正
   */
  type?: number
  /**
   * 开始时间
   */
  startDate?: number
  /**
   * 结束时间
   */
  endDate?: number
  /**
   * 币种 支持模糊查询
   */
  businessCoin?: string
  /**
   *      * 状态      *  提现状态      *      1 用户提交，2 用户验证通过， 3 待审核， 4 审核通过， 5 等待区块确认, 6 钱包机交易失败， 7钱包机交易成功，8 驳回 ，      *      *  充值状态      *      11 收到充值， 12 充值已记分， 13 充值冻结
   */
  status?: number
  /**
   * 页数，默认1
   */
  pageNum?: string
  /**
   * 每页记录条数 默认20
   */
  pageSize?: string
}

/**
 * 接口 [资产-财务记录列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6329) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/pay/asset/trade/bills/list`
 * @更新时间 `2023-06-12 14:17:39`
 */
export interface YapiPostV1PayAssetTradeBillsListApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1PayAssetTradeBillsData
}
export interface YapiPostV1PayAssetTradeBillsData {
  /**
   *   * 提现状态      * 1 用户提交，2 用户验证通过， 3 待审核， 4 审核通过， 5 等待区块确认, 6 钱包机交易失败， 7钱包机交易成功，8 驳回 ，      *      * 充值状态      * 11 收到充值， 12 充值已记分， 13 充值冻结
   */
  status?: number
  /**
   * 总金额
   */
  total?: number
  /**
   * 创建时间
   */
  createdByTime?: number
  /**
   * 类型， 1. 充币， 2. 提币
   */
  type?: number
  /**
   * 记录id
   */
  id: string
  /**
   * 币种
   */
  businessCoin: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-财务记录列表↗](https://yapi.nbttfc365.com/project/77/interface/api/6329)
// **/
// export const postV1PayAssetTradeBillsListApiRequest: MarkcoinRequest<
//   YapiPostV1PayAssetTradeBillsListApiRequest,
//   YapiPostV1PayAssetTradeBillsListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/pay/asset/trade/bills/list",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
