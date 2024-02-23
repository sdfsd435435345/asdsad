import Icon from '@/components/icon'
import { useToolActions } from '@/hooks/features/home/toolbars'
import { useHomeStore } from '@/store/home'
import { t } from '@lingui/macro'
import { Toast } from 'react-vant'
import classNames from 'classnames'
import styles from './index.module.css'

function HeaderToolbar() {
  const { toolbarCurrentState, updateToolbarState, ToolbarStates, toggleMoreToolbar, userToolbarSnapshot } =
    useHomeStore()
  const { update } = useToolActions()
  return (
    <div className={styles.scoped}>
      <Icon
        className="cursor-pointer"
        name="back"
        hasTheme
        onClick={() => {
          updateToolbarState(ToolbarStates.Completed)
          toggleMoreToolbar()
        }}
      />
      <span>{t`features_home_more_toolbar_header_toolbar_index_510105`}</span>
      <span
        className={classNames(
          { invisible: toolbarCurrentState === ToolbarStates.Completed },
          'cursor-pointer',
          'text-brand_color'
        )}
        onClick={() => {
          try {
            update(userToolbarSnapshot)
            Toast.info({ message: t`features_home_more_toolbar_header_toolbar_index_5101331` })
          } catch (e) {
            Toast.info({
              message: t`features_market_market_quatation_common_market_favorites_editing_favorites_header_index_5101102`,
            })
          }
        }}
      >
        {t`assets.financial-record.complete`}
      </span>
    </div>
  )
}

export default HeaderToolbar
