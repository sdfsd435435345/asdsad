import { useDebounce, useUpdateEffect } from 'ahooks'
import { useEffect, useRef, useState } from 'react'
import { C2cTradeAdDirectionEnum, C2cTradeFilterBuyWayEnum } from '@/constants/c2c/trade'
import TradeButtonRadios, { TradeButtonRadiosPresetClassNames } from '@/features/trade-button-radios'
import PriceInput from '@/features/trade/common/price-input'
import { Button, Selector, Toast } from 'react-vant'
import { t } from '@lingui/macro'
import { paymentTypeToPayment } from '@/helper/c2c/trade'
import Search from '@/components/search'
import classNames from 'classnames'
import CommonListEmpty from '@/components/common-list/list-empty'
import { calcStepFromOffset } from '@/helper/trade'
import DropdownFilters, { IDropdownFiltersInstance, IDropdownFiltersOption } from '@/components/dropdown-filters'
import { useTradeContext } from '../../trade-context'
import { C2cTradeFilters } from '../../filters'
import styles from './filters.module.css'

function useBuyWayOptions() {
  const { params, onParamsChange } = useTradeContext()

  const isBuy = params.advertDirect === (C2cTradeAdDirectionEnum.buy as any)

  const options = [
    {
      label: isBuy ? t`features_c2c_trade_trade_form_22225101652` : t`features_c2c_trade_trade_form_22225101653`,
      value: C2cTradeFilterBuyWayEnum.amount,
    },
    {
      label: isBuy ? t`features_c2c_trade_trade_form_22225101650` : t`features_c2c_trade_trade_form_22225101651`,
      value: C2cTradeFilterBuyWayEnum.count,
    },
  ]

  return options
}

function BuyWay({ onFinish, options }) {
  const { params, onParamsChange } = useTradeContext()

  const isBuy = params.advertDirect === (C2cTradeAdDirectionEnum.buy as any)
  const onBuyWayChange = (value: string) => {
    onParamsChange({
      buyType: value,
      amount: '',
    })
    onFinish()
  }

  return (
    <div className="p-4">
      <div className="text-text_color_02 mb-2">
        {isBuy
          ? t`features_c2c_trade_order_book_detail_filters_zzxk0vasln`
          : t`features_c2c_trade_order_book_detail_filters_k9vzm5khyp`}
      </div>
      <div className="flex">
        <TradeButtonRadios
          activeClassName="text-brand_color border-brand_color bg-brand_color_special_02"
          inactiveClassName="text-text_color_02 border-bg_sr_color bg-bg_sr_color"
          bothClassName="font-medium py-1.5 border border-solid px-4 text-xs mr-2"
          value={params.buyType as any}
          onChange={onBuyWayChange}
          options={options}
        />
      </div>
    </div>
  )
}
function AmountOrCount({ onFinish }) {
  const { params, onParamsChange } = useTradeContext()

  const isAmount = params.buyType === (C2cTradeFilterBuyWayEnum.amount as any)
  const targetValue = isAmount ? params.amount : params.amount
  const [inputValue, setInputValue] = useState(targetValue || '')

  useUpdateEffect(() => {
    setInputValue(targetValue || '')
  }, [targetValue])

  const onNumberChange = (value: string) => {
    setInputValue(value)
  }
  const onConfirm = () => {
    onParamsChange({
      amount: inputValue,
    })
    onFinish()
  }
  const reset = () => {
    setInputValue('')
  }
  // 加倍数组
  const multipliersOptions = [1, 5, 10, 20, 50, 100].map(item => {
    return {
      label: `${item}x`,
      value: item,
    }
  })
  const [multiplier, setMultiplier] = useState(0)
  const onMultiplierChange = (value: number) => {
    let target = value * 100
    onNumberChange(target.toString())
    setMultiplier(value)
    setTimeout(() => {
      setMultiplier(0)
    }, 200)
  }
  const multipliersOptionsSlice = [multipliersOptions.slice(0, 3), multipliersOptions.slice(3, 6)]
  const digit = isAmount ? params.currentTradeArea?.precision || 2 : params.currentCoin?.trade_precision || 2

  return (
    <div className="p-4">
      <PriceInput
        value={inputValue?.toString()}
        onChange={onNumberChange}
        onlyInput
        digit={digit}
        min={calcStepFromOffset(digit)}
        inputProps={{
          suffix: !isAmount ? params.currentCoin?.coinName : params.currentTradeArea?.currencyName,
        }}
        placeholder={`${t`common.for_example`} 100`}
      />
      <div className="mb-6 mt-2">
        {multipliersOptionsSlice.map((item, index) => {
          return (
            <div key={index} className="mb-2 last:mb-0">
              <TradeButtonRadios
                hasGap
                bothClassName="text-xs h-30 font-medium rounded-sm px-4 border border-solid"
                inactiveClassName="text-text_color_02 bg-card_bg_color_02 border-card_bg_color_02"
                activeClassName={TradeButtonRadiosPresetClassNames.active.brand}
                options={item}
                onChange={() => {}}
                onClickItem={onMultiplierChange}
                value={multiplier}
              />
            </div>
          )
        })}
      </div>
      <div className="flex">
        <Button
          block
          className="mr-4 gray-button-in-popup"
          onClick={reset}
        >{t`features/assets/financial-record/record-screen-modal/index-1`}</Button>
        <Button block type="primary" onClick={onConfirm}>
          {t`user.field.reuse_10`}
        </Button>
      </div>
    </div>
  )
}

function Payments({ onFinish }) {
  const { params, onParamsChange } = useTradeContext()
  const isBuy = params.advertDirect === (C2cTradeAdDirectionEnum.buy as any)
  const paymentMethods = (params.currentTradeArea?.payments || ['ALIPAY', 'WECHAT', 'BANK'])
    .map(paymentTypeToPayment)
    .map(item => ({
      label: item.name,
      value: item.type,
    }))

  const [currentPayments, setCurrentPayments] = useState(params.payments || [''])

  const [searchKey, setSearchKey] = useState('')
  const displayPaymentMethods = paymentMethods.filter(item =>
    item.label.toUpperCase().includes(searchKey.toUpperCase())
  )
  if (!searchKey) {
    displayPaymentMethods.unshift({
      label: t`constants_market_market_list_market_module_index_5101071`,
      value: '',
    })
  }
  const onConfirm = () => {
    onParamsChange({
      payments: currentPayments,
    })
    onFinish()
  }
  const reset = () => {
    setSearchKey('')
    setCurrentPayments([''])
  }

  const onPaymentChange = (value: string[]) => {
    if (value.length === 0) {
      setCurrentPayments([''])
      return
    }
    setCurrentPayments(
      currentPayments.includes('') ? value.filter(item => item !== '') : value.includes('') ? [''] : value
    )
  }

  return (
    <div className={classNames('p-4', styles['payments-popup-wrapper'])}>
      <Search
        placeholder={
          isBuy
            ? t`features_c2c_trade_order_book_detail_filters_xlaxzomtro`
            : t`features_c2c_trade_order_book_detail_filters_b0hpjzyorl`
        }
        value={searchKey}
        onChange={setSearchKey}
        className="mb-4"
      />
      <CommonListEmpty
        imageName="icon_default_no_search"
        text={t`user.search_area_03`}
        className="py-4"
        hidden={displayPaymentMethods.length > 0}
      />
      {displayPaymentMethods.length > 0 && (
        <div className="mb-4 mt-2">
          <div>
            <Selector
              showCheckMark={false}
              className="size-small"
              value={currentPayments}
              onChange={onPaymentChange}
              multiple
              options={displayPaymentMethods}
            />
          </div>
        </div>
      )}
      <div className="flex items-center">
        <div className="text-xs action-tip">{t`features_c2c_trade_order_book_detail_filters_o45kkha21n`}</div>
        <Button className="w-1/2" type="primary" onClick={onConfirm}>
          {t`user.field.reuse_10`}
        </Button>
      </div>
    </div>
  )
}

export function OrderBookDetailFilters() {
  const [key, setKey] = useState('')
  const debounceKey = useDebounce(key, { wait: 500 })
  const { params, onParamsChange } = useTradeContext()

  useEffect(() => {
    onParamsChange({ amount: debounceKey })
  }, [debounceKey])
  const dropdownFiltersInstanceRef = useRef<IDropdownFiltersInstance>()
  const onClose = () => {
    dropdownFiltersInstanceRef.current?.close()
  }
  const buyWayOptions = useBuyWayOptions()
  const selectedOption = buyWayOptions.find(option => option.value === params.buyType)
  const isAmount = params.buyType === (C2cTradeFilterBuyWayEnum.amount as any)
  const payments = (params.payments || []).filter(item => item !== '')
  const options: IDropdownFiltersOption[] = [
    {
      label: selectedOption?.label,
      popup: <BuyWay onFinish={onClose} options={buyWayOptions} />,
    },
    {
      label: !params.amount
        ? isAmount
          ? t`features_c2c_trade_order_book_detail_filters_9b6f9s58jm`
          : t`features/trade/spot/price-input-0`
        : params.amount,
      popup: <AmountOrCount onFinish={onClose} />,
    },
    {
      label:
        payments.length > 0
          ? `${paymentTypeToPayment(payments[0]).name}${payments.length > 1 ? '...' : ''}`
          : t`features_c2c_trade_order_book_detail_filters__pshtsgdqh`,
      popup: <Payments onFinish={onClose} />,
    },
  ]

  return (
    <DropdownFilters
      ref={dropdownFiltersInstanceRef}
      options={options}
      rightExtra={<C2cTradeFilters inOrderBook iconSize={16} />}
    />
  )
}
