/**
 * 发布广告单 - 账号选择弹窗
 */
import { t } from '@lingui/macro'
import { Popup } from 'react-vant'
import Icon from '@/components/icon'
import { PaymentEnabledTypeEnum, PaymentTypeEnum } from '@/constants/c2c/advertise'
import styles from './index.module.css'

interface AccountSelectionModalProps {
  paymentType: string
  id: string
  list: any
  visible: boolean
  onClose: () => void
  onCommit: (e) => void
}

function AccountSelectionModal(props: AccountSelectionModalProps) {
  const { visible, paymentType, id, list, onClose, onCommit } = props || {}

  return (
    <Popup
      visible={visible}
      position="bottom"
      round
      onClose={onClose}
      className={styles['account-selection-modal-root']}
      safeAreaInsetBottom
      lockScroll
      closeOnPopstate
      destroyOnClose
      style={{ maxHeight: '60%' }}
    >
      <div className="account-selection-modal">
        {list.map(item => {
          const isActive = id === item.id
          return (
            <div
              key={item.id}
              className={`item ${isActive ? 'active' : ''} ${
                item.enabled === PaymentEnabledTypeEnum.no && 'text-text_color_04'
              }`}
              onClick={() => {
                if (item.enabled === PaymentEnabledTypeEnum.no) {
                  return
                }
                onCommit(item)
              }}
            >
              {item?.bankOfDeposit && item?.account && (
                <>
                  <span>{item.bankOfDeposit}</span>
                  <span>{item.account ? item.account : '--'}</span>
                </>
              )}
              {!item?.bankOfDeposit && item?.account && (
                <>
                  <span>{item.account}</span>
                  {isActive ? (
                    <Icon name="asset_drawing_qr_hover" className="text-lg" />
                  ) : (
                    <Icon name="asset_drawing_qr" hasTheme className="text-lg" />
                  )}
                </>
              )}
              {!item?.bankOfDeposit && !item?.account && item?.paymentDetails && (
                <span className="payment-details">{item.paymentDetails}</span>
              )}
            </div>
          )
        })}

        <div className="bottom" onClick={onClose}>
          {t`assets.financial-record.cancel`}
        </div>
      </div>
    </Popup>
  )
}

export { AccountSelectionModal }
