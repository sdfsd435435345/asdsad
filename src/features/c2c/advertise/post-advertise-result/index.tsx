/**
 * 发布广告单 - 发布结果
 */
import { t } from '@lingui/macro'
import { Button } from 'react-vant'
import LazyImage from '@/components/lazy-image'
import NavBar from '@/components/navbar'
import { AssetsRouteEnum, OSSDOMAIN_IMAGE } from '@/constants/assets'
import { link } from '@/helper/link'
import { getAssetsPageRoutePath, getC2cAdsHistoryPageRoutePath, getC2cTradePageRoutePath } from '@/helper/route'
import styles from './index.module.css'

function PostAdvertiseResultLayout() {
  return (
    <div className={styles['post-advertise-result-root']}>
      <NavBar title="" onClickLeft={() => link(getC2cTradePageRoutePath())} />

      <div className="page-content">
        <LazyImage src={`${OSSDOMAIN_IMAGE}success_icon.svg`} width={70} height={70} />

        <span className="title">{t`features_c2c_advertise_post_advertise_result_index_scbhxenqmr5hjxaijg6lp`}</span>
      </div>

      <div className="page-bottom">
        <Button
          className="btn order-btn"
          onClick={() =>
            link(getC2cAdsHistoryPageRoutePath(), {
              overwriteLastHistoryEntry: true,
            })
          }
        >
          {t`features_c2c_advertise_post_advertise_result_index_oq744xa-ptllro6rq4yah`}
        </Button>
        <Button
          type="primary"
          className="btn"
          onClick={() =>
            link(getAssetsPageRoutePath(AssetsRouteEnum.c2c), {
              overwriteLastHistoryEntry: true,
            })
          }
        >
          {t`assets.withdraw.success.view-assets`}
        </Button>
      </div>
    </div>
  )
}

export { PostAdvertiseResultLayout }
