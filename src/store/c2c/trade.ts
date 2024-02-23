import create from 'zustand'
import { createTrackedSelector } from 'react-tracked'
import produce from 'immer'
import coinWs from '@/plugins/ws'
import { ISubscribeParams } from '@/plugins/ws/types'
import { getIsLogin } from '@/helper/auth'
import { IQueryTradeAdListReq, ITradeAreaItem } from '@/typings/api/c2c/trade'
import { getC2cTradeSettingsFromCache, setC2cTradeSettingsToCache } from '@/helper/cache'
import { mergeStateFromCache } from '@/helper/store'
import { getAreaList } from '@/apis/c2c/common'
import { IC2cCommonSettings } from '@/typings/api/c2c/common'

export type IC2cTradeStore = ReturnType<typeof getBaseStore>

let subscribed = false

function createOnWs(set, get) {
  return {}
}

function getBaseStore(set, get) {
  const baseState = {
    tradeAreas: [] as ITradeAreaItem[],
    isBuy: true,
    // 区域 id 和 币种 id 只做生命周期内缓存
    areaId: '',
    coinId: '',
    updateAreaId(id: string) {
      set(
        produce((draft: IC2cTradeStore) => {
          draft.areaId = id
        })
      )
    },
    updateCoinId(id: string) {
      set(
        produce((draft: IC2cTradeStore) => {
          draft.coinId = id
        })
      )
    },
    /** 盘口参数，给盘口详情用 */
    queryAdsParams: {} as IQueryTradeAdListReq,
    updateQueryAdsParams(params: Partial<IQueryTradeAdListReq>) {
      set(
        produce((old: IC2cTradeStore) => {
          old.queryAdsParams = {
            ...old.queryAdsParams,
            ...params,
          }
        })
      )
    },
    subscribe() {
      if (subscribed) {
        return () => {}
      }
      if (!getIsLogin()) {
        return () => {}
      }
      createOnWs(set, get)
      const subscribeParams: ISubscribeParams[] = []
      subscribeParams.forEach(({ callback, ...params }) => {
        coinWs.subscribe({
          ...params,
          callback,
        })
      })
      subscribed = true
      return () => {
        subscribed = false
        subscribeParams.forEach(params => {
          coinWs.unsubscribe(params)
        })
      }
    },
    async fetchTradeAreaList() {
      const res = await getAreaList({})
      set(
        produce((draft: IC2cTradeStore) => {
          if (!res.isOk || !res.data) {
            return
          }
          draft.tradeAreas = res.data
        })
      )
    },
    apiSettings: {} as IC2cCommonSettings,
    updateApiSettings(settings: IC2cCommonSettings) {
      set(
        produce((draft: IC2cTradeStore) => {
          draft.apiSettings = settings
        })
      )
    },
    settings: {
      // 是否展示提币风险提示
      showRiskInfoMap: {} as Record<string, boolean>,
      // 是否展示外部交易提示
      showOutsideInfo: true,
      updateShowRiskInfo(id: string) {
        set(
          produce((draft: IC2cTradeStore) => {
            draft.settings.showRiskInfoMap[id] = true
          })
        )
      },
      updateShowOutsideInfo(show: boolean) {
        set(
          produce((draft: IC2cTradeStore) => {
            draft.settings.showOutsideInfo = show
          })
        )
      },
    },
    /** 被禁止充币或提币的主链 */
    disabledChains: [] as string[],
    updateDisabledChains(chains: string[]) {
      set(
        produce((draft: IC2cTradeStore) => {
          draft.disabledChains = chains
        })
      )
    },
  }

  mergeStateFromCache(baseState, getC2cTradeSettingsFromCache())

  return baseState
}
function getStore(set, get) {
  return {
    ...getBaseStore(set, get),
  }
}

const baseC2cTradeStore = create(getStore)

baseC2cTradeStore.subscribe(state => {
  setC2cTradeSettingsToCache(state)
})

const useBaseC2cTradeStore = createTrackedSelector(baseC2cTradeStore)

export { baseC2cTradeStore, useBaseC2cTradeStore }
