import Icon from '@/components/icon'
import Link from '@/components/link'
import { SelectActionSheet } from '@/components/select-action-sheet'
import { IC2cPayAccount, IC2cPayment } from '@/typings/api/c2c/trade'
import { useState } from 'react'
import { link } from '@/helper/link'
import classNames from 'classnames'
import { OnlyOneActionSheet, OnlyOnePopup } from '@/components/only-one-overlay'
import { useMount, useRequest } from 'ahooks'
import { t } from '@lingui/macro'
import { mockUserPayments } from '@/helper/c2c/tradeMock'
import LazyImage from '@/components/lazy-image'
import { Button } from 'react-vant'
import { queryC2cUserReceivePayments } from '@/apis/c2c/trade'
import { getAccountEllipsis, paymentTypeToPayment } from '@/helper/c2c/trade'
import { getC2cPaymentsManagePageRoutePath, getCollectionAccountRoutePath } from '@/helper/route'
import { download } from '@/helper/common'
import { getPaymentIsBankCard } from '@/helper/c2c/order'
import { C2cPaymentsEnabledEnum } from '@/constants/c2c/center'
import { PaymentItem, PaymentItemColor } from './payment-item'
import styles from './common.module.css'
import { useTradeContext } from './trade-context'

export interface ISelectSellPaymentOnChange {
  (account: IC2cPayAccount, payment: IC2cPayment): void
}

type IPaymentProps = {
  selectedPaymentId: string
  selectedAccountId: string
  payment: IC2cPayment
  onChange: ISelectSellPaymentOnChange
  isLast?: boolean
}
type IQrCodeIconProps = {
  isActive?: boolean
  url?: string
  paymentName?: string
}
export function QrCodeIcon({ isActive, paymentName, url }: IQrCodeIconProps) {
  const [qrcodeVisible, setQrcodeVisible] = useState(false)

  const showQrcode = e => {
    e.stopPropagation()
    setQrcodeVisible(true)
  }
  const title = t({
    id: 'features_c2c_trade_select_payment_69zzx6jesjmgtn3iro3y-',
    values: { 0: paymentName },
  })
  const { run: startDownload, loading } = useRequest(
    async () => {
      await download(url as any, title)
    },
    {
      manual: true,
    }
  )

  return (
    <>
      <Icon
        className="text-lg"
        onClick={showQrcode}
        name={isActive ? 'asset_drawing_qr_hover' : 'asset_drawing_qr'}
        hasTheme={!isActive}
      />
      <OnlyOnePopup
        position="bottom"
        visible={qrcodeVisible}
        closeOnClickOverlay
        onClose={() => setQrcodeVisible(false)}
      >
        <div className={styles['qrcode-modal-wrapper']}>
          <div className="flex items-center justify-between p-4">
            <div className="text-base font-medium">{title}</div>
            <Icon hasTheme name="close" className="text-xl" onClick={() => setQrcodeVisible(false)} />
          </div>
          <div className="qrcode">
            <img className="w-full object-cover" src={url} alt="" />
          </div>
          <div className="px-4 pb-10 pt-8">
            <div className="block">
              <Button loading={loading} onClick={startDownload} type="primary" block>
                {t`user.account_security.network_check_11`}
              </Button>
            </div>
          </div>
        </div>
      </OnlyOnePopup>
    </>
  )
}

export function AccountItem({
  account,
  paymentName,
  isActive,
}: {
  account: IC2cPayAccount
  isActive?: boolean
  paymentName: string
}) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className={styles['account-text-wrapper']}>
        {account.name || account.paymentDetails || getAccountEllipsis(account.account, false)}
      </div>
      <span>
        {account.name ? (
          <div className={styles['account-text-wrapper']}>
            {account.paymentDetails || getAccountEllipsis(account.account, true)}
          </div>
        ) : (
          account.qrcode && <QrCodeIcon isActive={isActive} paymentName={paymentName} url={account.qrcode} />
        )}
      </span>
    </div>
  )
}

function Payment({ selectedPaymentId, selectedAccountId, payment, onChange, isLast }: IPaymentProps) {
  const accounts = payment.accounts.filter(account => account.enabled)
  const toEnable = () => {
    link(payment.accounts.length > 0 ? getC2cPaymentsManagePageRoutePath() : getCollectionAccountRoutePath())
  }

  return (
    <div className="pt-4">
      <div className="px-4">
        <PaymentItem className="text-sm font-medium" payment={payment} />
      </div>
      {accounts.map(item => {
        return (
          <div
            key={item.account}
            onClick={() => onChange(item, payment)}
            className={classNames('rv-hairline--bottom', {
              'text-brand_color': selectedAccountId === item.paymentId,
            })}
          >
            <AccountItem paymentName={payment.name} isActive={selectedAccountId === item.paymentId} account={item} />
          </div>
        )
      })}
      {accounts.length === 0 && (
        <div className="flex justify-between px-4 pb-4 pt-3 text-xs">
          <span className="text-text_color_03">
            {payment.accounts.length > 0
              ? t`features_c2c_trade_select_payment_222225101663`
              : t`features_c2c_trade_select_payment_222225101664`}
          </span>
          <span onClick={toEnable} className="text-brand_color">
            {payment.accounts.length > 0
              ? t`features_c2c_trade_select_payment_222225101665`
              : t`user.security_verification_status_02`}
            &gt;
          </span>
        </div>
      )}
      {!isLast && <div className="bg-line_color_02 h-1"></div>}
    </div>
  )
}
type ISelectPaymentProps = {
  supportedPayments: string[]
  onChange: ISelectSellPaymentOnChange
}
export function SelectSellPayment({ supportedPayments, onChange }: ISelectPaymentProps) {
  const { params } = useTradeContext()
  const [userPayments, setUserPayments] = useState([] as IC2cPayment[])
  const [selectedPayment, setSelectedPayment] = useState(userPayments[0])
  const [selectedAccount, setSelectedAccount] = useState(selectedPayment?.accounts?.[0])
  const [visible, setStateVisible] = useState(false)
  const setVisible = (newVal: boolean) => {
    setStateVisible(newVal)
  }
  const onSelectPayment = (account: IC2cPayAccount, payment: IC2cPayment) => {
    setSelectedPayment(payment)
    setSelectedAccount(account)
    setVisible(false)
    onChange(account, payment)
  }
  const toPayments = () => {
    link(getC2cPaymentsManagePageRoutePath())
  }
  // 进来时再加载就可以了
  const fetchPayments = async () => {
    const res = await queryC2cUserReceivePayments({})
    if (!res.isOk || !res.data) {
      return
    }
    const payments = res.data.paymentList
      .map(item => {
        const payment: IC2cPayment = {
          ...paymentTypeToPayment(item.paymentType),
          accounts: item.list
            .filter(accountItem =>
              accountItem.legalCurrencyId?.split(',').includes(params.currentTradeArea?.legalCurrencyId as string)
            )
            .map(accountItem => {
              return {
                account: accountItem.account,
                name: accountItem.bankOfDeposit,
                qrcode: accountItem.qrCodeAddr,
                paymentId: accountItem.id,
                paymentDetails: accountItem.paymentDetails,
                enabled: accountItem.enabled !== C2cPaymentsEnabledEnum.disEnabled,
              } as IC2cPayAccount
            }),
        }

        return payment
      })
      .filter(payment => supportedPayments.includes(payment.type))
      .sort((a, b) => {
        const aEnabled = a.accounts.some(item => item.enabled)
        const bEnabled = b.accounts.some(item => item.enabled)
        if (aEnabled && bEnabled) {
          return 0
        }
        if (aEnabled) {
          return -1
        }
        return 1
      })
    setUserPayments(payments)
    const defaultPayment = payments.find(item => item.accounts.some(account => account.enabled)) || payments[0]
    onSelectPayment(defaultPayment.accounts.filter(item => item.enabled)[0], defaultPayment)
  }

  useMount(() => {
    fetchPayments()
  })
  if (userPayments.length === 0) {
    return null
  }

  return (
    <>
      <div className="flex items-center justify-end overflow-ellipsis-flex-1" onClick={() => setVisible(true)}>
        <PaymentItem className="text-sm" payment={selectedPayment!} />
        <div className={classNames(styles['account-text-wrapper'])}>
          {selectedAccount.paymentDetails ||
            getAccountEllipsis(selectedAccount?.account, getPaymentIsBankCard(selectedPayment))}
        </div>
        <Icon name="next_arrow" className="translate-y-px text-base" hasTheme />
      </div>
      <OnlyOneActionSheet
        cancelText={t`assets.financial-record.cancel`}
        visible={visible}
        className="!bg-card_bg_color_03"
        onCancel={() => setVisible(false)}
      >
        <div className={classNames(styles['select-sell-payment-wrapper'], 'text-sm')}>
          <div className="flex justify-between px-4 mb-2">
            <span className="text-base font-medium">{t`features_c2c_trade_select_payment_222225101666`}</span>
            <span onClick={toPayments} className="text-brand_color">
              {t`features_c2c_footer_index_2225101636`}
            </span>
          </div>
          <div className="overflow-y-auto max-h-80">
            {userPayments.map((payment, index) => (
              <Payment
                key={payment.type}
                selectedPaymentId={selectedPayment?.type}
                selectedAccountId={selectedAccount?.paymentId}
                payment={payment}
                isLast={index === userPayments.length - 1}
                onChange={onSelectPayment}
              />
            ))}
          </div>
        </div>
      </OnlyOneActionSheet>
    </>
  )
}

type ISelectBuyPaymentProps = {
  payments: IC2cPayment[]
  value: string
  onChange: (value: string) => void
}
export function SelectBuyPayment({ payments, value, onChange }: ISelectBuyPaymentProps) {
  const paymentsActions = payments.map(payment => {
    return {
      name: payment.name,
      value: payment.type,
    }
  })
  const selectedPayment = payments.find(payment => payment.type === value)

  return (
    <div className="flex items-center">
      <PaymentItemColor payment={selectedPayment!} />
      <SelectActionSheet
        cartIcon={<Icon name="next_arrow" className="translate-y-px text-base" hasTheme />}
        value={value}
        labelClassName="!text-sm"
        onChange={onChange}
        actions={paymentsActions}
      />
    </div>
  )
}
