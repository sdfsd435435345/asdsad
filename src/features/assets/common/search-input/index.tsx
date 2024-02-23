/**
 * 资产 - 搜索组件
 */

import Icon from '@/components/icon'
import { Input } from 'react-vant'
import classNames from 'classnames'
import styles from '../common.module.css'

interface SearchInputProps {
  value: string
  placeholder: string
  onChange: (val: string) => void
  className?: string
  maxLength?: number
}

function SearchInput(props: SearchInputProps) {
  const { value = '', onChange, className } = props || {}
  return (
    <div className={classNames(styles['search-wrapper'], className)}>
      <Icon className="search-icon" name="search" hasTheme />
      <Input className="search-input" {...props} />
      {value && <Icon className="close-icon" name="del_input_box" hasTheme onClick={() => onChange('')} />}
    </div>
  )
}

export { SearchInput }
