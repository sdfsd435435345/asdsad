import { spotFavFn, contractFavFn } from '@/helper/market/market-favorite'
import useReqeustMarketHelper from '@/hooks/features/market/common/use-request-market'
import { useSpotFavStore, useFuturesFavStore } from '@/store/market/market-favorite'
import { useUserStore } from '@/store/user'
import { YapiGetV1FavouriteListData } from '@/typings/yapi/FavouriteListV1GetApi'
import { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import { ApiStatusEnum } from '../../../../constants/market/market-list/index'

/**
 * 获取当前状态下的自选列表
 * @returns fav 数据和状态
 */
function useFavList(contextFn, contextStore) {
  const { getFavList } = contextFn
  const [state, setState] = useState<YapiGetV1FavouriteListData[]>([])
  const { hasListUpdated, updateFavList } = contextStore()

  const { apiStatus, refreshCallback } = useReqeustMarketHelper({
    apiRequest: (resolve, reject) => {
      getFavList()
        .then(res => {
          resolve(res || [])
        })
        .catch(() => {
          reject()
        })
    },
    setApiData: setState,
    deps: [hasListUpdated],
  })

  // populate store
  useEffect(() => {
    if (apiStatus === ApiStatusEnum.succeed) {
      updateFavList(state)
    }
  }, [apiStatus, state])

  return { state, apiStatus, refreshCallback, setState }
}

function useFavActions(contextFn, contextStore) {
  const { addFav, removeFav, editFav } = contextFn
  const { updateList, favList } = contextStore()
  const { isLogin } = useUserStore()
  return {
    addFavToList: async (items: YapiGetV1FavouriteListData[]) => {
      await addFav(items)
      updateList()
      if (isLogin) editFav([...items, ...favList] as YapiGetV1FavouriteListData[])
    },
    rmFavFromList: async (items: YapiGetV1FavouriteListData[]) => {
      await removeFav(items)
      updateList()
    },
    editFavList: async (items: YapiGetV1FavouriteListData[]) => {
      !isEmpty(items) && (await editFav(items))
      updateList()
    },
  }
}

const useSpotFavList = () => useFavList(spotFavFn, useSpotFavStore)
const useSpotFavActions = () => useFavActions(spotFavFn, useSpotFavStore)

const useFuturesFavList = () => useFavList(contractFavFn, useFuturesFavStore)
const useFuturesFavActions = () => useFavActions(contractFavFn, useFuturesFavStore)

const useAllFavList = () => {
  useSpotFavList()
  useFuturesFavList()
}

export { useSpotFavList, useSpotFavActions, useFuturesFavList, useFuturesFavActions, useAllFavList }
