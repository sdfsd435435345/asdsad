import NavBar from '@/components/navbar'
import { C2cTradeAdDirectionEnum, C2cTradeFilterBuyWayEnum, C2cTradeFilterOrderByEnum } from '@/constants/c2c/trade'
import C2cFooter from '@/features/c2c/footer'
import { useC2cTradeBaseHooks } from '@/hooks/features/c2c/trade'
import { IC2cOrderBookDetail, IQueryTradeAdListReq } from '@/typings/api/c2c/trade'
import { useCreation, useMount } from 'ahooks'
import { useState } from 'react'
import { queryC2cOrderBookDetail } from '@/apis/c2c/trade'
import { useBaseC2cTradeStore } from '@/store/c2c/trade'
import classNames from 'classnames'
import { link } from '@/helper/link'
import { getC2cTradePageRoutePath } from '@/helper/route'
import { t } from '@lingui/macro'
import { TradeAdList } from '../../ad-list'
import { ITradeContext, tradeContext } from '../../trade-context'
import { OrderBookDetailHeader } from './header'
import { OrderBookDetailFilters } from './filters'
import styles from './index.module.css'

function C2cOrderBookDetail() {
  const { queryAdsParams } = useBaseC2cTradeStore()
  const [params, setParams] = useState<IQueryTradeAdListReq>({
    areaId: queryAdsParams.currentTradeArea?.legalCurrencyId,
    advertTypeCds: [],
    tradeTypeCds: queryAdsParams.tradeTypeCds,
    currentCoin: queryAdsParams.currentCoin,
    coinId: queryAdsParams.currentCoin?.id,
    currentTradeArea: queryAdsParams.currentTradeArea,
    buyType: C2cTradeFilterBuyWayEnum.amount,
    advertDirect: queryAdsParams.advertDirectCds?.[0],
    advertDirectCds: queryAdsParams.advertDirectCds,
    sort: C2cTradeFilterOrderByEnum.orderCount,
    price: queryAdsParams.price,
  })
  const onParamsChange = (newParams: IQueryTradeAdListReq) => {
    setParams(old => ({ ...old, ...newParams }))
  }
  const isBuy = params.advertDirect === (C2cTradeAdDirectionEnum.buy as any)

  const contextValue: ITradeContext = useCreation(() => {
    return { params, onParamsChange }
  }, [params, onParamsChange])
  useC2cTradeBaseHooks()
  const queryAdList = async (queryParams: IQueryTradeAdListReq) => {
    delete queryParams.advertDirectCds
    if (!queryParams.amount) {
      delete queryParams.amount
    }
    const res = await queryC2cOrderBookDetail(queryParams)

    return {
      ...res,
      data: res.data?.adverts,
    }
  }

  useMount(() => {
    if (!queryAdsParams.price) {
      link(getC2cTradePageRoutePath(C2cTradeAdDirectionEnum.handicap), {
        overwriteLastHistoryEntry: true,
      })
    }
  })

  return (
    <tradeContext.Provider value={contextValue}>
      <div className={classNames(styles['order-book-detail-wrapper'], 'pb-28 text-leading-1-5 min-h-screen text-sm')}>
        <NavBar
          hasBottomBorder={false}
          title={
            !isBuy
              ? t`features_c2c_trade_order_book_detail_index_eqefg2xfda`
              : t`features_c2c_trade_order_book_detail_index_yexucoevl0`
          }
        />
        <div className="sticky-header">
          <OrderBookDetailHeader />
          <div className="rv-hairline--top-bottom">
            <OrderBookDetailFilters />
          </div>
        </div>
        <TradeAdList params={params} getAdList={queryAdList} />
      </div>
    </tradeContext.Provider>
  )
}

export default C2cOrderBookDetail
