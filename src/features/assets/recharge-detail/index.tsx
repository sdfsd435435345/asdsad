import { useEffect, useState } from 'react'
import { t } from '@lingui/macro'
import { usePageContext } from '@/hooks/use-page-context'
import { Toast } from 'react-vant'
import NavBar from '@/components/navbar'
import { useCopyToClipboard, useMount } from 'react-use'
import Icon from '@/components/icon'
import { getRecordsDetails, getV1VccGetRechargeListApiRequest } from '@/apis/assets/financial-records'
import { useAssetsStore } from '@/store/assets/spot'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { PerpetualMigrateTypeEnum, PerpetualOrderAcceptTypeEnum } from '@/constants/assets/futures'
import { useUnmount } from 'ahooks'
import classNames from 'classnames'
import CommonListEmpty from '@/components/common-list/list-empty'
import CommonList from '@/components/common-list/list'
import { requestWithLoading } from '@/helper/order'
import dayjs from 'dayjs'
import styles from './index.module.css'

const StatusInd = {
  0: t`features_assets_recharge_detail_index__l5obyd3qo`,
  1: t`assets.financial-record.search.success`,
  2: t`assets.financial-record.search.failure`,
}
export default function RechargeDetail() {
  const pageContext = usePageContext()
  const { assetsRecordDetail, updateRecordModule } = useAssetsStore().recordModule || {}
  const [loading, setLoading] = useState(false)
  const [finished, setFinished] = useState(false)
  const [recordList, setRecordList] = useState<any>([])
  const [pageNum, setPageNum] = useState(1)
  // 资产数据字典
  const { fetchAssetEnums } = useAssetsStore()
  useMount(fetchAssetEnums)

  const [state, copyToClipboard] = useCopyToClipboard()

  /**
   * 获取财务日志详情
   */
  const onLoadDate = async (id: string) => {
    setLoading(true)
    const res = await getRecordsDetails({ id })
    const { isOk, data, message = '' } = res || {}
    setLoading(false)

    if (!isOk) {
      Toast.info(message)
      return
    }

    updateRecordModule({
      assetsRecordDetail:
        data?.depositWithdraw || data?.fee || data?.perpetual || data?.commission || data?.c2cBillLogDetail || {},
    })
  }

  const cardId = pageContext.urlParsed.search?.id

  // useEffect(() => {
  //   // 根据记录 id 调接口
  //   const recordId = pageContext.urlParsed.search?.id
  //   recordId && onLoadDate(recordId)
  // }, [])

  // getV1VccGetRechargeListApiRequest
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

    const res = await getV1VccGetRechargeListApiRequest(params)
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

  function ListItem() {
    return (
      <div className="row-wrap">
        {recordList?.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className={classNames('row', 'pb-6', {
                  'mt-4': index !== 0,
                  // 'pb-6': index !== list?.length - 1,
                  // 'divide': index !== list?.length - 1,
                })}
              >
                <div className="col">
                  <div className="title">{item.currency}</div>
                  <div className="value mt-2">{dayjs(item.createdByTime).format('YYYY-MM-DD HH:mm:ss')}</div>
                </div>
                <div className="col">
                  <div className="title">{Number(item.amount).toFixed(2)}</div>
                  <div className="value mt-2">{StatusInd[item.statusInd]}</div>
                </div>
              </div>
              {index !== recordList?.length - 1 ? <div className="divide"></div> : null}
            </>
          )
        })}
      </div>
    )
  }

  return (
    <div className={styles.scoped}>
      <NavBar title={t`features_assets_recharge_detail_index_csqodcqxdq`} />

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
