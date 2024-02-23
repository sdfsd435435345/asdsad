import { useEffect, useState } from 'react'
import { CountDown } from 'react-vant'
import { t } from '@lingui/macro'
import styles from './index.module.css'

interface UserCountDownProps {
  /** 按钮文字 */
  buttonText?: string
  /** 时间格式 */
  format?: string
  /** 倒计时长 */
  time?: number
  /** 事件回调函数 */
  onSendValidateCode(): Promise<boolean>
  /** manually stop countdown */
  triggerStop?: boolean
}

interface CurrentTimeType {
  /** 剩余总时间，单位毫秒 */
  total: number
  /** 剩余天数	 */
  days: number
  /** 剩余小时	 */
  hours: number
  /** 剩余分钟	 */
  minutes: number
  /** 剩余秒数	 */
  seconds: number
  /** 剩余毫秒	 */
  milliseconds: number
}

function UserCountDown({ buttonText, format, time, onSendValidateCode, triggerStop }: UserCountDownProps) {
  const [start, setStart] = useState<boolean>(false)
  const [text, setText] = useState<string>(buttonText || t`user.components.count_down_01`)

  useEffect(() => {
    start && triggerStop && setStart(false)
  }, [triggerStop])

  const FormatContent = format => {
    switch (format) {
      case 'mm':
        return (timeData: CurrentTimeType) => <span className={styles.scoped}>{timeData.minutes}min</span>
      default:
        return (timeData: CurrentTimeType) => <span className={styles.scoped}>{timeData.seconds}s</span>
    }
  }

  const finish = () => {
    setStart(false)
    setText(t`user.components.count_down_02`)
  }

  const handleSendValidateCode = async () => {
    const isTrue = await onSendValidateCode()
    isTrue ? setStart(true) : setStart(false)
  }

  return (
    <>
      {start ? (
        <CountDown autoStart={start} onFinish={finish} format={format || 'ss'} time={time ? time * 1000 : 60 * 1000}>
          {FormatContent(format)}
        </CountDown>
      ) : (
        <label onClick={handleSendValidateCode}>{text}</label>
      )}
    </>
  )
}

export default UserCountDown
