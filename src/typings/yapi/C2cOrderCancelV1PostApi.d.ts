/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [取消↗](https://yapi.nbttfc365.com/project/73/interface/api/4551) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `POST /v1/c2c/order/cancel`
 * @更新时间 `2023-03-08 10:20:41`
 */
export interface YapiPostV1C2cOrderCancelApiRequest {
  /**
   * 订单ID
   */
  id: string
  /**
   * 类型（PAY_BEFORE__WBXML我不想买了 PAY_BEFORE__LXBDMJ联系不到卖家 PAY_BEFORE__WSXSBZDRHZZ我是新手，不知道如何转账 PAY_BEFORE__MJMMLZSSKZH卖家没有留真实收款账号 PAY_BEFORE__MJSKZHBFKWFFK卖家收款账户被风控，无法付款 PAY_BEFORE__SJDJYWKDDBF实际单价与我看到的不符 PAY_BEFORE__YMJXSQX与卖家协商取消 PAY_BEFORE__SYZLWFCB所有主链无法充币 PAY_BEFORE__MJFWTDBH卖家服务态度不好 PAY_BEFORE__QTYY其它原因 PAY_AFTER__WBXML我不想买了 PAY_AFTER__LXBDMJ联系不到卖家 PAY_AFTER__WSXSBHCZ我是新手，不会操作 PAY_AFTER__MJBQTGWRWQX卖家把钱退给我，让我取消 PAY_AFTER__SYZLWFCB所有主链无法充币 PAY_AFTER__QTYY其它原因）
   */
  type: string
  /**
   * 原因
   */
  reason: string
}

/**
 * 接口 [取消↗](https://yapi.nbttfc365.com/project/73/interface/api/4551) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/73/interface/api/cat_559)
 * @请求头 `POST /v1/c2c/order/cancel`
 * @更新时间 `2023-03-08 10:20:41`
 */
export interface YapiPostV1C2cOrderCancelApiResponse {
  code?: number
  data?: YapiPostV1C2COrderCancelData
  message?: string
}
export interface YapiPostV1C2COrderCancelData {
  /**
   * 是否操作成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [取消↗](https://yapi.nbttfc365.com/project/73/interface/api/4551)
// **/
// export const postV1C2cOrderCancelApiRequest: MarkcoinRequest<
//   YapiPostV1C2cOrderCancelApiRequest,
//   YapiPostV1C2cOrderCancelApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/order/cancel",
//     method: "POST",
//     data
//   })
// }

/**
 * 接口 [取消↗](https://yapi.nbttfc365.com/project/77/interface/api/6489) 的 **请求类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `POST /v1/c2c/order/cancel`
 * @更新时间 `2023-06-08 16:46:59`
 */
export interface YapiPostV1C2cOrderCancelApiRequest {
  /**
   * 订单ID
   */
  id: string
  /**
   * 类型（PAY_BEFORE__WBXML我不想买了 PAY_BEFORE__LXBDMJ联系不到卖家 PAY_BEFORE__WSXSBZDRHZZ我是新手，不知道如何转账 PAY_BEFORE__MJMMLZSSKZH卖家没有留真实收款账号 PAY_BEFORE__MJSKZHBFKWFFK卖家收款账户被风控，无法付款 PAY_BEFORE__SJDJYWKDDBF实际单价与我看到的不符 PAY_BEFORE__YMJXSQX与卖家协商取消 PAY_BEFORE__SYZLWFCB所有主链无法充币 PAY_BEFORE__MJFWTDBH卖家服务态度不好 PAY_BEFORE__QTYY其它原因 PAY_AFTER__WBXML我不想买了 PAY_AFTER__LXBDMJ联系不到卖家 PAY_AFTER__WSXSBHCZ我是新手，不会操作 PAY_AFTER__MJBQTGWRWQX卖家把钱退给我，让我取消 PAY_AFTER__SYZLWFCB所有主链无法充币 PAY_AFTER__QTYY其它原因）
   */
  type: string
  /**
   * 原因
   */
  reason: string
}

/**
 * 接口 [取消↗](https://yapi.nbttfc365.com/project/77/interface/api/6489) 的 **返回类型**
 *
 * @分类 [订单↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_622)
 * @请求头 `POST /v1/c2c/order/cancel`
 * @更新时间 `2023-06-08 16:46:59`
 */
export interface YapiPostV1C2cOrderCancelApiResponse {
  code?: number
  data?: YapiPostV1C2COrderCancelData
  message?: string
}
export interface YapiPostV1C2COrderCancelData {
  /**
   * 是否操作成功
   */
  isSuccess?: boolean
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [取消↗](https://yapi.nbttfc365.com/project/77/interface/api/6489)
// **/
// export const postV1C2cOrderCancelApiRequest: MarkcoinRequest<
//   YapiPostV1C2cOrderCancelApiRequest,
//   YapiPostV1C2cOrderCancelApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/c2c/order/cancel",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
