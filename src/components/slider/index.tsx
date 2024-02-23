import { useDebounceFn } from 'ahooks'
import classnames from 'classnames'
import { useState } from 'react'
import { Slider as VantSlider, SliderProps } from 'react-vant'
import styles from './index.module.css'

type IPoint = number | { value: number; text: string }
export type ISliderProps = Omit<UnionToTuple<SliderProps>[0], 'onChange'> & {
  onChange?: (value: number) => void
  showTooltip?: boolean
  /** 要展示的点位，默认均匀分布 */
  points?: IPoint[]
  /** 隐藏中间的点位文字 */
  hideCenterPointText?: boolean
  /** 隐藏全部点位文字 */
  hidePointText?: boolean
  pointSuffix?: string
  tooltipBgColor?: string
}
/** Slider 的加强版 */
function Slider({
  className,
  min = 0,
  max = 100,
  value,
  activeColor = 'var(--brand_color)',
  tooltipBgColor,
  onChange,
  points,
  hideCenterPointText,
  hidePointText,
  pointSuffix = '',

  ...props
}: ISliderProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const { run: debounceSetFalse } = useDebounceFn(() => setShowTooltip(false), { wait: 100 })

  const onValueChange = (val: number) => {
    setShowTooltip(true)
    onChange?.(val)
    debounceSetFalse()
  }
  const button = (
    <div
      className="slider-button"
      style={{
        backgroundColor: activeColor,
      }}
    >
      <div className="slider-button-inner" />
    </div>
  )
  const distance = max - min

  return (
    <div
      className={classnames(
        styles['slider-plus-wrapper'],
        {
          // 解决原点会超出边界和其它元素对不齐的问题
          'at-start': value! === min,
          'at-end': value! === max,
          'has-points': !!points && !hidePointText,
        },
        className
      )}
      onTouchStart={() => setShowTooltip(true)}
      onTouchEnd={debounceSetFalse}
    >
      {!props.disabled && props.showTooltip && (
        <div
          className={classnames('tooltip', {
            show: showTooltip,
          })}
          style={{
            left: `calc(${value}%)`,
            backgroundColor: tooltipBgColor || activeColor,
          }}
        >
          <span className="scale-75">{value}%</span>
          <div
            className="tooltip-arrow"
            style={{
              borderTopColor: tooltipBgColor || activeColor,
            }}
          ></div>
        </div>
      )}
      <VantSlider
        button={button}
        min={min}
        max={max}
        activeColor={props.disabled ? 'var(--bg_button_disabled)' : activeColor}
        onChange={onValueChange as any}
        value={value as any}
        {...props}
      />
      {points && (
        <div className="slider-points">
          {points.map(point => {
            const pointValue = typeof point === 'number' ? point : point.value
            const pointText = typeof point === 'number' ? point : point.text
            return (
              <div
                key={pointValue}
                className={classnames('slider-point', {
                  'at-start': pointValue === min,
                  'at-end': pointValue === max,
                })}
                onClick={() => onValueChange(pointValue)}
                style={{
                  left: `calc(${((pointValue - min) / distance) * 100}%)`,
                  backgroundColor: props.disabled ? 'transparent' : pointValue <= value! ? activeColor : undefined,
                }}
              >
                {!hidePointText && (!hideCenterPointText || pointValue === min || pointValue === max) && (
                  <div className="slider-point-text">
                    {pointText}
                    {pointSuffix}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Slider
