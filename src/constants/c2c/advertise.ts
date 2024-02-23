/**
 * c2c-广告
 */
import { t } from '@lingui/macro'
import { OrderBuyAndSellRoleTypeEnum } from './common'

/**
 * c2c-数据字典类型
 */
export enum AdvertisingDictionaryTypeEnum {
  /** 认证等级 企业认证/初级认证/高级认证 */
  certificationLevel = 'c2c_certification_level_cd',
  /** 支付类型 支付宝/微信支付/银行卡	*/
  paymentType = 'c2c_payment_type_cd',
  /** 广告状态 */
  advertisingStatus = 'c2c_advertising_status_cd',
  /** 广告方向 买币/卖币 */
  advertDirect = 'advert_buy_sell',
  /** 广告交易类型 站内/站外 */
  advertDealType = 'c2c_advert_deal_type',
  /** 广告单详情广告交易类型 站内交易/站外交易 */
  detailAdvertDealType = 'c2c_advert_deal_detail_type',
  /** 支付方式备注 */
  paymentRemark = 'c2c_payment_remark',
  /** 支付方式颜色 */
  paymentColor = 'c2c_payment_color',
}

/**
 * 发布广告单 - 广告方向类型
 */
export enum AdvertisingDirectionTypeEnum {
  /** 出售 */
  sell = 'SELL',
  /** 购买 */
  buy = 'BUY',
}

/**
 * 发布广告单 - 有效期类型
 */
export enum ValidDaysTypeEnum {
  /** 1 天 */
  one = 1,
  /** 3 天 */
  three = 2,
  /** 7 天 */
  seven = 7,
  /** 15 天 */
  fifteen = 15,
  /** 30 天 */
  thirty = 30,
}

export function getValidDaysTypeName(type: ValidDaysTypeEnum | string) {
  return {
    [ValidDaysTypeEnum.one]: t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_m_hjb5ab-r5s6nxgvcyjs`,
    [ValidDaysTypeEnum.three]: t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_i8nz5da53m7pbwek-o9cb`,
    [ValidDaysTypeEnum.seven]: t`user.account_security_04`,
    [ValidDaysTypeEnum.fifteen]: t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_875khuf08cjgec8gl_yu6`,
    [ValidDaysTypeEnum.thirty]: t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_tfbsotrmnydbzyt46khyh`,
  }[type]
}

export const getValidDaysList = () => {
  return [
    {
      text: t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_m_hjb5ab-r5s6nxgvcyjs`,
      value: ValidDaysTypeEnum.one,
    },
    {
      text: t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_i8nz5da53m7pbwek-o9cb`,
      value: ValidDaysTypeEnum.three,
    },
    {
      text: t`user.account_security_04`,
      value: ValidDaysTypeEnum.seven,
    },
    {
      text: t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_875khuf08cjgec8gl_yu6`,
      value: ValidDaysTypeEnum.fifteen,
    },
    {
      text: t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_tfbsotrmnydbzyt46khyh`,
      value: ValidDaysTypeEnum.thirty,
    },
  ]
}

/**
 * 发布广告单 - 最新价格限额重合度类型
 */
export enum CoincidenceValueTypeEnum {
  /** 20% */
  twenty = '0.2',
  /** 30% */
  thirty = '0.3',
  /** 50% */
  fifty = '0.5',
  /** 80% */
  eighty = '0.8',
}

export function getLatestPriceLimitTypeName(type: string) {
  return {
    [CoincidenceValueTypeEnum.twenty]: '20%',
    [CoincidenceValueTypeEnum.thirty]: '30%',
    [CoincidenceValueTypeEnum.fifty]: '50%',
    [CoincidenceValueTypeEnum.eighty]: '80%',
  }[type]
}

export const CoincidenceValueList = [
  { label: '20%', value: CoincidenceValueTypeEnum.twenty },
  { label: '30%', value: CoincidenceValueTypeEnum.thirty },
  { label: '50%', value: CoincidenceValueTypeEnum.fifty },
  { label: '80%', value: CoincidenceValueTypeEnum.eighty },
]

/**
 * 发布广告单 - 支付方式类型
 */
export enum PaymentTypeEnum {
  /** 银行卡 */
  bankCard = 'BANK',
  /** 支付宝 */
  aliPay = 'ALIPAY',
  /** 微信支付 */
  weChat = 'WECHAT',
  /** paypal */
  paypal = 'PAYPAL',
}

/**
 * 发布广告单 - 广告重合度列表类型
 */
export enum CoincidenceListTypeEnum {
  /** 买 */
  bid = 'bid',
  /** 卖 */
  ask = 'ask',
}

/**
 * 广告单记录 - 版本类型
 */
export enum HistoryVersionTypeEnum {
  /** 标准版 */
  normal = 'normal',
  /** 详情版 */
  details = 'details',
}

/**
 * 广告单记录-tab 类型
 */
export enum HistoryTabTypeEnum {
  /** 上架中 */
  on = '1',
  /** 已下架 */
  off = '2',
}

export function getHistoryFormName(type: string) {
  return (
    {
      [HistoryTabTypeEnum.on]: 'on',
      [HistoryTabTypeEnum.off]: 'off',
    }[type] || 'on'
  )
}

/**
 * 广告单记录 - 广告状态
 */
export enum HistoryStatusTypeEnum {
  /** 正常 */
  normal = 'NORMAL',
  /** 交易中 */
  trade = 'DEALING',
  /** 休息中 */
  resting = 'RESTING',
}

export function getHistoryStatusTypeName(type: string) {
  return {
    [HistoryStatusTypeEnum.normal]: t`constants_c2c_advertise_fbuusm1vzzfdsl-lleyjg`,
    [HistoryStatusTypeEnum.trade]: t`features_c2c_advertise_advertise_history_history_list_index_oylmhvzzjwjgake_pdxkl`,
    [HistoryStatusTypeEnum.resting]: t`constants_c2c_advertise_ncywmkk89jllxw7lwzy63`,
  }[type]
}

/**
 * 广告 - 广告状态
 */
export enum AdvertStatusTypeEnum {
  /** 上架中 */
  shelves = 'ON_SHELVES',
  /** 到期下架 */
  expired = 'EXPIRED',
  /** 商家下架 */
  merchantOffShelves = 'TAKE_OFF_SHELVES_MERCHANT',
  /** 系统下架 */
  systemOffShelves = 'TAKE_OFF_SHELVES_SYSTEM',
  /** 交易中 */
  dealing = 'DEALING',
  /** 撤回中 */
  withdrawing = 'WITHDRAW',
  /** 完成买币数量 */
  buyFull = 'BUY_FULL',
}

/**
 * 广告 - 欢迎语类型
 */
export enum WelcomeInfoTypeEnum {
  /** 文字 */
  text = 1,
  /** 图片 */
  image,
}

/**
 * 广告订单状态
 * 数据字典：c2c_order_status_cd
 *  CANCEL__APPEAL_FINISH 取消、申诉完成
 */
export enum AdvertiseOrderStatusEnum {
  /** 已创建 (初始值) = 待转账 */
  created = 'CREATED',
  /** 已付款 = 待确认收款 */
  wasPayed = 'WAS_PAYED',
  /** 已收款 = 待转币 */
  wasCollected = 'WAS_COLLECTED',
  /** 已转币 = 待确认收币 */
  wasTransferCoin = 'WAS_TRANSFER_COIN',
  /** 已收币 (已完成) = 已完成 */
  wasReceiveCoin = 'WAS_RECEIVE_COIN',
  /** 已取消 = 已取消 */
  wasCancel = 'WAS_CANCEL',
  /** 非取消、申诉中 = 申诉中 */
  notCancelAppealing = 'NOT_CANCEL__APPEALING',
  /** 取消、申诉中 = 申诉中 */
  cancelAppealing = 'CANCEL__APPEALING',
  /** 非取消、申诉完成 = 仲裁胜利 */
  notCancelAppealFinish = 'NOT_CANCEL__APPEAL_FINISH',
  /** 取消、申诉完成 = 仲裁胜利 */
  cancelAppealFinish = 'CANCEL__APPEAL_FINISH',
}

/**
 * 根据广告订单状态返回广告单详情历史订单展示文案
 * @param type 订单状态
 * @param buyAndSellRole 买卖角色
 * @param isAppealWinner 是否已胜诉
 */
export function getAdvertiseOrderStatusName(type: string, buyAndSellRole: string, isAppealWinner: boolean) {
  return {
    [AdvertiseOrderStatusEnum.created]: `${
      buyAndSellRole === OrderBuyAndSellRoleTypeEnum.buyer
        ? t`constants_c2c_order_q-npvv53i1t_ynjhffdje`
        : t`constants_c2c_advertise__m2wahy_ybhxjakq9tebo`
    }`,
    [AdvertiseOrderStatusEnum.wasPayed]: `${
      buyAndSellRole === OrderBuyAndSellRoleTypeEnum.buyer
        ? t`constants_c2c_order_htmc-njbpnpwzghrpe2qv`
        : t`constants_c2c_order_gno2aw3eri_nbrpeofy0f`
    }`,
    [AdvertiseOrderStatusEnum.wasCollected]: `${
      buyAndSellRole === OrderBuyAndSellRoleTypeEnum.buyer
        ? t`constants_c2c_advertise_oumxp3s9jdadqsfkgfy9v`
        : t`constants_c2c_order_hjpf8esfjmwsunjytvc6b`
    }`,
    [AdvertiseOrderStatusEnum.wasTransferCoin]: `${
      buyAndSellRole === OrderBuyAndSellRoleTypeEnum.buyer
        ? t`constants_c2c_order_zarpv2wwswvyh1axli49j`
        : t`constants_c2c_order_r9y8tapxasxlcafvqb5n3`
    }`,
    [AdvertiseOrderStatusEnum.wasReceiveCoin]: t`features_trade_future_settings_margin_records_index_5101364`,
    [AdvertiseOrderStatusEnum.wasCancel]: t`features_c2c_order_index_r7jtbzh25c2xd2iikp_xc`,
    [AdvertiseOrderStatusEnum.notCancelAppealing]: t`features_c2c_order_detail_appealing__m9ygir2toseh72wmui_5`,
    [AdvertiseOrderStatusEnum.cancelAppealing]: t`features_c2c_order_detail_appealing__m9ygir2toseh72wmui_5`,
    [AdvertiseOrderStatusEnum.notCancelAppealFinish]: `${
      isAppealWinner ? t`constants_c2c_order_dgjannjiih3hqkr0vcgh7` : t`constants_c2c_order_uocpa5vduwto3b07iwjjl`
    }`,
    [AdvertiseOrderStatusEnum.cancelAppealFinish]: `${
      isAppealWinner ? t`constants_c2c_order_dgjannjiih3hqkr0vcgh7` : t`constants_c2c_order_uocpa5vduwto3b07iwjjl`
    }`,
  }[type]
}

/**
 * 交易区是否允许站外交易
 */
export enum CurrencyCanOutTradeEnum {
  /** 可以 */
  yes = 'YES',
  /** 不可以 */
  no = 'NO',
}

/**
 * 商家是否允许站外交易
 */
export enum MerchantCanOutTradeEnum {
  /** 可以 */
  yes = 1,
  /** 不可以 */
  no,
}

/**
 * 是否启用收款账号/支付方式
 */
export enum PaymentEnabledTypeEnum {
  /** 未启用 */
  no = 0,
  /** 启用 */
  yes,
}
