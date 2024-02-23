/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-邀请用户详情(弃用, 查看v2版本)↗](https://yapi.nbttfc365.com/project/44/interface/api/4003) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agent/inviteHistory`
 * @更新时间 `2023-08-17 19:06:25`
 */
export interface YapiPostV1AgentInviteHistoryApiRequest {
  /**
   * 查看指定的UID
   */
  targetUid: number
  /**
   * 展示层级限制, 默认不限制 如需要只看我的下级，此处应传 1
   */
  levelLimit?: number
  /**
   * 上级id
   */
  puid?: number
  /**
   * 最小现货手续费总值
   */
  spotMin?: number
  /**
   * 最大现货手续费总值
   */
  spotMax?: number
  /**
   * 最小合约手续费总值
   */
  contractMin?: number
  /**
   * 最大合约手续费总值
   */
  contractMax?: number
  /**
   * 最小借币利息总值
   */
  borrowCoinMin?: number
  /**
   * 最大借币利息总值
   */
  borrowCoinMax?: number
}

/**
 * 接口 [代理商-邀请用户详情(弃用, 查看v2版本)↗](https://yapi.nbttfc365.com/project/44/interface/api/4003) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agent/inviteHistory`
 * @更新时间 `2023-08-17 19:06:25`
 */
export interface YapiPostV1AgentInviteHistoryApiResponse {
  /**
   * 错误码
   */
  code: number
  data: YapiPostV1AgentInviteHistoryData
  /**
   * 错误信息
   */
  message: string
}
export interface YapiPostV1AgentInviteHistoryData {
  members: YapiPostV1AgentInviteHistoryListMembersData[]
}
export interface YapiPostV1AgentInviteHistoryListMembersData {
  /**
   * 用户UID
   */
  uid: number
  /**
   * 上级 UID
   */
  parentUid: number
  /**
   * 邀请人数
   */
  inviteCount: number
  /**
   * 代理级别
   */
  level: string
  /**
   * 现货返佣比例
   */
  spotRate: number
  /**
   * 合约返佣比例
   */
  contractRate: number
  /**
   * 借币手续费比例
   */
  borrowCoinRate: number
  /**
   * KYC 状态
   */
  kycStatus: string
  /**
   * 现货手续费总额
   */
  toalSpotFee: number
  /**
   * 合约手续费总额
   */
  totalContractFee: number
  /**
   * 借币手续费总额
   */
  totalBorrowFee: number
  /**
   * 创建时间戳
   */
  createdTime: number
  /**
   * 修改时间戳
   */
  updatedTime: number
  /**
   * 合约开通状态，数据字典usr_contract_status_cd
   */
  contractStatus: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-邀请用户详情(弃用, 查看v2版本)↗](https://yapi.nbttfc365.com/project/44/interface/api/4003)
// **/
// export const postV1AgentInviteHistoryApiRequest: MarkcoinRequest<
//   YapiPostV1AgentInviteHistoryApiRequest,
//   YapiPostV1AgentInviteHistoryApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/inviteHistory",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
