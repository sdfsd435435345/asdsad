import classNames from 'classnames'
import { useKeyPress, useDebounce } from 'ahooks'
import { useRef, useState } from 'react'
import styles from './index.module.css'
import Icon from '../icon'

export type ISearchProps = {
  value?: string
  className?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  placeholder?: string
}

function Search({ value, className, onChange, onSearch, placeholder }: ISearchProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  useKeyPress(
    'Enter',
    () => {
      onSearch?.(value || '')
    },
    {
      target: inputRef,
    }
  )
  const [focused, setFocused] = useState(false)
  // 避免失焦后点击事件无法触发
  const debounceFocused = useDebounce(focused, {
    wait: 200,
  })
  const clear = () => {
    onChange?.('')
  }

  return (
    <div className={classNames(styles['search-wrapper'], 'com-search', className)}>
      <Icon name="search" hasTheme className="search-icon" />
      <input
        ref={ref => {
          inputRef.current = ref
        }}
        value={value}
        onChange={e => {
          onChange?.(e.target.value)
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="input"
        placeholder={placeholder}
      />
      {debounceFocused && value && (
        <Icon onClick={clear} hiddenMarginTop name="del_input_box" hasTheme className="clear-icon" />
      )}
    </div>
  )
}

export default Search
