import classNames from 'classnames'
import { FC } from 'react'
import styles from './index.module.css'

type IValueType = string | number

export type IRadioButtonGroupProps = {
  options: {
    label: string
    value: IValueType
    [key: string]: any
  }[]
  onChange: (value: IValueType) => void
  value?: IValueType
  size?: 'large'
}

const RadioButtonGroup: FC<IRadioButtonGroupProps> = ({ options, size, value, onChange }) => {
  return (
    <div className={styles['radio-button-wrapper']}>
      {options.map(option => {
        const isSelected = value === option.value
        const onClick = () => {
          if (isSelected) {
            return
          }
          onChange(option.value)
        }

        return (
          <div
            key={option.value}
            onClick={onClick}
            className={classNames('button', `size-${size}`, {
              'is-selected': isSelected,
            })}
          >
            {option.label}
          </div>
        )
      })}
    </div>
  )
}

export default RadioButtonGroup
