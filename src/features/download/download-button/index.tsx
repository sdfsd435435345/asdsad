import Icon from '@/components/icon'
import { downloadAppType, downloadIconsType } from '@/constants/download'
import { QRCodeCanvas } from 'qrcode.react'
import { buttonShouldDisabled } from '@/helper/download'
import OptionalDownloadButton from './optional-download-button'
import styles from './index.module.css'

function downloadIcon(type, disabled) {
  if (disabled) return <Icon name={`${downloadIconsType[type]}_disabled`} hasTheme />
  return <Icon name={downloadIconsType[type]} hasTheme />
}

function DownloadButton(props) {
  const { data } = props

  let h5Data
  // show Qr code if status is active and url is not '/'
  if (data[downloadAppType.h5] && !buttonShouldDisabled(data[downloadAppType.h5])) h5Data = data[downloadAppType.h5]

  const renderDownloadBtns = btns => {
    if (!btns) return
    return Object.keys(btns).map((key, index) => {
      if (key === downloadAppType.h5) return
      return (
        <OptionalDownloadButton
          disabled={buttonShouldDisabled(btns[key])}
          key={index}
          data={btns[key]}
          Icon={downloadIcon(key, buttonShouldDisabled(btns[key]))}
        />
      )
    })
  }

  return (
    <div className={styles.scoped}>
      {h5Data ? (
        <div className="grid grid-cols-2 gap-x-2">
          <div className="grid grid-cols-1 gap-y-4">{renderDownloadBtns(data)}</div>
          <div className="ml-auto qr-canvas">
            <div className="qr-wrapper">
              <QRCodeCanvas value={h5Data.downloadUrl} />
            </div>
            <span className="mx-auto text-xs font-normal">{h5Data.description}</span>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-4">{renderDownloadBtns(data)}</div>
        </div>
      )}
    </div>
  )
}

export default DownloadButton
