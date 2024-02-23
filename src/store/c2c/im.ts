import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { createTrackedSelector } from 'react-tracked'
import { createUpdateProp } from '@/helper/store'
import { getImToken } from '@/apis/c2c/im'
import { baseUserStore } from '@/store/user'
import produce from 'immer'

type IStore = ReturnType<typeof getStore>

type BaseInfoStore = ReturnType<typeof getBaseInfoStore>

function getBaseInfoStore(set, get) {
  return {
    unreadMessagesNumber: 0,
    async InitC2CIm() {},
    async getUnreadMessagesNumber(tid: string) {},
    resetUnreadMessagesNumber() {
      set((store: IStore) => {
        return produce(store, _store => {
          _store.unreadMessagesNumber = 0
        })
      })
    },
  }
}

function getStore(set, get) {
  return {
    ...createUpdateProp<BaseInfoStore>(set),
    ...getBaseInfoStore(set, get),
  }
}

const baseC2cImStore = create(subscribeWithSelector(getStore))

const useC2cImStore = createTrackedSelector(baseC2cImStore)

export { useC2cImStore, baseC2cImStore }
