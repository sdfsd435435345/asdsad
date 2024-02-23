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
import { YapiGetV1TradePairListData } from '@/typings/yapi/TradePairListV1GetApi'
import { YapiGetV1CoinQueryMainCoinListCoinListData } from '@/typings/yapi/CoinQueryMainCoinListV1GetApi'
import { uniqBy } from 'lodash'
import { sortByHelper } from '@/helper/market/market-list'
import { quoteVolumneTableSorter } from '@/constants/market/market-list'

type IStore = ReturnType<typeof getStore>

function getStore(set, get) {
  return {
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
    defaultCoin: defaultCoinFixedInfo.spot,
    /** 币种信息 */
    currentCoin: initCurrentCoin,
    /** 不带价格的币种信息，避免多次更新 */
    currentCoinExcludePrice: initCurrentCoin,
    updateCurrentCoin: newCurrentCoin =>
      // produce 会冻结某些属性导致读取报错
      set((state: IStore) => {
        return {
          ...state,
          currentCoinExcludePrice:
            newCurrentCoin.id === state.currentCoinExcludePrice.id ? state.currentCoinExcludePrice : newCurrentCoin,
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
    coinSelectedHistoryList: [] as YapiGetV1TradePairListData[],
    loadCoinSelectedHistoryList() {
      const store = get()
      const data = [store.currentCoin, ...sortByHelper(store.allTradePairs, quoteVolumneTableSorter)]
      store.updateCoinSelectedHistoryList(data)
    },
    updateCoinSelectedHistoryList: (newTradePair: YapiGetV1TradePairListData[]) => {
      set(
        produce((state: IStore) => {
          state.coinSelectedHistoryList = uniqBy(
            [...newTradePair, ...state.coinSelectedHistoryList].filter(x => !!x.symbolName).slice(0, 10),
            x => x.id
          )
        })
      )
    },

    /** 所有的币对基本信息 */
    allTradePairs: [] as YapiGetV1TradePairListData[],
    updateAllTradePairs(data: YapiGetV1TradePairListData[]) {
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

const baseMarketStore = create(subscribeWithSelector(getStore))

const useMarketStore = createTrackedSelector(baseMarketStore)

export { useMarketStore, baseMarketStore }
