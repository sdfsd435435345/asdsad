/**
 * 广告单 - 主网列表展示组件
 */
import Icon from '@/components/icon'
import { IMainChainAddr } from '@/typings/api/c2c/advertise/post-advertise'
import { Popover } from 'react-vant'
import { useState } from 'react'
import styles from './index.module.css'

interface MainnetInfoProps {
  list?: IMainChainAddr[]
}

function MainnetInfo(props: MainnetInfoProps) {
  const { list = [] } = props || {}
  const [isMore, setIsMore] = useState(false)

  return (
    <div className={styles['mainnet-info-root']}>
      {list &&
        list.length > 0 &&
        list.map((mainItem: IMainChainAddr, i: number) => {
          if (i > 1) return
          return (
            <span key={i} className="main-item">
              {mainItem.name}
            </span>
          )
        })}

      {list && list.length > 2 && (
        <Popover
          className={styles['mainnet-info-popover-root']}
          placement="bottom-end"
          reference={
            <Icon name={isMore ? 'regsiter_icon_away' : 'regsiter_icon_drop'} hasTheme className="w-2 h-2 -mt-3" />
          }
          onOpen={() => setIsMore(true)}
          onClosed={() => setIsMore(false)}
        >
          {list.map((mainItem: IMainChainAddr, i: number) => {
            if (i < 2) return null
            return (
              <span key={i} className="popover-cell">
                {mainItem.name}
              </span>
            )
          })}
        </Popover>
      )}
    </div>
  )
}

export { MainnetInfo }
