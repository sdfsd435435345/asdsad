import { baseUserStore } from '@/store/user'
import { YapiGetV1FavouriteListData } from '@/typings/yapi/FavouriteListV1GetApi'
import { differenceBy, uniqBy } from 'lodash'

const commonActionFn = (addFn, rmFn, getFn, editFn, cacheFn) => {
  const { getFavListFromCache, addToCache, removeFromCache, clearFavCache } = cacheFn
  const addFav = async (item: YapiGetV1FavouriteListData[]) => {
    const { isLogin } = baseUserStore.getState()
    if (isLogin) {
      const params = item.map(each => each.id)
      await addFn({ tradeIdList: params })
    } else addToCache(item)
  }

  const removeFav = async (item: YapiGetV1FavouriteListData[]) => {
    const { isLogin } = baseUserStore.getState()
    if (isLogin) {
      const params = item.map(each => each.id)
      await rmFn({ tradeIdList: params })
    } else removeFromCache(item)
  }

  const getFavList: () => Promise<YapiGetV1FavouriteListData[]> = () => {
    return new Promise(async (resolve, reject) => {
      const { isLogin } = baseUserStore.getState()
      if (isLogin) {
        await syncWithApi()
        const res = await getFn({})
        const list = convertFavouriteToTrue(res.data)
        const sorted = list.sort((a, b) => a.sort - b.sort)
        resolve(sorted)
      } else resolve(getFavListFromCache())
    })
  }

  const editFav = async (item: YapiGetV1FavouriteListData[]) => {
    const { isLogin } = baseUserStore.getState()
    if (isLogin) {
      const params = item.map((each, index) => {
        return { id: each.id, sort: index }
      })
      await editFn({ list: params })
    } else {
      clearFavCache()
      addToCache(item)
    }
  }

  const syncWithApi = async () => {
    const cacheData = getFavListFromCache()
    if (cacheData.length > 0) {
      await addFav(cacheData)
      clearFavCache()
    }
  }

  // TODO: get backend to change the favourite field to 1
  const convertFavouriteToTrue = (list: YapiGetV1FavouriteListData[] | undefined) => {
    if (!list) return []
    return list.map(fav => {
      return {
        ...fav,
        favourite: 1,
      }
    })
  }

  return {
    addFav,
    removeFav,
    getFavList,
    editFav,
  }
}

const commonCacheFn = (getCacheFn: any, setCacheFn: any) => {
  const getFavListFromCache: () => YapiGetV1FavouriteListData[] = () => getCacheFn() || []

  const addToCache = (item: YapiGetV1FavouriteListData[]) => {
    const currentCache = getFavListFromCache()
    const toCache = uniqBy([...item, ...currentCache], 'id')
    setCacheFn(toCache)
  }

  const removeFromCache = (item: YapiGetV1FavouriteListData[]) => {
    const currentCache = getFavListFromCache()
    setCacheFn(differenceBy(currentCache, item, each => each.id))
  }

  const clearFavCache = () => {
    setCacheFn(undefined)
  }

  return {
    getFavListFromCache,
    addToCache,
    removeFromCache,
    clearFavCache,
  }
}

export { commonActionFn, commonCacheFn }
