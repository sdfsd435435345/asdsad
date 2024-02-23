import request, { MarkcoinRequest } from '@/plugins/request'

/**
 * 获取公告中心首页数据
 */
export const getNoticeCenterPage: MarkcoinRequest = () => {
  return request({
    path: `/v1/helpCenter/announcementList`,
    method: 'GET',
  })
}

/**
 * 获取公告中心文章详情
 */
export const getNoticeCenterArticle: MarkcoinRequest = params => {
  return request({
    path: `/v1/helpCenter/announcement/content`,
    method: 'GET',
    params,
  })
}

/**
 * 获取公告中心文章详情
 */
export const getNoticeCenterSearch: MarkcoinRequest = params => {
  return request({
    path: `/v1/es/announcement/getByKeyWord`,
    method: 'GET',
    params,
  })
}
