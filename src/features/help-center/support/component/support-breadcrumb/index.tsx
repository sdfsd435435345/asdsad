import { link } from '@/helper/link'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { HelpCenterSupportMenu } from '@/typings/api/help-center'
import styles from './index.module.css'

type SupportBreadcrumbType = {
  type: string
  data: Array<HelpCenterSupportMenu>
}

const SupportBreadcrumb = ({ data, type }: SupportBreadcrumbType) => {
  const onCrumbChange = v => {
    v?.path && link(v?.path)
  }

  return (
    <div className={styles.scoped}>
      <div className="support-breadcrumb-flex">
        <div className="breadcrumb-items" onClick={() => link(`${type === '1' ? '/support' : '/announcement'}`)}>
          <span className={`breadcrumb-text`}>
            {type === '1' ? t`user.personal_center_06` : t`features_help_center_support_search_index_5101078`}
          </span>
          {data?.length ? <Icon hasTheme name="breadcrumb_arrow" className="breadcrumb-icon" /> : null}
        </div>
        {data?.map((item, i) => {
          return (
            <div className="breadcrumb-items" key={item?.id} onClick={() => onCrumbChange(item)}>
              <span className={`breadcrumb-text ${data?.length - 1 === i ? 'last-breadcrumb' : ''}`}>{item?.name}</span>
              {data?.length - 1 === i ? null : <Icon hasTheme name="breadcrumb_arrow" className="breadcrumb-icon" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default SupportBreadcrumb
