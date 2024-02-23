import { t } from '@lingui/macro'
import { createPortal } from 'react-dom'
import { useMount } from 'ahooks'
import { formatCurrency, removeDecimalZero } from '@/helper/decimal'
import { useState, useMemo, useRef } from 'react'
import { CoinListResp, RecordsCoinListResp } from '@/typings/api/assets/assets'
/** 引入组件* */
import { Cell } from 'react-vant'
import NavBar from '@/components/navbar'
import LazyImage from '@/components/lazy-image'
import NoDataImage from '@/components/no-data-image'
import { CommonDigital } from '@/components/common-digital'
import { SearchInput } from '@/features/assets/common/search-input'
import styles from './index.module.css'

interface AssetsSelectionProps {
  /** 是否展示全部选项 */
  showAll?: boolean
  /** 标题 */
  title?: string
  /** 搜索提示语 */
  searchHint?: string
  /** 币种列表 */
  allList: RecordsCoinListResp[] | CoinListResp[]
  /** 当前币种 id */
  coinId?: string
  /** 选择币种 */
  onSelect: (e?: RecordsCoinListResp | CoinListResp) => void
  /** 关闭/返回上一页 */
  onClose: () => void
}

function AssetsSelection(props: AssetsSelectionProps) {
  const {
    title = t`features_assets_financial_record_assets_selection_index_510159`,
    searchHint = t`features/assets/common/coin-list/index-0`,
    allList = [],
    coinId,
    onSelect,
    onClose,
  } = props || {}

  const [assetsData, setAssetsData] = useState<RecordsCoinListResp[] | CoinListResp[]>([])
  const [searchKey, setSearchKey] = useState<string>('') // 搜索值

  const assetsList = useRef<Array<RecordsCoinListResp | CoinListResp>>([])

  const onCellChange = (v: RecordsCoinListResp | CoinListResp) => {
    onSelect && onSelect(v)
  }

  useMemo(() => {
    if (searchKey && assetsList.current?.length) {
      const newData = assetsList.current?.filter(v => v.coinName?.indexOf(searchKey) !== -1)
      setAssetsData(newData)
    }
    !searchKey && setAssetsData(assetsList.current)
  }, [searchKey])

  useMount(() => {
    const newAllList = allList?.sort((currentData, nextData) => {
      return nextData?.usdBalance - currentData?.usdBalance
    })
    setAssetsData(newAllList)
    assetsList.current = newAllList
  })

  return (
    <>
      {createPortal(
        <div className={styles['assets-selection-wrapper']}>
          <NavBar title={title} onClickLeft={onClose} />

          <SearchInput placeholder={searchHint} value={searchKey} onChange={setSearchKey} className="mt-2" />

          <Cell.Group border={false} className="assets-selection-cell">
            {assetsData?.length ? (
              assetsData?.map((v, index) => {
                const coinPrice = v?.balance || v?.availableAmount
                /** 为 0 不展示* */
                const coinNumPrice = coinPrice ? Number(coinPrice) : ''
                if (!coinNumPrice) {
                  return
                }
                return (
                  <Cell
                    key={index}
                    border={false}
                    title={
                      <div className="currency-item">
                        <div className={`name ${coinId === (v?.id || v?.coinId) && 'active'}`}>{v?.coinName}</div>
                      </div>
                    }
                    onClick={() => onCellChange(v)}
                    icon={<LazyImage width={22} height={22} src={v?.appLogo} round />}
                  >
                    <CommonDigital content={removeDecimalZero(formatCurrency(coinPrice, v?.coinPrecision))} />
                  </Cell>
                )
              })
            ) : (
              <NoDataImage className="mt-32" />
            )}
          </Cell.Group>
        </div>,
        document.body
      )}
    </>
  )
}

export { AssetsSelection }
