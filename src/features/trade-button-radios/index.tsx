import classNames from 'classnames'
import styles from './index.module.css'

/** 预设的一些类名 */
export const TradeButtonRadiosPresetClassNames = {
  active: {
    brand: 'text-xs text-brand_color bg-brand_color_special_02 border border-solid border-brand_color',
  },
  inActive: {
    sr: 'bg-bg_sr_color text-text_color_03 text-xs border border-solid border-bg_sr_color',
    sr1: 'bg-bg_sr_color text-xs border border-solid border-bg_sr_color',
  },
  spotActive: {
    brand: 'bg-bg_sr_color text-text_color_01 font-medium text-xs border border-solid border-bg_sr_color',
  },
  spotInActive: {
    sr: 'text-text_color_02 text-xs border border-solid border-transparent font-medium',
    sr1: 'bg-bg_sr_color text-xs border border-solid border-bg_sr_color',
  },
}

export type ITradeButtonRadiosProps<T> = {
  value: T
  options: {
    value: T
    label: string
  }[]
  onChange: (value: T) => void
  onClickItem?: (value: T) => void
  activeClassName?: string
  inactiveClassName?: string
  /** 是否有间隙 */
  hasGap?: boolean
  gapSize?: 'sm' | 'xs'
  bothClassName?: string
  cancelable?: boolean
  showLabellength?: boolean
}

/** 按钮式单选 */
function TradeButtonRadios<
  T extends {
    toString(): string
  }
>({
  value,
  hasGap = false,
  options,
  bothClassName = '',
  inactiveClassName,
  onChange,
  onClickItem,
  activeClassName,
  gapSize = 'xs',
  cancelable,
  showLabellength,
}: ITradeButtonRadiosProps<T>) {
  return (
    <div
      className={classNames(styles['trade-button-radios'], `gap-${gapSize}`, {
        'has-gap': hasGap,
      })}
    >
      {options.map(option => {
        return (
          <div
            key={option.value?.toString()}
            onClick={() => {
              onClickItem?.(option.value)
              if (value === option.value) {
                if (cancelable) {
                  onChange('' as any)
                }
                return
              }
              onChange(option.value)
            }}
            className={classNames(
              'radio-item',
              bothClassName,
              value === option.value ? activeClassName : inactiveClassName
            )}
          >
            {option.label}
          </div>
        )
      })}
    </div>
  )
}

export default TradeButtonRadios
