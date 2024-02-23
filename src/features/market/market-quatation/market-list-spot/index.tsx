import { useMarketListStore } from '@/store/market/market-list'
import { sportMarketsBaseCurrencyFilter } from '@/constants/market/market-list/market-module'
import MarketFavoritesEditing from '@/features/market/market-quatation/common/market-favorites-editing'
import { SpotBaseCurrencyTabs } from '@/features/market/market-quatation/market-list-spot/market-list-spot-base-currency'
import { useSpotFavList } from '@/hooks/features/market/favourite'
import MarketListSpotTableContent from '@/features/market/market-quatation/common/market-list/market-list-table-content-spot'
import { MarketSpotListTableFavourites } from '@/features/market/market-quatation/common/market-list/market-list-table-favourites'
import { SpotCategoriesByBaseCurrency } from '@/features/market/market-quatation/market-list-spot/market-list-spot-categories-by-base-currency'
import commonStyles from '@/features/market/market-quatation/index.module.css'
import { MarketSpotFavoritesDefault } from '../common/market-favorites/index'

export default function MarketListSpot() {
  const store = useMarketListStore().spotMarketsModule
  const isFavTab = store.selectedBaseCurrencyFilter === sportMarketsBaseCurrencyFilter()[0].id
  const favList = useSpotFavList().state || []

  return (
    <div className={`${commonStyles['market-table-common']} market-table-spot`}>
      <MarketFavoritesEditing />
      <SpotBaseCurrencyTabs />

      {isFavTab ? (
        <>
          {favList.length > 0 ? <MarketSpotListTableFavourites from="market-list" /> : <MarketSpotFavoritesDefault />}
        </>
      ) : (
        <>
          <SpotCategoriesByBaseCurrency />
          <MarketListSpotTableContent />
        </>
      )}
    </div>
  )
}
