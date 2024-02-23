import { getC2cOrderImPageRoutePath } from '@/helper/route'
import { baseC2cOrderStore } from '@/store/c2c/order'
import { IC2cOrderDetail, IC2cOrderItem } from '@/typings/api/c2c/order'
import {
  YapiGetV1AppealGetReasonListC2CAppealReasonVOListData,
  YapiGetV1AppealGetReasonListData,
} from '@/typings/yapi/AppealGetReasonListV1GetApi'
import { t } from '@lingui/macro'

export enum C2cOrderStatusEnum {
  filled = 1,
  /** 待支付 */
  awaitPay = 'CREATED',
  /** 买家待支付 2，待支付点击下一步就是这个，但是为本地状态，和 awaitPay 没有本质区别 */
  awaitPay2 = 'awaitPay2',
  /** 已支付 */
  paid = 'WAS_PAYED',
  /** 已确认收款 */
  received = 'WAS_COLLECTED',
  /** 已转币 */
  transferred = 'WAS_TRANSFER_COIN',
  /** 已确认转币 */
  transferConfirmed = 'WAS_RECEIVE_COIN',
  /** 申诉中 */
  appealing = 'NOT_CANCEL__APPEALING',
  /** 取消后申诉 */
  canceledAppealing = 'CANCEL__APPEALING',
  systemCanceled = 'systemCanceled',
  manualCanceled = 'WAS_CANCEL',
  appealCanceled = 'appealCanceled',
  appealFinished = 'NOT_CANCEL__APPEAL_FINISH',
  canceledAppealFinished = 'CANCEL__APPEAL_FINISH',
  /** 买家已取消 */
  buyerCanceled = 'buyerCanceled',
  /** 卖家已取消 */
  sellerCanceled = 'sellerCanceled',
  /** 未完成 */
  unFinished = 'UN_FINISH',
  /** 已完成 */
  finished = 'WAS_FINISH',
  /** 已取消 */
  canceled = 'WAS_CANCEL',
}
export enum C2cOrderDirectionEnum {
  buy = 'BUY',
  sell = 'SELL',
}
// 是否是OTC订单，1不是 2是
export enum C2cOrderIsOtcEnum {
  No = 1,
  Yes,
}
export function getC2cOrderStatusEnumNameInList(order: IC2cOrderItem, direction: C2cOrderDirectionEnum) {
  const common = {
    [C2cOrderStatusEnum.filled]: t`assets.coin.overview.detail`,
    [C2cOrderStatusEnum.systemCanceled]: t`constants_c2c_order_rquqwbxpm7o5i70bqbayb`,
    [C2cOrderStatusEnum.manualCanceled]: t`constants_c2c_order_rquqwbxpm7o5i70bqbayb`,
    [C2cOrderStatusEnum.appealing]: t`features_c2c_order_detail_appealing__m9ygir2toseh72wmui_5`,
    [C2cOrderStatusEnum.canceledAppealing]: t`features_c2c_order_detail_appealing__m9ygir2toseh72wmui_5`,
    [C2cOrderStatusEnum.appealCanceled]: t`features_c2c_order_index_r7jtbzh25c2xd2iikp_xc`,
    [C2cOrderStatusEnum.buyerCanceled]: t`constants_c2c_order_rquqwbxpm7o5i70bqbayb`,
    [C2cOrderStatusEnum.sellerCanceled]: t`constants_c2c_order_pwwo3eolxvl6zv97obmlk`,
    [C2cOrderStatusEnum.transferConfirmed]: t`assets.coin.overview.detail`,
  }
  const buyText = {
    [C2cOrderStatusEnum.awaitPay]: t`constants_c2c_order_q-npvv53i1t_ynjhffdje`,
    [C2cOrderStatusEnum.awaitPay2]: t`constants_c2c_order_q-npvv53i1t_ynjhffdje`,
    [C2cOrderStatusEnum.paid]: t`constants_c2c_order_htmc-njbpnpwzghrpe2qv`,
    [C2cOrderStatusEnum.received]: t`constants_c2c_order_2cogdd-4wsi4-xodrffni`,
    [C2cOrderStatusEnum.transferred]: t`constants_c2c_order_zarpv2wwswvyh1axli49j`,
    ...common,
  }

  const sellText = {
    [C2cOrderStatusEnum.awaitPay]: t`constants_c2c_order_wnf4fqnvh1gg9yp_dm6ef`,
    [C2cOrderStatusEnum.awaitPay2]: t`constants_c2c_order_wnf4fqnvh1gg9yp_dm6ef`,
    [C2cOrderStatusEnum.paid]: t`constants_c2c_order_gno2aw3eri_nbrpeofy0f`,
    [C2cOrderStatusEnum.received]: t`constants_c2c_order_hjpf8esfjmwsunjytvc6b`,
    [C2cOrderStatusEnum.transferred]: t`constants_c2c_order_r9y8tapxasxlcafvqb5n3`,
    ...common,
  }

  return (
    {
      [C2cOrderDirectionEnum.buy]: buyText,
      [C2cOrderDirectionEnum.sell]: sellText,
    }[direction]?.[order?.statusCd] ||
    (order?.isAppealWinner
      ? t`constants_c2c_order_dgjannjiih3hqkr0vcgh7`
      : t`constants_c2c_order_uocpa5vduwto3b07iwjjl`)
  )
}
export function getC2cOrderStatusEnumNameInIm(order: IC2cOrderDetail) {
  const common = {
    [C2cOrderStatusEnum.systemCanceled]: t`features_c2c_order_index_r7jtbzh25c2xd2iikp_xc`,
    [C2cOrderStatusEnum.manualCanceled]: t`features_c2c_order_index_r7jtbzh25c2xd2iikp_xc`,
    [C2cOrderStatusEnum.canceledAppealing]: t`features_c2c_order_detail_appealing__m9ygir2toseh72wmui_5`,
    [C2cOrderStatusEnum.appealing]: t`features_c2c_order_detail_appealing__m9ygir2toseh72wmui_5`,
    [C2cOrderStatusEnum.appealCanceled]: t`features_c2c_order_index_r7jtbzh25c2xd2iikp_xc`,
    [C2cOrderStatusEnum.buyerCanceled]: t`features_c2c_order_index_r7jtbzh25c2xd2iikp_xc`,
    [C2cOrderStatusEnum.sellerCanceled]: t`features_c2c_order_index_r7jtbzh25c2xd2iikp_xc`,
    [C2cOrderStatusEnum.awaitPay]: t`features_trade_future_settings_margin_records_index_5101399`,
    [C2cOrderStatusEnum.paid]: t`features_trade_future_settings_margin_records_index_5101399`,
    [C2cOrderStatusEnum.received]: t`features_trade_future_settings_margin_records_index_5101399`,
    [C2cOrderStatusEnum.transferred]: t`features_trade_future_settings_margin_records_index_5101399`,
    [C2cOrderStatusEnum.transferConfirmed]: t`features_trade_future_settings_margin_records_index_5101364`,
  }
  return (
    common[order.statusCd] ||
    (order?.isAppealWinner
      ? t`constants_c2c_order_dgjannjiih3hqkr0vcgh7`
      : t`constants_c2c_order_uocpa5vduwto3b07iwjjl`)
  )
}

export function getOtcOrderStatusEnumName(status: string) {
  const common = {
    [C2cOrderStatusEnum.canceled]: t`features_c2c_order_index_r7jtbzh25c2xd2iikp_xc`,
    [C2cOrderStatusEnum.transferConfirmed]: t`features_trade_future_settings_margin_records_index_5101364`,
  }
  return common[status] || t`features_trade_future_settings_margin_records_index_5101399`
}

export function getC2cOrderDirectionEnumName(value: C2cOrderDirectionEnum) {
  return {
    [C2cOrderDirectionEnum.buy]: t`features_kyc_index_standards_5101189`,
    [C2cOrderDirectionEnum.sell]: t`features_kyc_index_standards_5101190`,
  }[value]
}
/** 站内站外交易类型 */
export enum C2cOrderTradeTypeEnum {
  inside = 'INSIDE',
  outside = 'OUTSIDE',
  otc = 'OTC',
}

export function getC2cOrderTradeTypeEnumName(value: C2cOrderTradeTypeEnum) {
  return {
    [C2cOrderTradeTypeEnum.inside]: t`features_trade_future_c2c_2222225101602`,
    [C2cOrderTradeTypeEnum.outside]: t`features_trade_future_c2c_2222225101603`,
    [C2cOrderTradeTypeEnum.otc]: t`features_c2c_trade_switch_trade_mode_0wuqc5nstq`,
  }[value]
}

export function getC2cOrderCancelReasons({
  orderId,
  helpLink,
  paid,
  all,
}: {
  orderId: string
  paid: boolean
  helpLink?: string
  all?: boolean
}) {
  const contactSeller = {
    link: getC2cOrderImPageRoutePath(orderId),
    linkLabel: t`constants_c2c_order_clf0jkq_qfgfvtbmlrm_1`,
  }
  const defaultReasons = [
    {
      id: 'PAY_BEFORE__WBXML',
      label: t`constants_c2c_order_sfu0j-h2woqggls2i2ecd`,
      note: t`constants_c2c_order_4svslt-ycgfawwnf5xsa_`,
    },
    {
      id: 'PAY_BEFORE__LXBDMJ',
      label: t`constants_c2c_order_yv2u3eytmncb5qweogchs`,
      ...contactSeller,
      note: t`constants_c2c_order_6kt06udvxofyxg66pxi4e`,
    },
    {
      id: 'PAY_BEFORE__WSXSBZDRHZZ',
      label: t`constants_c2c_order_lzqn5blzkft7amttoheie`,
      link: helpLink,
      note: t`constants_c2c_order_oydy3bfz8iukggrjmex5e`,
      linkLabel: t`constants_c2c_order_dz0hvnn8eripa3pr9jmau`,
    },
    {
      id: 'PAY_BEFORE__MJMMLZSSKZH',
      label: t`constants_c2c_order_w2rvyokznvqltc5bcg-vz`,
      ...contactSeller,
      note: t`constants_c2c_order_rx2hkol77tud4q6rde2ll`,
    },
    {
      id: 'PAY_BEFORE__MJSKZHBFKWFFK',
      label: t`constants_c2c_order_eizbone7hlyh_b4euofr2`,
      ...contactSeller,
      note: t`constants_c2c_order_v-f0gmxr-zgo5t7g0x32j`,
    },
    {
      id: 'PAY_BEFORE__SJDJYWKDDBF',
      label: t`constants_c2c_order_avzzevtx-t6sn4n9tljq9`,
    },
    {
      id: 'PAY_BEFORE__YMJXSQX',
      label: t`constants_c2c_order_hnnlumrlrfeveq2iktntj`,
    },
    {
      id: 'PAY_BEFORE__SYZLWFCB',
      label: t`constants_c2c_order_vddb442ycxkbtzwbkgq6e`,
    },
    {
      id: 'PAY_BEFORE__MJFWTDBH',
      label: t`constants_c2c_order_dscklik3nrvlpfhfnqtj6`,
      note: t`constants_c2c_order_djvqhoue412hg3sempxsb`,
    },
    {
      id: 'PAY_BEFORE__QTYY',
      label: t`constants_c2c_order_zokksdfvxikb6cdxojt1t`,
      placeholder: t`constants_c2c_order_3tk2smvhvkak9_dwobmmf`,
    },
    {
      id: 'PAY_AFTER__WBXML',
      label: t`constants_c2c_order_sfu0j-h2woqggls2i2ecd`,
      note: t`constants_c2c_order_po-vhmna9hgthasu5aop-`,
    },
    {
      id: 'PAY_AFTER__LXBDMJ',
      label: t`constants_c2c_order_yv2u3eytmncb5qweogchs`,
      ...contactSeller,
      note: t`constants_c2c_order_6kt06udvxofyxg66pxi4e`,
    },
    {
      id: 'PAY_AFTER__WSXSBHCZ',
      label: t`constants_c2c_order_eyjlwqa1fgmjisqfjov3-`,
      note: t`constants_c2c_order_u4p2aio6aoaeaubdfabf6`,
    },
    {
      id: 'PAY_AFTER__MJBQTGWRWQX',
      label: t`constants_c2c_order_sradjmnvmzcykmtlbmbbg`,
      note: t`constants_c2c_order_po-vhmna9hgthasu5aop-`,
    },
    {
      id: 'PAY_AFTER__SYZLWFCB',
      label: t`constants_c2c_order_vddb442ycxkbtzwbkgq6e`,
    },
    {
      id: 'PAY_AFTER__QTYY',
      placeholder: t`constants_c2c_order_3tk2smvhvkak9_dwobmmf`,
      label: t`constants_c2c_order_zokksdfvxikb6cdxojt1t`,
    },
  ]
  const enums = baseC2cOrderStore.getState().orderEnums.cancelReasons.enums
  // 替换平台设置变量
  defaultReasons.forEach(reason => {
    reason.label = enums.find(item => item.value === reason.id)?.label || reason.label
  })
  return all ? defaultReasons : defaultReasons.filter(reason => reason.id.includes(paid ? 'PAY_AFTER' : 'PAY_BEFORE'))
}
export function getC2cOrderAppealReasons(isBuyer: boolean, resReasons: YapiGetV1AppealGetReasonListData[]) {
  const reasonEnums = baseC2cOrderStore.getState().orderEnums.appealReasons.enums
  const buyer = [
    {
      id: 'BUY__TRANSFER_TOO_MANY',
      label: t`constants_c2c_order_5abnvkvoc5dpjua4axqjx`,
      children: [
        {
          id: 'BUY__LXBSDF',
          label: t`constants_c2c_order_yvd1fd4meaycutsjwucup`,
        },
        {
          id: 'BUY__MFBYYTKHSTK',
          label: t`constants_c2c_order_tsct7bvmayltmy_q3eepw`,
        },
        {
          id: 'BUY__MFRWCXPD',
          label: t`constants_c2c_order_3vqsdv7gvodegmykialcb`,
        },
      ],
    },
    {
      id: 'BUY__OTHER',
      label: t`assets.enum.tradeRecordType.other`,
      children: [],
    },
  ]
  const seller = [
    {
      id: 'SELL__RECEIVED_LESS_AMOUNT',
      label: t`constants_c2c_order_i6_l8gpnrzghuyaosuczr`,
      children: [
        {
          id: 'SELL__LXBSMF',
          label: t`constants_c2c_order_yvd1fd4meaycutsjwucup`,
        },
        {
          id: 'SELL__MFJJWFBK',
          label: t`constants_c2c_order_4nn1bnqvgvieegf-eqzs5`,
        },
        {
          id: 'SELL__MFBHCZ',
          label: t`constants_c2c_order_xr5hjjm0kknswzlwy4mdx`,
        },
        {
          id: 'SELL__MFXSQSXF',
          label: t`constants_c2c_order_uy02kkfdwic7pthat_fga`,
        },
      ],
    },
    {
      id: 'SELL__BUYER_NAME_WRONG',
      label: t`constants_c2c_order_uamvvjzprbz_pixh3o0fn`,
      children: [
        {
          id: 'SELL__LXBSMF',
          label: t`constants_c2c_order_yvd1fd4meaycutsjwucup`,
        },
        {
          id: 'SELL__MFBTGTKFS',
          label: t`constants_c2c_order_mub_nbg4t4v4ae3ludirj`,
        },
        {
          id: 'SELL__MFTKZHYW',
          label: t`constants_c2c_order_enmwdfhk86x5uqfuq_otl`,
        },
      ],
    },
    {
      id: 'SELL__NO_PAYMENT_RECEIVED',
      label: t`constants_c2c_order_2x3vlf2lzajs3fjl9-o3i`,
      children: [
        {
          id: 'SELL__LXBSMF',
          label: t`constants_c2c_order_yvd1fd4meaycutsjwucup`,
        },
        {
          id: 'SELL__MFJJWFBK',
          label: t`constants_c2c_order_4nn1bnqvgvieegf-eqzs5`,
        },
        {
          id: 'SELL__MFBHCZ',
          label: t`constants_c2c_order_xr5hjjm0kknswzlwy4mdx`,
        },
      ],
    },
    {
      id: 'SELL__THE_BANK_CARD_WAS_FROZEN',
      label: t`constants_c2c_order_z-punloe9zn2trxwc0utd`,
      children: [],
    },
    {
      id: 'SELL__OTHER',
      label: t`assets.enum.tradeRecordType.other`,
      children: [],
    },
  ]
  const buyerOrSellerReasons = resReasons.find(item => item.side === (isBuyer ? 'BUY' : 'SELL'))?.c2cAppealReasonVOList
  const reasons =
    buyerOrSellerReasons?.map(item => ({
      label: item.reason,
      id: item.reason,
      children: item.concreteList.map(subItem => ({
        label: subItem,
        id: subItem,
      })),
    })) || (isBuyer === undefined ? [...buyer, ...seller] : isBuyer ? buyer : seller)
  // 替换平台设置变量
  reasons.forEach(reason => {
    reason.label = reasonEnums.find(item => item.value === reason.id)?.label || reason.label
    reason.children.forEach(subReason => {
      subReason.label = reasonEnums.find(item => item.value === subReason.id)?.label || subReason.label
    })
  })
  return reasons
}
