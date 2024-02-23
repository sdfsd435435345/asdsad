import { Search } from 'react-vant'
import Icon from '@/components/icon'
import { useRef, useState, useEffect } from 'react'
import styles from './index.module.css'

interface HelpCenterHeaderProps {
  placeholder?: string
  searchData?: string
  /** 展现搜索框或者标题 */
  searchName?: string
  /** 搜索回调函数 */
  onSearch?(value: string): void
}

function HelpCenterHeader({ onSearch, searchData, placeholder }: HelpCenterHeaderProps) {
  const searchRef = useRef<HTMLDivElement>(null)
  const [searchValue, setSearchValue] = useState<string>('')

  const handleSearch = () => {
    onSearch && onSearch(searchValue)
  }

  useEffect(() => {
    if (searchData) {
      setSearchValue(searchData)
    }
  }, [searchData])

  useEffect(() => {
    if (searchRef?.current) {
      const input = searchRef?.current.getElementsByTagName('input')
      input[0]?.setAttribute('enterkeyhint', 'search')
    }
  }, [])

  return (
    <div className={styles['help-center-header']}>
      <div ref={searchRef}>
        <Search
          shape="round"
          value={searchValue}
          onSearch={handleSearch}
          onChange={setSearchValue}
          placeholder={placeholder}
          leftIcon={<Icon name="search" hasTheme />}
        />
      </div>
    </div>
  )
}

export default HelpCenterHeader
