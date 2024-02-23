import { getC2cCoinTypeList } from '@/apis/c2c/center'
import Icon from '@/components/icon'
import LazyImage from '@/components/lazy-image'
import NavBar from '@/components/navbar'
import { SearchInput } from '@/features/assets/common/search-input'
import { YapiGetV1C2CCoinAllListData } from '@/typings/yapi/C2cCoinAllV1GetApi'
import { YapiGetV1C2CCommonSettingData } from '@/typings/yapi/C2cCommonSettingV1GetApi'
import { t } from '@lingui/macro'
import { Cell, Field, IndexBar, IndexBarInstance, Popup, Toast } from 'react-vant'
import { useDebounce, useUpdateEffect } from 'ahooks'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { isArray, minBy } from 'lodash'
import { isAboveMinFrozeAmount } from '@/helper/c2c/merchant'
import styles from './index.module.css'

type TFormCoinsSelection = {
  onChange?: any
  setting?: YapiGetV1C2CCommonSettingData
  onCoinChange: (coin: { freezeSymbolId?: string; freezeSymbol?: string }) => void
}

function FormCoinsSelection({ onCoinChange, setting, onChange }: TFormCoinsSelection) {
  const [visible, setvisible] = useState(false)
  const indexBarRef = useRef<IndexBarInstance>(null)
  const indexRef = useRef<any>(null)
  const [searchKey, setSearchKey] = useState('')
  const [coin, setcoin] = useState<YapiGetV1C2CCoinAllListData>()
  const [coinList, setCoinList] = useState<YapiGetV1C2CCoinAllListData[]>([])
  const [activeIndex, setActiveIndex] = useState<string | number>('')
  const [inputVal, setinputVal] = useState<string>()

  useUpdateEffect(() => {
    onChange?.({
      freezeCount: inputVal,
    })
  }, [inputVal])

  useUpdateEffect(() => {
    onCoinChange({
      freezeSymbolId: coin?.id,
      freezeSymbol: coin?.symbol,
    })
  }, [coin])

  /**
   * 获取全部主币列表
   */
  const onLoadCoinList = async () => {
    Toast.loading({ duration: 0, message: t`features_assets_coin_details_coin_details_510157` })
    const res = await getC2cCoinTypeList({})
    const { isOk, data: rList = [], message = '' } = res || {}

    if (!isOk) {
      Toast(message)
    }

    if (isArray(rList)) {
      rList.sort((a, b) => {
        if ((a.symbol || 0) < (b.symbol || 0)) {
          return -1
        }
        if ((a.symbol || 0) > (b.symbol || 0)) {
          return -1
        }
        return 0
      })
      setCoinList(rList)
      // set default coin as USDT
      setcoin(rList?.find(r => r.defaultShow) || rList[0])
    }

    Toast.clear()
  }

  useEffect(() => {
    onLoadCoinList()
  }, [])

  const indexList = [] as any
  const charCodeOfA = 'A'.charCodeAt(0)
  for (let i = 0; i < 26; i += 1) {
    indexList.push(String.fromCharCode(charCodeOfA + i))
  }

  const debouncedSearchKey = useDebounce(searchKey)

  const defaultIndex = minBy(coinList, each => each.symbol)?.symbol?.[0] || indexList[0]

  const onRenderListItem = row => {
    let isAvailable = true
    return (
      <div key={row.id}>
        <Cell
          onClick={() => {
            setcoin(row)
            setvisible(false)
          }}
          title={
            <div className="currency-item">
              <div className={classNames('text-base text-text_color_01 font-medium', { active: coin?.id === row.id })}>
                {row.coinName}
              </div>
              <div className={classNames('text-xs text-text_color_02', { active: coin?.id === row.id })}>
                {row.coinFullName}
              </div>
              {!isAvailable && <div className="state">{t`assets.common.coin-list.paused`}</div>}
            </div>
          }
          icon={<LazyImage src={row.appLogo} width={22} height={22} round />}
        />
      </div>
    )
  }

  const searchList = coinList.filter((item: any) => {
    const ignoreCaseKey = debouncedSearchKey.toUpperCase()
    const { coinName = '', coinFullName = '' } = item || {}
    return (
      coinName &&
      coinFullName &&
      (coinName.toUpperCase().includes(ignoreCaseKey) || coinFullName.toUpperCase().includes(ignoreCaseKey))
    )
  })

  const { minAmountBySelectedSymbolWithPresion } = isAboveMinFrozeAmount(
    setting?.frozenQuantity || 0,
    setting?.symbol || 'USDT',
    undefined,
    coin?.symbol
  )

  return (
    <>
      <Field
        type="number"
        placeholder={`${t`features_c2c_c2c_merchant_c2c_merchant_form_form_coins_selection_index_ntbjz2zd7lgeux8xro_qp`} ${
          minAmountBySelectedSymbolWithPresion || setting?.frozenQuantity || ''
        }`}
        suffix={
          <span className="text-text_color_01 flex items-center" onClick={() => setvisible(true)}>
            {coin?.symbol} <Icon name="regsiter_icon_drop" hasTheme className="ml-2 mt-0" />
          </span>
        }
        onChange={setinputVal}
      />
      <Popup
        className={styles['form-coins-popup']}
        visible={visible}
        duration={1}
        destroyOnClose
        onClosed={() => setSearchKey('')}
      >
        <NavBar
          title={t`features_trade_future_settings_margin_records_index_678`}
          onClickLeft={() => setvisible(false)}
        />
        <SearchInput placeholder={t`future.funding-history.search-future`} value={searchKey} onChange={setSearchKey} />
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
            setActiveIndex(indexRef.current || index || defaultIndex)
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
      </Popup>
    </>
  )
}

export default FormCoinsSelection
