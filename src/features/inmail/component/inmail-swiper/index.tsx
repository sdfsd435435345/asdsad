import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { SwipeCell } from 'react-vant'
import { useMount } from 'ahooks'
import { useState } from 'react'
import { useInmailStore } from '@/store/inmail'
import LazyImage from '@/components/lazy-image'
import { usePageContext } from '@/hooks/use-page-context'
import { InmailMenuBodyDataType } from '@/typings/api/inmail'
import { formatDate, getDiff, getYearDiff } from '@/helper/date'
import styles from './index.module.css'

type InmailSwiperType = {
  data: InmailMenuBodyDataType
  onDelSwiper: (v) => void
}

export enum InmailString {
  one = '1',
  two = '2',
  three = '3',
  four = '4',
}
export enum InmailNum {
  one = 1,
  two = 2,
  three = 3,
  four = 4,
  seven = 7,
}

export enum SubscribeSource {
  Spot = 'spot',
  Perpetual = 'perpetual',
}

const InmailSwiper = ({ data, onDelSwiper }: InmailSwiperType) => {
  const [inmailId, setInmailId] = useState<string>('')

  const { menuList } = useInmailStore()
  const pageContext = usePageContext()

  const getRouterId = () => {
    const id = pageContext?.routeParams?.id
    const router = pageContext?.urlParsed?.search
    const name = router?.name
    return { id, name }
  }

  /** 除去行情异动和价格订阅的图标* */
  const showIcon = v => {
    const id = String(v?.moduleId)
    /** 单独对合约预警的处理* */
    if (id === InmailString.three) {
      /** 强平预警'liquidateWarning',强平通知'liquidateNotice',交割通知'settlementNotice'* */
      if (v.eventType === 'liquidateWarning') {
        return 'liquidate_alert'
      } else if (v.eventType === 'liquidateNotice' || v.eventType === 'settlementNotice') {
        return 'announcement_news'
      } else {
        return 'system_notification'
      }
    }
    const iconList = menuList?.find(item => item.id === Number(id))
    return iconList?.collapseIcon || ''
  }

  /** 不同模块涨跌* */
  const moduleDownUp = v => {
    const { id } = getRouterId()
    let iconType = ''
    if (v) {
      if (v?.moduleId === InmailNum.two) {
        iconType = v.extras?.type === InmailNum.one || v.extras?.type === InmailNum.three ? 'rise' : 'fall'
      } else if (id === InmailString.one) {
        iconType = v.icon
      }
    }
    return iconType
  }

  /** 涨跌幅文字* */
  const downUpText = v => {
    if (v === InmailNum.one) {
      return t`features_inmail_component_inmail_swiper_index_5101349`
    } else if (v === InmailNum.two) {
      return t`features_inmail_component_inmail_swiper_index_5101350`
    } else if (v === InmailNum.three) {
      return t`features_inmail_component_inmail_swiper_index_5101351`
    } else {
      return t`features_inmail_component_inmail_swiper_index_5101352`
    }
  }

  /** 显示的内容* */
  const showContent = v => {
    const { id } = getRouterId()
    let text = ''
    if (v?.moduleId === InmailNum.two) {
      return (text = `${v.extras?.baseSymbolName}${data?.subscribeSource === SubscribeSource.Spot ? '/' : ''}${
        v.extras?.quoteSymbolName
      }`)
    }
    return (text = id === InmailString.one ? v.describe : v.content || '')
  }

  /** 处理 icon 图标 * */
  const handleIcon = v => {
    const { id } = getRouterId()
    if (id === InmailString.one) {
      return <LazyImage src={v.icon} className="wrap-header-image" />
    } else if (v?.moduleId === InmailNum.two) {
      return <Icon name={moduleDownUp(v)} className="wrap-header-image" />
    } else {
      return (
        <Icon
          name={showIcon(v) as string}
          className="wrap-header-image"
          hasTheme={v.eventType !== 'liquidateWarning'}
        />
      )
    }
  }

  /** 删除单条消息* */
  const onDelChange = () => {
    onDelSwiper && onDelSwiper(data?.id)
  }

  /** 取消提醒* */
  const onReminderChange = () => {
    data?.subscribeSource === SubscribeSource.Spot
      ? link(`/inmail/all-reminder/1`)
      : link(`/inmail/all-reminder/2`)
  }

  /** 行情异动跳转* */
  const onInmailChange = () => {
    if (inmailId === InmailString.one) {
      data?.subscribeSource === SubscribeSource.Spot
        ? link(`/trade/${data?.symbolName}`)
        : link(`/futures/${data?.symbolName}`)
    }
  }

  /** 时间格式化* */
  const formatTime = time => {
    let showTime: any = ''
    if (!time) return showTime
    if (getDiff(time, 'day', 'YYYY-MM-DD')) {
      getYearDiff(time) ? (showTime = formatDate(time, 'YYYY-MM-DD')) : (showTime = formatDate(time, 'MM-DD HH:mm'))
    } else {
      showTime = formatDate(time, 'HH:mm')
    }
    return showTime
  }

  useMount(() => {
    const { id } = getRouterId()
    setInmailId(id)
  })

  return (
    <SwipeCell
      stopPropagation
      className="inmail-swiper"
      rightAction={
        <div className={`swiper-button-content`}>
          {inmailId === InmailString.two ? (
            <div onClick={onReminderChange} className="swiper-default-button">
              <span className="default-button-text">{t`features_inmail_component_inmail_swiper_index_5101310`}</span>
            </div>
          ) : null}
          <div onClick={onDelChange} className="swiper-danger-button">
            {t`common.delete`}
          </div>
        </div>
      }
      disabled={inmailId === InmailString.one}
    >
      <div className={styles.scoped} onClick={onInmailChange}>
        <div className="inmail-swiper-wrap">
          <div className="swiper-wrap-header">
            <div className="wrap-header-left">
              {handleIcon(data)}
              <div className="wrap-header-text">{data?.title}</div>
            </div>
            <div className="wrap-header-right">
              {inmailId === InmailString.one ? formatTime(data.time) : formatTime(data.eventTime)}
            </div>
          </div>
          <div className="swiper-wrap-body">
            <div className="wrap-body-first">{showContent(data)}</div>
            {inmailId === InmailString.two ? (
              <>
                <div
                  className={`wrap-body-second ${
                    data.extras?.type === InmailNum.one || data.extras?.type === InmailNum.three
                      ? 'rise-color'
                      : 'fall-color'
                  }`}
                >
                  {downUpText(data.extras?.type)}
                </div>
                <div
                  className={`wrap-body-three ${
                    data.extras?.type === InmailNum.one || data.extras?.type === InmailNum.three
                      ? 'rise-bg-color'
                      : 'fall-bg-color'
                  }`}
                >
                  {data.extras?.type === InmailNum.three || data.extras?.type === InmailNum.four
                    ? `${data.extras?.value}%`
                    : data.extras?.value}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </SwipeCell>
  )
}

export default InmailSwiper
