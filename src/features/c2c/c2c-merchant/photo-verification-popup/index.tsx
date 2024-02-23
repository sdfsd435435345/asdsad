import LazyImage, { Type } from '@/components/lazy-image'
import { oss_svg_image_domain_address } from '@/constants/oss'
import { Popup } from 'react-vant'
import { useState } from 'react'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import styles from './index.module.css'

function PhotoVerificationPopup() {
  const [visible, setvisible] = useState(false)
  return (
    <>
      <span className="text-brand_color" onClick={() => setvisible(true)}>
        {t`features_kyc_up_load_index_5101129`}
      </span>
      <Popup
        closeIcon={<Icon name="close" hasTheme />}
        className={styles['photo-popup']}
        visible={visible}
        closeable
        title={t`features_kyc_hold_up_index_5101204`}
        onClose={() => setvisible(false)}
      >
        <LazyImage className="photo-image" src={`${oss_svg_image_domain_address}c2c/merchant_photo_verify.svg`} />
        <div className="text-center text-text_color_02 mt-2 text-sm font-normal">{t`features_kyc_hold_up_index_5101205`}</div>
      </Popup>
    </>
  )
}

export default PhotoVerificationPopup
