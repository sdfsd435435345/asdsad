import { rateFilter } from '@/helper/assets/spot'
import { useAssetsStore } from '@/store/assets/spot'
import { usePersonalCenterStore } from '@/store/user/personal-center'
import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'

// convert rate filter fn into a hook that will subscribe to dependencies changes
function useRateFilter(params) {
  const [rate, setrate] = useState(rateFilter(params))

  // dependencies
  const { coinRate: { coinRate = [], legalCurrencyRate = {} } = {} } = useAssetsStore().assetsModule
  const { currencySymbol, currencyEnName } = usePersonalCenterStore().fiatCurrencyData

  useEffect(() => {
    if (!isEmpty(coinRate) && currencySymbol && currencyEnName) setrate(rateFilter(params))
  }, [coinRate, currencySymbol, currencyEnName, params])

  return rate
}

export default useRateFilter
