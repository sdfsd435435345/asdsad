import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { useUserStore } from '@/store/user'
import { useHomeStore } from '@/store/home'
import { t } from '@lingui/macro'
import { Grid } from 'react-vant'
import { useUserTools } from '@/hooks/features/home/toolbars'
import DraggableToolbar from '../draggable-toolbar'
import { ToolItem } from '../tools'
import styles from './index.module.css'

function UserToolbar() {
  const { toolbarCurrentState, ToolbarStates, updateToolbarState } = useHomeStore()
  const { isLogin } = useUserStore()
  const { userTools, apiStatus } = useUserTools()

  const renderGridItems = userTools.map((tool, index) => <ToolItem key={index} {...tool} hasText={false} />)

  return (
    <div>
      {toolbarCurrentState === ToolbarStates.Completed ? (
        <>
          <div className="text-text_color_01">{t`features_home_more_toolbar_user_toolbar_index_510106`}</div>
          <div className={styles.scoped}>
            <Grid border={false} columnNum={9}>
              {renderGridItems}
            </Grid>
            <Icon
              className="cursor-pointer"
              name="icon-redact"
              hasTheme
              onClick={() => {
                if (isLogin) updateToolbarState(ToolbarStates.Editable)
                else link('/login')
              }}
            />
          </div>
        </>
      ) : (
        <DraggableToolbar />
      )}
    </div>
  )
}

export default UserToolbar
