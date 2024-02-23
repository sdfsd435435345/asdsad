import LazyImage, { Type } from '@/components/lazy-image'
import { oss_svg_image_domain_address } from '@/constants/oss'
import styles from './index.module.css'

function MerchantTitleContainer({ children }) {
  return (
    <span className={styles.scoped}>
      <span className="container">
        <LazyImage src={`${oss_svg_image_domain_address}c2c/merchant_title_dot`} imageType={Type.png} />
        <span className="relative z-1">{children}</span>
        <LazyImage src={`${oss_svg_image_domain_address}c2c/merchant_title_rectangle`} imageType={Type.png} />
      </span>
    </span>
  )
}

export default MerchantTitleContainer
