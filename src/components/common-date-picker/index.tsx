/**
 * 日期选择组件
 */
import { t } from '@lingui/macro'
import { ReactNode, useEffect, useState } from 'react'
import { DateFormatTemplate, formatDate, getBeforeDate } from '@/helper/date'
import { AssetsRecordDateTypeEnum } from '@/constants/assets/common'
import DatePickerModal from './date-picker-modal'
import styles from './index.module.css'

type IDateTypeList = {
  label: string
  value: number
}

interface CommonDatePickerProps {
  /** 是否展示组件标题，默认展示 */
  showTitle?: boolean
  /** 组件标题，默认：时间 */
  title?: string
  /** 是否展示日期选择类型，默认展示 */
  showDateType?: boolean
  /** 日期类型列表，默认：最近 1 天/最近 1 周/最近 1 月/最近 3 月 */
  dateTypeList?: IDateTypeList[]
  /** 日期类型 */
  dateType?: number
  /** 自定义日期类型 */
  dateTypeNode?: ReactNode
  /** 时间格式，默认：YYYY-MM-DD HH:mm:ss */
  dateTemplate?: string
  /** 开始时间 */
  startDate?: number
  /** 结束时间 */
  endDate?: number
  /** 最大日期选择区间，不显示日期选择类型时可选 */
  max?: number
  /** 修改时间 */
  onChange: (e: any) => void
}

function CommonDatePicker(props: CommonDatePickerProps) {
  /** 时间类型列表 */
  const dateTypList = [
    { label: t`constants/assets/common-17`, value: AssetsRecordDateTypeEnum.day },
    { label: t`constants/assets/common-18`, value: AssetsRecordDateTypeEnum.week },
    { label: t`constants/assets/common-19`, value: AssetsRecordDateTypeEnum.month },
    { label: t`constants/assets/common-20`, value: AssetsRecordDateTypeEnum.threeMonths },
  ]
  const defaultEnd = new Date(new Date(new Date().getTime()).setHours(23, 59, 59, 59)).getTime()

  const {
    showDateType = true,
    title = t`future.funding-history.index-price.column.time`,
    showTitle = true,
    dateTemplate = DateFormatTemplate.default,
    dateTypeList = dateTypList,
    dateType = AssetsRecordDateTypeEnum.week,
    startDate = getBeforeDate(dateType),
    endDate = defaultEnd,
    dateTypeNode = null,
    max,
    onChange,
  } = props
  const [visible, setVisible] = useState(false) // 是否展示日期选择弹窗

  useEffect(() => {}, [startDate, endDate, dateType])

  /**
   * 监听日期类型选择事件
   * @param val 时间类型
   */
  const onSelectType = (val: number) => {
    onChange({ dateType: val, startDate: getBeforeDate(val), endDate: defaultEnd })
  }

  /**
   * 日期类型节点
   */
  const onRenderDateType = () => {
    return (
      <div className="date-type-list">
        {dateTypeNode ||
          dateTypeList.map((dateTypeItem: IDateTypeList) => {
            return (
              <div
                key={dateTypeItem.value}
                className={`item ${dateType === dateTypeItem.value && 'active-item'}`}
                onClick={() => onSelectType(dateTypeItem.value)}
              >
                {dateTypeItem.label}
              </div>
            )
          })}
      </div>
    )
  }

  return (
    <div className={styles['common-date-wrapper']}>
      {showTitle && <span className="title">{title}</span>}

      <div className="date">
        <div className="date-item" onClick={() => setVisible(true)}>
          {startDate && formatDate(startDate, dateTemplate)}
        </div>
        <div className="separate">{t`features_assets_financial_record_datetime_search_index_602`}</div>
        <div className="date-item" onClick={() => setVisible(true)}>
          {endDate && formatDate(endDate, dateTemplate)}
        </div>
      </div>

      {showDateType && onRenderDateType()}

      {visible && (
        <DatePickerModal
          visible={visible}
          dateTemplate={dateTemplate}
          startDate={startDate}
          endDate={endDate}
          onClose={() => setVisible(false)}
          max={showDateType && max}
          onCommit={params => {
            setVisible(false)
            onChange({ dateType: 0, startDate: params.startDate, endDate: params.endDate })
          }}
        />
      )}
    </div>
  )
}
export default CommonDatePicker
