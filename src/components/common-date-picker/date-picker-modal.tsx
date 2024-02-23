/**
 * 日期选择弹窗
 */
import { t } from '@lingui/macro'
import { ComponentProps, useState } from 'react'
import { DatetimePicker, Popup, PopupPosition, Toast } from 'react-vant'
import { formatDate, getBeforeDate } from '@/helper/date'
import { AssetsRecordDateTypeEnum } from '@/constants/assets/common'
import { useUpdateEffect } from 'ahooks'
import classNames from 'classnames'
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
  /** 日期格式 */
  dateTemplate: string
  /** 开始时间 */
  startDate?: number
  /** 结束时间 */
  endDate?: number
  /** 最大选择日期周期，默认 90 天 */
  max?: number | false
  datePickerConfig?: ComponentProps<typeof DatetimePicker>
  onChange?: (v: ReturnType<typeof DatePickerValueFormat>) => void
  className?: string
}

enum DateTypeEnum {
  start = 'start',
  end = 'end',
}

export function DatePickerValueFormat(startDate, endDate) {
  return {
    startDate,
    endDate,
  }
}

function DatePickerModal(props: DatePickerModalProps) {
  const {
    visible = false,
    onClose,
    onCommit,
    position = 'bottom',
    dateTemplate,
    startDate: defaultStartDate,
    endDate: defaultEndDate,
    max = AssetsRecordDateTypeEnum.threeMonths,
    datePickerConfig,
    onChange,
    className,
  } = props
  const [activeDate, setActiveDate] = useState(DateTypeEnum.start)
  const [startDate, setStartDate] = useState<number | undefined>(defaultStartDate)
  const [endDate, setEndDate] = useState<number | undefined>(defaultEndDate)
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
          {startDate && formatDate(startDate, dateTemplate)}
        </div>
        <span className="separate">{t`features_assets_financial_record_datetime_search_index_602`}</span>
        <div
          className={`item ${activeDate === DateTypeEnum.end && 'active-item'} ${!endDate && 'date-none'}`}
          onClick={() => setActiveDate(DateTypeEnum.end)}
        >
          {endDate && formatDate(endDate, dateTemplate)}
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
      Toast.info(t`components_common_date_picker_date_picker_modal_510248`)
      return
    }
    if (startDate < maxTime) {
      Toast.info(t`features_assets_financial_record_datetime_search_index_510167`)
      return
    }

    // 开始时间不能大于结束时间
    if (startDate > endDate) {
      Toast.info(t`features_assets_financial_record_datetime_search_index_510168`)
      return
    }

    onCommit({ startDate, endDate })
  }

  useUpdateEffect(() => {
    setStartDate(defaultStartDate)
    setEndDate(defaultEndDate)
  }, [defaultStartDate, defaultEndDate])

  // onchange listener
  useUpdateEffect(() => {
    onChange && onChange(DatePickerValueFormat(startDate, endDate))
  }, [startDate, endDate])

  const { columnsTop, ...rest } = datePickerConfig || {}

  return (
    <Popup
      className={classNames(styles['date-picker-modal-root'], className)}
      // className={className}
      visible={visible}
      onClose={onClose}
      position={position}
      round
    >
      <div className="date-picker-modal-wrapper">
        <DatetimePicker
          type="date"
          confirmButtonText={t`assets.financial-record.complete`}
          minDate={new Date(getBeforeDate(max))}
          maxDate={new Date()}
          value={activeDate === DateTypeEnum.start ? new Date(startDate!) : new Date(endDate!)}
          onChange={value => {
            if (activeDate === DateTypeEnum.start) {
              setStartDate(new Date(new Date(new Date(value).getTime()).setHours(0, 0, 0, 0)).getTime())
              return
            }

            setEndDate(new Date(new Date(new Date(value).getTime()).setHours(23, 59, 59, 59)).getTime())
          }}
          onCancel={onClose}
          onConfirm={onConfirm}
          columnsTop={
            <>
              {columnsTop}
              <DateHeader />
            </>
          }
          {...(rest as typeof DatetimePicker)}
        />
      </div>
    </Popup>
  )
}
export default DatePickerModal
