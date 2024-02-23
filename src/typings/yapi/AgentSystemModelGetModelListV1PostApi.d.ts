/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [系统模式查询↗](https://yapi.nbttfc365.com/project/44/interface/api/18269) 的 **请求类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/systemModel/getModelList`
 * @更新时间 `2023-09-11 11:52:48`
 */
export interface YapiPostV1AgentSystemModelGetModelListApiRequest {
  /**
   * 平台id
   */
  businessId: string
}

/**
 * 接口 [系统模式查询↗](https://yapi.nbttfc365.com/project/44/interface/api/18269) 的 **返回类型**
 *
 * @分类 [代理商三期↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_978)
 * @请求头 `POST /v1/agent/systemModel/getModelList`
 * @更新时间 `2023-09-11 11:52:48`
 */
export interface YapiPostV1AgentSystemModelGetModelListApiResponse {
  code: string
  message: string
  data: YapiPostV1AgentSystemModelGetModelData
}
export interface YapiPostV1AgentSystemModelGetModelData {
  modeList: YapiPostV1AgentSystemModelGetModelModeListData
}
export interface YapiPostV1AgentSystemModelGetModelModeListData {
  /**
   * 名称
   */
  name: string
  /**
   * id
   */
  id: number
  /**
   * 平台
   */
  businessId: number
  /**
   * 产品线id
   */
  productId: string
  /**
   * 是否需要申请
   */
  isApply: string
  /**
   * 是否默认
   */
  isDefault: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [系统模式查询↗](https://yapi.nbttfc365.com/project/44/interface/api/18269)
// **/
// export const postV1AgentSystemModelGetModelListApiRequest: MarkcoinRequest<
//   YapiPostV1AgentSystemModelGetModelListApiRequest,
//   YapiPostV1AgentSystemModelGetModelListApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/agent/systemModel/getModelList",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
