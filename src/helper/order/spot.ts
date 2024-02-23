import { OrderStatusEnum, SpotPlanOrderStatusEnum } from '@/constants/order'
import { EntrustTypeEnum, TradeDirectionEnum } from '@/constants/trade'
import { baseOrderSpotStore } from '@/store/order/spot'
import { IBaseOrderItem, IQuerySpotOrderReqParams, ISpotPlanOrderItem } from '@/typings/api/order'
import { t } from '@lingui/macro'
import { getTextFromStoreEnums } from '../store'

export function normalOrderMapParamsFn(params: IQuerySpotOrderReqParams): IQuerySpotOrderReqParams {
  return {
    ...params,
    status: Array.isArray(params.statusArr) ? params.statusArr.join(',') : params.status,
    side: Array.isArray(params.direction) ? (params.direction.length > 1 ? '' : params.direction[0]) : params.direction,
    beginDate: params.beginDateNumber?.toString(),
    endDate: params.endDateNumber?.toString(),
    beginDateNumber: undefined,
    endDateNumber: undefined,
    direction: undefined,
    statusArr: undefined,
    dateType: undefined,
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

/** 获取订单枚举文本 */
export function getOrderValueEnumText(
  orderItem: IBaseOrderItem | ISpotPlanOrderItem,
  replaceValues: Partial<IBaseOrderItem & ISpotPlanOrderItem> = {}
) {
  const order = {
    ...orderItem,
    ...replaceValues,
  }
  const orderEnums = baseOrderSpotStore.getState().orderEnums
  const orderStatusEnums = orderEnums.orderStatus.enums
  const planOrderStatusEnums = orderEnums.planOrderStatus.enums
  const planOrder = order as ISpotPlanOrderItem
  const normalOrder = order as IBaseOrderItem
  const isPlanOrder = planOrder.orderStatusCd !== undefined
  const normalStatusConfigs = {
    [OrderStatusEnum.systemCanceled]: {
      text: t`constants/assets/common-33`,
    },
    [OrderStatusEnum.manualCanceled]: {
      text: t`constants/assets/common-33`,
    },
  }
  const planStatusConfigs = {
    [SpotPlanOrderStatusEnum.systemCanceled]: {
      text: t`constants/assets/common-33`,
    },
    [SpotPlanOrderStatusEnum.manualCanceled]: {
      text: t`constants/assets/common-33`,
    },
  }
  const statusConfig = isPlanOrder
    ? planStatusConfigs[planOrder.orderStatusCd]
    : normalStatusConfigs[normalOrder.status!]
  // 对于已撤销，这里做一个单独的处理，因为控制台还是分开显示手动和系统，但是前端只有一个已撤销，无法改变文字来区分
  const statusText =
    statusConfig?.text ||
    getTextFromStoreEnums(
      isPlanOrder ? planOrder.orderStatusCd : normalOrder.status!,
      isPlanOrder ? planOrderStatusEnums : orderStatusEnums
    )

  const typeText = getTextFromStoreEnums(
    isPlanOrder ? planOrder.matchType : normalOrder.orderType!,
    orderEnums.entrustType.enums
  )
  const typeTextWithSuffix = getTextFromStoreEnums(
    isPlanOrder ? planOrder.matchType : normalOrder.orderType!,
    isPlanOrder ? orderEnums.planEntrustTypeWithSuffix.enums : orderEnums.entrustTypeWithSuffix.enums
  )

  const directionText = getTextFromStoreEnums(
    isPlanOrder ? planOrder.side : normalOrder.side!,
    orderEnums.orderDirection.enums
  )

  return {
    statusText,
    directionText,
    typeText,
    typeTextWithSuffix,
  }
}
const ORDER_MAX_COUNT = 50
/** 获取是否超出订单数量限制 */
export function getCanOrderMore(entrustType: EntrustTypeEnum, direction: TradeDirectionEnum) {
  const openOrderModule = baseOrderSpotStore.getState().openOrderModule
  const existOrders = (
    (entrustType === EntrustTypeEnum.plan ? openOrderModule.plan.data : openOrderModule.normal.data) as any[]
  ).filter(item => item.side === direction)

  return existOrders.length < ORDER_MAX_COUNT
}
