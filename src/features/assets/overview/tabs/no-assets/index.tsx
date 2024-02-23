/**
 * 资产总览 - 无资产
 */
import Icon from '@/components/icon'
import { Button } from 'react-vant'
import { link } from '@/helper/link'
import { t } from '@lingui/macro'
import { useCommonStore } from '@/store/common'
import { getAssetsRechargePageRoutePath, getC2cFastTradePageRoutePath } from '@/helper/route'
import { TotalAssets } from '../../common/total-assets'
import styles from './index.module.css'

function NoAssets() {
  const { isFusionMode } = useCommonStore()
  return (
    <div className={styles['no-assets-root']}>
      <TotalAssets />

      <Icon name="assets_no_assets" hasTheme className="no-assets-img" />

      <span className="no-assets-text">{t`features_assets_overview_no_assets_index_japwwia59e4ovjyq4yfzg`}</span>
      <span className="no-assets-text">{t`features_assets_overview_no_assets_index_lyncorg1ozmhbsn79mfl8`}</span>

      <div className="no-assets-buttons">
        {!isFusionMode && (
          <Button
            icon={<Icon name="home_c2c_transaction" className="no-assets-btn-icon" />}
            className="no-assets-btn no-assets-btn-percent"
            onClick={() => link(getC2cFastTradePageRoutePath())}
          >{t`features_home_components_navigation_card_index_510103`}</Button>
        )}
        {!isFusionMode && (
          <Button
            icon={<Icon name="home_icon_recharge" />}
            className={`no-assets-btn ${isFusionMode ? 'flex-1' : 'no-assets-btn-percent'}`}
            onClick={() => link(getAssetsRechargePageRoutePath())}
          >{t`assets.financial-record.tabs.Deposit`}</Button>
        )}
      </div>
    </div>
  )
}
export { NoAssets }
