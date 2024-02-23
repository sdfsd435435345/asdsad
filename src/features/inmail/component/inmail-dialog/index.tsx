import { t } from '@lingui/macro'
import { Dialog } from 'react-vant'
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { useInmailStore } from '@/store/inmail'
import styles from './index.module.css'

const InmailDialog = () => {
  const { loginModal, loginData, setModalClose } = useInmailStore()

  const onConfirm = () => {
    link('/login')
    setModalClose(false)
  }

  const onCancel = () => {
    link('/retrieve')
    setModalClose(false)
  }

  const onClose = () => {
    setModalClose(false)
  }

  return (
    <Dialog
      closeable
      showCancelButton
      visible={loginModal}
      title={loginData?.title}
      onClose={onClose}
      onCancel={() => onCancel()}
      onConfirm={() => onConfirm()}
      confirmButtonText={t`features_inmail_component_inmail_dialog_index_5101340`}
      cancelButtonText={t`user.field.reuse_24`}
      className={styles['message-modal-wrapper']}
    >
      <div className="modal-wrapper-content">
        <Icon name="tips_icon" className="message-modal-icon" />
        <div className="modal-header" dangerouslySetInnerHTML={{ __html: loginData?.content }} />
      </div>
    </Dialog>
  )
}
export default InmailDialog
