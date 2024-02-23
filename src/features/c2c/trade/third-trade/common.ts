import { I18nsEnum } from '@/constants/i18n'
import { baseCommonStore } from '@/store/common'

export const DIRECTION_MAP = {
  buy: 'BUY',
  sell: 'SELL',
}

export const LOOP_DURATION = 1000 * 30

export enum ThirdOtcEnum {
  transak = 'transak',
  transfi = 'transfi',
}

export const addRedirectUrl = (name: string | undefined, payUrl: string | undefined) => {
  const { locale } = baseCommonStore.getState()

  return name?.toLowerCase() === ThirdOtcEnum.transfi
    ? `${payUrl}&redirectUrl=${window.location.origin + (locale === I18nsEnum['en-US'] ? '' : `/${locale}`)}/c2c/orders`
    : `${payUrl}&redirectURL=${window.location.origin + (locale === I18nsEnum['en-US'] ? '' : `/${locale}`)}/c2c/orders`
}
