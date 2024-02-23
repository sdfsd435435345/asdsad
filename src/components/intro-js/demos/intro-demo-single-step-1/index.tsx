import { IntroSteps } from '@/components/intro-js/intro-steps'
import Table from '@/components/table'
import { OSSDOMAIN_IMAGE } from '@/constants/assets'
import { getMarketListTableColumns } from '@/features/market/market-quatation/common/table-columns'
import { onTradePairClickRedirectCommon } from '@/helper/market'
import useWsMarketTradePairList from '@/hooks/features/market/market-list/use-ws-market-trade-pair-list'
import { useMarketListStore } from '@/store/market/market-list'
import { t } from '@lingui/macro'
import { Image } from 'react-vant'
import { Step } from 'intro.js-react'
import { isEmpty } from 'lodash'
import { useState } from 'react'
import styles from './index.module.css'

export function Steps({ apiStatus, data }) {
  const [stepEnabled, setStepEnabled] = useState(true)

  const steps: Step[] = [
    {
      element: `table > tbody > tr:nth-child(1)`,
      intro: '',
    },
  ]

  if (isEmpty(data)) return null

  return (
    <>
      <div className={`${styles['tooltip-content-wrapper']}`}>
        {stepEnabled && (
          <div className="wrapper">
            <div className="arrow-content">
              <Image src={`${OSSDOMAIN_IMAGE}withdrawal_address_list_arrow.svg`} lazyload width={94} height={23} />
              <Image
                src={`${OSSDOMAIN_IMAGE}withdrawal_address_list_guide.svg`}
                lazyload
                width={26}
                height={34}
                className="mt-1 ml-8"
              />
            </div>

            <div className="hint-text">{t`features_assets_futures_futures_details_margin_operate_guide_index_5101464`}</div>
            <div
              className="bottom-btn"
              onClick={() => {
                setStepEnabled(false)
              }}
            >
              {t`features_trade_common_notification_index_5101066`}
            </div>
          </div>
        )}
      </div>

      <IntroSteps
        steps={steps}
        stepEnabled={stepEnabled}
        onExit={() => {
          setStepEnabled(false)
        }}
        tooltipClassCustom={styles['introjs-tooltip-custom']}
        onStartCallback={() => {}}
        options={{
          showButtons: false,
          showBullets: false,
          showProgress: false,
        }}
      />
    </>
  )
}

export function IntroDemoSignleStep() {
  const store = useMarketListStore().spotMarketsModule
  const buyCoinId = store.selectedBaseCurrencyFilter
  const conceptId = store.selectedCategroyFilter

  const {
    resolvedData: data,
    setApiData: setData,
    refresh,
    apiStatus,
  } = useWsMarketTradePairList({ apiParams: { buyCoinId, conceptId }, sorter: store.currentSorter })

  return (
    <>
      {<Steps apiStatus={apiStatus} data={data} />}

      <Table
        data={data}
        setData={setData}
        apiStatus={apiStatus}
        sortable
        setSorter={store.setTableSorter}
        defaultSorter={store.currentSorter}
        columns={getMarketListTableColumns()}
        onRowClick={item => {
          onTradePairClickRedirectCommon(item, 'kline')
        }}
        onPullRefresh={refresh}
      />
    </>
  )
}
