import { Selector } from 'react-vant'
import { SelectorProps, SelectorValue } from 'react-vant/es/selector/PropsType'
import { useEffect, useState } from 'react'
import styles from './index.module.css'

type TCommonSelectorProps<V extends SelectorValue> = {
  noEmptyOptions?: boolean
} & SelectorProps<V>

function CommonSelector<V extends SelectorValue>(props: TCommonSelectorProps<V>) {
  const { noEmptyOptions = true, onChange, defaultValue, value, ...rest } = props
  const [val, setval] = useState<SelectorValue[]>(defaultValue || [1])

  useEffect(() => value && setval(value), [value])

  if (noEmptyOptions)
    return (
      <Selector
        className={styles.scoped}
        onChange={(arr, extend) => {
          if (arr.length > 0) {
            setval(arr)
            onChange && onChange(arr as any, extend as any)
          } else onChange && onChange(val as any, extend as any)
        }}
        showCheckMark={false}
        value={val}
        {...rest}
      />
    )

  return <Selector className={styles.scoped} {...props} />
}

export default CommonSelector
