import DownloadHeader from '@/features/download/header'
import useDownloadInfo from '@/hooks/features/download'
import { useLayoutStore } from '@/store/layout'
import { useMount } from 'ahooks'
import { H5Url, envIsProd } from '@/helper/env'
import { useCommonStore } from '@/store/common'
import DownloadCommunity from './community'
import DownloadButton from './download-button'
import DownloadLayout from './download-layout'
import styles from './index.module.css'

function Download() {
  const { appInfo, desktopInfo } = useDownloadInfo()
  const { locale } = useCommonStore()
  const { appDownloadTitle, appDownloadDescription, pcDownloadTitle, pcDownloadDescription } =
    useLayoutStore().layoutProps || {}

  useMount(() => {
    if (envIsProd) {
      window.location.href = `${H5Url.replace(/h5./, '')}${locale}/download`
    } else {
      window.location.href = `https://c2cpayment.com/${locale}/download`
    }
  })
  return (
    <>
      <div className={styles.header}>
        <DownloadHeader />
      </div>
      {appInfo && (
        <DownloadLayout
          title={
            <span className="flex flex-col items-center gap-y-5">
              <span className="download-title">{appDownloadTitle}</span>
              <DownloadCommunity />
            </span>
          }
          description={<span className="text-text_color_02">{appDownloadDescription}</span>}
          buttons={<DownloadButton data={appInfo} />}
        />
      )}
      {desktopInfo && (
        <DownloadLayout
          title={<span className="download-title">{pcDownloadTitle}</span>}
          description={<span className="text-text_color_02">{pcDownloadDescription}</span>}
          buttons={<DownloadButton data={desktopInfo} />}
          isDesktop
        />
      )}
    </>
  )
}

export default Download
