import create from 'zustand'
import { createTrackedSelector } from 'react-tracked'
import produce from 'immer'
import { getV1GuideMapQueryAllApiRequest, postV1GuideMapUpdateApiRequest } from '@/apis/server'
import { GuideMapEnum, GuideMapShowEnum } from '@/constants/common'
import { YapiGetV1GuideMapQueryAllData } from '@/typings/yapi/GuideMapQueryAllV1GetApi'
import { baseUserStore } from './user'

export type IGuideMapStore = ReturnType<typeof getBaseStore>

function getBaseStore(set, get) {
  const baseState = {
    guideMap: {} as YapiGetV1GuideMapQueryAllData,
    async fetchGuideMapQueryAll() {
      const {
        userInfo: { uid },
        deviceId,
      } = baseUserStore.getState()

      const res = await getV1GuideMapQueryAllApiRequest({ uid, deviceId })
      set(
        produce((draft: IGuideMapStore) => {
          if (!res.isOk || !res.data) {
            return
          }
          draft.guideMap = res.data
        })
      )
    },
    async postGuideMapUpdate(key: GuideMapEnum) {
      set(
        produce((draft: IGuideMapStore) => {
          draft.guideMap = { ...draft.guideMap, [key]: GuideMapShowEnum.no }
        })
      )
      const {
        userInfo: { uid },
        deviceId,
      } = baseUserStore.getState()
      postV1GuideMapUpdateApiRequest({ uid, deviceId, key })
    },
  }

  return baseState
}

function getStore(set, get) {
  return {
    ...getBaseStore(set, get),
  }
}

const baseGuideMapStore = create(getStore)

const useBaseGuideMapStore = createTrackedSelector(baseGuideMapStore)

export { baseGuideMapStore, useBaseGuideMapStore }
