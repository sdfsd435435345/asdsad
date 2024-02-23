import create from 'zustand'
import { createTrackedSelector } from 'react-tracked'
import { mergeStateFromCache } from '@/helper/store'
import { getSpotTradeSettingsFromCache, setSpotTradeSettingsToCache } from '@/helper/cache'
import { getCommonSettings } from './base'

export type ISpotTradeStore = ReturnType<typeof getBaseStore>

type IStore = ReturnType<typeof getStore>

function getBaseStore(set, get) {
  const baseState = {
    settings: {
      ...getCommonSettings(set),
    },
  }
  mergeStateFromCache(baseState, getSpotTradeSettingsFromCache())
  // 不缓存
  baseState.settings.preCoinIdForNotifications = -1
  baseState.settings.notificationLoaded = false

  return baseState
}
function getStore(set, get) {
  return {
    ...getBaseStore(set, get),
  }
}

const baseSpotTradeStore = create(getStore)
const useSpotTradeStore = createTrackedSelector(baseSpotTradeStore)
baseSpotTradeStore.subscribe(state => {
  setSpotTradeSettingsToCache(state)
})
export { baseSpotTradeStore, useSpotTradeStore }
