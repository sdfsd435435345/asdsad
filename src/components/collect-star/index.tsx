import { memo, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { YapiGetV1FavouriteListData } from '@/typings/yapi/FavouriteListV1GetApi'
import { Toast } from 'react-vant'
import { useFuturesFavStore, useSpotFavStore } from '@/store/market/market-favorite'
import { useFuturesFavActions, useSpotFavActions } from '@/hooks/features/market/favourite'
import { useUnmount } from 'ahooks'
import { t } from '@lingui/macro'
import { FavStore } from '@/typings/market/market-favourite'
import { useMarketListStore } from '@/store/market/market-list'
import { MarketLisModulesEnum } from '@/constants/market/market-list/market-module'
import Styles from './index.module.css'
import Icon from '../icon'

type PropsType = {
  needWrap: boolean
  className?: string
  disable?: boolean
  hideUnCheck?: boolean
  // force set collect star spot or futures context
  forceContext?: MarketLisModulesEnum.futuresMarkets | MarketLisModulesEnum.spotMarkets
} & Partial<YapiGetV1FavouriteListData>

function BaseCollectStar({
  data,
  dataStore,
  actions,
}: {
  data: PropsType
  dataStore: () => FavStore
  actions: typeof useSpotFavActions
}) {
  const store = dataStore()
  const { addFavToList, rmFavFromList } = actions()

  const { needWrap, disable, hideUnCheck, ...rest } = data
  const controlledRef = useRef(true)
  const [isChecked, setisChecked] = useState<boolean>(!!store.favList?.find(each => data.id === each.id))

  // 数据发生变化时，需要自查一遍
  useEffect(() => {
    // 如果组件被销毁则直接返回
    if (!controlledRef.current) return
    setisChecked(!!store.favList?.find(each => data.id === each.id))
  }, [store.favList, data.id])

  useUnmount(() => {
    controlledRef.current = false
  })

  const star = !isChecked ? (
    <Icon
      onClick={
        !disable &&
        (async e => {
          e.stopPropagation()
          try {
            await addFavToList([rest] as YapiGetV1FavouriteListData[])
            setisChecked(true)
            Toast.info({ message: t`components_collect_star_index_5101328` })
          } catch (error) {
            Toast.info({ message: t`components_collect_star_index_5101329` })
          }
        })
      }
      name="contract_favorites"
      hasTheme
      className={classNames(Styles.scoped, 'star', 'collect', { invisible: hideUnCheck })}
    />
  ) : (
    <Icon
      onClick={
        !disable &&
        (async e => {
          e.stopPropagation()
          try {
            await rmFavFromList([rest] as YapiGetV1FavouriteListData[])
            controlledRef.current && setisChecked(false)
            Toast.info({
              message: t`features_market_market_quatation_common_market_favorites_editing_market_checkbox_form_index_5101062`,
            })
          } catch (error) {
            Toast.info({ message: t`components_collect_star_index_5101330` })
          }
        })
      }
      name="collect_hover"
      className={classNames(Styles.scoped, 'star', 'cancel')}
    />
  )
  return needWrap ? <div className={classNames(Styles.scoped, 'wrap')}>{star}</div> : star
}

function CollectStar(props: PropsType) {
  const active = useMarketListStore().activeModule
  const { forceContext, ...rest } = props

  return <CollectStarSwitch currentModule={forceContext || active} {...rest} />
}

function CollectStarSwitch(props) {
  const { currentModule, ...rest } = props
  switch (currentModule) {
    case MarketLisModulesEnum.futuresMarkets:
    case MarketLisModulesEnum.futuresMarketsTrade:
      return <BaseCollectStar data={rest} dataStore={useFuturesFavStore} actions={useFuturesFavActions} />
    default:
      return <BaseCollectStar data={rest} dataStore={useSpotFavStore} actions={useSpotFavActions} />
  }
}

export default memo(CollectStar)
