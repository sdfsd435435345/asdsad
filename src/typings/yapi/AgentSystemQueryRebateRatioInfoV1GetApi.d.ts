/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [邀请返佣-返佣阶梯规则↗](https://yapi.nbttfc365.com/project/44/interface/api/18189) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/system/queryRebateRatioInfo`
 * @更新时间 `2023-10-30 17:42:48`
 */
export interface YapiGetV1AgentSystemQueryRebateRatioInfoApiRequest {
  /**
   * 模式
   */
  model: string
}

/**
 * 接口 [邀请返佣-返佣阶梯规则↗](https://yapi.nbttfc365.com/project/44/interface/api/18189) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `GET /v1/agent/system/queryRebateRatioInfo`
 * @更新时间 `2023-10-30 17:42:48`
 */
export interface YapiGetV1AgentSystemQueryRebateRatioInfoApiResponse {
  code: number
  message: string
  data: YapiGetV1AgentSystemQueryRebateRatioInfoData
}
export interface YapiGetV1AgentSystemQueryRebateRatioInfoData {
  /**
   * 用户id
   */
  uid: number
  /**
   * 升级规则
   */
  upgrade: string
  /**
   * 当前用户等级
   */
  live: number
  /**
   * 邀请人数
   */
  teamSize: number
  /**
   * 区域团队业务量（usdt fee）三级直推业务量
   */
  volumeOfBusiness: number
  /**
   * 自身业务量（usdt fee）
   */
  meBusinessVolume: number
  /**
   * 降级规则
   */
  demotion: string
  /**
   * 代理商结算币种
   */
  currencySymbol: string
  /**
   * 精度
   */
  currencyOffset: string
  /**
   * 三级返佣
   */
  threeLiveRebateRatioList: YapiGetV1AgentSystemQueryRebateRatioInfoListThreeLiveRebateRatioListData[]
  /**
   * 区域返佣
   */
  areaRebateRatioList: YapiGetV1AgentSystemQueryRebateRatioInfoListAreaRebateRatioListData[]
}
export interface YapiGetV1AgentSystemQueryRebateRatioInfoListThreeLiveRebateRatioListData {
  /**
   * 级别
   */
  live: string
  /**
   * 一级返佣比例
   */
  oneRebateRatio: string
  /**
   * 二级返佣比例
   */
  twoRebateRatio: string
  /**
   * 三级返佣比例
   */
  threeRebateRatio: string
  conData: YapiGetV1AgentSystemQueryRebateRatioInfoConDataListThreeLiveRebateRatioListData
}
/**
 * 升降级规则
 */
export interface YapiGetV1AgentSystemQueryRebateRatioInfoConDataListThreeLiveRebateRatioListData {
  /**
   * 组与规则之间关系
   */
  contion: string
  /**
   * 组
   */
  upDownLiveDataGroupRespDTO: string[]
  /**
   * 规则
   */
  upDownLiveDataRespDTO: string[]
}
export interface YapiGetV1AgentSystemQueryRebateRatioInfoListAreaRebateRatioListData {
  /**
   * 级别
   */
  live: string
  /**
   * 返佣比例
   */
  rebateRatio: string
  conData: YapiGetV1AgentSystemQueryRebateRatioInfoConDataListAreaRebateRatioListData
}
/**
 * 升降级规则
 */
export interface YapiGetV1AgentSystemQueryRebateRatioInfoConDataListAreaRebateRatioListData {
  /**
   * 组与规则之间关系
   */
  contion: string
  /**
   * 组
   */
  upDownLiveDataGroupRespDTO: string[]
  /**
   * 规则
   */
  upDownLiveDataRespDTO: string[]
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [邀请返佣-返佣阶梯规则↗](https://yapi.nbttfc365.com/project/44/interface/api/18189)
// **/
// export const getV1AgentSystemQueryRebateRatioInfoApiRequest: MarkcoinRequest<
//   YapiGetV1AgentSystemQueryRebateRatioInfoApiRequest,
//   YapiGetV1AgentSystemQueryRebateRatioInfoApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/agent/system/queryRebateRatioInfo",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
