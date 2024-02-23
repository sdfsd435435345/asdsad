/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-邀请用户详情V2版本↗](https://yapi.nbttfc365.com/project/44/interface/api/5889) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v2/agent/inviteHistory`
 * @更新时间 `2023-07-07 14:39:53`
 */
export interface YapiPostV2AgentInviteHistoryApiRequest {
  /**
   * 查看指定的UID，queryType=1传
   */
  targetUid: number
  /**
   * 展示层级限制, 默认不限制 如需要只看我的下级，此处应传 1
   */
  levelLimit?: number
  /**
   * 上级id，queryType=2传
   */
  parentUid?: number
  /**
   * 产品线 字典表code：agent_product_cd
   */
  productCd?: string
  /**
   * 总返佣最低价
   */
  minTotalRebate?: number
  /**
   * 总返佣最高价
   */
  maxTotalRebate?: number
  /**
   * 最低返佣比例
   */
  minRebateRatio?: number
  /**
   * 最高返佣比例
   */
  maxRebateRatio?: number
  /**
   * 开始时间
   */
  startDate?: number
  /**
   * 结束时间
   */
  endDate?: number
  /**
   * 页数
   */
  page: number
  /**
   * 每页数量
   */
  pageSize: number
  /**
   * 查询方式，1，用户UID查询,2,上级UID查询
   */
  queryType: number
}

/**
 * 接口 [代理商-邀请用户详情V2版本↗](https://yapi.nbttfc365.com/project/44/interface/api/5889) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v2/agent/inviteHistory`
 * @更新时间 `2023-07-07 14:39:53`
 */
export interface YapiPostV2AgentInviteHistoryApiResponse {
  /**
   * 错误码
   */
  code: number
  data: YapiPostV2AgentInviteHistoryData
  /**
   * 错误信息
   */
  message: string
}
export interface YapiPostV2AgentInviteHistoryData {
  list: YapiPostV2AgentInviteHistoryListData[]
  /**
   * 总条数
   */
  total: number
  /**
   * 每页数
   */
  page: number
  /**
   * 页数
   */
  pageNum: number
  /**
   * 法币币种
   */
  legalCur: string
}
export interface YapiPostV2AgentInviteHistoryListData {
  /**
   * 用户UID
   */
  uid: number
  /**
   * 登录名
   */
  nickName: string
  /**
   * 上级 UID
   */
  parentUid: number
  /**
   * 是否是代理商,1=代理商,2=自推
   */
  isAgt: string
  /**
   * 手机号
   */
  mobileNumber: string
  /**
   * 邮箱
   */
  email: string
  /**
   * 团体用户数
   */
  inviteCount: number
  /**
   * 代理级别
   */
  level: number
  ratios: YapiPostV2AgentInviteHistoryListRatiosListData[]
  /**
   * KYC 状态
   */
  kycStatus: number
  /**
   * 合约开通状态，数据字典usr_contract_status_cd
   */
  contractStatus: number
  /**
   * 总返佣
   */
  totalRebate: string
  /**
   * 自返佣
   */
  selfRebate: string
  /**
   * 团队返佣
   */
  teamRebate: string
  /**
   * 团队手续费
   */
  teamFee: string
  /**
   * 团队贡献返佣
   */
  teamContributionRebate: string
  /**
   * 总入金
   */
  deposit: string
  /**
   * 总出金
   */
  withdraw: string
  /**
   * 创建时间戳
   */
  createdByTime: number
  /**
   * 修改时间戳
   */
  updatedByTime: number
}
export interface YapiPostV2AgentInviteHistoryListRatiosListData {
  /**
   * 产品线
   */
  productCd: string
  /**
   * 上级返佣比例
   */
  parentRatio: string
  /**
   * 自身返佣比例
   */
  selfRatio: string
  /**
   * 好友返佣比例
   */
  childRatio: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-邀请用户详情V2版本↗](https://yapi.nbttfc365.com/project/44/interface/api/5889)
// **/
// export const postV2AgentInviteHistoryApiRequest: MarkcoinRequest<
//   YapiPostV2AgentInviteHistoryApiRequest,
//   YapiPostV2AgentInviteHistoryApiResponse['data']
// > = data => {
//   return request({
//     path: "/v2/agent/inviteHistory",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
