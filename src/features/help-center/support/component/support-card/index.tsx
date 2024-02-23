import { t } from '@lingui/macro'
import { Image } from 'react-vant'
import { HelpCenterQuestionListHomePage } from '@/typings/api/help-center'
import styles from './index.module.css'

type SupportCardType = {
  data: Array<HelpCenterQuestionListHomePage>
  onChange?: (v: HelpCenterQuestionListHomePage) => void
  onMore?: () => void
}

const SupportCard = ({ data, onChange, onMore }: SupportCardType) => {
  const onCardChange = v => {
    onChange && onChange(v)
  }

  const onMoreChange = () => {
    onMore && onMore()
  }

  return (
    <div className={styles.scoped}>
      <div className="support-card-grid">
        {data?.map((v, i) => {
          return (
            <div key={v.id} onClick={() => onCardChange(v)} className="support-card-items">
              <Image src={v.logo} className="card-items-image" width={24} height={24} />
              <span className="card-items-text">{v.name}</span>
            </div>
          )
        })}
        {data.length >= 19 ? (
          <div className="support-card-items" onClick={onMoreChange}>
            <span className="card-items-text">{t`features_help_center_support_component_support_article_index_5101082`}</span>
          </div>
        ) : null}
      </div>
    </div>
  )
}
export default SupportCard
