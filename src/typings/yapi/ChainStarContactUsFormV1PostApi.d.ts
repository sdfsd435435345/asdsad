/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [联系我们表单↗](https://yapi.nbttfc365.com/project/44/interface/api/5754) 的 **请求类型**
 *
 * @分类 [chainStar官网↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_586)
 * @请求头 `POST /v1/chainStar/contactUsForm`
 * @更新时间 `2023-05-31 11:09:28`
 */
export interface YapiPostV1ChainStarContactUsFormApiRequest {
  /**
   * 姓名
   */
  name: string
  /**
   * 手机号
   */
  tel: string
  /**
   * 手机验证码
   */
  mobileVerifyCode: string
  /**
   * 邮箱
   */
  email: string
  /**
   * 邮箱验证码
   */
  emailVerifyCode: string
  /**
   * 公司的名称
   */
  companyName: string
  /**
   * 备注
   */
  remarks: string
  /**
   * 服务的详情列表
   */
  packageDetailsInfoList: YapiPostV1ChainStarContactUsFormApiRequestListPackageDetailsInfoList[]
  /**
   * 区域号码
   */
  areaCode: string
  /**
   * 意向的价格
   */
  intendedPrice: number
  /**
   * 业务的大类
   */
  businessCategory: string
  /**
   * 留言
   */
  messageContent: string
}
export interface YapiPostV1ChainStarContactUsFormApiRequestListPackageDetailsInfoList {
  /**
   * 服务的分类
   */
  businessCategory: string
  /**
   * 服务的细分列表
   */
  packageDetails: string[]
}

/**
 * 接口 [联系我们表单↗](https://yapi.nbttfc365.com/project/44/interface/api/5754) 的 **返回类型**
 *
 * @分类 [chainStar官网↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_586)
 * @请求头 `POST /v1/chainStar/contactUsForm`
 * @更新时间 `2023-05-31 11:09:28`
 */
export interface YapiPostV1ChainStarContactUsFormApiResponse {}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [联系我们表单↗](https://yapi.nbttfc365.com/project/44/interface/api/5754)
// **/
// export const postV1ChainStarContactUsFormApiRequest: MarkcoinRequest<
//   YapiPostV1ChainStarContactUsFormApiRequest,
//   YapiPostV1ChainStarContactUsFormApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/chainStar/contactUsForm",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
