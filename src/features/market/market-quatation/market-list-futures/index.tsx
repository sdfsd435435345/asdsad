import { useMarketListStore } from '@/store/market/market-list'
import { FuturesMarketBaseCurrenyEnum } from '@/constants/market/market-list/market-module'
import MarketFavoritesEditing from '@/features/market/market-quatation/common/market-favorites-editing'
import { useFuturesFavList } from '@/hooks/features/market/favourite'
import { MarketListFuturesTableContent } from '@/features/market/market-quatation/common/market-list/market-list-table-content-spot'
import { MarketFuturesListTableFavourites } from '@/features/market/market-quatation/common/market-list/market-list-table-favourites'
import { FuturesBaseCurrencyTabs } from '@/features/market/market-quatation/market-list-futures/market-list-futures-base-currency'
import commonStyles from '@/features/market/market-quatation/index.module.css'
import { MarketFuturesFavoritesDefault } from '../common/market-favorites/index'

export default function MarketListFutures() {
  const store = useMarketListStore().futuresMarketsModule
  const isFavTab = store.selectedBaseCurrencyFilter === FuturesMarketBaseCurrenyEnum.favorites
  const favList = useFuturesFavList().state || []

  return (
    <div className={`${commonStyles['market-table-common']} market-table-spot`}>
      <MarketFavoritesEditing />
      <FuturesBaseCurrencyTabs />

      {isFavTab ? (
        <>
          {favList.length > 0 ? (
            <MarketFuturesListTableFavourites from="market-list" />
          ) : (
            <MarketFuturesFavoritesDefault />
          )}
        </>
      ) : (
        <>
          <MarketListFuturesTableContent />
        </>
      )}
    </div>
  )
}
