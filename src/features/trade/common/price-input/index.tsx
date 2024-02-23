import { formatNumberDecimalWhenExceed, getPriceInput, IIsRound } from '@/helper/decimal'
import classnames from 'classnames'
import { Stepper, StepperProps } from 'react-vant'
import { forwardRef, useState } from 'react'
import Input, { IInputProps } from '@/components/input'
import { calcStepFromOffset } from '@/helper/trade'
import styles from './index.module.css'

const paddingSizeMap = {
  large: 'px-3',
  normal: 'px-2',
}

export type ITradePriceInput = Omit<StepperProps, 'onChange' | 'value'> & {
  onChange?: (value: string) => void
  /** 这里价格始终用字符串计算 */
  value: string
  digit?: number
  onlyInput?: boolean
  allowEmpty?: boolean
  inputProps?: IInputProps
  /** 是数字单位，不是圆角 */
  isRound?: IIsRound
  isWhite?: boolean
  paddingRightZero?: boolean
  paddingSize?: 'large' | 'normal'
  /** 标签，开启后将启用标签作为 placeholder，并聚焦时展示 label，仅适用于 onlyInput 模式 */
  label?: string
  currentValue?: number
}

function TradePriceInput(
  {
    className,
    placeholder,
    allowEmpty,
    digit = 4,
    value,
    inputProps = {},
    onChange,
    min = 0,
    max,
    isRound,
    isWhite,
    paddingSize = 'normal',
    paddingRightZero,
    label,
    currentValue,
    ...props
  }: ITradePriceInput,
  ref
) {
  const onValueChange = (val: string | number | null) => {
    onChange?.(
      getPriceInput({
        value,
        inputValue: val?.toString() || '',
        min,
        max,
        digit,
        isRound,
        currentValue,
      })
    )
  }

  if (props.onlyInput) {
    return (
      <Input
        type="number"
        ref={ref}
        isWhite={isWhite}
        paddingRightZero={paddingRightZero}
        paddingSize={paddingSize}
        className={classnames(className)}
        value={value}
        label={label}
        placeholder={placeholder}
        onChange={onValueChange}
        {...inputProps}
      />
    )
  }
  // 当前组件还无法将杠杆调整中的细节做到极致，不过现阶段已足够使用，若后期提出要优化再重自定义 Stepper 组件
  return (
    <div
      className={classnames(styles['price-input-wrapper'], className, {
        'is-white': isWhite,
      })}
    >
      <Stepper
        ref={ref as any}
        min={min}
        max={max}
        step={calcStepFromOffset(digit)}
        allowEmpty={allowEmpty}
        onChange={onValueChange}
        placeholder={placeholder}
        // 有 bug 不完善，先禁用了
        longPress={false}
        value={value === '' ? null : Number(value)}
        {...props}
      />
    </div>
  )
}

export default forwardRef(TradePriceInput)
