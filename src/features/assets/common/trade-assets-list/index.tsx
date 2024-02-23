/**
 * 现货 - 下单页资产列表组件
 */
import { t } from '@lingui/macro'
import { useEffect, useState } from 'react'
import { formatCoinAmount, rateFilter } from '@/helper/assets/spot'
import { CoinListResp } from '@/typings/api/assets/assets'
import { getCoinList } from '@/apis/assets/coin'
import LazyImage from '@/components/lazy-image'
import CommonList from '@/components/common-list/list'
import { useMarketStore } from '@/store/market/index'
import { useUpdateEffect } from 'ahooks'
import { useGetWsAssets } from '@/hooks/features/assets/spot'
import { useAssetsStore } from '@/store/assets/spot'
import { CommonDigital } from '@/components/common-digital'
import { useOnPageRefresh } from '@/hooks/use-on-page-refresh'
import styles from '../common.module.css'

function TradeAssetsList() {
  useGetWsAssets({ isUpdateOverview: false })
  const { assetsModule } = useAssetsStore()

  const [page, setPage] = useState({
    finished: false,
    pageNum: 1,
    pageSize: 20,
  })
  const [sellCoin, setSellCoin] = useState<CoinListResp>({ coinId: '' } as CoinListResp)
  const [buyCoin, setBuyCoin] = useState<CoinListResp>({ coinId: '' } as CoinListResp)

  const [otherList, setOtherList] = useState<CoinListResp[]>([])
  const { currentCoin } = useMarketStore()

  const sortFn = (a: CoinListResp, b: CoinListResp) => {
    return (b.usdBalance as unknown as number) - (a.usdBalance as unknown as number)
  }

  /**
   * 获取币种列表
   */
  const onLoadList = async (isRefresh?: boolean) => {
    const res = await getCoinList({ pageNum: isRefresh ? 1 : page.pageNum, pageSize: page.pageSize })
    const { isOk, data } = res || {}
    if (!isOk || !data) {
      setPage({ ...page, finished: true })
      return
    }

    if (data.list && data.list.length > 0) {
      const oList = data.list
        .filter((item: CoinListResp) => {
          return (
            Number(item.totalAmount) > 0 &&
            item.symbol !== currentCoin?.sellSymbol &&
            item.symbol !== currentCoin?.buySymbol
          )
        })
        .sort(sortFn)

      setSellCoin(
        data.list.find((item: CoinListResp) => item.symbol === currentCoin?.sellSymbol) ||
          ({ coinId: '' } as CoinListResp)
      )
      setBuyCoin(
        data.list.find((item: CoinListResp) => item.symbol === currentCoin?.buySymbol) ||
          ({ coinId: '' } as CoinListResp)
      )
      setOtherList(isRefresh ? oList : [...otherList, ...oList])
    }

    setPage({ ...page, pageNum: page.pageNum + 1, finished: data.list.length < page.pageSize })
  }
  useOnPageRefresh(() => {
    onLoadList(true)
  })

  useEffect(() => {
    setPage({ ...page, pageNum: 1 })
  }, [currentCoin.sellSymbol, currentCoin.buySymbol])

  useUpdateEffect(() => {
    page.pageNum === 1 && onLoadList(true)
  }, [page.pageNum])

  // 监听推送数据更新，根据更新数据重新请求数据
  useUpdateEffect(() => {
    setPage({ ...page, pageNum: 1 })
  }, [assetsModule.coinAssetsList])

  /**
   * 币种信息 item
   */
  const onLoadCoinItem = (params: CoinListResp) => {
    const { appLogo = '', coinName = '--', totalAmount = '', coinFullName = '', symbol = '' } = params
    return (
      <div className="current-item">
        <div className="current-info">
          <div className="info-left">
            <LazyImage src={appLogo} width={20} height={20} round className="coin-icon" />
            <span>{coinName}</span>
          </div>

          <CommonDigital content={`${formatCoinAmount(symbol, totalAmount)}`} />
        </div>
        <div className="expand-info">
          <span>{coinFullName}</span>
          <span>{rateFilter({ amount: totalAmount, symbol })}</span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles['trade-assets-list']}>
      <div className="current-content">
        <span className="current-title">{t`features_assets_common_trade_assets_list_index_510249`}</span>
        {sellCoin.coinId && onLoadCoinItem(sellCoin)}
        {buyCoin.coinId && onLoadCoinItem(buyCoin)}
      </div>

      <div className="current-content border-0 pt-6">
        <span className="current-title">{t`features_assets_common_trade_assets_list_index_510250`}</span>

        <CommonList
          finished={page.finished}
          onLoadMore={onLoadList}
          listChildren={otherList.map((coin: CoinListResp) => {
            return onLoadCoinItem(coin)
          })}
          showEmpty={otherList.length === 0}
        />
      </div>
    </div>
  )
}

export { TradeAssetsList }
