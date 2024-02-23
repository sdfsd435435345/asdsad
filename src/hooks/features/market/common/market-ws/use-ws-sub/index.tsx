import { WsThrottleTimeEnum } from '@/constants/ws'
import { isFalsyExcludeZero } from '@/helper/common'
import { businessId } from '@/helper/env'
import ws from '@/plugins/ws'
import { WSThrottleTypeEnum } from '@/plugins/ws/constants'
import { ISubscribeParams } from '@/plugins/ws/types'
import { useCommonStore } from '@/store/common'
import { useRafInterval, useSafeState, useUnmount } from 'ahooks'
import { isEmpty } from 'lodash'
import { useEffect, useRef } from 'react'

export function useWsSingleSubByBizId({ apiData, sub, ws }) {
  const { businessId: businessIdStore } = useCommonStore()
  const bizId = businessIdStore || businessId
  const subscriptionConfig = useRef<ISubscribeParams | null>(null)
  const [wsData, setWsData] = useSafeState<unknown | null>([])

  useEffect(() => {
    // 如果已经全量订阅则直接返回
    if (subscriptionConfig.current) return
    if (isFalsyExcludeZero(bizId)) return
    if (isEmpty(apiData)) {
      setWsData(null)
      return
    }

    const subConfig: ISubscribeParams = {
      subs: sub(String(bizId)),
      callback: data => {
        subscriptionConfig.current && setWsData((data || []).flat())
      },
      throttleType: WSThrottleTypeEnum.cover,
    }

    ws.subscribe(subConfig)
    subscriptionConfig.current = subConfig
  }, [bizId, apiData])

  useUnmount(() => {
    subscriptionConfig.current && ws.unsubscribe(subscriptionConfig.current)
    subscriptionConfig.current = null
  })

  return wsData
}

export function getSubKeys(sub: { type: string; contractCode: string; biz: string }) {
  const subKey = `${sub.type || ''}-${sub.contractCode || ''}-${sub.biz || ''}`
  return subKey
}

export function useWsMultiSub({ apiData, sub, ws, intervalTime }) {
  const [wsData, setWsData] = useSafeState<unknown | null>()

  const subsMapRef = useRef<Map<string, { isActive: boolean; sub: ISubscribeParams }>>(new Map())
  const subscriptions = subsMapRef.current

  const queueRef = useRef<any[]>([])
  const queue = queueRef.current

  useRafInterval(() => {
    const items: any[] = []
    while (queue.length) {
      const item = queue.pop()
      items.push(item)
    }
    // console.log("🚀 ~ file: index.tsx:70 ~ useRafInterval ~ items:", items)
    setWsData(items)
  }, intervalTime || WsThrottleTimeEnum.Slower)

  useEffect(() => {
    if (isEmpty(apiData)) {
      setWsData(null)
      return
    }

    const newConfigs: any[] = []
    const wsCallBack = wsData => {
      // console.log('🚀 ~ file: index.tsx:64 ~ wsCallBack ~ wsData:', wsData)
      queue.push((wsData || []).flat()[0] || {})
    }

    subscriptions.forEach(config => {
      config.isActive = false
    })

    apiData?.forEach(item => {
      const subs = sub(item)
      const key = getSubKeys(subs)

      if (subscriptions.has(key)) {
        const subitem = subscriptions.get(key)
        if (subitem) {
          item.isActive = true
        }
        return
      }

      const config: ISubscribeParams = {
        subs,
        callback: wsCallBack,
        throttleType: WSThrottleTypeEnum.cover,
      }
      newConfigs.push(config)
      subscriptions.set(key, { isActive: true, sub: config })
    })

    newConfigs.length > 0 && newConfigs.forEach(config => ws.subscribe(config))
    // console.log('🚀 ~ file: index.tsx:98 ~ useEffect ~ newConfigs:', newConfigs)

    return () => {
      // 取消没有 active 的订阅
      const tobeUnSubConfigs: any[] = []
      subscriptions.forEach(config => {
        if (!config.isActive) {
          tobeUnSubConfigs.push(config.sub)
        }
      })
      // console.log('🚀 ~ file: index.tsx:92 ~ return ~ tobeUnSubConfigs:', tobeUnSubConfigs)
      tobeUnSubConfigs?.forEach(config => ws.unsubscribe(config))
    }
  }, [apiData])

  useUnmount(() => {
    subscriptions.forEach(config => {
      // console.log('🚀 ~ file: index.tsx:117 ~ useUnmount ~ config:', config)
      config.isActive = false

      ws.unsubscribe(config.sub)
    })
  })

  return wsData
}
