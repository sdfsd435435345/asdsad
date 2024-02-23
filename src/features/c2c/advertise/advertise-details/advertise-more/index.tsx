/**
 * 广告单详情 - 更多
 */
import { t } from '@lingui/macro'
import { Popup } from 'react-vant'
import NavBar from '@/components/navbar'
import { AdvertiseContentDetails } from '../advertise-content-details'
import { RemarkInfo } from '../remark-info'
import styles from './index.module.css'

interface AdvertiseMoreProps {
  visible: boolean
  onClose: () => void
}

function AdvertiseMore(props: AdvertiseMoreProps) {
  const { visible, onClose } = props

  return (
    <Popup
      visible={visible}
      onClose={onClose}
      className={styles['advertise-more-root']}
      overlay={false}
      destroyOnClose
      closeOnPopstate
      safeAreaInsetBottom
    >
      <NavBar title={t`features_home_more_toolbar_header_toolbar_index_510105`} onClickLeft={onClose} />

      <AdvertiseContentDetails />
      <RemarkInfo />
    </Popup>
  )
}

export { AdvertiseMore }
