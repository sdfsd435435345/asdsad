/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理中心-收益详情↗](https://yapi.nbttfc365.com/project/44/interface/api/15224) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/center/earningsDetail`
 * @更新时间 `2023-10-16 13:59:35`
 */
export interface YapiPostV1AgentCenterEarningsDetailApiRequest {
  /**
   * 模式
   */
  model: string
  /**
   * 产品线
   */
  productCd?: number
  /**
   * 收益计算开始时间
   */
  startTime: number
  /**
   * 收益计算结束时间
   */
  endTime: number
  /**
   * 返佣类型
   */
  rebateType?: number
  /**
   * 金额大小范围(USD)最低价
   */
  minAmount?: number
  /**
   * 金额大小范围(USD)最高价
   */
  maxAmount?: number
  /**
   * 返佣层级
   */
  rebateLevel?: string
  pageNum: number
  pageSize: number
  /**
   * 1 返佣时间；2 手续费；3结算币种数量
   */
  sort?: number
  /**
   * 排序规则 1.正，2.倒
   */
  sortRule?: number
}

/**
 * 接口 [代理中心-收益详情↗](https://yapi.nbttfc365.com/project/44/interface/api/15224) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/center/earningsDetail`
 * @更新时间 `2023-10-16 13:59:35`
 */
export interface YapiPostV1AgentCenterEarningsDetailApiResponse {
  message?: string
  data?: YapiPostV1AgentCenterEarningsDetailData
  /**
   * 查看页码
   */
  pageNum?: number
  /**
   * 每页条数
   */
  pageSize?: number
  /**
   * 总条数
   */
  total?: number
  /**
   * 总页码
   */
  pageTotal?: number
}
export interface YapiPostV1AgentCenterEarningsDetailData {
  /**
   * 金字塔代理收益详情列表
   */
  pyramidAgentRebateList?: YapiPostV1AgentCenterEarningsDetailListPyramidAgentRebateListData[]
  /**
   * 区域代理收益详情列表
   */
  areaAgentRebateList?: YapiPostV1AgentCenterEarningsDetailListAreaAgentRebateListData[]
  threeLevelAgentRebateList?: YapiPostV1AgentCenterEarningsDetailListThreeLevelAgentRebateListData[]
}
export interface YapiPostV1AgentCenterEarningsDetailListPyramidAgentRebateListData {
  /**
   * 返佣的币种代码
   */
  symbol?: string
  /**
   * 法币精度
   */
  currencyOffset: number
  /**
   * 返佣币种数量
   */
  amount?: number
  /**
   * 团队手续费（USDT）
   */
  teamFee?: number
  /**
   * 下级UID
   */
  childUid?: number
  /**
   * 产品线
   */
  productCd?: string
  /**
   * 我的返佣比例
   */
  selfRatio?: number
  /**
   * 好友的
   */
  childRatio?: number
  /**
   * 返佣类型
   */
  rebateType?: string
  /**
   * 返佣时间
   */
  rebateDate?: number
  id?: number
}
export interface YapiPostV1AgentCenterEarningsDetailListAreaAgentRebateListData {
  /**
   * 返佣的币种代码
   */
  symbol?: string
  /**
   * 法币精度
   */
  currencyOffset?: number
  /**
   * 返佣币种数量
   */
  amount?: number
  /**
   * 团队手续费（USDT）
   */
  teamFee?: number
  /**
   * 下级UID
   */
  childUid?: number
  /**
   * 比例
   */
  rebateRatio?: string
  /**
   * TA的区域等级
   */
  rebateLevel?: string
  /**
   * 返佣类型
   */
  rebateType?: string
  /**
   * 返佣时间
   */
  rebateDate?: number
  id?: number
}
export interface YapiPostV1AgentCenterEarningsDetailListThreeLevelAgentRebateListData {
  /**
   * 返佣的币种代码
   */
  symbol?: string
  /**
   * 法币精度
   */
  currencyOffset?: string
  /**
   * 返佣币种数量
   */
  amount?: number
  /**
   * TA的手续费(USDT)
   */
  fee?: number
  /**
   * TA的层级
   */
  rebateLevel?: number
  /**
   * 返佣比例
   */
  rebateRatio?: number
  /**
   * 下级UID
   */
  childUid?: number
  /**
   * 产品线
   */
  productCd?: string
  /**
   * 返佣时间
   */
  rebateDate?: number
  id?: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理中心-收益详情↗](https://yapi.nbttfc365.com/project/44/interface/api/15224)
// **/
// export const postV1AgentCenterEarningsDetailApiRequest: MarkcoinRequest<
//   YapiPostV1AgentCenterEarningsDetailApiRequest,
//   YapiPostV1AgentCenterEarningsDetailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/center/earningsDetail",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
