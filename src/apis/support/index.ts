import request, { MarkcoinRequest } from '@/plugins/request'

/**
 * 获取帮助中心首页数据
 */
export const getSupportHomePage: MarkcoinRequest = () => {
  return request({
    path: `/v1/helpCenter/mainPage`,
    method: 'GET',
  })
}

/**
 * 获取帮助中心正文文章
 */
export const getSupportArticle: MarkcoinRequest = params => {
  return request({
    path: `/v1/helpCenter/help/content`,
    method: 'GET',
    params,
  })
}

/**
 * 获取帮助中心搜索
 */
export const getSupportSearchArticle: MarkcoinRequest = params => {
  return request({
    path: `/v1/es/helpCenter/getByKeyWord`,
    method: 'GET',
    params,
  })
}

/**
 * 获取全部搜索
 */
export const getAllSearchArticle: MarkcoinRequest = params => {
  return request({
    path: `/v1/es/helpAndAnnouncement/getByKeyWord`,
    method: 'GET',
    params,
  })
}

/**
 * 获取帮助中心导航栏数据
 */
export const getSupportMenu: MarkcoinRequest = () => {
  return request({
    path: `/v1/helpCenter/helpCenterList`,
    method: 'GET',
  })
}

/**
 * 获取帮助中心搜索栏 tag
 */
export const getSupportCatalogList: MarkcoinRequest = () => {
  return request({
    path: `/support/catalog/list`,
    method: 'GET',
  })
}

/**
 * 获取帮助中心导航列表
 */
export const getSupportCatalogArticlesList: MarkcoinRequest = params => {
  return request({
    path: `/support/catalog/articles`,
    method: 'GET',
    params,
  })
}

/**
 * 获取帮助中心最新文章列表
 */
export const getSupportCatalogLatestList: MarkcoinRequest = () => {
  return request({
    path: `/support/latest`,
    method: 'GET',
  })
}

/**
 * 获取帮助中心文章详情
 */
export const getSupportCatalogArticleDetail: MarkcoinRequest = params => {
  return request({
    path: `/support/article/detail`,
    method: 'GET',
    params,
  })
}

/**
 * 帮助中心搜索
 */
export const getSupportSearch: MarkcoinRequest = options => {
  return request({
    path: `/support/search`,
    method: 'GET',
    params: {
      pageNum: options.pageNum, // 页数
      pageSize: options.pageSize, // 条数
      keywords: options.keywords, // 关键字
    },
  })
}
