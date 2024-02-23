import request, { MarkcoinRequest } from '@/plugins/request'
import {
  YapiPostV1PerpetualTradePairPriceNoticeAddApiRequest,
  YapiPostV1PerpetualTradePairPriceNoticeAddApiResponse,
} from '@/typings/yapi/PerpetualTradePairPriceNoticeAddV1PostApi'
import {
  YapiGetV1PerpetualTradePairPriceNoticeAllApiRequest,
  YapiGetV1PerpetualTradePairPriceNoticeAllApiResponse,
} from '@/typings/yapi/PerpetualTradePairPriceNoticeAllV1GetApi'
import {
  YapiGetV1PerpetualTradePairPriceNoticeDeleteApiRequest,
  YapiGetV1PerpetualTradePairPriceNoticeDeleteApiResponse,
} from '@/typings/yapi/PerpetualTradePairPriceNoticeDeleteV1GetApi'
import {
  YapiGetV1PerpetualTradePairPriceNoticeSettingApiRequest,
  YapiGetV1PerpetualTradePairPriceNoticeSettingApiResponse,
} from '@/typings/yapi/PerpetualTradePairPriceNoticeSettingV1GetApi'
import {
  YapiGetV1PerpetualTradePairPriceNoticeApiRequest,
  YapiGetV1PerpetualTradePairPriceNoticeApiResponse,
} from '@/typings/yapi/PerpetualTradePairPriceNoticeV1GetApi'

/**
 * 获取所有的通知类型
 */
export const getInmailType: MarkcoinRequest = () => {
  return request({
    path: `/v1/inbox/modules`,
    method: 'GET',
  })
}

/**
 * 获取多个模块的最新一条数据
 */
export const getNewInmailModal: MarkcoinRequest = data => {
  return request({
    path: `/v1/inbox/modules/latestMessage`,
    method: 'POST',
    data,
  })
}

/**
 * 分页获取消息
 */
export const getPageMessage: MarkcoinRequest = params => {
  return request({
    path: `/v1/inbox/messages`,
    method: 'GET',
    params,
  })
}

/**
 * 获取分页查询行情异动
 */
export const getMarketActivities: MarkcoinRequest = params => {
  return request({
    path: `/v1/inbox/messages/marketActivities`,
    method: 'GET',
    params,
  })
}

/**
 * 获取站内信设置内容
 */
export const getInmailSettings: MarkcoinRequest = () => {
  return request({
    path: `/v1/inbox/settings`,
    method: 'GET',
  })
}

/**
 * 获取未读消息数量
 */
export const getUnReadNum: MarkcoinRequest = () => {
  return request({
    path: `/v1/inbox/messages/unReadNum`,
    method: 'GET',
  })
}

/**
 * 设置营销开关
 */
export const setMarketingEmail: MarkcoinRequest = data => {
  return request({
    path: `/v1/inbox/setting/marketingEmail`,
    method: 'POST',
    data,
  })
}

/**
 * 设置通知类型
 */
export const setNoticeType: MarkcoinRequest = data => {
  return request({
    path: `/v1/inbox/setting/modules`,
    method: 'POST',
    data,
  })
}

/**
 * 设置模块下所有消息为已读
 */
export const setModuleAllRead: MarkcoinRequest = data => {
  return request({
    path: `/v1/inbox/modules/messages/readAll`,
    method: 'POST',
    data,
  })
}

/**
 * 设置所有消息为已读
 */
export const setMessagesAllRead: MarkcoinRequest = () => {
  return request({
    path: `/v1/inbox/messages/readAll`,
    method: 'POST',
  })
}

/**
 * 删除模块下所有消息
 */
export const delModuleAllRead: MarkcoinRequest = data => {
  return request({
    path: `/v1/inbox/modules/messages/deleteAll`,
    method: 'POST',
    data,
  })
}

/**
 * 删除模块下单个消息
 */
export const delModuleRead: MarkcoinRequest = data => {
  return request({
    path: `/v1/inbox/messages/delete`,
    method: 'POST',
    data,
  })
}

/**
 * 创建币对提醒
 */
export const createTradePairReminder: MarkcoinRequest = data => {
  return request({
    path: `/v1/tradePair/priceNotice/add`,
    method: 'POST',
    data,
  })
}

/**
 * [币对-设置价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/5729)
 * */
export const postV1PerpetualTradePairPriceNoticeAddApiRequest: MarkcoinRequest<
  YapiPostV1PerpetualTradePairPriceNoticeAddApiRequest,
  YapiPostV1PerpetualTradePairPriceNoticeAddApiResponse['data']
> = data => {
  return request({
    path: '/v1/perpetual/tradePair/priceNotice/add',
    method: 'POST',
    data,
  })
}

/**
 * 获取币对提醒
 */
export const getTradePairReminder: MarkcoinRequest = params => {
  return request({
    path: `/v1/tradePair/priceNotice`,
    method: 'GET',
    params,
  })
}

/**
 * [币对-获取币对设置的价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/5719)
 * */
export const getV1PerpetualTradePairPriceNoticeApiRequest: MarkcoinRequest<
  YapiGetV1PerpetualTradePairPriceNoticeApiRequest,
  YapiGetV1PerpetualTradePairPriceNoticeApiResponse['data']
> = params => {
  return request({
    path: '/v1/perpetual/tradePair/priceNotice',
    method: 'GET',
    params,
  })
}

/**
 * 删除币对提醒
 */
export const delTradePairReminder: MarkcoinRequest = data => {
  return request({
    path: `/v1/tradePair/priceNotice/delete`,
    method: 'POST',
    data,
  })
}

/**
 * [币对-删除价格预警↗](https://yapi.nbttfc365.com/project/44/interface/api/5734)
 * */
export const getV1PerpetualTradePairPriceNoticeDeleteApiRequest: MarkcoinRequest<
  YapiGetV1PerpetualTradePairPriceNoticeDeleteApiRequest,
  YapiGetV1PerpetualTradePairPriceNoticeDeleteApiResponse['data']
> = params => {
  return request({
    path: '/v1/perpetual/tradePair/priceNotice/delete',
    method: 'GET',
    params,
  })
}

/**
 * 获取全部币对提醒
 */
export const getAllTradePairReminder: MarkcoinRequest = params => {
  return request({
    path: `/v1/tradePair/priceNoticeAll`,
    method: 'GET',
    params,
  })
}

/**
 * [币对-获取全部提醒↗](https://yapi.nbttfc365.com/project/44/interface/api/5724)
 * */
export const getV1PerpetualTradePairPriceNoticeAllApiRequest: MarkcoinRequest<
  YapiGetV1PerpetualTradePairPriceNoticeAllApiRequest,
  YapiGetV1PerpetualTradePairPriceNoticeAllApiResponse['data']
> = params => {
  return request({
    path: '/v1/perpetual/tradePair/priceNoticeAll',
    method: 'GET',
    params,
  })
}

/**
 * 现货-币对-价格预警全局配置
 */
export const getPriceNotice: MarkcoinRequest = () => {
  return request({
    path: `/v1/tradePair/priceNotice/setting`,
    method: 'GET',
  })
}

/**
 * [获取价格订阅的配置信息↗](https://yapi.nbttfc365.com/project/44/interface/api/5714)
 * */
export const getV1PerpetualTradePairPriceNoticeSettingApiRequest: MarkcoinRequest<
  YapiGetV1PerpetualTradePairPriceNoticeSettingApiRequest,
  YapiGetV1PerpetualTradePairPriceNoticeSettingApiResponse['data']
> = params => {
  return request({
    path: '/v1/perpetual/tradePair/priceNotice/setting',
    method: 'GET',
    params,
  })
}
