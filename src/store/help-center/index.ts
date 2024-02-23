import create from 'zustand'
import produce from 'immer'
import { cloneDeep } from 'lodash'
import { createTrackedSelector } from 'react-tracked'
import { getSupport, setSupport } from '@/helper/cache/support'

type IStore = ReturnType<typeof getStore>

function getStore(set) {
  return {
    breadcrumbList: getSupport() || [],
    // 添加项
    addBreadcrumb: payload => {
      set(
        produce((store: IStore) => {
          if (!payload.parentId) {
            const isArray = Array.isArray(payload)
            store.breadcrumbList = isArray ? payload : [payload]
            setSupport(store.breadcrumbList)
          }
        })
      )
    },
    addBreadcrumbItems: payload => {
      set(
        produce((store: IStore) => {
          let data = cloneDeep(store.breadcrumbList)
          data[data[0]?.parentId ? 0 : 1] = payload
          store.breadcrumbList = [...data]
          setSupport(store.breadcrumbList)
        })
      )
    },
  }
}

const baseHelpCenterStore = create(getStore)
const useHelpCenterStore = createTrackedSelector(baseHelpCenterStore)

export { useHelpCenterStore, baseHelpCenterStore }
