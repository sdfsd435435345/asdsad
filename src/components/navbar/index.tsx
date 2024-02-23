import classNames from 'classnames'
import { useEffect, FC, ReactNode } from 'react'
import { NavBar as VantNavBar } from 'react-vant'
import { link as navigate } from '@/helper/link'
import { getHistoryStack } from '@/helper/cache'
import { isApp } from '@/helper/is-app'
import { usePageContext } from '@/hooks/use-page-context'
import { JsbridgeCommandsEnum } from '@/constants/js-bridge'
import useJsbridge from '@/hooks/use-jsbridge'
import Icon from '../icon'
import styles from './index.module.css'

export type INavBarProps = {
  title: ReactNode
  transparent?: boolean
  right?: ReactNode
  left?: ReactNode
  iconUrl?: string
  onClickLeft?: () => void
  // 控制 app 左侧按钮返回逻辑
  onClickLeftApp?: () => void
  onClickRight?: () => void
  // 是否将 nav bar 的内容直接在 app 的 header 下展示
  isShowUnderAppNavBar?: boolean
  hasBottomBorder?: boolean
}

/** 导航栏组件，后期会兼容 App，先占位 */
const NavBar: FC<INavBarProps> = ({
  title,
  right,
  left,
  onClickLeft,
  onClickLeftApp,
  onClickRight,
  transparent = false,
  iconUrl,
  hasBottomBorder = false,
  isShowUnderAppNavBar = false,
}) => {
  const historyStack = getHistoryStack() || []
  const jsbridge = useJsbridge()
  const isInApp = isApp()

  const pageContext = usePageContext()

  // app 环境支持右侧图表和点击 callback
  useEffect(() => {
    if (!isInApp) return
    if (!jsbridge.value) {
      return
    }

    if (pageContext?.path === '/agent' || pageContext?.path?.substring(0, 7) === '/agent/') {
      if (jsbridge.value.call(JsbridgeCommandsEnum.isLogin)) {
        if (onClickRight) {
          jsbridge.value.register('rightClickCallback', onClickRight)
          jsbridge.value.call(JsbridgeCommandsEnum.bindRightButtonEvent, {
            iconUrl,
            callbackName: 'rightClickCallback',
          })
        }

        if (onClickLeftApp) {
          jsbridge.value.register('leftClickCallback', onClickLeftApp)
          jsbridge.value.call(JsbridgeCommandsEnum.bindLeftButtonEvent, {
            callbackName: 'leftClickCallback',
          })
        }
      }
    }

    // app 环境更新页面标题，如果没有提供，则重置为空
    if (typeof title !== 'string' || !title) title = ''
    jsbridge.value.call(JsbridgeCommandsEnum.changeTitle, title)
  }, [jsbridge.value, title])

  const onClickLeftHandle = () => {
    if (onClickLeft) {
      onClickLeft?.()
    } else {
      if (historyStack.length === 0) {
        navigate('/')
        return
      }
      history.back()
    }
  }

  // h5 环境
  if (!isInApp) {
    return (
      <div
        className={classNames(styles['navbar-wrapper'], {
          'is-transparent': transparent,
        })}
      >
        <VantNavBar
          border={hasBottomBorder}
          leftArrow={
            left !== undefined ? (
              left
            ) : (
              <div>
                <Icon hasTheme name="back" className="text-lg" />
              </div>
            )
          }
          rightText={right}
          className="vant-navbar"
          title={title}
          onClickLeft={onClickLeftHandle}
          onClickRight={onClickRight}
        />
      </div>
    )
  } else {
    // app 环境
    if (!isShowUnderAppNavBar) return null

    return (
      <div
        className={classNames(
          styles['navbar-wrapper'],
          {
            'is-transparent': transparent,
          },
          styles['navbar-wrapper-app']
        )}
      >
        {/* 不需要左侧返回按钮 和 右侧逻辑 */}
        <VantNavBar leftArrow={null} leftText={null} rightText={right} title={title} />
      </div>
    )
  }
}

export default NavBar
