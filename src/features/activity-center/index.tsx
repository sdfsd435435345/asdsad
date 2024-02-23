import NavBar from '@/components/navbar'
import LazyImage, { Type } from '@/components/lazy-image'
import { oss_svg_image_domain_address } from '@/constants/oss'
import { t } from '@lingui/macro'
import styles from './index.module.css'

function ActivityCenter() {
  return (
    <section className={`activity-center ${styles.scoped}`}>
      <NavBar title={t`user.personal_center_07`} />
      <div className="activity-center-wrap">
        <div className="placeholder">
          <LazyImage src={`${oss_svg_image_domain_address}function_development`} hasTheme imageType={Type.png} />
          <div className="text">
            <p>{t`features_activity_center_index_5101276`}</p>
            <label>{t`features_activity_center_index_5101277`}</label>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivityCenter
