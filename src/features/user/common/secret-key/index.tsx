// eslint-disable-next-line import/extensions
import { QRCodeCanvas } from 'qrcode.react'
import { Toast } from 'react-vant'
import { useCopyToClipboard } from 'react-use'
import { t } from '@lingui/macro'
import styles from './index.module.css'

interface UserSecretKeyProps {
  /** 二维码 */
  qrcode: string
  /** 秘钥 */
  secretKey: string
}

function UserSecretKey({ qrcode, secretKey }: UserSecretKeyProps) {
  const [state, copyToClipboard] = useCopyToClipboard()

  const handleCopy = (key: string) => {
    copyToClipboard(key)
    state.error
      ? Toast({ message: t`user.secret_key_02`, position: 'top' })
      : Toast({ message: t`user.secret_key_01`, position: 'top' })
  }

  return (
    <div className={`secret-key ${styles.scoped}`}>
      <div className="text">
        <label>{t`user.secret_key_03`}</label>
      </div>

      <div className="qrcode">
        <div className="code-image">
          <QRCodeCanvas size={120} value={qrcode} />
        </div>
        <div className="code-text">
          <div className="key">
            <label>{secretKey}</label>
          </div>
          <div className="copy-btn">
            <button type="button" onClick={() => handleCopy(secretKey)}>
              {t`features_user_common_secret_key_index_510245`}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSecretKey
