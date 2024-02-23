/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

/**
 * 接口 [获取卡详情信息(卡号解密)↗](https://yapi.nbttfc365.com/project/77/interface/api/8979) 的 **请求类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `POST /v1/vcc/getCardInfo`
 * @更新时间 `2023-06-27 20:56:44`
 */
export interface YapiPostV1VccGetCardInfoApiRequest {
  /**
   * 卡ID
   */
  cardId: string
  /**
   * 6位支付密码
   */
  password: string
}

/**
 * 接口 [获取卡详情信息(卡号解密)↗](https://yapi.nbttfc365.com/project/77/interface/api/8979) 的 **返回类型**
 *
 * @分类 [虚拟信用卡↗](https://yapi.nbttfc365.com/project/77/interface/api/cat_658)
 * @请求头 `POST /v1/vcc/getCardInfo`
 * @更新时间 `2023-06-27 20:56:44`
 */
export interface YapiPostV1VccGetCardInfoApiResponse {
  /**
   * 200为成功，其他均为失败
   */
  code: number
  msg: string
  data: YapiPostV1VccGetCardInfoData
}
export interface YapiPostV1VccGetCardInfoData {
  /**
   * 生效日期，时间戳格式
   */
  activeDate?: string
  /**
   * 别名
   */
  cardAlias?: string
  /**
   * 卡余额
   */
  balance: number
  /**
   * CVV
   */
  cardCvv: string
  /**
   * 卡编号
   */
  cardId: string
  /**
   * 卡号
   */
  cardNo: string
  /**
   * 卡类型
   */
  cardType: string
  /**
   * 开卡币种
   */
  currency: string
  /**
   * 是否启用交易币种验证(0：不做交易币种限制<默认>；1：只允许开卡币种作为交易币种)
   */
  currencyCheck: string
  /**
   * 客户编号
   */
  customerId: string
  /**
   * 失效日期，时间戳格式
   */
  expiryDate?: string
  /**
   * 标签
   */
  label?: string
  /**
   * 当前额度
   */
  limitAmount: number
  /**
   * 平台订单号
   */
  orderNo: string
  /**
   * 状态：NORMAL-使用中；CANCEL-已销卡； SUSPENDED-冻结
   */
  statusCd: string
}

// 以下为自动生成的 api 请求，需要使用的话请手动复制到相应模块的 api 请求层
// import request, { MarkcoinRequest } from '@/plugins/request'

// /**
// * [获取卡详情信息(卡号解密)↗](https://yapi.nbttfc365.com/project/77/interface/api/8979)
// **/
// export const postV1VccGetCardInfoApiRequest: MarkcoinRequest<
//   YapiPostV1VccGetCardInfoApiRequest,
//   YapiPostV1VccGetCardInfoApiResponse['data']
// > = data => {
//   return request({
//     path: "/v1/vcc/getCardInfo",
//     method: "POST",
//     data
//   })
// }

/* prettier-ignore-end */
