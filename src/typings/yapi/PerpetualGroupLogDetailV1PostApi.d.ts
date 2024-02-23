/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组日志详情(删除，用现货日志详情接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4199) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/log/detail`
 * @更新时间 `2023-01-18 14:21:41`
 */
export interface YapiPostV1PerpetualGroupLogDetailApiRequest {
  /**
   * 日志id
   */
  id: string
}

/**
 * 接口 [合约组日志详情(删除，用现货日志详情接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4199) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /v1/perpetual/group/log/detail`
 * @更新时间 `2023-01-18 14:21:41`
 */
export interface YapiPostV1PerpetualGroupLogDetailApiResponse {
  code: string
  msg: string
  data: YapiPostV1PerpetualGroupLogDetailData
}
export interface YapiPostV1PerpetualGroupLogDetailData {
  /**
   * 流水号
   */
  serialNumber: string
  /**
   * 日志类型
   */
  type: string
  /**
   * 币种名称
   */
  coinName: string
  /**
   * 状态
   */
  status: string
  /**
   * 购买力
   */
  purchasingPower: string
  /**
   * 合约组名称
   */
  groupName: string
  /**
   * 手动/自动
   */
  operationType: string
  /**
   * 创建时间
   */
  createTime: string
  /**
   * 完成时间
   */
  updateTime: string
  /**
   * 目标合约组名称
   */
  toGroupName: string
  /**
   * 杠杆倍数
   */
  lever: string
  /**
   * 开空/开多
   */
  side: string
  /**
   * 资金明细（费用明细）
   */
  assetDetail: YapiPostV1PerpetualGroupLogDetailListAssetDetailData[]
  /**
   * 成交明细
   */
  dealDetail: YapiPostV1PerpetualGroupLogDetailListDealDetailData[]
}
export interface YapiPostV1PerpetualGroupLogDetailListAssetDetailData {
  /**
   * 时间
   */
  time: string
  /**
   * 数量
   */
  amount: string
  /**
   * 类型
   */
  assetType: string
}
export interface YapiPostV1PerpetualGroupLogDetailListDealDetailData {
  /**
   * 时间
   */
  time: string
  /**
   * 数量
   */
  size: string
  /**
   * 价格
   */
  price: string
  /**
   * 手续费
   */
  fee: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组日志详情(删除，用现货日志详情接口)↗](https://yapi.nbttfc365.com/project/44/interface/api/4199)
// **/
// export const postV1PerpetualGroupLogDetailApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualGroupLogDetailApiRequest,
//   YapiPostV1PerpetualGroupLogDetailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/group/log/detail",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
