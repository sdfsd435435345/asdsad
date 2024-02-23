import { Input } from 'react-vant'
import { useDebounce, useKeyPress } from 'ahooks'
import { useEffect, useState } from 'react'
import { C2cTradeAdDirectionEnum } from '@/constants/c2c/trade'
import { t } from '@lingui/macro'
import { formatCurrency } from '@/helper/decimal'
import { CoinSelect } from './coin-select'
import { C2cTradeFilters } from './filters'
import styles from './common.module.css'
import { useAllSellBalance, useTradeContext } from './trade-context'

export function C2cTradeSearch() {
  const [key, setKey] = useState('')
  const debounceKey = useDebounce(key, { wait: 500 })
  const { params, onParamsChange } = useTradeContext()

  useEffect(() => {
    onParamsChange({ amount: debounceKey })
  }, [debounceKey])
  const isBuy = params.advertDirectCds?.includes(C2cTradeAdDirectionEnum.buy)
  const sellBalance = useAllSellBalance()
  const buyPlaceholder = t({
    id: 'features_c2c_trade_search_7yvtz2n8jbkbjsrku-hrb',
    values: {
      0: `${params.currentCoin?.minTransQuantity || '0.00'} ${params.currentCoin?.coinName || ''}`,
    },
  })
  const sellPlaceholder = t({
    id: 'features_c2c_trade_search__7yrevnk6iseudhvcckko',
    values: {
      0: `${formatCurrency(sellBalance, params.currentCoin?.trade_precision)} ${params.currentCoin?.coinName || ''}`,
    },
  })
  const placeholder = isBuy ? buyPlaceholder : sellPlaceholder

  return (
    <div className={styles['search-all-wrapper']}>
      <div className="search-input-wrapper">
        <CoinSelect inTrade value={params} onChange={onParamsChange} />
        <div className="divide-line"></div>
        <Input
          type="number"
          value={key}
          onChange={setKey}
          className="bg-transparent flex-1"
          placeholder={placeholder}
        />
      </div>
      <C2cTradeFilters />
    </div>
  )
}
