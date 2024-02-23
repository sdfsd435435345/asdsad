import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { NoticeBar, Swiper, SwiperInstance } from 'react-vant'
import classNames from 'classnames'
import { useRef, useState } from 'react'
import styles from './index.module.css'

type INotificationProps = {
  notifications: {
    id?: any
    name?: string
  }[]
  onClose: () => void
}

function Notification({ notifications, onClose }: INotificationProps) {
  const toDetail = (id: string) => {
    link(`/announcement/article/${id}`, {
      target: true,
    })
  }
  const swiperRef = useRef<SwiperInstance>(null)
  const [swipeIndex, setSwipeIndex] = useState(0)
  const onEnd = (index: number) => {
    // 手动触发
    if (index !== swipeIndex) {
      return
    }
    swiperRef.current?.swipeNext()
    setSwipeIndex(swipeIndex === notifications.length - 1 ? 0 : swipeIndex + 1)
  }
  if (notifications.length === 0) {
    return <></>
  }

  return (
    <div className={styles['notification-wrapper']}>
      <Icon name="msg" />
      <Swiper
        ref={swiperRef}
        style={{
          height: 32,
        }}
        onChange={setSwipeIndex}
        autoplay={false}
        indicator={false}
        vertical
        className="notice-swipe"
      >
        {notifications.map((item, index) => {
          return (
            <Swiper.Item onClick={() => toDetail(item.id)} className="swipe-notification-item" key={item.id}>
              <NoticeBar
                className={classNames({
                  'opacity-0': index !== swipeIndex,
                })}
                onReplay={() => onEnd(index)}
                scrollable={index === swipeIndex}
                rightIcon={null}
                leftIcon={null}
              >
                <span className="notification-title">{item.name}</span>
              </NoticeBar>
            </Swiper.Item>
          )
        })}
      </Swiper>
      <Icon onClick={onClose} name="prompt_close" />
    </div>
  )
}

export default Notification
