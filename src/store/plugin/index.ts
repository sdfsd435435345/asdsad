import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { createTrackedSelector } from 'react-tracked'
import jsBridgePluginStoreHelper from '@/store/plugin/js-bridge'

type IStore = ReturnType<typeof getStore>

function getStore(set, get) {
  return {
    ...jsBridgePluginStoreHelper(set, get),
  }
}

const basePluginStore = create(subscribeWithSelector(getStore))
const usePluginStore = createTrackedSelector(basePluginStore)

export { usePluginStore, basePluginStore }
