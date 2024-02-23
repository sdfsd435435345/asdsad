/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取新闻资讯↗](https://yapi.nbttfc365.com/project/44/interface/api/5779) 的 **请求类型**
 *
 * @分类 [chainStar官网↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_586)
 * @请求头 `GET /v1/chainStar/news`
 * @更新时间 `2023-05-15 15:02:09`
 */
export interface YapiGetV1ChainStarNewsApiRequest {
  /**
   * 页面数
   */
  pageNum: string
  /**
   * 页面的尺寸
   */
  pageSize: string
  /**
   * 1.资讯 2.新闻
   */
  newsType: string
}

/**
 * 接口 [获取新闻资讯↗](https://yapi.nbttfc365.com/project/44/interface/api/5779) 的 **返回类型**
 *
 * @分类 [chainStar官网↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_586)
 * @请求头 `GET /v1/chainStar/news`
 * @更新时间 `2023-05-15 15:02:09`
 */
export interface YapiGetV1ChainStarNewsApiResponse {
  code?: number
  data?: YapiGetV1ChainStarNewsData
  message?: string
}
export interface YapiGetV1ChainStarNewsData {
  total?: number
  pageSize?: number
  list?: YapiGetV1ChainStarNewsListData[]
  pageNum?: number
}
export interface YapiGetV1ChainStarNewsListData {
  updatedTime: string
  /**
   * 类型  字典：news_type_ind  1 资讯、2新闻
   */
  typeInd: number
  /**
   * 默认封面图片地址
   */
  imageCoverUrl: null | string
  /**
   * 是否外部资讯 字典：common_is_ind  1是 2否
   */
  isExternal: number
  /**
   * 外链地址
   */
  externalLink: null | string
  isDelete: number
  /**
   * 标题
   */
  title: string
  version: null
  /**
   * 内容
   */
  content: string
  updateById: number
  /**
   * 文章发布时间
   */
  submitTime: string
  /**
   * 文章作者
   */
  authorship: string
  /**
   * 上架状态 1为上架 2为下架 对应字典表：common_is_ind
   */
  statusInd: number
  createdTime: string
  id: number
  createdById: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取新闻资讯↗](https://yapi.nbttfc365.com/project/44/interface/api/5779)
// **/
// export const getV1ChainStarNewsApiRequest: MarkcoinRequest<
//   YapiGetV1ChainStarNewsApiRequest,
//   YapiGetV1ChainStarNewsApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/chainStar/news",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
