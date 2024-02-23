import { getRecommendedCoins } from '@/apis/home'
import { YapiGetV1TradePairRecommendListData } from '@/typings/yapi/TradePairRecommendV1GetApi'
import { useEffect, useState } from 'react'

export default function useApiRecommendedCoins() {
  const [apiData, setapiData] = useState<YapiGetV1TradePairRecommendListData[]>()

  useEffect(() => {
    getRecommendedCoins({}).then(res => {
      setapiData(res.data?.list || [])
    })
  }, [])

  return apiData
}
