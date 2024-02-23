import NavBar from '@/components/navbar'
import { useCreation, useMount } from 'ahooks'
import { useState } from 'react'
import { IC2cQueryOrderListReq } from '@/typings/api/c2c/order'
import { Tabs } from 'react-vant'
import { useBaseC2cOrderStore } from '@/store/c2c/order'
import { t } from '@lingui/macro'
import { fetchC2cTradeStoreSettings } from '@/helper/c2c/trade'
import { C2cOrderStatusEnum } from '@/constants/c2c/order'
import { OrderList } from './order-list'
import { C2cTradeSearch } from './search'
import { orderContext } from './order-context'
import { getC2cOrderFiltersDefaultParams } from './filters'

function C2cOrders() {
  const { setDefaultEnums, fetchOrderEnums, subscribe } = useBaseC2cOrderStore()
  useMount(() => {
    setDefaultEnums()
    subscribe()
    fetchOrderEnums()
    fetchC2cTradeStoreSettings()
  })
  const [params, setParams] = useState<IC2cQueryOrderListReq>({
    ...getC2cOrderFiltersDefaultParams(),
    statusTab: C2cOrderStatusEnum.unFinished,
  })
  const onParamsChange = (newParams: IC2cQueryOrderListReq) => {
    setParams(old => ({ ...old, ...newParams }))
  }
  const tabs = [
    {
      label: t`features_trade_future_settings_margin_records_index_5101399`,
      value: C2cOrderStatusEnum.unFinished,
    },
    {
      label: t`features_c2c_order_index_0us3t5nfaqmmvict2lkwa`,
      value: C2cOrderStatusEnum.finished,
    },
    {
      label: t`features_c2c_order_index_r7jtbzh25c2xd2iikp_xc`,
      value: C2cOrderStatusEnum.canceled,
    },
  ]
  const onTabChange = (value: any) => {
    onParamsChange({ statusTab: value })
  }

  const contextValue = useCreation(() => {
    return { params, onParamsChange }
  }, [params, onParamsChange])

  return (
    <orderContext.Provider value={contextValue}>
      <div className="text-sm">
        <NavBar title={t`features_c2c_order_index_9sxn_zndgpumcd8duio4u`} />
        <Tabs align="start" className="mb-2" onChange={onTabChange}>
          {tabs.map(tab => {
            return <Tabs.TabPane key={tab.value} title={tab.label} name={tab.value} />
          })}
        </Tabs>
        <C2cTradeSearch />
        <OrderList />
      </div>
    </orderContext.Provider>
  )
}

export default C2cOrders
