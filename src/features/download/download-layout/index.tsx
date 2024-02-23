import LazyImage, { Type } from '@/components/lazy-image'
import { oss_svg_image_domain_address } from '@/constants/oss'
import { ReactNode } from 'react'
import styles from './index.module.css'

const downloadImgFileName = 'download_app'
const downloadImgDesktopFileName = 'download_desktop'

type TDownloadLayout = {
  title: ReactNode
  buttons: ReactNode
  description: ReactNode
  isDesktop?: boolean
}

function DownloadLayout({ title, description, buttons, isDesktop }: TDownloadLayout) {
  return (
    <div className={styles.scoped}>
      {title}
      {isDesktop ? (
        <LazyImage
          className="download-image"
          src={oss_svg_image_domain_address + downloadImgDesktopFileName}
          imageType={Type.png}
          hasTheme
        />
      ) : (
        <LazyImage
          className="download-image"
          src={oss_svg_image_domain_address + downloadImgFileName}
          imageType={Type.png}
          hasTheme
        />
      )}
      {description}
      {buttons}
    </div>
  )
}

export default DownloadLayout
