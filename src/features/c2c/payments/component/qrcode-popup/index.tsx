import { t } from '@lingui/macro'
import { download } from '@/helper/common'
import { Dispatch, SetStateAction } from 'react'
import { useRequest } from 'ahooks'
import { C2cPayMoneyTypeEnum } from '@/constants/c2c/center'
/** 引入组件* */
import { Popup } from 'react-vant'
import Icon from '@/components/icon'
import LazyImage from '@/components/lazy-image'
import './index.module.css'

type QrcodePopupType = {
  data: qrCodeType
  visible: boolean
  onClose?: () => void
  closeVisible: Dispatch<SetStateAction<boolean>>
}

type qrCodeType = {
  url: string
  type: string
}

const QrcodePopup = ({ data, visible, onClose, closeVisible }: QrcodePopupType) => {
  const { run: qrcodeDownUp } = useRequest(
    async () => {
      const title =
        data?.type === C2cPayMoneyTypeEnum.ALIPAY
          ? t`features_c2c_payments_component_qrcode_popup_index_v_a98fxdzqgcnp8hknqzc`
          : t`features_c2c_payments_component_qrcode_popup_index_xikndgiq2eizusngwr4yw`
      await download(data.url as any, title)
      onClose && onClose()
    },
    {
      manual: true,
    }
  )

  const onPopupClose = () => {
    qrcodeDownUp()
    // onClose && onClose()
  }

  return (
    <Popup visible={visible} position="bottom" className="qrcode-popup" onClose={() => onPopupClose()}>
      <div className="qrcode-popup-wrap">
        <div className="popup-wrap-header">
          <div className="wrap-header-text">
            {data?.type === C2cPayMoneyTypeEnum.ALIPAY
              ? t`features_c2c_payments_component_qrcode_popup_index_v_a98fxdzqgcnp8hknqzc`
              : t`features_c2c_payments_component_qrcode_popup_index_xikndgiq2eizusngwr4yw`}
          </div>
          <Icon name="close" hasTheme onClick={() => closeVisible(false)} />
        </div>
        <div className="qrcode-popup-body">
          <LazyImage src={data?.url} height={400} />
        </div>
        <div className="popup-wrap-bottom" onClick={onPopupClose}>
          {t`user.account_security.network_check_11`}
        </div>
      </div>
    </Popup>
  )
}

export default QrcodePopup
