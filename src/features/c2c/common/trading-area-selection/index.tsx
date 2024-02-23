/**
 * 资产 - 交易区选择组件
 */
import { t } from '@lingui/macro'
import { IndexBar, Cell, IndexBarInstance, Popup } from 'react-vant'
import { useEffect, useRef, useState } from 'react'
import { useDebounce } from 'ahooks'
import NavBar from '@/components/navbar'
import LazyImage from '@/components/lazy-image'
import { checkIndexBar } from '@/helper/reg'
import { SearchInput } from '@/features/assets/common/search-input'
import { getAreaList } from '@/apis/c2c/common'
import { requestWithLoading } from '@/helper/order'
import { C2CAreaListResp } from '@/typings/api/c2c/common'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import { CoinTradingStatusTypeEnum } from '@/constants/c2c/common'
import CommonListEmpty from '@/components/common-list/list-empty'
import Search from '@/components/search'
import styles from './index.module.css'

interface TradingAreaSelectionProps {
  /** 当前选中 id */
  id?: string
  /** 禁用字段 */
  disabledKey?: string
  /** 是否返回所有数据 */
  returnAll?: boolean
  /** 选择币种 */
  onSelect: (e?) => void
  /** 关闭/返回上一页 */
  onCloseModal: () => void
}

function TradingAreaSelection(props: TradingAreaSelectionProps) {
  const { id, disabledKey, returnAll = true, onSelect, onCloseModal } = props || {}
  const [visible, setVisible] = useState(false)
  const [allList, setAllList] = useState<C2CAreaListResp[]>([])
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

  const pageList = allList.filter(item => {
    const ignoreCaseKey = debounceKey.toUpperCase()
    return item?.currencyName && item?.currencyName.toUpperCase().includes(ignoreCaseKey)
  })

  const otherList = allList.filter((item: C2CAreaListResp) => {
    const ignoreCaseKey = debounceKey.toUpperCase()

    if (!item?.currencyName) {
      return
    }
    return !checkIndexBar(item?.currencyName.slice(0, 1)) && item?.currencyName.toUpperCase().includes(ignoreCaseKey)
  })

  /**
   * 查询交易区列表
   */
  const onLoad = async () => {
    const res = await requestWithLoading(getAreaList({ returnAll }))
    const { isOk, data } = res || {}

    // TODO 返回数据应该是 list，待修改
    if (!isOk || !data) {
      return
    }

    if (data && data.length > 0) {
      const newList = data.filter((item: C2CAreaListResp) => {
        return item.statusCd === CoinTradingStatusTypeEnum.enable
      })

      setAllList(newList)
      const initIndex =
        indexList.find(index =>
          newList.some(listItem => {
            return listItem.currencyName?.slice(0, 1).toUpperCase() === index
          })
        ) || 'A'
      setActiveIndex(initIndex)
      indexRef.current = initIndex
    }
  }

  useEffect(() => {
    setVisible(true)
    onLoad()
  }, [])

  const onRenderListItem = row => {
    const isDisabled = disabledKey && !row[disabledKey]
    return (
      <div key={row.legalCurrencyId}>
        <Cell
          className="cell-item"
          isLink
          onClick={() => {
            if (isDisabled) return
            onSelect(row)
          }}
          title={
            <div className="currency-item">
              <div className={`name ${id === row.legalCurrencyId && 'active'} ${isDisabled && 'disabled'}`}>
                {row.currencyName}
              </div>
            </div>
          }
          icon={
            <LazyImage
              width={22}
              height={22}
              src={`${oss_area_code_image_domain_address}${row?.countryAbbreviation}.png`}
              round
            />
          }
        />
      </div>
    )
  }

  return (
    <Popup
      visible={visible}
      className={`${styles['trading-selection-wrapper']} h-full`}
      overlay={false}
      destroyOnClose
      closeOnPopstate
      safeAreaInsetBottom
    >
      <NavBar title={t`features_c2c_common_trading_area_selection_index_22222225101671`} onClickLeft={onCloseModal} />
      <div className="px-4">
        <Search
          placeholder={t`future.funding-history.search-future`}
          value={searchKey}
          onChange={setSearchKey}
          className="mt-2"
        />
      </div>

      <div className="content">
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
            const filterList =
              (pageList &&
                pageList.length > 0 &&
                pageList.filter((listItem: any) => {
                  return listItem?.currencyName.slice(0, 1).toUpperCase() === indexItem
                })) ||
              []

            return (
              <div key={indexItem}>
                <IndexBar.Anchor index={indexItem} />
                {filterList.map(item => {
                  return onRenderListItem(item)
                })}
              </div>
            )
          })}
        </IndexBar>
        <CommonListEmpty hidden={pageList.length > 0 || otherList.length > 0} />
      </div>
    </Popup>
  )
}

export { TradingAreaSelection }
