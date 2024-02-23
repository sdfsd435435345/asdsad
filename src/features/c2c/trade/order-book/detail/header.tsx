import { IC2cOrderBookDetail } from '@/typings/api/c2c/trade'
import { C2cTradeAdDirectionEnum } from '@/constants/c2c/trade'
import { formatCurrency } from '@/helper/decimal'
import LazyImage from '@/components/lazy-image'
import { replaceEmpty } from '@/helper/filters'
import { oss_area_code_image_domain_address } from '@/constants/oss'
import { t } from '@lingui/macro'
import styles from './header.module.css'
import { useTradeContext } from '../../trade-context'

export function OrderBookDetailHeader() {
  const { params } = useTradeContext()
  const isBuy = params.advertDirect === C2cTradeAdDirectionEnum.buy

  const props = [
    {
      label: t`features_c2c_advertise_post_advertise_index_222222225101683`,
      value: (
        <div className={isBuy ? 'text-buy_up_color' : 'text-sell_down_color'}>
          {isBuy
            ? t`features_c2c_trade_order_book_detail_header_q95tcrhfuq`
            : t`features_c2c_trade_order_book_detail_header_i8j_979ww7`}
        </div>
      ),
    },
    {
      label: t`assets.layout.tabs.coins`,
      value: (
        <div className="flex items-center">
          <LazyImage round className="mr-1 rounded-full" width={16} height={16} src={params.currentCoin?.appLogo} />
          <span>{replaceEmpty(params.currentCoin?.symbol)}</span>
        </div>
      ),
    },
    {
      label: t`constants_agent_index_49x6esjld0`,
      value: (
        <div className="flex items-center">
          <LazyImage
            round
            className="mr-1 rounded-full"
            width={16}
            height={16}
            src={`${oss_area_code_image_domain_address}${params.currentTradeArea?.countryAbbreviation}.png`}
          />
          <span>{replaceEmpty(params.currentTradeArea?.currencyName)}</span>
        </div>
      ),
    },
    {
      label: t`features_c2c_trade_trade_form_22225101639`,
      value: (
        <div className={isBuy ? 'text-buy_up_color' : 'text-sell_down_color'}>
          {params.currentTradeArea?.currencySymbol} {formatCurrency(params.price)}
        </div>
      ),
    },
  ]
  return (
    <div className="p-4">
      <div className={styles['order-book-header-wrapper']}>
        <div className="flex justify-between">
          {props.map(prop => {
            return (
              <div className="prop-item" key={prop.label}>
                <div className="label text-xs">{prop.label}</div>
                <div className="value">{prop.value}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
