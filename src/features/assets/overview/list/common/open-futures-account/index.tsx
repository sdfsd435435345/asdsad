/**
 * 资产总览 - 开通合约账户
 */
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { Button } from 'react-vant'
import { link } from '@/helper/link'
import { getOpenFuturePagePath } from '@/helper/route'
import styles from './index.module.css'

function OpenFuturesAccountLayout() {
  return (
    <div className={styles['open-futures-account-root']}>
      <NavBar title={t`features_assets_futures_open_futures_index_5101392`} />

      <Icon name="assets_opening" hasTheme className="open-futures-icon" />
      <span className="open-futures-title">{t`features_assets_futures_open_futures_index_5101392`}</span>
      <span className="open-futures-text">
        {t`features_assets_overview_list_common_open_futures_account_index_e2fmbeypt2wn2qgjiq9vb`}
      </span>

      <div className="open-futures-bottom">
        <Button className="open-futures-button" type="primary" onClick={() => link(getOpenFuturePagePath())}>
          {t`features_assets_futures_open_futures_index_5101397`}
        </Button>
      </div>
    </div>
  )
}

export { OpenFuturesAccountLayout }
