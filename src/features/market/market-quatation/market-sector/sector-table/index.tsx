import { useEffect, useRef, useState } from 'react'
import { t } from '@lingui/macro'
import { link } from '@/helper/link'
import Icon from '@/components/icon'
import Table from '@/components/table'
import NavBar from '@/components/navbar'
import { Sticky } from 'react-vant'
import { MarketListRouteEnum } from '@/constants/market/market-list/market-module'
import useWsMarketSectorAllConceptList from '@/hooks/features/market/sector/use-ws-market-sector-all-concept-list'
import { chgTableSorter } from '@/constants/market/market-list'
import commonStyles from '@/features/market/market-quatation/index.module.css'
import { getSectorTableColumn } from '../../common/table-columns'
import styles from './index.module.css'

const text = () => t`features_market_market_quatation_market_sector_index_5101092`

export default function () {
  const [isTip, setIsTip] = useState<boolean>(false)
  const {
    resolvedData: sectorData,
    setResolvedData: setData,
    apiStatus,
    refresh,
  } = useWsMarketSectorAllConceptList({ apiParams: {} })

  const onChangeRow = v => {
    link(`${MarketListRouteEnum.sectorDetails}/${v.id}`)
  }

  const tipRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const closeTip = event => {
      if (tipRef.current && !tipRef.current.contains(event.target)) setIsTip(false)
    }
    isTip && document.addEventListener('click', closeTip)

    document.addEventListener('click', closeTip)
    return () => {
      document.removeEventListener('click', closeTip)
    }
  }, [tipRef])

  return (
    <div className={styles.scoped}>
      <Sticky>
        <NavBar
          title={t`features_market_market_quatation_market_sector_sector_table_index_5101069`}
          left={<Icon name="back" hasTheme />}
          right={
            <div className="tip-context" ref={tipRef}>
              <Icon name="msg" className="tip-icon" onClick={() => setIsTip(!isTip)} />
            </div>
          }
        />
        {isTip ? <div className="tip-text">{text()}</div> : null}
      </Sticky>
      <div className={`${commonStyles['market-table-common']} sector-table`}>
        <Table
          data={sectorData}
          setData={setData}
          columns={getSectorTableColumn()}
          sortable
          defaultSorter={chgTableSorter}
          onRowClick={onChangeRow}
          onPullRefresh={refresh}
          apiStatus={apiStatus}
        />
      </div>
    </div>
  )
}
