import Icon from '@/components/icon'
import Link from '@/components/link'
import NavBar from '@/components/navbar'
import { C2cTradeAdDirectionEnum, C2cTradeBestPriceCodeEnum, C2cTradeFilterTradeWayEnum } from '@/constants/c2c/trade'
import { validateKycLimitAmount, validateCountry, validateTradeAreaKyc } from '@/helper/c2c/trade'
import { formatCurrency, formatNumberDecimal } from '@/helper/decimal'
import { IBestAdItem, IQueryTradeAdListReq } from '@/typings/api/c2c/trade'
import { t } from '@lingui/macro'
import { decimalUtils } from '@/nbit'
import { Button, Dialog, Toast } from 'react-vant'
import { useCreation, useDebounceFn, useMount, useRequest, useUpdateEffect } from 'ahooks'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { envIsServer } from '@/helper/env'
import { useScaleDom } from '@/hooks/use-scale-dom'
import {
  postV1OtcGetChannelsApiRequest,
  queryC2cFastTradeBestPrice,
  queryC2cFastTradeBestPriceCountGt0,
  queryC2cTradeAdMatched,
} from '@/apis/c2c/trade'
import { mockBestAds } from '@/helper/c2c/tradeMock'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import { getC2cOrdersPageRoutePath, getCapitalTransfer } from '@/helper/route'
import TradeButtonRadios from '@/features/trade-button-radios'
import { useC2cTradeBaseHooks } from '@/hooks/features/c2c/trade'
import { useBaseC2cTradeStore } from '@/store/c2c/trade'
import { useViewportHeight } from '@/hooks/use-viewport-height'
import { CoinSelect } from '../coin-select'
import { TradeAreaSelect } from '../trade-area-select'
import { tradeContext, useTradeContext, useTradeForm } from '../trade-context'
import { Keyboard } from './keyboard'
import styles from './common.module.css'
import { C2cFastTradeConfirmModal } from './confirm-modal'
import { SwitchTradeMode } from '../switch-trade-mode'
import { DIRECTION_MAP } from '../third-trade/common'

function CoinAreaSelect() {
  const { params, onParamsChange } = useTradeContext()
  const isBuy = params.advertDirectCds![0] === C2cTradeAdDirectionEnum.buy

  return (
    <div className="flex px-4 py-3.5 items-center justify-between bg-card_bg_color_01">
      <div className="flex items-center">
        <span className="text-text_color_02 mr-4">
          {isBuy ? t`features_kyc_index_standards_5101189` : t`features_kyc_index_standards_5101190`}
        </span>
        <CoinSelect
          isFastTrade
          inTrade
          title={t`features_c2c_advertise_advertise_history_index_tg1mffuw9hpqeo5_pdxrc`}
          value={params}
          onChange={onParamsChange}
        />
      </div>
      <div className="flex items-center">
        <span className="text-text_color_02 mr-4">
          {isBuy
            ? t`features_c2c_trade_fast_trade_index_22222225101671`
            : t`features_c2c_trade_fast_trade_index_22222225101672`}
        </span>
        <TradeAreaSelect
          selectorRender={area => (
            <div className="flex items-center">
              <img
                alt={area?.currencyName}
                className="mr-2 w-5 h-5 rounded-full"
                src={`${oss_area_code_image_domain_address}${area?.countryAbbreviation}.png`}
              />
              <div className="mr-2">{area?.currencyName}</div>
              <Icon name="regsiter_icon_drop" className="text-xs scale-75 translate-y-px" hasTheme />
            </div>
          )}
        />
      </div>
    </div>
  )
}
// 最多支持 10 位
const max = decimalUtils.getSafeDecimal('9999999999.99999999')

function TradeForm({
  tradeFormHookResult,
  bestPrice,
  bestPriceLoading,
}: {
  tradeFormHookResult: ReturnType<typeof useTradeForm>
  bestPrice: string
  bestPriceLoading: boolean
}) {
  const { params } = useTradeContext()

  const {
    onCountChange,
    onAmountChange,
    amount,
    count,
    unitIsAmount,
    isBuy,
    setUnitIsAmount,
    adLimitError,
    selectAll,
    balanceLimitError,
    maxSellCount,
    maxSellAmount,
    symbol,
    amountDigit,
    countDigit,
    currency,
    originalAmount,
    originalCount,
    currencyName,
    amountRoundStrategy,
    countRoundStrategy,
  } = tradeFormHookResult
  const [ads, setAds] = useState<IBestAdItem[]>(mockBestAds())
  const [confirmModalVisible, setConfirmModalVisible] = useState(false)
  const { settings } = useBaseC2cTradeStore()
  const { run, loading } = useRequest(
    async () => {
      if (balanceLimitError) {
        return
      }
      if (adLimitError) {
        return
      }
      if (!validateCountry(params.currentTradeArea!, {} as any)) {
        return
      }
      if (!(await validateTradeAreaKyc())) {
        return
      }
      // 交易限额
      if (!(await validateKycLimitAmount(count, isBuy))) {
        return
      }
      const currentTradeArea = params.currentTradeArea
      // 买提现风险提示
      if (
        params.advertDirectCds?.includes(C2cTradeAdDirectionEnum.buy) &&
        currentTradeArea?.areaRiskWarn &&
        !settings?.showRiskInfoMap[currentTradeArea.legalCurrencyId]
      ) {
        settings.updateShowRiskInfo(currentTradeArea.legalCurrencyId)
        await Dialog.alert({
          title: currentTradeArea.areaRiskWarn.title,
          className: 'dialog-confirm-wrapper confirm-black',
          closeOnClickOverlay: true,
          message:
            currentTradeArea.areaRiskWarn.content ||
            t({
              id: 'features_c2c_trade_ad_list_2222222225101681',
              values: { 0: currentTradeArea?.currencyName },
            }),
          confirmButtonText: t`features_c2c_trade_ad_list_2222222225101682`,
        })
      }
      // 获取广告
      const data = await queryC2cTradeAdMatched({
        number: Number(count),
        typeCd: unitIsAmount ? 'TOTAL_PRICE' : 'NUMBER',
        totalPrice: Number(amount),
        coinId: params.currentCoin!.id as any,
        areaId: params.areaId as any,
        isBuy,
        isSupportOtc: true,
      })

      const res: any = await postV1OtcGetChannelsApiRequest({
        direction: isBuy ? DIRECTION_MAP.buy : DIRECTION_MAP.sell,
        fiatCurrency: currencyName,
        cryptoCurrency: symbol,
        ...(unitIsAmount ? { fiatAmount: amount } : { cryptoAmount: count }),
      })

      if (data.length > 0 || (res.isOk && res?.data?.length > 0)) {
        const arr = [
          ...data.filter(item => currentTradeArea?.payments.some(name => name === item.paymentType)),
          ...res?.data.map(i => {
            const target = i?.payments?.find(item => item.isExcellent)
            return {
              ...i,
              ...{
                fiatAmount: target?.fiatAmount,
                cryptoAmount: target?.cryptoAmount,
                price: target?.price,
                accounts: [],
                isOtc: true,
                paymentType: i.name,
                type: i.name,
              },
            }
          }),
        ]
        if (isBuy) {
          arr.sort((a, b) => a.price - b.price)
        } else {
          arr.sort((a, b) => b.price - a.price)
        }
        setAds(arr)
        setConfirmModalVisible(true)
      }
    },
    {
      manual: true,
    }
  )
  useMount(() => {
    onCountChange('0')
  })
  const currentCoin = params.currentCoin! || {}

  const ad = {
    minAmount: formatNumberDecimal(
      decimalUtils.SafeCalcUtil.mul(currentCoin.minTransQuantity, bestPrice),
      amountDigit,
      amountRoundStrategy
    ),
    maxAmount: formatNumberDecimal(
      decimalUtils.SafeCalcUtil.mul(currentCoin.maxTransQuantity, bestPrice),
      amountDigit,
      amountRoundStrategy
    ),
    minCount: formatNumberDecimal(currentCoin.minTransQuantity, countDigit, countRoundStrategy, true),
    maxCount: formatNumberDecimal(currentCoin.maxTransQuantity, countDigit, countRoundStrategy, true),
    // 这里这是一个占位作用，不需要根据价格实时计算
    price: bestPrice,
  }
  function createKeyBoardOnChange(fn: any) {
    return (val: string) => {
      if (Number.isNaN(Number(val))) {
        fn('0')
      }
      if (val === '') {
        fn('0')
        return
      }
      // 包括小数点
      if (val.length > 15) {
        return
      }
      fn(val)
    }
  }
  const numberMaxWidth = envIsServer ? 500 : window.innerWidth * 0.5

  const scaleRef = useScaleDom(numberMaxWidth, unitIsAmount ? amount : count)
  const onUnitIsAmountChange = () => {
    setUnitIsAmount(!unitIsAmount)
    onCountChange('0')
  }
  useUpdateEffect(() => {
    // 对应按金额下单，重新换算数量
    // 如果以金额下单，这里的校验必须获取最新价格后才能传给这个函数校验，否则会有延迟的问题
    // 比如 20 CNY 初始价格为 2，最优价格为 1，这里的数量会是 10，但是实际上应该是 20
    // 下面加 loading 也是同理
    if (unitIsAmount && Number(amount) > 0 && bestPrice) {
      onAmountChange(amount)
    }
  }, [bestPrice])
  useUpdateEffect(() => {
    onCountChange('0')
  }, [params.advertDirectCds, params.coinId, params.areaId])
  let displayAmountOrCount = unitIsAmount ? originalAmount : originalCount

  return (
    <>
      <div
        className={classNames(styles['trade-form-wrapper'], {
          'is-buy': isBuy,
        })}
      >
        {/* 设置高度是为了不背缩放时影响整体布局 */}
        <div className="input-value-wrapper">
          <div></div>
          <div className="relative">
            <div ref={scaleRef} className={classNames('font-medium text-40xl')}>
              <div className="translate-y-2">{displayAmountOrCount}</div>
            </div>
            {params.coinId && <span className="unit font-medium">{unitIsAmount ? currencyName : symbol}</span>}
          </div>
          {params.coinId && (
            <div className="switch-wrapper text-center" onClick={onUnitIsAmountChange}>
              <Icon name="fast_trade_switch" hasTheme />
              <div className="text-xs text-text_color_02 font-medium">{unitIsAmount ? symbol : currencyName}</div>
            </div>
          )}
        </div>
        {params.coinId && (
          <div className="flex justify-center">
            <div
              className={classNames('limit-amount-text relative', {
                'is-error': (Number(count) > 0 || Number(amount) > 0) && adLimitError,
              })}
            >
              <span>{t`features_c2c_trade_fast_trade_index_22222225101673`} </span>
              {unitIsAmount
                ? `${formatCurrency(ad.minAmount)} - ${formatCurrency(ad.maxAmount)} ${currencyName}`
                : `${formatCurrency(ad.minCount)} - ${formatCurrency(ad.maxCount)} ${symbol}`}

              {!isBuy && (
                <div className="sell-action-wrapper">
                  <div
                    className={classNames({
                      'text-warning_color': balanceLimitError,
                    })}
                  >
                    <span>{t`features_trade_future_settings_margin_auto_detail_coins_5101376`}</span>{' '}
                    <span>
                      {formatCurrency(unitIsAmount ? maxSellAmount : maxSellCount)}{' '}
                      {unitIsAmount ? currencyName : symbol}
                    </span>
                  </div>

                  <div className="text-brand_color ml-3">
                    <span className="mr-3" onClick={selectAll}>
                      {t`features_c2c_trade_fast_trade_index_22222225101674`}
                    </span>
                    <Link href={getCapitalTransfer()}>
                      <span className="text-brand_color">{t`features_trade_leveraged_leveraged_trade_index_5101278`}</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <C2cFastTradeConfirmModal
          amount={amount}
          isBuy={isBuy}
          count={count}
          unitIsAmount={unitIsAmount}
          visible={confirmModalVisible}
          onVisibleChange={setConfirmModalVisible}
          ads={ads}
        />
      </div>
      <div>
        <div className="mb-4">
          <Keyboard
            max={max}
            digit={unitIsAmount ? amountDigit : countDigit}
            value={unitIsAmount ? originalAmount : originalCount}
            onChange={unitIsAmount ? createKeyBoardOnChange(onAmountChange) : createKeyBoardOnChange(onCountChange)}
          />
        </div>
        <div
          className={classNames(styles['action-btn-wrapper'], {
            'is-buy': isBuy,
          })}
        >
          <Button
            disabled={adLimitError || bestPrice.toString() === '0'}
            onClick={run}
            loading={loading || bestPriceLoading}
            block
            className={classNames('sell-or-buy-button', isBuy ? 'is-buy' : 'is-sell')}
          >
            {isBuy ? t`features_kyc_index_standards_5101189` : t`features_kyc_index_standards_5101190`}{' '}
            {params.currentCoin?.symbol}
          </Button>
        </div>
      </div>
    </>
  )
}

function useBestPrice(tradeFormHookResult: ReturnType<typeof useTradeForm>) {
  const { params } = useTradeContext()
  const [price, setPrice] = useState('0')
  const { amount, amountDigit, count, unitIsAmount } = tradeFormHookResult
  const isBuy = params.advertDirectCds?.[0] === C2cTradeAdDirectionEnum.buy
  // 单独设置 loading，是因为这个请求是 debounce 的，如果用 useRequest 的 loading，会有延迟
  const [loading, setLoading] = useState(false)
  const { run: queryBestPrice, cancel } = useRequest(
    async function () {
      if (!params.currentCoin) {
        setPrice('0')
        return
      }
      let resPrice = '0'
      if (Number(count) >= 0) {
        const res = await queryC2cFastTradeBestPriceCountGt0({
          side: isBuy ? 'BUY' : 'SELL',
          amount: Number(count) === 0 ? undefined : count,
          quoteAmount: Number(amount) === 0 ? undefined : amount,
          type: unitIsAmount ? 'amount' : 'quantity',
          coinId: params.coinId || '',
          areaId: params.areaId || ('' as any),
          isSupportOtc: true as any,
        })
        setLoading(false)
        if (!res.isOk || !res.data) {
          if (Number(count) === 0 || Number(amount) === 0) {
            setPrice('0')
          }
          if (res.code !== C2cTradeBestPriceCodeEnum.notMatched) {
            Toast(res.message!)
          }
          return
        }
        resPrice = formatNumberDecimal(res.data?.price?.toString() || '0', amountDigit)
      } else {
        const res = await queryC2cFastTradeBestPrice({
          areaId: params.areaId as string,
          paySymbol: params.currentTradeArea?.currencyName || '',
          buySymbol: params.currentCoin?.symbol || '',
        })
        if (!res.isOk || !res.data) {
          return
        }
        resPrice = res.data.rate || '0'
      }
      setPrice(formatNumberDecimal(resPrice, amountDigit))
    },
    {
      debounceWait: 500,
      manual: true,
    }
  )
  useEffect(() => {
    setLoading(true)
    cancel()
    queryBestPrice()
  }, [unitIsAmount, unitIsAmount ? amount : count, params.advertDirectCds, params.currentCoin, params.areaId])

  return [price, loading] as const
}

function BestPrice({
  tradeFormHookResult,
  bestPrice,
}: {
  tradeFormHookResult: ReturnType<typeof useTradeForm>
  bestPrice: string
}) {
  const { symbol, currencyName } = tradeFormHookResult

  return (
    <div className="text-center text-xs text-text_color_02">
      1 {symbol} ≈ {bestPrice.toString() === '0' ? '--' : formatCurrency(bestPrice)} {currencyName}
    </div>
  )
}
function ContextWrapper({ children }) {
  const [params, setParams] = useState<IQueryTradeAdListReq>({
    areaId: '',
    advertDirectCds: [C2cTradeAdDirectionEnum.buy],
  })
  const onParamsChange = (newParams: IQueryTradeAdListReq) => {
    setParams(old => ({ ...old, ...newParams }))
  }

  const contextValue = useCreation(() => {
    return { params, onParamsChange }
  }, [params, onParamsChange])
  return <tradeContext.Provider value={contextValue}>{children}</tradeContext.Provider>
}
function C2cFastTradeContent() {
  const { params, onParamsChange } = useTradeContext()
  const tabs = [
    {
      label: t`features_kyc_index_standards_5101189`,
      value: C2cTradeAdDirectionEnum.buy,
    },
    {
      label: t`features_kyc_index_standards_5101190`,
      value: C2cTradeAdDirectionEnum.sell,
    },
  ]
  const onTabChange = (value: C2cTradeAdDirectionEnum) => {
    onParamsChange({ advertDirectCds: [value] })
  }
  // 解决最佳价格和表单互相依赖的问题
  const [topBestPrice, setTopBestPrice] = useState('0')
  const ad = {
    minAmount: params.currentCoin?.minTransQuantity,
    maxAmount: params.currentCoin?.maxTransQuantity,
    // 这里这是一个占位作用，不需要根据价格实时计算
    price: topBestPrice,
    tradeTypeCd: C2cTradeFilterTradeWayEnum.inside,
  }
  const tradeFormHookResult = useTradeForm(ad as any, true)
  const [bestPrice, bestPriceLoading] = useBestPrice(tradeFormHookResult)
  useUpdateEffect(() => {
    setTopBestPrice(bestPrice)
  }, [bestPrice])
  useEffect(() => {
    if (!params.currentTradeArea) {
      return
    }
    validateTradeAreaKyc()
  }, [params.areaId])
  const windowHeight = useViewportHeight()

  return (
    <div
      className={classNames(styles['fast-trade-page-wrapper'], 'text-sm')}
      style={{
        height: `${windowHeight}px`,
      }}
    >
      <div>
        <NavBar
          hasBottomBorder={false}
          title={<SwitchTradeMode />}
          right={
            <Link href={getC2cOrdersPageRoutePath()}>
              <Icon name="assets_financial_records_black" className="text-lg" />
            </Link>
          }
        />
        <div className="flex p-4 pb-2">
          <TradeButtonRadios
            activeClassName="text-text_color_01"
            inactiveClassName="text-text_color_02"
            bothClassName="font-medium text-xl mr-6"
            value={params.advertDirectCds![0] as any}
            onChange={onTabChange}
            options={tabs}
          />
        </div>
        <div className="mb-3">
          <CoinAreaSelect />
        </div>
        {params.coinId && <BestPrice bestPrice={topBestPrice} tradeFormHookResult={tradeFormHookResult} />}
      </div>
      <TradeForm
        bestPriceLoading={bestPriceLoading}
        bestPrice={topBestPrice}
        tradeFormHookResult={tradeFormHookResult}
      />
    </div>
  )
}
function C2cFastTrade() {
  useC2cTradeBaseHooks()
  return (
    <ContextWrapper>
      <C2cFastTradeContent />
    </ContextWrapper>
  )
}

export default C2cFastTrade
