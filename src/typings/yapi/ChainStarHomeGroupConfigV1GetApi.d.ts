/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [主页的配置↗](https://yapi.nbttfc365.com/project/44/interface/api/5829) 的 **请求类型**
 *
 * @分类 [chainStar官网↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_586)
 * @请求头 `GET /v1/chainStar/homeGroupConfig`
 * @更新时间 `2023-05-17 10:34:04`
 */
export interface YapiGetV1ChainStarHomeGroupConfigApiRequest {
  /**
   * 写成"zh-CN"
   */
  lanType: string
  /**
   * 写成固定值0
   */
  businessId: string
}

/**
 * 接口 [主页的配置↗](https://yapi.nbttfc365.com/project/44/interface/api/5829) 的 **返回类型**
 *
 * @分类 [chainStar官网↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_586)
 * @请求头 `GET /v1/chainStar/homeGroupConfig`
 * @更新时间 `2023-05-17 10:34:04`
 */
export interface YapiGetV1ChainStarHomeGroupConfigApiResponse {
  code?: number
  data?: YapiGetV1ChainStarHomeGroupConfigData
  message?: string
}
export interface YapiGetV1ChainStarHomeGroupConfigData {
  configList?: YapiGetV1ChainStarHomeGroupConfigListConfigListData[]
}
export interface YapiGetV1ChainStarHomeGroupConfigListConfigListData {
  /**
   * Icon
   */
  imgIcon: string
  updatedTime: string
  /**
   * 描述
   */
  groupDescribe?: string
  /**
   * 二维码图片
   */
  imgQrCode?: string
  isDelete: number
  /**
   * 语言类型 lan_type_cd
   */
  lanTypeCd: string
  businessId: number
  sortCode: number
  updateById: number
  /**
   * 社群名称：默认从代码表中获取，可修改
   */
  groupName: string
  /**
   * 社群类型代码：contact_group_cd
   */
  contactGroupCd: string
  /**
   * 跳转链接
   */
  linkUrl?: string
  createdTime: string
  id: number
  createdById: number
  /**
   * 展示方式：1为二维码、2为图标 字典Code：show_type_cd
   */
  showTypeCd: number
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [主页的配置↗](https://yapi.nbttfc365.com/project/44/interface/api/5829)
// **/
// export const getV1ChainStarHomeGroupConfigApiRequest: MarkcoinRequest<
//   YapiGetV1ChainStarHomeGroupConfigApiRequest,
//   YapiGetV1ChainStarHomeGroupConfigApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/chainStar/homeGroupConfig",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
