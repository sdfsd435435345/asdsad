import { t } from '@lingui/macro'
import classNames from 'classnames'
import Icon from '@/components/icon'
import LazyImage from '@/components/lazy-image'
import { oss_svg_image_domain_address } from '@/constants/oss'
import { ReactNode } from 'react'
import styles from './index.module.css'

type NoDataImageType = {
  isIcon?: boolean
  iconName?: string
  footerText?: string | ReactNode
  className?: string
}

const NoDataImage = ({ className, footerText, iconName, isIcon = false }: NoDataImageType) => {
  return (
    <div className={classNames(styles.scoped, className, 'no-data-content')}>
      <div className="no-data">
        {isIcon ? (
          <Icon name="contract_upgrade_failed" hasTheme className="main-icon" />
        ) : (
          <LazyImage
            hasTheme
            className="no-data-image"
            src={`${oss_svg_image_domain_address}${iconName || 'no_data_icon'}`}
          />
        )}
        {footerText ? (
          <div className="no-footer-text">{footerText}</div>
        ) : (
          <div className="no-data-text">{t`features_orders_order_detail_510288`}</div>
        )}
      </div>
    </div>
  )
}
export default NoDataImage
