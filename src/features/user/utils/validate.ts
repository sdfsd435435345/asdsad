import { t } from '@lingui/macro'
import { ChinaAreaCodeEnum, UserPhoneSliceNumEnum } from '@/constants/user'

enum UidLength {
  length = 8, // 长度 8
}

const emailExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

const accountValidate = () => {
  return {
    required: true,
    validator: (_, value: string | undefined) => {
      if (!value) return Promise.reject(new Error(t`features_user_login_index_510241`))
      const regExp = /@/g
      const numberExp = /^[\d]+$/
      const spaceExp = /\s+/g
      const isEmail = value && value.match(regExp)
      const isNumber = value && value.match(numberExp)
      const isLength = value && value.length === UidLength.length
      if ((isEmail && !emailExp.test(value)) || (isNumber && !isLength) || spaceExp.test(value)) {
        return Promise.reject(new Error(t`features_user_utils_validate_510242`))
      }

      return Promise.resolve(true)
    },
  }
}

const emailValidate = () => {
  return {
    required: true,
    validator: (_, value: string | undefined) => {
      if (!value) return Promise.reject(new Error(t`user.validate_form_02`))
      if (value && !emailExp.test(value)) {
        return Promise.reject(new Error(t`features_user_utils_validate_510201`))
      }
      return Promise.resolve(true)
    },
  }
}

const phoneValidate = () => {
  return {
    required: true,
    validator: (_, value: string | undefined) => {
      if (!value) return Promise.reject(new Error(t`user.field.reuse_11`))
      if (value && value.length < 8) {
        return Promise.reject(new Error(t`features_user_utils_validate_510248`))
      }

      return Promise.resolve(true)
    },
  }
}

const verificationCode = () => {
  return {
    required: true,
    validator: (_, value: string | undefined) => {
      if (!value) return Promise.reject(new Error(t`user.account_security.google.verification_02`))
      if (value && value.length < 6) {
        return Promise.reject(new Error(t`features_user_utils_validate_510249`))
      }

      return Promise.resolve(true)
    },
  }
}

const passwordValidate = (isVerifyNull?: boolean) => {
  return {
    required: true,
    validator: (_, value: string | undefined) => {
      if (!value) return Promise.reject(new Error(t`user.validate_form_06`))
      if ((value && value.length < 8) || (value && value.length > 16)) {
        return Promise.reject(new Error(isVerifyNull ? t`features_user_utils_validate_5101257` : ' '))
      }

      return Promise.resolve(true)
    },
  }
}

const confirmPasswordValidate = (pwd: string) => {
  return {
    required: true,
    validator: (_, value: string | undefined) => {
      if (!value)
        return Promise.reject(
          new Error(t`features_user_personal_center_account_security_transaction_password_index_606`)
        )
      if (value && value !== pwd) {
        return Promise.reject(
          new Error(t`features_user_personal_center_account_security_transaction_password_index_606`)
        )
      }

      return Promise.resolve(true)
    },
  }
}

const antiPhishingCodeValidate = () => {
  return {
    required: true,
    validator: (_, value: string | undefined) => {
      if (!value) return Promise.reject(new Error(t`user.account_security.anti_phishing_02`))
      if (value && value.length < 4) {
        return Promise.reject(new Error(t`features_user_utils_validate_510250`))
      }

      return Promise.resolve(true)
    },
  }
}

const serviceAgreementValidate = () => {
  return {
    required: true,
    validator: (_, value: boolean | undefined) => {
      if (!value) {
        return Promise.reject(new Error(t`user.form.validation_11`))
      }

      return Promise.resolve(true)
    },
  }
}

const nickNameValidate = () => {
  return {
    require: true,
    validator: (_, value: string | undefined) => {
      if (!value) {
        return Promise.reject(new Error(t`features_user_utils_validate_5101296`))
      }
      if ((value && value.length < 2) || (value && value.length > 12)) {
        return Promise.reject(t`features_user_utils_validate_510251`)
      }
      return Promise.resolve(true)
    },
  }
}

export function formatPhoneNumber(numbers: string, formatMode: string) {
  if (!numbers) return numbers

  const purePhone = numbers.replace(/\D/g, '')
  const { length } = purePhone

  const num = formatMode === ChinaAreaCodeEnum.code ? UserPhoneSliceNumEnum.chinaNum : UserPhoneSliceNumEnum.defaultNum

  const sliceNum =
    formatMode === ChinaAreaCodeEnum.code ? UserPhoneSliceNumEnum.chinaSliceNum : UserPhoneSliceNumEnum.defaultSliceNum

  if (length <= num) {
    return purePhone
  } else if (length <= sliceNum) {
    const regex = new RegExp(`(\\d{${num}})(\\d{0,4})`)
    return purePhone.replace(regex, '$1 $2')
  } else {
    const firstPart = purePhone.slice(0, num)
    const middlePart = purePhone.slice(num, sliceNum)
    const lastPart = purePhone.slice(sliceNum)
    const formatLastPart = lastPart.replace(/(\d{4})/g, '$1 ')
    const formattedPhone = `${firstPart} ${middlePart} ${formatLastPart}`

    return formattedPhone.trim()
  }
}

/** 登录 */
export const LoginValidateRules = () => {
  return {
    account: accountValidate(),
    phone: phoneValidate(),
    password: passwordValidate(true),
  }
}

/** 个人中心 - 邮箱 */
export const PersonalCenterEmailRules = () => {
  return {
    email: emailValidate(),
    emailCode: verificationCode(),
  }
}

/** 个人中心 - 谷歌 */
export const PersonalCenterGoogleRules = () => {
  return {
    googleKey: verificationCode(),
  }
}

/** 个人中心 - 手机 */
export const PersonalCenterPhoneRules = () => {
  return {
    phone: phoneValidate(),
    phoneCode: verificationCode(),
  }
}

/** 个人中心 - 修改密码 */
export const PersonalCenterModifyPasswordRules = (pwd: string) => {
  return {
    oldPassword: {
      required: true,
      message: t`user.form.validation_07`,
    },
    password: passwordValidate(),
    confirmPassword: confirmPasswordValidate(pwd),
  }
}

/** 个人中心 - 修改昵称 */
export const PersonalCenterModifyUsernameRules = () => {
  return {
    nickName: nickNameValidate(),
  }
}

/** 注册 - 账户信息 */
export const RegisterFlowRules = (pwd: string) => {
  return {
    email: emailValidate(),
    phone: phoneValidate(),
    password: passwordValidate(),
    confirmPassword: confirmPasswordValidate(pwd),
    serviceAgreement: serviceAgreementValidate(),
  }
}

/** 注册 - 验证 */
export const RegisterVerificationRules = () => {
  return {
    emailCode: verificationCode(),
    phoneCode: verificationCode(),
  }
}

/** 重置密码 */
export const RetrieveRestPasswordRules = (pwd: string) => {
  return {
    password: passwordValidate(),
    confirmPassword: confirmPasswordValidate(pwd),
    emailCode: verificationCode(),
    phoneCode: verificationCode(),
  }
}

/** 重置密码 - 验证方式 */
export const RetrieveValidateRules = () => {
  return {
    email: emailValidate(),
    phone: phoneValidate(),
    password: passwordValidate(),
  }
}

/** 安全验证 */
export const SafetyItemsApplicationFormRules = () => {
  return {
    googleKey: verificationCode(),
    email: emailValidate(),
    emailCode: verificationCode(),
    phone: phoneValidate(),
    phoneCode: verificationCode(),
    photo: {
      required: true,
      message: t`user.form.validation_13`,
    },
    serviceAgreement: serviceAgreementValidate(),
  }
}

/** 安全验证 - 验证方式 */
export const SafetyVerificationRules = () => {
  return {
    emailCode: verificationCode(),
    googleKey: verificationCode(),
    phoneCode: verificationCode(),
  }
}

/** 防钓鱼码 */
export const AntiPhishingCodeRules = () => {
  return {
    antiPhishingCode: antiPhishingCodeValidate(),
  }
}

/** 通用安全验证 */
export const UniversalSecurityVerificationRules = () => {
  return {
    fundPassword: {
      required: true,
      message: t`features_user_utils_validate_510096`,
    },
    emailCode: verificationCode(),
    googleKey: verificationCode(),
    phoneCode: verificationCode(),
  }
}
