import Link from '@/components/link'
import LazyImage from '@/components/lazy-image'
import { HomeCommunityGroupsType } from '@/typings/api/community-groups'
import styles from './index.module.css'

type CommunityMenuType = {
  data: HomeCommunityGroupsType
}

function CommunityMenu({ data }: CommunityMenuType) {
  return (
    <div className={styles.scoped}>
      <div className="community-menu-title">
        <LazyImage src={data?.imgIcon} className="menu-title-icon" />
        <div className="menu-title-text">{data?.groupName}</div>
      </div>
      {data?.detailList?.length ? (
        <div className="community-menu-container">
          {data?.detailList?.map((item, index) => {
            return (
              <div key={index} className="menu-container-item">
                <Link href={item?.linkUrl}>
                  <div className="container-item-box">{item?.groupName}</div>
                </Link>
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
export default CommunityMenu
