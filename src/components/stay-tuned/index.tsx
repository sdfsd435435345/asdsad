import NavBar from '@/components/navbar'
import LazyImage, { Type } from '@/components/lazy-image'
import { oss_svg_image_domain_address } from '@/constants/oss'
import { t } from '@lingui/macro'
import styles from './index.module.css'

function StayTuned() {
  return (
    <section className={`stay-tuned ${styles.scoped}`}>
      <NavBar title={t`components_stay_tuned_index_5101627`} />
      <div className="stay-tuned-wrap">
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

export default StayTuned
