import create, { StoreApi } from 'zustand'
import { createTrackedSelector } from 'react-tracked'
import { devtools } from 'zustand/middleware'
import { generateCommonApiAndStoreFormat } from '@/helper/store'
import { getRecommendedCoins } from '@/apis/home'
import { RecommendedCoinsApiModel } from '@/typings/api/home/recommend'
import { getMoreToolbarStore, MoreToolbarStore } from '@/store/home/more-toolbar'
import produce from 'immer'

enum HomeApiStore {
  Notices = 'notices',
  Banners = 'banners',
  RecommendedCoins = 'recommendedCoins',
}

type HomeStore = MoreToolbarStore & {
  // api responses
  [HomeApiStore.RecommendedCoins]: Array<RecommendedCoinsApiModel>

  // api request
  getRecommendedCoins: () => void
}

function getStore(set: StoreApi<HomeStore>['setState'], get: StoreApi<HomeStore>['getState']): HomeStore {
  const homeApiAndStoreFormat = generateCommonApiAndStoreFormat(set)

  return {
    /**
     * Get recommended coins api
     */
    ...(homeApiAndStoreFormat(
      HomeApiStore.RecommendedCoins,
      getRecommendedCoins,
      {},
      res => res.data?.list ?? []
    ) as unknown as Pick<HomeStore, 'getRecommendedCoins' | HomeApiStore.RecommendedCoins>),

    ...getMoreToolbarStore(set, get),
  }
}

const baseHomeStore = create(devtools(getStore, { name: 'home-store' }))

const useHomeStore = createTrackedSelector(baseHomeStore)

export { useHomeStore, baseHomeStore }
