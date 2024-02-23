import { rateFilter } from '@/helper/assets/spot'
import { t } from '@lingui/macro'
import _, { isEmpty, partial } from 'lodash'
import { checkValidEmailInput } from '@/helper/reg'
import { isAboveMinFrozeAmount } from '.'

function CommonValidatorFn(_, value: string, errorMsg: string) {
  if (value && !isEmpty(value)) return Promise.resolve()
  return Promise.reject(new Error(errorMsg))
}

function NameValidatorFn(_, value: string, errorMsg: string) {
  switch (true) {
    case !value:
      return Promise.reject(new Error(errorMsg))
    case value.length > 30:
      return Promise.reject(new Error(t`helper_c2c_merchant_form_validators_l1sq6szrwsndilz5j0eh1`))
    default:
      return Promise.resolve()
  }
}

function ValueRangeValidatorFn(_, value: string, errorMsg: string) {
  const numVal = Number(value)
  switch (true) {
    case !value:
      return Promise.reject(new Error(errorMsg))
    case numVal < 0:
      return Promise.reject(new Error(t`helper_c2c_merchant_form_validators_i6cpjcjntomiwrayr10jr`))
    case value.length > 8:
      return Promise.reject(new Error(t`helper_c2c_merchant_form_validators_3iuhwgggpfqcfogepezof`))
    default:
      return Promise.resolve()
  }
}

function EmailValidatorFn(_, value: string) {
  switch (true) {
    case !value:
      return Promise.reject(new Error(t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101388`))
    case !checkValidEmailInput(value):
      return Promise.reject(new Error(t`helper_c2c_merchant_form_validators_sucngjvxii9bij94mrpbl`))
    default:
      return Promise.resolve()
  }
}

function EmailCodeValidatorFn(_, value: string, errorMsg: string) {
  switch (true) {
    case !value:
      return Promise.reject(new Error(errorMsg))
    case value.length < 6:
      return Promise.reject(
        new Error(
          `${t`helper_c2c_merchant_form_validators_qv2vxfisdip_vtcsdcca5`} 6 ${t`helper_c2c_merchant_form_validators_ips_pdkty3xphsivdq5rx`}`
        )
      )
    default:
      return Promise.resolve()
  }
}

function FreezeAmtValidatorFn(
  _,
  value: { freezeCount: string },
  config: { amount?: number; symbol?: string; coin?: string }
) {
  const { amount = 0, symbol = 'USDT', coin } = config
  const freezeCount = value?.freezeCount
  const numFreezeCount = Number(freezeCount)
  const validation = isAboveMinFrozeAmount(amount, symbol, numFreezeCount, coin)
  switch (true) {
    case value && !freezeCount:
      return Promise.reject(new Error(t`features_c2c_c2c_merchant_c2c_merchant_form_index_2222225101393`))
    case numFreezeCount < 0:
      return Promise.reject(new Error(`${t`helper_c2c_merchant_form_validators_6btkh8fttikjmbvo-fskf`} 0`))
    case freezeCount?.length > 8:
      return Promise.reject(new Error(t`helper_c2c_merchant_form_validators_3iuhwgggpfqcfogepezof`))
    case !validation.isValid:
      return Promise.reject(new Error(validation.errorMessage))
    default:
      return Promise.resolve()
  }
}

export const FormValidator = (errorMsg: string) => partial(CommonValidatorFn, _, _, errorMsg)

export const FreezeAmtValidator = (config: { amount?: number; symbol?: string; coin?: string }) =>
  partial(FreezeAmtValidatorFn, _, _, config)

export const NicknameValidator = (errorMsg: string) => partial(NameValidatorFn, _, _, errorMsg)

export const UrgentNameValidator = (errorMsg: string) => partial(NameValidatorFn, _, _, errorMsg)

export const EmailValidator = EmailValidatorFn

export const EmailCodeValidator = (errorMsg: string) => partial(EmailCodeValidatorFn, _, _, errorMsg)

export const ReputationValidator = (errorMsg: string) => partial(ValueRangeValidatorFn, _, _, errorMsg)
