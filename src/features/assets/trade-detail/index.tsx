import { useEffect, useState } from 'react'
import { t } from '@lingui/macro'
import { usePageContext } from '@/hooks/use-page-context'
import { Toast } from 'react-vant'
import NavBar from '@/components/navbar'
import {
  AssetsRecordTypeEnum,
  RecordC2CTypeList,
  RecordExpenseDetailsList,
  RecordFusionTypeList,
  RecordTransactionDetailsList,
} from '@/constants/assets/common'
import { useCopyToClipboard, useMount } from 'react-use'
import Icon from '@/components/icon'
import { RecordDetailsInfo } from '@/features/assets/financial-record/record-detail/record-details-info'
import { TransactionDetails } from '@/features/assets/financial-record/record-detail/transaction-details'
import { getRecordsDetails, getV1VccGetTradesApiRequest } from '@/apis/assets/financial-records'
import { useAssetsStore } from '@/store/assets/spot'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { PerpetualMigrateTypeEnum, PerpetualOrderAcceptTypeEnum } from '@/constants/assets/futures'
import { useUnmount } from 'ahooks'
import classNames from 'classnames'
import CommonList from '@/components/common-list/list'
import { requestWithLoading } from '@/helper/order'
import { getCodeDetailList } from '@/apis/common'
import styles from './index.module.css'

export default function TradeDetail() {
  const pageContext = usePageContext()
  const [finished, setFinished] = useState(false)
  const [recordList, setRecordList] = useState<any>([])
  const [pageNum, setPageNum] = useState(1)
  const [vccRespCodeList, setVccRespCodeList] = useState<any>([])
  const [vccTransTypeList, setVccTransTypeList] = useState<any>([])
  const { assetsRecordDetail, updateRecordModule } = useAssetsStore().recordModule || {}
  const [loading, setLoading] = useState(false)
  // 资产数据字典
  const { fetchAssetEnums } = useAssetsStore()
  useMount(fetchAssetEnums)

  const cardId = pageContext.urlParsed.search?.id

  console.log('cardId', cardId)

  useUnmount(() => {
    updateRecordModule({
      assetsRecordDetail: {},
    })
  })

  /**
   * 获取财务日志列表
   */
  const onLoadList = async (isRefresh?: boolean) => {
    let params: any = {
      page: isRefresh ? 1 : pageNum,
      pageSize: 20,
      cardId,
    }

    const res = await getV1VccGetTradesApiRequest(params)
    const { isOk, data } = res || {}
    if (!isOk || !data) {
      setFinished(true)
      return
    }

    const nList = isRefresh ? data.list : [...recordList, ...data.list]
    setRecordList(nList)
    setFinished(nList.length >= data?.totalCount)
    setPageNum(isRefresh ? 1 : pageNum + 1)
  }

  const getCodeList = async () => {
    const res = await getCodeDetailList({ codeVal: 'vccTransType' })
    const res1 = await getCodeDetailList({ codeVal: 'vccRespCode' })
    if (!res.isOk || !res1.isOk) {
      return
    }

    setVccRespCodeList(res1.data)
    setVccTransTypeList(res.data)
    console.log(1)
    //
  }

  useEffect(() => {
    requestWithLoading(onLoadList(true), 0)
    getCodeList()
  }, [])

  const findValue = (list, value) => {
    return list?.filter(item => {
      return item.codeVal === value
    })?.[0]?.codeKey
  }

  function ListItem() {
    return (
      <div className="row-wrap">
        {recordList?.map((item, index) => {
          return (
            <div key={index}>
              <div className={classNames('row')}>
                <div className="title">{t`features_assets_trade_detail_index_fvfznym80h`}</div>
                <div className="value">{item.recordNo}</div>
              </div>
              <div className={classNames('row', 'mt-4')}>
                <div className="title">{t`features_assets_trade_detail_index_o6cvzttojy`}</div>
                <div className="value">{item.occurTime}</div>
              </div>
              <div className={classNames('row', 'mt-4')}>
                <div className="title">{t`features_assets_trade_detail_index_ctw8nq_dm0`}</div>
                <div className="value">{item.merchantName}</div>
              </div>
              <div className={classNames('row', 'mt-4')}>
                <div className="title">{t`features_assets_trade_detail_index_b3yxr6hzml`}</div>
                <div className="value">{findValue(vccTransTypeList, item.transType)}</div>
              </div>
              <div className={classNames('row', 'mt-4')}>
                <div className="title">{t`features_assets_trade_detail_index_rurv8hyfqc`}</div>
                <div className="value">
                  {item.transCurrencyAmt} {item.transCurrency}
                </div>
              </div>
              <div className={classNames('row', 'mt-4')}>
                <div className="title">{t`features_assets_trade_detail_index_7gpu0vovx2`}</div>
                <div className="value">
                  {item.localCurrencyAmt} {item.localCurrency}
                </div>
              </div>
              <div className={classNames('row', 'mt-4')}>
                <div className="title">{t`features_assets_trade_detail_index_wuyxckyndz`}</div>
                <div className="value">{findValue(vccRespCodeList, item.respCode)}</div>
              </div>
              {index !== recordList?.length - 1 ? <div className="divide"></div> : null}
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <div className={styles.scoped}>
      <NavBar title={t`features_assets_trade_detail_index_lkvgw3iagt`} />

      <CommonList
        refreshing
        finished={finished}
        onRefreshing={() => requestWithLoading(onLoadList(true), 0)}
        onLoadMore={onLoadList}
        listChildren={<ListItem />}
        showEmpty={recordList.length === 0}
      />

      <FullScreenLoading isShow={loading} mask />
    </div>
  )
}
