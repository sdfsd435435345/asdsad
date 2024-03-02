import request, { MarkcoinRequest } from '@/plugins/request'
import {
  YapiGetV1GuideMapQueryAllApiRequest,
  YapiGetV1GuideMapQueryAllApiResponse,
} from '@/typings/yapi/GuideMapQueryAllV1GetApi'
import {
  YapiPostV1GuideMapUpdateApiRequest,
  YapiPostV1GuideMapUpdateApiResponse,
} from '@/typings/yapi/GuideMapUpdateV1PostApi'

/**
 * [查询所有的引导图状态↗](https://yapi.nbttfc365.com/project/44/interface/api/5614)
 * */
export const getV1GuideMapQueryAllApiRequest: MarkcoinRequest<
  YapiGetV1GuideMapQueryAllApiRequest,
  YapiGetV1GuideMapQueryAllApiResponse['data']
> = params => {
  return request({
    path: '/v1/guideMap/queryAll',
    method: 'GET',
    params,
  })
}

/**
 * [修改引导图状态↗](https://yapi.nbttfc365.com/project/44/interface/api/5619)
 * */
export const postV1GuideMapUpdateApiRequest: MarkcoinRequest<
  YapiPostV1GuideMapUpdateApiRequest,
  YapiPostV1GuideMapUpdateApiResponse['data']
> = data => {
  return request({
    path: '/v1/guideMap/update',
    method: 'POST',
    data,
  })
}


export const postV1GuideMemberActive: MarkcoinRequest = data => {
  return request({
    path: '/memberBase/memberActive',
    method: 'POST',
    data,
  })
}


export const postMemberMoneyMoneyLogDetailPage: MarkcoinRequest = data => {
  return request({
    path: '/memberMoney/moneyLogDetailPage',
    method: 'POST',
    data,
  })
}


export const postSiteMessageSiteMessagePage: MarkcoinRequest = data => {
  return request({
    path: '/siteMessage/siteMessagePage',
    method: 'POST',
    data,
  })
}


export const postSiteMessageRunningOrderPage: MarkcoinRequest = data => {
  return request({
    path: '/siteMessage/runningOrderPage',
    method: 'POST',
    data,
  })
}


export const postSiteMessageDelMessage: MarkcoinRequest = params => {
  return request({
    path: '/siteMessage/delMessage',
    method: 'POST',
    params,
  })
}


export const postSiteMessageMakeRead: MarkcoinRequest = params => {
  return request({
    path: '/siteMessage/makeRead',
    method: 'POST',
    params,
  })
}

export const postMemberTransMyBuyOrderPage: MarkcoinRequest = data => {
  return request({
    path: '/memberTrans/myBuyOrderPage',
    method: 'POST',
    data,
  })
}


export const postMemberTransMySoldOrderPage: MarkcoinRequest = data => {
  return request({
    path: '/memberTrans/mySoldOrderPage',
    method: 'POST',
    data,
  })
}

export const postMemberTransSonOrders: MarkcoinRequest = data => {
  return request({
    path: '/memberTrans/sonOrders',
    ethod: 'POST',
    data,
  })
}

export const postMemberTransSoldOrderPage: MarkcoinRequest = data => {
  return request({
    path: '/memberTrans/soldOrderPage',
    method: 'POST',
    data,
  })
}

export const postMemberTransBuyOrderCreate: MarkcoinRequest = data => {
  return request({
    path: '/memberTrans/buyOrderCreate',
    method: 'POST',
    data,
  })
}

export const postMemberAdvMyPayments: MarkcoinRequest = data => {
  return request({
    path: '/memberAdv/myPayments',
    method: 'POST',
    data,
  })
}

export const postMemberTransSoldOrderCreate: MarkcoinRequest = data => {
  return request({
    path: '/memberTrans/soldOrderCreate',
    method: 'POST',
    data,
  })
}

export const postMemberBuyOrderCreate: MarkcoinRequest = data => {
  return request({
    path: '/memberTrans/buyOrderCreate',
    method: 'POST',
    data,
  })
}