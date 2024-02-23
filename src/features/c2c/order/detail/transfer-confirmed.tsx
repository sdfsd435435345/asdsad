import { formatCurrency } from '@/helper/decimal'
import { IC2cOrderDetail } from '@/typings/api/c2c/order'
import { t } from '@lingui/macro'
import { useOrderStatus } from '../order-list'
import { SellOrderInfo } from './await-pay'
import {
  C2cOrderDetailHeader,
  C2cOrderDetailCounterpartyInfo,
  ActionsWrapper,
  AppealButton,
  AssetsButton,
  RechargeRecordButton,
} from './common'
import { PaidBuyOrderInfo } from './paid'

type IProps = {
  order: IC2cOrderDetail
}

function BuyActions({ order }: IProps) {
  return (
    <>
      <div className="flex">
        <AppealButton order={order} className="mr-4" />
        <RechargeRecordButton order={order} />
      </div>
    </>
  )
}
function SellActions({ order }: IProps) {
  return (
    <>
      <AppealButton order={order} className="mr-4" />
      <AssetsButton order={order} />
    </>
  )
}

export function TransferConfirmed({ order }: IProps) {
  const { isBuy } = useOrderStatus(order)
  const title = isBuy
    ? t`features_c2c_order_detail_transfer_confirmed_vl9xqmlrldvvvc-ngipod`
    : t`features_c2c_order_detail_transfer_confirmed_nixlavvlu5ghy6iixb4zd`
  const info = isBuy
    ? t`features_c2c_order_detail_transfer_confirmed_ew6toagywcbbdiiyf4jmo`
    : t({
        id: 'features_c2c_order_detail_transfer_confirmed_bpwnfcu6mo2iyl9et6pdz',
        values: { 0: formatCurrency(order.number), 1: order.coinName },
      })

  return (
    <div>
      <C2cOrderDetailHeader hasGap order={order} title={title} info={info} />
      <C2cOrderDetailCounterpartyInfo order={order} onlyNickName />
      {isBuy && <PaidBuyOrderInfo order={order} />}
      {!isBuy && <SellOrderInfo addressVisible order={order} />}
      <ActionsWrapper flex={!isBuy}>
        {isBuy && <BuyActions order={order} />}
        {!isBuy && <SellActions order={order} />}
      </ActionsWrapper>
    </div>
  )
}
