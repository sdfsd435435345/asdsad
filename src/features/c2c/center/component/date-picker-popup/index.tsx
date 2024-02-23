import { t } from '@lingui/macro'
import { useState } from 'react'
import { DatetimePicker, Popup, PopupPosition, Toast } from 'react-vant'
import { getBeforeDate } from '@/helper/date'
import { AssetsRecordDateTypeEnum } from '@/constants/assets/common'
import styles from './index.module.css'

interface DatePickerModalProps {
  /** 是否展示 */
  visible: boolean
  /** 展示位置，默认 bottom */
  position?: PopupPosition
  /** 关闭弹窗 */
  onClose: () => void
  /** 完成 */
  onCommit: (e: any) => void
  /** 开始时间 */
  startDate: string
  /** 结束时间 */
  endDate: string
  /** 最大选择日期周期，默认 90 天 */
  max?: number | false
}

enum DateTypeEnum {
  start = 'start',
  end = 'end',
}

function DatePickerPopup(props: DatePickerModalProps) {
  const {
    visible = false,
    onClose,
    onCommit,
    position = 'bottom',
    startDate: defaultStartDate,
    endDate: defaultEndDate,
    max = AssetsRecordDateTypeEnum.threeMonths,
  } = props
  const [activeDate, setActiveDate] = useState(DateTypeEnum.start)
  const [startDate, setStartDate] = useState<string>(defaultStartDate)
  const [endDate, setEndDate] = useState<string>(defaultEndDate)

  /**
   * 自定义选项上方内容
   */
  function DateHeader() {
    return (
      <div className="date">
        <div
          className={`item ${activeDate === DateTypeEnum.start && 'active-item'} ${!startDate && 'date-none'}`}
          onClick={() => setActiveDate(DateTypeEnum.start)}
        >
          {startDate}
        </div>
        <span className="separate">{t`features_assets_financial_record_datetime_search_index_602`}</span>
        <div
          className={`item ${activeDate === DateTypeEnum.end && 'active-item'} ${!endDate && 'date-none'}`}
          onClick={() => setActiveDate(DateTypeEnum.end)}
        >
          {endDate}
        </div>
      </div>
    )
  }

  /**
   * 确定
   */
  const onConfirm = () => {
    const maxTime = getBeforeDate(max)
    if (!startDate || !endDate) {
      return Toast.info(t`features_trade_future_c2c_2222222225101607`)
    }
    if (Number(startDate) < maxTime) {
      return Toast.info(t`features_trade_future_c2c_2222222225101608`)
    }

    // 开始时间不能大于结束时间
    if (startDate > endDate) {
      return Toast.info(t`features_trade_future_c2c_2222222225101609`)
    }

    onCommit({ startDate, endDate })
  }

  // useUpdateEffect(() => {
  //   setStartDate(defaultStartDate)
  //   setEndDate(defaultEndDate)
  // }, [defaultStartDate, defaultEndDate])

  return (
    <Popup visible={visible} onClose={onClose} position={position} className="rounded-t-lg">
      <div className={styles['date-picker-popup-wrapper']}>
        <DatetimePicker
          type="time"
          onCancel={onClose}
          onConfirm={onConfirm}
          columnsTop={<DateHeader />}
          confirmButtonText={t`assets.financial-record.complete`}
          value={activeDate === DateTypeEnum.start ? startDate : endDate}
          onChange={value => {
            activeDate === DateTypeEnum.start ? setStartDate(value) : setEndDate(value)
          }}
        />
      </div>
    </Popup>
  )
}
export default DatePickerPopup
