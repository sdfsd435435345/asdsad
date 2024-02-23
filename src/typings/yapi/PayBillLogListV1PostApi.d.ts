/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [资产-财务记录列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8594) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/pay/bill/log/list`
 * @更新时间 `2023-06-12 14:46:00`
 */
export interface YapiPostV1PayBillLogListApiRequest {
  /**
   * 类型， 201. 充币， 202. 提币 ,203 pay , 204. 冲正,205、c2c赔付，206、划转，207、提取保证金  208、充值保证金 209 划转  501、现货手续费 502、合约手续费 503、提币手续费             401、开仓手续费，402、平仓手续费，403、平仓盈亏，404、强制平仓，405、强制减仓，406、资金费用，407、提取保证金，408、充值保证金，409、锁仓手续费             410、迁移，411、强平手续费，412、穿仓保险金注入，413、 划转 801、现货手续费返佣 802、合约手续费返佣 803、借款手续费返佣，901、划转，902、Pay，903、C2C赔付
   */
  type?: number[]
  /**
   * 开始时间
   */
  startDate: number
  /**
   * 结束时间
   */
  endDate: number
  /**
   * 币种id
   */
  coinId?: string
  /**
   * 1、进行中 2、成功 3、失败 4、错误
   */
  status?: number[]
  /**
   * 页数，默认1
   */
  pageNum: number
  /**
   * 每页记录条数 默认20
   */
  pageSize: number
  /**
   * 财务类型：logTypeCd：全部时不传，1，现货，2、充提、3、借还款、4、合约、5、手续费、6、衍生品、7、其他，8、佣金，9、C2C
   */
  logType?: number
  /**
   * 合约组id
   */
  groupId?: string
}

/**
 * 接口 [资产-财务记录列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8594) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_614)
 * @请求头 `POST /v1/pay/bill/log/list`
 * @更新时间 `2023-06-12 14:46:00`
 */
export interface YapiPostV1PayBillLogListApiResponse {
  message?: string
  code?: number
  data?: YapiPostV1PayBillLogData
}
export interface YapiPostV1PayBillLogData {
  pageNum?: number
  pageSize?: number
  total?: number
  list?: YapiPostV1PayBillLogListData[]
}
export interface YapiPostV1PayBillLogListData {
  id?: string
  /**
   * 币种
   */
  businessCoin?: string
  /**
   * 总金额
   */
  total?: string
  /**
   * 创建时间
   */
  createdByTime?: number
  /**
   * 1、进行中 2、成功 3、失败 4、错误
   */
  status?: number
  /**
   * 类型， 201. 充币， 202. 提币 ,203 pay , 204. 冲正,205、c2c赔付，206、划转，207、提取保证金  208、充值保证金  209、划转 501、现货手续费 502、合约手续费 503、提币手续费             401、开仓手续费，402、平仓手续费，403、平仓盈亏，404、强制平仓，405、强制减仓，406、资金费用，407、提取保证金，408、充值保证金，409、锁仓手续费   410、迁移，411、强平手续费，412、穿仓保险金注入，413、划转 801、现货手续费返佣 802、合约手续费返佣 803、借款手续费返佣，901、划转，902、Pay，903、C2C赔付
   */
  type?: number
  /**
   * 合约类型：perpetual：永续、delivery：交割
   */
  groupType?: string
  /**
   * handler：手动/auto：自动
   */
  operationType?: string
  /**
   * 合约组名称
   */
  groupName?: string
  /**
   * 划转来源
   */
  from?: string
  /**
   * 划转去向
   */
  to?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [资产-财务记录列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8594)
// **/
// export const postV1PayBillLogListApiRequest: MarkcoinRequest<
//   YapiPostV1PayBillLogListApiRequest,
//   YapiPostV1PayBillLogListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/pay/bill/log/list",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
