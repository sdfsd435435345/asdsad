import Icon from '@/components/icon'
import { MarketTradePopoverContent } from '@/features/market/market-home-global-search'
import { Popup } from 'react-vant'
import { useMarketListStore } from '@/store/market/market-list'
import styles from '@/features/market/market-home-global-search/index.module.css'
import { memo } from 'react'

// added memo to prevent unnecessary render from header component
export const MarketSearchFeatureSpotTrade = memo(
  (props: { from?: 'kline' | 'trade' }) => {
    const store = useMarketListStore().spotMarketsTradeModule
    return (
      <>
        <Icon
          className="common-icon"
          name="contract_switch"
          hasTheme
          onClick={() => {
            store.setIsSearchPopoverVisible(true)
          }}
        />

        <Popup
          destroyOnClose
          visible={store.isSearchPopoverVisible}
          position="left"
          style={{ width: '80%', height: '100%' }}
          onClose={() => {
            store.resetSearchState()
          }}
          className={`${styles['market-trade-popover']}`}
        >
          <MarketTradePopoverContent from={props.from} />
        </Popup>
      </>
    )
  },
  (prev, curr) => prev.from === curr.from
)
