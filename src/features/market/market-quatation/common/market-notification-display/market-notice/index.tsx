import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { t } from '@lingui/macro'
import { Button, NoticeBar, Popup } from 'react-vant'
import { useState } from 'react'
import { useCommonStore } from '@/store/common'
import { useMarketListStore } from '@/store/market/market-list'
import styles from './index.module.css'

function MarketNotice() {
  const store = useMarketListStore()
  const { isFusionMode } = useCommonStore()
  const [visible, setvisible] = useState(false)
  return (
    <span className={styles.scoped}>
      {!isFusionMode && (
        <NoticeBar
          className="h-9"
          wrapable
          text={
            <span className="flex flex-row items-center justify-between">
              {t`features_market_market_quatation_common_market_notification_display_index_510102`}
              <Button
                className="notice-button"
                type="primary"
                onClick={() => {
                  link('/stay-tuned')
                }}
              >
                {t`user.account_security.google_01`}
              </Button>
            </span>
          }
          leftIcon={<Icon name="msg" className="info-icon" />}
          rightIcon={<Icon name="prompt_close" className="ml-2 close-icon" onClick={() => setvisible(true)} />}
        />
      )}
      <Popup visible={visible} className="market-popover-notice">
        <div>
          <Icon name="tips_icon" />
          <span>{t`features_market_market_quatation_common_market_notice_index_5101070`}</span>
          <div className="flex flex-row gap-x-6">
            <Button
              className="cancel-button"
              onClick={() => setvisible(false)}
            >{t`assets.financial-record.cancel`}</Button>
            <Button
              type="primary"
              onClick={() => {
                setvisible(false)
                store.setIsClosedNotification(true)
              }}
            >{t`user.field.reuse_17`}</Button>
          </div>
        </div>
      </Popup>
    </span>
  )
}

export default MarketNotice
