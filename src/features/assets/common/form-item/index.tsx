import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import styles from './index.module.css'

// 这里用 Form 组件不是很合适，所以简单自己封装一个
const FormItem: FC<{
  label: ReactNode
  left: ReactNode
  right?: ReactNode
  className?: string
  onClick?: () => void
  error?: ReactNode
}> = ({ label, left, right, onClick, className, error }) => {
  return (
    <div className={classNames(styles['form-item'], className)} onClick={onClick}>
      <label className="form-item__label">{label}</label>
      <div className="form-item__content">
        <div className="content-left">{left}</div>
        <div className="content-right">{right}</div>
      </div>
      <div className="error-msg">{error}</div>
    </div>
  )
}

export default FormItem
