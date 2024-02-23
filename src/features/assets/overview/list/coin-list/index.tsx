/**
 * 资产总览 - 币种列表
 */
import { t } from '@lingui/macro'
import { useEffect, useState } from 'react'
import { useDebounce, useUnmount } from 'ahooks'
import CommonList from '@/components/common-list/list'
import { useAssetsStore } from '@/store/assets/spot'
import { formatCoinAmount } from '@/helper/assets/spot'
import { CoinListResp } from '@/typings/api/assets/assets'
import { link } from '@/helper/link'
import { getAssetsCoinDetailPageRoutePath } from '@/helper/route'
import styles from './index.module.css'
import { CoinCell } from '../common/coin-cell'
import { CoinListHeader } from '../common/coin-list-header'

function CoinList() {
  const { coinAssetsList, updateAssetsModule } = useAssetsStore().assetsModule
  const [hideLess, setHideLess] = useState(false) // 是否隐藏小额资产
  const [searchKey, setSearchKey] = useState('') // 搜索关键字
  const debouncedSearchKey = useDebounce(searchKey, {
    wait: 300,
  })
  const [finished, setFinished] = useState(false)

  const sortFn = (a: CoinListResp, b: CoinListResp) => {
    return (b.usdBalance as unknown as number) - (a.usdBalance as unknown as number)
  }

  const displayList =
    coinAssetsList
      .filter(item => {
        const ignoreCaseKey = debouncedSearchKey.toUpperCase()
        const { coinName = '', coinFullName = '', usdBalance = 0 } = item || {}
        const isShowName =
          (coinName || coinFullName) &&
          (coinName?.toUpperCase().includes(ignoreCaseKey) ||
            coinFullName?.toUpperCase().includes(ignoreCaseKey) ||
            ignoreCaseKey === '')

        return isShowName && ((hideLess && usdBalance > 1) || !hideLess)
      })
      .sort(sortFn) || []

  useEffect(() => {
    setFinished(true)
  }, [coinAssetsList])

  useUnmount(() => {
    updateAssetsModule({ coinAssetsList: [] })
  })

  return (
    <div className={styles['coin-list-root']}>
      <CoinListHeader
        hideLess={hideLess}
        searchKey={searchKey}
        onChangeHideLess={(e: boolean) => setHideLess(e)}
        onChangeSearchKey={setSearchKey}
      />

      <CommonList
        finished={finished}
        listChildren={displayList.map((coinItem: CoinListResp) => {
          const expandList = [
            {
              title: t`assets.common.available_count`,
              content: formatCoinAmount(coinItem?.symbol, coinItem?.availableAmount),
            },
            {
              title: t`features_assets_index_coin_510298`,
              content: formatCoinAmount(coinItem?.symbol, coinItem?.lockAmount),
            },
          ]

          return (
            <CoinCell
              data={coinItem}
              key={coinItem?.coinId}
              expandList={expandList}
              totalAmount={coinItem?.totalAmount || ''}
              onClick={() => link(getAssetsCoinDetailPageRoutePath(coinItem?.coinId))}
            />
          )
        })}
        showEmpty={displayList.length === 0}
      />
    </div>
  )
}

export { CoinList }
