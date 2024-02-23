import { IntroSteps } from '@/components/intro-js/intro-steps'
import Table from '@/components/table'
import { getMarketListTableColumns } from '@/features/market/market-quatation/common/table-columns'
import { onTradePairClickRedirectCommon } from '@/helper/market'
import useWsMarketTradePairList from '@/hooks/features/market/market-list/use-ws-market-trade-pair-list'
import { useMarketListStore } from '@/store/market/market-list'
import { Step } from 'intro.js-react'
import { isEmpty } from 'lodash'
import styles from './index.module.css'

function Steps({ data }) {
  const steps: Step[] = [
    {
      element: `td:nth-child(1)`,
      intro: <div>1</div>,
    },
    {
      element: `tr:nth-child(2) > td:nth-child(2)`,
      intro: <div>2</div>,
    },
    {
      element: `tr:nth-child(4) > td:nth-child(2)`,
      intro: <div>3</div>,
    },
  ]

  if (isEmpty(data)) return null

  return (
    <IntroSteps
      steps={steps}
      stepEnabled
      onExit={() => {}}
      tooltipClassCustom={styles['introjs-tooltip-custom']}
      onStartCallback={() => {}}
      options={{
        showButtons: true,
        showBullets: true,
        showProgress: true,
      }}
    />
  )
}

export function IntroDemoMultiSteps() {
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
      {<Steps data={data} />}

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
