import { MarketLisModulesEnum } from '@/constants/market/market-list/market-module'
import { useFuturesFavActions, useSpotFavActions } from '@/hooks/features/market/favourite'
import { useFuturesFavStore, useSpotFavStore } from '@/store/market/market-favorite'
import { useMarketListStore } from '@/store/market/market-list'
import { t } from '@lingui/macro'
import { Button, Divider, Popover, Toast } from 'react-vant'
import { useEffect, useState } from 'react'
import styles from './index.module.css'

function BaseFavoritePopoverButtons({ data, contextStore, contextActions }) {
  const { children, reference, ...item } = data
  // const popover = useRef<PopoverInstance>(null)
  const { addFavToList, rmFavFromList } = contextActions()
  const { favList } = contextStore()
  const { toggleFavEdit } = useMarketListStore()
  const [isChecked, setisChecked] = useState<boolean>(!!favList?.find(each => item.id === each.id))

  useEffect(() => {
    const handleClickOutside = event => {
      reference.current?.hide()
    }
    document.addEventListener('mousedown', handleClickOutside)
  }, [reference])

  useEffect(() => {
    setisChecked(!!favList?.find(each => item.id === each.id))
  }, [favList])
  return (
    <span
      onClick={e => {
        // e.stopPropagation()
      }}
    >
      <Popover
        trigger="manual"
        className={styles.scoped}
        ref={reference}
        placement="top"
        reference={children}
        theme={'dark'}
      >
        {!isChecked ? (
          <span
            onClick={async () => {
              await addFavToList([item])
              Toast.info({ message: t`components_collect_star_index_5101328` })
            }}
          >
            {t`features_market_market_quatation_common_market_favorites_index_5101067`}
          </span>
        ) : (
          <span
            onClick={async () => {
              await rmFavFromList([item])
              Toast.info({
                message: t`features_market_market_quatation_common_market_favorites_editing_market_checkbox_form_index_5101062`,
              })
            }}
          >
            {t`features_market_market_quatation_common_market_favorites_favorite_popover_buttons_index_5101068`}
          </span>
        )}
        <Divider type="vertical" />
        <span
          onClick={() => {
            toggleFavEdit()
          }}
        >
          {t`features_market_market_quatation_common_market_favorites_favorite_popover_buttons_index_5101069`}
        </span>
      </Popover>
    </span>
  )
}

export default function FavoritePopoverButtons(props) {
  const active = useMarketListStore().activeModule

  return (
    <BaseFavoritePopoverButtons
      data={props}
      contextStore={active === MarketLisModulesEnum.spotMarkets ? useSpotFavStore : useFuturesFavStore}
      contextActions={active === MarketLisModulesEnum.spotMarkets ? useSpotFavActions : useFuturesFavActions}
    />
  )
}
