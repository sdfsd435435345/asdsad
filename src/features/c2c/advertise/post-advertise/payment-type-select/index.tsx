/**
 * 发布广告单 - 收款账户类型选择弹窗
 */
import { t } from '@lingui/macro'
import { Popup } from 'react-vant'
import { getTextFromStoreEnums } from '@/helper/store'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import { IAdvertReceiptList } from '@/typings/api/c2c/advertise/post-advertise'
import styles from './index.module.css'

interface SelectModalProps {
  type: string
  visible: boolean
  onClose: () => void
  onCommit: (e?: string) => void
}

function PaymentTypeSelect(props: SelectModalProps) {
  const { type, visible, onClose, onCommit } = props || {}
  const {
    postOptions: { receiptList },
    advertiseForm: { payments },
    advertiseEnums,
  } = useC2CAdvertiseStore()

  return (
    <Popup
      visible={visible}
      position="bottom"
      round
      style={{ maxHeight: '60%' }}
      onClose={onClose}
      className={styles['select-modal-root']}
    >
      <div className="select-modal-content">
        <div className="modal-list">
          {receiptList.map((item: IAdvertReceiptList) => {
            const isDisabled = !item?.list || item?.list.length === 0
            return (
              <div
                key={item.paymentType}
                className="item"
                onClick={() => {
                  if (isDisabled) return

                  let tag = false
                  payments.forEach(e => {
                    if (e?.type === item?.paymentType) {
                      tag = true
                      onClose()
                    }
                  })

                  if (tag) return

                  onCommit(item.paymentType)
                }}
              >
                <span className={`${type === item.paymentType ? 'text-active' : 'text'} ${isDisabled && 'disable'}`}>
                  {getTextFromStoreEnums(item.paymentType, advertiseEnums.paymentTypeEnum.enums)}
                </span>
              </div>
            )
          })}
        </div>

        <div className="bottom" onClick={onClose}>{t`common.modal.cancel`}</div>
      </div>
    </Popup>
  )
}

export { PaymentTypeSelect }
