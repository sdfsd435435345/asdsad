/**
 * 发布广告单 - 选择支付方式弹窗
 */
import { t } from '@lingui/macro'
import { Button, Popup } from 'react-vant'
import { useState } from 'react'
import Icon from '@/components/icon'
import { PaymentEnabledTypeEnum } from '@/constants/c2c/advertise'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import { IAdvertisePaymentList } from '@/typings/api/c2c/advertise/post-advertise'
import { getTextFromStoreEnums } from '@/helper/store'
import styles from './index.module.css'

interface PaymentSelectionModalProps {
  visible: boolean
  select: IAdvertisePaymentList[]
  onClose: () => void
  onCommit: (e) => void
}

function PaymentSelectionModal(props: PaymentSelectionModalProps) {
  const { visible, select, onClose, onCommit } = props || {}
  const {
    postOptions: { paymentList },
    advertiseEnums,
  } = useC2CAdvertiseStore()
  const [selectList, setSelectList] = useState<IAdvertisePaymentList[]>(select)

  const onChange = e => {
    const filterList = selectList.filter(el => el.type === e.paymentType)
    const newValue =
      filterList.length > 0
        ? selectList.filter(el => el?.type !== e.paymentType)
        : [...selectList, { type: e.paymentType }]

    setSelectList(newValue)
  }

  return (
    <Popup
      visible={visible}
      position="bottom"
      round
      onClose={onClose}
      className={styles['payment-selection-modal-root']}
      safeAreaInsetBottom
      lockScroll
      closeOnPopstate
      destroyOnClose
    >
      <div className="payment-selection-modal">
        <div className="modal-header">
          <span>{t`features_c2c_trade_fast_trade_confirm_modal_222222225101675`}</span>
          <Icon name="close" hasTheme className="text-xl" onClick={onClose} />
        </div>

        <div className="modal-list">
          {paymentList?.map(item => {
            const isSelect = !!selectList.find(e => item.paymentType === e.type)?.type
            const isDisabled = item.enabled === PaymentEnabledTypeEnum.no

            return (
              <div
                key={item.paymentType}
                className={`item ${isSelect ? 'active-item' : ''}`}
                onClick={() => {
                  if (isDisabled) return
                  onChange(item)
                }}
              >
                <div className="info">
                  <div
                    className="line"
                    style={{
                      backgroundColor: getTextFromStoreEnums(item?.paymentType, advertiseEnums.paymentColorEnum.enums),
                    }}
                  />
                  <span>{getTextFromStoreEnums(item?.paymentType, advertiseEnums.paymentTypeEnum.enums)}</span>
                </div>
                {isSelect ? (
                  <Icon name="login_verify_selected" className="text-base" />
                ) : (
                  <Icon
                    name={isDisabled ? 'login_verify_unselected_disabied' : 'login_verify_unselected'}
                    hasTheme
                    className="text-base"
                  />
                )}
              </div>
            )
          })}
        </div>

        <div className="modal-bottom">
          <Button type="primary" className="commit-btn" onClick={() => onCommit(selectList)}>
            {t`common.confirm`}
          </Button>
        </div>
      </div>
    </Popup>
  )
}

export { PaymentSelectionModal }
