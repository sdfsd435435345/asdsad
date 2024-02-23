/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取商户栏目信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6844) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/home/column/getList`
 * @更新时间 `2023-06-08 16:50:26`
 */
export interface YapiGetV1HomeColumnGetListApiRequest {
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
 * 接口 [获取商户栏目信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6844) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_604)
 * @请求头 `GET /v1/home/column/getList`
 * @更新时间 `2023-06-08 16:50:26`
 */
export interface YapiGetV1HomeColumnGetListApiResponse {
  /**
   * 返回code
   */
  code: number
  data: YapiGetV1HomeColumnGetData
  /**
   * 返回信息
   */
  message: string
}
/**
 * 返回data
 */
export interface YapiGetV1HomeColumnGetData {
  /**
   * 社群信息list
   */
  groupConfigDatas: YapiGetV1HomeColumnGetListGroupConfigDatasData[]
  /**
   * 栏目信息list
   */
  columnsDatas: YapiGetV1HomeColumnGetListColumnsDatasData[]
}
/**
 * 社群List
 */
export interface YapiGetV1HomeColumnGetListGroupConfigDatasData {
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
  contactGroupCd: number
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
}
export interface YapiGetV1HomeColumnGetListColumnsDatasData {
  /**
   * 是否外链 1：外链 2：非外链 字典Code：is_link_ind
   */
  isLink: number
  /**
   * 栏目子项List
   */
  childColumns: YapiGetV1HomeColumnGetListChildColumnsListColumnsDatasData[]
  /**
   * 是否父级 1：是 2：否 字典Code：common_is_ind
   */
  isParent: number
  /**
   * 语言类型 字典Code：lan_type_cd
   */
  lanTypeCd: string
  /**
   * web跳转链接
   */
  webUrl: string
  /**
   * 栏目标题名称
   */
  homeColumnName: string
  /**
   * 是否web端展示 1：是 2：否 字典Code：common_is_ind
   */
  isWeb: number
  /**
   * app跳转链接
   */
  appUrl: string
  /**
   * 主键ID
   */
  id: number
  /**
   * 是否app展示 1：是 2：否 字典Code：common_is_ind
   */
  isApp: number
  /**
   * 栏目固定代码：用于卡单独的某个栏目，单独展示 对应数据字典Code：home_column_cd
   */
  homeColumnCd: string
  /**
   * 对应帮助中心_id + types  对应表 mer_help_center.id 此处说明：此处组装为 id-type，比如 返回241-1，若后面的type为1时，则为目录，跳转目录，若type为2时，则为文章，直接跳转文章     id取-前面的值即可
   */
  helpCenterId: string
  /**
   * 排序
   */
  sortCode: string
}
export interface YapiGetV1HomeColumnGetListChildColumnsListColumnsDatasData {
  /**
   * 是否外链 1：外链 2：非外链 字典Code：is_link_ind
   */
  isLink: number
  /**
   * 递归项目子项List 结构跟这一级相同
   */
  childColumns: string[]
  /**
   * 是否父级 1：是 2：否 字典Code：common_is_ind
   */
  isParent: number
  /**
   * 语言类型 字典Code：lan_type_cd
   */
  lanTypeCd: string
  /**
   * 栏目标题名称
   */
  homeColumnName: string
  /**
   * 是否web端展示 1：是 2：否 字典Code：common_is_ind
   */
  isWeb: number
  /**
   * 主键ID
   */
  id: number
  /**
   * 是否app展示 1：是 2：否 字典Code：common_is_ind
   */
  isApp: number
  /**
   * 对应帮助中心_id  对应表 mer_help_center.id
   */
  helpCenterId: number
  /**
   * 栏目固定代码：用于卡单独的某个栏目，单独展示 对应数据字典Code：column_title_name
   */
  homeColumnCd: string
  /**
   * 父级ID 对应上级目录的id字段
   */
  parentId: number
  /**
   * web跳转链接
   */
  webUrl: string
  /**
   * app跳转链接
   */
  appUrl: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取商户栏目信息↗](https://yapi.nbttfc365.com/project/77/interface/api/6844)
// **/
// export const getV1HomeColumnGetListApiRequest: MarkcoinRequest<
//   YapiGetV1HomeColumnGetListApiRequest,
//   YapiGetV1HomeColumnGetListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/home/column/getList",
//     method: "GET",
//     params
//   })
// }

/**
 * 接口 [获取商户栏目信息↗](https://yapi.nbttfc365.com/project/44/interface/api/3727) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/home/column/getList`
 * @更新时间 `2023-08-25 14:36:41`
 */
export interface YapiGetV1HomeColumnGetListApiRequest {
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
 * 接口 [获取商户栏目信息↗](https://yapi.nbttfc365.com/project/44/interface/api/3727) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_80)
 * @请求头 `GET /v1/home/column/getList`
 * @更新时间 `2023-08-25 14:36:41`
 */
export interface YapiGetV1HomeColumnGetListApiResponse {
  /**
   * 返回code
   */
  code: number
  data: YapiGetV1HomeColumnGetData
  /**
   * 返回信息
   */
  message: string
}
/**
 * 返回data
 */
export interface YapiGetV1HomeColumnGetData {
  /**
   * 社群信息list
   */
  groupConfigDatas: YapiGetV1HomeColumnGetListGroupConfigDatasData[]
  /**
   * 栏目信息list
   */
  columnsDatas: YapiGetV1HomeColumnGetListColumnsDatasData[]
}
/**
 * 社群List
 */
export interface YapiGetV1HomeColumnGetListGroupConfigDatasData {
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
  contactGroupCd: number
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
}
export interface YapiGetV1HomeColumnGetListColumnsDatasData {
  /**
   * 是否外链 1：外链 2：非外链 字典Code：is_link_ind
   */
  isLink: number
  /**
   * 栏目子项List
   */
  childColumns: YapiGetV1HomeColumnGetListChildColumnsListColumnsDatasData[]
  /**
   * 是否父级 1：是 2：否 字典Code：common_is_ind
   */
  isParent: number
  /**
   * 语言类型 字典Code：lan_type_cd
   */
  lanTypeCd: string
  /**
   * web跳转链接
   */
  webUrl: string
  /**
   * 栏目标题名称
   */
  homeColumnName: string
  /**
   * 是否web端展示 1：是 2：否 字典Code：common_is_ind
   */
  isWeb: number
  /**
   * app跳转链接
   */
  appUrl: string
  /**
   * 主键ID
   */
  id: number
  /**
   * 是否app展示 1：是 2：否 字典Code：common_is_ind
   */
  isApp: number
  /**
   * 栏目固定代码：用于卡单独的某个栏目，单独展示 对应数据字典Code：home_column_cd
   */
  homeColumnCd: string
  /**
   * 对应帮助中心_id + types  对应表 mer_help_center.id 此处说明：此处组装为 id-type，比如 返回241-1，若后面的type为1时，则为目录，跳转目录，若type为2时，则为文章，直接跳转文章     id取-前面的值即可
   */
  helpCenterId: string
  /**
   * 排序
   */
  sortCode: string
}
export interface YapiGetV1HomeColumnGetListChildColumnsListColumnsDatasData {
  /**
   * 是否外链 1：外链 2：非外链 字典Code：is_link_ind
   */
  isLink: number
  /**
   * 递归项目子项List 结构跟这一级相同
   */
  childColumns: string[]
  /**
   * 是否父级 1：是 2：否 字典Code：common_is_ind
   */
  isParent: number
  /**
   * 语言类型 字典Code：lan_type_cd
   */
  lanTypeCd: string
  /**
   * 栏目标题名称
   */
  homeColumnName: string
  /**
   * 是否web端展示 1：是 2：否 字典Code：common_is_ind
   */
  isWeb: number
  /**
   * 主键ID
   */
  id: number
  /**
   * 是否app展示 1：是 2：否 字典Code：common_is_ind
   */
  isApp: number
  /**
   * 对应帮助中心_id  对应表 mer_help_center.id
   */
  helpCenterId: number
  /**
   * 栏目固定代码：用于卡单独的某个栏目，单独展示 对应数据字典Code：column_title_name
   */
  homeColumnCd: string
  /**
   * 父级ID 对应上级目录的id字段
   */
  parentId: number
  /**
   * web跳转链接
   */
  webUrl: string
  /**
   * app跳转链接
   */
  appUrl: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取商户栏目信息↗](https://yapi.nbttfc365.com/project/44/interface/api/3727)
// **/
// export const getV1HomeColumnGetListApiRequest: MarkcoinRequest<
//   YapiGetV1HomeColumnGetListApiRequest,
//   YapiGetV1HomeColumnGetListApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/home/column/getList",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
