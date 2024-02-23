import Icon from '@/components/icon'
import { formatCurrency } from '@/helper/decimal'
import { IC2cOrderDetail } from '@/typings/api/c2c/order'
import { Button } from 'react-vant'
import { t } from '@lingui/macro'
import { useOrderStatus } from '../order-list'
import styles from './result.module.css'
import { RechargeRecordButton, AssetsButton } from './common'

export function Result({ order, onClickDetail }: { order: IC2cOrderDetail; onClickDetail: () => void }) {
  const { isBuy } = useOrderStatus(order)

  return (
    <div className={styles['result-wrapper']}>
      <Icon className="text-7xl mb-6" name="success_icon" isRemoteUrl />
      <div className="mb-8 text-center">
        <div className="text-xl font-medium mb-1">
          {!isBuy
            ? `${order.currencySymbol} ${formatCurrency(order.totalPrice)}`
            : `${formatCurrency(order.number)} ${order.coinName}`}
        </div>
        <div className="text-text_color_02">
          {isBuy
            ? t`features_c2c_order_detail_result_fiaytwmmhc2rk5fl_fqm0`
            : t({
                id: 'features_c2c_order_detail_result__dd4t4s_m4lh9brvamvej',
                values: { 0: formatCurrency(order.number), 1: order.coinName },
              })}
        </div>
      </div>
      <div className="flex w-full">
        <Button onClick={onClickDetail} block className="gray-button mr-4">
          {t`features_c2c_order_detail_result_tj7gcmd2sm5reumt8cfgp`}
        </Button>
        {isBuy ? <RechargeRecordButton order={order} /> : <AssetsButton order={order} />}
      </div>
    </div>
  )
}
