import create from 'zustand'
import { createTrackedSelector } from 'react-tracked'
import { TradeLayoutEnum } from '@/constants/trade'
import produce from 'immer'
import {
  FutureSettingKLinePositionEnum,
  FutureSettingOrderAreaPositionEnum,
  DepthColorBlockEnum,
} from '@/constants/future/settings'
import { mergeStateFromCache, setCacheTradeLayout } from '@/helper/store'
import { setTradePageSettingsToCache, getTradePageSettingsFromCache } from '@/helper/cache'

export type ITradeStore = ReturnType<typeof getBaseStoreStore>

type IStore = ReturnType<typeof getStore>

function getBaseStoreStore(set, get) {
  const baseState = {
    layout: {
      announcementShow: true,
      kLineHistory: true,
      tradeFormPosition: TradeLayoutEnum.default,
    },
    setLayout: (key, val) =>
      set((store: IStore) => {
        const newStore = produce(store, _store => {
          _store.layout[key] = val
        })
        setCacheTradeLayout(newStore.layout)
        return newStore
      }),
    generalSettings: {
      /** K 线位置 */
      kLinePosition: FutureSettingKLinePositionEnum.top,
      /** 下单区域位置 */
      orderAreaPosition: FutureSettingOrderAreaPositionEnum.left,
      /** 深度颜色块 */
      depthColorBlock: DepthColorBlockEnum.grandTotal,
      firstCloseNoticeBar: true,
      updateFirstCloseNoticeBar(visible: boolean) {
        set(
          produce((draft: ITradeStore) => {
            draft.generalSettings.firstCloseNoticeBar = visible
          })
        )
      },
      updateKLinePosition(position: FutureSettingKLinePositionEnum) {
        set(
          produce((draft: ITradeStore) => {
            draft.generalSettings.kLinePosition = position
          })
        )
      },
      updateOrderAreaPosition(position: FutureSettingOrderAreaPositionEnum) {
        set(
          produce((draft: ITradeStore) => {
            draft.generalSettings.orderAreaPosition = position
          })
        )
      },
      updateDepthColorBlock(postion: DepthColorBlockEnum) {
        set(
          produce((draft: ITradeStore) => {
            draft.generalSettings.depthColorBlock = postion
          })
        )
      },
    },
  }
  mergeStateFromCache(baseState, getTradePageSettingsFromCache())

  return baseState
}
function getStore(set, get) {
  return {
    ...getBaseStoreStore(set, get),
  }
}

const baseTradeStore = create(getStore)
const useTradeStore = createTrackedSelector(baseTradeStore)
baseTradeStore.subscribe(state => {
  setTradePageSettingsToCache(state)
})
export { useTradeStore, baseTradeStore }
