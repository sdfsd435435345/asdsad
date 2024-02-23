import { useFuturesFavActions, useSpotFavActions } from '@/hooks/features/market/favourite'
import {
  useWsMarketSpotFavouriteDefault,
  useWsMarketFuturesFavouriteDefault,
} from '@/hooks/features/market/market-list/use-ws-market-spot-favorite-default'
import { SpotFavoriteDefaultDataType } from '@/typings/api/market/market-list'
import { YapiGetV1FavouriteListData } from '@/typings/yapi/FavouriteListV1GetApi'
import { t } from '@lingui/macro'
import { Button, Checkbox } from 'react-vant'
import { useEffect, useState } from 'react'
import { FavoriteFuturesItemBox, FavoriteSpotItemBox } from './favorite-item-box'

function MarketSpotFavoritesDefault() {
  const [favDefaults] = useWsMarketSpotFavouriteDefault({}) || []
  const [checks, setchecks] = useState<any>([])
  const { addFavToList } = useSpotFavActions()

  const getChecked = () => {
    if (!favDefaults) return []
    return favDefaults.filter(x => checks.includes(Number(x.tradePairId)))
  }

  useEffect(() => {
    setchecks(favDefaults.map(fav => fav.id))
  }, [favDefaults])

  return (
    <div className="fav-default-wrapper">
      <Checkbox.Group className="grid grid-cols-2 gap-4 mt-4 mb-6" value={checks} onChange={setchecks}>
        {favDefaults.map((fav, index) => (
          <FavoriteSpotItemBox key={index} {...(fav as Required<SpotFavoriteDefaultDataType>)} />
        ))}
      </Checkbox.Group>

      <div className="fav-btn">
        <Button
          className="w-full rounded-md"
          type="primary"
          onClick={() => addFavToList(getChecked() as unknown as YapiGetV1FavouriteListData[])}
          disabled={!checks.length}
        >
          {t`features_market_market_quatation_common_market_favorites_index_5101067`} ({checks.length})
        </Button>
      </div>
    </div>
  )
}

function MarketFuturesFavoritesDefault() {
  const [favDefaults] = useWsMarketFuturesFavouriteDefault({}) || []
  const [checks, setchecks] = useState<any>([])
  const { addFavToList } = useFuturesFavActions()

  const getChecked = () => {
    if (!favDefaults) return []
    return favDefaults.filter(x => checks.includes(Number(x.tradePairId)))
  }

  useEffect(() => {
    setchecks(favDefaults.map(fav => fav.id))
  }, [favDefaults])

  return (
    <div className="fav-default-wrapper">
      <Checkbox.Group className="grid grid-cols-2 gap-4 mt-4 mb-6" value={checks} onChange={setchecks}>
        {favDefaults.map((fav, index) => (
          <FavoriteFuturesItemBox key={index} {...(fav as Required<SpotFavoriteDefaultDataType>)} />
        ))}
      </Checkbox.Group>

      <div className="fav-btn">
        <Button
          className="w-full rounded-md"
          type="primary"
          onClick={() => addFavToList(getChecked() as unknown as YapiGetV1FavouriteListData[])}
          disabled={!checks.length}
        >
          {t`features_market_market_quatation_common_market_favorites_index_5101067`} ({checks.length})
        </Button>
      </div>
    </div>
  )
}

export { MarketSpotFavoritesDefault, MarketFuturesFavoritesDefault }
