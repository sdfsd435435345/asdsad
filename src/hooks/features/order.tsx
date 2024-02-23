import { cancelAllSpotNormalOrder, cancelAllSpotPlanOrder } from '@/apis/order'
import { EntrustTypeEnum } from '@/constants/trade'
import { requestWithLoading } from '@/helper/order'
import { useUserStore } from '@/store/user'
import { useBaseOrderSpotStore } from '@/store/order/spot'
import { IBaseOrderItem, ISpotBatchCancelOrderReq, ISpotPlanOrderItem } from '@/typings/api/order'
import { t } from '@lingui/macro'
import { Dialog, Toast } from 'react-vant'
import { useMount } from 'ahooks'
import { useEffect, useState } from 'react'

/**
 * 获取现货当前委托标题和订阅相关模块
 */
export function useSpotOpenOrders(defaultType = EntrustTypeEnum.normal, currentTradeId?: number) {
  const [orderType, setOrderType] = useState(defaultType)
  const { subscribe, fetchOpenOrders, openOrderModule, fetchOrderEnums } = useBaseOrderSpotStore()
  const { isLogin } = useUserStore()

  useEffect(() => {
    return subscribe()
  }, [isLogin])
  useMount(() => {
    fetchOpenOrders()
    fetchOrderEnums()
  })
  function getTabTitle(name: string, count: number) {
    return `${name}${isLogin ? `(${count})` : ''}`
  }
  const openTotal = openOrderModule.normal.total + openOrderModule.plan.total
  const openTitle = getTabTitle(t`constants_order_727`, openTotal)
  const isNormalOrder = orderType === EntrustTypeEnum.normal
  const showCancelAll = isNormalOrder ? openOrderModule.normal.total > 0 : openOrderModule.plan.total > 0
  const cancelAll = async (params: ISpotBatchCancelOrderReq) => {
    const typeText = isNormalOrder ? t`features_trade_future_settings_order_confirm_634` : t`constants/trade-3`
    await Dialog.confirm({
      title: t`features_user_personal_center_account_security_email_index_592`,
      message: t({
        id: 'features_trade_spot_my_trade_index_510227',
        values: {
          0: typeText,
        },
      }),
    })
    const res = await requestWithLoading(
      isNormalOrder ? cancelAllSpotNormalOrder(params) : cancelAllSpotPlanOrder(params)
    )
    if (!res.isOk) {
      return false
    }
    Toast(t`features_trade_spot_my_trade_index_510228`)
    return true
  }
  function sort(a: IBaseOrderItem | ISpotPlanOrderItem, b: IBaseOrderItem | ISpotPlanOrderItem) {
    if (a.tradeId === currentTradeId) {
      return b.tradeId === currentTradeId ? 0 : -1
    }
    return b.tradeId === currentTradeId ? 1 : 0
  }
  const displayNormalOrders = openOrderModule.normal.data
    .filter(order => {
      if (currentTradeId) {
        return order.tradeId === currentTradeId
      }
      return true
    })
    .sort(sort)
  const displayPlanOrders = openOrderModule.plan.data
    .filter(order => {
      if (currentTradeId) {
        return order.tradeId === currentTradeId
      }
      return true
    })
    .sort(sort)

  return {
    orderType,
    setOrderType,
    openTitle,
    openOrderModule,
    isNormalOrder,
    showCancelAll,
    cancelAll,
    displayNormalOrders,
    displayPlanOrders,
  }
}
