/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [合约组资产冻结（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/3835) 的 **请求类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/assets/lock`
 * @更新时间 `2023-07-10 15:48:09`
 */
export interface YapiPostInnerV1PerpetualAssetsLockApiRequest {
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
   * 初始保证金购买力
   */
  initMargin: number
  /**
   * 冻结类型
   */
  lockType: string
  /**
   * 初始保证金来源
   */
  initMarginSource: string
  /**
   * 额外保证金购买力
   */
  assetsMargin: number
  /**
   * 额外保证金来源
   */
  assetsMarginSource: string
  /**
   * 是否自动追加保证金
   */
  isAutoAdd: boolean
  /**
   * 是否全仓
   */
  isFullPosition: boolean
}

/**
 * 接口 [合约组资产冻结（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/3835) 的 **返回类型**
 *
 * @分类 [资产-合约组接口↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_538)
 * @请求头 `POST /inner/v1/perpetual/assets/lock`
 * @更新时间 `2023-07-10 15:48:09`
 */
export interface YapiPostInnerV1PerpetualAssetsLockApiResponse {
  code: number
  msg: string
  data: YapiPostInnerV1PerpetualAssetsLockData
}
export interface YapiPostInnerV1PerpetualAssetsLockData {
  isSuccess: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [合约组资产冻结（内部接口）↗](https://yapi.nbttfc365.com/project/44/interface/api/3835)
// **/
// export const postInnerV1PerpetualAssetsLockApiRequest: MarkcoinRequest<
//   YapiPostInnerV1PerpetualAssetsLockApiRequest,
//   YapiPostInnerV1PerpetualAssetsLockApiResponse['data']
// > = data => {
//   return request({
//     path: "/inner/v1/perpetual/assets/lock",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
