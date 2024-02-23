import { Input } from 'react-vant'
import { useDebounce, useKeyPress } from 'ahooks'
import { useEffect, useState } from 'react'
import { t } from '@lingui/macro'
import { C2cOrderStatusEnum } from '@/constants/c2c/order'
import { CoinSelect } from '../trade/coin-select'
import { C2cOrderFilters } from './filters'
import styles from './common.module.css'
import { useOrderContext } from './order-context'

export function C2cTradeSearch() {
  const [key, setKey] = useState('')
  const debounceKey = useDebounce(key, { wait: 500 })
  const { params, onParamsChange } = useOrderContext()

  useEffect(() => {
    onParamsChange({ key: debounceKey })
  }, [debounceKey])

  return (
    <div className={styles['search-all-wrapper']}>
      <div className="search-input-wrapper">
        <CoinSelect
          isAllCoin
          value={{
            ...params,
            areaId: params.tradeAreas as any,
            orderStatus: {
              // 数字写死即可
              [C2cOrderStatusEnum.unFinished]: 2,
              [C2cOrderStatusEnum.finished]: 3,
              [C2cOrderStatusEnum.canceled]: 4,
            }[params.statusTab],
          }}
          onChange={onParamsChange}
        />
        <div className="divide-line"></div>
        {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
        <Input
          value={key}
          onChange={setKey}
          className="bg-transparent flex-1"
          placeholder={t`features_c2c_order_search_2vmc2ur19ntpb1bijskxc`}
        />
      </div>
      <C2cOrderFilters />
    </div>
  )
}
