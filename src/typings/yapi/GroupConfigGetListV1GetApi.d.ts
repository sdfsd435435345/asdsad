/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取社群列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8259) 的 **请求类型**
 *
 * @分类 [商户社群↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_652)
 * @请求头 `GET /v1/group/config/getList`
 * @更新时间 `2023-06-08 16:52:10`
 */
export interface YapiGetV1GroupConfigGetListApiRequest {
  /**
   * 商户ID
   */
  businessId: string
  /**
   * 语言类型，字典Code：lan_type_cd
   */
  lanType: string
}

/**
 * 接口 [获取社群列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8259) 的 **返回类型**
 *
 * @分类 [商户社群↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_652)
 * @请求头 `GET /v1/group/config/getList`
 * @更新时间 `2023-06-08 16:52:10`
 */
export interface YapiGetV1GroupConfigGetListApiResponse {
  /**
   * 返回code
   */
  code: number
  /**
   * 返回data
   */
  data: YapiGetV1GroupConfigGetListData[]
  /**
   * 返回信息
   */
  message: string
}
/**
 * 社群List
 */
export interface YapiGetV1GroupConfigGetListData {
  /**
   * 社群icon url
   */
  imgIcon: string
  /**
   * 社群名称
   */
  groupName: string
  /**
   * 社群类型 字典Code：contact_group_cd
   */
  contactGroupCd: string
  /**
   * 社群描述
   */
  groupDescribe: string
  /**
   * 社群二维码 url
   */
  imgQrCode: string
  /**
   * 语言类型，字典Code：lan_type_cd
   */
  lanTypeCd: string
  /**
   * 排序编码 升序
   */
  sortCode: number
  /**
   * 社群展示类型 1为二维码 2为icon 字典编码：show_type_cd
   */
  showTypeCd: number
  /**
   * 跳转链接
   */
  linkUrl: string
  /**
   * 社群子项（明细）
   */
  detailList: YapiGetV1GroupConfigGetListDetailListData[]
}
export interface YapiGetV1GroupConfigGetListDetailListData {
  /**
   * 社群icon url
   */
  imgIcon: string
  /**
   * 社群名称
   */
  groupName: string
  /**
   * 社群二维码 url
   */
  imgQrCode: string
  /**
   * 语言类型，字典Code：lan_type_cd
   */
  lanTypeCd: string
  /**
   * 所属社群主键ID
   */
  groupConfigId: number
  /**
   * 排序编码 升序
   */
  sortCode: number
  /**
   * 社群展示类型 1为二维码 2为icon 字典编码：show_type_cd
   */
  showTypeCd: number
  /**
   * 社群描述
   */
  groupDesc: string
  /**
   * 跳转链接
   */
  linkUrl: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取社群列表↗](https://yapi.nbttfc365.com/project/77/interface/api/8259)
// **/
// export const getV1GroupConfigGetListApiRequest: MarkcoinRequest<
//   YapiGetV1GroupConfigGetListApiRequest,
//   YapiGetV1GroupConfigGetListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/group/config/getList",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取社群列表↗](https://yapi.nbttfc365.com/project/44/interface/api/3723) 的 **请求类型**
 *
 * @分类 [商户社群↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_535)
 * @请求头 `GET /v1/group/config/getList`
 * @更新时间 `2022-12-14 17:09:45`
 */
export interface YapiGetV1GroupConfigGetListApiRequest {
  /**
   * 商户ID
   */
  businessId: string
  /**
   * 语言类型，字典Code：lan_type_cd
   */
  lanType: string
}

/**
 * 接口 [获取社群列表↗](https://yapi.nbttfc365.com/project/44/interface/api/3723) 的 **返回类型**
 *
 * @分类 [商户社群↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_535)
 * @请求头 `GET /v1/group/config/getList`
 * @更新时间 `2022-12-14 17:09:45`
 */
export interface YapiGetV1GroupConfigGetListApiResponse {
  /**
   * 返回code
   */
  code: number
  /**
   * 返回data
   */
  data: YapiGetV1GroupConfigGetListData[]
  /**
   * 返回信息
   */
  message: string
}
/**
 * 社群List
 */
export interface YapiGetV1GroupConfigGetListData {
  /**
   * 社群icon url
   */
  imgIcon: string
  /**
   * 社群名称
   */
  groupName: string
  /**
   * 社群类型 字典Code：contact_group_cd
   */
  contactGroupCd: string
  /**
   * 社群描述
   */
  groupDescribe: string
  /**
   * 社群二维码 url
   */
  imgQrCode: string
  /**
   * 语言类型，字典Code：lan_type_cd
   */
  lanTypeCd: string
  /**
   * 排序编码 升序
   */
  sortCode: number
  /**
   * 社群展示类型 1为二维码 2为icon 字典编码：show_type_cd
   */
  showTypeCd: number
  /**
   * 跳转链接
   */
  linkUrl: string
  /**
   * 社群子项（明细）
   */
  detailList: YapiGetV1GroupConfigGetListDetailListData[]
}
export interface YapiGetV1GroupConfigGetListDetailListData {
  /**
   * 社群icon url
   */
  imgIcon: string
  /**
   * 社群名称
   */
  groupName: string
  /**
   * 社群二维码 url
   */
  imgQrCode: string
  /**
   * 语言类型，字典Code：lan_type_cd
   */
  lanTypeCd: string
  /**
   * 所属社群主键ID
   */
  groupConfigId: number
  /**
   * 排序编码 升序
   */
  sortCode: number
  /**
   * 社群展示类型 1为二维码 2为icon 字典编码：show_type_cd
   */
  showTypeCd: number
  /**
   * 社群描述
   */
  groupDesc: string
  /**
   * 跳转链接
   */
  linkUrl: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取社群列表↗](https://yapi.nbttfc365.com/project/44/interface/api/3723)
// **/
// export const getV1GroupConfigGetListApiRequest: MarkcoinRequest<
//   YapiGetV1GroupConfigGetListApiRequest,
//   YapiGetV1GroupConfigGetListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/group/config/getList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
