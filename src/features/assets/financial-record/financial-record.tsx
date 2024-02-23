/**
 * 资产 - 财务记录
 */
import { t } from '@lingui/macro'
import { useState, useEffect } from 'react'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { Tabs } from 'react-vant'
import {
  AssetsRouteEnum,
  FinancialRecordRouteEnum,
  setFinancialRecordLogType,
  setFinancialRecordRoute,
} from '@/constants/assets'
import { useCommonStore } from '@/store/common'
import { RecordScreenModal } from '@/features/assets/financial-record/record-screen-modal'
import { useAssetsStore } from '@/store/assets/spot'
import { Record } from '@/features/assets/financial-record/record-list/record'
import { usePageContext } from '@/hooks/use-page-context'
import { AssetsSelection } from '@/features/assets/financial-record/assets-selection'
import { useMount, useUnmount, useUpdateEffect } from 'ahooks'
import { AssetsRecordTypeEnum } from '@/constants/assets/common'
import { postRecordsList } from '@/apis/assets/financial-records'
import { AssetsRecordsListReq, RecordsListResp } from '@/typings/api/assets/assets'
import { link } from '@/helper/link'
import { getFuturesCurrencySettings } from '@/helper/assets/futures'
import { requestWithLoading } from '@/helper/order'
import { getAssetsHistoryPageRoutePath } from '@/helper/route'
import styles from '../assets-layout.module.css'
import { TypeSelectModal } from '../common/type-select-modal'

export function FinancialRecordLayout() {
  // 资产数据字典
  const { fetchAssetEnums } = useAssetsStore()
  useMount(fetchAssetEnums)

  const pageContext = usePageContext()
  const { activeTab, showAssetsSelect, updateRecordModule, updateAssetsRecord, assetsRecord } =
    useAssetsStore().recordModule
  const [screenVisible, setScreenVisible] = useState(false)
  const [pageNum, setPageNum] = useState(1)
  const [finished, setFinished] = useState(false)
  const [recordList, setRecordList] = useState<RecordsListResp[]>([])
  const [showType, setShowType] = useState(false)
  const { assetsEnums } = useAssetsStore()
  const [typeList, setTypeList] = useState<any>([])
  const { isFusionMode } = useCommonStore()
  const logType = pageContext.urlParsed.search?.logType

  const main = {
    name: FinancialRecordRouteEnum.main,
    title: t`components/footer/index-2`,
  }
  const c2c = {
    name: FinancialRecordRouteEnum.c2c,
    title: 'C2C',
  }
  const contract = {
    name: FinancialRecordRouteEnum.contract,
    title: t`assets.financial-record.tabs.futures`,
  }
  const fee = {
    name: FinancialRecordRouteEnum.fee,
    title: t`features_assets_financial_record_financial_record_592`,
  }
  const commission = {
    name: FinancialRecordRouteEnum.commission,
    title: t`features_assets_financial_record_financial_record_5101499`,
  }
  const other = {
    name: FinancialRecordRouteEnum.other,
    title: t`assets.financial-record.tabs.other`,
  }
  // TODO
  // {
  //   name: FinancialRecordRouteEnum.derivative,
  //   title: t`assets.financial-record.tabs.derivative`,
  // },
  // tabs 展示数据
  const tabsTypeData = isFusionMode ? [main, contract, fee, other] : [main, c2c, contract, fee, commission, other]

  // 不同 tabs 筛选条件不一样
  const handleTabClick = (name: FinancialRecordRouteEnum) => {
    link(getAssetsHistoryPageRoutePath(setFinancialRecordLogType(name)), { overwriteLastHistoryEntry: true })
    updateRecordModule({ activeTab: name })
  }

  /**
   * 获取财务日志列表
   */
  const onLoadList = async (isRefresh?: boolean) => {
    const { startDate, endDate, coinId, type, status } = assetsRecord[activeTab] || {}

    let params: AssetsRecordsListReq = {
      startDate,
      endDate,
      coinId,
      status,
      pageNum: isRefresh ? 1 : pageNum,
      pageSize: 20,
      type: assetsEnums.walletFinancialRecordTypeEnum.enums.map(item => item.value as number),
    }
    if (!params.logType || params.logType === AssetsRouteEnum.overview) delete params.logType
    if (!coinId || coinId === '') delete params.coinId
    if (type && type !== AssetsRecordTypeEnum.all) params.type = [Number(type)]
    if (!status || status?.length === 0) delete params.status

    const res = await postRecordsList(params)
    const { isOk, data } = res || {}
    if (!isOk || !data) {
      setFinished(true)
      return
    }

    const nList = isRefresh ? data.list : [...recordList, ...data.list]
    setRecordList(nList)
    setFinished(nList.length >= data?.total)
    setPageNum(isRefresh ? 1 : pageNum + 1)
  }

  /**
   * 返回资产页面
   * 重置资产和类型选择数据
   */
  const onBack = () => {
    const newData = { coinId: '', coinName: '', type: AssetsRecordTypeEnum.all }
    const newRecord = { ...assetsRecord }
    for (const key in newRecord) {
      if (Object.prototype.hasOwnProperty.call(newRecord, key)) {
        newRecord[key] = { ...newRecord[key], ...newData }
      }
    }

    updateAssetsRecord(newRecord)
    history.back()
  }

  useEffect(() => {
    logType && updateRecordModule({ activeTab: setFinancialRecordRoute(Number(logType)) })
    const type = pageContext.urlParsed.search?.type
    if (type) {
      const newTab = setFinancialRecordRoute(Number(logType)) || activeTab
      updateAssetsRecord({ ...assetsRecord[newTab], type: Number(type) }, newTab)
    }

    getFuturesCurrencySettings()
  }, [])

  useUpdateEffect(() => {
    switch (activeTab) {
      case FinancialRecordRouteEnum.main:
        // 总览
        let newTypeList = assetsEnums.walletFinancialRecordTypeEnum.enums || []
        if (isFusionMode) newTypeList = newTypeList.filter(item => item.value !== AssetsRecordTypeEnum.spotCompensate)
        setTypeList(newTypeList)
        break
      case FinancialRecordRouteEnum.contract:
        setTypeList(assetsEnums.financialRecordTypePerpetualList.enums)
        break
      case FinancialRecordRouteEnum.fee:
        setTypeList(assetsEnums.financialRecordTypeFeeList.enums)
        break
      case FinancialRecordRouteEnum.commission:
        setTypeList(assetsEnums.financialRecordTypeCommissionList.enums)
        break
      case FinancialRecordRouteEnum.c2c:
        setTypeList(assetsEnums.financialRecordTypeC2CList.enums)
        break
      default:
        setTypeList(assetsEnums.financialRecordTypeEnum.enums)
        break
    }
  }, [assetsEnums, activeTab])

  useUpdateEffect(() => {
    requestWithLoading(onLoadList(true), 0)
  }, [assetsRecord, logType, assetsEnums.walletFinancialRecordTypeEnum.enums])

  useUnmount(() => {
    setRecordList([])
  })

  return (
    <div className={styles['financial-record-wrapper']}>
      <NavBar
        title={t`assets.financial-record.title`}
        right={<Icon name="asset_record_filter" hasTheme className="filter-icon" />}
        onClickRight={() => setScreenVisible(true)}
        onClickLeft={onBack}
      />
      {/* <Tabs align="start" active={activeTab} onChange={(name: any) => handleTabClick(name)}>
        {tabsTypeData.map(({ title, name }) => (
          <Tabs.TabPane name={name} key={name} title={title}> */}
      <Record
        recordList={recordList}
        onLoadList={onLoadList}
        finished={finished}
        onRefreshing={() => requestWithLoading(onLoadList(true), 0)}
        onShowType={setShowType}
      />
      {/* </Tabs.TabPane>
        ))}
      </Tabs> */}

      {screenVisible && (
        <RecordScreenModal
          form={assetsRecord[activeTab]}
          visible={screenVisible}
          onClose={() => {
            setScreenVisible(false)
          }}
          onScreen={params => {
            const assetsData = { ...assetsRecord[activeTab], ...params }
            updateAssetsRecord(assetsData, activeTab)
            setScreenVisible(false)
          }}
        />
      )}

      {showAssetsSelect && (
        <AssetsSelection visible={showAssetsSelect} onSelect={() => updateRecordModule({ showAssetsSelect: false })} />
      )}
      {showType && (
        <TypeSelectModal
          type={assetsRecord[activeTab]?.type || ''}
          typeList={typeList}
          enums={assetsEnums.financialRecordTypeEnum.enums}
          visible={showType}
          onClose={() => setShowType(false)}
          onScreen={(val: string | number) => {
            updateAssetsRecord({ ...assetsRecord[activeTab], type: val }, activeTab)
            setShowType(false)
          }}
        />
      )}
    </div>
  )
}
