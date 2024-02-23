import { Collapse, Image } from 'react-vant'
import { formatDate } from '@/helper/date'
import { CenterDateType } from '@/typings/api/help-center'
import styles from './index.module.css'

const CollapseItem = Collapse.Item

type SupportMenuType = {
  data: Array<any>
  initSubKey?: number | string
  initSubItemKey?: number | string
  onSubChange?: (v) => void
  onSubItemChange?: (v) => void
  onItemChange?: (v) => void
}

const SupportMenu = (props: SupportMenuType) => {
  const { data, onSubChange, onItemChange, initSubKey } = props

  const initialHandleMenu = (data, id, func) => {
    data.forEach(v => {
      if (v?.id === id) {
        func && func(v)
      } else {
        v.catalogVOList?.length && initialHandleMenu(v.catalogVOList, id, func)
      }
    })
  }

  /** 一级菜单点击* */
  const onCollapseChange = v => {
    initialHandleMenu(data, v, onSubChange)
  }

  /** 文章点击 * */
  const onArticleChange = v => {
    onItemChange && onItemChange(v)
  }

  return (
    <div className={styles.scoped}>
      <Collapse
        accordion
        border={false}
        key={initSubKey}
        initExpanded={initSubKey}
        onChange={onCollapseChange}
        className="support-collapse-swagger"
      >
        {data?.map(v => {
          return (
            <CollapseItem
              key={v.id}
              name={v.id}
              title={v.name}
              icon={v.logo ? <Image src={v.logo} lazyload={false} /> : null}
              className={`${initSubKey === v.id ? 'select-item' : ''} ${v.announcementTextVOList ? '' : 'hidden-icon'}`}
            >
              {v.announcementTextVOList?.map(item => {
                return (
                  <div key={item?.id} className="support-article-box" onClick={() => onArticleChange(item)}>
                    <div className="support-article-text">{item?.name}</div>
                    <div className="support-article-time">
                      {formatDate(item?.pushTimeStramp, CenterDateType.MonthData)}
                    </div>
                  </div>
                )
              })}
            </CollapseItem>
          )
        })}
      </Collapse>
    </div>
  )
}
export default SupportMenu
