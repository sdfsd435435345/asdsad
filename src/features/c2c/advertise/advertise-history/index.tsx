/**
 * 广告单记录
 */
import { t } from '@lingui/macro'
import { useEffect, useState } from 'react'
import { Popover, Tabs } from 'react-vant'
import { postAdvertCoinList, postAdvertList } from '@/apis/c2c/advertise'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { getHistoryFormName, HistoryTabTypeEnum, HistoryVersionTypeEnum } from '@/constants/c2c/advertise'
import { AssetsSelection } from '@/features/assets/common/assets-selection'
import { defaultHistoryForm, useC2CAdvertiseStore } from '@/store/c2c/advertise'
import { RecordsCoinListResp } from '@/typings/api/assets/assets'
import { IAdvertiseHistoryForm, IAdvertList } from '@/typings/api/c2c/advertise/post-advertise'
import { useDebounce, useMount, useUpdateEffect } from 'ahooks'
import { YapiGetV1C2CCoinAllListData } from '@/typings/yapi/C2cCoinAllV1GetApi'
import { requestWithLoading } from '@/helper/order'
import { HistoryList } from './history-list'
import { HistorySearch } from './history-search'
import styles from './index.module.css'

function AdvertiseHistoryLayout() {
  const {
    advertiseHistory: { version, activeTab, historyForm, updateVersion },
    postOptions: { allCoinList },
    updateAdvertiseHistory,
    updatePostOptions,
    fetchAdvertiseEnums,
  } = useC2CAdvertiseStore()
  useMount(fetchAdvertiseEnums)

  const [coinVisible, setCoinVisible] = useState(false) // 是否展示币种选择
  const [finished, setFinished] = useState(false) // 是否加载完成
  const [pageNum, setPageNum] = useState(1)
  const [list, setList] = useState<IAdvertList[]>([])
  const form: IAdvertiseHistoryForm = historyForm[getHistoryFormName(activeTab)]
  const debouncedSearchKey = useDebounce(form.amount, {
    wait: 300,
  })

  const versionList = [
    {
      text: t`features_c2c_advertise_advertise_history_index_vyu3ktdhjvdhm1vr-_iav`,
      value: HistoryVersionTypeEnum.normal,
      className: version === HistoryVersionTypeEnum.normal ? 'text-brand_color' : ' text-text_color_01',
    },
    {
      text: t`features_c2c_advertise_advertise_history_index_q36fiy1ypdosvex_memoo`,
      value: HistoryVersionTypeEnum.details,
      className: version === HistoryVersionTypeEnum.details ? 'text-brand_color' : 'text-text_color_01',
    },
  ]

  const onChangeFormData = values => {
    updateAdvertiseHistory({ historyForm: { ...historyForm, [getHistoryFormName(activeTab)]: { ...form, ...values } } })
  }

  /**
   * 查询所有币种列表
   */
  const onLoadAllCoinList = async () => {
    const coinResp = await postAdvertCoinList({ areaIds: form.areaIds })
    const { isOk, data } = coinResp || {}

    if (!isOk || !data) {
      return
    }
    updatePostOptions({ allCoinList: data })

    let coin = {}
    if (form?.coin?.id) {
      const coinInfo: YapiGetV1C2CCoinAllListData =
        data.find(
          (item: YapiGetV1C2CCoinAllListData) => item?.symbol && item?.symbol.toLocaleUpperCase() === form?.coin?.symbol
        ) || {}
      coin = coinInfo?.id ? coinInfo : data[0] || {}
    } else {
      coin = data[0]
    }

    if (!historyForm.on?.coin?.id && !historyForm.off?.coin?.id) {
      updateAdvertiseHistory({
        historyForm: {
          ...historyForm,
          on: { ...historyForm.on, coin: activeTab === HistoryTabTypeEnum.on ? coin : data[0] },
          off: { ...historyForm.off, coin: activeTab === HistoryTabTypeEnum.off ? coin : data[0] },
        },
      })
      return
    }

    return coin
  }

  /**
   * 查询广告列表
   */
  const onLoadList = async (isRefresh = false) => {
    const res = await postAdvertList({
      ...form,
      coinIds: form?.coin?.id ? [form?.coin?.id] : [],
      advertStatus: activeTab,
      pageNum: isRefresh ? 1 : pageNum,
      pageSize: 10,
    })

    const { isOk, data } = res || {}
    if (!isOk || !data) {
      setFinished(true)
      return
    }

    const nList: IAdvertList[] = isRefresh ? data.list : [...list, ...data?.list]
    setList(nList)
    setFinished(nList.length >= +data?.total)
    setPageNum((isRefresh ? 1 : pageNum) + 1)
  }

  const onRefresh = async () => {
    await requestWithLoading(onLoadList(true), 0)
  }

  useEffect(() => {
    onLoadAllCoinList()
  }, [])

  useUpdateEffect(() => {
    requestWithLoading(onLoadList(true), 0)
  }, [form.advertDirectCds, form.tradeTypeCds, form.coin, debouncedSearchKey, activeTab])

  const onRenderTabPane = () => {
    return (
      <>
        <HistorySearch
          form={form}
          onChangeInput={(val: string) => onChangeFormData({ amount: val })}
          onSelectCoin={() => setCoinVisible(true)}
          onSelect={async data => {
            const newCoin = await onLoadAllCoinList()
            onChangeFormData({ ...data, coin: newCoin })
          }}
        />

        <HistoryList finished={finished} list={list} onRefresh={onRefresh} onLoad={(e?: boolean) => onLoadList(e)} />
      </>
    )
  }

  const tabList = [
    {
      id: HistoryTabTypeEnum.on,
      title: t`features_c2c_advertise_advertise_history_index_nm0llsfkp0pe4ueh4dqie`,
      content: onRenderTabPane(),
    },
    {
      id: HistoryTabTypeEnum.off,
      title: t`features_c2c_advertise_advertise_history_index_gv84vhaujguq-yw_myfyz`,
      content: onRenderTabPane(),
    },
  ]

  return (
    <div className={styles['advertise-history-root']}>
      <NavBar
        title={t`features_c2c_advertise_advertise_history_index_axoles0q04etzph70deca`}
        right={
          <Popover
            className={styles['adv-history-popover-root']}
            placement="bottom-end"
            actions={versionList}
            onSelect={(action: any) => {
              if (action.value === version) return
              updateVersion(action.value)
            }}
            reference={<Icon name="c2c_more" hasTheme className="text-xl" />}
          />
        }
        onClickLeft={() => {
          updateAdvertiseHistory({ historyForm: { on: defaultHistoryForm, off: defaultHistoryForm } })
          history.back()
        }}
      />

      <Tabs
        active={activeTab}
        align="start"
        sticky
        offsetTop={46}
        onChange={(name: string | number) => updateAdvertiseHistory({ activeTab: name })}
      >
        {tabList.map(tabItem => {
          return (
            <Tabs.TabPane name={tabItem.id} title={tabItem.title} key={tabItem.id}>
              {tabItem.id === activeTab && tabItem.content}
            </Tabs.TabPane>
          )
        })}
      </Tabs>

      {coinVisible && (
        <AssetsSelection
          visible={coinVisible}
          showAll={false}
          coinId={form.coin?.id}
          title={t`features_c2c_advertise_advertise_history_index_tg1mffuw9hpqeo5_pdxrc`}
          searchHint={t`future.funding-history.search-future`}
          allList={allCoinList}
          onClose={() => setCoinVisible(false)}
          onSelect={(e?: RecordsCoinListResp) => {
            onChangeFormData({ coin: e || ({} as RecordsCoinListResp) })
            setCoinVisible(false)
          }}
        />
      )}
    </div>
  )
}

export { AdvertiseHistoryLayout }
