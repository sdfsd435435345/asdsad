import { EntrustTypeEnum, TradeDirectionEnum } from '@/constants/trade'
import { SelectSideIdEnum } from '@/constants/future/future-const'
import { baseOrderFutureStore } from '@/store/order/future'
import { IBaseOrderItem, IQuerySpotOrderReqParams, ISpotPlanOrderItem } from '@/typings/api/order'
import { FutureOrderDirectionEnum } from '@/constants/order'
import { t } from '@lingui/macro'
import { getTextFromStoreEnums } from '../../store'

export function normalOrderMapParamsFn(params: any) {
  return {
    ...params,
    statusCd: Array.isArray(params.statusArr) ? params.statusArr.join(',') : params.status,
    startTime: params.startTime?.toString(),
    endTime: params.endTime?.toString(),
    direction: undefined,
    statusArr: undefined,
    timeRange: undefined,
  }
}
export function getNormalTypes() {
  return [
    {
      name: t`common.all`,
      value: '',
    },
    {
      name: t`constants/trade-1`,
      value: EntrustTypeEnum.market,
    },
    {
      name: t`constants/trade-0`,
      value: EntrustTypeEnum.limit,
    },
  ]
}
export function getPlanTypes() {
  return [
    {
      name: t`common.all`,
      value: '',
    },
    {
      name: t`features_orders_spot_open_order_item_510257`,
      value: EntrustTypeEnum.market,
    },
    {
      name: t`constants_order_747`,
      value: EntrustTypeEnum.limit,
    },
  ]
}

export function FutureDirectionDetail() {
  const futureDirection = {
    open_long: t`constants/assets/common-21`,
    open_short: t`constants/assets/common-22`,
    close_long: t`constants/assets/common-23`,
    close_short: t`constants/assets/common-24`,
  }
  const strategyTypeInd = {
    stop_profit: t`features_orders_future_holding_close_683`,
    stop_loss: t`features_orders_future_holding_close_684`,
  }

  return { futureDirection, strategyTypeInd }
}

/** 获取订单枚举文本 */
export function getOrderValueEnumText(
  orderItem: any,
  // eslint-disable-next-line default-param-last
  replaceValues: Partial<IBaseOrderItem & ISpotPlanOrderItem> = {},
  statusFutureConfigs,
  futureEntrustType
) {
  const order = {
    ...orderItem,
    ...replaceValues,
  }

  const statusConfigs = {
    revoke: {
      text: t`constants/assets/common-33`,
    },
    revoke_sys: {
      text: t`constants/assets/common-33`,
    },
  }

  const statusConfig = statusConfigs[order?.statusCd]

  const { futureDirection, strategyTypeInd } = FutureDirectionDetail()

  const stopStatus = ['already_triggered', 'triggered_failed']

  if (futureEntrustType === EntrustTypeEnum.stop && stopStatus.includes(order?.statusCd) && order.statusCd) {
    order.statusCd = `${order?.statusCd}_stop`
  }

  // 对于已撤销，这里做一个单独的处理，因为控制台还是分开显示手动和系统，但是前端只有一个已撤销，无法改变文字来区分
  const statusText = statusConfig?.text || statusFutureConfigs?.[order?.statusCd]?.text

  const openFutureModule = {
    normal: {
      entrustTypeInd: {
        limit_order: t`features_orders_future_holding_close_680`,
        market_order: t`features/trade/future/price-input-3`,
        forced_liquidation_order: t`constants/assets/common-29`,
        forced_lighten_order: t`constants/assets/common-30`,
      },
    },
    plan: {
      entrustTypeInd: {
        limit_order: t`constants_order_747`,
        market_order: t`features_orders_spot_open_order_item_510257`,
      },
    },
    stop: {
      entrustTypeInd: {
        limit_order: `${t`features_orders_future_holding_close_680`}${strategyTypeInd[order?.strategyTypeInd] || ''}`,
        market_order: `${t`features/trade/future/price-input-3`}${strategyTypeInd[order?.strategyTypeInd] || ''}`,
      },
    },
  }

  const openFuture = {
    [EntrustTypeEnum.normal]: {
      title: 'normal',
    },
    [EntrustTypeEnum.plan]: {
      title: 'plan',
    },
    [EntrustTypeEnum.stop]: {
      title: 'stop',
    },
  }

  const typeText =
    openFutureModule[openFuture[futureEntrustType as number]?.title]?.entrustTypeInd?.[
      order?.typeInd || `${order?.entrustTypeInd}_order`
    ]

  const directionText = futureDirection[order?.[SelectSideIdEnum[futureEntrustType as number]]]

  const showTypeText = {
    limit_order: t`constants/trade-0`,
    market_order: t`constants/trade-1`,
    forced_liquidation_order: t`constants/assets/common-29`,
    forced_lighten_order: t`constants/assets/common-30`,
  }

  return {
    statusText,
    directionText,
    typeText,
    showTypeText,
  }
}
const ORDER_MAX_COUNT = 50
/** 获取是否超出订单数量限制 */
export function getCanOrderMore(entrustType: EntrustTypeEnum, direction: TradeDirectionEnum) {
  const openOrderModule = baseOrderFutureStore.getState().openOrderModule
  const existOrders = (
    (entrustType === EntrustTypeEnum.plan ? openOrderModule.plan.data : openOrderModule.normal.data) as any[]
  ).filter(item => item.side === direction)

  return existOrders.length < ORDER_MAX_COUNT
}

/** 判断合约订单是否是买单 */
export function getFutureOrderIsBuy(direction: string) {
  return [FutureOrderDirectionEnum.openBuy, FutureOrderDirectionEnum.closeSell].includes(direction as any)
}
