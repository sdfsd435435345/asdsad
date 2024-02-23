import { useState, useMemo } from 'react'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { IncreaseTag } from '@/nbit/react'
import { PullRefresh, Sticky } from 'react-vant'
import NavBar from '@/components/navbar'
import styles from './index.module.css'

type MarketChanges = {
  title: string
  text: string
  tagText: string
  time: string
  fixValue: number
  money: string
}

const MarketChanges = () => {
  const [marketList, setMarketList] = useState<Array<MarketChanges>>([])

  /** 下拉刷新时触发* */
  const onRefresh = async () => {}

  return (
    <div className={styles.scoped}>
      <Sticky>
        <NavBar
          title={t`features_market_market_quatation_market_changes_index_510201`}
          left={<Icon name="back" hasTheme />}
          right={<Icon name="share" hasTheme />}
        />
      </Sticky>
      <PullRefresh onRefresh={onRefresh}>
        {marketList.map((v, i) => (
          <div className="market-changes" key={i}>
            <div className="market-changes-left">
              <div className="changes-left-content">
                <span className="changes-left-tilte">{v.title}</span>
                <span className="changes-left-line">/</span>
                <span className="changes-left-text">{v.text}</span>
                <div className="changes-left-tag">{v.tagText}</div>
              </div>
              <div className="changes-left-footer">
                <div className="changes-left-time">{v.time}</div>
                <IncreaseTag hasPostfix value={v.fixValue} />
              </div>
            </div>
            <div className="market-changes-middle">
              <div className="changes-middle-title">{v.money}</div>
              <div className="changes-middle-text">{v.money}</div>
            </div>
            <div className="market-changes-right">
              <div className="changes-right-text">
                {t`features_market_market_quatation_market_changes_index_510202`}
                <Icon name="back" hasTheme className="back-icon" />
              </div>
            </div>
          </div>
        ))}
      </PullRefresh>
      <div className="market-changes-bottom">{t`features_market_market_quatation_market_changes_index_510203`}</div>
    </div>
  )
}
export default MarketChanges
