/**
 * 资产总览
 */
import { t } from '@lingui/macro'
import { PullRefresh, Tabs } from 'react-vant'
import { AssetsRouteEnum } from '@/constants/assets'
import { useEffect, useState } from 'react'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import { usePageContext } from '@/hooks/use-page-context'
import { useGetWsAssets } from '@/hooks/features/assets/spot'
import { useAssetsStore } from '@/store/assets/spot'
import { useAssetsFuturesStore } from '@/store/assets/futures'
import PullRefreshAnimation from '@/components/pull-refresh-animation'
import { requestWithLoading } from '@/helper/order'
import { useInterval, useMemoizedFn, useUnmount, useUpdateEffect } from 'ahooks'
import { getFuturesCurrencySettings } from '@/helper/assets/futures'
import { PerpetualGroupDetail } from '@/plugins/ws/protobuf/ts/proto/PerpetualGroupDetail'
import {
  onGetAssetsCoinList,
  onGetAssetsOverview,
  onGetC2cAssetsList,
  onGetCoinOverview,
  onGetContractOverview,
} from '@/helper/assets/overview'
import { useCommonStore } from '@/store/common'
import { getAssetsOpenFuturesAccountPageRoutePath } from '@/helper/route'
import { link } from '@/helper/link'
import { C2cAccountChanged } from '@/plugins/ws/protobuf/ts/proto/C2cAccountChanged'
import { decimalUtils } from '@/nbit'
import { rateFilter, rateFilterCoinQuantity } from '@/helper/assets/spot'
import { NoAssets } from './overview/tabs/no-assets'
import styles from './assets-layout.module.css'
import { AssetsList } from './overview/list/assets-list'
import { AssetsOverview } from './overview/tabs/assets-overview'
import { CoinList } from './overview/list/coin-list'
import { C2COverview } from './overview/tabs/c2c-overview'
import { C2CList } from './overview/list/c2c-list'
import { FuturesOverview } from './overview/tabs/futures-overview'
import { CoinOverview } from './overview/tabs/coin-overview'

const SafeCalcUtil = decimalUtils.SafeCalcUtil

function AssetsLayout() {
  const pageContext = usePageContext()
  const {
    activeTab,
    assetsData,
    updateAssetsModule,
    fetchCoinRate,
    wsRateSubscribe,
    wsRateUnSubscribe,
    wsC2CAccountChangedSubscribe,
    wsC2CAccountChangedUnSubscribe,
  } = useAssetsStore().assetsModule || {}
  useGetWsAssets()
  const { isFusionMode } = useCommonStore()
  const { totalAmount = '', coinAssetsData, c2cAssetsData, futuresAssetsData } = assetsData || {}
  const { wsPerpetualGroupDetailSubscribe, wsPerpetualGroupDetailUnSubscribe } = useAssetsFuturesStore()
  const { getFiatCurrencyData } = usePersonalCenterStore()
  const [lastTab, setLastTab] = useState(AssetsRouteEnum.overview) // 记录上一个选中的 tab，用于未开通合约情况下重置 tab

  useInterval(async () => {
    if (activeTab === AssetsRouteEnum.contract || activeTab === AssetsRouteEnum.overview) {
      const futuresInfo = await onGetContractOverview(true)

      if (activeTab === AssetsRouteEnum.overview) {
        const futuresTotal = `${SafeCalcUtil.add(futuresInfo?.totalPerpetualAsset, futuresInfo?.totalUnrealizedProfit)}`
        const spotTotal = rateFilter({
          symbol: coinAssetsData?.symbol,
          amount: coinAssetsData?.totalAmount || '',
          rate: futuresInfo?.baseCoin,
          showUnit: false,
          isFormat: false,
        })
        const c2cTotal = rateFilter({
          symbol: c2cAssetsData?.symbol,
          amount: c2cAssetsData?.totalAmount || '',
          rate: futuresInfo?.baseCoin,
          showUnit: false,
          isFormat: false,
        })
        const futuresListTotal = rateFilterCoinQuantity({
          currencySymbol: futuresInfo?.baseCoin,
          amount: futuresTotal,
          symbol: futuresAssetsData?.symbol,
        })
        const assetsTotal = `${SafeCalcUtil.add(SafeCalcUtil.add(futuresTotal, spotTotal), c2cTotal)}`
        updateAssetsModule({
          assetsData: {
            ...assetsData,
            positionAmount: futuresTotal,
            totalAmount: assetsTotal,
            futuresAssetsData: { ...futuresAssetsData, totalAmount: `${futuresListTotal}` },
          },
        })
      }
    }
  }, 5000)

  const overview = {
    title: t`assets.financial-record.tabs.overview`,
    id: AssetsRouteEnum.overview,
    tabContent: (
      <>
        {!totalAmount || (+totalAmount === 0 && <NoAssets />)}
        {totalAmount && +totalAmount !== 0 && <AssetsOverview />}
      </>
    ),
    content: <AssetsList />,
  }
  const coins = {
    title: t`components/footer/index-2`,
    id: AssetsRouteEnum.coins,
    tabContent: <CoinOverview />,
    content: <CoinList />,
  }
  const c2c = {
    title: 'C2C',
    id: AssetsRouteEnum.c2c,
    tabContent: <C2COverview />,
    content: <C2CList />,
  }
  // { title: t`features_assets_assets_layout_5101102`, id: AssetsRouteEnum.leverage },
  // { title: t`features_assets_assets_layout_5101103`, id: AssetsRouteEnum.financial },
  const tabs = isFusionMode ? [overview, coins] : [overview, coins, c2c]

  /**
   * 查询用户资产汇率
   */
  const onLoadCoinRate = fetchCoinRate

  /**
   * 查询资产总览数据
   */
  const onLoadOverview = async () => {
    switch (activeTab) {
      case AssetsRouteEnum.coins:
        requestWithLoading(onGetCoinOverview(), 0)
        onGetAssetsCoinList()
        break
      case AssetsRouteEnum.c2c:
        requestWithLoading(onGetAssetsOverview(), 0)
        onGetC2cAssetsList()
        break
      case AssetsRouteEnum.contract:
        const res = await requestWithLoading(onGetContractOverview(), 0)

        if (res && !res?.isOpen) {
          link(getAssetsOpenFuturesAccountPageRoutePath())
          updateAssetsModule({ activeTab: lastTab })
          return
        }
        getFuturesCurrencySettings()
        break
      default:
        requestWithLoading(onGetAssetsOverview(), 0)
        break
    }
  }

  /**
   * 下拉刷新
   * @returns
   */
  const onRefresh = () => {
    return new Promise(resolve => {
      onLoadCoinRate()
      onLoadOverview()

      setTimeout(() => {
        resolve(true)
      }, 500)
    })
  }

  /**
   * 合约组详情推送回调
   */
  const onWsCallBack = useMemoizedFn((data: PerpetualGroupDetail[]) => {
    if (data && data.length > 0) onRefresh()
  })

  /**
   * C2cC 账户变动推送回调
   */
  const onC2CWsCallBack = useMemoizedFn((data: C2cAccountChanged[]) => {
    if (data && data.length > 0) onRefresh()
  })

  useEffect(() => {
    onLoadCoinRate()
    getFiatCurrencyData()

    const type = pageContext.urlParsed.search?.type
    type && updateAssetsModule({ activeTab: +type })
  }, [])

  useEffect(() => {
    onLoadOverview()

    // 根据当前 tab 订阅相应推送
    if (activeTab === AssetsRouteEnum.contract) {
      getFuturesCurrencySettings()
      wsPerpetualGroupDetailSubscribe(onWsCallBack)
    } else {
      wsPerpetualGroupDetailUnSubscribe(onWsCallBack)
    }

    if (activeTab === AssetsRouteEnum.overview || activeTab === AssetsRouteEnum.c2c) {
      wsC2CAccountChangedSubscribe(onC2CWsCallBack)
    } else {
      wsC2CAccountChangedUnSubscribe(onC2CWsCallBack)
    }

    if (activeTab === AssetsRouteEnum.overview) {
      wsRateSubscribe()
    } else {
      wsRateUnSubscribe()
    }
  }, [activeTab])

  useUpdateEffect(() => {}, [usePersonalCenterStore().fiatCurrencyData])

  useUnmount(() => {
    wsPerpetualGroupDetailUnSubscribe(onWsCallBack)
    wsRateUnSubscribe()
    wsC2CAccountChangedUnSubscribe(onC2CWsCallBack)
  })

  return (
    <div className={styles['assets-layout-root']}>
      <Tabs
        sticky
        align="start"
        className="tabs"
        active={activeTab}
        onClickTab={async (params: any) => {
          setLastTab(activeTab)
          updateAssetsModule({ activeTab: params.name })
        }}
        ellipsis={false}
      >
        {tabs.map(({ title, id, tabContent, content }) => (
          <Tabs.TabPane title={title} name={id} key={id}>
            <PullRefresh
              pullingText={({ distance }) => <PullRefreshAnimation />}
              loosingText={() => <PullRefreshAnimation />}
              loadingText={() => <PullRefreshAnimation />}
              onRefresh={onRefresh}
            >
              <div className="tabs-content">
                {tabContent}
                {content}
              </div>
            </PullRefresh>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  )
}

export { AssetsLayout }
