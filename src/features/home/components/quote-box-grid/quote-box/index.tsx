import classNames from 'classnames'
import { formatTradePair, getQuoteDisplayName } from '@/helper/market'
import { RecommendedCoinsApiModel } from '@/typings/api/home/recommend'
import styles from './index.module.css'

export default QuoteBox

function QuoteBox(props: RecommendedCoinsApiModel) {
  return (
    <div className={classNames(styles.scoped)}>
      <div className="name-row">
        <span>{getQuoteDisplayName(props, true)}</span>
        <span className={'hg-wrapper h-full flex items-center'}>{formatTradePair(props).chg()}</span>
      </div>
      <div className="last">{formatTradePair(props).last()}</div>
      <div className="text-text_color_03 font-medium last-pref">≈{formatTradePair(props).lastByUserPreference()}</div>
    </div>
  )
}
