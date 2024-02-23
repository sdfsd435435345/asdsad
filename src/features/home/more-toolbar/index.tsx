import { useHomeStore } from '@/store/home'
import classNames from 'classnames'
import { Card, Divider, NoticeBar, Popup } from 'react-vant'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import HeaderToolbar from './header-toolbar'
import ToolbarsTab from './toolbars-tab'
import UserToolbar from './user-toolbar'
import styles from './index.module.css'

function MoreToolbar() {
  const { isOpen, toolbarCurrentState, ToolbarStates } = useHomeStore()
  return (
    <div>
      {isOpen && (
        <Popup visible className={styles.scoped} position="right">
          <HeaderToolbar />
          <NoticeBar
            className={classNames({ hidden: toolbarCurrentState === ToolbarStates.Completed })}
            wrapable
            text={t`features_home_more_toolbar_index_510107`}
            leftIcon={<Icon name="msg" />}
          />
          <Card className="mx-4">
            <UserToolbar />
          </Card>
          <Divider className="h-1" />
          <Card className="mx-4 rounded-lg">
            <ToolbarsTab />
          </Card>
        </Popup>
      )}
    </div>
  )
}

export default MoreToolbar
