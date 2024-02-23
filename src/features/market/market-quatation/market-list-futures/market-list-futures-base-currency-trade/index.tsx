import { SpotMarketBaseCurrenyEnum, futuresTradeSearchCategoryTab } from '@/constants/market/market-list/market-module'
import { useMarketListStore } from '@/store/market/market-list'
import { Tabs } from 'react-vant'
import { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import { getV1PerpetualTradePairConceptListApiRequest } from '@/apis/market/futures'
import { TFuturesTradeBaseCurrencyTab } from '@/typings/api/market'

export function FuturesTradeBaseCurrencyTabs() {
  const store = useMarketListStore().futuresMarketsTradeModule
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

  useEffect(() => {
    if (isEmpty(conceptList)) return
    store.setSelectedBaseCurrencyFilter(tabList[1].id)
  }, [conceptList])

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
