import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { t } from '@lingui/macro'
import { useRef, useEffect, useState } from 'react'
import { Grid, SwipeCell, Button } from 'react-vant'
import styles from './index.module.css'

const MessageHome = () => {
  const swipeCell = useRef<HTMLDivElement>(null)
  const [cellWidth, setCellWidth] = useState<number>(171)
  const [cellItemWidth, setCellItemWidth] = useState<number>(86)

  useEffect(() => {
    if (swipeCell?.current) {
      const swiper = swipeCell.current
      setCellWidth(swiper.offsetWidth - 56)
      setCellItemWidth(swiper.offsetWidth - 214)
    }
  }, [])

  return (
    <div className={styles.scoped}>
      <NavBar
        title={t`features_message_index_5101228`}
        left={<Icon name="back" hasTheme />}
        right={<div>{t`user.pageContent.title_12`}</div>}
      />
      <div className="message-header">
        <div className="header-content">
          <div className="header-clean">
            <Icon name="msg_all_readed" hasTheme className="header-read-icon" />
            <span className="header-read-text">{t`features_message_index_5101229`}</span>
          </div>
        </div>
        <div className="header-card">
          <Grid border={false} columnNum={3}>
            <Grid.Item
              text={t`features_message_index_5101225`}
              badge={{ content: '99+' }}
              icon={<Icon name="quotes" hasTheme />}
            />
            <Grid.Item
              text={t`features_message_index_5101226`}
              badge={{ content: '99+' }}
              icon={<Icon name="quotes" hasTheme />}
            />
            <Grid.Item
              text={t`features_message_index_5101227`}
              badge={{ content: '99+' }}
              icon={<Icon name="quotes" hasTheme />}
            />
          </Grid>
        </div>
      </div>
      <div className="message-divider" />
      <div className="message-body">
        <SwipeCell
          rightAction={
            <Button style={{ height: '100%' }} square type="danger">
              <span className="swipe-del">{t`common.delete`}</span>
            </Button>
          }
        >
          <div className="body-swipe-cell" ref={swipeCell}>
            <div className="swipe-cell-left" />
            <div className="swipe-cell-right">
              <div className="cell-right-first">
                <div className="cell-title">
                  <div className="cell-title-text" style={{ maxWidth: cellItemWidth }}>
                    {t`features_message_index_5101230`}
                  </div>
                  <div className="cell-title-tag">{t`features_message_index_5101231`}</div>
                </div>
                <div className="cell-time"></div>
              </div>
              <div className="cell-right-second" style={{ width: cellWidth }}></div>
            </div>
          </div>
        </SwipeCell>
      </div>
    </div>
  )
}
export default MessageHome
