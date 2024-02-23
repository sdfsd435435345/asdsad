import { getBaseCurrencyList } from '@/apis/market/market-list'
import {
  sportMarketsBaseCurrencyFilter,
  SpotMarketBaseCurrenyEnum,
  SpotMarketSectorCategoryEnum,
} from '@/constants/market/market-list/market-module'
import { useMarketListStore } from '@/store/market/market-list'
import { useEffect } from 'react'
import { Tabs } from 'react-vant'
import { useMount, useRequest } from 'ahooks'
import { isEmpty } from 'lodash'
import { ahookRequestSWRConfig } from '@/constants/market'
import { SelectUIOptionType } from '@/typings/api/market/market-list'
import { swrKeyMarketSpotBaseCurrencyTypes } from '@/helper/cache'

export const mockMarketListBaseCurrencyTestData = [
  {
    coinId: 1,
    symbol: 'ETH',
  },
  {
    coinId: 2,
    symbol: 'BTC',
  },
  {
    coinId: 3,
    symbol: 'USDT',
  },
  {
    coinId: 5,
    symbol: 'ETH-erc20',
  },
  {
    coinId: 6,
    symbol: 'TRX',
  },
  {
    coinId: 7,
    symbol: 'ETH-trc20',
  },
  {
    coinId: 37,
    symbol: 'BTC-TRC20',
  },
  {
    coinId: 45,
    symbol: 'USDT(TRC20)',
  },
]

export function useMarketListSpotBaseCurrencies() {
  const store = useMarketListStore()

  const { run } = useRequest(
    async () => {
      getBaseCurrencyList({}).then(res => {
        const newTabs: SelectUIOptionType[] =
          (res?.data?.list || []).map(x => {
            return {
              id: String(x.coinId),
              title: x.symbol,
            }
          }) || []

        store.setBaseCurrenciesResp(newTabs)
      })
    },
    {
      ...ahookRequestSWRConfig,
      cacheKey: swrKeyMarketSpotBaseCurrencyTypes,
    }
  )

  useMount(() => {
    run()
  })

  return store.baseCurrenciesResp
}

export function SpotBaseCurrencyTabs() {
  const store = useMarketListStore().spotMarketsModule
  const tabList = [...sportMarketsBaseCurrencyFilter(), ...useMarketListSpotBaseCurrencies()]

  if (isEmpty(tabList)) return null

  return (
    <Tabs
      align="start"
      className="tabs-spot-base-currency"
      active={store.selectedBaseCurrencyFilter || SpotMarketBaseCurrenyEnum.favorites}
      onChange={id => {
        store.setSelectedBaseCurrencyFilter(id)
        // reset category filter when filter changed
        store.setSelectedCategroyFilter(SpotMarketSectorCategoryEnum.total)
      }}
    >
      {tabList.map(({ title, id }) => (
        <Tabs.TabPane title={title} name={id} key={id} />
      ))}
    </Tabs>
  )
}

export function SpotTradeBaseCurrencyTabs() {
  const store = useMarketListStore().spotMarketsTradeModule
  const currenies = useMarketListSpotBaseCurrencies()
  const tabList = [...sportMarketsBaseCurrencyFilter(), ...currenies]

  useEffect(() => {
    if (isEmpty(currenies)) return
    store.setSelectedBaseCurrencyFilter(currenies[0].id)
  }, [currenies])

  return (
    <Tabs
      align="start"
      className="tabs-spot-base-currency-trade"
      active={store.selectedBaseCurrencyFilter}
      defaultActive={store.selectedBaseCurrencyFilter}
      onChange={id => {
        store.setSelectedBaseCurrencyFilter(id)
        store.setSelectedCategroyFilter(SpotMarketSectorCategoryEnum.total)
      }}
    >
      {tabList.map(({ title, id }) => (
        <Tabs.TabPane title={title} name={id} key={id} />
      ))}
    </Tabs>
  )
}
