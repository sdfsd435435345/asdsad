/**
 * 资产 - 资产选择组件
 */
import { t } from '@lingui/macro'
import { IndexBar, Cell, IndexBarInstance, Popup } from 'react-vant'
import { useRef, useState } from 'react'
import { useDebounce, useMount } from 'ahooks'
import NavBar from '@/components/navbar'
import LazyImage from '@/components/lazy-image'
import { RecordsCoinListResp } from '@/typings/api/assets/assets'
import { checkIndexBar } from '@/helper/reg'
import { C2CCoinListResp } from '@/typings/api/c2c/common'
import { SearchInput } from '../search-input'
import styles from './index.module.css'

interface AssetsSelectionProps {
  visible: boolean
  /** 是否展示全部选项 */
  showAll?: boolean
  /** 标题 */
  title?: string
  /** 搜索提示语 */
  searchHint?: string
  /** 币种列表 */
  allList: RecordsCoinListResp[] | C2CCoinListResp[]
  /** 当前币种 id */
  coinId?: string
  /** 选择币种 */
  onSelect: (e?) => void
  /** 关闭/返回上一页 */
  onClose: () => void
}

function AssetsSelection(props: AssetsSelectionProps) {
  const {
    visible,
    showAll = true,
    title = t`features_assets_financial_record_assets_selection_index_510159`,
    searchHint = t`features/assets/common/coin-list/index-0`,
    allList = [],
    coinId,
    onSelect,
    onClose,
  } = props || {}
  const [searchKey, setSearchKey] = useState('') // 搜索值
  const debounceKey = useDebounce(searchKey)
  const indexList = [] as any // 索引列表
  const charCodeOfA = 'A'.charCodeAt(0)
  for (let i = 0; i < 26; i += 1) {
    indexList.push(String.fromCharCode(charCodeOfA + i))
  }
  const [activeIndex, setActiveIndex] = useState<string | number>('')
  const indexBarRef = useRef<IndexBarInstance>(null)
  const indexRef = useRef<any>(null)

  const coinList = [...allList].filter(coinItem => {
    const ignoreCaseKey = debounceKey.toUpperCase()
    const { coinName = '', coinFullName = '' } = coinItem || {}
    return (
      coinName &&
      coinFullName &&
      (coinName.toUpperCase().includes(ignoreCaseKey) || coinFullName.toUpperCase().includes(ignoreCaseKey))
    )
  })

  const otherList = [...allList].filter(item => {
    const ignoreCaseKey = debounceKey.toUpperCase()
    return !checkIndexBar(item?.coinName?.slice(0, 1)) && item?.coinName?.toUpperCase().includes(ignoreCaseKey)
  })

  const onRenderListItem = row => {
    return (
      <div key={row.id}>
        <Cell
          className="cell-item"
          onClick={() => onSelect(row)}
          title={
            <div className="currency-item">
              <div className={`name ${coinId === row.id && 'active'}`}>{row.coinName}</div>
              <div className={`desc ${coinId === row.id && 'active'}`}>{row.coinFullName}</div>
            </div>
          }
          icon={<LazyImage width={22} height={22} src={row.appLogo} round />}
        />
      </div>
    )
  }

  useMount(() => {
    document.documentElement.scrollTop = 0
  })

  return (
    <Popup
      visible={visible}
      className={styles['assets-selection-wrapper']}
      overlay={false}
      destroyOnClose
      closeOnPopstate
      safeAreaInsetBottom
    >
      <NavBar title={title} onClickLeft={onClose} />
      <SearchInput placeholder={searchHint} value={searchKey} onChange={setSearchKey} />

      <div className="content">
        {showAll && (
          <div className={`all ${!coinId && 'active'}`} onClick={() => onSelect()}>
            {t`assets.withdraw.form.count.withdraw-all`}
          </div>
        )}

        {otherList &&
          otherList.map(otherItem => {
            return onRenderListItem(otherItem)
          })}

        <IndexBar
          ref={indexBarRef}
          stickyOffsetTop={80}
          sticky={false}
          indexList={searchKey ? [] : indexList}
          itemRender={item => {
            return (
              <div
                onClick={() => {
                  indexRef.current = item
                  setActiveIndex(item)
                  indexBarRef.current?.scrollTo(item)
                }}
                className={`index-bar ${activeIndex === item && 'index-active'}`}
              >
                {item}
              </div>
            )
          }}
          onChange={(index: number | string) => {
            setActiveIndex(indexRef.current || index || indexList[0])
            indexRef.current = null
          }}
        >
          {indexList.map((indexItem: string) => {
            // 过滤对应索引的数据
            const filterList = coinList.filter((listItem: any) => {
              return listItem.symbol.slice(0, 1).toUpperCase() === indexItem
            })

            return (
              <div key={indexItem}>
                <IndexBar.Anchor index={indexItem} />
                {filterList.map((item: RecordsCoinListResp) => {
                  return onRenderListItem(item)
                })}
              </div>
            )
          })}
        </IndexBar>
      </div>
    </Popup>
  )
}

export { AssetsSelection }
