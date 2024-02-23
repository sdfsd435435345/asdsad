import { CustomRequestConfig, MarkcoinRequest, MarkcoinResponse } from '@/plugins/request'
import produce from 'immer'
import { StoreApi } from 'zustand'
import { get, get as lodashGet } from 'lodash'
import { YapiGetV1OpenapiComCodeGetCodeDetailListData } from '@/typings/yapi/OpenapiComCodeGetCodeDetailListV1GetApi'
import { IStoreEnum } from '@/typings/store/common'
import cacheUtils from 'store'
import { getCodeDetailListBatch } from '@/apis/common'
import { replaceEmpty } from './filters'

/**
 * 创建用于更新 store 属性的函数
 */
export function createUpdateProp<P>(set) {
  return {
    updateProp<T extends keyof P>(key: T, data: P[T]) {
      set(
        produce((draft: P) => {
          draft[key] = data
        })
      )
    },
  }
}

/**
 * 创建用于更新 store 子模块属性的函数
 * 要手动传入子模块的 key 类型，不知道怎么解决
 */
export function createUpdateModuleProp<P, T extends keyof P>(set, moduleName: T) {
  function updateProp<K extends keyof P[T]>(key: K, data: P[T][K]) {
    set(
      produce((draft: P) => {
        draft[moduleName][key] = data
      })
    )
  }
  return updateProp
}

/**
 * TODO add ts support
 * @param set root store 的 set 函数
 * @param modulePath 从根目录到目标模块的路径
 * @param key
 * @param value
 */
export const createUpdateModulePropDeep = (set, modulePath: string[], key, value) => {
  set(
    produce((draft: any) => {
      const subDraft = get(draft, modulePath) || draft
      subDraft[key] = value
    })
  )
}

/**
 * To generate common api and store structure.
 * Api response is stored directly in created store object through callback.
 * @param set StoreApi setState fn
 */
export function generateCommonApiAndStoreFormat<V extends object>(set: StoreApi<V>['setState']) {
  /**
   * Inner function
   * @param storeName key of store object
   * @param apiFn api request function
   * @param apiParams api request params
   * @param apiResCB callback function which return processed api res data
   */
  return function <K, T, Q extends Parameters<MarkcoinRequest<K>>[0], P extends keyof V>(
    storeName: P,
    apiFn: MarkcoinRequest<K, T>,
    apiParams: Q,
    apiResCB: (res: MarkcoinResponse<T>) => V[P]
  ) {
    return {
      [storeName]: [] as Array<T>,
      async [apiFn.name](args: Q = apiParams) {
        try {
          const res = await apiFn(args)
          if (res.isOk && res.data)
            set(
              produce(draft => {
                draft[storeName] = apiResCB(res)
              })
            )
        } catch (err) {
          console.log(err)
        }
      },
    }
  }
}
/** 将缓存与初始 state 进行合并 */
export function mergeStateFromCache<T>(initState: T, cache: any): T {
  if (initState === null || initState === undefined) {
    return cache
  }
  if (cache === null || cache === undefined) {
    return initState
  }
  if (typeof cache !== 'object' || Array.isArray(cache)) {
    return cache
  }

  Object.keys(cache).forEach(key => {
    initState[key] = mergeStateFromCache(initState[key], cache[key])
  })

  return initState
}

/**
 * @param set root store 的 set 函数
 * @param modulePath 从根目录到目标模块的路径
 * @param key
 * @param value
 */
export const setStateByModulePath = (set, modulePath: string[], key, value) => {
  set(
    produce((draft: any) => {
      const subDraft = lodashGet(draft, modulePath) || draft
      subDraft[key] = value
    })
  )
}

export const getStateByModulePath = (get, modulePath: string[], key): any => {
  return lodashGet(get(), [...modulePath, key])
}
/** 映射成选择框使用的选项 */
export function storeEnumsToOptions(enums: IStoreEnum['enums'], labelKey = 'label', valueKey = 'value') {
  return enums.map(item => ({
    [labelKey]: item.label,
    [valueKey]: item.value,
  }))
}
/** 从值获取文案，没有值时返回 -- */
export function getTextFromStoreEnums(value: string | number, enums: IStoreEnum['enums']) {
  return replaceEmpty(enums.find(item => item.value.toString() === value?.toString?.())?.label).toString()
}

export const tradeSetting = 'TRADE_SETTING'

export function getCacheTradeSetting() {
  return cacheUtils.get(tradeSetting)
}

export function setCacheTradeSetting(val) {
  return cacheUtils.set(tradeSetting, val)
}

export const tradeLayout = 'TRADE_Layout'
export function getCacheTradeLayout() {
  return cacheUtils.get(tradeLayout)
}

export function setCacheTradeLayout(val) {
  return cacheUtils.set(tradeLayout, val)
}

export const preferenceSettings = 'PREFERENCE_SETTING'
export function getCachePreference() {
  return cacheUtils.get(preferenceSettings)
}

export function setCachePreference(val) {
  return cacheUtils.set(preferenceSettings, val)
}

export async function fetchStoreEnums<T extends Record<string, IStoreEnum>>(
  enumsRecord: T,
  config?: CustomRequestConfig
) {
  const data = await getCodeDetailListBatch(
    Object.values(enumsRecord).map(item => item.codeKey),
    config
  )

  return produce(enumsRecord, draft => {
    const items = Object.values(draft)
    items.forEach((item, index) => {
      if (data[index].length === 0) {
        return
      }
      item.enums = data[index].map(enumValue => {
        return {
          label: enumValue.codeKey,
          value:
            parseInt(enumValue.codeVal, 10).toString() === enumValue.codeVal
              ? parseInt(enumValue.codeVal, 10)
              : enumValue.codeVal,
        }
      })
    })
  })
}
export const isAutomaticMarginCall = 'AUTOMATICMARGIN_CALL'
export function getAutomaticMarginCall() {
  return cacheUtils.get(isAutomaticMarginCall)
}

export function setAutomaticMarginCall(val) {
  return cacheUtils.set(isAutomaticMarginCall, val)
}
