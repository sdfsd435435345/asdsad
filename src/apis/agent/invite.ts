import request, { MarkcoinRequest } from '@/plugins/request'
import {
  YapiPostV1AgentInviteDetailsAnalysisApiRequest,
  YapiPostV1AgentInviteDetailsAnalysisApiResponse,
} from '@/typings/yapi/AgentInviteDetailsAnalysisV1PostApi'
import {
  YapiPostV1AgentInviteDetailsApiRequest,
  YapiPostV1AgentInviteDetailsApiResponse,
} from '@/typings/yapi/AgentInviteDetailsV1PostApi'
import {
  YapiPostV1AgentInviteHistoryApiRequest,
  YapiPostV1AgentInviteHistoryApiResponse,
} from '@/typings/yapi/AgentInviteHistoryV1PostApi'

/**
 * [代理商-邀请明细↗](https://yapi.nbttfc365.com/project/44/interface/api/4159)
 * */
export const postV1AgentInviteDetailsApiRequest: MarkcoinRequest<
  YapiPostV1AgentInviteDetailsApiRequest,
  YapiPostV1AgentInviteDetailsApiResponse
> = data => {
  return request({
    path: '/v1/agent/inviteDetails',
    method: 'POST',
    data,
  })
}

/**
 * [代理商-邀请明细分析↗](https://yapi.nbttfc365.com/project/44/interface/api/4235)
 * */
export const postV1AgentInviteDetailsAnalysisApiRequest: MarkcoinRequest<
  YapiPostV1AgentInviteDetailsAnalysisApiRequest,
  YapiPostV1AgentInviteDetailsAnalysisApiResponse['data']
> = params => {
  return request({
    path: '/v1/agent/inviteDetailsAnalysis',
    method: 'POST',
    data: params,
  })
}

/**
 * [代理商-邀请用户详情↗](https://yapi.nbttfc365.com/project/44/interface/api/4003)
 * */
export const postV1AgentInviteHistoryApiRequest: MarkcoinRequest<
  Partial<YapiPostV1AgentInviteHistoryApiRequest>,
  YapiPostV1AgentInviteHistoryApiResponse['data']
> = params => {
  return request({
    path: '/v1/agent/inviteHistory',
    method: 'POST',
    data: params,
  })
}
// return new Promise((resolve, reject) => {
//   axios
//     .request({
//       url: 'https://yapi.nbttfc365.com/mock/44/v1/agent/inviteHistory',
//       data: params,
//       method: 'POST',
//     })
//     .then(res => resolve({
//       isOk: true,
//       data: res.data.data
//     }))
