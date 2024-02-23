import { useEffect, Dispatch, SetStateAction } from 'react'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import styles from './index.module.css'

const ValidateType = {
  containUppercaseAndLowercaseLetters: /(?=.*?[A-Z])(?=.*?[a-z])/,
  containsNumbers: /(?=.*?[0-9])/,
  containsSpecialsymbols: /(?=.*?[#?!@$%^&*()=+-.])/,
  passwordLength: /^.{8,16}$/,
  containsWhitespace: /(?=.*[\s])/,
}

const PasswordValidate = password => {
  return [
    {
      key: 1,
      text: t`features_user_common_password_validate_index_510148`,
      pattern: ValidateType.passwordLength.test(password),
    },
    {
      key: 2,
      text: t`user.password_validate_02`,
      pattern: ValidateType.containUppercaseAndLowercaseLetters.test(password),
    },
    {
      key: 3,
      text: t`user.password_validate_03`,
      pattern: ValidateType.containsNumbers.test(password),
    },
    {
      key: 4,
      text: t`user.password_validate_04`,
      pattern: !ValidateType.containsWhitespace.test(password),
    },
  ]
}

interface UserPasswordValidateTipsProps {
  /** 密码 */
  password: string
  /** 验证回调函数 */
  validate: Dispatch<SetStateAction<boolean>>
}

function UserPasswordValidateTips({ password, validate }: UserPasswordValidateTipsProps) {
  const validateTipsList = PasswordValidate(password)

  useEffect(() => {
    const isTrue = validateTipsList.find(v => !v.pattern)
    !isTrue ? validate(true) : validate(false)
  }, [password])

  return (
    <>
      {password && (
        <div className={`password-validate-tips ${styles.scoped}`}>
          <div className="password-validate-tips-wrap">
            {validateTipsList.map(v => (
              <div key={v.key} className={`tips ${v.pattern ? 'success' : ''}`}>
                <div className="icon">
                  {v.pattern ? (
                    <Icon name="login_password_satisfy" />
                  ) : (
                    <Icon name="login_password-dissatisfy" hasTheme />
                  )}
                </div>
                <div className="text">
                  <label>{v.text}</label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default UserPasswordValidateTips
