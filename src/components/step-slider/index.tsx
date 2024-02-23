import cn from 'classnames'
import styles from './index.module.css'

export type IStepSliderProps = {
  steps?: number[]
  value: number
  onChange?: (v: number) => void
}

/** 步进式的滚动条 */
function StepSlider({ value, steps = [25, 50, 75, 100], onChange }: IStepSliderProps) {
  const onChangeValue = (item: number) => {
    /** 若和上次选择一样 说明是要取消选择 */
    const result = value === item ? 0 : item
    onChange?.(result)
  }
  return (
    <div className={cn(styles.scoped)}>
      {steps.map(item => (
        <div
          key={item}
          className={cn('slider-item')}
          onClick={() => {
            onChangeValue(item)
          }}
        >
          <div
            className={cn('slider-item-inner', {
              light: item <= value, // 小于等于当前的值就点亮
            })}
          ></div>
          <span
            className={cn('slider-text', {
              active: item === value, // 小于等于当前的值就点亮
            })}
          >
            {item}%
          </span>
        </div>
      ))}
    </div>
  )
}

export default StepSlider
