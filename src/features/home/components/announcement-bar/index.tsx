import { queryTradeNotifications } from '@/apis/trade'
import Icon from '@/components/icon'
import { ITradeNotification } from '@/typings/api/trade'
import { link } from '@/helper/link'
import { Swiper } from 'react-vant'
import { useEffect, useState } from 'react'
import { navigate } from 'vite-plugin-ssr/client/router'
import styles from './index.module.css'

function AnnouncementBar() {
  const [notices, setnotices] = useState<ITradeNotification[]>([])
  useEffect(() => {
    queryTradeNotifications({
      operateType: 1,
      symbol: '',
      coindIdList: [],
    }).then(res => {
      setnotices(res?.data?.lampList || [])
    })
  }, [])

  return (
    <div className={styles.scoped}>
      <Icon name="home_notice" hasTheme />
      {notices.length > 0 && (
        <Swiper vertical touchable={false} autoplay={notices.length > 0 ? 5000 : false}>
          {notices.map(notice => (
            <Swiper.Item
              key={notice.id}
              className="truncate"
              onClick={() => link(`/announcement/article/${notice.id}?subMenuId=${notice.parentId}`)}
            >
              {notice.name}
            </Swiper.Item>
          ))}
        </Swiper>
      )}
      <Icon onClick={() => navigate('/announcement')} name="home_announcement" hasTheme />
    </div>
  )
}

export default AnnouncementBar
