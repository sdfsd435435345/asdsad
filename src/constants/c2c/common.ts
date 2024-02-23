import { t } from '@lingui/macro'
import {
  C2cWeekEnum,
  C2CSetUpEnum,
  C2cBlackTypeEnum,
  C2cCenterMenuEnum,
  C2cCenterListEnum,
  C2cBusinessDataEnum,
  C2cCenterKycAttestationEnum,
  C2cCenterMenuTypeEnum,
  C2cDirectionEnum,
  TabPaymentsEnum,
} from '@/constants/c2c/center'

/**
 * 交易区/币种交易状态
 */
export enum CoinTradingStatusTypeEnum {
  /** 开启 */
  enable = 'ENABLE',
  /** 关闭 */
  disable = 'DISABLE',
}

/**
 * 交易区交易类型
 */
export enum AreaTransactionTypeEnum {
  /** 全部 */
  all = 'ALL',
  /** 站内 */
  inside = 'INSIDE',
  /** 站外 */
  outside = 'OUTSIDE',
}

/**
 * 订单 - 买卖角色类型
 */
export enum OrderBuyAndSellRoleTypeEnum {
  /** 购买 */
  buyer = 'BUYER',
  /** 出售 */
  seller = 'SELLER',
}

export const C2cCenterActions = () => {
  return [
    { id: C2cCenterListEnum.account, text: t`features_c2c_center_common_22225101639` },
    { id: C2cCenterListEnum.attention, text: t`features_c2c_center_common_22225101640` },
    { id: C2cCenterListEnum.blacklist, text: t`features_c2c_center_common_22225101641` },
  ]
}

export const C2cCenterMenuData = () => {
  return [
    {
      id: C2cCenterMenuEnum.totalSingular,
      title: t`features_trade_future_c2c_5101543`,
      value: C2cCenterMenuTypeEnum.totalSingular,
    },
    {
      id: C2cCenterMenuEnum.completionRate,
      title: t`features_trade_future_c2c_5101544`,
      value: C2cCenterMenuTypeEnum.completionRate,
      type: 'percent',
    },
    {
      id: C2cCenterMenuEnum.peopleServed,
      title: t`features_trade_future_c2c_5101542`,
      value: C2cCenterMenuTypeEnum.peopleServed,
    },
    {
      id: C2cCenterMenuEnum.transaction,
      title: t`features_trade_future_c2c_5101545`,
      value: C2cCenterMenuTypeEnum.transaction,
    },
    {
      id: C2cCenterMenuEnum.paymentTime,
      title: t`features_trade_future_c2c_5101546`,
      value: C2cCenterMenuTypeEnum.paymentTime,
      type: 'time',
    },
    {
      id: C2cCenterMenuEnum.depositTimeInside,
      title: t`features_trade_future_c2c_5101547`,
      value: C2cCenterMenuTypeEnum.depositTimeInside,
      type: 'time',
    },
    {
      id: C2cCenterMenuEnum.depositTimeOff,
      title: t`features_trade_future_c2c_5101547`,
      value: C2cCenterMenuTypeEnum.depositTimeOff,
      type: 'time',
    },
  ]
}

export const C2cCenterKyc = () => {
  return [
    { id: C2cCenterKycAttestationEnum.not, title: t`features_c2c_order_appeal_index_onotkmcjyszif-40pc_lv` },
    { id: C2cCenterKycAttestationEnum.personalStandard, title: t`features_kyc_index_5101110` },
    { id: C2cCenterKycAttestationEnum.personalAdvanced, title: t`features_kyc_index_5101111` },
    { id: C2cCenterKycAttestationEnum.enterprise, title: t`features_kyc_index_5101112` },
  ]
}

export const C2cCenterTime = () => {
  return {
    [C2cWeekEnum.Monday]: t`features_trade_future_c2c_5101548`,
    [C2cWeekEnum.Tuesday]: t`features_trade_future_c2c_5101549`,
    [C2cWeekEnum.Wednesday]: t`features_trade_future_c2c_5101550`,
    [C2cWeekEnum.Thursday]: t`features_trade_future_c2c_5101551`,
    [C2cWeekEnum.Friday]: t`features_trade_future_c2c_5101552`,
    [C2cWeekEnum.Saturday]: t`features_trade_future_c2c_5101553`,
    [C2cWeekEnum.Sunday]: t`features_trade_future_c2c_5101554`,
  }
}

export const C2cCenterSetUp = () => {
  return [
    { value: C2CSetUpEnum.text, name: t`features_trade_future_c2c_5101555` },
    { value: C2CSetUpEnum.image, name: t`features_trade_future_c2c_5101556` },
    { value: C2CSetUpEnum.noSet, name: t`constants_c2c_common_ht5gua2ptqfbrxym8tsn-` },
  ]
}

export const C2cCenterRadioStatus = () => {
  return [
    { value: 1, name: t`features_trade_future_c2c_5101557`, contair: t`features_trade_future_c2c_5101558` },
    { value: 2, name: t`features_trade_future_c2c_5101559`, contair: t`features_trade_future_c2c_5101560` },
    {
      value: 3,
      name: t`constants_c2c_common_teemelpokrp4ori0jmqmi`,
      contair: t`features_trade_future_c2c_5101562`,
    },
    { value: 4, name: t`constants_c2c_common_pabi_vpigh60kcv9xhbnb` },
  ]
}

export const C2cCenterWeek = () => {
  return [
    { id: C2cWeekEnum.Monday, name: t`features_trade_future_c2c_5101548`, isSelected: false },
    { id: C2cWeekEnum.Tuesday, name: t`features_trade_future_c2c_5101549`, isSelected: false },
    { id: C2cWeekEnum.Wednesday, name: t`features_trade_future_c2c_5101550`, isSelected: false },
    { id: C2cWeekEnum.Thursday, name: t`features_trade_future_c2c_5101551`, isSelected: false },
    { id: C2cWeekEnum.Friday, name: t`features_trade_future_c2c_5101552`, isSelected: false },
    { id: C2cWeekEnum.Saturday, name: t`features_trade_future_c2c_5101553`, isSelected: false },
    { id: C2cWeekEnum.Sunday, name: t`features_trade_future_c2c_5101564`, isSelected: false },
  ]
}

export const C2cOperationData = () => {
  return [
    { id: C2cBlackTypeEnum.Monday, name: t`features_trade_future_c2c_222225101597` },
    { id: C2cBlackTypeEnum.Tuesday, name: t`features_trade_future_c2c_222225101598` },
    { id: C2cBlackTypeEnum.Wednesday, name: t`features_trade_future_c2c_222225101599` },
    { id: C2cBlackTypeEnum.Thursday, name: t`features_trade_future_c2c_222225101600` },
    { id: C2cBlackTypeEnum.Friday, name: t`features_trade_future_c2c_222225101601` },
    { id: C2cBlackTypeEnum.Saturday, name: t`assets.enum.tradeRecordType.other` },
  ]
}

export const C2cDirectionData = type => {
  return [
    {
      id: C2cDirectionEnum.sell,
      name: type ? t`features_kyc_index_standards_5101190` : t`constants_c2c_common_eymujozkjshqnbz2oe1s7`,
    },
    {
      id: C2cDirectionEnum.buy,
      name: type ? t`features_kyc_index_standards_5101189` : t`constants_c2c_common_klbatexmpyxqjfja8c2a-`,
    },
  ]
}

export const C2cBusinessData = () => {
  return [
    { id: C2cBusinessDataEnum.inside, name: t`features_trade_future_c2c_2222225101602` },
    { id: C2cBusinessDataEnum.outside, name: t`features_trade_future_c2c_2222225101603` },
  ]
}

export const C2cTablecolumns = () => {
  return [
    { header: t`constants_c2c_common_iglude2ha-gaj2qgdfoqi`, id: '1' },
    { header: t`page_title.assets`, id: '2' },
    { header: t`features_c2c_center_common_2222222222225101800`, id: '3' },
  ]
}

export const C2cPaymentInput = () => {
  return [
    {
      max: 30,
      message: t`features_c2c_payments_component_bank_form_index_zwsdbl4azn7ri2yrs6pnw`,
    },
    // {
    //   pattern: /^[\da-z]+$/i,
    //   message: t`constants_c2c_common_cjpnyial9v`,
    // },
  ]
}

export const C2cPaymentTabList = () => {
  return [
    { id: TabPaymentsEnum.makeCollections, name: t`features_message_center_index_5101352` },
    { id: TabPaymentsEnum.payMoney, name: t`features_message_center_index_5101353` },
  ]
}

export const C2CFileType = ['png', 'jpg', 'jpeg']

export const C2CAdvertNewStatus = () => {
  return {
    RESTING: t`constants_c2c_advertise_ncywmkk89jllxw7lwzy63`,
    NORMAL: t`constants_c2c_advertise_fbuusm1vzzfdsl-lleyjg`,
    DEALING: t`features_c2c_advertise_advertise_history_history_list_index_oylmhvzzjwjgake_pdxkl`,
  }
}

export const C2CAdvertNewStatusText = () => {
  return {
    RESTING: 'resting',
    NORMAL: 'normal',
    DEALING: 'dealing',
  }
}

/**
 * 商户状态
 */
export enum C2CMerchantStatusTypeEnum {
  /** 商户申请审核中 */
  applying = 'applying',
  /** 正常商家 */
  enable = 'enable',
  /** 当前不是商户 */
  none = 'none',
  /** 解除中 */
  terminating = 'terminating',
}

export enum C2CAdvertNewStatusEnum {
  RESTING = 'RESTING',
  NORMAL = 'NORMAL',
  DEALING = 'DEALING',
}

export enum paymentTypeEnum {
  NAME = 'NAME', // 姓名
  QRCODE = 'QR_CODE', // 二维码
  BANKNAME = 'BANK_NAME', // 银行名
  BANKBRANCH = 'BANK_BRANCH', // 银行支行
  PAYMENTDETAIL = 'PAYMENT_DETAIL', // 支付方式详情
  BANKACCOUNT = 'BANK_ACCOUNT', // 賬號
}

export type CodeDetailType = {
  codeKey: string
  codeVal: string
  remark: string
  isProhibit?: boolean
}

export type PayMentTypeProps = { [key: string]: Array<string> }

export enum BusinessC2cModeEnum {
  private = 'private',
  public = 'public',
}
