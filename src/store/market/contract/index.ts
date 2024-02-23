import { subscribeWithSelector } from 'zustand/middleware'
import create from 'zustand'
import produce from 'immer'
import { createTrackedSelector } from 'react-tracked'
import {
  totalShareTimeList,
  initialShareTimeList,
  restShareTimeList,
  MarketDetailTabTypeEnum,
  initCurrentCoin,
  defaultCoinFixedInfo,
  initDescribe,
} from '@/constants/market'
import { YapiGetV1CoinQueryMainCoinListCoinListData } from '@/typings/yapi/CoinQueryMainCoinListV1GetApi'
import { YapiGetV1PerpetualTradePairListData } from '@/typings/yapi/PerpetualTradePairListV1GetApi'
import { YapiGetV1PerpetualTradePairDetailData } from '@/typings/yapi/PerpetualTradePairDetailV1GetApi'
import { sortByHelper } from '@/helper/market/market-list'
import { quoteVolumneTableSorter } from '@/constants/market/market-list'
import { uniqBy } from 'lodash'

type IStore = ReturnType<typeof getStore>

function getStore(set, get) {
  return {
    currentPriceType: 'perpetual_kline',
    updateCurrentPriceType: newCurrentPriceType => set(() => ({ currentPriceType: newCurrentPriceType })),
    marketChangesTime: 0,
    updateMarketChangesTime: newMarketChangesTime => set(() => ({ marketChangesTime: newMarketChangesTime })),
    currentTab: MarketDetailTabTypeEnum.order, // 当前 tab
    updateCurrentTab: (newCurrentTab: number) =>
      set(
        produce((state: IStore) => {
          state.currentTab = newCurrentTab
        })
      ),
    totalShareTimeList,
    initialShareTimeList,
    updateInitialShareTimeList: newInitialShareTimeList =>
      set(
        produce((state: IStore) => {
          state.initialShareTimeList = newInitialShareTimeList
        })
      ),
    restShareTimeList,
    updateRestShareTimeList: newRestShareTimeList =>
      set(
        produce((state: IStore) => {
          state.restShareTimeList = newRestShareTimeList
        })
      ),
    currentInitPrice: {
      // 当前选中的买/卖价格
      buyPrice: '21469.55',
      sellPrice: '21469.55',
    },
    updateCurrentInitPrice: newCurrentInitPrice =>
      set(
        produce((state: IStore) => {
          state.currentInitPrice = newCurrentInitPrice
        })
      ),
    userFavoriteList: [], // 自选数组
    updateUserFavoriteList: newUserFavoriteList =>
      set(
        produce((state: IStore) => {
          state.userFavoriteList = newUserFavoriteList
        })
      ),
    defaultCoin: defaultCoinFixedInfo.futures,
    updateDefaultCoin: (data: YapiGetV1PerpetualTradePairDetailData) => {
      set(
        produce((draft: IStore) => {
          draft.defaultCoin = data
        })
      )
    },

    // 当前商户的合约默认法币
    currencyStandardType: 'USD',
    updateContractCurrencyType: (data: string) => {
      set(
        produce((draft: IStore) => {
          draft.currencyStandardType = data
        })
      )
    },

    /** 币种信息 */
    currentCoin: initCurrentCoin as unknown as YapiGetV1PerpetualTradePairDetailData,
    /** 不带价格的币种信息，避免多次更新 */
    currentCoinExcludePrice: initCurrentCoin as unknown as YapiGetV1PerpetualTradePairDetailData,
    updateCurrentCoin: newCurrentCoin =>
      // produce 会冻结某些属性导致读取报错
      set((state: IStore) => {
        // id 不一样、之前没有杠杆、指定的属性数据不一样
        const shouldUpdateExcludePriceProps = ['assetsFeeRate']
        const shouldUpdateExcludePrice =
          newCurrentCoin.id !== state.currentCoinExcludePrice.id ||
          !state.currentCoinExcludePrice.tradePairLeverList ||
          shouldUpdateExcludePriceProps.some(prop => newCurrentCoin[prop] !== state.currentCoinExcludePrice[prop])

        return {
          ...state,
          currentCoinExcludePrice: !shouldUpdateExcludePrice ? state.currentCoinExcludePrice : newCurrentCoin,
          currentCoin: newCurrentCoin,
        }
      }),
    describe: initDescribe, // 币种资料
    updateCurrentCoinDescribe: newCurrentCoinDescribe =>
      set(
        produce((state: IStore) => {
          state.describe = newCurrentCoinDescribe
        })
      ),
    klineCallback(value) {},
    updateKlineCallback: newKlineCallback =>
      set(
        produce((state: IStore) => {
          state.klineCallback = newKlineCallback
        })
      ),
    coinHistoryKline: {
      r: '',
      t: new Date().getTime(),
    },
    updateCoinHistoryKline: newCoinHistoryKline =>
      set(
        produce((state: IStore) => {
          state.coinHistoryKline = newCoinHistoryKline
        })
      ),
    depthList: {
      asks: [['']],
      bids: [['']],
      buyOrSellCnyPrice: '',
      cny: '',
      last: '',
      open: '',
      usdtCnyPrice: 0,
    },
    updateDepthList: newDepthList =>
      set(
        produce((state: IStore) => {
          state.depthList = newDepthList
        })
      ),
    coinSelectedHistoryList: [] as YapiGetV1PerpetualTradePairListData[],
    loadCoinSelectedHistoryList() {
      const store = get()
      const data = [store.currentCoin, ...sortByHelper(store.allTradePairs, quoteVolumneTableSorter)]
      store.updateCoinSelectedHistoryList(data)
    },
    updateCoinSelectedHistoryList: (newTradePair: YapiGetV1PerpetualTradePairListData[]) => {
      set(
        produce((state: IStore) => {
          state.coinSelectedHistoryList = uniqBy(
            [...newTradePair, ...state.coinSelectedHistoryList].filter(x => !!x.symbolName).slice(0, 10),
            x => x.id
          )
        })
      )
    },
    cleanCoinSelectedHistoryList: () => {
      set(
        produce((state: IStore) => {
          state.coinSelectedHistoryList = []
        })
      )
    },
    /** 所有的币对基本信息 */
    allTradePairs: [] as YapiGetV1PerpetualTradePairListData[],
    updateAllTradePairs(data: YapiGetV1PerpetualTradePairListData[]) {
      set(
        produce((state: IStore) => {
          state.allTradePairs = data
        })
      )
    },
    /** 所有币种的基本信息 */
    allCoinSymbolInfo: [] as YapiGetV1CoinQueryMainCoinListCoinListData[],
    udpateAllCoinSymbolInfo(data: YapiGetV1CoinQueryMainCoinListCoinListData[]) {
      set(
        produce((state: IStore) => {
          state.allCoinSymbolInfo = data
        })
      )
    },
  }
}

const baseContractMarketStore = create(subscribeWithSelector(getStore))

const useContractMarketStore = createTrackedSelector(baseContractMarketStore)

export { baseContractMarketStore, useContractMarketStore }
