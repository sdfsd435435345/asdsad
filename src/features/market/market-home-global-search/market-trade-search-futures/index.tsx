import Icon from '@/components/icon'
import { MarketTradePopoverContentFutures } from '@/features/market/market-home-global-search'
import { Popup } from 'react-vant'
import { useMarketListStore } from '@/store/market/market-list'
import styles from '@/features/market/market-home-global-search/index.module.css'

export const MarketSearchFeatureFuturesTrade = (props: { from?: 'kline' | 'trade' }) => {
  const store = useMarketListStore().futuresMarketsTradeModule

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
        visible={store.isSearchPopoverVisible}
        position="left"
        style={{ width: '80%', height: '100%' }}
        onClose={() => {
          store.resetSearchState()
        }}
        className={`${styles['market-trade-popover']}`}
      >
        <MarketTradePopoverContentFutures from={props.from} />
      </Popup>
    </>
  )
}
