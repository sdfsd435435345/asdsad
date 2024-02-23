/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取公司首页底部栏↗](https://yapi.nbttfc365.com/project/44/interface/api/5789) 的 **请求类型**
 *
 * @分类 [chainStar官网↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_586)
 * @请求头 `GET /v1/chainStar/bottomBar`
 * @更新时间 `2023-08-16 17:35:50`
 */
export interface YapiGetV1ChainStarBottomBarApiRequest {
  /**
   * "zh-CN"，"en-US"
   */
  lanType: string
  /**
   * 写成固定值0
   */
  businessId: string
}

/**
 * 接口 [获取公司首页底部栏↗](https://yapi.nbttfc365.com/project/44/interface/api/5789) 的 **返回类型**
 *
 * @分类 [chainStar官网↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_586)
 * @请求头 `GET /v1/chainStar/bottomBar`
 * @更新时间 `2023-08-16 17:35:50`
 */
export interface YapiGetV1ChainStarBottomBarApiResponse {
  code?: number
  data?: YapiGetV1ChainStarBottomBarData
  message?: string
}
export interface YapiGetV1ChainStarBottomBarData {
  copyright?: string
  createdByTime?: number
  keywords?: string
  emailBusiness?: string
  appInfo?: string
  businessId?: number
  businessName?: string
  controlName?: string
  description?: string
  customerJumpUrl?: string
  imgConsoleLogo?: string
  imgWebIcon?: string
  emailProduct?: string
  /**
   * 官网首页业务咨询邮件
   */
  officialWebsiteServiceEmail?: string
  pcDownloadTitle?: string
  shareQrCode?: string
  id?: number
  appDownloadDescription?: string
  imgConsoleIcon?: string
  imgWebLogo?: string
  /**
   * 官网首页联系传真
   */
  officialWebsiteFax?: string
  emailJudiciary?: string
  updatedByTime?: number
  author?: string
  isDelete?: number
  lanTypeCd?: string
  /**
   * 官网首页地图经纬度（“,”分隔）
   */
  officialWebsiteGpsCoordinate?: string
  /**
   * 官网首页联系电话
   */
  officialWebsiteTel?: string
  activityCenterAppUrl?: string
  webShareCoverUrl?: string
  webTitle?: string
  /**
   * 官网首页联络地址
   */
  officialWebsiteAddress?: string
  emailCustomer?: string
  inviteReturnAppUrl?: string
  updatedById?: number
  pcDownloadDescription?: string
  webCopyright?: string
  /**
   * 官网首页微信二维码截图地址
   */
  officialWebsiteWexinQrUrl?: string
  shareCoverUrl?: string
  shareTitle?: string
  webUrl?: string
  slogan?: string
  appDownloadTitle?: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取公司首页底部栏↗](https://yapi.nbttfc365.com/project/44/interface/api/5789)
// **/
// export const getV1ChainStarBottomBarApiRequest: MarkcoinRequest<
//   YapiGetV1ChainStarBottomBarApiRequest,
//   YapiGetV1ChainStarBottomBarApiResponse['data']
// > = params => {
//   return request({
//     path: "/v1/chainStar/bottomBar",
//     method: "GET",
//     params
//   })
// }

/* prettier-ignore-end */
