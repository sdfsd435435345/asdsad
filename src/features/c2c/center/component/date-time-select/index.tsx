import { t } from '@lingui/macro'
import { cloneDeep } from 'lodash'
import { useMount } from 'ahooks'
import { useState } from 'react'
import { C2cCenterWeek } from '@/constants/c2c/common'
import { C2CUserTimeSettingType } from '@/typings/api/c2c/center'
import DatePickerPopup from '@/features/c2c/center/component/date-picker-popup'
import styles from './index.module.css'

type DateTimeType = {
  endDate: string
  startDate: string
}

type WeekType = {
  id: string
  name: string
  isSelected: boolean
}

type DateTimeSelectType = {
  data: C2CUserTimeSettingType
  onWeekChange: (v: Array<WeekType>) => void
  onTimeChange: (v: { endTime: string; startTime: string }) => void
}

function DateTimeSelect({ data, onWeekChange, onTimeChange }: DateTimeSelectType) {
  const [dataItem, setDataItem] = useState<Array<WeekType>>([])
  const [visible, setVisible] = useState<boolean>(false) // 是否展示日期选择弹窗
  const [timeData, setTimeData] = useState<DateTimeType>() // 时间

  const onCoinSelect = v => {
    const newCoinData = cloneDeep(dataItem)
    newCoinData?.forEach(item => {
      if (item.id === v.id) {
        item.isSelected = item.isSelected ? !item.isSelected : true
      }
    })
    setDataItem(newCoinData)
    onWeekChange && onWeekChange(newCoinData)
  }

  /** 时间修改* */
  const onChange = params => {
    setTimeData(params)
    const time = {
      endTime: params?.endDate,
      startTime: params?.startDate,
    }
    onTimeChange && onTimeChange(time)
  }

  const handleSetUpTime = () => {
    const weekTime = data?.dayInWeek?.split(',') || []
    const newWeekTime = C2cCenterWeek()?.map(v => {
      const findTime = weekTime?.find(item => item === v.id)
      if (findTime) {
        v.isSelected = true
        return v
      }
      return v
    })
    const time = {
      endDate: (data?.endTime as string) || '',
      startDate: (data?.startTime as string) || '',
    }
    setTimeData(time)
    setDataItem(newWeekTime)
  }

  useMount(() => {
    handleSetUpTime()
  })

  return (
    <div className={styles['date-time-select-wrap']}>
      <div className="select-wrap-data">
        <div className="select-wrap-data-header">{t`features_trade_future_c2c_222222225101606`}</div>
        <div className="select-wrap-data-main">
          {dataItem?.map(v => {
            return (
              <div
                key={v.id}
                onClick={() => onCoinSelect(v)}
                className={`select-wrap-data-contair ${v?.isSelected ? 'selected' : ''}`}
              >
                <div className="select-wrap-data-item">{v.name}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="select-wrap-time">
        <div className="select-wrap-time-header">{t`features_c2c_center_component_date_time_select_index_q_o7k34bypekriy8nwehj`}</div>
        <div className="select-wrap-time-main">
          <div className="date-item" onClick={() => setVisible(true)}>
            {timeData?.startDate}
          </div>
          <div className="separate">{t`features_assets_financial_record_datetime_search_index_602`}</div>
          <div className="date-item" onClick={() => setVisible(true)}>
            {timeData?.endDate}
          </div>
        </div>
      </div>
      {visible && (
        <DatePickerPopup
          visible={visible}
          startDate={timeData?.startDate as string}
          endDate={timeData?.endDate as string}
          onClose={() => setVisible(false)}
          onCommit={params => {
            setVisible(false)
            onChange(params)
          }}
        />
      )}
    </div>
  )
}

export default DateTimeSelect
