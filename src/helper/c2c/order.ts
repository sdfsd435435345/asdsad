import { C2cTradeAdPaymentEnum } from '@/constants/c2c/trade'
import { WsBizEnum, WsThrottleTimeEnum, WsTypesEnum } from '@/constants/ws'
import { c2cWs } from '@/plugins/ws/c2c'
import { OrderStatus } from '@/plugins/ws/protobuf/ts/proto/OrderStatus'
import { ISubscribeParams } from '@/plugins/ws/types'
import { IC2cOrderItem } from '@/typings/api/c2c/order'
import { IC2cPayment } from '@/typings/api/c2c/trade'
import Decimal from 'decimal.js'
import { formatNumberDecimal } from '../decimal'

/**
 * 将 id 数组转为可用的 options
 * @param values [1, 2]
 * @param getNameFn 根据 id 获取名称的函数，如 (id) => ({ 1: '1}[id])
 */
export function enumValuesToOptions(values: any[], getNameFn: (value: any) => string) {
  return values.map(value => ({
    value,
    label: getNameFn(value),
  }))
}
export function getPaymentIsBankCard(payment?: IC2cPayment) {
  return payment?.type === C2cTradeAdPaymentEnum.bank || !!payment?.bankName
}
export function subscribeC2cOrders(callback: (data: OrderStatus[]) => void) {
  const subscribeParams: ISubscribeParams[] = [
    {
      subs: {
        biz: WsBizEnum.c2c,
        type: WsTypesEnum.c2cOrder,
        base: '',
        quote: '',
        granularity: '',
      },
      callback,
      // throttleType: WSThrottleTypeEnum.increment,
      // throttleTime: WsThrottleTimeEnum.Market,
    },
  ]
  subscribeParams.forEach(({ ...params }) => {
    c2cWs.subscribe({
      ...params,
    })
  })
  return () => {
    subscribeParams.forEach(params => {
      c2cWs.unsubscribe(params)
    })
  }
}
/** 格式化订单价格数量精度，避免展示时多处计算 */
export function formatOrderDigits(order: IC2cOrderItem) {
  // 金额用向上
  const amountRoundStrategy = Decimal.ROUND_CEIL

  return {
    ...order,
    price: formatNumberDecimal(order.price, order.currencyPrecision || 2, amountRoundStrategy),
    totalPrice: formatNumberDecimal(order.totalPrice, order.currencyPrecision || 2, amountRoundStrategy),
  }
}
