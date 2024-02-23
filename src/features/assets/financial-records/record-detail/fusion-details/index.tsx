/**
 * 财务记录详情 - 融合模式
 */
import { t } from '@lingui/macro'
import { formatDate } from '@/helper/date'
import { useAssetsStore } from '@/store/assets/spot'
import styles from './index.module.css'

function FusionDetails() {
  const { assetsRecordDetail } = useAssetsStore().recordModule || {}
  const { createdByTime = '--', updatedByTime = '--' } = assetsRecordDetail || {}

  return (
    <div className={styles['fusion-details-root']}>
      <div className="info-item mb-3.5">
        <span className="label">{t`assets.financial-record.creationTime`}</span>
        <span className="value">{formatDate(createdByTime)}</span>
      </div>

      <div className="info-item">
        <span className="label">{t`assets.financial-record.completionTime`}</span>
        <span className="value">{formatDate(updatedByTime)}</span>
      </div>
    </div>
  )
}

export { FusionDetails }
