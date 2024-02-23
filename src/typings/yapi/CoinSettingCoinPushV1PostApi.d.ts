/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [设置币种充提通知↗](https://yapi.nbttfc365.com/project/44/interface/api/2870) 的 **请求类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/coin/settingCoinPush`
 * @更新时间 `2022-11-02 18:13:19`
 */
export interface YapiPostV1CoinSettingCoinPushApiRequest {
  /**
   * 子币id
   */
  coinId: number
  /**
   * 类型 1、充值 2、提现
   */
  type: number
  /**
   * 状态 1、开启 2、关闭
   */
  status: number
}

/**
 * 接口 [设置币种充提通知↗](https://yapi.nbttfc365.com/project/44/interface/api/2870) 的 **返回类型**
 *
 * @分类 [资产、充值提现↗](https://yapi.nbttfc365.com/project/44/interface/api/cat_182)
 * @请求头 `POST /v1/coin/settingCoinPush`
 * @更新时间 `2022-11-02 18:13:19`
 */
export interface YapiPostV1CoinSettingCoinPushApiResponse {
  code?: number
  message?: string
  data?: YapiPostV1CoinSettingCoinPushData
}
export interface YapiPostV1CoinSettingCoinPushData {
  /**
   * 是否成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [设置币种充提通知↗](https://yapi.nbttfc365.com/project/44/interface/api/2870)
// **/
// export const postV1CoinSettingCoinPushApiRequest: MarkcoinRequest<
//   YapiPostV1CoinSettingCoinPushApiRequest,
//   YapiPostV1CoinSettingCoinPushApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/coin/settingCoinPush",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
