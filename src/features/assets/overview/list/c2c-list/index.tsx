/**
 * 资产总览-c2c 列表
 */
import { t } from '@lingui/macro'
import { useEffect, useState } from 'react'
import { useDebounce, useUnmount } from 'ahooks'
import { useAssetsStore } from '@/store/assets/spot'
import CommonList from '@/components/common-list/list'
import { formatCoinAmount } from '@/helper/assets/spot'
import { decimalUtils } from '@/nbit'
import { AssetsC2CListResp } from '@/typings/api/assets/assets'
import { CoinListHeader } from '../common/coin-list-header'
import { CoinCell } from '../common/coin-cell'

function C2CList() {
  const { c2cAssetsList, updateAssetsModule } = useAssetsStore().assetsModule
  const [hideLess, setHideLess] = useState(false) // 是否隐藏小额资产
  const [searchKey, setSearchKey] = useState('') // 搜索关键字
  const debouncedSearchKey = useDebounce(searchKey, {
    wait: 300,
  })
  const [finished, setFinished] = useState(false)

  const displayList =
    c2cAssetsList.filter(item => {
      const ignoreCaseKey = debouncedSearchKey.toUpperCase()
      const { coinName = '', coinFullName = '', usdBalance = 0 } = item || {}
      const isShowName =
        (coinName || coinFullName) &&
        (coinName?.toUpperCase().includes(ignoreCaseKey) ||
          coinFullName?.toUpperCase().includes(ignoreCaseKey) ||
          ignoreCaseKey === '')

      return isShowName && ((hideLess && +usdBalance > 1) || !hideLess)
    }) || []

  useEffect(() => {
    setFinished(true)
  }, [c2cAssetsList])

  useUnmount(() => {
    updateAssetsModule({ c2cAssetsList: [] })
  })

  return (
    <div className="flex flex-col bg-card_bg_color_03">
      <CoinListHeader
        hideLess={hideLess}
        searchKey={searchKey}
        onChangeHideLess={(e: boolean) => setHideLess(e)}
        onChangeSearchKey={setSearchKey}
      />

      <CommonList
        finished={finished}
        showEmpty={displayList.length === 0}
        listChildren={displayList.map((item: AssetsC2CListResp) => {
          const expandList = [
            {
              title: t`assets.common.available_count`,
              content: formatCoinAmount(item?.symbol, item?.balance),
            },
            {
              title: t`features_assets_index_coin_510298`,
              content: formatCoinAmount(
                item?.symbol,
                decimalUtils.SafeCalcUtil.add(item?.freezeBalance, item?.merchantFreezeBalance)
              ),
            },
          ]

          return (
            <CoinCell
              data={item}
              key={item?.coinId}
              expandList={expandList}
              totalAmount={`${decimalUtils.SafeCalcUtil.add(
                item?.balance,
                decimalUtils.SafeCalcUtil.add(item?.freezeBalance, item?.merchantFreezeBalance)
              )}`}
            />
          )
        })}
      />
    </div>
  )
}

export { C2CList }
