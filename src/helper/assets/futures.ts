/**
 * 资产 - 合约
 */

import {
  getCurrencySettings,
  getPerpetualMarginSettings,
  postGroupExistEntrustOrder,
} from '@/apis/assets/futures/common'
import { postPerpetualGroupCancelOrder } from '@/apis/assets/futures/overview'
import {
  getGroupPurchasingPower,
  getPerpetualAssets,
  getPerpetualPositionCurrentList,
  postPerpetualPositionCancelEntrustOrder,
  postPerpetualPositionExistEntrustOrder,
} from '@/apis/assets/futures/position'
import { getPerpetualTradePairDetail } from '@/apis/future/common'
import { getPerpetualMarketRestV1MarketDepthApiRequest } from '@/apis/market'
import {
  FuturesDetailsPositionTypeEnum,
  MarginAssetTypeEnum,
  PerpetualMigrateRateTypeEnum,
} from '@/constants/assets/futures'
import { PerpetualIndexPrice } from '@/plugins/ws/protobuf/ts/proto/PerpetualIndexPrice'
import { baseAssetsFuturesStore } from '@/store/assets/futures'
import { baseAssetsStore } from '@/store/assets/spot'
import { CoinRateResp } from '@/typings/api/assets/assets'
import { DetailMarginListChild, MarginSettingsList, PositionList } from '@/typings/api/assets/futures'
import { IPositionGroupList } from '@/typings/assets'
import { t } from '@lingui/macro'
import { decimalUtils } from '@/nbit'
import { Toast } from 'react-vant'
import { WsBizEnum } from '@/constants/ws'
import { getIsLogin } from '../auth'
import { formatNumberDecimal, removeDecimalZero } from '../decimal'

const SafeCalcUtil = decimalUtils.SafeCalcUtil

/**
 * 根据进度条拖动计算 input 显示数量
 * @param num
 * @param max
 * @returns
 */
export const onChangeInput = (
  num: string | number,
  max: string | number,
  // eslint-disable-next-line default-param-last
  isFormat = false,
  offset?: number | string
) => {
  let val = ''
  if (!num || !max) {
    return val
  }

  val = `${SafeCalcUtil.mul(max, SafeCalcUtil.div(num, 100))}`

  if (isFormat && offset) {
    val = removeDecimalZero(formatNumberDecimal(val, Number(offset), false))
  }

  return val
}

/**
 * 根据输入数值计算进度条数据
 * @param num
 * @param max
 * @param hint
 * @returns
 */
export const onChangeSlider = (num: string | number, max: string | number, hint = t`helper_assets_futures_5101405`) => {
  if (!num || isNaN(+num) || !max) {
    return 0
  }

  if (Number(max) === 0 || Number(num) > Number(max)) {
    hint && Toast.info(hint)
    return 100
  }
  return +formatNumberDecimal(SafeCalcUtil.mul(SafeCalcUtil.div(num, max), 100), 0, true) || 0
}

/**
 * 校验当前合约组是否存在委托订单
 */
export const onCheckGroupEntrustOrder = async (groupId: string, onHint: (e: boolean) => void) => {
  if (!groupId) {
    return false
  }
  const res = await postGroupExistEntrustOrder({ groupId })
  const { isOk, data, message = '' } = res || {}

  if (isOk) {
    if (data?.lock) {
      Toast.info(t`helper_assets_futures_hlztrvzkuola666c44exm`)
      return false
    }

    if (data?.exist) {
      onHint(true)
      return false
    }

    return true
  } else {
    Toast.info(message)
    return false
  }
}

/**
 * 撤销当前合约组所有委托订单
 */
export const onRevokeGroupEntrustOrder = async (groupId: string) => {
  const res = await postPerpetualGroupCancelOrder({ groupId })
  const { isOk, data } = res || {}

  if (isOk && data?.isSuccess) {
    Toast.success(t`helper_assets_futures_5101406`)
    return true
  } else {
    Toast.fail(t`helper_assets_futures_5101424`)
    return false
  }
}

/**
 * 撤销当前仓位所有委托订单
 */
export const onRevokePositionEntrustOrder = async params => {
  const { groupId, positionId, onRevokeOrder } = params || {}
  const res = await postPerpetualPositionCancelEntrustOrder({
    groupId,
    positionId,
  })

  const { isOk, data, message = '' } = res || {}

  if (!isOk) {
    Toast.info(message)
    return
  }

  if (!data?.isSuccess) {
    Toast.info(t`helper_assets_futures_5101424`)
    return
  }

  Toast.info(t`helper_assets_futures_5101406`)
  onRevokeOrder()
}

/**
 * 检测当前仓位是否存在委托订单
 */
export const onCheckPositionEntrustOrder = async params => {
  const {
    groupId,
    positionId,
    onClose,
    onCommit,
    onLock,
    content = t`features_assets_overview_list_futures_futures_list_futures_cell_index_qrahtlorwn54isajccccu`,
  } = params || {}
  const res = await postPerpetualPositionExistEntrustOrder({
    groupId,
    positionId,
  })

  const { isOk, data, message = '' } = res || {}

  if (!isOk) {
    Toast.info(message)
    return
  }

  if (data?.exist) {
    onCommit({
      isSuccess: false,
      showIcon: true,
      content,
      cancelText: t`assets.financial-record.cancel`,
      commitText: t`features_assets_futures_assets_futures_index_5101402`,
      onClose,
      onCommit: () => onRevokePositionEntrustOrder(params),
    })

    return
  }

  onLock()
}

/**
 * 获取合约币对详情
 */
export const onGetTradePairDetails = async (symbol: string) => {
  const res = await getPerpetualTradePairDetail({ symbol })

  const { isOk, data, message = '' } = res || {}
  if (!isOk) {
    Toast.info(message)
    return
  }

  return data
}

/**
 * 获取商户保证金币种配置
 */
export const onGetPerpetualMarginSettings = async () => {
  const assetsFuturesStore = baseAssetsFuturesStore.getState()
  const res = await getPerpetualMarginSettings({})

  const { isOk, data } = res || {}
  if (!isOk || !data) return
  assetsFuturesStore.updateFuturesDetails({ marginSettings: data?.merAssetsMarginSettingData })
}

/** 获取合约资产持仓列表 - 交易页面用 */
const getFuturesPositionList = async () => {
  const assetsFuturesStore = baseAssetsFuturesStore.getState()
  const res = await getPerpetualPositionCurrentList({})
  let results = res.data?.list
  if (res.isOk && results) {
    assetsFuturesStore.updatePositionListFutures(results)
    return results
  }
}

/** 获取合约资产 - 交易页面用 */
export const getUserAssetsFutures = async () => {
  /** 获取持仓列表 */
  getFuturesPositionList()
  const defaultData = { availableBalanceValue: '0' }
  const res = await getPerpetualAssets({})
  let results = res.data
  if (res.isOk && results) {
    const assetsFuturesStore = baseAssetsFuturesStore.getState()
    assetsFuturesStore.updateUserAssetsFutures(results)
    return results
  }
  return defaultData
}

/**
 * 持仓 - 计算预计盈亏/仓位预计亏损
 * 多单：（触发价格 - 开仓均价）*平仓数量 - 触发价格*平仓数量*taker 费率
 * 空单：（开仓均价 - 触发价格）*平仓数量 - 触发价格*平仓数量*taker 费率
 * @param price 触发价格（预计盈亏：市价：触发价格，限价：委托价格  仓位预计亏损：市价：第五档价格，限价：委托价格）
 * @param closeSize 平仓数量
 * @param openPrice 开仓均价
 * @param takerFeeRate taker 费率
 * @param sideInd 仓位方向
 * @returns
 */
export const onGetExpectedProfit = ({
  price,
  closeSize,
  openPrice,
  takerFeeRate,
  sideInd,
}: {
  price: string
  closeSize: string
  openPrice: string
  takerFeeRate: string
  sideInd: string
}) => {
  if (!price || isNaN(+price) || !closeSize) {
    return ''
  }

  let difference
  if (sideInd === FuturesDetailsPositionTypeEnum.long) {
    difference = SafeCalcUtil.mul(SafeCalcUtil.sub(price, openPrice), closeSize)
  } else {
    difference = SafeCalcUtil.mul(SafeCalcUtil.sub(openPrice, price), closeSize)
  }
  const fee = SafeCalcUtil.mul(SafeCalcUtil.mul(price, closeSize), takerFeeRate)
  return `${SafeCalcUtil.sub(difference, fee)}`
}

/**
 * 处理合约持仓输入精度
 */
export const onSetPositionOffset = (val: string, offset: string | number = 2) => {
  if (!val || isNaN(+val)) return ''
  let newVal = val
  const valArr = val.split('.')
  if (valArr.length > 1 && valArr[1].length > Number(offset)) {
    newVal = `${valArr[0]}.${valArr[1].slice(0, Number(offset))}`
  }

  return newVal
}

/**
 * 获取商户法币配置
 */
export const getFuturesCurrencySettings = async () => {
  const isLogin = getIsLogin()
  if (!isLogin) return

  const { updateFuturesCurrencySettings } = baseAssetsFuturesStore.getState()
  const res = await getCurrencySettings({})
  const { isOk, data } = res || {}

  if (!isOk || !data) {
    return
  }

  updateFuturesCurrencySettings(data)
  return data
}

/**
 * 根据持仓列表过滤 symbolWassName
 * @param positionList 当前持仓列表
 */
export const onFilterSymbolWassName = (positionList: PositionList[]) => {
  const assetsFuturesStore = baseAssetsFuturesStore.getState()
  let newList: string[] = []
  for (let i = 0; i < positionList.length; i += 1) {
    if (newList.indexOf(positionList[i].symbolWassName) === -1) {
      newList.push(positionList[i].symbolWassName)
    }
  }

  assetsFuturesStore.updatePositionSymbolWassNameList(newList)
}

/**
 * 根据 symbolWassName 生成标记价格推送 subs
 * @param type 订阅类型
 */
export const onGetMarkPriceSubs = (type: string) => {
  const { positionSymbolWassNameList = [] } = baseAssetsFuturesStore.getState()

  if (positionSymbolWassNameList && positionSymbolWassNameList.length > 0) {
    const newList = positionSymbolWassNameList.map((contractCode: string) => {
      return { biz: WsBizEnum.perpetual, type, contractCode }
    })

    return newList
  }
}

/**
 * 持仓列表 - 仓位数量计算
 * @param size 持仓数量
 * @param lockSize 锁仓数量
 * @return 仓位数量
 */
const calculatorAmount = (size: string, lockSize: string) => {
  return +SafeCalcUtil.sub(size, lockSize)
}

/**
 * 持仓列表 - 锁仓未实现盈亏计算
 * 开多=(锁仓价格 - 开仓均价)*锁仓数量
 * 开空=(开仓均价 - 锁仓价格)*锁仓数量
 * @param lockPrice 锁仓价格
 * @param openPrice 开仓均价
 * @param lockSize 锁仓数量
 * @return 锁仓未实现盈亏
 */
const calculatorUnrealizedProfitLock = (data: PositionList) => {
  const { sideInd, lockPrice, openPrice, lockSize } = data || {}

  let agio = 0
  if (sideInd === FuturesDetailsPositionTypeEnum.long) {
    agio = +SafeCalcUtil.sub(lockPrice, openPrice)
  }

  if (sideInd === FuturesDetailsPositionTypeEnum.short) {
    agio = +SafeCalcUtil.sub(openPrice, lockPrice)
  }

  return +SafeCalcUtil.mul(agio, lockSize)
}

/**
 * 持仓列表 - 未实现盈亏计算
 * 开多=(标记价格 - 开仓均价)*数量 + 锁仓未实现盈亏 - 锁仓利息
 * 开空=(开仓均价 - 标记价格)*数量 + 锁仓未实现盈亏 - 锁仓利息
 * @param markPrice 标记价格
 * @param openPrice 开仓均价
 * @param size 数量
 * @param sideIndEnum 方向
 * @param unconfirmedLock 锁仓时未实现盈亏
 * @param lockFees 锁仓利息
 * @return 未实现盈亏
 */
const calculatorUnrealizedProfit = (data: PositionList) => {
  const { sideInd, markPrice, openPrice, size, lockFees, lockSize } = data || {}

  let unrealizedProfit = 0
  if (sideInd === FuturesDetailsPositionTypeEnum.long) {
    unrealizedProfit = +SafeCalcUtil.sub(markPrice, openPrice)
  }

  if (sideInd === FuturesDetailsPositionTypeEnum.short) {
    unrealizedProfit = +SafeCalcUtil.sub(openPrice, markPrice)
  }

  unrealizedProfit = +SafeCalcUtil.mul(unrealizedProfit, calculatorAmount(size, lockSize))
  unrealizedProfit = +SafeCalcUtil.sub(
    SafeCalcUtil.add(unrealizedProfit, calculatorUnrealizedProfitLock(data)),
    lockFees
  )

  return unrealizedProfit
}

/**
 * 开仓保证金 (初始保证金) 计算
 * 开仓保证金 = 开仓均价 * (仓位数量 + 锁仓数量)/杠杠倍数
 * @param openPrice 开仓均价
 * @param size 仓位数量
 * @param lockSize 锁仓数量
 * @param lever 杠杠倍数
 * @return 开仓保证金 (初始保证金)
 */
const calculatorOpenMargin = (data: PositionList) => {
  const { openPrice, size, lockSize, lever } = data || {}
  let openMargin = 0
  openMargin = +SafeCalcUtil.mul(openPrice, SafeCalcUtil.add(calculatorAmount(size, lockSize), lockSize))
  openMargin = +SafeCalcUtil.div(openMargin, lever)

  return openMargin
}

/**
 * 持仓列表 - 收益率计算
 * 收益率 = 收益 / 开仓保证金
 * @param profit 收益
 * @return 收益率
 */
const calculatorProfitRatio = (data: PositionList) => {
  const { profit } = data || {}

  const openMargin = calculatorOpenMargin(data)
  const profitRatio = +SafeCalcUtil.div(profit, openMargin)
  return profitRatio
}

/**
 * 持仓列表 - 仓位保证金率计算
 * 仓位保证金率 = (合约组保证金 + 整体未实现盈亏 - 其余仓位维持保证金)/(标记价格*(仓位数量 + 锁仓数量))
 * 【整体未实现盈亏】=合约组所有仓位未实现盈亏之和
 * 【其余仓位维持保证金】=合约组所有仓位维持保证金之和 - 当前仓位维持保证金
 * @param groupMargin 合约组保证金
 * @param markPrice 标记价格
 * @param size 仓位数量
 * @param lockSize 锁仓数量
 * @param maintMargin 当前仓位维持保证金
 * @param unrealizedProfitTotal 合约组所有仓位未实现盈亏之和
 * @param maintMarginRatioTotal 合约组所有仓位维持保证金之和
 * @return 仓位保证金率
 */
const calculatorPositionMarginRatio = (
  data: PositionList,
  unrealizedProfitTotal: string,
  maintMarginRatioTotal: string
) => {
  const { groupMargin, markPrice, lockSize, size, maintMargin } = data || {}
  let marginRatio = 0

  /** 【其余仓位维持保证金】=合约组所有仓位维持保证金之和 - 当前仓位维持保证金 */
  const otherMaintMargin = +SafeCalcUtil.sub(maintMarginRatioTotal, maintMargin)

  marginRatio = +SafeCalcUtil.sub(SafeCalcUtil.add(groupMargin, unrealizedProfitTotal), otherMaintMargin)
  marginRatio = +SafeCalcUtil.div(
    marginRatio,
    +SafeCalcUtil.mul(markPrice, SafeCalcUtil.add(calculatorAmount(size, lockSize), lockSize))
  )

  return marginRatio
}

/**
 * 持仓列表 - 维持保证金计算
 * 仓位维持保证金=标记价格*(仓位数量 + 锁仓数量)*(维持保证金率 + 卖出手续费率)
 * @param markPrice 标记价格
 * @param size 仓位数量
 * @param lockSize 锁仓数量
 * @param maintMarginRatio 维持保证金率
 * @param sellFeeRate 卖出手续费率
 * @return 仓位维持保证金
 */
const calculatorPositionMaintMarginRatio = (data: PositionList) => {
  const { markPrice, size, lockSize, maintMarginRatio, sellFeeRate } = data || {}

  let newMaintMarginRatio = 0
  newMaintMarginRatio = +SafeCalcUtil.mul(markPrice, SafeCalcUtil.add(calculatorAmount(size, lockSize), lockSize))
  newMaintMarginRatio = +SafeCalcUtil.mul(newMaintMarginRatio, SafeCalcUtil.add(maintMarginRatio, sellFeeRate))

  return newMaintMarginRatio
}

/**
 * 持仓列表 - 预估强平价计算
 * 做多:（开仓均价 -（（合约组保证金 + 其他仓位未实现盈亏 - 其余仓位维持保证金 + 锁仓未实现盈亏 - 锁仓利息 -（锁仓数量*合约组可用保证金*（维持保证金率 + 手续费率））/仓位数量））/（1-手续费率 - 维持保证金率）
 * 做空:（开仓均价 +（（合约组保证金 + 其他仓位未实现盈亏 - 其余仓位维持保证金 + 锁仓未实现盈亏 - 锁仓利息 -（锁仓数量*合约组可用保证金*（维持保证金率 + 手续费率））/仓位数量））/（1+手续费率 + 维持保证金率）
 * @param sideInd long:多仓; short:空仓
 * @param openPrice 开仓均价
 * @param groupMargin 合约组保证金
 * @param lockFees 锁仓利息
 * @param size 仓位数量
 * @param sellFeeRate 手续费率
 * @param maintMargin 维持保证金
 * @param maintMarginRatio 维持保证金率
 * @param unrealizedProfit 未实现盈亏
 * @param unrealizedProfitTotal 合约组所有仓位未实现盈亏之和
 * @param maintMarginRatioTotal 合约组所有仓位维持保证金之和
 * @return  预估强平价
 */
const calculatorLiquidatePrice = (data: PositionList, unrealizedProfitTotal: string, maintMarginRatioTotal: string) => {
  const {
    sideInd,
    openPrice,
    groupMargin,
    lockFees,
    size,
    sellFeeRate,
    maintMarginRatio,
    maintMargin,
    unrealizedProfit,
    lockSize,
  } = data || {}

  let liquidatePrice = 0

  if (calculatorAmount(size, lockSize) > 0) {
    // 其他仓位未实现盈亏
    const otherUnrealizedProfit = +SafeCalcUtil.sub(unrealizedProfitTotal, unrealizedProfit)
    // 其余仓位维持保证金
    const otherMaintMarginRatio = +SafeCalcUtil.sub(maintMarginRatioTotal, maintMargin)

    // 锁仓未实现盈亏
    const unrealizedProfitLock = calculatorUnrealizedProfitLock(data)
    // 锁仓数量*合约组可用保证金*（维持保证金率 + 手续费率）
    const fee = SafeCalcUtil.mul(
      SafeCalcUtil.mul(lockSize, groupMargin),
      SafeCalcUtil.add(maintMarginRatio, sellFeeRate)
    )

    // （合约组保证金 + 其他仓位未实现盈亏 - 其余仓位维持保证金 + 锁仓未实现盈亏 - 锁仓利息 -（锁仓数量*合约组可用保证金*（维持保证金率 + 手续费率））/仓位数量）
    liquidatePrice = +SafeCalcUtil.sub(SafeCalcUtil.add(groupMargin, otherUnrealizedProfit), otherMaintMarginRatio)
    liquidatePrice = +SafeCalcUtil.sub(SafeCalcUtil.add(liquidatePrice, unrealizedProfitLock), lockFees)
    liquidatePrice = +SafeCalcUtil.sub(liquidatePrice, fee)
    liquidatePrice = +SafeCalcUtil.div(liquidatePrice, calculatorAmount(size, lockSize))

    if (sideInd === FuturesDetailsPositionTypeEnum.long) {
      const rate = SafeCalcUtil.sub(SafeCalcUtil.sub(1, sellFeeRate), maintMarginRatio)
      liquidatePrice = +SafeCalcUtil.div(SafeCalcUtil.sub(openPrice, liquidatePrice), rate)
    }

    if (sideInd === FuturesDetailsPositionTypeEnum.short) {
      const rate = SafeCalcUtil.add(SafeCalcUtil.add(1, sellFeeRate), maintMarginRatio)
      liquidatePrice = +SafeCalcUtil.div(SafeCalcUtil.add(openPrice, liquidatePrice), rate)
    }
  }

  return liquidatePrice
}

/**
 * 持仓列表 - 收益计算
 * 收益 = 未实现盈亏 + 已实现盈亏
 * @param unrealizedProfit 未实现盈亏
 * @param realizedProfit 已实现盈亏
 * @return 收益
 */
const calculatorProfit = (data: PositionList) => {
  const { unrealizedProfit, realizedProfit } = data || {}
  return +SafeCalcUtil.add(unrealizedProfit, realizedProfit)
}

/**
 * 币种汇率计算
 * 保证金汇率类型 (固定)：币种汇率 = 1 * 浮动比例
 * 保证金汇率类型 (浮动)：币种汇率 = 保证金币种实时汇率 * 法币实时汇率 * 浮动比例
 * @param symbol 币种
 * @param isCalcFloat 是否需要计算浮动比例
 * @returns 币种汇率
 */
export const calculatorCoinRate = (symbol: string, isCalcFloat = true) => {
  if (!symbol) return 0

  const {
    assetsModule: {
      coinRate: { coinRate: coinRateList, legalCurrencyRate },
    },
  } = baseAssetsStore.getState()
  const {
    futuresDetails: { marginSettings },
    futuresCurrencySettings: { currencySymbol = '' } = {},
  } = baseAssetsFuturesStore.getState()

  const rate: CoinRateResp = coinRateList.find((item: CoinRateResp) => item.symbol === symbol) || ({} as CoinRateResp)
  const marginCoin: MarginSettingsList =
    marginSettings.find((item: MarginSettingsList) => item.coinCode === symbol) || ({} as MarginSettingsList)

  let newRate = 0
  if (rate?.symbol && marginCoin?.coinCode) {
    newRate = +SafeCalcUtil.mul(rate.usdtRate, legalCurrencyRate[currencySymbol])

    if (isCalcFloat) {
      newRate = +SafeCalcUtil.mul(
        marginCoin.rateTypeInd === PerpetualMigrateRateTypeEnum.fixed ? 1 : newRate,
        marginCoin.scale
      )
    }
  }

  return newRate
}

/**
 * 保证金币种购买力计算
 * 保证金币种价值 = 保证金币种数量*币种汇率
 * @param isCalcFloat 是否需要计算浮动比例
 */
const calculatorMarginCurrencyTotal = (isCalcFloat = true, type = MarginAssetTypeEnum.totalAmount) => {
  const {
    futuresDetails: {
      margin: { list: marginList },
    },
  } = baseAssetsFuturesStore.getState()

  let marginCurrencyTotal = 0
  marginList.forEach((marginItem: DetailMarginListChild) => {
    const coinRate = calculatorCoinRate(marginItem.symbol, isCalcFloat)
    let marginCurrency = 0
    switch (type) {
      case MarginAssetTypeEnum.totalAmount:
        marginCurrency = +SafeCalcUtil.mul(marginItem.amount, coinRate)
        break
      case MarginAssetTypeEnum.availableAmount:
        marginCurrency = +SafeCalcUtil.mul(marginItem.availableAmount, coinRate)
        break
      case MarginAssetTypeEnum.lockAmount:
        marginCurrency = +SafeCalcUtil.mul(marginItem.lockAmount, coinRate)
        break
      default:
        marginCurrency = +SafeCalcUtil.mul(marginItem.amount, coinRate)
        break
    }
    marginCurrencyTotal = +SafeCalcUtil.add(marginCurrencyTotal, marginCurrency)
  })

  return marginCurrencyTotal
}

/**
 * 合约组详情 - 合约组总价值计算
 * 币种汇率 = 币种对应的法币实时汇率 * 浮动比例
 * 保证金币种价值 = 保证金币种数量*币种汇率
 * 合约组总价值 = 保证金币种价值之和 + 合约组整体未实现盈亏
 * @param unrealizedProfitTotal 合约组所有仓位未实现盈亏之和
 * @returns 合约组总价值
 */
const calculatorGroupAsset = (groupInfo: IPositionGroupList) => {
  let groupAsset = 0

  groupAsset = +SafeCalcUtil.add(calculatorMarginCurrencyTotal(false), groupInfo.unrealizedProfitTotal)
  return groupAsset
}

/**
 * 合约组详情 - 合约组可用保证金总价格计算
 * 合约组可用保证金总价值=MIN(MAX(逐仓保证金 - 逐仓维持保证金和 + 逐仓未实现盈亏和，0),MAX(逐仓保证金 - 逐仓初始保证金和，0))
 * @param groupMargin 逐仓保证金 (保证金币种价值之和)
 * @param unrealizedProfitTotal 逐仓未实现盈亏和
 * @param maintMarginRatioTotal 逐仓维持保证金和
 * @param openMarginTotal 逐仓初始保证金和
 */
export const calculatorMarginAvailable = (groupInfo: IPositionGroupList) => {
  const { unrealizedProfitTotal, maintMarginRatioTotal, openMarginTotal } = groupInfo || {}
  const groupMargin = calculatorMarginCurrencyTotal(true, MarginAssetTypeEnum.availableAmount)

  let marginAvailable = 0
  const profit = Math.max(
    +SafeCalcUtil.add(SafeCalcUtil.sub(groupMargin, maintMarginRatioTotal), unrealizedProfitTotal),
    0
  )
  const margin = Math.max(+SafeCalcUtil.sub(groupMargin, openMarginTotal), 0)
  marginAvailable = Math.min(profit, margin)

  return marginAvailable
}

/**
 * 合约组详情 - 合约组占用保证金计算
 * 合约组占用保证金=MAX(合约组维持保证金之和 - 合约组整体未实现盈亏，初始保证金)
 * @param maintMarginRatioTotal 合约组所有仓位维持保证金之和
 * @param unrealizedProfitTotal 合约组所有仓位未实现盈亏之和
 * @param openMarginTotal 合约组初始保证金和
 */
const calculatorOccupyMargin = (groupInfo: IPositionGroupList) => {
  const { unrealizedProfitTotal, maintMarginRatioTotal, openMarginTotal = '' } = groupInfo || {}

  return Math.max(+SafeCalcUtil.sub(maintMarginRatioTotal, unrealizedProfitTotal), +openMarginTotal)
}

/**
 * 对比推送结果的 symbolWassName，计算未实现盈亏/收益/收益率/维持保证金率/未实现盈亏总额
 * @param groupList 根据合约组 ID 分组后的持仓列表
 * @param markData 标记价格推送结果
 * @return
 */
const calculatorPositionProfitData = (groupList: IPositionGroupList[], markData: PerpetualIndexPrice[]) => {
  const newGroupList =
    groupList &&
    groupList.map(item => {
      let unrealizedProfitTotal = '' // 合约组未实现盈亏总额
      let maintMarginRatioTotal = '' // 合约组维持保证金总额
      let openMarginTotal = '' // 合约组仓位保证金总额
      let newData: PositionList[] = []

      item.data.forEach((positionItem: PositionList) => {
        const markInfo =
          markData.find((markItem: PerpetualIndexPrice) => markItem.symbolWassName === positionItem.symbolWassName) ||
          ({} as PerpetualIndexPrice)
        let maintMargin = ''

        const openMargin = `${calculatorOpenMargin(positionItem)}`
        if (markInfo?.symbolWassName === positionItem?.symbolWassName) {
          const unrealizedProfit = `${calculatorUnrealizedProfit({ ...positionItem, markPrice: markInfo?.markPrice })}`
          const profit = `${calculatorProfit({ ...positionItem, unrealizedProfit })}`
          maintMargin = `${calculatorPositionMaintMarginRatio({ ...positionItem, markPrice: markInfo?.markPrice })}`

          positionItem = {
            ...positionItem,
            unrealizedProfit,
            profit,
            profitRatio: `${calculatorProfitRatio({ ...positionItem, profit })}`,
            maintMargin,
          }
        } else {
          maintMargin = `${calculatorPositionMaintMarginRatio({ ...positionItem })}`
          positionItem = {
            ...positionItem,
            maintMargin,
          }
        }

        unrealizedProfitTotal = `${SafeCalcUtil.add(unrealizedProfitTotal, positionItem.unrealizedProfit)}`
        maintMarginRatioTotal = `${SafeCalcUtil.add(maintMarginRatioTotal, maintMargin)}`
        openMarginTotal = `${SafeCalcUtil.add(openMarginTotal, openMargin)}`
        newData = [...newData, { ...positionItem }]
      })

      return { ...item, data: newData, unrealizedProfitTotal, maintMarginRatioTotal, openMarginTotal }
    })

  return newGroupList
}

/**
 * 根据未实现盈亏总额/维持保证金总额，计算仓位保证金率/预估强平价
 * @param groupList 根据合约组 ID 分组后的持仓列表
 * @param markData 标记价格推送结果
 * @return
 */
const calculatorPositionMarginRatioData = (list: IPositionGroupList[], markData: PerpetualIndexPrice[]) => {
  const groupList = calculatorPositionProfitData(list, markData)

  let newGroupList: IPositionGroupList[] = []
  groupList.forEach(item => {
    const { unrealizedProfitTotal = '', maintMarginRatioTotal = '', data = [] } = item || {}
    const newData: PositionList[] = []

    data.forEach((positionItem: PositionList) => {
      const markInfo = markData.filter((markItem: PerpetualIndexPrice) => {
        return markItem.symbolWassName === positionItem.symbolWassName
      })

      if (markInfo && markInfo.length > 0) {
        const markPrice = markInfo[0].markPrice
        positionItem = {
          ...positionItem,
          marginRatio: `${calculatorPositionMarginRatio(
            { ...positionItem, markPrice },
            unrealizedProfitTotal,
            maintMarginRatioTotal
          )}`,
          liquidatePrice: `${calculatorLiquidatePrice(
            { ...positionItem, markPrice },
            unrealizedProfitTotal,
            maintMarginRatioTotal
          )}`,
          markPrice,
        }
      }

      newData.push(positionItem)
    })
    newGroupList.push({ ...item, data: newData })
  })

  return newGroupList
}

/**
 * 当前持仓列表/合约组详情持仓列表根据标记价格推送计算持仓数据
 * @param markData 标记价格推送结果
 * @param groupId 合约组 ID（区分合约组详情/当前持仓来源）
 */
export const onChangePositionData = (markData: PerpetualIndexPrice[], groupId?: string) => {
  const futuresStore = baseAssetsFuturesStore.getState()

  const {
    positionListFutures = [],
    futuresDetails: { details },
    updateFuturesDetails,
    updatePositionListFutures,
  } = futuresStore

  if (!markData || markData.length === 0) return
  const found = positionListFutures.some(item => item.symbolWassName === markData[0].symbolWassName)
  if (!found) return

  // 根据 groupId 将持仓列表分组
  let temObj = {}
  for (let i = 0; i < positionListFutures.length; i += 1) {
    let item = positionListFutures[i]
    if (!temObj[item.groupId]) {
      temObj[item.groupId] = [item]
    } else {
      temObj[item.groupId].push(item)
    }
  }

  let groupList: IPositionGroupList[] = [] // 分组后的持仓列表
  Object.keys(temObj).forEach(key => {
    groupList.push({
      groupId: key,
      data: temObj[key],
    })
  })

  const newGroupList = calculatorPositionMarginRatioData(groupList, markData)

  // 计算合约组总价值/合约组可用保证金总价值，并更新store
  if (groupId) {
    newGroupList.forEach((groupItem: IPositionGroupList) => {
      if (groupItem.groupId === groupId) {
        const newGroupDetails = {
          ...details,
          groupAsset: calculatorGroupAsset(groupItem),
          marginAvailable: calculatorMarginAvailable(groupItem),
          positionMargin: calculatorOccupyMargin(groupItem),
          unrealizedProfit: groupItem.unrealizedProfitTotal,
        }
        updateFuturesDetails({ details: newGroupDetails })
      }
    })
  }

  // 更新持仓列表
  const newPositionList = positionListFutures.map((positionItem: PositionList) => {
    let newPositionItem = {} as PositionList
    newGroupList.forEach((groupItem: IPositionGroupList) => {
      if (positionItem.groupId === groupItem.groupId) {
        groupItem.data.forEach((dataItem: PositionList) => {
          if (positionItem.positionId === dataItem.positionId) {
            newPositionItem = { ...positionItem, ...dataItem }
          }
        })
      }
    })

    return newPositionItem
  })

  updatePositionListFutures(newPositionList)
}

/**
 * 获取对手价，买一/卖一价
 * @param symbolName
 * @param limit
 * @returns
 */
export const getFuturesMarketDepthApi = async (symbolName: string, limit = 1) => {
  const res = await getPerpetualMarketRestV1MarketDepthApiRequest({ symbol: symbolName, limit: String(limit) })
  const { isOk, data } = res || {}
  if (!isOk || !data) {
    return
  }
  /** bid 是买价，ask 是卖价 */ // const asks = data?.asks || []
  // const bids = data?.bids || []
  // console.log('getFuturesMarketDepthApi', data, asks[0][0], bids[0])
  return data
}

/**
 * 获取平仓合约组额外保证金
 * @param groupId 合约组 id
 */
export const onGetGroupPurchasingPower = async (groupId: string) => {
  const res = await getGroupPurchasingPower({ groupId })
  const { isOk, data } = res || {}
  if (!isOk || !data) {
    return ''
  }

  return data?.purchasingPower
}

/**
 * 调整持仓杠杆 - 计算额外占用保证金
 * 额外占用保证金=[（持仓数量*开仓均价）/（调整目标杠杆倍数）]-[（持仓数量*开仓均价）/杠杆倍数]
 * @param size 持仓数量
 * @param openPrice 开仓均价
 * @param lever 持仓杠杆倍数
 * @param newLever 调整目标杠杆倍数
 * @returns 额外占用保证金
 */
export const calculatorAdditionalOccupationMargin = (groupInfo: PositionList, newLever: number) => {
  const { size, lockSize, openPrice, lever } = groupInfo || {}

  const positionAmount = SafeCalcUtil.mul(calculatorAmount(size, lockSize), openPrice)
  const oldMargin = SafeCalcUtil.div(positionAmount, lever)
  const newMargin = SafeCalcUtil.div(positionAmount, newLever)

  return `${SafeCalcUtil.sub(newMargin, oldMargin)}`
}

/**
 * 当前持仓/逐仓详情列表-根据最近价格推送结果更新列表数据
 * @param dealPriceList 最近价格推送结果
 * @param positionList 当前持仓/逐仓详情列表
 */
export const onChangePositionListData = (dealPriceList, positionList) => {
  const found = positionList.some(item => item.symbolWassName === dealPriceList[0].symbolWassName)
  if (!found) return

  const newList = positionList.map(positionInfo => {
    const matchedItem = dealPriceList.find(dealInfo => positionInfo.symbolWassName === dealInfo.symbolWassName)
    if (matchedItem) {
      return { ...positionInfo, latestPrice: matchedItem.price }
    }
    return positionInfo
  })

  return newList
}

/**
 * 处理逐仓图表占比展示数据
 * @param info 当前图表数据
 * @param list 当前图表数据列表
 */
export const handlePositionChartRatioData = (info, list) => {
  if (list.length === 1) return 100
  const total = list.reduce((prev, cur) => {
    return +SafeCalcUtil.add(prev, cur.percent)
  }, 0)

  if (total <= 100) return info.percent

  const max = list.reduce((accumulator, currentValue) => {
    return +accumulator.percent > +currentValue.percent ? accumulator : currentValue
  })

  if (info.percent === max.percent && info.id === max.id) {
    // 计算出差额
    const diff = +SafeCalcUtil.sub(total, 100)
    return +SafeCalcUtil.sub(info.percent, diff)
  } else {
    return info.percent
  }
}
