import { getV1PerpetualTradePairConceptListApiRequest } from '@/apis/market/futures'
import { SpotMarketBaseCurrenyEnum, futuresTradeSearchCategoryTab } from '@/constants/market/market-list/market-module'
import { useMarketListStore } from '@/store/market/market-list'
import { TFuturesTradeBaseCurrencyTab } from '@/typings/api/market'
import { Tabs } from 'react-vant'
import { useEffect, useState } from 'react'

export function FuturesBaseCurrencyTabs() {
  const store = useMarketListStore().futuresMarketsModule
  const [conceptList, setconceptList] = useState<TFuturesTradeBaseCurrencyTab[]>([])
  const tabList = [...futuresTradeSearchCategoryTab(), ...conceptList]

  useEffect(() => {
    getV1PerpetualTradePairConceptListApiRequest({}).then(res => {
      const processed = (res.data || []).map(each => {
        return { ...each, title: each.name }
      }) as TFuturesTradeBaseCurrencyTab[]
      setconceptList(processed)
    })
  }, [])

  return (
    <Tabs
      align="start"
      className="tabs-spot-base-currency"
      active={store.selectedBaseCurrencyFilter || SpotMarketBaseCurrenyEnum.favorites}
      onChange={id => {
        store.setSelectedBaseCurrencyFilter(id)
      }}
    >
      {tabList.map(({ title, id }) => (
        <Tabs.TabPane title={title} name={id} key={id} />
      ))}
    </Tabs>
  )
}
