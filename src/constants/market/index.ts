import { YapiGetV1PerpetualTradePairDetailData } from '@/typings/yapi/PerpetualTradePairDetailV1GetApi'
import { Options } from 'ahooks/lib/useRequest/src/types'

export enum CoinActionEnum {
  Collect = 1,
  Cancel = -1,
}

/** 图表时间 */
export const totalShareTimeList = [
  {
    unit: 'time',
    value: 1,
  },
  {
    unit: 'm',
    value: 1,
  },
  // {
  //   unit: 'm',
  //   value: 3,
  // },
  {
    unit: 'm',
    value: 5,
  },
  {
    unit: 'm',
    value: 15,
  },
  {
    unit: 'm',
    value: 30,
  },
  {
    unit: 'h',
    value: 1,
  },
  {
    unit: 'h',
    value: 2,
  },
  {
    unit: 'h',
    value: 4,
  },
  {
    unit: 'h',
    value: 6,
  },
  // {
  //   unit: 'h',
  //   value: 8,
  // },
  {
    unit: 'h',
    value: 12,
  },
  {
    unit: 'D',
    value: 1,
  },
  {
    unit: 'D',
    value: 3,
  },
  {
    unit: 'D',
    value: 5,
  },
  {
    unit: 'W',
    value: 1,
  },
  {
    unit: 'M',
    value: 1,
  },
  // {
  //   unit: 'M',
  //   value: 3,
  // },
  // {
  //   unit: 'M',
  //   value: 6,
  // },
  // {
  //   unit: 'Y',
  //   value: 1,
  // },
]

export const initialShareTimeList = [
  {
    unit: 'time',
    value: 1,
  },
  {
    unit: 'm',
    value: 15,
  },
  {
    unit: 'h',
    value: 1,
  },
  {
    unit: 'h',
    value: 4,
  },
  {
    unit: 'D',
    value: 1,
  },
]

export const restShareTimeList = [
  {
    unit: 'm',
    value: 1,
  },
  // {
  //   unit: 'm',
  //   value: 3,
  // },
  {
    unit: 'm',
    value: 5,
  },
  {
    unit: 'm',
    value: 30,
  },

  {
    unit: 'h',
    value: 2,
  },
  {
    unit: 'h',
    value: 6,
  },
  // {
  //   unit: 'h',
  //   value: 8,
  // },
  {
    unit: 'h',
    value: 12,
  },
  {
    unit: 'D',
    value: 3,
  },
  {
    unit: 'D',
    value: 5,
  },
  {
    unit: 'W',
    value: 1,
  },
  {
    unit: 'M',
    value: 1,
  },
  // {
  //   unit: 'M',
  //   value: 3,
  // },
  // {
  //   unit: 'M',
  //   value: 6,
  // },
  // {
  //   unit: 'Y',
  //   value: 1,
  // },
]

export enum MarketDetailTabTypeEnum {
  /** 委托订单 */
  order = 0,
  /** 最新成交 */
  deal,
  /** 行情异动 */
  activities,
}

export const initSubIndicator = {
  macd: {
    select: false,
    expand: false,
    init: {
      fast: 12,
      slow: 26,
      signal: 9,
    },
    cur: {
      fast: 12,
      slow: 26,
      signal: 9,
    },
  },
  kdj: {
    select: false,
    expand: false,
    init: {
      k: 14,
      d: 3,
      j: 3,
    },
    cur: {
      k: 14,
      d: 3,
      j: 3,
    },
  },
  rsi: {
    select: false,
    expand: false,
    init: [
      {
        value: 6,
        select: true,
        color: '#7F4E86',
      },
      {
        value: 12,
        select: true,
        color: '#ECC581',
      },
      {
        value: 24,
        select: true,
        color: '#D057E4',
      },
    ],
    cur: [
      {
        value: 6,
        select: true,
        color: '#7F4E86',
      },
      {
        value: 12,
        select: true,
        color: '#ECC581',
      },
      {
        value: 24,
        select: true,
        color: '#D057E4',
      },
    ],
  },
  wr: {
    select: false,
    expand: false,
    init: [
      {
        value: 14,
        select: true,
        color: '#7F4E86',
      },
      // {
      //   value: '',
      //   select: true,
      //   color: '#ECC581',
      // },
      // {
      //   value: '',
      //   select: true,
      //   color: '#D057E4',
      // },
    ],
    cur: [
      {
        value: 14,
        select: true,
        color: '#7F4E86',
      },
      // {
      //   value: '',
      //   select: true,
      //   color: '#ECC581',
      // },
      // {
      //   value: '',
      //   select: true,
      //   color: '#D057E4',
      // },
    ],
  },
}

export const initMainIndicator = {
  ma: {
    select: true,
    expand: false,
    init: [
      {
        checked: true,
        select: true,
        strip: 5,
        type: 'close',
        color: '#7F4E86',
      },
      {
        checked: true,
        select: false,
        strip: 10,
        type: 'close',
        color: '#ECC581',
      },
      {
        checked: true,
        select: false,
        strip: 20,
        type: 'close',
        color: '#D057E4',
      },
      {
        checked: true,
        select: false,
        strip: '',
        type: 'close',
        color: '#6F92EE',
      },
      {
        checked: true,
        select: false,
        strip: '',
        type: 'close',
        color: '#6F92EE',
      },
      {
        checked: true,
        select: false,
        strip: '',
        type: 'close',
        color: '#BE775B',
      },
    ],
    cur: [
      {
        checked: true,
        select: true,
        strip: 5,
        type: 'close',
        color: '#7F4E86',
      },
      {
        checked: true,
        select: true,
        strip: 10,
        type: 'close',
        color: '#ECC581',
      },
      {
        checked: true,
        select: true,
        strip: 20,
        type: 'close',
        color: '#D057E4',
      },
      {
        checked: true,
        select: false,
        strip: '',
        type: 'close',
        color: '#6F92EE',
      },
      {
        checked: true,
        select: false,
        strip: '',
        type: 'close',
        color: '#6F92EE',
      },
      {
        checked: true,
        select: false,
        strip: '',
        type: 'close',
        color: '#BE775B',
      },
    ],
  },
  boll: {
    select: false,
    expand: false,
    init: {
      mid: 20,
      std: 2,
    },
    cur: {
      mid: 20,
      std: 2,
    },
  },
}

// TODO 优化动态拉取
export const defaultCoinFixedInfo = {
  spot: {
    symbolName: 'BTCUSDT',
  },
  futures: {
    symbolName: 'BTCUSD',
  } as YapiGetV1PerpetualTradePairDetailData,
}

export const initCurrentCoin = {
  activeBtn: '',
  buyShortName: '',
  buySymbol: '',
  change: '',
  cny: '',
  digit: '',
  imageUrl: '',
  isOpen: '',
  sellShortName: '',
  sellSymbol: '',
  totalAmount: '',
  tradeId: 0,
  depthOffset: ['1', '0.1', '0.01'],
  /* 新币对详情* */
  amountOffset: 2,
  baseSymbolName: 'BTC',
  buyCoinId: 3,
  chg: '1.84',
  conceptId: 7,
  conceptName: 'NFT',
  favourite: 0,
  high: '',
  id: 0,
  last: '',
  low: '',
  maxAmount: 0,
  maxCount: 0,
  minAmount: 0,
  minCount: 0,
  open: '19504.08',
  priceOffset: 2,
  priceFloatRatio: 0.8,
  quoteSymbolName: 'USDT',
  quoteVolume: '41127800',
  sellCoinId: 2,
  sort: 0,
  // 默认不设置 value, 用于判断是否是初始状态
  symbolName: '',
  symbolWassName: '',
  time: 1665481080000,
  tradeArea: 0,
  volume: '212.78',
  marketStatus: 0,
  isShare: 2,
  markPrice: '',
  indexPrice: '',
}

export const initDescribe = {
  algorithm: null,
  blockSize: null,
  blockVelocity: null,
  chg: 0,
  circulation: '',
  circulationRate: '--',
  globalTurnover: '--',
  gmtCreate: null,
  gmtModified: null,
  gmtRelease: '',
  highlights: '',
  ico: null,
  icoPlatform: null,
  info: '',
  lanName: '0',
  lastPrice: 0,
  linkBlock: '',
  // eslint-disable-next-line no-script-url
  linkWallet: '',
  linkWebsite: '',
  linkWhitepaper: '',
  logo: '',
  maintenanceNotes: null,
  marketValue: '',
  nameEn: '',
  nameShort: '',
  nameZh: '',
  officialPhone: null,
  officialQq: null,
  officialWechat: null,
  price: '',
  rechargeWarnWord: '',
  scene: '',
  shortInfo: null,
  total: '',
  version: null,
  /* 新版接口 * */
  appLogo: '',
  circulatingPercent: 0,
  circulatingSupply: 0,
  coinId: 0,
  coinName: '',
  coinRemarks: '',
  explorerAddressUrl: '',
  favouritePercent: 0,
  favouritePercentFrom: 0,
  fullName: '',
  highest: 0,
  highestTime: 0,
  id: 0,
  lowest: 0,
  lowestTime: 0,
  maxSupply: 0,
  officialUrl: '',
  publicChain: '',
  startPrice: 0,
  startTime: 0,
  webLogo: '',
  whitePaper: '',
}

/**
 * ahooks useRequest SWR 能力配置（如果有缓存数据，我们会优先返回缓存数据，然后在背后发送新请求）
 * https://ahooks.js.org/zh-CN/hooks/use-request/cache#%E7%BC%93%E5%AD%98--swr
 * 默认配置：
 * 5 分钟后缓存被收回
 * 2 秒内数据是新鲜的，不重复发出请求
 */
export const ahookRequestSWRConfig: Options<any, any> = {
  // 缓存数据保持新鲜时间。在该时间间隔内，认为数据是新鲜的，不会重新发请求
  // 如果设置为 -1，则表示数据永远新鲜
  staleTime: 2000,

  // 设置缓存数据回收时间。默认缓存数据 5 分钟后回收
  // 如果设置为 -1, 则表示缓存数据永不过期
  cacheTime: 300000,
  retryCount: 1,
  manual: true,
}

/** k 线请求 */
export enum ChartKLineRequest {
  /** 拉取更多数据 */
  More = 'more',
  /** 行情异动 */
  MarketChanges = 'marketChanges',
  /** 依赖更新请求 */
  Dependencies = 'dependencies',
}
