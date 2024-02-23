/**
 * 资产 - 币种选择列表组件
 */
import NavBar from '@/components/navbar'
import { t } from '@lingui/macro'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { Cell, IndexBar, IndexBarInstance, Popup, Toast } from 'react-vant'
import { getQueryCoinPageList, getQuerySubCoinList } from '@/apis/assets/common'
import { AssetsQueryCoinPageListCoinListResp } from '@/typings/api/assets/assets'
import { AssetsCoinRemindSettingTypeEnum } from '@/constants/assets'
import LazyImage from '@/components/lazy-image'
import { useDebounce } from 'ahooks'
import { onSortArray } from '@/helper/assets/spot'
import { checkIndexBar } from '@/helper/reg'
import { requestWithLoading } from '@/helper/order'
import MainNetwork from '../main-network'
import styles from './index.module.css'
import { SearchInput } from '../search-input'

export default CoinList
interface CoinListProps {
  title?: string
  /** 币种选择来源（提现/充值） */
  pageType: number
  onCoinChange: (coin: ICoin) => void
  showNetworkModalWhenCoinChange?: boolean
  onNetworkChange?: (val: string) => void
  /** 加载完毕后是否设置第一个币种为被选项 */
  setFirstWhenLoaded?: boolean
  networkTitle?: ReactNode
  networkDesc?: ReactNode
  /** 回退 */
  onBack?: () => void
  activeCoin?: string
}
export type ICoin = AssetsQueryCoinPageListCoinListResp

function CoinList({
  title = t`assets.withdraw.form.coin.label`,
  pageType,
  onCoinChange,
  onNetworkChange,
  setFirstWhenLoaded,
  showNetworkModalWhenCoinChange,
  networkTitle,
  networkDesc,
  onBack,
  activeCoin = '',
}: CoinListProps) {
  const [visibleMainNet, setVisibleMainNet] = useState(false)
  const [networks, setNetworks] = useState<any>([])
  const [searchKey, setSearchKey] = useState('')
  const [hotList, setHotList] = useState<any>([])
  const [coinList, setCoinList] = useState<any>([])
  const [activeIndex, setActiveIndex] = useState<string | number>('')
  const indexBarRef = useRef<IndexBarInstance>(null)
  const indexRef = useRef<any>(null)
  const [visible, setVisible] = useState(false)

  /**
   * 搜索币种
   */
  const debouncedSearchKey = useDebounce(searchKey)
  const searchList = coinList.filter((item: AssetsQueryCoinPageListCoinListResp) => {
    const ignoreCaseKey = debouncedSearchKey.toUpperCase()
    const { coinName = '', coinFullName = '' } = item || {}
    return (
      coinName &&
      coinFullName &&
      (coinName?.toUpperCase().includes(ignoreCaseKey) || coinFullName?.toUpperCase().includes(ignoreCaseKey))
    )
  })

  const otherList = coinList.filter((item: AssetsQueryCoinPageListCoinListResp) => {
    const ignoreCaseKey = debouncedSearchKey.toUpperCase()
    return !checkIndexBar(item.coinName?.slice(0, 1)) && item.coinName?.toUpperCase().includes(ignoreCaseKey)
  })

  /**
   * 获取全部主币列表
   */
  const onLoadCoinList = async () => {
    const res = await getQueryCoinPageList({ name: searchKey, type: pageType })
    const { isOk, data: { coinList: rList = [] } = {}, message = '' } = res || {}

    if (!isOk) {
      Toast(message)
    }

    if (pageType && rList.length > 0) {
      const hList = rList.filter((listItem: any) => {
        return listItem.isPopular === 1
      })

      setHotList(hList)
    }

    const newCoinList = rList.sort(onSortArray)
    setCoinList(newCoinList)
  }

  /**
   * 根据主币获取主网列表
   */
  const onLoadNetworks = async coin => {
    const res = await getQuerySubCoinList({ coinId: coin.id })
    const { isOk, data, message = '' } = res || {}

    if (!isOk || !data) {
      Toast(message)
      return
    }

    // 主币下有子币信息时展示子币列表，没有子币时主网展示主币信息
    setNetworks(data.subCoinList)
    onCoinChange({ ...coin, networks: data.subCoinList })
    if (data.subCoinList.length > 0 && showNetworkModalWhenCoinChange) {
      setVisibleMainNet(true)
    }
  }

  // 设置选中的主网类型信息
  const selectNetwork = (id: string) => {
    onNetworkChange?.(id)
    setVisibleMainNet(false)
  }

  // 设置选中的币种信息
  const selectCoin = (coin: ICoin) => {
    onLoadNetworks(coin)
  }

  // 充值暂停状态样式
  const getRechargeStateCss = availableState => (availableState ? '' : 'available-stop')

  const indexList = [] as any
  const charCodeOfA = 'A'.charCodeAt(0)
  for (let i = 0; i < 26; i += 1) {
    indexList.push(String.fromCharCode(charCodeOfA + i))
  }

  useEffect(() => {
    setVisible(true)
    requestWithLoading(onLoadCoinList(), 0)

    if (setFirstWhenLoaded) {
      selectCoin(coinList[0])
    }
  }, [])

  const onRenderListItem = row => {
    let isAvailable = true
    if (pageType) {
      isAvailable = pageType === AssetsCoinRemindSettingTypeEnum.withdraw ? row.isWithdraw === 1 : row.isDeposit === 1
    }
    return (
      <div key={row.id}>
        <Cell
          className={getRechargeStateCss(isAvailable)}
          onClick={() => selectCoin(row)}
          title={
            <div className="currency-item">
              <div className={`name ${activeCoin === row.id && 'active'}`}>{row.coinName}</div>
              <div className={`desc ${activeCoin === row.id && 'active'}`}>{row.coinFullName}</div>
              {!isAvailable && <div className="state">{t`assets.common.coin-list.paused`}</div>}
            </div>
          }
          icon={<LazyImage src={row.appLogo} width={22} height={22} round />}
        />
      </div>
    )
  }

  return (
    <Popup
      visible={visible}
      className={styles['coin-select-list-root']}
      overlay={false}
      destroyOnClose
      closeOnPopstate
      safeAreaInsetBottom
    >
      <div className={'coin-select-list-content'}>
        <NavBar title={title} onClickLeft={onBack} />
        <div className="search-cell">
          <SearchInput
            placeholder={t`features/assets/common/coin-list/index-0`}
            value={searchKey}
            onChange={setSearchKey}
          />
        </div>

        {hotList.length > 0 && (
          <div className="hot-currency">
            <span className="hot-title">{t`features/assets/common/coin-list/index-1`}</span>
            <div className="hot-list">
              {hotList.map(hotItem => {
                return (
                  <div className="hot-list-item" key={hotItem.id} onClick={() => selectCoin(hotItem)}>
                    {hotItem.coinName}
                  </div>
                )
              })}
            </div>
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
          {indexList.map((val: string) => {
            // 过滤对应索引的数据
            const filterList = searchList.filter((listItem: any) => {
              return listItem.coinName.slice(0, 1).toUpperCase() === val
            })

            return (
              <div key={val}>
                <IndexBar.Anchor index={val} />
                {filterList.map(item => {
                  return onRenderListItem(item)
                })}
              </div>
            )
          })}
        </IndexBar>
        {visibleMainNet && (
          <MainNetwork
            pageType={pageType}
            title={networkTitle}
            desc={networkDesc}
            onCancel={() => {
              setVisibleMainNet(false)
            }}
            type="action-sheet"
            networks={networks}
            onChange={selectNetwork}
            value={networks[0]?.id}
          />
        )}
      </div>
    </Popup>
  )
}
