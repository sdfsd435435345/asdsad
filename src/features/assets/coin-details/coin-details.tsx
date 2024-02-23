/**
 * 资产 - 币种详情页面组件
 */
import { t } from '@lingui/macro'
import { useEffect, useState } from 'react'
import { Toast } from 'react-vant'
import { CoinActions, CoinOverview } from '@/features/assets/coin-details/overview'
import { CoinTrade, CoinTradeRecords } from '@/features/assets/coin-details/trade'
import { usePageContext } from '@/hooks/use-page-context'
import { getTradeList, postCoinDetail } from '@/apis/assets/coin'
import {
  AssetsCoinDetailResp,
  AssetsTradeListResp,
  TradeListPerpetualResp,
  TradeListSpotResp,
} from '@/typings/api/assets/assets'
import { getCoinPrecision } from '@/helper/assets/spot'
import { useAssetsStore } from '@/store/assets/spot'
import { useMount, useUpdateEffect } from 'ahooks'
import { requestWithLoading } from '@/helper/order'
import LazyImage from '@/components/lazy-image'
import NavBar from '@/components/navbar'
import { useCommonStore } from '@/store/common'
import {
  useWsFuturesMarketTradePairRealTime,
  useWsSpotMarketTradePairRealTime,
} from '@/hooks/features/market/common/market-ws/use-ws-market-trade-pair'
import { getV1C2cBalanceFastPayDetailApiRequest } from '@/apis/assets/c2c'
import styles from './coin-details.module.css'

// 交易列表类型
export enum TradeListTypeEnum {
  // 现货
  spot = 'spot',
  // 永续合约
  perpetual = 'perpetual',
}

export function CoinDetailsLayout() {
  // 资产数据字典
  const { fetchAssetEnums } = useAssetsStore()
  const { isFusionMode } = useCommonStore()
  useMount(fetchAssetEnums)
  const [tardeData, setTardeData] = useState<AssetsTradeListResp>({})
  const pageContext = usePageContext()
  const [coinDetails, setCoinDetails] = useState<AssetsCoinDetailResp>({ coinId: '', symbol: '' }) // 币种详情
  const spotData = useWsSpotMarketTradePairRealTime({ apiData: tardeData?.spot })
  const perpetualWsData = useWsFuturesMarketTradePairRealTime({ apiData: tardeData?.perpetual })
  const tardeList = [
    ...(spotData || []).map((item: TradeListSpotResp) => ({ ...item, type: TradeListTypeEnum.spot })),
    ...(perpetualWsData || []).map((item: TradeListPerpetualResp) => ({ ...item, type: TradeListTypeEnum.perpetual })),
  ]

  /**
   * 获取币种详情
   * @param coinId 币种 ID
   * @returns
   */
  const onLoadDetails = async (coinId: string) => {
    const res = await requestWithLoading(getV1C2cBalanceFastPayDetailApiRequest({ coinId }), 0)
    const { isOk, data, message = '' } = res || {}

    if (!isOk || !data) {
      Toast(message)
      return
    }

    // 增加币种精度
    const newData = { ...data, coinPrecision: getCoinPrecision(data.symbol) } as AssetsCoinDetailResp
    setCoinDetails(newData)
  }

  /**
   * 查询交易对列表
   */
  const onLoadTradeList = async () => {
    const res = await getTradeList({
      sellCoinId: coinDetails.coinId,
    })

    const { isOk, data } = res || {}
    if (!isOk || !data) return
    setTardeData(data)
  }

  useEffect(() => {
    const id = pageContext.urlParsed.search?.id
    id && onLoadDetails(id)
  }, [])

  useUpdateEffect(() => {
    coinDetails.coinId && onLoadTradeList()
  }, [coinDetails.coinId])

  return (
    <div className={styles['page-wrapper']}>
      <NavBar
        title={
          <div className="coin-header">
            <LazyImage src={coinDetails?.appLogo || ''} round width={20} height={20} />
            <span>{coinDetails?.coinName}</span>
          </div>
        }
      />
      <CoinOverview details={coinDetails} />

      {tardeList && tardeList.length > 0 && (
        <>
          <div className="coin-view-line"></div>
          <CoinTrade tardeList={tardeList} />
        </>
      )}

      <div className="coin-view-line"></div>
      <CoinTradeRecords coinDetails={coinDetails} />

      {!isFusionMode && (
        <div className="actions-wrapper">
          <CoinActions coinId={coinDetails?.coinId} symbol={coinDetails?.symbol} />
        </div>
      )}
    </div>
  )
}
