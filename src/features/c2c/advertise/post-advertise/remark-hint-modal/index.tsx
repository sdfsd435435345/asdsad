/**
 * 发布广告单 - 备注示例弹窗
 */
import { t } from '@lingui/macro'
import { Button, Popup, Toast } from 'react-vant'
import { useCopyToClipboard } from 'react-use'
import styles from './index.module.css'

interface RemarkHintModalProps {
  visible: boolean
  onClose: () => void
}
function RemarkHintModal(props: RemarkHintModalProps) {
  const { visible, onClose } = props || {}
  const [state, copyToClipboard] = useCopyToClipboard()

  const onCopy = (val: string) => {
    copyToClipboard(val)
    state.error ? Toast(t`assets.financial-record.copyFailure`) : Toast(t`user.secret_key_01`)

    onClose()
  }

  return (
    <Popup
      visible={visible}
      round
      onClose={onClose}
      className={styles['remark-hint-modal-root']}
      safeAreaInsetBottom
      lockScroll
      closeOnPopstate
      destroyOnClose
    >
      <div className="remark-hint-modal">
        <div className="title">{t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_9c9dlrflzkiw9fgs4qhmg`}</div>
        <div className="text">{t`features_c2c_advertise_post_advertise_remark_hint_modal_index_kmnipjixrxjya3tlbnq8_`}</div>

        <Button
          type="primary"
          className="copy-btn"
          onClick={() => onCopy(t`features_c2c_advertise_post_advertise_remark_hint_modal_index_kmnipjixrxjya3tlbnq8_`)}
        >
          {t`features_assets_recharge_pay_address_index_603`}
        </Button>
      </div>
    </Popup>
  )
}
export { RemarkHintModal }
