import { updateC2cOrderStatus } from '@/apis/c2c/order'
import { AssetsRouteEnum } from '@/constants/assets'
import { C2cOrderStatusEnum } from '@/constants/c2c/order'
import { C2cTradeFilterTradeWayEnum } from '@/constants/c2c/trade'
import { link } from '@/helper/link'
import { requestWithLoading } from '@/helper/order'
import { getAssetsHistoryPageRoutePath } from '@/helper/route'
import { useC2cOrderDetailIslWithAction } from '@/hooks/features/c2c/order'
import { IC2cOrderDetail } from '@/typings/api/c2c/order'
import { t } from '@lingui/macro'
import { Button, Dialog } from 'react-vant'
import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { useOrderStatus } from '../order-list'
import { SellOrderInfo } from './await-pay'
import {
  C2cOrderDetailHeader,
  C2cOrderDetailCounterpartyInfo,
  ActionsWrapper,
  RechargeRecordsLink,
  AppealButton,
  AssetsButton,
} from './common'
import { useOrderDetailContext } from './detail-context'
import { PaidBuyOrderInfo } from './paid'

type IProps = {
  order: IC2cOrderDetail
}
export const showBuyerConfirmTransferred = async (order: IC2cOrderDetail, onOk?: () => void, s?: any) => {
  const coinName = order.coinName
  const isOutside = order.dealTypeCd === C2cTradeFilterTradeWayEnum.outside
  const teleport = document.createElement('div')
  document.body.appendChild(teleport)
  const tip = t({
    id: 'features_c2c_order_detail_transferred_ybsvfm0wjwhlao4w3jyhy',
    values: { 0: coinName },
  })
  const root = createRoot(teleport)
  const remove = () => {
    root.unmount()
    teleport.remove()
  }
  const toRechargeRecords = () => {
    link(getAssetsHistoryPageRoutePath(!isOutside ? AssetsRouteEnum.c2c : AssetsRouteEnum.coins))
    remove()
  }
  const run = async () => {
    remove()
    const res = await requestWithLoading(
      updateC2cOrderStatus({
        id: order.id,
        statusCd: C2cOrderStatusEnum.transferConfirmed.toString(),
      })
    )
    if (res.isOk) {
      onOk && onOk()
    }
  }
  root.render(
    <Dialog
      visible
      title={t({
        id: 'features_c2c_order_detail_transferred_40josqmzxmz3lghbzfi_b',
        values: { 0: coinName },
      })}
      showCancelButton
      cancelButtonText={t`features_c2c_order_detail_transferred_gfpifpspt_8epxq3fecba`}
      className="dialog-confirm-wrapper confirm-black"
      confirmButtonText={t`features_c2c_order_detail_transferred_aib6k-ukbpf1uoybtsm1o`}
      message={
        <span>
          {t`features_c2c_order_detail_transferred_kytpvpfroudalwfjsezho`}{' '}
          <span className="text-brand_color" onClick={toRechargeRecords}>
            {t`features_c2c_order_detail_transferred_ygfdlc-bfbw5s798vpd_2`}
          </span>
          {tip}
          {t`features_c2c_order_detail_transferred_izvswiz0wqgzfoumrqewk`}
        </span>
      }
      onCancel={remove}
      onConfirm={run}
    />
  )
}
function BuyActions({ order }: IProps) {
  const { showResultPage } = useOrderDetailContext()
  const onConfirm = async () => {
    showBuyerConfirmTransferred(order, showResultPage, document.querySelector('.appeal-teleport') as Element)
  }
  const withAction = useC2cOrderDetailIslWithAction()
  useEffect(() => {
    if (order.id && withAction) {
      onConfirm()
    }
  }, [order, withAction])
  const { isOutside } = useOrderStatus(order)

  return (
    <>
      <RechargeRecordsLink isOutside={isOutside} />
      <div className="flex appeal-teleport">
        <AppealButton order={order} className="mr-4" />
        <Button onClick={onConfirm} type="primary" block>
          {t`features_c2c_order_detail_transferred_ferowl_urf9z_tbln2cpm`} {order.coinName}
        </Button>
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

export function Transferred({ order }: IProps) {
  const { isBuy, isOutside } = useOrderStatus(order)
  const title = isBuy
    ? t`features_c2c_order_detail_transferred_8qpjrfnbhzd45huvdfxby`
    : t`features_c2c_order_detail_transferred_vighulmxchj85jkyfpfc6`
  const info = isBuy
    ? t`features_c2c_order_detail_transferred_yn8stkzyhjodknso4p0iy`
    : t`features_c2c_order_detail_transferred_3pm7flzal4hbqfpqrdq3z`

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
