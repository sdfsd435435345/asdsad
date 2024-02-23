/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取财务日志币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/2705) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/bill/log/coinList`
 * @更新时间 `2023-04-25 11:22:53`
 */
export interface YapiGetV1BillLogCoinListApiRequest {
  /**
   * 财务类型：logTypeCd：全部时不传，1，现货，2、充提、3、借还款、4、合约、5、手续费、6、衍生品、7、其他、8、佣金、9、C2C
   */
  'logType'?: string
  /**
   * 合约组id
   */
  'groupId'?: string
  /**
   * 类型， 201. 充币， 202. 提币 ,203 pay , 204. 冲正,205、c2c赔付，206、划转，207、提取保证金  208、充值保证金  501、现货手续费 502、合约手续费 503、提币手续费             401、开仓手续费，402、平仓手续费，403、平仓盈亏，404、强制平仓，405、强制减仓，406、资金费用，407、提取保证金，408、充值保证金，409、锁仓手续费             410、迁移，411、强平手续费，412、穿仓保险金注入，801、现货手续费返佣 802、合约手续费返佣 803、借款手续费返佣，901、划转，902、Pay，903、C2C赔付
   */
  'type[]'?: string
}

/**
 * 接口 [获取财务日志币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/2705) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `GET /v1/bill/log/coinList`
 * @更新时间 `2023-04-25 11:22:53`
 */
export interface YapiGetV1BillLogCoinListApiResponse {
  code?: number
  message?: string
  data?: YapiGetV1BillLogCoinData
}
export interface YapiGetV1BillLogCoinData {
  coinList?: YapiGetV1BillLogCoinListCoinListData[]
}
export interface YapiGetV1BillLogCoinListCoinListData {
  id: string
  /**
   * 币种简称
   */
  coinName: string
  /**
   * 币种
   */
  symbol: string
  /**
   * 名称
   */
  coinFullName: string
  webLogo: string
  appLogo: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取财务日志币种信息↗](https://yapi.nbttfc365.com/project/44/interface/api/2705)
// **/
// export const getV1BillLogCoinListApiRequest: MarkcoinRequest<
//   YapiGetV1BillLogCoinListApiRequest,
//   YapiGetV1BillLogCoinListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/bill/log/coinList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
