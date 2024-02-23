/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [设置用户展示币类型↗](https://yapi.nbttfc365.com/project/44/interface/api/10894) 的 **请求类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/viewSymbolType/settings`
 * @更新时间 `2023-07-07 17:43:32`
 */
export interface YapiPostV1PerpetualViewSymbolTypeSettingsApiRequest {
  /**
   * 展示类型，buy：计价币，sell：标的币
   */
  symbolType: string
}

/**
 * 接口 [设置用户展示币类型↗](https://yapi.nbttfc365.com/project/44/interface/api/10894) 的 **返回类型**
 *
 * @分类 [合约主流程↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_532)
 * @请求头 `POST /v1/perpetual/viewSymbolType/settings`
 * @更新时间 `2023-07-07 17:43:32`
 */
export interface YapiPostV1PerpetualViewSymbolTypeSettingsApiResponse {
  code: number
  message: string
  data: YapiPostV1PerpetualViewSymbolTypeSettingsData
}
export interface YapiPostV1PerpetualViewSymbolTypeSettingsData {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [设置用户展示币类型↗](https://yapi.nbttfc365.com/project/44/interface/api/10894)
// **/
// export const postV1PerpetualViewSymbolTypeSettingsApiRequest: MarkcoinRequest<
//   YapiPostV1PerpetualViewSymbolTypeSettingsApiRequest,
//   YapiPostV1PerpetualViewSymbolTypeSettingsApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/perpetual/viewSymbolType/settings",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
