import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import Link from '@/components/link'
import { link } from '@/helper/link'
import NavBar from '@/components/navbar'
import { getIsLogin } from '@/helper/auth'
import { useMount, useCreation } from 'ahooks'
import { useState } from 'react'
import { useInmailStore } from '@/store/inmail'
import { InmailMessageEnum } from '@/constants/inmail'
import CommonList from '@/components/common-list/list'
import { formatDate, getDiff, getYearDiff, isToday } from '@/helper/date'
import { Badge, SwipeCell, Button, Dialog } from 'react-vant'
import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { InmailMenuListType, InmailMenuBodyDataType } from '@/typings/api/inmail'
import { getInmailType, getNewInmailModal, delModuleAllRead, setMessagesAllRead, getUnReadNum } from '@/apis/inmail'
import { isEmpty } from 'lodash'
import NoDataImage from '@/components/no-data-image'
import styles from './index.module.css'

type InmailModalType = {
  id: number
  visible: boolean
  onChangeCancel?: () => void
  onChangeConfirm?: (id: number) => void
}

const InmailModal = ({ id, visible, onChangeCancel, onChangeConfirm }: InmailModalType) => {
  return (
    <Dialog
      visible={visible}
      showCancelButton
      onCancel={() => {
        onChangeCancel && onChangeCancel()
      }}
      onConfirm={() => {
        onChangeConfirm && onChangeConfirm(id)
      }}
    >
      <div className="inmail-modal-del">
        <Icon name={'tips_icon'} className="modal-del-icon" />
        <div className="modal-del-text">{t`features_inmail_index_5101316`}</div>
      </div>
    </Dialog>
  )
}

const Inmail = () => {
  const [delId, setDelId] = useState<number>(-1)
  const [unReadNum, setUnReadNum] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  /** 系统通知，公告消息，最新活动，新币早知道* */
  const [inmailData, setInmailData] = useState<Array<InmailMenuBodyDataType>>([])
  /** 行情异动，价格订阅，合约预警* */
  const [tagInmailData, setTagInmailData] = useState<Array<InmailMenuListType>>([])

  const isLogin = getIsLogin()
  const { menuList, changeNum } = useInmailStore()

  const tagBox = [
    { id: InmailMessageEnum.market, name: t`features_message_index_5101225`, icon: 'msg_quotes_changes' },
    { id: InmailMessageEnum.price, name: t`features_message_index_5101226`, icon: 'msg_price_subscription' },
    { id: InmailMessageEnum.contract, name: t`features_message_index_5101227`, icon: 'msg_contract_alert' },
  ]

  /** 删除* */
  const onChangeDel = v => {
    setDelId(v.id)
    setVisible(true)
  }

  /** 关闭删除弹框* */
  const onCancel = () => {
    setVisible(false)
  }
  const onConfirm = id => {
    const newInmailData = inmailData.filter(v => v.id !== id)
    delModuleAllRead({ moduleId: id })
    setVisible(false)
    setInmailData(newInmailData)
  }

  /** 跳转* */
  const getInmailRouter = v => {
    link(`/inmail/message-window/${v?.id}?name=${v?.name}`)
  }

  /** 获取全部通知类型* */
  const getInmailTypeList = async () => {
    const res = await getInmailType({})
    if (!res.isOk && !res.data) {
      return setLoading(false)
    }
    let headerData: InmailMenuListType[] = []
    let bodyData: InmailMenuBodyDataType[] = []
    /** 分为头部三个和其他四个消息通知类型* */
    res.data.forEach(v => {
      const data = tagBox.find(item => item.id === v.id)
      if (data) {
        let list = { ...v, icon: data.icon, name: data.name }
        headerData.push(list)
      } else {
        const bodyList = menuList.find(params => params.id === v.id)
        let menuData = {
          ...v,
          icon: bodyList?.icon,
          collapseIcon: bodyList?.collapseIcon,
        }
        bodyData.push(menuData)
      }
    })
    setTagInmailData(headerData)
    /** 获取到底部四个有未读消息的通知类型后筛选继续获取最新一条未读消息* */
    if (bodyData?.length) {
      const moduleIds = bodyData.map(item => item.id)
      const unRes = await getNewInmailModal({ moduleIds })
      const unArr = unRes.data
      /** 将获取到的最新未读数据加入各自模块* */
      const newBodyData = bodyData.filter(v => {
        const unList = unArr?.find(item => v.id === item.moduleId)
        v.content = unList?.message?.content
        v.eventTime = unList?.message?.eventTime
        return unList?.message
      })
      setInmailData(newBodyData)
    }
    setLoading(false)
  }

  /** 点击滑动单元格模块* */
  const onChangeSwipeCell = (positon, data) => {
    positon === 'cell' && link(`/inmail/message-window/${data?.id}?name=${data?.name}`)
  }

  /** 获取全部消息类型未读数量* */
  const getMessagesUnReadNum = async () => {
    const res = await getUnReadNum({})
    if (!res.isOk && !res.data) return
    setUnReadNum(res.data.unReadNum)
  }

  /** 全部已读* */
  const onAllReadChange = async () => {
    if (!unReadNum) return
    setLoading(true)
    const res = await setMessagesAllRead({})
    if (!res.isOk && !res.data) {
      return setLoading(false)
    }
    isLogin && getInmailTypeList()
    isLogin && getMessagesUnReadNum()
  }

  /** 下拉刷新* */
  const onRefreshing = () => {
    if (isLogin) {
      setLoading(true)
      getInmailTypeList()
      getMessagesUnReadNum()
    }
  }

  /** 时间格式化* */
  const formatTime = time => {
    let showTime: any = ''
    if (!time) return showTime
    if (getDiff(time, 'day', 'YYYY-MM-DD')) {
      getYearDiff(time) ? (showTime = formatDate(time, 'YYYY-MM-DD')) : (showTime = formatDate(time, 'MM-DD'))
    } else {
      if (!isToday(time)) {
        return formatDate(time, 'MM-DD')
      }
      const disparityTime = getDiff(time, 'hour')
      // 相差 1 小时以内
      if (disparityTime) {
        return formatDate(time, 'HH:mm')
      } else {
        // 1 小时以内
        const currentMin = getDiff(time, 'minute')
        currentMin
          ? (showTime = currentMin + t`features_inmail_index_5101342`)
          : (showTime = t`features_inmail_index_5101343`)
      }
    }
    return showTime
  }

  useCreation(() => {
    isLogin && changeNum && getInmailTypeList()
    isLogin && changeNum && getMessagesUnReadNum()
  }, [changeNum])

  /** 初始获取数据* */
  useMount(() => {
    if (isLogin) {
      setLoading(true)
      getInmailTypeList()
      getMessagesUnReadNum()
    }
  })

  return (
    <div className={styles.scoped}>
      <NavBar
        left={<Icon name="back" hasTheme />}
        // right={
        //   <Link href="/inmail/push-settings">
        //     <div className="header-setting">{t`user.pageContent.title_12`}</div>
        //   </Link>
        // }
        title={`${t`features_message_index_5101228`}${unReadNum ? `(${unReadNum > 99 ? '99+' : unReadNum})` : ''}`}
      />
      {!isEmpty(tagInmailData) && (
        <>
          <div className="inmail-grid">
            <div className="inmail-grid-tag">
              <div className="grid-tag-button" onClick={onAllReadChange}>
                <Icon name="msg_all_readed" hasTheme className="tag-icon" />
                <span className="tag-text">{t`features_message_index_5101229`}</span>
              </div>
            </div>
            <div className="inmail-grid-bottom">
              {tagInmailData.map(v => {
                return (
                  <div className="grid-bottom-flex" key={v?.id} onClick={() => getInmailRouter(v)}>
                    <Badge content={v?.unReadNum} max={99} showZero={false}>
                      <Icon name={v?.icon as string} isRemoteUrl className="bottom-flex-icon" />
                    </Badge>
                    <span className="bottom-flex-text">{v?.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="inmail-grid-divider" />
        </>
      )}
      {isEmpty(inmailData) && <NoDataImage className="absolute left-1/2 -translate-x-1/2 top-0" />}
      <div className="inmail-swipecell">
        <CommonList
          refreshing
          finished
          finishedText={' '}
          onRefreshing={onRefreshing}
          listChildren={inmailData.map(item => {
            return (
              <SwipeCell
                key={item.id}
                rightAction={
                  <Button square type="danger" onClick={() => onChangeDel(item)} className="inmail-swipecell-button">
                    {t`common.delete`}
                  </Button>
                }
                stopPropagation
                onClick={v => onChangeSwipeCell(v, item)}
              >
                <div className="inmail-swipecell-box">
                  <div className="inmail-swipecell-content">
                    <Badge content={item?.unReadNum} max={99} showZero={false}>
                      <Icon name={item?.collapseIcon as string} className="swipecell-box-icon" />
                    </Badge>
                    <div className="swipecell-box-content">
                      <div className="box-content-header">
                        <div className="content-header-left">
                          <span className="header-left-text">{item?.name}</span>
                          <div className="header-left-tag">
                            <span className="header-left-tag-text">{t`features_message_index_5101231`}</span>
                          </div>
                        </div>
                        <div className="content-header-time">{formatTime(item?.eventTime)}</div>
                      </div>
                      <div className="box-content-footer">{item?.content}</div>
                    </div>
                  </div>
                </div>
              </SwipeCell>
            )
          })}
        />
      </div>
      <FullScreenLoading mask isShow={loading} className="fixed" />
      <InmailModal id={delId} visible={visible} onChangeCancel={onCancel} onChangeConfirm={onConfirm} />
    </div>
  )
}

export default Inmail
