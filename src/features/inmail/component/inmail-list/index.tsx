import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import Link from '@/components/link'
import { useMount } from 'ahooks'
import { useState } from 'react'
import { useInmailStore } from '@/store/inmail'
import { InmailMenuBodyDataType } from '@/typings/api/inmail'
import { formatDate, getDiff, getYearDiff, isToday } from '@/helper/date'
import styles from './index.module.css'

type InmailListType = {
  data: InmailMenuBodyDataType
}

const InmailList = ({ data }: InmailListType) => {
  const [imgSrc, setImgSrc] = useState<string>('')

  const { menuList } = useInmailStore()

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

  useMount(() => {
    const list = menuList.find(v => v.id === Number(data?.moduleId))
    list && setImgSrc(list.icon)
  })

  return (
    <div className={styles.scoped}>
      <div className="window-wrap-time">{formatTime(data?.eventTime)}</div>
      <div className="window-wrap-body">
        <div className="window-wrap-header">
          <Icon hasTheme name={imgSrc} className="wrap-header-image" />
          <div className="wrap-header-text">{data?.title}</div>
        </div>
        <div className="wrap-body-contain">{data?.content}</div>
        {data?.webLink ? (
          <Link href={data.webLink}>
            <div className="wrap-body-footer">
              <div className="footer-text">{t`features_trade_future_settings_margin_index_650`}</div>
              <Icon name="next_arrow" hasTheme />
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  )
}
export default InmailList
