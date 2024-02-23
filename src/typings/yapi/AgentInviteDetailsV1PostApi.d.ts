/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商-邀请明细↗](https://yapi.nbttfc365.com/project/44/interface/api/4159) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agent/inviteDetails`
 * @更新时间 `2023-08-18 14:58:19`
 */
export interface YapiPostV1AgentInviteDetailsApiRequest {
  /**
   * 邀请类型 1为代理2非代理
   */
  isAgt?: string
  /**
   * 搜索用户id
   */
  uid?: number
  /**
   * 实名状态 1为未认证，2为已认证，传3查所有
   */
  kycStatus?: number
  /**
   * 最小伞下人数
   */
  minChildNum?: number
  /**
   * 最大伞下人数
   */
  maxChildNum?: number
  /**
   * 注册开始时间
   */
  registerStartTime?: string
  /**
   * 注册结束时间
   */
  registerEndTime?: string
  /**
   * 注册时间排序1正序2倒序
   */
  registerSort?: string
  /**
   * 伞下人数排序1正序2倒序
   */
  childNumSort?: string
  /**
   * 当前页
   */
  page: number
  /**
   * 每页条数
   */
  pageSize: number
}

/**
 * 接口 [代理商-邀请明细↗](https://yapi.nbttfc365.com/project/44/interface/api/4159) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v1/agent/inviteDetails`
 * @更新时间 `2023-08-18 14:58:19`
 */
export interface YapiPostV1AgentInviteDetailsApiResponse {
  /**
   * 已邀请用户数
   */
  invitedNum: number
  /**
   * 伞下总人数
   */
  totalNum: number
  /**
   * 今日新增
   */
  today: number
  /**
   * 七日新增
   */
  sevenDays: number
  /**
   * 三十日新增
   */
  thirtyDays: string
  members: YapiPostV1AgentInviteDetailsListMembers[]
}
export interface YapiPostV1AgentInviteDetailsListMembers {
  /**
   * 用户名称
   */
  nickName: string
  /**
   * 用户id
   */
  uid: number
  /**
   * 伞下人数
   */
  inviteCount: string
  /**
   * 是否代理
   */
  isAgt: string
  /**
   * 注册时间（时间戳）
   */
  createdTime: number
  scales: YapiPostV1AgentInviteDetailsListScalesListMembers[]
  /**
   * 实名状态 1为未认证，不传默认已认证
   */
  kycStatus: string
  /**
   * 现货自己返佣比例
   */
  spotSelf: number
  /**
   * 现货下级返佣比例
   */
  spotChild: number
  /**
   * 合约自己返佣比例
   */
  contractSelf: number
  /**
   * 合约下级返佣比例
   */
  contractChild: number
  /**
   * 借币自己返佣比例
   */
  borrowSelf: number
  /**
   * 借币下级返佣比例
   */
  borrowChild: number
  /**
   * 三元期权自己返佣比例
   */
  optionSelf: number
  /**
   * 三元期权下级返佣比例
   */
  optionChild: number
  /**
   * 娱乐区自己返佣比例
   */
  recreationSelf: number
  /**
   * 娱乐区下级返佣比例
   */
  recreationChild: number
}
export interface YapiPostV1AgentInviteDetailsListScalesListMembers {
  /**
   * 产品线(1=现货,2=合约,3=借币,4=三元期权,5=娱乐区)
   */
  productCd: string
  /**
   * 自身分成
   */
  selfScale: string
  /**
   * 好友分成
   */
  childScale: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商-邀请明细↗](https://yapi.nbttfc365.com/project/44/interface/api/4159)
// **/
// export const postV1AgentInviteDetailsApiRequest: MarkcoinRequest<
//   YapiPostV1AgentInviteDetailsApiRequest,
//   YapiPostV1AgentInviteDetailsApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/inviteDetails",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
