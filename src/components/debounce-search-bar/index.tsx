import { useDebounceEffect, useMount } from 'ahooks'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { Input, SearchProps } from 'react-vant'
import Icon from '@/components/icon'
import { t } from '@lingui/macro'
import styles from './index.module.css'

// allow a-z A-Z 0-9 / only and max length 20
const defaultRegex = /^[a-zA-Z 0-9/]{0,20}$/

interface IDebounceSearchBarProps extends SearchProps {
  searchfn?: (value?: string | number) => void
  delay?: number
  toggleFocus?: (isFocused: boolean) => void
  onChange?: (value: any) => void
  /** 光标是否直接锁定输入栏 */
  focusOnLoad?: boolean
  placeholder?: string
  inputDisabled?: boolean
  inputValue?: any
  /** 是否限制特殊字符，使用默认 defaultRegex */
  skipSpecialCharacters?: boolean
  type?: 'text' | 'number'
  forcedShowAction?: boolean
}

export default DebounceSearchBar

/**
 * 自定义搜索栏组件
 */
function DebounceSearchBar(props: IDebounceSearchBarProps) {
  const {
    searchfn,
    delay = 500,
    toggleFocus,
    onChange,
    showAction = false,
    forcedShowAction = false,
    onCancel,
    inputDisabled = false,
    inputValue = '',
    skipSpecialCharacters = true,
    type,
  } = props
  const [value, setValue] = useState<string>(inputValue)
  const showActionButton = value && showAction
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    setValue(inputValue)
  }, [inputValue])

  useMount(() => {
    if (props.autoFocus) {
      inputRef.current?.focus()
    }
  })

  useDebounceEffect(
    () => {
      value && searchfn && searchfn(value)
      onChange && onChange(value)
    },
    [value],
    { wait: delay }
  )

  return (
    <div className={classNames(styles.scoped, 'common-search-bar')}>
      <span className="input-group">
        <span
          className="search-icon"
          onClick={() => {
            inputRef.current?.focus()
          }}
        >
          <Icon name="search" hasTheme />
        </span>

        <Input
          type={type}
          ref={inputRef as any}
          value={value}
          placeholder={props.placeholder || t`future.funding-history.search-future`}
          onChange={newValue => {
            if (!skipSpecialCharacters) {
              setValue(newValue)
              return
            }

            if (defaultRegex.test(newValue)) {
              setValue(newValue)
            }
          }}
          onFocus={() => {
            toggleFocus && toggleFocus(true)
          }}
          onBlur={() => {
            toggleFocus && toggleFocus(false)
          }}
          disabled={props.inputDisabled}
        />

        {value && (
          <span
            className="close-icon"
            onClick={() => {
              setValue('')
              onChange && onChange('')
              inputRef.current?.focus()
            }}
          >
            <Icon name="del_input_box" hasTheme />
          </span>
        )}
      </span>

      {(showActionButton || forcedShowAction) && (
        <span className="action-buttons">
          <span
            className="cancel-button"
            onClick={() => {
              setValue('')
              onCancel && onCancel()
              onChange && onChange('')
            }}
          >
            {t`assets.financial-record.cancel`}
          </span>
        </span>
      )}
    </div>
  )
}
