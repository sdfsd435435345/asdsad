/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理中心-更多详情-导出Excel↗](https://yapi.nbttfc365.com/project/44/interface/api/18724) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/export/moreDetail`
 * @更新时间 `2023-10-16 10:19:25`
 */
export interface YapiPostV1AgentExportMoreDetailApiRequest {
  /**
   * 模式("threeLevel", "三级代理"), PYRAMID("pyramid", "金字塔代理"), AREA("area", "区域代理")
   */
  model: string
  /**
   * uid
   */
  uid?: number
  /**
   * 产品线
   */
  productCd?: string
  /**
   * 区域等级
   */
  areaLevel?: number
  /**
   * 团队人数(低)/邀请人数
   */
  inviteNumMin?: number
  /**
   * 团队人数(高)/邀请人数
   */
  inviteNumMax?: number
  /**
   * 注册时间(起)
   */
  startTime?: number
  /**
   * 注册时间(止)
   */
  endTime?: number
  /**
   * 是否查看直属下级1是，2否 默认否(web页面使用)
   */
  isChildUid?: number
  /**
   * 1查询用户uid，2查询上级uid
   */
  queryUidType?: number
  parentUid?: number
}

/**
 * 接口 [代理中心-更多详情-导出Excel↗](https://yapi.nbttfc365.com/project/44/interface/api/18724) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/export/moreDetail`
 * @更新时间 `2023-10-16 10:19:25`
 */
export interface YapiPostV1AgentExportMoreDetailApiResponse {
  code?: number
  data?: string
  message?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理中心-更多详情-导出Excel↗](https://yapi.nbttfc365.com/project/44/interface/api/18724)
// **/
// export const postV1AgentExportMoreDetailApiRequest: MarkcoinRequest<
//   YapiPostV1AgentExportMoreDetailApiRequest,
//   YapiPostV1AgentExportMoreDetailApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/export/moreDetail",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
