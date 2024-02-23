import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { formatDate } from '@/helper/date'
import { useCreation } from 'ahooks'
import { useState, useRef, useEffect } from 'react'
import NoDataImage from '@/components/no-data-image'
import CommonList from '@/components/common-list/list'
import { ReminderPageType } from '@/typings/api/inmail'
import { InmailNum } from '@/features/inmail/component/inmail-swiper'
import {
  getAllTradePairReminder,
  delTradePairReminder,
  getV1PerpetualTradePairPriceNoticeDeleteApiRequest,
  getV1PerpetualTradePairPriceNoticeAllApiRequest,
} from '@/apis/inmail'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { usePageContext } from '@/hooks/use-page-context'
import { Tabs } from 'react-vant'
import styles from './index.module.css'

const SourceMap = {
  quote: 0,
  futures: 1,
}

const AllReminder = () => {
  const type = usePageContext()?.routeParams?.type
  const [page, setPage] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [finished, setFinished] = useState<boolean>(false)
  const [reminderData, setReminderData] = useState<Array<ReminderPageType>>([])
  const [currentTab, setCurrentTab] = useState<number>(SourceMap[type])

  const size = useRef<number>(10)

  /** 下拉刷新* */
  const onRefreshing = async () => {
    setPage(0)
    setFinished(false)
    setReminderData([])
  }

  /** 上拉加载更多* */
  const onLoadMore = async () => {
    setFinished(true)
    !finished && setPage(page + 1)
  }

  const getReminderData = async (tabChange?) => {
    const params = {
      pageNum: page,
      pageSize: size.current,
    }
    setLoading(true)
    const res =
      currentTab === SourceMap.quote
        ? await getAllTradePairReminder(params)
        : await getV1PerpetualTradePairPriceNoticeAllApiRequest(params as any)
    setLoading(false)
    if (!res.isOk && !res.data) return
    if (!res.data.list?.length) {
      if (tabChange) {
        setReminderData([])
      }
      return setFinished(true)
    }
    const arr = tabChange ? [...res.data.list] : [...reminderData, ...res.data.list]
    setFinished(arr?.length >= res.data.total)
    arr && setReminderData(arr)
  }

  /** 币对提醒数据文字格式化* */
  const reminderDataText = v => {
    if (v.type === InmailNum.one) {
      return t({
        id: 'features_inmail_reminder_page_index_5101344',
        values: { 0: v.value },
      })
    } else if (v.type === InmailNum.two) {
      return t({
        id: 'features_inmail_reminder_page_index_5101345',
        values: { 0: v.value },
      })
    } else if (v.type === InmailNum.three) {
      return t({
        id: 'features_inmail_reminder_page_index_5101346',
        values: { 0: v.value },
      })
    } else if (v.type === InmailNum.four) {
      return t({
        id: 'features_inmail_reminder_page_index_5101347',
        values: { 0: v.value },
      })
    }
  }

  /** 删除提醒* */
  const onDelChange = async v => {
    setLoading(true)

    currentTab === SourceMap.quote
      ? await delTradePairReminder({ id: v.id })
      : await getV1PerpetualTradePairPriceNoticeDeleteApiRequest({ id: v.id })
    // await delTradePairReminder({ id: v.id })
    const list = reminderData.filter(param => param.id !== v.id)
    setLoading(false)
    setReminderData(list)
  }

  useCreation(() => {
    page && getReminderData()
  }, [page])

  useCreation(() => {
    page && getReminderData(true)
  }, [currentTab])

  const tabList = [
    {
      title: t`constants_order_742`,
      id: 1,
    },
    {
      title: t`assets.layout.tabs.contract`,
      id: 2,
    },
  ]

  const onTabChange = name => {
    setCurrentTab(name)
  }

  return (
    <div className={styles.scoped}>
      <NavBar title={t`features_inmail_all_reminder_index_5101315`} left={<Icon name="back" hasTheme />} />

      <Tabs align="start" className="tab" defaultActive={currentTab} onChange={onTabChange}>
        {tabList?.map((item, index) => {
          return (
            <Tabs.TabPane key={index} title={item.title}>
              <CommonList
                refreshing
                finishedText={' '}
                finished={finished}
                onLoadMore={onLoadMore}
                onRefreshing={onRefreshing}
                listChildren={
                  reminderData?.length ? (
                    reminderData.map(v => {
                      return (
                        <div className="all-reminder-wrap" key={v.id}>
                          <div className="all-reminder-header">
                            <div className="reminder-header-contain">
                              <div className="header-contain-text">{v.symbolName}</div>
                              <div className="header-contain-tag">
                                <div className="header-contain-tag-text">
                                  {v.isRepeatNotice === 1
                                    ? t`features_inmail_reminder_page_index_5101348`
                                    : t`features_inmail_reminder_page_index_5101338`}
                                </div>
                              </div>
                            </div>
                            <Icon name="delete" hasTheme onClick={() => onDelChange(v)} />
                          </div>
                          <div className="all-reminder-footer">
                            <div className="reminder-footer-text">{reminderDataText(v)}</div>
                            <div className="reminder-footer-text">
                              {t`features_inmail_all_reminder_index_5101353` + formatDate(v.expireTime, 'YYYY-MM-DD')}
                            </div>
                          </div>
                        </div>
                      )
                    })
                  ) : loading ? null : (
                    <NoDataImage
                      footerText={t`features_inmail_all_reminder_index_wbkb5dhet_zpb9xgbq_qs`}
                      className="page-footer-img"
                    />
                  )
                }
              />
            </Tabs.TabPane>
          )
        })}
      </Tabs>

      <FullScreenLoading mask isShow={loading} className="fixed" />
    </div>
  )
}
export default AllReminder
