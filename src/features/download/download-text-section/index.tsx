import DownloadCommunity from '@/features/download/community'
import { t } from '@lingui/macro'
import styles from './index.module.css'

function DownloadTextSection() {
  return (
    <div className={styles.scoped}>
      <span className="text-3xl font-semibold mb-2">{t`features_download_download_text_section_index_5101262`}</span>
      <span className="download-text-description">{t`features_download_download_text_section_index_5101263`}</span>
      <span className="text-text_color_01 mb-3">{t`features_download_download_text_section_index_5101264`}</span>
      <DownloadCommunity />
    </div>
  )
}

export default DownloadTextSection
