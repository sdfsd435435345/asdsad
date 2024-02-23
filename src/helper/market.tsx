import { decimalUtils } from '@/nbit'
// import { KLineChartData, KLineChartType } from '@nbit/chart-utils'
import { CommonTradePairDataWithMarketCap, TradePairWithCoinInfoType } from '@/typings/api/market/market-list'
import { rateFilter } from '@/helper/assets/spot'
import { getIsLogin } from '@/helper/auth'
import { baseMarketStore } from '@/store/market'
import { IncreaseTag } from '@/nbit/react'
import { link } from '@/helper/link'
import { ICommonTradePairType } from '@/typings/api/market'
import { baseMarketListStore } from '@/store/market/market-list'
import {
  getContractMarketDetailPagePath,
  getFutureTradePagePath,
  getMarketDetailPagePath,
  getTradePagePath,
} from '@/helper/route'
import { I18nsEnum } from '@/constants/i18n'
import styles from '@/features/market/market-quatation/index.module.css'
import classNames from 'classnames'
import { baseCommonStore } from '@/store/common'
import { baseContractMarketStore } from '@/store/market/contract'
import { YapiGetV1PerpetualTradePairListData } from '@/typings/yapi/PerpetualTradePairListV1GetApi'
import { getFuturesTypeNameByType, MarketListFuturesEnum } from '@/constants/market/market-list/futures-module'
import { GlobalSearchTypesMappingEnum, MarketLisModulesEnum } from '@/constants/market/market-list/market-module'
import { checkTradePairType } from '@/helper/market/market-list'
import { initCurrentCoin, initDescribe } from '@/constants/market'
import { basePersonalCenterStore } from '@/store/user/personal-center'
import { memoize } from 'lodash'
import { t } from '@lingui/macro'
import { formatNumberDecimal } from './decimal'
import { formatDate } from './date'
import { getBusinessName } from './common'
import { checkIntlSupport, formatterCurrency } from './format'

// /** 项目里先写工具类，成熟后抽离到 toolbox 仓库 */
// marketUtils.getColorClassByPrice
export const up_color_class = 'text-buy_up_color'
export const down_color_class = 'text-sell_down_color'

const SafeCalcUtil = decimalUtils.SafeCalcUtil

/**
 * 计算两个值相对涨跌
 * @param price 当前价格
 * @param target 目标价格，可空，如果不传就是和 0 进行比较
 * @returns 'text-buy_up_color' | 'text-sell_down_color' | ''
 */
function getColorClassByPrice(price?: number | string, target: number | string = 0): string {
  if (!price || price === '--' || (!target && target !== 0) || target === '--') {
    return ''
  }
  const _price = decimalUtils.getSafeDecimal(price)
  const _targetPrice = decimalUtils.getSafeDecimal(target)
  if (_price.gt(_targetPrice)) {
    return up_color_class
  } else if (_price.eq(_targetPrice)) {
    return ''
  } else {
    return down_color_class
  }
}

/** 当前行情币对，ws 传给后端 */
const getCurrentQuoteApiCoin = (sellSymbol: string, buySymbol: string): string => {
  return `${sellSymbol}_${buySymbol}`.toLowerCase()
}

/** k 线 url */
const generateKlineUrl = (sellSymbol: string, buySymbol: string): string => {
  return `${sellSymbol}_${buySymbol}`
}

// 当前行情币对 页面展示
const getCurrentQuoteShowCoin = (
  sellSymbol: string,
  buySymbol: string,
  hasColorContrast = false
): string | JSX.Element => {
  return (
    <span className={styles['market-common']}>
      <span className="pair-name">
        <span className="base-symbol-name">{sellSymbol}</span>
        <span className={classNames('quote-symbol-name', { 'text-text_color_03': hasColorContrast })}>
          /{buySymbol}
        </span>
      </span>
    </span>
  )
}

/**
 * 获取币对的统一展示名称
 * @param item 币对对象
 * @param hasColorContrast
 * @param withRedirection 点击是否跳转，默认跳转
 * @param from 用于判断跳转的路径
 * @returns
 */
export const getQuoteDisplayName = (
  item: any,
  hasColorContrast = false,
  withRedirection = true,
  from: 'kline' | 'trade' = 'kline',
  coinType?,
  forTradeSearch?
): string | JSX.Element => {
  const type = checkTradePairType(item)

  // 通过传入的币对 typeInd 字段来判别
  switch (type) {
    case GlobalSearchTypesMappingEnum.futures: {
      const _item = item as YapiGetV1PerpetualTradePairListData
      const quoteType = getFuturesTypeNameByType(_item)

      return (
        <span className={`cursor-pointer quote-display-wrapper-futures`}>
          <span
            onClick={e => {
              // e.stopPropagation()
              withRedirection && onTradePairClickFuturesRedirect(_item, from)
            }}
            className={classNames('flex-inline', 'items-center', 'whitespace-nowrap', {
              flex: true,
            })}
          >
            {forTradeSearch ? (
              <span className="flex flex-col">
                <span className="pair-name-futures">
                  <span className="base-symbol-name">{_item.baseSymbolName}</span>
                  <span className="quote-symbol-name">{_item.quoteSymbolName}</span>
                </span>
                <span className="text-text_color_02 text-xs">{quoteType}</span>
              </span>
            ) : (
              <>
                <span className="pair-name-futures">
                  <span className="base-symbol-name">{_item.baseSymbolName}</span>
                  <span className="quote-symbol-name">{_item.quoteSymbolName}</span>
                </span>
                <span
                  className={classNames('quote-badge', {
                    'ml-2': true,
                  })}
                >
                  {quoteType}
                </span>
              </>
            )}
          </span>
        </span>
      )
    }

    default:
      return (
        <span
          className="cursor-pointer quote-display-wrapper-spot"
          onClick={e => {
            // e.stopPropagation()
            withRedirection && onTradePairClickRedirect(item, from)
          }}
        >
          {getCurrentQuoteShowCoin(item.baseSymbolName, item.quoteSymbolName, hasColorContrast)}
        </span>
      )
  }
}

/** 获取本地价格 */
const getLocaleCurrency = (currency: string, symbol: string): string => {
  return `≈${symbol}${currency}`
}

/** 多语言映射到 */
const translateLocaleToTule = (locale: string): string => {
  return locale.replace('-', '_')
}

/** 判断是否包含用户收藏币种 */
const includeCoinId = (favoriteList: Array<number>, tradeId: number): boolean => {
  return favoriteList.indexOf(tradeId) !== -1
}

const sortMarketChartData = (data: Array<any>) => {
  const sortData = data.sort((x, y) => {
    return x.time - y.time
  })
  const timeList: Array<number> = []
  const resultList: Array<any> = []
  sortData.forEach(item => {
    if (timeList.indexOf(item.time) === -1) {
      timeList.push(item.time)
      resultList.push(item)
    }
  })
  return resultList
}

export {
  getCurrentQuoteApiCoin,
  getLocaleCurrency,
  getCurrentQuoteShowCoin,
  translateLocaleToTule,
  includeCoinId,
  sortMarketChartData,
  generateKlineUrl,
}
/** 合约实时成交转换为现货相同的格式 */
// export function futureTradeListItemToSpot(item: any[]): TradeDetailListPb_TradeDetail {
export function futureTradeListItemToSpot(item: any[]): any {
  return {
    tradeId: item[4],
    ts: item[3],
    direction: item[2],
    amount: item[1],
    price: item[0],
  }
}

/** 合约实时成交 size */
export const ContractOrderbookSize = 30

/** 计算币种概况相关价格 */

export const calcCoinDescribePrice = (price, last) => {
  return formatNumberDecimal(SafeCalcUtil.mul(price, last), 2)
}

export const calcCoinDescribeTime = (price, time) => {
  return `${price}(${formatDate(time, 'YYYY/MM/DD')})`
}

/**
 *
 *  根据语言设置，加单位后缀来简写数字
 *  en-US：K M B..., 比如 1000 -> 1K
 *  zh-CN：万 亿 万亿...，比如 10000 -> 1 万
 * @param withCurrencyPrefix 是否加法币前缀，由用户币种偏好来定
 * @param precision 简写之后的保留几位小数，四舍五入，默认两位小数
 * @param {number} [threshold] - 阈值，超过某个特定数值才会进行处理
 */
export const convertToMillions = (
  val: number | string,
  withCurrencyPrefix = true,
  precision = 2,
  threshold?: number
) => {
  if (isNaN(val as any)) return val
  if (threshold && +val < threshold) return val
  const locale = baseCommonStore.getState().locale

  const str = checkIntlSupport()
    ? getFormatterByCurrencySymbol({ lang: locale, precision }).format(Number(val || 0))
    : formatterCurrency(Number(val || 0), locale, precision)

  const [integers = '', digitsWithUnit = ''] = str.split('.')
  // 考虑多个字符的单位，如万亿，使用 regex 抓取
  const [_, digits = '', resolvedUnit = ''] = Array.from(digitsWithUnit.match(/^(\d*)(.*)$/) || [])
  // 多保留一位小数，下一步四舍五入
  const resolvedDigits = digits.slice(0, precision + 1)
  const resolvedNum = Number(`${integers}${resolvedDigits ? `.${resolvedDigits}` : ''}`).toFixed(precision)
  const resolvedVal = resolvedUnit ? `${resolvedNum} ${resolvedUnit}` : resolvedNum

  // 单位按照用户偏好设置
  const { currencySymbol } = basePersonalCenterStore.getState().fiatCurrencyData

  return withCurrencyPrefix ? `${currencySymbol}${resolvedVal}` : `${resolvedVal}`
}

export const defaultBaseCurrency = price => `$ ${price}`

/**
 * 切换价格的单位，后端返回数据以美元为单位
 * 如果用户登陆，按照用户的偏好来进行设置
 * @ref 汇率接口：yapi.admin-devops.com/project/44/interface/api/2600
 */
export const convertPriceToUserPreferedCurrency = (price, info: TradePairWithCoinInfoType) => {
  if (!getIsLogin()) return defaultBaseCurrency(price)

  return rateFilter({ amount: price, showUnit: true, symbol: info.quoteSymbolName })
}

export const onTradePairClickRedirectCommon = (item: any, from?: 'kline' | 'trade') => {
  const type = checkTradePairType(item)

  switch (type) {
    case GlobalSearchTypesMappingEnum.futures: {
      return onTradePairClickFuturesRedirect(item, from || 'kline')
    }

    default: {
      return onTradePairClickRedirect(item, from || 'kline')
    }
  }
}

export const onTradePairClickRedirect = (item?: ICommonTradePairType, from?: 'kline' | 'trade') => {
  if (item && item.baseSymbolName && item.quoteSymbolName) {
    const store = baseMarketStore.getState()
    const marketListStore = baseMarketListStore.getState()
    if (item.id === store.currentCoin.id) {
      return
    }
    marketListStore.resetSearchState()
    store.updateCurrentCoin(initCurrentCoin)
    store.updateCurrentCoinDescribe(initDescribe)
    if (from === 'kline') {
      link(getMarketDetailPagePath(item))
    } else {
      store.updateCurrentCoin(item)
      link(getTradePagePath(item))
    }
  }
}

export const onTradePairClickFuturesRedirect = (
  item?: ICommonTradePairType | YapiGetV1PerpetualTradePairListData,
  from?: 'kline' | 'trade'
) => {
  if (item && item.baseSymbolName && item.quoteSymbolName) {
    const store = baseContractMarketStore.getState()
    const marketListStore = baseMarketListStore.getState().futuresMarketsTradeModule
    if (item.id === store.currentCoin.id) {
      return
    }
    marketListStore.resetSearchState()
    store.updateCurrentCoin(initCurrentCoin)
    store.updateCurrentCoinDescribe(initDescribe)
    if (from === 'kline') {
      link(getContractMarketDetailPagePath(item))
    } else {
      store.updateCurrentCoin(item)
      link(getFutureTradePagePath(item))
    }
  }
}

/**
  格式化法币字符串,如:$100.00,¥0.00123
  精度取值规则:
  -整数位>0时,保留2位小数.
  -小数位第一位>0时,保留2位小数位;
  -小数位第一位=0时,往后判断;保留位数为n+3(n:0的个数);
  -最多保留6位小数
*/
export function getPrecisionByRule(value) {
  // Convert the value to a number and handle NaN or invalid inputs
  const numberValue = parseFloat(value)
  if (isNaN(numberValue) || !isFinite(numberValue)) {
    return 0
  }

  // Check if the value is zero
  if (numberValue === 0) {
    return 2
  }

  // Convert the value to a string for easier manipulation
  const valueStr = numberValue.toString()

  // Split the value into integer and decimal parts
  const [integerPart, decimalPart] = valueStr.split('.')

  // Check if the integer part is greater than 0
  if (parseInt(integerPart) > 0) {
    // Keep 2 decimal places
    return 2
  } else {
    // Check if the first decimal place is greater than 0
    if (parseInt(decimalPart[0]) > 0) {
      // Keep 2 decimal places
      return 2
    } else {
      // Count the number of zeros after the first decimal place
      let countZeros = 0
      for (let i = 0; i < decimalPart.length; i += 1) {
        if (decimalPart[i] === '0') {
          countZeros += 1
        } else {
          break
        }
      }

      const targetPrecision = countZeros + 3
      // Determine the precision based on the count of zeros
      const precision = Math.min(Math.min(targetPrecision, decimalPart.length), 6)

      // Keep the desired precision
      return precision
    }
  }
}

/**
 * 根据用户的币种偏好来获取数字多语言格式化实例
 * @param lang 语言偏好
 * @param precision 保留精度
 * @ref NumberFormat: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
 * @ref 产品数值规范 https://products.admin-devops.com/result/nb%20global%20app/#g=1&p=%E6%95%B0%E5%80%BC%E8%A7%84%E8%8C%83
 */
export const getFormatterByCurrencySymbol = memoize(({ lang, precision }: { lang: I18nsEnum; precision: number }) => {
  let formatter: Intl.NumberFormat
  const totalLength = precision + 4

  const commonOptions: any = {
    notation: 'compact',
    // minimumFractionDigits，maximumFractionDigits 在部分电脑 safari 无法保留制定精度
    minimumSignificantDigits: totalLength,
    maximumSignificantDigits: totalLength,
  }

  switch (lang) {
    case I18nsEnum['zh-CN']:
      formatter = new Intl.NumberFormat(lang, {
        ...commonOptions,
      })
      break

    case I18nsEnum['zh-HK']:
      formatter = new Intl.NumberFormat('zh-Hant', {
        ...commonOptions,
      })
      break

    default:
      formatter = new Intl.NumberFormat(lang, {
        ...commonOptions,
      })
      break
  }

  return formatter
})

export function formatTradePair(item: CommonTradePairDataWithMarketCap | any) {
  const priceOffset = Number(item.priceOffset || baseMarketStore.getState().currentCoin.priceOffset || 4)
  const amountOffset = Number(item.amountOffset || baseMarketStore.getState().currentCoin.amountOffset || 4)

  return {
    chg() {
      if (Number(item.chg) === 0) return <span>0.00%</span>
      return <IncreaseTag digits={2} delZero={false} value={item.chg} hasPostfix hasPrefix defaultEmptyText={'--'} />
    },
    chgWithoutColor() {
      if (Number(item.chg) === 0) return <span>0.00%</span>
      return (
        <IncreaseTag
          digits={2}
          hasColor={false}
          delZero={false}
          value={item.chg}
          hasPostfix
          hasPrefix
          defaultEmptyText={'--'}
        />
      )
    },
    last() {
      return (
        <IncreaseTag
          value={item.last}
          delZero={false}
          digits={priceOffset}
          kSign
          defaultEmptyText={'--'}
          hasPrefix={false}
          hasColor={false}
        />
      )
    },
    lastByUserPreference() {
      return (
        <>
          {rateFilter({
            amount: item.last,
            showUnit: true,
            symbol: item.symbolName,
            precision: getPrecisionByRule(item.last),
          })}
        </>
      )
    },
    lastWithDiffTarget(prev?: any) {
      return (
        <IncreaseTag
          value={item.last}
          delZero={false}
          digits={priceOffset}
          kSign
          defaultEmptyText={'--'}
          hasPrefix={false}
          hasColor
          diffTarget={item.lastPrev || prev || item.last}
        />
      )
    },
    lastWithBase() {
      return (
        <>
          <span>{formatTradePair(item).last()} /</span>
          <span className="text-text_color_02">{formatTradePair(item).lastByUserPreference()}</span>
        </>
      )
    },
    marketCap() {
      return (
        <>
          {convertToMillions(
            Number(
              rateFilter({
                amount: formatNumberDecimal(
                  item.calMarketCap || SafeCalcUtil.mul(item.last, item.circulatingSupply),
                  priceOffset
                ),
                showUnit: false,
                symbol: item.symbolName,
              })
            )
          )}
        </>
      )
    },
    // 成交量 简写 无前缀
    volumneWithMillionUnit() {
      return convertToMillions(item.quoteVolume, false)
    },

    // 成交额 / 成交量 不缩略
    volume(val: string) {
      return (
        <IncreaseTag
          value={val}
          digits={amountOffset}
          delZero={false}
          kSign
          defaultEmptyText={'--'}
          hasPrefix={false}
          hasColor={false}
        />
      )
    },
  }
}

/** 合约 code */
export const getCurrentContractCoin = (code: string): string => {
  return code.toLowerCase().replace('_', '')
}

export function generateMarketDefaultSeoMeta(
  // TODO commTitle 备用，后面扩张
  keys: {
    title: string
    description?: string
    commTitle?: string
  },
  values?: any
) {
  const businessName = getBusinessName()
  if (!values) {
    values = { businessName }
  } else {
    values.businessName = businessName
  }
  return {
    title: keys.title,
    description: t({
      id: keys?.description || `modules_market_activity_index_page_umxmniyicf`,
      values,
    }),
  }
}
