import { t } from '@lingui/macro'
import classNames from 'classnames'
import { oss_svg_image_domain_address } from '@/constants/oss'
import Image from '@/components/image'
import styles from './index.module.css'

type NoDataImageType = {
  className?: string
}

const BlackImage = ({ className }: NoDataImageType) => {
  return (
    <div className={classNames(styles.scoped, className, 'no-data-content')}>
      <div className="no-data">
        <Image
          hasTheme
          width={108}
          whetherManyBusiness
          height={80}
          className="no-data-image"
          src={`${oss_svg_image_domain_address}icon_default_blocked.png`}
        />
        <div className="no-data-text">{t`features_c2c_center_component_black_image_index_79iwkuu1fwzzs622hugp0`}</div>
      </div>
    </div>
  )
}
export default BlackImage
