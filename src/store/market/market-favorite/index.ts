import create, { StoreApi } from 'zustand'
import { FavStore } from '@/typings/market/market-favourite'
import { createTrackedSelector } from 'react-tracked'
import produce from 'immer'
import { devtools } from 'zustand/middleware'

function getFavStore(set: StoreApi<FavStore>['setState'], get: StoreApi<FavStore>['getState']): FavStore {
  return {
    hasListUpdated: false,
    updateList: () =>
      set(
        produce((draft: FavStore) => {
          draft.hasListUpdated = !draft.hasListUpdated
        })
      ),
    favList: [],
    updateFavList: list => {
      set(
        produce((draft: FavStore) => {
          draft.favList = list
        })
      )
    },
    favListSnap: [],
    updateFavListSnap: callback =>
      set(
        produce((draft: FavStore) => {
          draft.favListSnap = callback(draft.favListSnap)
        })
      ),
  }
}

const baseSpotFavStore = create(devtools(getFavStore, { name: 'market-spot-fav-store' }))
const useSpotFavStore = createTrackedSelector(baseSpotFavStore)

const baseFuturesFavStore = create(devtools(getFavStore, { name: 'market-futures-fav-store' }))
const useFuturesFavStore = createTrackedSelector(baseFuturesFavStore)

export { baseSpotFavStore, useSpotFavStore, baseFuturesFavStore, useFuturesFavStore }
