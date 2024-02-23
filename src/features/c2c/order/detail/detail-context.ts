import { IC2cOrderDetail } from '@/typings/api/c2c/order'
import { decimalUtils } from '@/nbit'
import { createContext, useContext } from 'react'

export type IOrderDetailContext = {
  detail?: IC2cOrderDetail
  updateDetail: () => void
  showResultPage: () => void
}

export const orderDetailContext = createContext<IOrderDetailContext>({} as any)

export function useOrderDetailContext() {
  return useContext(orderDetailContext)
}
