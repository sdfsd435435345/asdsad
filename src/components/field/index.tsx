import { defaultFilterChinese, defaultFilterEmoji } from '@/helper/filters'
import { FieldInstance, Field as FieldVant } from 'react-vant'
import { useUpdateEffect } from 'ahooks'
import { ComponentProps, Ref, forwardRef, useEffect, useState } from 'react'

export type TField = ComponentProps<typeof FieldVant> & {
  // 是否过滤表情字符 - boolean | function
  filterEmoji?: ((val: string) => string) | boolean
  // 是否过滤中文字符 - boolean | function
  filterChinese?: ((val: string) => string) | boolean
  // 过滤自定义内容 - function
  filterCustom?: (val: string) => string
}

export const Field = forwardRef(
  ({ filterEmoji = true, filterChinese = false, filterCustom, onChange, ...rest }: TField, ref: Ref<FieldInstance>) => {
    const [inputVal, setinputVal] = useState<TField['value']>(rest?.value)

    const filterVal = v => {
      let value = v
      if (filterEmoji) {
        if (typeof filterEmoji === 'function') {
          value = filterEmoji(value)
        } else {
          value = defaultFilterEmoji(value)
        }
      }

      if (filterChinese) {
        if (typeof filterChinese === 'function') {
          value = filterChinese(value)
        } else {
          value = defaultFilterChinese(value)
        }
      }

      if (filterCustom) value = filterCustom(value)

      return value
    }

    useUpdateEffect(() => {
      onChange && inputVal && onChange(inputVal)
    }, [inputVal])

    useEffect(() => {
      rest?.value && setinputVal(rest.value)
    }, [rest?.value])

    return (
      <FieldVant
        ref={ref}
        {...rest}
        onChange={v => {
          const sanitised = filterVal(v)
          setinputVal(sanitised)
        }}
        value={inputVal}
      />
    )
  }
)
