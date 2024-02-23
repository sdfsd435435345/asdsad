import { t } from '@lingui/macro'
import NavBar from '@/components/navbar'
import { getIsLogin } from '@/helper/auth'
import { useState, useRef } from 'react'
import { useMount, useCreation } from 'ahooks'
import { InmailMessageEnum } from '@/constants/inmail'
import CommonList from '@/components/common-list/list'
import { usePageContext } from '@/hooks/use-page-context'
import { InmailMenuBodyDataType } from '@/typings/api/inmail'
import InmailList from '@/features/inmail/component/inmail-list'
import InmailSwiper from '@/features/inmail/component/inmail-swiper'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { getPageMessage, getMarketActivities, setModuleAllRead, delModuleRead } from '@/apis/inmail'
import { Tabs } from 'react-vant'
// import { KLineChartType } from '@nbit/chart-utils'
import styles from './index.module.css'

type PushSettingsType = {
  id: number
  name: string
}
enum InmailString {
  one = '1',
  two = '2',
  three = '3',
  four = '4',
}

const SourceMap = {
  0: 'spot',
  1: 'perpetual',
}

const MessageWindow = () => {
  const [page, setPage] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [finished, setFinished] = useState<boolean>(false)
  const [navMessage, setNavMessage] = useState<PushSettingsType>()
  const [messageData, setMessageData] = useState<Array<InmailMenuBodyDataType>>([])
  const [currentTab, setCurrentTab] = useState<number>(0)

  const size = useRef<number>(10)

  const isLogin = getIsLogin()
  const pageContext = usePageContext()

  const getRouterId = () => {
    const id = pageContext?.routeParams?.id
    const router = pageContext?.urlParsed?.search
    const name = router?.name
    return { id, name }
  }

  /** 下拉刷新* */
  const onRefreshing = async () => {
    setPage(0)
    setFinished(false)
    setMessageData([])
  }

  /** 上拉加载更多* */
  const onLoadMore = async () => {
    setFinished(true)
    !finished && setPage(page + 1)
  }

  const getMessageList = () => {
    const { id, name } = getRouterId()
    setNavMessage({ id: Number(id), name })
  }

  const getInmailList = async (id: string, pageNum: number, tabChange?) => {
    const params: {
      moduleId: string
      pageNum: number
      pageSize: number
      subscribeSource?: string
    } = {
      moduleId: id,
      pageNum,
      pageSize: size.current,
    }
    setLoading(true)
    if (id === InmailString.two) {
      params.subscribeSource = SourceMap[currentTab]
    }
    const config = id === InmailString.one ? getMarketActivities : getPageMessage
    const res = await config(params)
    setLoading(false)
    if (!res.isOk && !res.data) return
    if (!res.data.list?.length) {
      if (tabChange) {
        setMessageData([])
      }
      return setFinished(true)
    }
    const arr = tabChange ? [...res.data.list] : [...messageData, ...res.data.list]
    setFinished(arr?.length >= res.data.total)
    arr && setMessageData(arr)
  }

  const setAllRead = async () => {
    const { id } = await getRouterId()
    if (id === InmailString.one) return
    setModuleAllRead({ moduleId: id })
  }

  /** 滑动单元格删除* */
  const onDelSwiper = async v => {
    await delModuleRead({ id: v })
    const data = messageData.filter(item => item.id !== v)
    setMessageData(data)
  }

  useMount(() => {
    isLogin && getMessageList()
    /** 进入后将所有消息设为已读* */
    isLogin && setAllRead()
  })

  useCreation(() => {
    const { id } = getRouterId()
    isLogin && page && getInmailList(id, page)
  }, [page])

  useCreation(() => {
    const { id } = getRouterId()
    isLogin && page && getInmailList(id, page, true)
  }, [currentTab])

  const { id } = getRouterId()

  const onTabChange = name => {
    setCurrentTab(name)
  }

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

  return (
    <div className={styles['message-window']}>
      <NavBar title={navMessage?.name} />
      {id === InmailString.two ? (
        <Tabs align="start" className="tab" defaultActive={currentTab} onChange={onTabChange}>
          {tabList?.map((item, index) => {
            return (
              <Tabs.TabPane key={index} title={item.title}>
                <div
                  className={`message-window-wrap ${
                    navMessage?.id && navMessage?.id >= InmailMessageEnum.information ? 'wrap-background' : ''
                  }`}
                >
                  <CommonList
                    refreshing
                    finished={finished}
                    onLoadMore={onLoadMore}
                    onRefreshing={onRefreshing}
                    listChildren={
                      navMessage?.id &&
                      messageData?.map(v => {
                        return <InmailSwiper key={v?.id} data={v} onDelSwiper={onDelSwiper} />
                      })
                    }
                  />
                </div>
              </Tabs.TabPane>
            )
          })}
        </Tabs>
      ) : null}
      {id !== InmailString.two && (
        <div
          className={`message-window-wrap ${
            navMessage?.id && navMessage?.id >= InmailMessageEnum.information ? 'wrap-background' : ''
          }`}
        >
          <CommonList
            refreshing
            finished={finished}
            onLoadMore={onLoadMore}
            onRefreshing={onRefreshing}
            listChildren={
              navMessage?.id &&
              messageData?.map(v => {
                return navMessage?.id >= InmailMessageEnum.information ? (
                  <InmailList key={v?.id} data={v} />
                ) : (
                  <InmailSwiper key={v?.id} data={v} onDelSwiper={onDelSwiper} />
                )
              })
            }
          />
        </div>
      )}

      <FullScreenLoading mask isShow={loading} className="fixed" />
    </div>
  )
}
export default MessageWindow
