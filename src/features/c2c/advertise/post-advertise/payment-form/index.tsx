/**
 * 发布广告单-支付方式/收款方式
 */
import { t } from '@lingui/macro'
import { useState } from 'react'
import { Toast } from 'react-vant'
import Icon from '@/components/icon'
import { AdvertisingDirectionTypeEnum, PaymentTypeEnum } from '@/constants/c2c/advertise'
import { formatBankCard } from '@/helper/reg'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import { IAdvertisePaymentList, IAdvertReceiptAccountList } from '@/typings/api/c2c/advertise/post-advertise'
import { useUpdateEffect } from 'ahooks'
import { getTextFromStoreEnums } from '@/helper/store'
import { PaymentTypeInfo } from '../../common/payment-type-info'
import { AccountSelectionModal } from '../account-selection-modal'
import { PaymentSelectionModal } from '../payment-selection-modal'
import { PaymentTypeSelect } from '../payment-type-select'

function PaymentForm() {
  const {
    advertiseForm: { advertDirectCd, payments },
    postOptions: { receiptList },
    advertiseEnums,
    updateAdvertiseForm,
  } = useC2CAdvertiseStore()
  const [paymentTypeVisible, setPaymentTypeVisible] = useState(false) // 是否展示选择支付方式弹窗
  const [receiveVisible, setReceiveVisible] = useState(false) // 是否展示收款账户类型选择弹窗
  const [paymentTypeProps, setPaymentTypeProps] = useState<any>({}) // {t`features_c2c_advertise_post_advertise_payment_form_index_ltrjgd5zcxjzhikudyg8c`}
  const [accountVisible, setAccountVisible] = useState(false) // 是否展示账号选择弹窗
  const [accountModalProps, setAccountModalProps] = useState<any>({
    typeList: [],
  })
  const [isAdd, setIsAdd] = useState(true)

  /**
   * 收款账号 - 收款方式
   */
  const onSetPaymentProps = (e: IAdvertisePaymentList, i: number) => {
    setPaymentTypeProps({
      type: e.type,
      onClose: () => setReceiveVisible(false),
      onCommit: (val: string) => {
        if (val === e.type) {
          setReceiveVisible(false)
          return
        }

        const newParams = { ...e, type: val, account: '', id: '' }
        const newPayments = payments.map((item: IAdvertisePaymentList, index) => {
          if (index === i) {
            item = { ...item, ...newParams }
          }
          return item
        })

        updateAdvertiseForm({ payments: newPayments })
        setReceiveVisible(false)
      },
    })

    setReceiveVisible(true)
  }

  /**
   * 收款账号 - 账号
   */
  const onSetPaymentAccount = (e: IAdvertisePaymentList, i: number) => {
    if (!e.type) {
      Toast.info(t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_m6lsfg5_9cwhbylo9uqtz`)
      return
    }
    const paymentsInfo = receiptList.find(item => {
      return e.type === item.paymentType
    })

    setAccountModalProps({
      paymentType: e.type,
      id: e.id,
      list: paymentsInfo?.list || [],
      onCommit: (info: IAdvertReceiptAccountList) => {
        const newPayments = payments.map((item: IAdvertisePaymentList, index) => {
          if (i === index) {
            item = { ...item, account: info?.account || info?.paymentDetails, id: info?.id }
          }
          return item
        })

        updateAdvertiseForm({ payments: newPayments })
        setAccountVisible(false)
      },
    })
    setAccountVisible(true)
  }

  useUpdateEffect(() => {
    const newReceiptList = receiptList.filter(item => item.list.length > 0)
    setIsAdd(payments.length < newReceiptList.length)
  }, [payments, receiptList])

  return (
    <>
      {advertDirectCd === AdvertisingDirectionTypeEnum.buy && (
        <div className="form-item">
          <div className="form-label">
            <span>{t`features_c2c_trade_filters_225101634`}</span>
            <div className="add-new-btn" onClick={() => setPaymentTypeVisible(true)}>
              <Icon name="c2c_add" className="text-sm" />
              <span>{t`features_c2c_trade_fast_trade_confirm_modal_222222225101675`}</span>
            </div>
          </div>
          {payments && payments.length > 0 && (
            <PaymentTypeInfo paymentList={payments} paymentClassName={'payment-type-item'} isDisplay={false} />
          )}
        </div>
      )}

      {advertDirectCd === AdvertisingDirectionTypeEnum.sell && (
        <div className="form-item">
          <div className="form-label">
            <span>{t`features_message_center_index_5101352`}</span>
            {isAdd && (
              <div
                className="add-new-btn"
                onClick={() => {
                  const newPayments = [...payments, { id: '', type: '' }]
                  updateAdvertiseForm({ payments: newPayments })
                }}
              >
                <Icon name="c2c_add" className="text-sm" />
                <span>{t`features_c2c_advertise_post_advertise_payment_form_index_62061fcby9iwhhz8mvy8q`}</span>
              </div>
            )}
          </div>

          {payments.length > 0 && (
            <div className="payment-list">
              {payments.map((paymentItem, index: number) => {
                return (
                  <div className="payment-item" key={index}>
                    <div className="payment-header">
                      <span className="payment-title">
                        {t`features_message_center_index_5101352`}
                        {index + 1}
                      </span>
                      {payments.length > 1 && (
                        <span
                          className="payment-del"
                          onClick={() => {
                            const newPayments: IAdvertisePaymentList[] = [...payments]
                            newPayments.splice(index, 1)
                            updateAdvertiseForm({ payments: newPayments })
                          }}
                        >
                          {t`common.delete`}
                        </span>
                      )}
                    </div>

                    <div className="select-item mt-2" onClick={() => onSetPaymentProps(paymentItem, index)}>
                      {paymentItem.type ? (
                        <div className="payment-name">
                          <div
                            className="line"
                            style={{
                              backgroundColor: getTextFromStoreEnums(
                                paymentItem?.type,
                                advertiseEnums.paymentColorEnum.enums
                              ),
                            }}
                          />
                          <span>{getTextFromStoreEnums(paymentItem?.type, advertiseEnums.paymentTypeEnum.enums)}</span>
                        </div>
                      ) : (
                        <span className="placeholder">{t`features_c2c_advertise_post_advertise_payment_form_index_njsea2zvnnjsyzm1ctsum`}</span>
                      )}
                      <Icon name="regsiter_icon_drop" hasTheme className="drop-icon" />
                    </div>

                    <div className="select-item mt-2" onClick={() => onSetPaymentAccount(paymentItem, index)}>
                      {paymentItem?.account ? (
                        <span className="payment-details">
                          {paymentItem.type === PaymentTypeEnum.bankCard
                            ? formatBankCard(paymentItem?.account)
                            : paymentItem?.account}
                        </span>
                      ) : (
                        <span className="placeholder">{t`features_c2c_advertise_post_advertise_payment_form_index_wzrdvkrpih5yvw4hkftje`}</span>
                      )}
                      <Icon name="regsiter_icon_drop" hasTheme className="drop-icon" />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )}

      {receiveVisible && <PaymentTypeSelect visible={receiveVisible} {...paymentTypeProps} />}
      {accountVisible && (
        <AccountSelectionModal
          visible={accountVisible}
          {...accountModalProps}
          onClose={() => setAccountVisible(false)}
        />
      )}
      {paymentTypeVisible && (
        <PaymentSelectionModal
          select={payments}
          visible={paymentTypeVisible}
          onClose={() => setPaymentTypeVisible(false)}
          onCommit={e => {
            updateAdvertiseForm({ payments: e })
            setPaymentTypeVisible(false)
          }}
        />
      )}
    </>
  )
}

export { PaymentForm }
