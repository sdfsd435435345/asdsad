import { IC2cQueryOrderListReq } from '@/typings/api/c2c/order'
import { decimalUtils } from '@/nbit'
import { createContext, useContext } from 'react'

const SafeCalcUtil = decimalUtils.SafeCalcUtil

export type IOrderContext = {
  params: IC2cQueryOrderListReq
  onParamsChange: (newParams: IC2cQueryOrderListReq) => void
}

export const orderContext = createContext<IOrderContext>({} as any)

export function useOrderContext() {
  return useContext(orderContext)
}
