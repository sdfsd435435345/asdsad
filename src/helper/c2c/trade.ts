import { getAreaList, getC2cCommonSettings, getC2cCommonSettingsKycLevel } from '@/apis/c2c/common'
import { checkC2cKycAmountLimit, checkC2cOrderBeforeCreate, checkC2cOrderCoinForbidden } from '@/apis/c2c/trade'
import {
  C2cKycLevelNumberEnum,
  C2cTradeAdDirectionEnum,
  C2cTradeCheckCodeEnum,
  C2cTradeFilterTradeWayEnum,
  getC2cKycLevelStrEnumName,
} from '@/constants/c2c/trade'
import { baseC2cOrderStore } from '@/store/c2c/order'
import { baseC2cTradeStore } from '@/store/c2c/trade'
import { baseUserStore } from '@/store/user'
import { IC2cPayment, ITradeAdItem, IUserReceivePayment } from '@/typings/api/c2c/trade'
import { t } from '@lingui/macro'
import { Dialog } from 'react-vant'
import { groupBy } from 'lodash'
import { baseC2CCenterStore } from '@/store/c2c/center'
import { CoinTradingStatusTypeEnum } from '@/constants/c2c/common'
import { useMarketStore } from '@/store/market'
import { useAssetsStore } from '@/store/assets/spot'
import { CoinRateResp } from '@/typings/api/assets/assets'
import { link } from '../link'
import { getTextFromStoreEnums } from '../store'
import { getC2cPaymentsManagePageRoutePath, getC2cThirdTradePageRoutePath, getKycPageRoutePath } from '../route'
import { getServerCacheC2cAreaList } from '../cache/server'
import { getBusinessName } from '../common'

/** 判断用户当前是否满足交易条件 */
export function getTradeAdCanBuyOrSell(ad: ITradeAdItem) {
  const user = baseUserStore.getState()

  return true
}
export async function getCoinCanRecharge(adId: string) {
  const res = await checkC2cOrderCoinForbidden({
    advertId: adId,
  })
  if (!res.isOk || !res.data) {
    return false
  }
  if (res.data.pass) {
    baseC2cTradeStore.getState().updateDisabledChains((res.data.chainData || []).map(item => item.chainType))
    return true
  }
  return false
}
/** 判断是否可以提币 */
export const getCoinCanDeposit = getCoinCanRecharge

export function validateCountry(tradeArea: any, userInfo: any) {
  return true
}
export async function validateKycLimitAmount(count: string, isBuy: boolean) {
  // 交易限额
  const res = await checkC2cKycAmountLimit({
    amount: count,
    // 没写反
    side: isBuy ? C2cTradeAdDirectionEnum.sell : C2cTradeAdDirectionEnum.buy,
  } as any)
  if (!res.isOk || !res.data) {
    return false
  }
  if (res.data.pass) {
    return true
  }
  Dialog.confirm({
    title: t`helper_c2c_trade_2222222225101679`,
    message: isBuy ? t`helper_c2c_trade_2222222225101684` : t`helper_c2c_trade_2222222225101681`,
    cancelButtonText: t`helper_c2c_trade_2222222225101682`,
    confirmButtonText: t`helper_c2c_trade_2222222225101683`,
    onConfirm() {
      link(getKycPageRoutePath())
    },
  })
  return false
}
export function showCheckFailedModal({
  code,
  isBuy,
  message,
  payments,
}: {
  code?: string | number
  isBuy: boolean
  message?: string
  payments: IC2cPayment[]
}) {
  switch (code as unknown as C2cTradeCheckCodeEnum) {
    case C2cTradeCheckCodeEnum.kyc:
    case C2cTradeCheckCodeEnum.kycAmount:
      // 交易限额
      Dialog.confirm({
        title: t`helper_c2c_trade_2222222225101679`,
        message: isBuy ? t`helper_c2c_trade_2222222225101684` : t`helper_c2c_trade_2222222225101681`,
        className: 'dialog-confirm-wrapper cancel-gray confirm-black',
        cancelButtonText: t`helper_c2c_trade_2222222225101682`,
        confirmButtonText: t`helper_c2c_trade_2222222225101683`,
        onConfirm() {
          link(getKycPageRoutePath())
        },
      })
      break
    case C2cTradeCheckCodeEnum.kycLevel:
      Dialog.confirm({
        title: t`helper_c2c_trade_2222222225101679`,
        className: 'dialog-confirm-wrapper cancel-gray confirm-black',
        message,
        cancelButtonText: t`helper_c2c_trade_2222222225101687`,
        confirmButtonText: t`helper_c2c_trade_2222222225101688`,
        onConfirm() {
          link(getKycPageRoutePath())
        },
      })
      break
    case C2cTradeCheckCodeEnum.payment:
      const paymentNames = payments.map(i => i.name).join(t`features_c2c_trade_ad_list_2222222225101679`)
      Dialog.alert({
        title: t`helper_c2c_trade_2222222225101679`,
        className: 'dialog-confirm-wrapper confirm-black',
        closeOnClickOverlay: true,
        message: t({
          id: 'helper_c2c_trade_2222222225101692',
          values: {
            0: paymentNames,
          },
        }),
        confirmButtonText: t`helper_c2c_trade_2222222225101691`,
        onConfirm() {
          link(getC2cPaymentsManagePageRoutePath())
        },
      })
      break
    case C2cTradeCheckCodeEnum.resetPassword:
      Dialog.alert({
        title: t`helper_c2c_trade_2222222225101679`,
        className: 'dialog-confirm-wrapper confirm-black',
        closeOnClickOverlay: true,
        message: t`helper_c2c_trade_5i-tduo2ix42uy13tltjp`,
        confirmButtonText: t`common.modal.close`,
      })
      break
    case C2cTradeCheckCodeEnum.resetSecurity:
      Dialog.alert({
        title: t`helper_c2c_trade_2222222225101679`,
        className: 'dialog-confirm-wrapper confirm-black',
        closeOnClickOverlay: true,
        message: t`helper_c2c_trade_fapaoq2ftrw5tuqogxbw7`,
        confirmButtonText: t`common.modal.close`,
      })
      break
    case C2cTradeCheckCodeEnum.risk:
      Dialog.alert({
        title: t`helper_c2c_trade_2222222225101679`,
        className: 'dialog-confirm-wrapper confirm-black',
        closeOnClickOverlay: true,
        message: t`helper_c2c_trade_-l92jur2r2bgclewpnq4f`,
        confirmButtonText: t`common.modal.close`,
      })
      break
    default:
      break
  }
}
type ICheckCanOrderParams = {
  adId: string
  isBuy: boolean
  count: number
  payments: IC2cPayment[]
}
export async function checkCanOrder({ adId, payments, isBuy, count }: ICheckCanOrderParams) {
  const res = await checkC2cOrderBeforeCreate({
    advertId: adId,
    amount: count,
    // 没写反
    side: isBuy ? C2cTradeAdDirectionEnum.sell : C2cTradeAdDirectionEnum.buy,
  } as any)
  if (!res.isOk || !res.data) {
    showCheckFailedModal({
      isBuy,
      code: res.code,
      message: '',
      payments,
    })
    return false
  }
  if (res.data.pass) {
    return true
  }
  showCheckFailedModal({
    isBuy,
    code: res.data.code,
    message: '',
    payments,
  })
  return false
}
export async function validateTradeAreaKyc(onCancel?: () => void, dialogTitle?: string) {
  const [res] = await Promise.all([
    getC2cCommonSettingsKycLevel({}),
    baseC2CCenterStore.getState().getC2CCenterUser('', true),
  ])
  if (!res.isOk || !res.data) {
    return true
  }
  if (C2cKycLevelNumberEnum[res.data.level] > (baseC2CCenterStore.getState().c2cSelfUser.kycType || 1)) {
    const kycName = ` ${getC2cKycLevelStrEnumName(res.data.level as any)}`
    const inThirdOtcPage = window.location.href.includes(getC2cThirdTradePageRoutePath())
    Dialog.confirm({
      title: dialogTitle || t`helper_c2c_trade_2222222225101679`,
      className: 'dialog-confirm-wrapper cancel-gray confirm-black',
      message: inThirdOtcPage
        ? t`helper_c2c_trade_s2e7k2whx3`
        : t({
            id: 'helper_c2c_trade_2222222225101686',
            values: { 0: kycName },
          }),
      cancelButtonText: t`helper_c2c_trade_2222222225101687`,
      confirmButtonText: t`helper_c2c_trade_2222222225101688`,
      onConfirm() {
        link(getKycPageRoutePath())
      },
      onCancel,
    })
    return false
  }

  return true
}
export function validateSellPayments(payments: IC2cPayment[], userInfo: any) {
  // 支付方式
  if (!payments.some(payment => userInfo.payments?.includes(payment.type))) {
    const paymentNames = payments.map(i => i.name).join(t`features_c2c_trade_ad_list_2222222225101679`)
    Dialog.alert({
      title: t`helper_c2c_trade_2222222225101679`,
      className: 'dialog-confirm-wrapper confirm-black',
      closeOnClickOverlay: true,
      message: t({
        id: 'helper_c2c_trade_2222222225101692',
        values: {
          0: paymentNames,
        },
      }),
      confirmButtonText: t`helper_c2c_trade_2222222225101691`,
      onConfirm() {
        link('/c2c/kyc')
      },
    })
    return false
  }

  return true
}

export function paymentTypeToPayment(paymentType: string): IC2cPayment {
  return {
    type: paymentType,
    name: getTextFromStoreEnums(paymentType, baseC2cOrderStore.getState().orderEnums.payments.enums),
    accounts: [],
  }
}

export function userReceivePaymentsToPayments(list: IUserReceivePayment[]): IC2cPayment[] {
  const groupedList = groupBy(list, 'paymentTypeCd')
  return Object.keys(groupedList).map(key => {
    return {
      type: key,
      name: getTextFromStoreEnums(key, baseC2cOrderStore.getState().orderEnums.payments.enums),
      accounts: groupedList[key].map(i => ({
        account: i.account,
        qrcode: i.qrCodeAddr,
        name: i.bankOfDeposit,
        enabled: i.enabled === 1,
        paymentId: i.id,
      })),
    }
  })
}
export async function fetchC2cTradeStoreSettings() {
  const res = await getC2cCommonSettings({})
  if (!res.isOk || !res.data) {
    return
  }
  baseC2cTradeStore.getState().updateApiSettings(res.data)
}
/** 获取支付用户名展示 超过 5 个字符用 ...代替 */
export function getPayUserName(name: string) {
  return name.replace(/(.{5}).*(.{0})/, '$1...')
}
/** 获取默认交易方式筛选，站内或站外或者全部 */
export function getDefaultTradeWays(type?: string) {
  return type === C2cTradeFilterTradeWayEnum.all
    ? [C2cTradeFilterTradeWayEnum.inside, C2cTradeFilterTradeWayEnum.outside]
    : [type || C2cTradeFilterTradeWayEnum.inside]
}
/** 获取缩略账号展示，银行卡超出 8 位，其它账号超出 6 位 */
export function getAccountEllipsis(account = '', isBankcard = true) {
  account = (account || '').trim()
  return isBankcard ? account.replace(/(.{4}).+(.{4})/, '$1****$2') : account.replace(/(.{3}).+(.{3})/, '$1***$2')
}

export async function getC2cDefaultSeoMeta(pageTitle?: string) {
  let defaultCurrencyList = ['CNY']
  const areaList = await getServerCacheC2cAreaList()
  defaultCurrencyList = areaList
    .filter(item => {
      return item.statusCd === CoinTradingStatusTypeEnum.enable
    })
    .map(item => item.currencyName)
  const values = {
    currencyList: defaultCurrencyList.join(t`features_c2c_trade_ad_list_2222222225101679`),
    businessName: getBusinessName(),
  }
  const preTitle = pageTitle ? `${pageTitle} | ` : ''

  return {
    title: `${preTitle}${t({
      id: `modules_c2c_trade_index_page_gcw9acagqf`,
      values,
    })}`,
    description: `${preTitle}${t({
      id: `modules_c2c_trade_index_page_y1nsgrwbv3`,
      values,
    })}`,
  }
}

export function useSpotCoinIdFromFastPay(symbol: string) {
  const {
    assetsModule: {
      coinRate: { coinRate },
    },
  } = useAssetsStore()
  const coinRateList = coinRate as CoinRateResp[]

  return coinRateList.find((item: CoinRateResp) => item.symbol === symbol)?.coinId
}
