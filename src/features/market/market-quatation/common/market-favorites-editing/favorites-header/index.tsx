import { useFuturesFavActions, useSpotFavActions } from '@/hooks/features/market/favourite'
import { useFuturesFavStore, useSpotFavStore } from '@/store/market/market-favorite'
import { useMarketListStore } from '@/store/market/market-list'
import { t } from '@lingui/macro'
import { Toast } from 'react-vant'
import styles from './index.module.css'

function SpotFavoritesHeader() {
  // const { favoriteSnapshot, editFavList, toggleFavEdit } = useMarketStore()
  const { toggleFavEdit } = useMarketListStore()
  const { favListSnap } = useSpotFavStore()
  const { editFavList } = useSpotFavActions()
  return (
    <div className={styles.scoped}>
      <span className="text-text_color_01 font-medium text-lg">{t`features_market_market_quatation_common_market_favorites_editing_favorites_header_index_5101063`}</span>
      <span
        className="text-brand_color mr-4"
        onClick={async () => {
          try {
            await editFavList(favListSnap)
            toggleFavEdit()
          } catch (error) {
            Toast.fail({
              message: t`features_market_market_quatation_common_market_favorites_editing_favorites_header_index_5101102`,
            })
          }
        }}
      >
        {t`assets.financial-record.complete`}
      </span>
    </div>
  )
}

function FuturesFavoritesHeader() {
  // const { favoriteSnapshot, editFavList, toggleFavEdit } = useMarketStore()
  const { toggleFavEdit } = useMarketListStore()
  const { favListSnap } = useFuturesFavStore()
  const { editFavList } = useFuturesFavActions()
  return (
    <div className={styles.scoped}>
      <span className="text-text_color_01 font-medium text-lg">{t`features_market_market_quatation_common_market_favorites_editing_favorites_header_index_5101063`}</span>
      <span
        className="text-brand_color mr-4"
        onClick={async () => {
          try {
            await editFavList(favListSnap)
            toggleFavEdit()
          } catch (error) {
            Toast.fail({
              message: t`features_market_market_quatation_common_market_favorites_editing_favorites_header_index_5101102`,
            })
          }
        }}
      >
        {t`assets.financial-record.complete`}
      </span>
    </div>
  )
}

export { SpotFavoritesHeader, FuturesFavoritesHeader }
