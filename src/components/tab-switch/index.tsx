import cn from 'classnames'
import React, { useState } from 'react'
import styles from './index.module.css'

export default TabSwitch

interface OrderItem {
  id: number | string
  title: string
  onCallBack?: () => void // 回调函数，比如点击 tab 发生跳转行为
  cpn?: React.ReactNode // 当前 tab 的内容
}

interface Props {
  tabList: Array<OrderItem>
  defaultId: number | string
  onTabChangeCallback?: (id?: number | string) => void
}

function TabSwitch({ tabList, defaultId, onTabChangeCallback }: Props) {
  const [currentId, setCurrentId] = useState(defaultId || tabList[0].id)

  const onTabChange = item => {
    setCurrentId(item.id)
    item.onCallBack && item.onCallBack()
    onTabChangeCallback && onTabChangeCallback(item.id)
  }

  return (
    <div className={cn(styles.scoped)}>
      <div className="tab-list">
        {tabList.map(item => (
          <div
            key={item.id}
            onClick={() => {
              onTabChange(item)
            }}
            className={cn(`tab-item`, {
              'active': currentId === item.id,
              'w-1/2': tabList.length === 2,
            })}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabList.map(item => {
          if (!item.cpn || item.id !== currentId) return
          return <div key={item.id}>{item.cpn}</div>
        })}
      </div>
    </div>
  )
}
