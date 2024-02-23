import { useEffect } from 'react'
import marketActivityWs from '@/plugins/ws'
import { WSThrottleTypeEnum } from '@nbit/chart-utils'
import { useMemoizedFn } from 'ahooks'
import { WsThrottleTimeEnum } from '@/constants/ws'

/**
 * 注册行情异动推送
 * @params callBack 推送回调方法
 */
export const useGetWsMarketActivity = (callBack?) => {
  callBack = useMemoizedFn(callBack)

  useEffect(() => {
    const subs = { biz: 'spot', type: 'market_activities' }

    marketActivityWs.subscribe({
      subs,
      throttleTime: WsThrottleTimeEnum.Market,
      // throttleType: WSThrottleTypeEnum.cover,
      callback: callBack,
    })

    return () => {
      marketActivityWs.unsubscribe({
        subs,
        callback: callBack,
      })
    }
  }, [callBack])
}
