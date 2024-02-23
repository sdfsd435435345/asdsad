/**
 * 资产总览-币种列表/c2c列表头部
 */
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { SearchInput } from '@/features/assets/common/search-input'
import styles from './index.module.css'

interface ICoinListHeaderProps {
  /** 是否隐藏小额资产 */
  hideLess: boolean
  /** 搜索关键字 */
  searchKey: string
  /** 设置是否隐藏小额资产 */
  onChangeHideLess: (hideLess: boolean) => void
  /** 设置搜索关键字 */
  onChangeSearchKey: (searchKey: string) => void
}
function CoinListHeader(props: ICoinListHeaderProps) {
  const { hideLess, searchKey, onChangeHideLess, onChangeSearchKey } = props || {}

  return (
    <div className={`${styles['coin-list-header-root']} coin-list-header`}>
      <div className="hide-assets" onClick={() => onChangeHideLess(!hideLess)}>
        <Icon
          name={hideLess ? 'login_agreement_selected' : 'login_agreement_unselected'}
          className="hide-assets-icon"
          hasTheme={!hideLess}
        />
        <span>{t`assets.common.hide_less`}</span>
      </div>

      <SearchInput
        placeholder={t`assets.common.search_coin`}
        value={searchKey}
        onChange={onChangeSearchKey}
        className={'coin-list-search'}
      />
    </div>
  )
}
export { CoinListHeader }
