import { FutureOrderDirectionEnum } from '@/constants/order'
import {
  EntrustTypeEnum,
  FutureMarginModeEnum,
  FuturePlanTriggerDirection,
  getEntrustTypeEnumName,
  MarginModeSettingEnum,
  SpotNormalOrderMarketUnitEnum,
  SpotPlanTriggerDirection,
  SpotStopStatusEnum,
  TradeDirectionEnum,
  TradeFutureExtraMarginTypeInReqEnum,
  TradeFutureMarginTypeInReqEnum,
  TradeFutureNormalEntrustTypeEnum,
  TradeFutureNormalOrderTypeIndEnum,
  TradeFutureOrderDirectionEnum,
  TradePriceTypeEnum,
  TradePriceTypeInReqEnum,
  TradeUnitEnum,
  TradeUnitInReqEnum,
  UserContractVersionEnum,
} from '@/constants/trade'
import { baseAssetsFuturesStore } from '@/store/assets/futures'
import { baseTradeStore } from '@/store/trade'
import { baseFutureTradeStore } from '@/store/trade/future'
import { baseUserStore } from '@/store/user'
import { IFutureGroup } from '@/typings/api/future/common'
import {
  ICreateFutureNormalOrderReq,
  ICreateFutureNormalOrderStrategy,
  ICreateFuturePlanOrderReq,
  ICreateSpotPlanOrderReq,
  IFutureCoinDetail,
  ITradePairLever,
} from '@/typings/api/trade'
import { t } from '@lingui/macro'
import { decimalUtils } from '@/nbit'
import { formatNumberDecimalWhenExceed } from './decimal'
import { getBusinessName } from './common'

const SafeCalcUtil = decimalUtils.SafeCalcUtil

function getTradePriceTypeEnumInReq(priceType: TradePriceTypeEnum) {
  return priceType === TradePriceTypeEnum.latest ? TradePriceTypeInReqEnum.latest : TradePriceTypeInReqEnum.mark
}

/** 合约额外保证金来源是否为资产 (否则为下单资金) */
export function getFutureExtraMarginSourceIsAssets() {
  return baseFutureTradeStore.getState().preferenceSettings.marginSource === MarginModeSettingEnum.wallet
}

/** 查找当前持仓合约组仓位
 * @param isBuy 默认是查找反向持仓，如果是查找同向持仓，传当前方向取反
 */
export function findFuturesPositionItem(isBuy: boolean, groupId: string, tradeId: any, lever: number) {
  const assetsFuturesStore = baseAssetsFuturesStore.getState()
  const positionListFutures = assetsFuturesStore.positionListFutures
  const direction = isBuy ? 'short' : 'long'
  return positionListFutures.find(it => {
    // id 杠杆 方向
    return it.tradeId === tradeId && it.groupId === groupId && Number(it.lever) === lever && direction === it.sideInd
  })
}

/** 将接口返回的 offset  转换为 step */
export function calcStepFromOffset(offset: number) {
  return 1 / 10 ** offset
}
export function getEntrustTypes(types = [EntrustTypeEnum.market, EntrustTypeEnum.limit, EntrustTypeEnum.plan]) {
  return types.map(type => {
    return {
      name: getEntrustTypeEnumName(type),
      value: type,
    }
  })
}

export function getBuyDirectionOptions() {
  return [TradeDirectionEnum.buy, TradeDirectionEnum.sell].map(item => {
    return {
      label: item === TradeDirectionEnum.buy ? t`features/market/detail/index-1` : t`features/market/detail/index-2`,
      value: item,
    }
  })
}
export function getTradeButtonText(isLogin: boolean, marketStatus: SpotStopStatusEnum, placeholder?: string) {
  if (!isLogin) {
    return t`user.field.reuse_07`
  }
  if (marketStatus !== SpotStopStatusEnum.trading) {
    return t`helper_trade_5101315`
  }
  return placeholder
}
/** 按最大杠杆数分割 */
export function getLeverSliderPoints(maxLever: number) {
  const points = [1]
  const step = Math.floor(maxLever / 5)
  for (let i = 1; i < 5; i += 1) {
    if (step * i === 1) {
      continue
    }
    points.push(step * i)
  }
  points.push(maxLever)
  return points
}
/** 获取当前杠杆配置 */
export function getCurrentLeverConfig(lever: number, leverList: ITradePairLever[]) {
  const currentLeverConfig =
    leverList
      .slice()
      .reverse()
      .find(item => item.maxLever! >= lever) || ({} as ITradePairLever)

  return currentLeverConfig
}
export function getFutureQuestions() {
  return [
    {
      title: t`features/trade/trade-futures-open/index-0`,
      options: [t`features/trade/trade-futures-open/index-1`, t`assets.financial-record.search.error`],
      answer: 0,
    },
    {
      title: t`features/trade/trade-futures-open/index-2`,
      options: [t`features/trade/trade-futures-open/index-3`, t`features/trade/trade-futures-open/index-4`],
      answer: 1,
    },
    {
      title: t`features/trade/trade-futures-open/index-5`,
      options: [t`features/trade/trade-futures-open/index-6`, t`features/trade/trade-futures-open/index-7`],
      answer: 0,
    },
    {
      title: t`features/trade/trade-futures-open/index-8`,
      options: [t`features/trade/trade-futures-open/index-9`, t`features/trade/trade-futures-open/index-10`],
      answer: 0,
    },
  ]
}

export function getFutureVersionIsPro() {
  return baseUserStore.getState().personalCenterSettings.perpetualVersion === UserContractVersionEnum.professional
}

export function getFutureDefaultLever(coin: IFutureCoinDetail) {
  const { settings: futuresSettings } = baseFutureTradeStore.getState()
  const max = coin.tradePairLeverList?.[0]?.maxLever || 1
  const cacheLever = futuresSettings.leverCache[coin.id!]
  if (cacheLever <= max) {
    return cacheLever
  }

  return max >= 20 ? 20 : 1
}
export function getFutureGroupMarginSource(groupId: number | string) {
  const { settings: futuresSettings } = baseFutureTradeStore.getState()

  return futuresSettings.groupMarginSourceCache[groupId] || TradeFutureMarginTypeInReqEnum.assets
}
type ICheckStrategyPriceParams = {
  entrustType: EntrustTypeEnum
  isBuy: boolean
  lossPrice: string
  profitPrice: string
  entrustPrice: string
  triggerPrice: string
  /** 0 是买 1 价，1 是卖 1 价 */
  depthQuotePrice: string[]
  isMarketPrice: boolean
}
function checkStrategyLossPrice({ depthQuotePrice, lossPrice, isBuy }: ICheckStrategyPriceParams) {
  if (!lossPrice) {
    return true
  }
  // 开多止损小于卖一价，开空止损大于买一价
  return isBuy
    ? SafeCalcUtil.sub(lossPrice, depthQuotePrice[1]).lt(0)
    : SafeCalcUtil.sub(lossPrice, depthQuotePrice[0]).gt(0)
}
function checkStrategyProfitPrice({ depthQuotePrice, profitPrice, isBuy }: ICheckStrategyPriceParams) {
  if (!profitPrice) {
    return true
  }

  // 开多止盈大于卖一价，开空止盈小于买一价
  return isBuy
    ? SafeCalcUtil.sub(profitPrice, depthQuotePrice[1]).gt(0)
    : SafeCalcUtil.sub(profitPrice, depthQuotePrice[0]).lt(0)
}
/**
 * 校验止盈止损规则
 * @return 校验通过
 */
export function checkStrategyPrice(params: ICheckStrategyPriceParams) {
  // 市价取盘口价
  let depthQuotePrice = params.isBuy
    ? [params.depthQuotePrice[0], params.depthQuotePrice[0]]
    : [params.depthQuotePrice[1], params.depthQuotePrice[1]]
  // 限价和计划限价取委托价
  if (
    params.entrustType === EntrustTypeEnum.limit ||
    (params.entrustType === EntrustTypeEnum.plan && !params.isMarketPrice)
  ) {
    depthQuotePrice = [params.entrustPrice, params.entrustPrice]
  } else if (params.entrustType === EntrustTypeEnum.plan && params.isMarketPrice) {
    depthQuotePrice = [params.triggerPrice, params.triggerPrice]
  }
  return (
    checkStrategyLossPrice({
      ...params,
      depthQuotePrice,
    }) &&
    checkStrategyProfitPrice({
      ...params,
      depthQuotePrice,
    })
  )
}

export function getFutureGroupNameDisplay(name?: string) {
  const customName = t({
    id: 'features_trade_future_exchange_order_32o9pqjx626rkvq1tai0l',
    values: { 0: name },
  })
  // 名称由服务端处理，这里暂时保留
  return name ? name || customName : t`constants_order_745`
}

export function getTradeDefaultSeoMeta(pageTitle?: string) {
  const values = {
    businessName: getBusinessName(),
  }
  const preTitle = pageTitle ? `${pageTitle} | ` : ''

  return {
    title: `${preTitle}${t({
      id: `constants_seo_shzg4jjamh`,
      values,
    })}`,
    description: `${preTitle}${t({
      id: `constants_seo_i467vaqbwg`,
      values,
    })}`,
  }
}
