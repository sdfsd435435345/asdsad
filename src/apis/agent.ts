import request, { MarkcoinRequest } from '@/plugins/request'
import {
  ICreateSpotNormalOrderReq,
  ICreateSpotPlanOrderReq,
  IQueryCloseCoinsResp,
  IQueryMarginCoinsResp,
  IQueryTradeNotificationsReq,
  IQueryTradeNotificationsResp,
  WithdrawsFeeListReq,
  WithdrawsFeeListResp,
} from '@/typings/api/trade'
import {
  YapiPostV1AgentInvitationCodeAddRebatesApiRequest,
  YapiPostV1AgentInvitationCodeAddRebatesApiResponse,
} from '@/typings/yapi/AgentInvitationCodeAddRebatesV1PostApi'
import {
  YapiGetV1AgentInvitationCodeGetSloganApiRequest,
  YapiGetV1AgentInvitationCodeGetSloganApiResponse,
} from '@/typings/yapi/AgentInvitationCodeGetSloganV1GetApi'
import {
  YapiGetV1AgentInvitationCodeQueryMaxApiRequest,
  YapiGetV1AgentInvitationCodeQueryMaxApiResponse,
} from '@/typings/yapi/AgentInvitationCodeQueryMaxV1GetApi'
import {
  YapiGetV1AgentInvitationCodeQueryProductCdApiRequest,
  YapiGetV1AgentInvitationCodeQueryProductCdApiResponse,
} from '@/typings/yapi/AgentInvitationCodeQueryProductCdV1GetApi'
import {
  YapiGetV1AgentInvitationCodeQueryRebatesApiRequest,
  YapiGetV1AgentInvitationCodeQueryRebatesApiResponse,
} from '@/typings/yapi/AgentInvitationCodeQueryRebatesV1GetApi'
import {
  YapiGetV1AgentInvitationCodeQuerySysApiRequest,
  YapiGetV1AgentInvitationCodeQuerySysApiResponse,
} from '@/typings/yapi/AgentInvitationCodeQuerySysV1GetApi'
import {
  YapiPostV1AgtApplicationAddApiRequest,
  YapiPostV1AgtApplicationAddApiResponse,
} from '@/typings/yapi/AgtApplicationAddV1PostApi'
import {
  YapiPostV2AgtApplicationAddApiRequest,
  YapiPostV2AgtApplicationAddApiResponse,
} from '@/typings/yapi/AgtApplicationAddV2PostApi'
import {
  YapiPostV1AgtApplicationUpdateApiRequest,
  YapiPostV1AgtApplicationUpdateApiResponse,
} from '@/typings/yapi/AgtApplicationUpdateV1PostApi'
import {
  YapiGetV1AgtRebateInfoHistoryGetTopApiRequest,
  YapiGetV1AgtRebateInfoHistoryGetTopApiResponse,
} from '@/typings/yapi/AgtRebateInfoHistoryGetTopV1GetApi'
import {
  YapiGetV1AgtRebateInfoHistoryOverviewApiRequest,
  YapiGetV1AgtRebateInfoHistoryOverviewApiResponse,
} from '@/typings/yapi/AgtRebateInfoHistoryOverviewV1GetApi'

/**
 * 新增邀请码
 */
export const postAgentInvitationCodeAdd: MarkcoinRequest = params => {
  return request({
    path: `/v1/agent/invitationCode/add`,
    method: 'POST',
    data: params,
  })
}

/**
 * 查询邀请码
 */
export const getAgentInvitationCodePageList: MarkcoinRequest = params => {
  return request({
    path: `/v1/agent/invitationCode/pageList`,
    method: 'GET',
    params,
  })
}

/**
 * 删除邀请码
 */
export const postAgentInvitationCodePageRemove: MarkcoinRequest = params => {
  return request({
    path: `/v1/agent/invitationCode/remove`,
    method: 'POST',
    data: params,
  })
}

/**
 * 修改邀请码
 */
export const postAgentInvitationCodePageUpdate: MarkcoinRequest = params => {
  return request({
    path: `/v1/agent/invitationCode/update`,
    method: 'POST',
    data: params,
  })
}

/**
 * 代理商申请
 */
export const postAgtApplicationAdd: MarkcoinRequest = params => {
  return request({
    path: `/v1/agtApplication/add`,
    method: 'POST',
    data: params,
  })
}

/**
 * 查询所有邀请码
 */
export const postInvitationCodeQuery: MarkcoinRequest = params => {
  return request({
    path: `/v1/agent/invitationCode/query`,
    method: 'GET',
    params,
  })
}

/**
 * [代理商 - 总览↗](https://yapi.nbttfc365.com/project/44/interface/api/4251)
 * */
export const getV1AgtRebateInfoHistoryOverviewApiRequest: MarkcoinRequest<
  YapiGetV1AgtRebateInfoHistoryOverviewApiRequest,
  YapiGetV1AgtRebateInfoHistoryOverviewApiResponse['data']
> = params => {
  return request({
    path: '/v1/agtRebateInfoHistory/overview',
    method: 'GET',
    params,
  })
}

/**
 * [代理商申请↗](https://yapi.nbttfc365.com/project/44/interface/api/4331)
 * */
export const postV1AgtApplicationAddApiRequest: MarkcoinRequest<
  YapiPostV1AgtApplicationAddApiRequest,
  YapiPostV1AgtApplicationAddApiResponse
> = data => {
  return request({
    path: '/v1/agtApplication/add',
    method: 'POST',
    data,
  })
}

/**
 * [代理商申请v2版本↗](https://yapi.nbttfc365.com/project/44/interface/api/5524)
 * */
export const postV2AgtApplicationAddApiRequest: MarkcoinRequest<
  YapiPostV2AgtApplicationAddApiRequest,
  YapiPostV2AgtApplicationAddApiResponse
> = data => {
  return request({
    path: '/v2/agtApplication/add',
    method: 'POST',
    data,
  })
}

/**
 * [查询系统最大可设置返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/4407)
 * */
export const getV1AgentInvitationCodeQueryMaxApiRequest: MarkcoinRequest<
  YapiGetV1AgentInvitationCodeQueryMaxApiRequest,
  YapiGetV1AgentInvitationCodeQueryMaxApiResponse['data']
> = params => {
  return request({
    path: '/v1/agent/invitationCode/queryMax',
    method: 'GET',
    params,
  })
}

/**
 * [周返佣 top↗](https://yapi.nbttfc365.com/project/44/interface/api/4411)
 * */
export const getV1AgtRebateInfoHistoryGetTopApiRequest: MarkcoinRequest<
  YapiGetV1AgtRebateInfoHistoryGetTopApiRequest,
  YapiGetV1AgtRebateInfoHistoryGetTopApiResponse['data']
> = params => {
  return request({
    path: '/v1/agtRebateInfoHistory/getTop',
    method: 'GET',
    params,
  })
}

/**
 * [代理商 - 代理第一次设置返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/4403)
 * */
export const postV1AgentInvitationCodeAddRebatesApiRequest: MarkcoinRequest<
  YapiPostV1AgentInvitationCodeAddRebatesApiRequest,
  YapiPostV1AgentInvitationCodeAddRebatesApiResponse
> = data => {
  return request({
    path: '/v1/agent/invitationCode/addRebates',
    method: 'POST',
    data,
  })
}

/**
 * [申请代理商查询系统最大可设置返佣比例↗](https://yapi.nbttfc365.com/project/44/interface/api/4419)
 * */
export const getV1AgentInvitationCodeQuerySysApiRequest: MarkcoinRequest<
  YapiGetV1AgentInvitationCodeQuerySysApiRequest,
  YapiGetV1AgentInvitationCodeQuerySysApiResponse['data']
> = params => {
  return request({
    path: '/v1/agent/invitationCode/querySys',
    method: 'GET',
    params,
  })
}

/**
 * [代理商申请信息修改↗](https://yapi.nbttfc365.com/project/44/interface/api/4567)
 * */
export const postV1AgtApplicationUpdateApiRequest: MarkcoinRequest<
  YapiPostV1AgtApplicationUpdateApiRequest,
  YapiPostV1AgtApplicationUpdateApiResponse
> = data => {
  return request({
    path: '/v1/agtApplication/update',
    method: 'POST',
    data,
  })
}

/**
 * [查询海报文案↗](https://yapi.nbttfc365.com/project/44/interface/api/4652)
 * */
export const getV1AgentInvitationCodeGetSloganApiRequest: MarkcoinRequest<
  YapiGetV1AgentInvitationCodeGetSloganApiRequest,
  YapiGetV1AgentInvitationCodeGetSloganApiResponse['data']
> = params => {
  return request({
    path: '/v1/agent/invitationCode/getSlogan',
    method: 'GET',
    params,
  })
}

/**
 * [查询代理加普通一共开通的产品线↗](https://yapi.nbttfc365.com/project/44/interface/api/5479)
 * */
export const getV1AgentInvitationCodeQueryProductCdApiRequest: MarkcoinRequest<
  YapiGetV1AgentInvitationCodeQueryProductCdApiRequest,
  YapiGetV1AgentInvitationCodeQueryProductCdApiResponse['data']
> = params => {
  return request({
    path: '/v1/agent/invitationCode/queryProductCd',
    method: 'GET',
    params,
  })
}

/**
 * [海报比例查询↗](https://yapi.nbttfc365.com/project/44/interface/api/5111)
 * */
export const getV1AgentInvitationCodeQueryRebatesApiRequest: MarkcoinRequest<
  YapiGetV1AgentInvitationCodeQueryRebatesApiRequest,
  YapiGetV1AgentInvitationCodeQueryRebatesApiResponse['data']
> = params => {
  return request({
    path: '/v1/agent/invitationCode/queryRebates',
    method: 'GET',
    params,
  })
}
