/** 创建一个本地存储的状态管理，用于控制多个 popup 时的显示控制 */

import { useDelayInvisible } from '@/hooks/use-delay-visible'
import { ActionSheet, ActionSheetProps, Popup, PopupProps } from 'react-vant'
import { useSafeState } from 'ahooks'
import { useEffect, useState } from 'react'

const queue: {
  key: any
  onVisibleChange: (visible: boolean) => void
}[] = []

function useOnlyOneOverlayVisible(visible: boolean) {
  const [visibleKey] = useState(Math.random())
  const [innerVisible, setInnerVisible] = useState(false)
  function findIndex() {
    return queue.findIndex(v => visibleKey === v.key)
  }
  function setAnotherToVisible() {
    if (queue.length === 0) {
      return
    }
    const last = queue[queue.length - 1]
    last.onVisibleChange(true)
  }
  function remove() {
    const index = findIndex()
    if (index !== -1) {
      queue.splice(index, 1)
    }
  }

  useEffect(() => {
    // 如果可见，把所有其它置为不可见，并将其加入队列
    if (visible) {
      queue.forEach(v => {
        v.onVisibleChange(false)
      })
      setInnerVisible(true)
      queue.push({
        key: visibleKey,
        onVisibleChange: setInnerVisible,
      })
    } else {
      // 否则移除，并将上一个置为可见
      remove()
      setAnotherToVisible()
    }

    // 这同样适用于被销毁时
    return () => {
      remove()
      setAnotherToVisible()
    }
  }, [visible])

  return innerVisible
}
export function OnlyOnePopup({ visible, destroyOnClose, children, ...rest }: PopupProps) {
  const delayVisible = useDelayInvisible(visible || false)
  const innerVisible = useOnlyOneOverlayVisible(visible || false)
  return (
    <Popup visible={innerVisible && visible} {...rest}>
      {(!destroyOnClose || delayVisible) && children}
    </Popup>
  )
}
export function OnlyOneActionSheet({ visible, destroyOnClose, children, ...rest }: ActionSheetProps) {
  const innerVisible = useOnlyOneOverlayVisible(visible || false)
  return (
    <ActionSheet visible={innerVisible && visible} {...rest}>
      {(!destroyOnClose || visible) && children}
    </ActionSheet>
  )
}
