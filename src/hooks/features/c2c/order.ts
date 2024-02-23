import { fetchC2cTradeStoreSettings } from '@/helper/c2c/trade'
import { usePageContext } from '@/hooks/use-page-context'
import { useBaseC2cOrderStore } from '@/store/c2c/order'
import { useMount } from 'ahooks'

export function useC2cOrderModuleInit() {
  const { setDefaultEnums, fetchOrderEnums, subscribe } = useBaseC2cOrderStore()
  useMount(() => {
    setDefaultEnums()
    subscribe()
    fetchOrderEnums()
    fetchC2cTradeStoreSettings()
  })
}
/** 订单详情是否需要展示弹窗 */
export function useC2cOrderDetailIslWithAction() {
  const { urlParsed } = usePageContext()
  return urlParsed.search?.withAction
}
