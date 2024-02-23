/**
 * 资产划转 - 选择币种
 */
import { NavBar, Popup } from 'react-vant'
import { useState } from 'react'
import CommonList from '@/components/common-list/list'
import LazyImage from '@/components/lazy-image'
import styles from './index.module.css'
import { SearchInput } from '../../common/search-input'

interface ICoinSelectorProps {
  visible: boolean
  onClose: () => void
}

function CoinSelector(props: ICoinSelectorProps) {
  const { visible, onClose } = props || {}
  const [searchText, setSearchText] = useState('')
  const data = [1, 2, 3]

  return (
    <Popup
      lockScroll
      destroyOnClose
      closeOnPopstate
      safeAreaInsetBottom
      visible={visible}
      className={styles['coin-selector-root']}
    >
      <NavBar title="选择币种" onClickLeft={onClose} />
      <SearchInput value={searchText} placeholder="搜索" onChange={e => setSearchText(e)} />

      <CommonList
        finished
        showEmpty={data.length === 0}
        finishedText={''}
        listChildren={data.map(item => {
          return (
            <div className="list-cell" key={item}>
              <LazyImage src="" width={22} height={22} />
              <span className="name">BTC</span>
            </div>
          )
        })}
      />
    </Popup>
  )
}

export { CoinSelector }
