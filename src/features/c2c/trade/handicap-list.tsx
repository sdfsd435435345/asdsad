import { map } from 'lodash'
import cn from 'classnames'
import { useEffect, useRef } from 'react'
import Icon from '@/components/icon'
import { t } from '@lingui/macro'
import {
  IC2cCoinItem,
  IQueryTradingActivitiesReq,
  ITradeAreaItem,
  ITradingActivitiesItem,
} from '@/typings/api/c2c/trade'
import CommonList from '@/components/common-list/list'
import { useQueryC2CTradingActivities } from '@/hooks/features/c2c/trade'
import CommonListEmpty from '@/components/common-list/list-empty'
import { useBaseC2cTradeStore } from '@/store/c2c/trade'
import { link } from '@/helper/link'
import { getC2cOrderBookDetailPagePath } from '@/helper/route'
import { C2cTradeAdDirectionEnum } from '@/constants/c2c/trade'
import { convertToMillions } from '@/helper/market'
import { formatCurrency } from '@/helper/decimal'
import UnderlineTip from '@/features/trade/common/underline-tip'
import { replaceEmpty } from '@/helper/filters'
import { useTradeContext } from './trade-context'

// 格式化阈值
const formatThreshold = 100000000
function ListItem({
  price,
  quantity,
  isBuy,
  title,
}: ITradingActivitiesItem & {
  isBuy?: boolean
  title: string
}) {
  const { params } = useTradeContext()
  const { updateQueryAdsParams } = useBaseC2cTradeStore()
  const toDetail = () => {
    updateQueryAdsParams({
      ...params,
      advertDirectCds: [!isBuy ? C2cTradeAdDirectionEnum.buy : C2cTradeAdDirectionEnum.sell],
      price,
    })
    link(getC2cOrderBookDetailPagePath())
  }
  return (
    <div className="grid grid-cols-4 text-sm py-2">
      <div className={isBuy ? 'text-sell_down_color' : 'text-buy_up_color'}>{title}</div>
      <div className={cn('justify-self-end mr-5', isBuy ? 'text-sell_down_color' : 'text-buy_up_color')}>{price}</div>
      <div className="justify-self-end">
        {/* 超过 1 亿就缩写数量 */}
        {+quantity > formatThreshold
          ? convertToMillions(quantity, false, 2, formatThreshold)
          : formatCurrency(quantity)}
      </div>
      <div className="justify-self-end" onClick={toDetail}>
        <span className="text-brand_color">{t`assets.coin.overview.detail`}</span>
      </div>
    </div>
  )
}
type THandicapListProps = {
  currentCoin?: IC2cCoinItem
  currentTradeArea?: ITradeAreaItem
} & IQueryTradingActivitiesReq

export const HandicapList = ({ coinId, areaId, currentCoin, currentTradeArea }: THandicapListProps) => {
  const divideRef = useRef<HTMLDivElement>(null)
  const { refresh, data, loading } = useQueryC2CTradingActivities({ coinId, areaId })
  // 价格由高到低排序
  function desendingSortByPrice(a, b) {
    return +b.price - +a.price
  }
  const sellList = (data?.data?.sells ?? []).sort(desendingSortByPrice)
  const buyList = (data?.data?.buys ?? []).sort(desendingSortByPrice)

  useEffect(() => {
    // 使买/卖单交界点定位到列表中间
    if (data?.data && divideRef.current) divideRef.current.scrollIntoView({ block: 'center' })
  }, [data])

  return (
    <>
      <div className="grid grid-cols-4 px-4 pt-4 pb-2 text-xs text-text_color_03">
        <div className="flex items-center">
          {t`features_c2c_trade_handicap_list_index_lxfllft24u`}
          <UnderlineTip
            title={t`features_c2c_trade_handicap_list_index_lxfllft24u`}
            popup={t`features_c2c_trade_handicap_list_index_cgy9rxfz82`}
          >
            <Icon className="ml-1" name="msg" hasTheme />
          </UnderlineTip>
        </div>
        <div className="justify-self-end mr-5">{`${t`future.funding-history.index.table-type.price`}(${replaceEmpty(
          currentTradeArea?.currencyName
        )})`}</div>
        <div className="justify-self-end">{`${t`features/trade/spot/price-input-0`}(${replaceEmpty(
          currentCoin?.symbol
        )})`}</div>
        <div className="justify-self-end">{t`features_c2c_center_common_2222222222225101800`}</div>
      </div>
      <div className="flex-1 overflow-auto px-4 pb-40">
        <CommonList className="!h-auto" refreshing onlyRefresh onRefreshing={refresh}>
          <CommonListEmpty className="py-20" hidden={sellList.length > 0 || buyList.length > 0 || loading} />
          {map(sellList, (item, index) => (
            <ListItem
              key={item.price}
              {...item}
              title={t({
                id: 'features_c2c_trade_handicap_list_bx8mamwdlk',
                values: { 0: sellList.length - index },
              })}
            />
          ))}
          <div ref={divideRef} />
          {map(buyList, (item, index) => (
            <ListItem
              isBuy
              key={item.price}
              {...item}
              title={t({
                id: 'features_c2c_trade_handicap_list_dz37mw9zeu',
                values: { 0: index + 1 },
              })}
            />
          ))}
        </CommonList>
      </div>
    </>
  )
}
