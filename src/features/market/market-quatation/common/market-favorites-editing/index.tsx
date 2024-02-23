import { getMrkFavTabsConfig } from '@/constants/market/market-list/favorite-module'
import { Divider, Popup, Tabs } from 'react-vant'
import { useEffect, useState } from 'react'
import { useMarketListStore } from '@/store/market/market-list'
import { MarketLisModulesEnum } from '@/constants/market/market-list/market-module'
import { FuturesDraggableList, SpotDraggableList } from './draggable-list'
import { FuturesFavoritesHeader, SpotFavoritesHeader } from './favorites-header'
import { FuturesMarketCheckboxForm, SpotMarketCheckboxForm } from './market-checkbox-form'
import styles from './index.module.css'

export default function () {
  const { activeModule } = useMarketListStore()
  const [currentTab, setcurrentTab] = useState(activeModule)
  const { isFavEditOpen } = useMarketListStore()

  useEffect(() => {
    setcurrentTab(activeModule)
  }, [isFavEditOpen])

  return (
    <div className={`${'market-favortes-editing'} ${styles.scoped}`}>
      <Popup visible={isFavEditOpen} className={styles['fav-edit-popover']} position="right">
        {currentTab === MarketLisModulesEnum.spotMarkets ? <SpotFavoritesHeader /> : <FuturesFavoritesHeader />}
        <Divider hairline />
        {isFavEditOpen && (
          <Tabs sticky type="card" onChange={name => setcurrentTab(name as MarketLisModulesEnum)} active={currentTab}>
            {getMrkFavTabsConfig().map((tab, index) =>
              tab.id === MarketLisModulesEnum.spotMarkets ? (
                <Tabs.TabPane key={tab.id} index={index} name={tab.id} title={tab.title}>
                  <SpotMarketCheckboxForm key={tab.id}>
                    {currentTab === MarketLisModulesEnum.spotMarkets && <SpotDraggableList />}
                  </SpotMarketCheckboxForm>
                </Tabs.TabPane>
              ) : (
                <Tabs.TabPane key={tab.id} index={index} name={tab.id} title={tab.title}>
                  <FuturesMarketCheckboxForm key={tab.id}>
                    {currentTab === MarketLisModulesEnum.futuresMarkets && <FuturesDraggableList />}
                  </FuturesMarketCheckboxForm>
                </Tabs.TabPane>
              )
            )}
          </Tabs>
        )}
      </Popup>
    </div>
  )
}
