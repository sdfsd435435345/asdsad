/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组资产解冻（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/3839) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/assets/unlock`
 * @更新时间 `2023-02-07 17:07:58`
 */
export interface YapiPostInnerV1PerpetualAssetsUnlockApiRequest {
  /**
   * 合约组id
   */
  groupId: number
  /**
   * uid
   */
  uid: number
  /**
   * 商户id
   */
  businessId: number
  /**
   * 来源id
   */
  srcId: number
  /**
   * uuid
   */
  uuid: string
  /**
   * 解冻类型
   */
  unlockType: string
  /**
   * 初始保证金来源
   */
  initMarginSource: string
  /**
   * 额外保证金来源
   */
  unlockAssetsMarginSource: string
  /**
   * 状态
   */
  status: string
}

/**
 * 接口 [合约组资产解冻（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/3839) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/assets/unlock`
 * @更新时间 `2023-02-07 17:07:58`
 */
export interface YapiPostInnerV1PerpetualAssetsUnlockApiResponse {
  code: number
  msg: string
  data: YapiPostInnerV1PerpetualAssetsUnlockData
}
export interface YapiPostInnerV1PerpetualAssetsUnlockData {
  isSuccess: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组资产解冻（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/3839)
// **/
// export const postInnerV1PerpetualAssetsUnlockApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualAssetsUnlockApiRequest,
//   YapiPostInnerV1PerpetualAssetsUnlockApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/assets/unlock",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
