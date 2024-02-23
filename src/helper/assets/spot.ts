/**
 * 资产
 */
import { getWithdrawAddress, postWithdrawAddressVerify } from '@/apis/assets/withdraw'
import { baseAssetsStore } from '@/store/assets/spot'
import { basePersonalCenterStore } from '@/store/user/personal-center'
import { baseMarketStore } from '@/store/market'
import { Toast } from 'react-vant'
import { decimalUtils } from '@/nbit'
import { formatCurrency, formatNumberDecimal } from '@/helper/decimal'
import { getCoinRate, getQueryCoinPageList, getQuerySubCoinList } from '@/apis/assets/common'
import {
  AssetsQueryCoinPageListCoinListResp,
  QuerySubCoinListSubCoinListResp,
  ICoinBalanceDataList,
  CoinRateResp,
} from '@/typings/api/assets/assets'
import { TradeModeEnum } from '@/constants/trade'
import { getIsLogin } from '@/helper/auth'
import { getMyAssetsDataProps, IUserAssetsSpot } from '@/typings/assets'
import { getCoinBalance } from '@/apis/assets/coin'
import { AssetsRouteEnum, CurrencySymbolEnum } from '@/constants/assets'
import { baseAssetsFuturesStore } from '@/store/assets/futures'
import Decimal from 'decimal.js'
import { getUserAssetsFutures } from './futures'
import { onGetAssetsCoinList, onGetAssetsOverview, onGetCoinOverview } from './overview'

const SafeCalcUtil = decimalUtils.SafeCalcUtil

/** 法币折算基础币 */
export enum DefaultRateBaseCoin {
  /** 默认 USDT */
  symbol = 'USDT',
  usdtRate = '1',
}

type RateFilterReq = {
  /** 币种数量 */
  amount: string | number
  /** 币种代码 */
  symbol?: string
  /** 换算后金额展示单位 */
  unit?: string
  /** 是否展示换算后金额的单位，默认展示金额单位 */
  showUnit?: boolean
  /** 汇率换算的规则，默认跟随用户设置 */
  rate?: string
  /** 法币精度 默认为 2 */
  precision?: number
  isFormat?: boolean
  /** 法币 symbol */
  currencySymbol?: string
  /** 默认空值显示文案 */
  defaultEmptyText?: string
  /** 折算 symbol(商户设置的法币 symbol) */
  calcSymbol?: string
}

/**
 * 根据相应币种进行汇率换算
 * @returns 汇率换算后的金额
 */
export const rateFilter = (params: RateFilterReq) => {
  const {
    amount,
    symbol = '',
    unit = 'symbol',
    showUnit = true,
    rate = '',
    precision = 2,
    isFormat = false,
    defaultEmptyText = '--',
  } = params

  const { coinRate: { coinRate = [], legalCurrencyRate = {} } = {} } = baseAssetsStore.getState().assetsModule
  const { currencySymbol, currencyEnName } = basePersonalCenterStore.getState().fiatCurrencyData

  if (!amount) return defaultEmptyText

  let newAssets: string | number = amount
  const targetCoin: any = coinRate.find((item: any) => {
    return symbol?.toUpperCase() === (item.symbol || '').toUpperCase()
  })

  if (targetCoin) {
    // 得到当前币种的 usdt 汇率下金额
    newAssets = `${SafeCalcUtil.mul(amount, targetCoin.usdtRate)}`
  }

  // 用户设置的汇率
  if (!rate) {
    newAssets = `${SafeCalcUtil.mul(newAssets, legalCurrencyRate[currencyEnName?.toUpperCase()])}`
  } else {
    newAssets = `${SafeCalcUtil.mul(newAssets, legalCurrencyRate[rate?.toUpperCase()])}`
  }

  if (showUnit) {
    // 金额格式化
    newAssets = formatCurrency(newAssets, precision)
    if (unit === CurrencySymbolEnum.code) {
      // 货币简称在后面
      newAssets = `${newAssets} ${currencyEnName}`
    } else {
      // 货币符号在前面
      newAssets = `${currencySymbol}${newAssets}`
    }
  } else {
    if (isFormat) {
      // 金额格式化
      newAssets = formatCurrency(newAssets, precision)
    }
  }

  return newAssets
}

/**
 * 合约法币资产汇率换算
 * 计算逻辑：合约返回 USD，如果用户设置 USD 直接展示，如果用户设置 CNY，需要转换成 CNY
 * 非 USD 的计算公式：USD 数量 / USDT 汇率 * 用户设置的汇率 -- 先将 USD 数量转成 USDT 的数量，再通过 USDT 汇率折合成对应的法币金额
 * @param amount 合约数量 - 单位 USD
 * @param unit 货币单位：CurrencySymbolEnum.symbol 货币符号 (例：$)，CurrencySymbolEnum.code：货币代码（例:USD），默认货币符号
 * @param symbol 币种代码
 * @param showUnit 是否显示货币单位，默认显示
 * @param isFormat 是否千分位格式化，默认格式化，只有 showUnit 为 false 时生效
 * @param precision 法币精度
 * @param calcSymbol 计算汇率的币种代码，不传时默认取用户设置的法币
 * @returns 汇率换算后的金额
 */
export const rateFilterFutures = (params: RateFilterReq) => {
  const {
    amount = 0,
    unit = CurrencySymbolEnum.symbol,
    symbol,
    showUnit = true,
    isFormat = true,
    precision = 2,
    calcSymbol = '',
  } = params
  let newAssets: string | number | Decimal = amount
  const assetsFuturesStore = baseAssetsFuturesStore.getState() // 获取商户设置的法币信息
  const {
    futuresCurrencySettings: { currencySymbol: currencySymbolFutures, offset },
  } = { ...assetsFuturesStore } // 获取用户设置的法币信息
  const { currencySymbol, currencyEnName } = basePersonalCenterStore.getState().fiatCurrencyData // 如果用户设置的法币等于商户设置的法币，直接返回数值

  if ((symbol || currencySymbolFutures) === (calcSymbol || currencyEnName)) {
    newAssets = amount
  } else {
    const { coinRate: { coinRate = [], legalCurrencyRate = {} } = {} } =
      baseAssetsStore.getState().assetsModule /** 用户设置的法币汇率 */
    const currencyRate = legalCurrencyRate[calcSymbol || currencyEnName?.toUpperCase()] /** USDT 币种汇率 */
    const usdtRateInfo: any = coinRate.find((item: any) => {
      return (item?.symbol || '').toUpperCase() === DefaultRateBaseCoin.symbol?.toUpperCase()
    }) // 计算公式：USD 数量 / USDT 汇率 * 用户设置的汇率

    if (usdtRateInfo && currencyRate) {
      newAssets = SafeCalcUtil.div(amount, usdtRateInfo.usdtRate)
      newAssets = SafeCalcUtil.mul(newAssets, currencyRate)
    }
  }

  if (isNaN(Number(newAssets))) {
    newAssets = 0
  }

  if (showUnit && isFormat) {
    // 金额格式化
    newAssets = formatCurrency(newAssets, precision)
    if (unit === CurrencySymbolEnum.code) {
      // 货币简称在后面
      newAssets = `${newAssets} ${currencyEnName}`
    } else {
      // 货币符号在前面
      newAssets = `${currencySymbol}${newAssets}`
    }
  } else {
    if (isFormat) {
      // 不展示单位，但是需要千分位格式化
      newAssets = formatCurrency(newAssets, precision)
    }
  }

  return `${newAssets}`
}

/**
 * 法币金额换算成币种数量
 * 法币数量 / 当前法币汇率 / 当前币种汇率
 * @param amount 法币数量
 * @param currencySymbol 法币
 * @param symbol 币种
 */
export const rateFilterCoinQuantity = (params: RateFilterReq) => {
  const { amount, currencySymbol = 'USD', symbol } = params || {}
  const { coinRate: { legalCurrencyRate = {}, coinRate = [] } = {} } = baseAssetsStore.getState().assetsModule

  if (!amount || !symbol) return 0

  const rate = legalCurrencyRate[currencySymbol]
  const coinRateInfo = coinRate.find((item: CoinRateResp) => item?.symbol === symbol) || ({} as CoinRateResp)

  return +SafeCalcUtil.div(SafeCalcUtil.div(amount, rate), coinRateInfo?.usdtRate) || 0
}

/**
 * 获取相应币种精度
 * @params symbol
 * @return 当前币种精度，默认为 2 位
 */
export const getCoinPrecision = (symbol?: string) => {
  const { coinRate: { coinRate = [] } = {} } = baseAssetsStore.getState().assetsModule

  if (!symbol || !coinRate || coinRate.length === 0) {
    return 2
  }

  const targetCoin: any = coinRate.find((item: any) => {
    return symbol.toUpperCase() === (item.symbol || '').toUpperCase()
  })

  return targetCoin?.coinPrecision || 2
}

/**
 * 提币地址列表
 */
export const onGetWithdrawAddress = async () => {
  const res = await getWithdrawAddress({})
  const { isOk, data, message = '' } = res || {}

  if (!isOk) {
    Toast(message)
    return []
  }

  return data?.addressList || []
}

/**
 * 提币地址校验
 */
export const onVerifyAddress = async (symbol: string, address: string) => {
  const res = await postWithdrawAddressVerify({ symbol, address })

  const { isOk, data } = res || {}
  if (!isOk) {
    return false
  }

  return data?.isSuccess || false
}

/**
 * 获取所有主币列表
 */
export const getAllCoinList = async (type: number) => {
  const { coinList = [] } = baseAssetsStore.getState().assetsModule

  let nList: AssetsQueryCoinPageListCoinListResp[] = coinList
  if (!nList || nList.length === 0) {
    const res = await getQueryCoinPageList({ type })
    const { isOk, data } = res || {}

    if (isOk && data) nList = data.coinList
  }

  return nList
}

/**
 * 根据主币 ID 获取主网列表
 */
export const getSubCoinList = async (coinId: string) => {
  let nList: QuerySubCoinListSubCoinListResp[] = []
  const res = await getQuerySubCoinList({ coinId })
  const { isOk, data } = res || {}

  if (isOk && data) nList = data.subCoinList

  return nList
}

/** 获取现货资产 - 交易页面用 */
const getUserAssetsSpot = async (options: IUserAssetsSpot) => {
  // TODO 暂时写现货的币种信息，后面要通过参数判断取现货还是合约的币种信息
  const currentCoin = baseMarketStore.getState().currentCoin
  const { buyCoinId, sellCoinId } = currentCoin // options
  // yapi 要求 coinId 入参类型为数组，get 请求数组会有问题，和后端约定转成字符串类型
  const params = { coinId: `${[buyCoinId, sellCoinId]}` }
  const res = await getCoinBalance(params)
  const { isOk, data } = res || {}

  // 接口异常，或未返回数据时
  if (!isOk || !data || !data.list || data.list.length < 2) {
    return {
      buyCoin: { totalAmount: 0, lockAmount: 0, availableAmount: 0, coinName: '', symbol: '', coinId: buyCoinId },
      sellCoin: { totalAmount: 0, lockAmount: 0, availableAmount: 0, coinName: '', symbol: '', coinId: sellCoinId },
    }
  }

  const dataList: ICoinBalanceDataList[] = data.list
  const buyCoinRes = dataList.filter(item => {
    return +item.coinId === +buyCoinId
  })[0]
  const sellCoinRes = dataList.filter(item => {
    return +item.coinId === +sellCoinId
  })[0]
  return {
    buyCoin: {
      ...buyCoinRes,
      totalAmount: Number(buyCoinRes.totalAmount),
      availableAmount: Number(buyCoinRes.availableAmount),
      lockAmount: Number(buyCoinRes.lockAmount),
    },
    sellCoin: {
      ...sellCoinRes,
      totalAmount: Number(sellCoinRes.totalAmount),
      availableAmount: Number(sellCoinRes.availableAmount),
      lockAmount: Number(sellCoinRes.lockAmount),
    },
  }
}

/**
 * 获取我的资产数据 - 现货、杠杆、合约的资产信息 - 主要用于交易页面
 * @param options
 * @returns
 */
export const getMyAssetsData = async (options: getMyAssetsDataProps) => {
  const isLogin = getIsLogin()
  if (!isLogin) return

  const { accountType, paramsCoin, onSuccess } = options
  const assetsStore = baseAssetsStore.getState()
  const { updateUserAssetsFutures } = baseAssetsFuturesStore.getState()

  /** 查询并保存资产数据到 store */
  let userAssets
  if (accountType === TradeModeEnum.spot && paramsCoin) {
    // 现货资产
    userAssets = await getUserAssetsSpot(paramsCoin)
    userAssets && assetsStore.updateUserAssetsSpot(userAssets)
  } else if (accountType === TradeModeEnum.futures) {
    // 合约资产
    userAssets = await getUserAssetsFutures()
    userAssets && updateUserAssetsFutures(userAssets)
  }

  // 是否需要回调
  onSuccess && onSuccess(userAssets)
  return userAssets
}

/**
 * 获取币种汇率列表
 */
export const getCoinRateData = async () => {
  const { assetsModule } = baseAssetsStore.getState()

  const res = await getCoinRate({})
  const { isOk, data } = res || {}

  if (!isOk || !data) {
    return
  }

  assetsModule.updateAssetsModule({ coinRate: data })
  return data
}

/**
 * 根据 ws 推送更新币种列表数据
 * @params params
 */
export const onUpdateCoinList = async (params: any, isUpdate = true) => {
  const { assetsModule } = baseAssetsStore.getState()

  if (!assetsModule.coinAssetsList || assetsModule.coinAssetsList.length === 0) await onGetAssetsCoinList()

  if (!params) {
    return
  }

  const { coinId, balance, locked, total, isRefresh } = params
  const newList =
    assetsModule.coinAssetsList &&
    assetsModule.coinAssetsList
      .map((item: any) => {
        if (`${Number(coinId)}` === item.coinId) {
          item = {
            ...item,
            availableAmount: balance,
            lockAmount: locked,
            totalAmount: total,
            usdBalance: rateFilter({ amount: total, showUnit: false, rate: 'usd' }),
          }
        }

        return item
      })
      .sort(function (a, b) {
        return (b.usdBalance as unknown as number) - (a.usdBalance as unknown as number)
      })

  assetsModule.updateAssetsModule({ coinAssetsList: newList })
  if (isRefresh && isUpdate) {
    assetsModule.activeTab === AssetsRouteEnum.overview && onGetAssetsOverview()
    assetsModule.activeTab === AssetsRouteEnum.coins && onGetCoinOverview()
  }
}

/**
 * 数组排序
 */
export function onSortArray(x, y) {
  if (
    x.coinName?.toUpperCase() < y.coinName?.toUpperCase() ||
    `${x?.baseSymbolName}/${x?.quoteSymbolName}`.toUpperCase() <
      `${y?.baseSymbolName}/${y?.quoteSymbolName}`.toUpperCase()
  ) {
    return -1
  }

  if (
    x.coinName?.toUpperCase() > y.coinName?.toUpperCase() ||
    `${x?.baseSymbolName}/${x?.quoteSymbolName}`.toUpperCase() >
      `${y?.baseSymbolName}/${y?.quoteSymbolName}`.toUpperCase()
  ) {
    return 1
  }

  return 0
}

/**
 * 去掉小数点后面多余的 0
 * @param val
 */
export const removeDecimalZero = val => {
  const regexp = /(?:\.0*|(\.\d+?)0+)$/
  val = `${val}`.replace(regexp, '$1')
  return val
}

/**
 * 格式化币种数量 - 处理币种精度，不补零
 * @param symbol 币种符号
 * @param amount 币种数量
 * @param isFormat 是否格式化位千分位展示
 * @returns
 */

export const formatCoinAmount = (symbol, amount, isFormat = true) => {
  if (!amount || !symbol) return '0'
  amount = removeDecimalZero(amount)
  if (isFormat) {
    return formatCurrency(amount, getCoinPrecision(symbol), false)
  }
  return `${formatNumberDecimal(amount, getCoinPrecision(symbol))}`
}

/** 去除重复的数据，交易页下单成功 ws 回调会有多条数据且有重复的情况 */
export function removeRepeatData(data) {
  if (!Array.isArray(data)) {
    return data
  }
  for (let i = 0; i < data.length; i += 1) {
    for (let j = i + 1; j < data.length; ) {
      if (data[i].coinId === data[j].coinId) {
        data.splice(j, 1)
      } else {
        j += 1
      }
    }
  }
  return data
}
