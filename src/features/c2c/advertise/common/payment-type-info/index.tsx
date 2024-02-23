/**
 * 广告单 - 收款方式展示组件
 */
import { IAdvertisePaymentList, INewPayments } from '@/typings/api/c2c/advertise/post-advertise'
import classNames from 'classnames'
import { getTextFromStoreEnums } from '@/helper/store'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import { Popover, PopoverPlacement } from 'react-vant'
import Icon from '@/components/icon'
import { useState } from 'react'
import styles from './index.module.css'

interface PaymentTypeInfoProps {
  paymentList?: IAdvertisePaymentList[] | INewPayments[]
  paymentClassName?: string
  // 是否折叠展示
  isDisplay?: boolean
  // popover 展示位置
  placement?: PopoverPlacement
}

function PaymentTypeInfo(props: PaymentTypeInfoProps) {
  const { paymentClassName, paymentList = [], isDisplay = true, placement = 'bottom-end' } = props || {}
  const { advertiseEnums } = useC2CAdvertiseStore()
  const [isMore, setIsMore] = useState(false)

  const onRenderItem = (data, i: number) => {
    return (
      <div key={i} className={classNames('payment-item', paymentClassName)}>
        <div
          className="line"
          style={{
            backgroundColor: data.grey
              ? 'var(--text_color_04)'
              : getTextFromStoreEnums(data?.type || data?.name, advertiseEnums.paymentColorEnum.enums),
          }}
        />
        <span className={data.grey ? 'text-text_color_04' : ''}>
          {getTextFromStoreEnums(data?.type || data?.name, advertiseEnums.paymentTypeEnum.enums)}
        </span>
      </div>
    )
  }

  return (
    <div className={styles['payment-type-info-root']}>
      {paymentList?.map((item, i: number) => {
        if (i > 1 && isDisplay) return
        return onRenderItem(item, i)
      })}

      {isDisplay && paymentList && paymentList?.length > 2 && (
        <Popover
          className={classNames(
            styles['payment-type-popover-root'],
            placement === 'bottom-start' && styles['popover-start-root']
          )}
          placement={placement}
          reference={
            <Icon name={isMore ? 'regsiter_icon_away' : 'regsiter_icon_drop'} hasTheme className="w-2 h-2 -mt-3" />
          }
          onOpen={() => setIsMore(true)}
          onClosed={() => setIsMore(false)}
        >
          {paymentList.map((paymentItem, i: number) => {
            if (i < 2) return null

            return onRenderItem(paymentItem, i)
          })}
        </Popover>
      )}
    </div>
  )
}

export { PaymentTypeInfo }
