/**
 * 广告单详情-欢迎语/广告备注
 */
import { t } from '@lingui/macro'
import { useState } from 'react'
import { Image, Popup } from 'react-vant'
import { WelcomeInfoTypeEnum } from '@/constants/c2c/advertise'
import { useC2CAdvertiseStore } from '@/store/c2c/advertise'
import styles from './index.module.css'

function RemarkInfo() {
  const {
    advertiseDetails: { welcomeInfoType, welcomeInfoMessage = '', remark = '--' },
  } = useC2CAdvertiseStore()
  const [previewVisible, setPreviewVisible] = useState(false)

  return (
    <>
      <div className={`${styles['remark-info-root']} ${!welcomeInfoMessage && !remark && '!border-t-0'}`}>
        {welcomeInfoMessage && (
          <>
            <span className="title">{t`features_trade_future_c2c_225101581`}</span>
            {welcomeInfoType === WelcomeInfoTypeEnum.text ? (
              <div className={`remark ${remark && 'mb-4'}`}>{welcomeInfoMessage}</div>
            ) : (
              <Image
                src={welcomeInfoMessage}
                width={76}
                height={76}
                radius={4}
                className="welcome-img"
                fit="contain"
                onClick={() => setPreviewVisible(true)}
              />
            )}
          </>
        )}

        {remark && (
          <>
            <span className="title">{t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_4ouee0zpdlz7t43ziuahl`}</span>
            <div className="remark">{remark}</div>
          </>
        )}
      </div>

      <Popup visible={previewVisible} lockScroll destroyOnClose closeOnPopstate className={styles['preview-img-root']}>
        <Image
          src={welcomeInfoMessage}
          width={'auto'}
          height={'auto'}
          fit="contain"
          onClick={() => setPreviewVisible(false)}
        />
      </Popup>
    </>
  )
}

export { RemarkInfo }
