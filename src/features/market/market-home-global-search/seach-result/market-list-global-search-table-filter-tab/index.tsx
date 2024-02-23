import { useState, useEffect } from 'react'
import { MarketListGlobalSearchResultViewModel } from '@/typings/api/market/market-list'
import { getGlobalSearchTypesList, GlobalSearchTypesMappingEnum } from '@/constants/market/market-list/market-module'
import { Tabs } from 'react-vant'
import { useMarketListStore } from '@/store/market/market-list'
import { isEmpty } from 'lodash'
import { ApiStatusEnum } from '@/constants/market/market-list'

type IProps = {
  selectedTab: { id: GlobalSearchTypesMappingEnum }
  onSelectChange: (val: { id: GlobalSearchTypesMappingEnum }) => void
  data: MarketListGlobalSearchResultViewModel | null
  apiStatus: ApiStatusEnum
}

const TitleWithCount = function ({ data, id }) {
  const originTabs = getGlobalSearchTypesList()
  const title = originTabs.find(y => y.id === id)?.title || ''
  const count = data[id]?.length

  const Counter = () => {
    if (!count) return null
    return <>{`(${count})`}</>
  }

  return (
    <div className="title-with-count">
      {title} <Counter />
    </div>
  )
}

export default function ({ selectedTab, onSelectChange, data, apiStatus }: IProps) {
  const store = useMarketListStore()
  const list = getGlobalSearchTypesList()
  const [tabList, setTabList] = useState<any[]>([])

  useEffect(() => {
    const newList = list.map(x => {
      const newItem = { id: x.id } as any
      newItem.title = <TitleWithCount data={data} id={x.id} />
      newItem.onCallBack = () => {
        onSelectChange({ id: x.id })
      }
      return newItem
    })
    setTabList(newList)
  }, [data])

  if (isEmpty(tabList) || apiStatus !== ApiStatusEnum.succeed) return null

  return (
    <Tabs
      align="start"
      type="line"
      className="global-search-categories-tab"
      active={store.globalSearchSelectedTabId || GlobalSearchTypesMappingEnum.all}
      defaultActive={store.globalSearchSelectedTabId || GlobalSearchTypesMappingEnum.all}
      onChange={id => {
        onSelectChange({ id: id as any })
      }}
    >
      {tabList.map(({ title, id }) => (
        <Tabs.TabPane title={title} name={id} key={id} />
      ))}
    </Tabs>
  )
}
