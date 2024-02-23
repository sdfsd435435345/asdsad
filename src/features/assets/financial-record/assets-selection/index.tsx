/**
 * 资产 - 财务列表 - 资产选择
 */
import { t } from '@lingui/macro'
import NavBar from '@/components/navbar'
import { useEffect, useRef, useState } from 'react'
import { useDebounce } from 'ahooks'
import { IndexBar, Cell, Toast, IndexBarInstance, Popup } from 'react-vant'
import { getRecordsCoinList } from '@/apis/assets/financial-records'
import { FinancialRecordRouteEnum, setFinancialRecordLogType } from '@/constants/assets'
import { useAssetsStore } from '@/store/assets/spot'
import LazyImage from '@/components/lazy-image'
import { RecordsCoinListResp } from '@/typings/api/assets/assets'
import { IAssetsRecordResp } from '@/typings/assets'
import { onSortArray } from '@/helper/assets/spot'
import { checkIndexBar } from '@/helper/reg'
import styles from './index.module.css'
import { SearchInput } from '../../common/search-input'

function AssetsSelection({ onSelect, visible }: { onSelect: () => void; visible: boolean }) {
  const recordModule = useAssetsStore().recordModule
  const [searchKey, setSearchKey] = useState('') // 搜索值
  const debounceKey = useDebounce(searchKey)
  const indexList = [] as any // 索引列表
  const charCodeOfA = 'A'.charCodeAt(0)
  const { assetsEnums } = useAssetsStore()
  for (let i = 0; i < 26; i += 1) {
    indexList.push(String.fromCharCode(charCodeOfA + i))
  }
  const [allList, setAllList] = useState<RecordsCoinListResp[]>([]) // 币种列表
  const [coinId, setCoinId] = useState<string>('')
  const [activeIndex, setActiveIndex] = useState<string | number>('')
  const indexBarRef = useRef<IndexBarInstance>(null)
  const indexRef = useRef<any>(null)

  const coinList = allList.filter(coinItem => {
    const ignoreCaseKey = debounceKey.toUpperCase()
    const { coinName = '', coinFullName = '' } = coinItem || {}
    return (
      coinName &&
      coinFullName &&
      (coinName.toUpperCase().includes(ignoreCaseKey) || coinFullName.toUpperCase().includes(ignoreCaseKey))
    )
  })

  const otherList = allList.filter(item => {
    const ignoreCaseKey = debounceKey.toUpperCase()
    return !checkIndexBar(item?.coinName?.slice(0, 1)) && item?.coinName?.toUpperCase().includes(ignoreCaseKey)
  })

  /**
   * 加载币种列表
   * @param logType
   * @returns
   */
  const onLoadList = async () => {
    const params = {
      // logType: setFinancialRecordLogType(recordModule.activeTab) || 0,
      type: assetsEnums.walletFinancialRecordTypeEnum.enums.map(item => item.value as number).join(','),
    }

    const res = await getRecordsCoinList(params)
    const { isOk, data, message = '' } = res || {}
    const { coinList: rList = [] } = data || {}

    if (!isOk) {
      Toast(message)
      return
    }

    const newAllList = (rList && rList.sort(onSortArray)) || []
    setAllList(newAllList)
  }

  /**
   * 选择币种
   * @param coin 币种信息
   */
  const onSelectCoin = (coin?: RecordsCoinListResp) => {
    const assetsData: IAssetsRecordResp = {
      ...recordModule.assetsRecord[recordModule.activeTab],
      coinId: coin?.id || '',
      coinName: coin ? coin.coinName : '',
    }
    recordModule.updateAssetsRecord(assetsData, recordModule.activeTab)
    onSelect()
  }

  useEffect(() => {
    const id = recordModule.assetsRecord[recordModule.activeTab].coinId
    id && setCoinId(id)

    onLoadList()
  }, [])

  const onRenderListItem = row => {
    return (
      <div key={row.id}>
        <Cell
          className="cell-item"
          onClick={() => {
            onSelectCoin(row)
          }}
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

  return (
    <Popup
      visible={visible}
      className={styles['assets-selection-wrapper']}
      overlay={false}
      destroyOnClose
      closeOnPopstate
      safeAreaInsetBottom
    >
      <NavBar
        title={t`features_assets_financial_record_assets_selection_index_510159`}
        onClickLeft={() => recordModule.updateRecordModule({ showAssetsSelect: false })}
      />

      <SearchInput
        placeholder={t`features/assets/common/coin-list/index-0`}
        value={searchKey}
        onChange={setSearchKey}
      />

      <div className="content">
        <div className={`all ${!coinId && 'active'}`} onClick={() => onSelectCoin()}>
          {t`assets.withdraw.form.count.withdraw-all`}
        </div>

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
