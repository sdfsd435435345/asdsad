import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { getC2cFastTradePageRoutePath } from '@/helper/route'
import { t } from '@lingui/macro'
import styles from './index.module.css'

export default NavigationCard

function NavigationCard() {
  return (
    // todo add related link
    <div className={styles.scoped} onClick={() => link(getC2cFastTradePageRoutePath())}>
      <Icon className="navigation-icon" name="home_quick" />
      <div>
        <div className="title">{t`features_home_components_navigation_card_index_510103`}</div>
        <div className="sub-title">{t`features_home_components_navigation_card_index_510104`}</div>
      </div>
      <Icon name="next_arrow" hasTheme />
    </div>
  )
}
