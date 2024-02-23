import { queryTradeNotifications } from '@/apis/trade'
import Icon from '@/components/icon'
import { formatDate } from '@/helper/date'
import { ITradeNotification } from '@/typings/api/trade'
import { Divider } from 'react-vant'
import { useEffect, useState } from 'react'
import { link } from '@/helper/link'
import { t } from '@lingui/macro'
import { isEmpty } from 'lodash'
import styles from './index.module.css'

function AnnouncementListItem(props: ITradeNotification) {
  return (
    <div
      className="announcement-list-item"
      onClick={() => link(`/announcement/article/${props.id}?subMenuId=${props.parentId}`)}
    >
      <div className="text-sm truncate">{props.name}</div>
      <div className="text-xs text-text_color_02">{formatDate(props.pushTime)}</div>
    </div>
  )
}

function AnnouncementList() {
  const [notices, setnotices] = useState<ITradeNotification[]>([])
  useEffect(() => {
    queryTradeNotifications({
      operateType: 1,
      symbol: '',
      coindIdList: [],
    }).then(res => {
      setnotices(res?.data?.lampList || [])
    })
  }, [])

  if (isEmpty(notices)) return <></>

  return (
    <div className={styles.scoped}>
      <div className="announcement-list-header">
        <span className="text-base font-medium">{t`features_home_components_announcement_list_index_26uperfbjs`}</span>
        <Icon onClick={() => link('/announcement')} className="text-xs" name="next_arrow" hasTheme />
      </div>
      <Divider className="my-0" />
      {notices.map((notice, index) => (
        <AnnouncementListItem key={index} {...notice} />
      ))}
    </div>
  )
}

export default AnnouncementList
