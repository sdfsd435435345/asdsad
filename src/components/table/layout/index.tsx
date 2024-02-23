import { MarketListPullRefresh } from '@/features/market/market-quatation/common/market-list/market-list-pull-refresh'
import classNames from 'classnames'
import styles from './index.module.css'

function TableLayout({ data, children, tableRef }) {
  return (
    <div ref={tableRef} className={classNames(styles.scoped, 'table-layout-wrapper')}>
      {data.onPullRefresh ? (
        <MarketListPullRefresh
          onRefreshCallback={() => {
            if (data.onPullRefresh) {
              data.onPullRefresh()
            }
          }}
        >
          {children}
        </MarketListPullRefresh>
      ) : (
        children
      )}
    </div>
  )
}

export default TableLayout
