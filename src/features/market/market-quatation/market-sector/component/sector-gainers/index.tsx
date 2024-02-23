import { useEffect, useState } from 'react'
import { t } from '@lingui/macro'
import Icon from '@/components/icon'
import { MarketSectorType } from '@/typings/api/sector'
import { formatTradePair } from '@/helper/market'
import styles from './index.module.css'

type SectorGainersType = {
  statsId: number
  data: Array<MarketSectorType>
  onChange?: (v: MarketSectorType) => void
}

function SectorGainers({ statsId, data, onChange }: SectorGainersType) {
  const [gainersList, setGainersList] = useState<Array<MarketSectorType>>([])

  useEffect(() => {
    if (data?.length) {
      const gainerData = (data || []).slice().sort((a, b) => {
        if (statsId) {
          // 领跌
          return Number(a.chg) - Number(b.chg)
        } else {
          // 领涨
          return Number(b.chg) - Number(a.chg)
        }
      })
      const newGainersData = gainerData?.slice(0, 9)
      setGainersList(newGainersData)
    }
  }, [statsId, data])

  const onChangeSector = v => {
    onChange && onChange(v)
  }

  return (
    <div className={styles.scoped}>
      {gainersList.length > 0 ? (
        <div className="gainers-grid">
          {gainersList.map(item => {
            return (
              <div key={item?.id} className="grid-item" onClick={() => onChangeSector(item)}>
                <div className="grid-item-text">{item?.name}</div>
                <div className="chg-value">{formatTradePair(item).chg()}</div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="no-result">
          <div className="icon">
            <Icon name="no_data" hasTheme isRemoteUrl />
          </div>
          <div className="text">
            <label>{t`features_orders_order_detail_510288`}</label>
          </div>
        </div>
      )}
    </div>
  )
}
export default SectorGainers
