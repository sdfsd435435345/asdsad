import classnames from 'classnames'
import { Input as VantInput, InputProps } from 'react-vant'
import { forwardRef, useState } from 'react'
import styles from './index.module.css'

const paddingSizeMap = {
  large: 'px-3',
  normal: 'px-2',
}

export type IInputProps = InputProps & {
  /** 标签，开启后将启用标签作为 placeholder ，并聚焦时展示 label，仅适用于 onlyInput 模式 */
  label?: string
  /** 白色背景 */
  isWhite?: boolean
  paddingRightZero?: boolean
  paddingSize?: 'large' | 'normal'
  /**  聚焦与否不会发生变化 */
  noFocus?: boolean
  noBorder?: boolean
}

function Input(
  { className, noBorder, noFocus, isWhite, label, paddingSize = 'normal', paddingRightZero, ...props }: IInputProps,
  ref
) {
  const [focused, setFocused] = useState(false)
  const onFocus = e => {
    setFocused(true)
    props?.onFocus?.(e)
  }
  const onBlur = e => {
    setFocused(false)
    props?.onBlur?.(e)
  }
  return (
    <div
      className={classnames(className, paddingSizeMap[paddingSize], styles['only-input-wrapper'], {
        'rv-hairline--surround': !noBorder,
        'is-white': isWhite,
        'disabled': props.disabled,
        '!pr-0': paddingRightZero,
        'with-label': label,
        'is-focused': !noFocus && focused,
        'has-value': props.value,
      })}
    >
      {label && <div className={classnames('label')}>{label}</div>}
      <VantInput
        type="number"
        ref={ref}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
        placeholder={label || props.placeholder}
      />
    </div>
  )
}

export default forwardRef(Input)
