import { useState } from 'react'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { link } from '@/helper/link'
import { marketSectorHandleHotData } from '@/helper/market/sector'
import SectorGainers from '@/features/market/market-quatation/market-sector/component/sector-gainers'
import SectorHotGainers from '@/features/market/market-quatation/market-sector/component/sector-hot-gainers'
import { MarketListRouteEnum } from '@/constants/market/market-list/market-module'
import useWsMarketSectorAllConceptList from '@/hooks/features/market/sector/use-ws-market-sector-all-concept-list'
import { Popover } from 'react-vant'
import styles from './index.module.css'
import { MarketListPullRefresh } from '../common/market-list/market-list-pull-refresh'

export default function () {
  const [gainersId, setGainersId] = useState<number>(0)
  const { resolvedData: sectorData, refresh } = useWsMarketSectorAllConceptList({ apiParams: {} })
  const hotData = marketSectorHandleHotData(sectorData)

  const boydButton = [
    { id: 0, text: t`features_market_market_quatation_market_sector_index_510147` },
    { id: 1, text: t`features_market_market_quatation_market_sector_index_510148` },
  ]

  const text = () => t`features_market_market_quatation_market_sector_index_i-kpq5a6lv4dvdeqtymvf`

  /** 点击热力图* */
  const onChangeTreeMap = v => {
    link(`${MarketListRouteEnum.sectorDetails}/${v.id}`)
  }

  /** 点击领涨跌板块 * */
  const onGainersChange = v => {
    link(`${MarketListRouteEnum.sectorDetails}/${v.id}`)
  }

  /** 更多板块 * */
  const onMore = () => {
    link(`${MarketListRouteEnum.sectorTable}`)
  }

  return (
    <div className={styles.scoped}>
      <MarketListPullRefresh onRefreshCallback={refresh}>
        <div className="market-sector">
          <div className="sector-header">
            <div className="header-top-left">
              <label>{t`features_market_market_quatation_market_sector_index_510149`}</label>
              <Popover
                className={styles['popover-tips']}
                placement="bottom-start"
                reference={<Icon name="msg" className="tip-icon" />}
              >
                <div className="tip-text">{text()}</div>
              </Popover>
            </div>
            <div
              className="more-text"
              onClick={onMore}
            >{t`features_market_market_quatation_market_sector_index_5101067`}</div>
          </div>
          <SectorHotGainers data={hotData} onChange={onChangeTreeMap} />
          <div className="sector-body">
            <div className="body-top">
              {boydButton.map(item => {
                return (
                  <div
                    key={item.id}
                    onClick={() => setGainersId(item.id)}
                    className={`${gainersId === item.id ? 'body-bg' : ''} body-text`}
                  >
                    {item.text}
                  </div>
                )
              })}
            </div>
            <div className="more-text" onClick={onMore}>
              <span>{t`features_market_market_quatation_market_sector_index_5101067`}</span>
            </div>
          </div>
          <SectorGainers statsId={gainersId} data={sectorData} onChange={onGainersChange} />
        </div>
      </MarketListPullRefresh>
    </div>
  )
}
