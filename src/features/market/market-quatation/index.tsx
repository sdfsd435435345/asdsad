import Icon from '@/components/icon'
import TabSwitch from '@/components/tab-switch'
import {
  getMarketTabsConfig,
  MarketLisModulesEnum,
  MarketListRouteEnum,
} from '@/constants/market/market-list/market-module'
import MarketNotificationDisplay from '@/features/market/market-quatation/common/market-notification-display'
import { link } from '@/helper/link'
import { useMarketListStore } from '@/store/market/market-list'
import { Sticky } from 'react-vant'
import { useEffect } from 'react'
import styles from './index.module.css'

type IProps = {
  moduleName: MarketListRouteEnum
  children?: React.ReactNode
}

const ModulesTabList = ({ moduleName }: IProps) => {
  const tabList: any[] = getMarketTabsConfig()

  return (
    <>
      <div className="module-tabs">
        <TabSwitch tabList={tabList as any} defaultId={moduleName} />
      </div>
      <div className="functional-icons"></div>
    </>
  )
}

export default function MarketListLayout({ moduleName, children }: IProps) {
  const store = useMarketListStore()

  useEffect(() => {
    store.setActiveModule(
      moduleName === MarketListRouteEnum.spot ? MarketLisModulesEnum.spotMarkets : MarketLisModulesEnum.futuresMarkets
    )
  }, [moduleName])

  return (
    <div className={`${styles['market-common']} ${styles.scoped}`}>
      <Sticky>
        <div className="header-wrapper">
          <ModulesTabList moduleName={moduleName} />
          <span>
            <Icon name="trending-up" hasTheme onClick={() => link('/market/activity')} />
            <Icon name="search" hasTheme onClick={() => link(MarketListRouteEnum.search)} />
          </span>
        </div>

        {moduleName === MarketListRouteEnum.spot ||
          (moduleName === MarketListRouteEnum.futures && <MarketNotificationDisplay />)}
      </Sticky>

      <div className="market-list-content">{children}</div>
    </div>
  )
}
