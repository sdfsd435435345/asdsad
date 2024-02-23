import { YapiGetV1TradePairListData } from '@/typings/yapi/TradePairListV1GetApi';
import { IHomeModuleTabsCommonResp } from './market/market-list/home-module';
import { YapiGetV1PerpetualTradePairConceptListData } from '../yapi/PerpetualTradePairConceptListV1GetApi';
export type IPostCoinInfoReq = {
  shortName: string
  lang: string
}

export type IPostCoinInfoResp = {
  algorithm: null | string
  blockSize: null | string
  blockVelocity: null | string
  chg: number
  circulation: string
  circulationRate: string
  coinId: number
  globalTurnover: string
  gmtCreate: null | string
  gmtModified: null | string
  gmtRelease: string
  highlights: string
  ico: null | string
  icoPlatform: null | string
  id: number
  info: string
  lanName: string
  lastPrice: number
  linkBlock: string
  linkWallet: string
  linkWebsite: string
  linkWhitepaper: string
  logo: string
  maintenanceNotes: null | string
  marketValue: string
  nameEn: string
  nameShort: string
  nameZh: string
  officialPhone: null | string
  officialQq: null | string
  officialWechat: null | string
  price: string
  rechargeWarnWord: string
  scene: string
  shortInfo: null | string
  total: string
  version: null | string
}

export type IPostFavoriteJsonReq = {
  operate: number
  tradeId: number
}

export type IPostFavoriteJsonResp = Array<string>

export type SymbolList = {
  buyCoinFullName: string
  buyFee: string
  buyShortName: string
  buySymbol: string
  digit: string
  favorite: boolean
  imageUrl: string
  isMarginTrade: boolean
  isNew: boolean
  isOpen: string
  isPriceAlert: boolean
  isShow: boolean
  label: string
  labelId: number
  marginRatio: string
  openTime: null | string | number
  sellCoinFullName: string
  sellFee: string
  sellShortName: string
  sellSymbol: string
  tradeArea: number
  tradeId: number
}

export type TradeLabelList = {
  id: number
  labelCn: string
  labelEn: string
  sort: number
}

export type IGetSymbolLabelInfoResp = {
  symbolList: Array<SymbolList>
  tradeLabelList: Array<TradeLabelList>
}

// export type IPostV3FullDepthReq = {
//   tradeId: number
//   limit: number
// }

// export type IPostV3FullDepthResp = {
//   asks: Array<Array<string>>
//   bids: Array<Array<string>>
//   buyOrSellCnyPrice: string
//   cny: string
//   last: string
//   open: string
//   usdtCnyPrice: number
// }

// export type IGetMarkketTickerResp = {
//   tradeId: number
//   chg: string
//   lower: string
//   last: string
//   hign: string
//   open: string
//   quoteVolume: string
//   volume: string
//   time: number
// }

export type IGetKlineHistoryReq = {
  tradeId: number
  interval: string
  endTime?: string
  limit: number
  // period: string
  // from: string
  // limit: number
  // direction: number
}

export type IPostPerpetualPublicListResp = {
  amount24: string
  base: string
  code: string
  countDownTimeInterval: string
  direction: number
  env: number
  fluctuation: string
  fund: string
  high: string
  indexBase: string
  indexPrice: string
  lastCny: string
  low: string
  makerRate: string
  marginDigit: number
  markPrice: string
  marketPriceDigit: number
  maxLever: number
  minQuoteDigit: number
  minTradeDigit: number
  minTradeUnit: number
  nextLiquidationInterval: number
  openTradeTime: string
  price: string
  quote: string
  size24: string
  sort: number
  takerRate: string
  totalPosition: string
  tradeStatus: number
  unitAmount: number
  unitAmountStr: string
}

export type IGetPerpetualPublicOrderbookResp = {
  asks: Array<Array<string>>
  bids: Array<Array<string>>
}

export type ICommonTradePairType = Partial<YapiGetV1TradePairListData> | Partial<IHomeModuleTabsCommonResp>


export type IApiResponse<T> = {
  isLoading: boolean,
  data?: T,
}

export type TFuturesTradeBaseCurrencyTab = YapiGetV1PerpetualTradePairConceptListData & {title: string}