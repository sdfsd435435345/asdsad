import { C2cTradeAdDirectionEnum, C2cTradeFilterTradeWayEnum } from '@/constants/c2c/trade'
import { formatNumberDecimal } from '@/helper/decimal'
import { useSpotCoinBalance } from '@/hooks/features/assets/spot'
import { useC2cCoinBalance } from '@/hooks/features/c2c/trade'
import { useC2CCenterStore } from '@/store/c2c/center'
import { IQueryTradeAdListReq, ITradeAdItem } from '@/typings/api/c2c/trade'
import { getMyAssetsDataProps } from '@/typings/assets'
import { decimalUtils } from '@/nbit'
import { useCreation } from 'ahooks'
import { createContext, useContext, useState } from 'react'
import Decimal from 'decimal.js'
import { useSpotCoinIdFromFastPay } from '@/helper/c2c/trade'

const SafeCalcUtil = decimalUtils.SafeCalcUtil

export type ITradeContext = {
  params: IQueryTradeAdListReq
  onParamsChange: (newParams: IQueryTradeAdListReq) => void
  removeAd?: (adId: string | number) => void
}

export const tradeContext = createContext<ITradeContext>({} as any)

export function useTradeContext() {
  return useContext(tradeContext)
}
/** 获取 c2c 和交易所有账户余额 */
export function useAllSellBalance() {
  const { params } = useTradeContext()
  const inAll = (params.tradeTypeCds?.length || 0) > 1 || (params.tradeTypeCds?.length || 0) === 0
  const inOutside = inAll || params.tradeTypeCds?.includes(C2cTradeFilterTradeWayEnum.outside)
  const inInside = inAll || params.tradeTypeCds?.includes(C2cTradeFilterTradeWayEnum.inside)
  const insideMaxSellCount = useC2cCoinBalance(params.coinId)
  // 这个 id 需要拿现货的 id，所以通过 symbol 去比对
  const outsideMaxSellCount = useSpotCoinBalance(useSpotCoinIdFromFastPay(params.currentCoin?.symbol || ''))
  let maxSellCount = 0
  if (inInside) {
    maxSellCount += insideMaxSellCount
  }
  if (inOutside) {
    maxSellCount += outsideMaxSellCount
  }

  return maxSellCount
}
export function useTradeForm(ad: ITradeAdItem, defaultUnitIsAmount = false) {
  const [amount, setAmount] = useState('')
  // 原始值给 keyboard 用，否则这里就死循环无法输入（0.00）
  const [originalAmount, setOriginalAmount] = useState('')
  const [count, setCount] = useState('')
  const [originalCount, setOriginalCount] = useState('')
  const { params } = useTradeContext()
  const isBuy = params.advertDirectCds?.[0] === C2cTradeAdDirectionEnum.buy
  const amountDigit = params.currentTradeArea?.precision || 2
  const price = ad.price
  const countDigit = params.currentCoin?.trade_precision || 2
  // 金额用向上
  const amountRoundStrategy = Decimal.ROUND_CEIL
  // 数量用向下
  const countRoundStrategy = Decimal.ROUND_FLOOR
  const [unitIsAmount, setUnitIsAmount] = useState(defaultUnitIsAmount)
  const onAmountChange = (value: string) => {
    setAmount(value)
    setOriginalAmount(value)
    setOriginalCount(
      value === '' ? '' : formatNumberDecimal(SafeCalcUtil.div(value, price), countDigit, countRoundStrategy, true)
    )
    setCount(
      value === '' ? '' : formatNumberDecimal(SafeCalcUtil.div(value, price), countDigit, countRoundStrategy, true)
    )
  }
  const onCountChange = (value: string) => {
    setCount(value)
    setOriginalCount(value)
    setOriginalAmount(
      value === '' ? '' : formatNumberDecimal(SafeCalcUtil.mul(value, price), amountDigit, amountRoundStrategy, true)
    )
    setAmount(value === '' ? '' : formatNumberDecimal(SafeCalcUtil.mul(value, price), amountDigit, amountRoundStrategy))
  }
  const insideMaxSellCount = useC2cCoinBalance(params.coinId)
  const outsideMaxSellCount = useSpotCoinBalance(params.coinId)
  const maxSellCount = ad.tradeTypeCd === C2cTradeFilterTradeWayEnum.inside ? insideMaxSellCount : outsideMaxSellCount
  const maxSellAmount = Number(
    formatNumberDecimal(SafeCalcUtil.mul(maxSellCount, price), amountDigit, amountRoundStrategy)
  )
  const selectAll = () => {
    setCount(maxSellCount.toString())
    setOriginalCount(maxSellCount.toString())
    setAmount(maxSellAmount.toString())
    setOriginalAmount(maxSellAmount.toString())
  }
  const maxAmount = formatNumberDecimal(SafeCalcUtil.mul(ad.maxAmount, price), amountDigit, amountRoundStrategy)
  const minAmount = formatNumberDecimal(SafeCalcUtil.mul(ad.minAmount, price), amountDigit, amountRoundStrategy)
  const adLimitError =
    amount !== '' &&
    count !== '' &&
    ((unitIsAmount && (Number(amount) > Number(maxAmount) || Number(amount) < Number(minAmount))) ||
      (!unitIsAmount && (Number(count) > ad.maxAmount || Number(count) < ad.minAmount)))
  const balanceLimitError = isBuy ? false : Number(amount) > maxSellAmount || Number(count) > maxSellCount
  const kycLimitError = false
  const symbol = params.currentCoin?.coinName || ''
  const currencyName = params.currentTradeArea?.currencyName || ''
  const currency = params.currentTradeArea?.currencySymbol || ''

  return {
    onCountChange,
    onAmountChange,
    amount,
    count,
    unitIsAmount,
    setUnitIsAmount,
    selectAll,
    originalAmount,
    originalCount,
    balanceLimitError,
    adLimitError,
    kycLimitError,
    maxSellCount,
    maxSellAmount,
    isBuy,
    symbol,
    currency,
    currencyName,
    amountDigit,
    countDigit,
    maxAmount,
    minAmount,
    amountRoundStrategy,
    countRoundStrategy,
  }
}
