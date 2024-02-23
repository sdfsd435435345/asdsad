import LazyImage, { Type } from '@/components/lazy-image'
import { oss_svg_image_domain_address } from '@/constants/oss'
import NavBar from '@/components/navbar'
import { t } from '@lingui/macro'
import styles from './index.module.css'

function InDevelopment() {
  return (
    <div className="flex h-screen">
      <NavBar title="" />
      <div className={styles.scoped}>
        <div>
          <LazyImage
            hasTheme
            src={`${oss_svg_image_domain_address}function_development`}
            width={220}
            height={184}
            imageType={Type.png}
          />
          <div className="text-center">
            <div className="text-text_color_01 text-sm font-medium">{t`features_activity_center_index_5101276`}</div>
            <div className="text-text_color_03 text-xs">{t`features_activity_center_index_5101277`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InDevelopment
