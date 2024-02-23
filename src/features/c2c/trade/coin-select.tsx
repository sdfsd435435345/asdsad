import { getC2cCoinTypeList } from '@/apis/c2c/center'
import { getC2cCoinsTraded } from '@/apis/c2c/order'
import { queryC2cTradeCoinList } from '@/apis/c2c/trade'
import CommonListEmpty from '@/components/common-list/list-empty'
import Icon from '@/components/icon'
import LazyImage from '@/components/lazy-image'
import NavBar from '@/components/navbar'
import { SearchInput } from '@/features/assets/common/search-input'
import { replaceEmpty } from '@/helper/filters'
import { requestWithLoading } from '@/helper/order'
import { IC2cCoinItem } from '@/typings/api/c2c/trade'
import { t } from '@lingui/macro'
import { Cell, IndexBar, IndexBarInstance, Popup } from 'react-vant'
import { useDebounce } from 'ahooks'
import classNames from 'classnames'
import { useEffect, useState, useRef } from 'react'
import { C2cTradeAdDirectionEnum } from '@/constants/c2c/trade'
import { useBaseC2cTradeStore } from '@/store/c2c/trade'
import styles from './common.module.css'
import { useTradeContext } from './trade-context'

type ICoinItemProps = {
  coin: IC2cCoinItem
  onSelect: (coin: IC2cCoinItem) => void
  isActive: boolean
}
function CoinItem({ coin, onSelect, isActive }: ICoinItemProps) {
  return (
    <div className={styles['coin-select-item']}>
      <Cell
        className="cell-item"
        isLink
        onClick={() => onSelect(coin)}
        title={
          <div
            className={classNames('coin-item', {
              'is-selected': isActive,
            })}
          >
            <div className="short-name">{coin.coinName}</div>
            <div className="full-name">{coin.coinFullName}</div>
          </div>
        }
        icon={<LazyImage src={coin.appLogo} width={22} height={22} round />}
      />
    </div>
  )
}
type IValue = {
  currentCoin?: IC2cCoinItem
  coinId?: any
  areaId?: any
  orderStatus?: number
  advertDirectCds?: any[]
}
type ICoinSelectProps = {
  value: IValue
  isAllCoin?: boolean
  title?: string
  isFastTrade?: boolean
  onChange: (newValue: IValue) => void
  className?: string
  inTrade?: boolean
}
export function CoinSelect({
  value: params,
  isFastTrade,
  title,
  isAllCoin,
  onChange: propsOnChange,
  className,
  inTrade,
}: ICoinSelectProps) {
  const { coinId: storeCoinId, updateCoinId: storeUpdateCoinId } = useBaseC2cTradeStore()
  const onChange = (coin?: IC2cCoinItem) => {
    inTrade && storeUpdateCoinId(coin?.id || '')
    propsOnChange({
      currentCoin: coin,
      coinId: coin?.id,
    })
  }
  const currentCoin = params.currentCoin
  const [searchKey, setSearchKey] = useState('')
  const [visible, onVisibleChange] = useState(false)
  const [coinList, setCoinList] = useState<IC2cCoinItem[]>([])
  const [activeIndex, setActiveIndex] = useState<string | number>('')
  const indexBarRef = useRef<IndexBarInstance>(null)
  const indexRef = useRef<any>(null)
  /**
   * 搜索币种
   */
  const debouncedSearchKey = useDebounce(searchKey)
  const searchList = coinList.filter(item => {
    const ignoreCaseKey = debouncedSearchKey.toUpperCase()
    const { coinName = '', coinFullName = '' } = item || {}
    return (
      coinName &&
      coinFullName &&
      (coinName.toUpperCase().includes(ignoreCaseKey) || coinFullName.toUpperCase().includes(ignoreCaseKey))
    )
  })
  const indexList = [] as any
  const charCodeOfA = 'A'.charCodeAt(0)
  for (let i = 0; i < 26; i += 1) {
    indexList.push(String.fromCharCode(charCodeOfA + i))
  }
  /**
   * 获取全部主币列表
   */
  const getCoinList = async () => {
    if (!params.areaId || params.areaId.length === 0) {
      return
    }
    const res = await requestWithLoading(
      isAllCoin
        ? getC2cCoinsTraded({
            areaIds: params.areaId,
            status: params.orderStatus || 1,
          })
        : queryC2cTradeCoinList({
            areaIds: [params.areaId as any],
            isQuickTrade: isFastTrade,
            side: params.advertDirectCds!.includes(C2cTradeAdDirectionEnum.buy) ? 'BUY' : 'SELL',
            isSupportOtc: true,
          })
    )
    if (!res.isOk || !res.data) {
      return
    }
    const data = res.data as IC2cCoinItem[]
    setCoinList(data)
    const initIndex =
      indexList.find(index =>
        data.some(listItem => {
          return listItem.coinName?.slice(0, 1).toUpperCase() === index
        })
      ) || 'A'
    setActiveIndex(initIndex)
    indexRef.current = initIndex
    if (data.find(item => (item.id as any)?.toString() === params.coinId?.toString())) {
      return
    }
    onChange(data.find(item => (inTrade && storeCoinId ? item.id === storeCoinId : item.defaultShow)) || data[0])
  }

  useEffect(() => {
    getCoinList()
  }, [params.areaId, params.orderStatus, params.advertDirectCds])

  return (
    <>
      <div className={classNames('flex items-center', className)} onClick={() => onVisibleChange(true)}>
        <div className="mr-2 flex items-center text-sm">
          {currentCoin && (
            <LazyImage alt={currentCoin?.coinName} className="w-5 h-5 mr-2 rounded-full" src={currentCoin?.appLogo} />
          )}
          <span>{replaceEmpty(currentCoin?.coinName)}</span>
        </div>
        <Icon hiddenMarginTop className="text-xs scale-75" name="regsiter_icon_drop" hasTheme />
      </div>
      <Popup className="h-full" position="bottom" visible={visible} onClose={() => onVisibleChange(false)}>
        <div className={classNames(styles['index-bar-list-outer'], 'h-screen bg-bg_color')}>
          <NavBar
            title={title || t`features_trade_future_settings_margin_records_index_678`}
            onClickLeft={() => onVisibleChange(false)}
          />
          <div className="py-2">
            <SearchInput
              placeholder={t`future.funding-history.search-future`}
              value={searchKey}
              onChange={setSearchKey}
            />
          </div>
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

              return filterList.length === 0 ? null : (
                <div key={val}>
                  <IndexBar.Anchor className="h-px opacity-0" index={val} />
                  {filterList.map(item => {
                    const onSelect = (coin: IC2cCoinItem) => {
                      onChange(coin)
                      onVisibleChange(false)
                    }
                    return (
                      <CoinItem key={item.id} coin={item} onSelect={onSelect} isActive={currentCoin?.id === item.id} />
                    )
                  })}
                </div>
              )
            })}
            <CommonListEmpty hidden={searchList.length > 0} />
          </IndexBar>
        </div>
      </Popup>
    </>
  )
}
