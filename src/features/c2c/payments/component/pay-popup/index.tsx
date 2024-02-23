import { t } from '@lingui/macro'
import { Popup } from 'react-vant'
import { useState, useEffect } from 'react'
import { CodeDetailType } from '@/constants/c2c/common'
import { PayPopupMoneyType } from '@/typings/api/c2c/center'
import { C2CAreaListResp } from '@/typings/api/c2c/common'
import styles from './index.module.css'

type PayPopupType = {
  visible: boolean
  payType: CodeDetailType
  typeData: CodeDetailType[]
  onClose?: () => void
  onChange?: (v: PayPopupMoneyType) => void
  areaSelectList: C2CAreaListResp[]
}

const PayPopup = ({ typeData, payType, visible, onClose, onChange, areaSelectList }: PayPopupType) => {
  const [popupId, setPopupId] = useState<string>(payType?.codeVal || '')
  const [reminderList, setReminderList] = useState<CodeDetailType[]>([])

  /** 交集* */
  const payIntersection = (data: Array<Array<string>>) => {
    return data?.reduce((result, array) => result?.filter(element => array?.includes(element)))
  }

  const onPopupClose = () => {
    onClose && onClose()
  }

  const onChangeList = v => {
    setPopupId(v.codeVal || '')
    onChange && onChange(v)
  }

  /** 处理获取的数据* */
  const handleDefaultReminder = async () => {
    const paymentsList = areaSelectList?.map(area => area.payments || [])
    const currnetIntersection = paymentsList.length ? payIntersection(paymentsList || []) : []
    const newData = typeData?.filter(item => currnetIntersection?.includes(item.codeVal))
    setReminderList(newData || [])
  }

  useEffect(() => {
    areaSelectList?.length && handleDefaultReminder()
  }, [areaSelectList, typeData])

  return (
    <Popup visible={visible} position="bottom" className={styles['reminder-popup']} onClose={() => onPopupClose()}>
      <div className="reminder-popup-wrap">
        {reminderList?.map(v => {
          return (
            <div
              key={v.codeVal}
              onClick={() => onChangeList(v)}
              className={`popup-wrap-list ${popupId === v.codeVal ? 'select-list' : ''}`}
            >
              {v.codeKey}
            </div>
          )
        })}
      </div>
      <div className="popup-wrap-bottom" onClick={onPopupClose}>{t`assets.financial-record.cancel`}</div>
    </Popup>
  )
}

export default PayPopup
