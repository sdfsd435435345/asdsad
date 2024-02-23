/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [代理商申请v3版本↗](https://yapi.nbttfc365.com/project/44/interface/api/5874) 的 **请求类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v3/agtApplication/add`
 * @更新时间 `2023-08-20 18:04:09`
 */
export interface YapiPostV3AgtApplicationAddApiRequest {
  /**
   * 联系类型  1为手机2为邮箱
   */
  contact: string
  /**
   * 联系方式
   */
  contactInformation: string
  /**
   * 预计可邀请用户数
   */
  invitationNum: number
  rebates: YapiPostV3AgtApplicationAddApiRequestRebates
  /**
   * 申请补充说明
   */
  comment?: string
  /**
   * 区号，contact为1时必传
   */
  mobileCountryCd?: string
  /**
   * 社交媒体名称
   */
  socialMedia: string
  /**
   * 社交媒体账户
   */
  socialMediaInfo: string
}
export interface YapiPostV3AgtApplicationAddApiRequestRebates {
  /**
   * 现货
   */
  spot: number
  /**
   * 合约
   */
  contract: number
  /**
   * 借币
   */
  borrowCoin: number
  /**
   * 三元期权
   */
  option: number
  /**
   * 娱乐区
   */
  recreation: number
}

/**
 * 接口 [代理商申请v3版本↗](https://yapi.nbttfc365.com/project/44/interface/api/5874) 的 **返回类型**
 *
 * @分类 [代理商↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_541)
 * @请求头 `POST /v3/agtApplication/add`
 * @更新时间 `2023-08-20 18:04:09`
 */
export interface YapiPostV3AgtApplicationAddApiResponse {
  code: string
  message: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [代理商申请v3版本↗](https://yapi.nbttfc365.com/project/44/interface/api/5874)
// **/
// export const postV3AgtApplicationAddApiRequest: MarkcoinRequest<
//   YapiPostV3AgtApplicationAddApiRequest,
//   YapiPostV3AgtApplicationAddApiResponse['data']
// > = data => {
//   return request({
//     path: "/v3/agtApplication/add",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
