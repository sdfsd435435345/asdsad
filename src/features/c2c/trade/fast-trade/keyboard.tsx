import Icon from '@/components/icon'
import LazyImage from '@/components/lazy-image'
import { oss_svg_image_domain_address } from '@/constants/oss'
import { formatNumberDecimalWhenExceed, getPriceInput, IIsRound } from '@/helper/decimal'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import Decimal from 'decimal.js'
import styles from './keyboard.module.css'

type IKeyboardProps = {
  value: string
  onChange: (value: string) => void
  max?: Decimal.Value
  min?: Decimal.Value
  digit: number
  isRound?: IIsRound
}

export function Keyboard({ min = 0, digit = 2, max, isRound, value, onChange }: IKeyboardProps) {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'del']
  const onValueChange = (val: string) => {
    onChange?.(
      getPriceInput({
        value,
        inputValue: val,
        min,
        max,
        digit,
        isRound,
      })
    )
  }
  const [activeKey, setActiveKey] = useState('' as string | number)
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveKey('')
    }, 150)
    return () => {
      clearTimeout(timer)
    }
  }, [activeKey])

  return (
    <div className={styles['keyboard-wrapper']}>
      {keys.map(key => {
        const onKeyClick = () => {
          setActiveKey(key)
          if (key === 'del') {
            onValueChange(value.slice(0, -1))
          } else {
            onValueChange(value + key)
          }
        }
        return (
          <div
            onClick={onKeyClick}
            key={key}
            className={classNames('key', {
              active: activeKey === key,
            })}
          >
            {key === 'del' ? (
              <LazyImage
                className="w-5"
                imageType=".png"
                src={`${oss_svg_image_domain_address}keyboard_backspace`}
                hasTheme
              />
            ) : (
              <span>{key}</span>
            )}
          </div>
        )
      })}
    </div>
  )
}
