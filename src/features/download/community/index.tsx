import LazyImage from '@/components/lazy-image'
import { useLayoutStore } from '@/store/layout'
import { t } from '@lingui/macro'
import styles from './index.module.css'

function DownloadCommunity() {
  const { groupConfigDatas } = useLayoutStore()?.footerData || {}

  return (
    <div className={styles.scoped}>
      <span>{t`features_download_download_text_section_index_5101264`}</span>
      <div className="icons-wrapper">
        {groupConfigDatas?.map((item, index) => (
          <a href={item.linkUrl} key={index}>
            <LazyImage src={item.imgIcon} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default DownloadCommunity
