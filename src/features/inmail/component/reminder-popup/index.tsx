import { t } from '@lingui/macro'
import { Popup } from 'react-vant'
import { useState } from 'react'
import './index.module.css'

type ReminderPopupType = {
  visible: boolean
  onClose?: () => void
  onChange?: (v) => void
}

const ReminderPopup = ({ visible, onClose, onChange }: ReminderPopupType) => {
  const [popupId, setPopupId] = useState<string>('1')

  const reminderList = [
    { id: '1', name: t`store_inmail_index_5101319`, placeholder: t`store_inmail_index_5101320` },
    { id: '2', name: t`store_inmail_index_5101321`, placeholder: t`store_inmail_index_5101322` },
    { id: '3', name: t`store_inmail_index_5101323`, placeholder: t`store_inmail_index_5101324` },
  ]

  const onPopupClose = () => {
    onClose && onClose()
  }

  const onChangeList = v => {
    setPopupId(v.id)
    onChange && onChange(v)
  }

  return (
    <Popup visible={visible} position="bottom" className="reminder-popup" onClose={() => onPopupClose()}>
      <div className="reminder-popup-wrap">
        {reminderList.map(v => {
          return (
            <div
              key={v.id}
              onClick={() => onChangeList(v)}
              className={`popup-wrap-list ${popupId === v.id ? 'select-list' : ''}`}
            >
              {v.name}
            </div>
          )
        })}
        <div className="popup-wrap-bottom" onClick={onPopupClose}>{t`assets.financial-record.cancel`}</div>
      </div>
    </Popup>
  )
}

export default ReminderPopup
