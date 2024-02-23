import { useState } from 'react'
import { HomeCommunityGroupsType } from '@/typings/api/community-groups'
import styles from './index.module.css'

type CommunityHeader = {
  data: Array<HomeCommunityGroupsType>
}

function CommunityHeader({ data }: CommunityHeader) {
  const [menuId, setMenuId] = useState<number>(-1)

  /** 点击菜单* */
  const onChangeMenu = id => {
    setMenuId(id)
    const boxMenu = document.querySelector(`#menu${id}`) as HTMLDivElement
    const top = boxMenu?.offsetTop
    const clientHeight = document.querySelector('#community-body') as HTMLDivElement
    const currentBox = document.body.scrollHeight - 206
    if (currentBox <= clientHeight?.offsetHeight) {
      document.documentElement.scrollTop = top - 116
    }
  }

  return (
    <div className={styles.scoped}>
      <div className="community-groups-container">
        <div className="community-groups-menu">
          <div className="groups-flex-container">
            <div className="groups-flex-menu">
              {data?.map((item, index) => {
                return (
                  <div key={index} className="flex-menu-container" onClick={() => onChangeMenu(index)}>
                    <div className={`menu-container-text ${menuId === index ? 'container-text-selected' : ''}`}>
                      {item.groupName}
                    </div>
                    {menuId === index ? <div className="menu-container-footer" /> : null}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CommunityHeader
