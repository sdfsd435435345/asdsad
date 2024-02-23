import { C2cTradeAdPaymentEnum } from '@/constants/c2c/trade'
import { IBestAdItem, IC2cPayment } from '@/typings/api/c2c/trade'
import classNames from 'classnames'
import { getTextFromStoreEnums } from '@/helper/store'
import { useBaseC2cOrderStore } from '@/store/c2c/order'
import { useMemo } from 'react'
import styles from './common.module.css'
import { ThirdOtcEnum } from './third-trade/common'

type IPaymentItemProps = {
  payment: IC2cPayment
  className?: string
  adItem?: IBestAdItem
}

export function PaymentItemColor({ payment, adItem }: IPaymentItemProps) {
  const colorMap = {
    [C2cTradeAdPaymentEnum.alipay]: '#6195F6',
    [C2cTradeAdPaymentEnum.wechat]: '#50B16C',
    [C2cTradeAdPaymentEnum.bank]: '#F1AE3D',
  }

  const getColor = useMemo(() => {
    const cMap = {
      [ThirdOtcEnum.transak]: '#6C3DF1',
      [ThirdOtcEnum.transfi]: '#F13D94',
    }
    return cMap[payment?.type?.toLowerCase()]
  }, [payment?.type])

  const { orderEnums } = useBaseC2cOrderStore()
  const color =
    getTextFromStoreEnums(payment.type, orderEnums.paymentsColor.enums) ||
    colorMap[payment.type] ||
    colorMap[C2cTradeAdPaymentEnum.alipay]

  return (
    <div
      className={styles['ad-payment-item-line']}
      style={{
        backgroundColor: adItem?.isOtc ? getColor : color,
      }}
    ></div>
  )
}

export function PaymentItem({ payment, adItem, className = 'text-xs' }: IPaymentItemProps) {
  return (
    <div className={classNames(styles['ad-payment-item'], className)} key={payment.type}>
      <PaymentItemColor payment={payment} adItem={adItem} />
      <div className="name">{adItem?.isOtc ? adItem.name : payment.name}</div>
    </div>
  )
}
