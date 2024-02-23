import { replaceEmpty } from '@/helper/filters'
import { getTextFromStoreEnums } from '@/helper/store'
import { useBaseC2cOrderStore } from '@/store/c2c/order'
import { IC2cOrderDetail } from '@/typings/api/c2c/order'
import { t } from '@lingui/macro'
import { useOrderStatus } from '../order-list'
import { SellOrderInfo } from './await-pay'
import { C2cOrderDetailHeader, C2cOrderDetailCounterpartyInfo, ActionsWrapper, AppealButton } from './common'
import { PaidBuyOrderInfo } from './paid'

type IProps = {
  order: IC2cOrderDetail
}

function CancelReason({ order }: IProps) {
  const enums = useBaseC2cOrderStore().orderEnums.cancelReasons.enums
  const reasonText = getTextFromStoreEnums(order.cancelType!, enums).replace('--', '')

  return (
    <div>
      <div className="p-3 bg-card_bg_color_01 rounded">
        <div className="text-text_color_02 mb-2">{t`features_c2c_order_detail_canceled_w2hs9l8byho447syirf7t`}</div>
        <div>{replaceEmpty(reasonText || order.cancelReason)}</div>
      </div>
    </div>
  )
}

export function Canceled({ order }: IProps) {
  const { isBuy } = useOrderStatus(order)
  const title = t`features_c2c_order_detail_canceled_vx8xgivhlqjjnw6ks6vw_`
  const info = isBuy
    ? t`features_c2c_order_detail_canceled_he7nl6cgmg0vgviqf3w4y`
    : t`features_c2c_order_detail_canceled_qthjewyi5zq8dquixajcq`

  return (
    <div>
      <C2cOrderDetailHeader hasGap order={order} title={title} info={info}>
        <CancelReason order={order} />
      </C2cOrderDetailHeader>
      <C2cOrderDetailCounterpartyInfo order={order} onlyNickName />
      {isBuy && <PaidBuyOrderInfo order={order} />}
      {!isBuy && <SellOrderInfo addressVisible order={order} />}
      <ActionsWrapper flex={!isBuy}>
        <AppealButton order={order} />
      </ActionsWrapper>
    </div>
  )
}
