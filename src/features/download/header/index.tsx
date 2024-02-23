import LazyImage from '@/components/lazy-image'
import { useLayoutStore } from '@/store/layout'

function DownloadHeader() {
  const { imgWebLogo, businessName } = useLayoutStore().headerData || {}

  return (
    <div className="container">
      <span className="left">
        <span className="logo">
          <a href={'/'}>
            <LazyImage src={imgWebLogo || ''} />
          </a>
        </span>

        <span className="title">{businessName}</span>
      </span>

      <span className="right"></span>
    </div>
  )
}

export default DownloadHeader
