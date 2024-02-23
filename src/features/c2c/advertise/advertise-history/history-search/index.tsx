/**
 * 广告记录 - 搜索框组件
 */
import { t } from '@lingui/macro'
import { useState } from 'react'
import { Input, Image } from 'react-vant'
import Icon from '@/components/icon'
import { IAdvertiseHistoryForm } from '@/typings/api/c2c/advertise/post-advertise'
import styles from './index.module.css'

interface HistorySearchProps {
  form: IAdvertiseHistoryForm
  onSelectCoin: () => void
  onChangeInput: (e: string) => void
  onSelect: (e) => void
}

function HistorySearch(props: HistorySearchProps) {
  const { form, onSelectCoin, onChangeInput, onSelect } = props || {}
  const [dressingVisible, setDressingVisible] = useState(false)

  return (
    <>
      <div className={styles['history-search-root']}>
        <div className="search-left">
          <div className="search-coin" onClick={onSelectCoin}>
            <Image src={form?.coin?.appLogo} width={16} height={16} round />
            <span className="coin-name">{form.coin?.coinName || '--'}</span>

            <Icon name="regsiter_icon_drop" hasTheme className="coin-drop" />
            <div className="line" />
          </div>

          <Input
            type="number"
            placeholder={t`features_trade_future_c2c_25101565`}
            value={form.amount}
            onChange={(val: string) => onChangeInput(val)}
          />
        </div>
        <Icon name="asset_record_filter" hasTheme className="search-icon" onClick={() => setDressingVisible(true)} />
      </div>
    </>
  )
}

export { HistorySearch }
