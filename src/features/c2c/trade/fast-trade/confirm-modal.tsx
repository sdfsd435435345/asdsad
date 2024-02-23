import {
  createC2cFastTradeBuyOrder,
  createC2cFastTradSellOrder,
  postV1OtcGetOneChannelPriceApiRequest,
  queryC2cTradeAdDetail,
} from '@/apis/c2c/trade'
import Icon from '@/components/icon'
import Link from '@/components/link'
import { OnlyOneActionSheet, OnlyOnePopup } from '@/components/only-one-overlay'
import { formatCurrency, formatNumberDecimal } from '@/helper/decimal'
import { link } from '@/helper/link'
import { IBestAdItem, IC2cPayAccount, IC2cPayment } from '@/typings/api/c2c/trade'
import { t } from '@lingui/macro'
import { Button, Toast } from 'react-vant'
import { useCountDown, useRequest } from 'ahooks'
import classNames from 'classnames'
import { useState } from 'react'
import { decimalUtils } from '@/nbit'
import { useDelayInvisible } from '@/hooks/use-delay-visible'
import { getAccountEllipsis, paymentTypeToPayment, showCheckFailedModal } from '@/helper/c2c/trade'
import {
  getC2cOrderDetailPageRoutePath,
  getC2cPaymentsManagePageRoutePath,
  getCollectionAccountRoutePath,
} from '@/helper/route'
import Decimal from 'decimal.js'
import { useHelpCenterUrl } from '@/hooks/use-help-center-url'
import { getPaymentIsBankCard } from '@/helper/c2c/order'
import styles from './common.module.css'
import tradeStyles from '../common.module.css'
import { AccountItem } from '../select-payment'
import { useTradeContext } from '../trade-context'
import { PaymentItem } from '../payment-item'
import { addRedirectUrl, DIRECTION_MAP } from '../third-trade/common'
import { ThirdOtcHint, ThirdOtcTerms } from '../third-trade/third-otc-comp'

type IFormConfirmProps = {
  amount: string
  count: string
  visible: boolean
  onVisibleChange: (visible: boolean) => void
  isBuy: boolean
  ads: IBestAdItem[]
  unitIsAmount: boolean
}
const toPayments = () => {
  link(getC2cPaymentsManagePageRoutePath())
}
type ISelectAccountProps = {
  payment: IC2cPayment
  onChange: (account: IC2cPayAccount) => void
  selectedAccountId?: string
}
function SelectAccount({ payment, selectedAccountId, onChange }: ISelectAccountProps) {
  const accounts = payment.accounts.filter(account => account.enabled)
  return (
    <div className="text-sm">
      <div className="flex items-center justify-between pt-4 px-4 mb-2">
        <PaymentItem payment={payment} className="text-base font-medium" />
        <span className="text-brand_color text-sm" onClick={toPayments}>
          {t`features_c2c_footer_index_2225101636`}
        </span>
      </div>
      <div>
        {accounts.map(item => {
          return (
            <div
              key={item.account}
              onClick={() => onChange(item)}
              className={classNames('rv-hairline--bottom', {
                'text-brand_color': selectedAccountId === item.paymentId,
              })}
            >
              <AccountItem paymentName={payment.name} isActive={selectedAccountId === item.paymentId} account={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function FormConfirm({ ads, unitIsAmount, isBuy, onVisibleChange, amount, count }: IFormConfirmProps) {
  const { params } = useTradeContext()
  const [selectedAd, setSelectedAd] = useState(ads[0])
  const [checked, setChecked] = useState(false)

  const price = selectedAd.price
  const displayAmount = unitIsAmount
    ? amount
    : formatNumberDecimal(
        decimalUtils.SafeCalcUtil.mul(count, price),
        params.currentTradeArea?.precision || 2,
        Decimal.ROUND_CEIL
      )
  const displayCount = !unitIsAmount
    ? count
    : formatNumberDecimal(
        decimalUtils.SafeCalcUtil.div(amount, price),
        params.currentCoin?.trade_precision || 2,
        Decimal.ROUND_FLOOR,
        true
      )
  const symbol = params.currentCoin?.coinName
  const currency = params.currentTradeArea?.currencySymbol
  const paymentType = selectedAd.paymentType
  // 现在支付方式从广告中获取，但是仍然将它独立出来以便维护
  const userPayments = ads.map(adItem => {
    const payment = paymentTypeToPayment(adItem.paymentType as string)
    payment.accounts = adItem.accounts

    return payment
  })
  const selectedPayment = userPayments.find(item => item.type === paymentType)
  const [selectedAccounts, setSelectedAccounts] = useState(
    ads.map(adItem => {
      const payment = userPayments.find(item => item.type === adItem.paymentType)
      return payment?.accounts?.[0]
    })
  )
  const currentPaymentAccount = selectedAccounts[ads.indexOf(selectedAd)]
  const currentPayment =
    userPayments.find(item => item.type === selectedAd.paymentType) ||
    paymentTypeToPayment(selectedAd.paymentType as string)
  const currentPaymentAccounts = currentPayment.accounts.filter(v => v.enabled)
  const currentPaymentIsEmpty = currentPayment?.accounts?.length === 0
  const currentPaymentIsDisabled = !currentPaymentIsEmpty && currentPaymentAccounts.length === 0
  const [selectAccountVisible, setSelectAccountVisible] = useState(false)

  const onSelectAccount = (newAccount: IC2cPayAccount) => {
    const index = ads.indexOf(selectedAd)
    setSelectedAccounts(old => {
      const arr = old.slice()
      arr.splice(index, 1, newAccount)

      return arr
    })
    setSelectAccountVisible(false)
  }
  // 30s 倒计时
  const [targetDate, setTargetDate] = useState(Date.now() + 1000 * 30)
  const { runAsync: fetchAd, loading: fetchAdLoading } = useRequest(
    async () => {
      if (selectedAd?.isOtc) {
        const res = await postV1OtcGetOneChannelPriceApiRequest({
          direction: isBuy ? DIRECTION_MAP.buy : DIRECTION_MAP.sell,
          fiatCurrency: params.currentTradeArea?.currencyName || '',
          cryptoCurrency: symbol || '',
          channel: selectedAd?.name || '',
          ...(unitIsAmount ? { fiatAmount: amount } : { cryptoAmount: count }),
        })
        if (res.isOk && res.data) {
          if (res.data?.price === selectedAd?.price) {
            setTargetDate(Date.now() + 1000 * 30)
          } else {
            Toast(t`features_c2c_trade_trade_form_22225101648`)
            onVisibleChange(false)
            return Promise.reject()
          }
        } else {
          return Promise.reject()
        }
        return
      }
      const res = await queryC2cTradeAdDetail({ id: selectedAd.advertId })
      if (res.isOk && res.data) {
        if (res.data.statusCd !== 'ON_SHELVES') {
          Toast(t`features_c2c_trade_trade_form_22225101648`)
          onVisibleChange(false)
          return Promise.reject()
        }
        setTargetDate(Date.now() + 1000 * 30)
      } else {
        return Promise.reject()
      }
    },
    {
      manual: true,
    }
  )
  const [, { seconds }] = useCountDown({
    targetDate,
    onEnd: fetchAd,
  })
  const { run, loading } = useRequest(
    async () => {
      await fetchAd()
      if (selectedAd?.isOtc) {
        window.location.href = addRedirectUrl(selectedAd.name, selectedAd.payUrl)
        return
      }
      const res = await (isBuy ? createC2cFastTradeBuyOrder : createC2cFastTradSellOrder)({
        advertId: selectedAd.advertId as number,
        typeCd: !unitIsAmount ? 'NUMBER' : 'TOTAL_PRICE',
        number: Number(count),
        totalPrice: Number(amount),
        paymentId: currentPaymentAccount!.paymentId as any,
        coinId: params.coinId as any,
        areaId: params.areaId as any,
      })
      if (res.isOk && res.data) {
        link(getC2cOrderDetailPageRoutePath(res.data.id as any))
      } else {
        showCheckFailedModal({
          code: res.code,
          isBuy,
          message: res.message,
          payments: [],
        })
      }
    },
    {
      manual: true,
    }
  )
  const agreementUrl = useHelpCenterUrl('c2c_legal_disclaimer')

  const getStatus = () => {
    if (selectedAd?.isOtc) {
      return !checked
    } else {
      return isBuy ? false : !currentPaymentAccount?.paymentId
    }
  }

  return (
    <div
      className={classNames(styles['confirm-modal-wrapper'], {
        'is-buy': isBuy,
      })}
    >
      <div className="header items-center">
        <div className="flex items-center">
          <div className="title mr-2">
            {isBuy ? t`features_c2c_trade_trade_form_22225101644` : t`features_c2c_trade_trade_form_22225101645`}
          </div>
        </div>
        <Icon hasTheme name="close" className="text-xl" onClick={() => onVisibleChange(false)} />
      </div>
      {selectedAd?.isOtc ? <ThirdOtcHint /> : null}
      <div className="mb-2 text-center font-medium text-2xl">
        {isBuy ? (
          <span>
            {currency} {formatCurrency(displayAmount)}
          </span>
        ) : (
          <span>
            {formatCurrency(displayCount)} {symbol}
          </span>
        )}
      </div>
      <div className="mb-6 text-xs text-center">
        {isBuy ? (
          <span>
            {t`features_c2c_trade_fast_trade_confirm_modal_222222225101677`} {formatCurrency(displayCount)} {symbol}
          </span>
        ) : (
          <span>
            {t`features_c2c_trade_fast_trade_confirm_modal_222222225101677`} {formatCurrency(displayAmount)}{' '}
            {params.currentTradeArea?.currencyName}
          </span>
        )}
      </div>
      <div className="flex justify-between px-4 mb-4">
        <span className="text-text_color_02">
          {isBuy
            ? t`features_c2c_trade_fast_trade_confirm_modal_222222225101675`
            : t`features_c2c_trade_select_payment_222225101666`}
        </span>
        {selectedAd?.isOtc ? null : (
          <span className="text-brand_color" onClick={toPayments}>
            {t`features_c2c_footer_index_2225101636`}
          </span>
        )}
      </div>
      <div className="payment-list">
        {ads.map((adItem, index) => {
          const payment =
            userPayments.find(item => item.type === adItem.paymentType) ||
            paymentTypeToPayment(adItem.paymentType as string)
          const accounts = payment.accounts.filter(v => v.enabled)
          const toEnable = () => {
            link(payment.accounts.length > 0 ? getC2cPaymentsManagePageRoutePath() : getCollectionAccountRoutePath())
          }
          const openSelectAccount = () => {
            setSelectAccountVisible(true)
          }
          const currentAccount = selectedAccounts[index]
          const isActive = payment.type === paymentType
          // 买且不存在价格小于当前的
          const isBest = isBuy && !ads.some(v => Number(v.price) < Number(adItem.price))

          return (
            <div
              key={payment.type || adItem.name}
              onClick={() => setSelectedAd(adItem)}
              className={classNames('payment', {
                'is-active': isActive,
              })}
            >
              <div className="flex items-center">
                <PaymentItem payment={payment} adItem={adItem} className="text-sm" />
                {isBuy && isBest && (
                  <div className="tag text-xs">{t`features_c2c_trade_fast_trade_confirm_modal_222222225101678`}</div>
                )}

                {!isActive && adItem?.isOtc && adItem?.isUsed && (
                  <div className=" used-tag">{t`features_c2c_trade_fast_trade_confirm_modal_zdfhei08yu`}</div>
                )}
              </div>
              {isActive && (isBuy || adItem.isOtc) && (
                <div className="selected-icon">
                  <Icon isRemoteUrl name="c2c/contract_select" />
                </div>
              )}
              {(isBuy || adItem.isOtc) && (
                <div>
                  {currency} {formatCurrency(adItem.price, params.currentTradeArea?.precision || 2)}
                </div>
              )}
              {!isBuy && !adItem.isOtc && (
                <div className="overflow-ellipsis-flex-1 ml-2 flex justify-end">
                  {accounts.length === 0 && (
                    <div className="flex text-xs items-center">
                      <span className="text-text_color_03 mr-2">
                        {payment.accounts.length > 0
                          ? t`features_c2c_trade_fast_trade_confirm_modal_222222225101676`
                          : t`features_c2c_trade_select_payment_222225101664`}
                      </span>
                      <span onClick={toEnable} className="text-brand_color text-sm">
                        {payment.accounts.length > 0
                          ? t`features_c2c_trade_select_payment_222225101665`
                          : t`user.security_verification_status_02`}
                      </span>
                    </div>
                  )}
                  {accounts.length > 0 && (
                    <div className="flex items-center overflow-ellipsis-flex-1 justify-end">
                      <div className={tradeStyles['account-text-wrapper']}>
                        {currentAccount?.paymentDetails ||
                          getAccountEllipsis(currentAccount?.account || '', getPaymentIsBankCard(payment))}
                      </div>
                      <Icon
                        onClick={openSelectAccount}
                        className="text-base translate-y-px"
                        name="next_arrow"
                        hasTheme
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className="terms">
        {selectedAd?.isOtc ? (
          <ThirdOtcTerms checked={checked} setChecked={setChecked} otc={selectedAd} />
        ) : (
          <>
            <span className="text-text_color_03 mr-0.5">{t`features_c2c_trade_trade_form_22225101661`}</span>
            <Link target href={agreementUrl} className="text-brand_color">
              C2C {t`features_c2c_trade_trade_form_22225101662`}
            </Link>
          </>
        )}
      </div>

      <div className="px-4 pb-10 flex">
        {(currentPaymentIsDisabled || currentPaymentIsEmpty) && !isBuy && !selectedAd.isOtc ? (
          <Button
            onClick={() => {
              link(currentPaymentIsDisabled ? getC2cPaymentsManagePageRoutePath() : getCollectionAccountRoutePath())
            }}
            block
            type="primary"
            className="rounded"
          >
            {currentPaymentIsDisabled
              ? t`features_c2c_trade_fast_trade_confirm_modal_-9jbfvd2ipb0uabugki8q`
              : t`features_c2c_trade_fast_trade_confirm_modal_vweuczpekoohiuizoeyll`}
          </Button>
        ) : (
          <Button
            disabled={getStatus()}
            onClick={run}
            loading={loading}
            block
            className={classNames('sell-or-buy-button', isBuy ? 'is-buy' : 'is-sell')}
          >
            {isBuy ? t`features_c2c_trade_trade_form_22225101644` : t`features_c2c_trade_trade_form_22225101645`}
            {seconds > 0 && <span> ({seconds}s)</span>}
          </Button>
        )}
      </div>
      <OnlyOneActionSheet
        cancelText={t`assets.financial-record.cancel`}
        visible={selectAccountVisible}
        onCancel={() => setSelectAccountVisible(false)}
        className="!bg-card_bg_color_03"
      >
        <div className="overflow-y-auto max-h-80">
          <SelectAccount
            selectedAccountId={currentPaymentAccount?.paymentId}
            payment={selectedPayment!}
            onChange={onSelectAccount}
          />
        </div>
      </OnlyOneActionSheet>
    </div>
  )
}

export function C2cFastTradeConfirmModal({ visible, onVisibleChange, ...rest }: IFormConfirmProps) {
  const innerVisible = useDelayInvisible(visible)

  return (
    <OnlyOnePopup visible={visible} position="bottom" className={classNames(styles['modal-wrapper'])}>
      {innerVisible && <FormConfirm visible={visible} onVisibleChange={onVisibleChange} {...rest} />}
    </OnlyOnePopup>
  )
}
