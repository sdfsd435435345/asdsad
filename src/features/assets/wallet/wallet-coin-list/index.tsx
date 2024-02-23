/**
 * 资产总览 - 币种列表
 */
import { t } from '@lingui/macro'
import { useEffect, useState } from 'react'
import { useDebounce, useUnmount } from 'ahooks'
import CommonList from '@/components/common-list/list'
import { useAssetsStore } from '@/store/assets/spot'
import { AssetsC2CListResp } from '@/typings/api/assets/assets'
import { link } from '@/helper/link'
import { getAssetsCoinDetailPageRoutePath } from '@/helper/route'
import { CoinListHeader } from '@/features/assets/overview/list/common/coin-list-header'
import { CoinCell } from '@/features/assets/overview/list/common/coin-cell'
import { onGetC2cAssetsListAll } from '@/helper/assets/overview'
import { YapiGetV1C2cBalanceAllApiRequest } from '@/typings/yapi/C2cBalanceAllV1GetApi'
import styles from './index.module.css'

function WalletCoinList() {
  const { c2cAssetsListAll, updateAssetsModule } = useAssetsStore().assetsModule
  const [searchKey, setSearchKey] = useState('') // 搜索关键字
  const debouncedSearchKey = useDebounce(searchKey, {
    wait: 300,
  })
  const [finished, setFinished] = useState(false)
  const [apiParams, setapiParams] = useState<YapiGetV1C2cBalanceAllApiRequest>({ pageNum: '1', pageSize: '0' })

  const displayList =
    c2cAssetsListAll.filter(item => {
      const ignoreCaseKey = debouncedSearchKey.toUpperCase()
      const { coinName = '', coinFullName = '' } = item || {}
      const isShowName =
        (coinName || coinFullName) &&
        (coinName?.toUpperCase().includes(ignoreCaseKey) ||
          coinFullName?.toUpperCase().includes(ignoreCaseKey) ||
          ignoreCaseKey === '')

      return isShowName
    }) || ([] as AssetsC2CListResp[])

  useEffect(() => {
    setFinished(true)
  }, [c2cAssetsListAll])

  useUnmount(() => {
    updateAssetsModule({ coinAssetsList: [] })
  })

  useEffect(() => {
    onGetC2cAssetsListAll(apiParams)
  }, [apiParams])

  return (
    <div className={styles['coin-list-root']}>
      <CommonList
        refreshing
        onRefreshing={() => onGetC2cAssetsListAll(apiParams)}
        finished={finished}
        showEmpty={displayList.length === 0}
        listChildren={displayList.map(item => {
          return (
            <CoinCell
              onClick={() => item?.coinId && link(getAssetsCoinDetailPageRoutePath(item.coinId))}
              data={item as any}
              key={item?.coinId}
              expandList={[]}
            />
          )
        })}
      />
    </div>
  )
}

export { WalletCoinList }
