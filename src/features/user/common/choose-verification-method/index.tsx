import { t } from '@lingui/macro'
import { UserValidateMethodEnum } from '@/constants/user'
import styles from './index.module.css'

interface ValidateFormHeaderProps {
  isThirdPartyRegister?: boolean
  title: string
  method: string
  accountText?: string
  choosMethod: (validate: string) => void
}

function UserChooseVerificationMethod({
  isThirdPartyRegister,
  title,
  accountText,
  method,
  choosMethod,
}: ValidateFormHeaderProps) {
  return (
    <div className={styles.scoped}>
      <div className="title">
        <label>{title}</label>
      </div>

      <div className="tab">
        {isThirdPartyRegister ? (
          <>
            {method === UserValidateMethodEnum.email ? (
              <div className="email active">
                <label>{accountText || t`features_user_common_choose_verification_method_index_510240`}</label>
              </div>
            ) : (
              <div className="phone active">
                <label>{t`user.validate_form_03`}</label>
              </div>
            )}
          </>
        ) : (
          <>
            <div
              className={`email ${method === UserValidateMethodEnum.email && 'active'}`}
              onClick={() => choosMethod(UserValidateMethodEnum.email)}
            >
              <label>{accountText || t`features_user_common_choose_verification_method_index_510240`}</label>
            </div>
            <div
              className={`phone ${method === UserValidateMethodEnum.phone && 'active'}`}
              onClick={() => choosMethod(UserValidateMethodEnum.phone)}
            >
              <label>{t`user.validate_form_03`}</label>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default UserChooseVerificationMethod
