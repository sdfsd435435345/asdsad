import { createC2cOrder, queryC2cTradeAdDetail, queryCoinOutsideAddrList } from '@/apis/c2c/trade'
import Icon from '@/components/icon'
import LazyImage from '@/components/lazy-image'
import Link from '@/components/link'
import { OnlyOnePopup } from '@/components/only-one-overlay'
import { SelectActionSheet } from '@/components/select-action-sheet'
import { AreaTransactionTypeEnum } from '@/constants/c2c/common'
import PriceInput from '@/features/trade/common/price-input'
import { paymentTypeToPayment } from '@/helper/c2c/trade'
import { awaitTime } from '@/helper/common'
import { formatCurrency } from '@/helper/decimal'
import { link } from '@/helper/link'
import { getC2cOrderDetailPageRoutePath } from '@/helper/route'
import { useDelayInvisible } from '@/hooks/use-delay-visible'
import { useHelpCenterUrl } from '@/hooks/use-help-center-url'
import { baseC2cTradeStore, useBaseC2cTradeStore } from '@/store/c2c/trade'
import { IC2cPayAccount, ITradeAdItem } from '@/typings/api/c2c/trade'
import { t } from '@lingui/macro'
import { Button, Tabs, Toast } from 'react-vant'
import { useCountDown, useMount, useRequest } from 'ahooks'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import PromptIcon from '@/components/prompt-icon'
import SideTag, { NetworkTag } from '../common/side-tag'
import styles from './common.module.css'
import { ISelectSellPaymentOnChange, SelectBuyPayment, SelectSellPayment } from './select-payment'
import { useTradeContext, useTradeForm } from './trade-context'

export type IC2cTradeFormProps = {
  visible: boolean
  onVisibleChange: (visible: boolean) => void
  isBuy: boolean
  ad: ITradeAdItem
}

type IFormConfirmProps = IC2cTradeFormProps & {
  amount: string
  count: string
  unitIsAmount: boolean
  fetchAd: () => Promise<void>
}

const fetchAdWhenConfirm = async (id: any, onRemove: () => void) => {
  const res = await queryC2cTradeAdDetail({ id })
  if (res.isOk && res.data) {
    // 就这里用到了，无需写成枚举
    if (res.data.statusCd !== 'ON_SHELVES') {
      Toast(t`features_c2c_trade_trade_form_22225101648`)
      onRemove()
      return Promise.reject()
    }
    return res.data
  } else {
    return Promise.reject()
  }
}
function ChainInActionSheet({ name, disabled }) {
  return (
    <div className="flex justify-center items-center">
      <span className="text-text_color_01 mr-2">{name}</span>
      {disabled && (
        <div className="px-2 rounded-bl rounded-tr bg-bg_button_disabled text-text_color_02">
          <span className="text-xs scale-50">{t`assets.common.main-network.paused`}</span>
        </div>
      )}
    </div>
  )
}

function FormConfirm({
  ad,
  unitIsAmount,
  isBuy,
  fetchAd,
  onVisibleChange,
  amount,
  count,
  useTradeFormHookResult,
}: IFormConfirmProps & {
  useTradeFormHookResult: ReturnType<typeof useTradeForm>
}) {
  const { symbol, currency, amountDigit, countDigit } = useTradeFormHookResult
  const price = ad.price
  const isOutside = ad.tradeTypeCd === AreaTransactionTypeEnum.outside
  const { disabledChains } = baseC2cTradeStore.getState()
  const [networks, setNetworks] = useState(
    (ad.mainchainAddrs || []).map(item => ({
      name: item.name,
      value: item.id,
      disabled: disabledChains.includes(item.name),
    }))
  )
  const [network, setNetwork] = useState(networks[0]?.value)
  const newPayments = (ad.newPayments || []).filter(v => !v.grey)
  const [paymentType, setPaymentType] = useState(newPayments[0]?.name)
  const [account, setAccount] = useState({} as IC2cPayAccount)
  const onSellPaymentChange: ISelectSellPaymentOnChange = (newAccount, payment) => {
    setAccount(newAccount)
    setPaymentType(payment.type)
  }
  const buyAdPayments = newPayments?.map(v => v.name).map(paymentTypeToPayment) || []
  const buyAdPaymentId = (ad.paymentDetails?.find(item => item.paymentTypeCd === paymentType) as any)?.id
  const { run, loading } = useRequest(
    async () => {
      // 正常来说不会出现这种情况，在上一步就会被拦截
      if (!isBuy && !account?.paymentId) {
        Toast(t`features_c2c_trade_trade_form_aitwnvxz6-rnf0aoytx7x`)
        return
      }
      await fetchAd()
      const res = await createC2cOrder({
        advertId: ad.advertId,
        typeCd: !unitIsAmount ? 'NUMBER' : 'TOTAL_PRICE',
        number: Number(count),
        totalPrice: Number(amount),
        mainchainAddrId: network,
        paymentId: isBuy ? buyAdPaymentId : account.paymentId,
      })
      if (res.isOk && res.data) {
        link(getC2cOrderDetailPageRoutePath(res.data.id as any))
      }
    },
    {
      manual: true,
    }
  )
  useMount(async () => {
    if (!isBuy || !isOutside) {
      return
    }
    const res = await queryCoinOutsideAddrList({
      name: symbol,
    })
    if (!res.isOk || !res.data) {
      return
    }
    const { disabledChains } = baseC2cTradeStore.getState()
    const myNetworks = res.data
      .filter(item => (ad.mainchainAddrs || []).some(adAddr => adAddr.name === item.name))
      .map(item => ({
        name: item.name!,
        value: item.id!,
        disabled: disabledChains.includes(item.name!),
      }))
      .sort((a, b) => {
        if (a.disabled) {
          return 1
        }
        if (b.disabled) {
          return -1
        }
        return 0
      })
    setNetworks(myNetworks)
    setNetwork(myNetworks[0]?.value)
  })
  const networksInActionSheet = networks.map(item => {
    return {
      ...item,
      nameInLabel: item.name,
      name: <ChainInActionSheet {...item} />,
    }
  })
  const props = [
    {
      label: t`features_c2c_trade_trade_form_22225101639`,
      value: ` ${currency} ${formatCurrency(price, amountDigit)}`,
    },
    {
      label: t`features/trade/spot/price-input-0`,
      value: `${formatCurrency(count)} ${symbol}`,
    },
    {
      label: t`features_c2c_trade_trade_form_22225101640`,
      invisible: !isOutside,
      value: (
        <SelectActionSheet
          cartIcon={<Icon name="next_arrow" className="translate-y-px text-base" hasTheme />}
          value={network}
          labelClassName="!text-sm"
          onChange={setNetwork}
          actions={networksInActionSheet as any}
        />
      ),
    },
    {
      label: t`features_c2c_trade_trade_form_22225101641`,
      value: `${currency} ${formatCurrency(amount, amountDigit)}`,
    },
    {
      label: isBuy ? t`features_c2c_trade_trade_form_22225101642` : t`features_c2c_trade_trade_form_22225101643`,
      value: isBuy ? (
        <SelectBuyPayment value={paymentType} payments={buyAdPayments} onChange={setPaymentType} />
      ) : (
        <SelectSellPayment onChange={onSellPaymentChange} supportedPayments={newPayments.map(v => v.name)} />
      ),
    },
  ]

  return (
    <>
      <div className="header">
        <div className="flex items-center">
          <div className="title mr-2">
            {isBuy ? t`features_c2c_trade_trade_form_22225101644` : t`features_c2c_trade_trade_form_22225101645`}
          </div>
          <SideTag isOutside={isOutside || false} className="!self-center" />
        </div>
        <Icon hasTheme name="close" className="text-xl" onClick={() => onVisibleChange(false)} />
      </div>
      {!isBuy && (
        <div className="mb-6 text-xs text-text_color_02 px-4 mt-2">
          <div className="mb-1">
            <PromptIcon />
            <span>{t`features_c2c_trade_trade_form_22225101656`}</span>
          </div>
          <div>
            <PromptIcon />
            <span className="text-brand_color">{t`features_c2c_trade_trade_form_22225101657`}</span>
            <span>{t`features_c2c_trade_trade_form_22225101658`}</span>
          </div>
        </div>
      )}
      <div className="mb-6 px-4">
        {props.map(prop => {
          if (prop.invisible) {
            return null
          }
          return (
            <div key={prop.label} className="flex justify-between items-center mb-3">
              <div className="text-text_color_02">{prop.label}</div>
              <div className="flex-1 ml-1 flex justify-end">{prop.value}</div>
            </div>
          )
        })}
      </div>
      <div className="px-4 pb-10 flex">
        <Button onClick={() => onVisibleChange(false)} block className="gray-button mr-4">
          {t`assets.financial-record.cancel`}
        </Button>
        <Button
          onClick={run}
          loading={loading}
          block
          className={classNames('sell-or-buy-button', isBuy ? 'is-buy' : 'is-sell')}
        >
          {isBuy ? t`features_c2c_trade_trade_form_22225101644` : t`features_c2c_trade_trade_form_22225101645`}
        </Button>
      </div>
    </>
  )
}

function Form({ ad: propsAd, isBuy, onVisibleChange }: IC2cTradeFormProps) {
  const { params, removeAd } = useTradeContext()
  const [ad, setAd] = useState({ ...propsAd })
  const price = ad.price
  // 30s 倒计时
  const [targetDate, setTargetDate] = useState(Date.now() + 1000 * 30)
  const { runAsync: fetchAd, loading: fetchAdLoading } = useRequest(
    async () => {
      const data = await fetchAdWhenConfirm(ad.advertId, () => {
        removeAd?.(ad.advertId!)
        onVisibleChange(false)
      })
      // iOS 下收起键盘动画会导致画面错乱（布局从调试器来看是对的），所以延迟 500ms
      await awaitTime(500)
      setAd(data)
      setTargetDate(Date.now() + 1000 * 30)
    },
    {
      manual: true,
    }
  )
  const [, { seconds }] = useCountDown({
    targetDate,
    onEnd: fetchAd,
  })
  const useTradeFormHookResult = useTradeForm(ad)
  const {
    onCountChange,
    onAmountChange,
    amount,
    count,
    unitIsAmount,
    setUnitIsAmount,
    adLimitError,
    selectAll,
    balanceLimitError,
    maxSellCount,
    maxSellAmount,
    symbol,
    currency,
    currencyName,
    maxAmount,
    minAmount,
    amountDigit,
    countDigit,
  } = useTradeFormHookResult
  const [confirmModalVisible, setConfirmModalVisible] = useState(false)
  useMount(fetchAd)
  const burOrSell = async () => {
    if (!amount || Number(amount) === 0) {
      Toast(
        isBuy
          ? !unitIsAmount
            ? t`features_c2c_trade_trade_form_2222225101667`
            : t`features_c2c_trade_trade_form_2222225101668`
          : !unitIsAmount
          ? t`features_c2c_trade_trade_form_2222225101669`
          : t`features_c2c_trade_trade_form_2222225101670`
      )
      return
    }
    if (adLimitError) {
      return
    }
    if (balanceLimitError) {
      return
    }
    await fetchAd()
    setConfirmModalVisible(true)
  }
  const isOutside = ad.tradeTypeCd === AreaTransactionTypeEnum.outside
  const agreementUrl = useHelpCenterUrl('c2c_legal_disclaimer')
  const onUnitIsAmountChange = () => {
    setUnitIsAmount(!unitIsAmount)
    onCountChange('')
  }

  return (
    <div
      className={classNames(styles['trade-form-wrapper'], {
        'is-buy': isBuy,
      })}
    >
      {confirmModalVisible ? (
        <FormConfirm
          ad={ad}
          useTradeFormHookResult={useTradeFormHookResult}
          fetchAd={fetchAd}
          unitIsAmount={unitIsAmount}
          isBuy={isBuy}
          onVisibleChange={setConfirmModalVisible}
          amount={amount}
          count={count}
          visible={confirmModalVisible}
        />
      ) : (
        <>
          <div className="header rv-hairline--bottom">
            <div className="flex">
              <LazyImage className="w-5 h-5 mr-2" src={params.currentCoin?.appLogo} />
              <div className="mr-2 -translate-y-0.5">
                <div className="title">
                  {isBuy ? t`features_kyc_index_standards_5101189` : t`features_kyc_index_standards_5101190`}{' '}
                  {params.currentCoin?.coinName}
                </div>
                <div className="price-text">
                  <span>{t`features_c2c_trade_trade_form_22225101639`}</span>
                  <span>
                    {currency} {formatCurrency(price, amountDigit)}
                  </span>
                </div>
              </div>
              <SideTag isOutside={isOutside || false} className="mr-2 self-start" />
              {isOutside && !isBuy && (
                <NetworkTag className="mt-1 self-start">{ad.mainchainAddrs?.[0].name}</NetworkTag>
              )}
            </div>
            <Icon hasTheme name="close" className="text-xl" onClick={() => onVisibleChange(false)} />
          </div>
          <Tabs
            align="start"
            className="mb-4 nav-transparent"
            defaultActive={unitIsAmount ? 2 : 1}
            onChange={onUnitIsAmountChange}
          >
            <Tabs.TabPane
              title={
                isBuy ? t`features_c2c_trade_trade_form_22225101650` : t`features_c2c_trade_trade_form_22225101651`
              }
              name={1}
            />
            <Tabs.TabPane
              title={
                isBuy ? t`features_c2c_trade_trade_form_22225101652` : t`features_c2c_trade_trade_form_22225101653`
              }
              name={2}
            />
          </Tabs>
          <div className="px-4 mb-4">
            <PriceInput
              onChange={unitIsAmount ? onAmountChange : onCountChange}
              value={unitIsAmount ? amount : count}
              digit={unitIsAmount ? amountDigit : countDigit}
              onlyInput
              inputProps={{
                suffix: (
                  <div className="flex items-ce">
                    <span>{unitIsAmount ? currencyName : symbol}</span>
                    {!isBuy && (
                      <div className="flex items-center">
                        <div className="mx-2 w-px bg-line_color_01 h-3 scale-y-125"></div>
                        <span onClick={selectAll} className="text-brand_color">
                          {t`constants_market_market_list_market_module_index_5101071`}
                        </span>
                      </div>
                    )}
                  </div>
                ),
              }}
              placeholder="0.00"
            />
            <div className="text-xs text-text_color_02">
              <div
                className={classNames('mt-1', {
                  'text-warning_color': adLimitError,
                })}
              >
                <span>{t`features_c2c_trade_trade_form_22225101659`} </span>
                {unitIsAmount
                  ? `${currency} ${formatCurrency(minAmount)} - ${currency} ${formatCurrency(maxAmount)}`
                  : `${formatCurrency(ad.minAmount)} - ${formatCurrency(ad.maxAmount)} ${symbol}`}
              </div>
              {!isBuy && (
                <div
                  className={classNames('mt-1', {
                    'text-warning_color': balanceLimitError,
                  })}
                >
                  <span>{t`features_c2c_trade_trade_form_22225101660`} </span>
                  {unitIsAmount
                    ? `${currency} ${formatCurrency(maxSellAmount, amountDigit)}`
                    : `${formatCurrency(maxSellCount)} ${symbol}`}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center px-4 mb-6">
            <span className="text-text_color_02 mr-2">
              {isBuy
                ? unitIsAmount
                  ? t`features_c2c_trade_trade_form_22225101654`
                  : t`features_c2c_trade_trade_form_22225101655`
                : !unitIsAmount
                ? t`features_c2c_trade_trade_form_22225101654`
                : t`features_kyc_index_standards_5101190`}
            </span>
            <div className="font-medium text-base overflow-ellipsis-flex-1 text-right">
              {unitIsAmount ? `${count || '0'} ${symbol}` : `${currency} ${formatCurrency(amount || '0.00')}`}
            </div>
          </div>
          <div className="mb-6 text-xs px-4">
            <span className="text-text_color_03">{t`features_c2c_trade_trade_form_22225101661`}</span>{' '}
            <Link target href={agreementUrl} className="text-brand_color">
              C2C {t`features_c2c_trade_trade_form_22225101662`}
            </Link>
          </div>

          <div className="px-4 pb-10 flex">
            <Button
              disabled={Number(amount) === 0}
              onClick={burOrSell}
              loading={fetchAdLoading}
              block
              className={classNames('sell-or-buy-button', isBuy ? 'is-buy' : 'is-sell')}
            >
              {isBuy ? t`features_kyc_index_standards_5101189` : t`features_kyc_index_standards_5101190`}
              {seconds > 0 && <span> ({seconds}s)</span>}
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
/**
 * c2c 交易组件，需要使用 tradeContext.Provider 包裹，其中所需参数如下
 * contextValue = {
 *   params: {
 *    // 交易方向，买入或者卖出，数组里只有一项
 *    advertDirectCds: ['SELL' || 'BUY'],
 *    // 当前选中币种，从币种列表拿即可，获取名称和精度
 *    currentCoin: {},
 *    // 当前币种 id，同上，主要用来获取余额
 *    coinId: '',
 *    // 当前交易区，同样从交易区列表里筛选就行，获取名称和精度
 *    currentTradeArea: {},
 *   }
 * }
 */
export function C2cTradeForm({ ad, visible, isBuy, onVisibleChange }: IC2cTradeFormProps) {
  return (
    <OnlyOnePopup destroyOnClose visible={visible} position="bottom">
      <Form visible={visible} ad={ad} onVisibleChange={onVisibleChange} isBuy={isBuy} />
    </OnlyOnePopup>
  )
}
