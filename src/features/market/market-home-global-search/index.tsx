import { useMarketListStore } from '@/store/market/market-list'
import HotSearching, { FuturesHotSearching } from '@/features/market/market-home-global-search/hot-searching'
import NavBar from '@/components/navbar'
import { t } from '@lingui/macro'
import { SpotTradeBaseCurrencyTabs } from '@/features/market/market-quatation/market-list-spot/market-list-spot-base-currency'
import { FuturesMarketBaseCurrenyEnum, SpotMarketBaseCurrenyEnum } from '@/constants/market/market-list/market-module'
import { useRef, useEffect, useState } from 'react'
import { MarketGlobalSearchResult } from '@/features/market/market-home-global-search/seach-result'
import MarketListTradeTableContent, {
  MarketTradeSearchFuturesTradeTable,
  MarketListTradeFuturesTableContent,
  MarketSpotTradeSearchSpotTable,
} from '@/features/market/market-quatation/common/market-list/market-list-table-content-trade'
import {
  MarketFuturesListTableFavourites,
  MarketSpotListTableFavourites,
} from '@/features/market/market-quatation/common/market-list/market-list-table-favourites'
import { SpotTradeCategoriesByBaseCurrency } from '@/features/market/market-quatation/market-list-spot/market-list-spot-categories-by-base-currency'
import { FuturesTradeBaseCurrencyTabs } from '@/features/market/market-quatation/market-list-futures/market-list-futures-base-currency-trade'
import { useAllFavList } from '@/hooks/features/market/favourite'
import MarketSearchingBarSpotTrade, {
  MarketSearchingBarGlobal,
  MarketSearchingBarFuturesTrade,
} from '@/features/market/market-home-global-search/search-bar'
import classNames from 'classnames'
import styles from './index.module.css'
import MarketGlobalSearchHistory, {
  MarketFuturesTradeSearchHistory,
  MarketSpotTradeSearchHistory,
} from './global-search-history'

/** 交易搜索模块 */
export function MarketTradePopoverContent({ from }: { from?: 'kline' | 'trade' }) {
  const { searchInput, isSearchInputFocused, ...store } = useMarketListStore().spotMarketsTradeModule

  const isSearching = searchInput && searchInput.trim()
  const isJustFocused = isSearchInputFocused && !isSearching
  const isDefault = !isJustFocused && !isSearching
  const isFavTab = isDefault && store.selectedBaseCurrencyFilter === SpotMarketBaseCurrenyEnum.favorites

  // 用于 just focused 状态时界面的判断点击事件，以免回到默认状态
  const justFocusedRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!isJustFocused) return

    justFocusedRef.current?.addEventListener('mousedown', e => {
      // mousedown event 优先级高于 onBlur，停止防止搜索 onBlur event 导致 state 变化
      e.preventDefault()
    })

    return () => {
      justFocusedRef.current?.removeEventListener('mousedown', () => {})
    }
  }, [justFocusedRef, isJustFocused])

  return (
    <div className={`${styles['market-search-common']} ${styles['trade-market-search-wrapper']}`}>
      <div className="title">{t`modules_trade_index_page_5101064`}</div>

      <div className="search-bar-trade">
        <MarketSearchingBarSpotTrade showAction={!!isJustFocused} />
      </div>

      <Optional isRender={!!isDefault}>
        <div className="on-default">
          <div className="base-currency-panel">
            <div className="base-currency-select">
              <SpotTradeBaseCurrencyTabs />
            </div>

            <div className="deault-content-wrapper">
              {isFavTab ? (
                <div className="fav-table">
                  <MarketSpotListTableFavourites from="trade" />
                </div>
              ) : (
                <div>
                  <div className="cattegory-select">
                    <SpotTradeCategoriesByBaseCurrency />
                  </div>
                  <div className="market-list-trade-search-table-content">
                    <MarketListTradeTableContent to={from} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Optional>

      <Optional isRender={!!isJustFocused}>
        <div className="on-focus" ref={justFocusedRef}>
          <div className="selected-coin-history-panel">
            <MarketSpotTradeSearchHistory from={'trade'} />
          </div>
          <div className="spot-hot-table">
            <div className="spot-hot-table-content">
              <HotSearching from={from === 'trade' ? 'trade' : 'kline'} />
            </div>
          </div>
        </div>
      </Optional>

      <Optional isRender={!!isSearching}>
        <div className="on-result">
          <div className="spot-trade-search-table">
            <MarketSpotTradeSearchSpotTable from={from === 'trade' ? 'trade' : 'kline'} />
          </div>
        </div>
      </Optional>
    </div>
  )
}

/** 全局搜索 */
export function MarketGlobalSearch() {
  useAllFavList()
  const { searchInput, isSearchInputFocused, ...store } = useMarketListStore()

  const isSearching = searchInput && searchInput.trim()
  const isJustFocused = !isSearching || (isSearchInputFocused && (!searchInput || !searchInput.trim()))

  return (
    <div className={`${styles['market-search-common']} ${styles['market-search-global-wrapper']}`}>
      <div className="nav-bar">
        <NavBar title={t`future.funding-history.search-future`} />
      </div>

      <div className="search-bar-global ">
        <MarketSearchingBarGlobal />
      </div>

      <Optional isRender={!!isJustFocused}>
        <div className="on-focus">
          <div className="selected-coin-history-panel">
            <MarketGlobalSearchHistory from="home" />
          </div>
          <div className="spot-hot-table">
            <div className="spot-hot-table-content">
              <HotSearching from={'kline'} />
            </div>
          </div>
        </div>
      </Optional>

      <Optional isRender={!!isSearching}>
        <div className="on-result">
          <div className="global-search-table">
            <MarketGlobalSearchResult />
          </div>
        </div>
      </Optional>
    </div>
  )
}

const Optional = function ({ children, isRender }: { children: any; isRender: boolean }) {
  return isRender ? children : null
}

/** 合约交易搜索模块 */
export function MarketTradePopoverContentFutures({ from }: { from?: 'kline' | 'trade' }) {
  const { searchInput, isSearchInputFocused, selectedTradeMode, ...store } =
    useMarketListStore().futuresMarketsTradeModule

  const [titleName, setTitleName] = useState(store.getTradeModeName())
  useEffect(() => {
    setTitleName(store.getTradeModeName())
  }, [selectedTradeMode])

  const isSearching = searchInput && searchInput.trim()
  const isJustFocused = isSearchInputFocused && !isSearching
  const isDefault = !isJustFocused && !isSearching
  const isFavTab = isDefault && store.selectedBaseCurrencyFilter === FuturesMarketBaseCurrenyEnum.favorites

  // 用于 just focused 状态时界面的判断点击事件，以免回到默认状态
  const justFocusedRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!isJustFocused) return

    justFocusedRef.current?.addEventListener('mousedown', e => {
      // mousedown event 优先级高于 onBlur，停止防止搜索 onBlur event 导致 state 变化
      e.preventDefault()
    })

    return () => {
      justFocusedRef.current?.removeEventListener('mousedown', () => {})
    }
  }, [justFocusedRef, isJustFocused])

  return (
    <div className={`${styles['market-search-common']} ${styles['trade-market-search-wrapper']}`}>
      <div className="title">{titleName}</div>

      <div className="search-bar-trade">
        <MarketSearchingBarFuturesTrade showAction={!!isJustFocused} />
      </div>

      <Optional isRender={isDefault}>
        <div className="on-default">
          <div className="base-currency-panel">
            <div className="base-currency-select">
              <FuturesTradeBaseCurrencyTabs />
            </div>

            <div className="deault-content-wrapper">
              <div className={classNames('fav-table', { hidden: !isFavTab })}>
                <MarketFuturesListTableFavourites from="trade" />
              </div>
              <div className={classNames('market-list-trade-search-table-content', { hidden: isFavTab })}>
                <MarketListTradeFuturesTableContent to={from} />
              </div>
            </div>
          </div>
        </div>
      </Optional>
      <Optional isRender={!!isJustFocused}>
        <div className="on-focus" ref={justFocusedRef}>
          <div className="selected-coin-history-panel">
            <MarketFuturesTradeSearchHistory from={'trade'} />
          </div>
          <div className="spot-hot-table">
            <div className="spot-hot-table-content">
              <FuturesHotSearching from={from === 'trade' ? 'trade' : 'kline'} />
            </div>
          </div>
        </div>
      </Optional>
      <Optional isRender={!!isSearching}>
        <div className="on-result">
          <div className="spot-trade-search-table">
            <MarketTradeSearchFuturesTradeTable from={from === 'trade' ? 'trade' : 'kline'} />
          </div>
        </div>
      </Optional>
    </div>
  )
}
