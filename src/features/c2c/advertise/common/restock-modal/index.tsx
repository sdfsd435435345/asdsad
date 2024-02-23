/**
 * 广告单 - 重新上架弹窗
 */
import { t } from '@lingui/macro'
import { useState } from 'react'
import { Button, DropdownMenu, Popup, Toast } from 'react-vant'
import Icon from '@/components/icon'
import { postAdvertReopen } from '@/apis/c2c/advertise'
import { getValidDaysList, ValidDaysTypeEnum } from '@/constants/c2c/advertise'
import { requestWithLoading } from '@/helper/order'
import styles from './index.module.css'

interface RestockModalProps {
  visible: boolean
  advertId: string
  onClose: () => void
  onCommit: () => void
}

function RestockModal(props: RestockModalProps) {
  const { visible, advertId, onClose, onCommit } = props || {}
  const [validDays, setValidDays] = useState<any>({ value: ValidDaysTypeEnum.one })

  /**
   * 重新上架广告
   * @param advertId 广告 ID
   * @param validDays 有效期
   * @returns isSuccess
   */
  const onReopenAdvertise = async () => {
    const res = await postAdvertReopen({ advertId, validDays: validDays?.value })

    const { isOk, data } = res || {}
    if (!isOk || !data?.isSuccess) {
      Toast.info(t`features_c2c_advertise_common_restock_modal_index_mye3iweijsymcgy_8zeo1`)
      return
    }

    Toast.info(t`features_c2c_advertise_common_restock_modal_index_dmpgzbpglhxivruu-nyxm`)
    onCommit()
  }
  const validDaysList = getValidDaysList()

  return (
    <Popup
      visible={visible}
      position="bottom"
      round
      onClose={onClose}
      className={styles['restock-modal-root']}
      safeAreaInsetBottom
      lockScroll
      closeOnPopstate
      destroyOnClose
    >
      <div className="restock-modal">
        <div className="modal-header">
          <span>{t`features_c2c_advertise_common_restock_modal_index_j7fvxqbeuy1rgox-eujet`}</span>
          <Icon name="close" hasTheme className="close-icon" onClick={onClose} />
        </div>

        <span className="valid-days-title">{t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_jomtvodwq7p3aehfiu6-4`}</span>
        <DropdownMenu value={validDays} onChange={v => setValidDays(v)} overlay={false}>
          <DropdownMenu.Item name="value" options={validDaysList} titleClass={'menu-title'} />
        </DropdownMenu>

        <span className="modal-hint">{t`features_c2c_advertise_common_restock_modal_index_vhz3fum5yowfqdpkbfqhx`}</span>

        <div className="modal-bottom">
          <Button className="bottom-btn cancel-btn" onClick={onClose}>
            {t`assets.financial-record.cancel`}
          </Button>
          <Button type="primary" className="bottom-btn" onClick={() => requestWithLoading(onReopenAdvertise(), 0)}>
            {t`common.confirm`}
          </Button>
        </div>
      </div>
    </Popup>
  )
}

export { RestockModal }
