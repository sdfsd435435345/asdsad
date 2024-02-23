import { updateC2cOrderStatus, urgeC2cOrder } from '@/apis/c2c/order'
import Icon from '@/components/icon'
import { OnlyOnePopup } from '@/components/only-one-overlay'
import { DefaultRadioIconRender } from '@/components/radio/icon-render'
import { AreaTransactionTypeEnum } from '@/constants/c2c/common'
import { C2cOrderStatusEnum } from '@/constants/c2c/order'
import { getPayUserName } from '@/helper/c2c/trade'
import { formatCurrency } from '@/helper/decimal'
import { link } from '@/helper/link'
import { requestWithLoading } from '@/helper/order'
import { getC2cOrderImPageRoutePath } from '@/helper/route'
import { useC2cOrderDetailIslWithAction } from '@/hooks/features/c2c/order'
import { usePageContext } from '@/hooks/use-page-context'
import { IC2cOrderDetail } from '@/typings/api/c2c/order'
import { t } from '@lingui/macro'
import { Button, Checkbox, Toast } from 'react-vant'
import { useRequest } from 'ahooks'
import { useEffect, useState } from 'react'
import { useOrderStatus } from '../order-list'
import { SellOrderInfo } from './await-pay'
import {
  C2cOrderDetailHeader,
  C2cOrderDetailCounterpartyInfo,
  C2cOrderDetailOrderInfo,
  PropList,
  getAddressProps,
  getPaymentProps,
  RechargeRecordsLink,
  ActionsWrapper,
  AppealButton,
} from './common'
import { useOrderDetailContext } from './detail-context'

type IProps = {
  order: IC2cOrderDetail
}
export function PaidBuyOrderInfo({
  order,
  orderInfoCollapsed,
}: IProps & {
  orderInfoCollapsed?: boolean
}) {
  const baseProps = [
    {
      label: t`features_c2c_trade_trade_form_22225101639`,
      value: `${order.currencySymbol} ${formatCurrency(order.price)}`,
    },
    {
      label: t`features_c2c_trade_trade_form_22225101641`,
      value: ` ${order.currencySymbol} ${formatCurrency(order.totalPrice)}`,
    },
    ...getAddressProps(order),
  ]
  return (
    <div className="mt-4">
      <div className="px-4">
        <div className="text-base font-medium mb-2">
          {formatCurrency(order.number)} {order.coinName}
        </div>
        <div className="px-3 bg-card_bg_color_01 rounded">
          <PropList size="small" list={baseProps} />
        </div>
      </div>
      <C2cOrderDetailOrderInfo collapse={orderInfoCollapsed} paymentVisible order={order} />
    </div>
  )
}
export function PaidBuyActions({ order }: IProps) {
  function cancel() {
    link(`/c2c/orders/cancel/${order.id}`)
  }
  const [sended, setSended] = useState(order.urge === 1)
  const showCancel = order.statusCd !== C2cOrderStatusEnum.received.toString()
  const { isOutside } = useOrderStatus(order)

  const { run, loading } = useRequest(
    async () => {
      const res = await urgeC2cOrder({
        id: order.id,
      })
      if (res.isOk) {
        Toast(t`features_c2c_order_detail_paid_9teye_uslompxfgyhg7ya`)
        setSended(true)
      }
    },
    {
      manual: true,
    }
  )

  return (
    <>
      <RechargeRecordsLink isOutside={isOutside} />
      <div className="flex flex-1">
        {showCancel && (
          <Button onClick={cancel} block className="gray-button mr-4">
            {t`features_c2c_order_cancel_index_oifgxckqnhvh7juckq092`}
          </Button>
        )}
        <Button onClick={run} loading={loading} disabled={sended} type="primary" block>
          {sended
            ? t`features_c2c_order_detail_paid_opijjxmjexmycbhlfjcq2`
            : t`features_c2c_order_detail_paid_totx1ku5bxwzhifmrnd0h`}
        </Button>
      </div>
    </>
  )
}
export function ConfirmReceivedModal({
  order,
  onVisibleChange,
}: IProps & {
  onVisibleChange: (visible: boolean) => void
}) {
  const { payment, oppositeInfo, isBuy } = useOrderStatus(order)
  const imPath = getC2cOrderImPageRoutePath(order.id)
  const inIm = usePageContext().path.includes(imPath)
  const { updateDetail } = useOrderDetailContext()
  const [verified, setVerified] = useState(true)
  const toChat = () => {
    if (inIm) {
      onVisibleChange(false)
      return
    }
    link(imPath)
  }
  const confirm = async () => {
    const res = await requestWithLoading(
      updateC2cOrderStatus({
        id: order.id,
        statusCd: C2cOrderStatusEnum.received.toString(),
      })
    )
    if (!res.isOk) {
      onVisibleChange(false)
      return
    }
    // im 内缺少少下文
    updateDetail?.()
    onVisibleChange(false)
  }
  const baseProps = [
    ...getPaymentProps({
      payment,
      inConfirmReceive: true,
      isBuy,
      status: order.statusCd as any,
      widthPaymentName: true,
    }),
    {
      label: t`features_c2c_order_detail_paid_zw0sieqyvwl5hyx83wqdn`,
      value: `${order.currencySymbol} ${formatCurrency(order.totalPrice)}`,
    },
  ]
  return (
    <div className="px-4 text-sm">
      <div className="flex py-4 items-center justify-between">
        <div className="text-base font-medium">{t`features_c2c_order_detail_await_pay_bppixtv6t46soldcaoqb1`}</div>
        <Icon hasTheme name="close" className="text-xl" onClick={() => onVisibleChange(false)} />
      </div>
      <div className="flex px-4 py-2 rounded bg-tips_warning_bg_color mb-6">
        <Icon className="mr-2 text-xs translate-y-1" name="msg" />
        <div className="text-warning_color text-xs">{t`features_c2c_order_detail_paid_eecuoa33kzuyrivjramok`}</div>
      </div>
      <div className="mb-4">
        <span>1. {t`features_c2c_order_detail_paid_ied0ghp9ieumopit2eu4b`}</span>
        <div className="text-xs">
          <PropList size="mini" list={baseProps} />
        </div>
      </div>
      <div className="mb-6">
        <span>2. {t`features_c2c_order_detail_paid_d9wvj_ike3kaxh_zlcpkt`}</span>
        <div className="mt-2 flex justify-between">
          <div className="font-medium">{getPayUserName(order.buyerRealName || oppositeInfo.buyerNickName)}</div>
          <div className="flex ">
            <Checkbox
              className="mr-10"
              iconRender={DefaultRadioIconRender}
              checked={verified}
              onClick={() => setVerified(true)}
            >
              <span className="text-xs text-text_color_02">{t`features_c2c_order_detail_paid_whaj9yprg1umxbacv9vqs`}</span>
            </Checkbox>
            <Checkbox
              iconRender={DefaultRadioIconRender}
              checked={!verified}
              onClick={() => {
                setVerified(false)
              }}
            >
              <span className="text-xs text-text_color_02">{t`features_c2c_order_detail_paid_1ee96xiqpav3mme-jmh2g`}</span>
            </Checkbox>
          </div>
        </div>
        {!verified && (
          <div className="mt-2">
            <div className="text-xs text-text_color_03 rounded bg-card_bg_color_02 p-3">
              {t`features_c2c_order_detail_paid_mqezoljtzpcjetb8g60ym`}
            </div>
            <div className="text-brand_color mt-2" onClick={toChat}>
              {t`features_c2c_order_detail_paid_bbjp_fdkmcudqzbyase0y`}&gt;
            </div>
          </div>
        )}
      </div>
      <div className="flex pb-10">
        <Button block className="gray-button mr-4" onClick={() => onVisibleChange(false)}>
          {t`assets.financial-record.cancel`}
        </Button>
        <Button onClick={confirm} disabled={!verified} type="primary" block>
          {t`features_c2c_order_detail_paid_o2lqpyg_xcynnr2ryrk84`}
        </Button>
      </div>
    </div>
  )
}
function SellActions({ order }: IProps) {
  const withAction = useC2cOrderDetailIslWithAction()
  const [confirmVisible, setConfirmVisible] = useState(!!withAction)

  return (
    <>
      <AppealButton order={order} className="mr-4" />
      <Button onClick={() => setConfirmVisible(true)} type="primary" block>
        {t`features_c2c_order_detail_await_pay_bppixtv6t46soldcaoqb1`}
      </Button>
      <OnlyOnePopup destroyOnClose position="bottom" visible={confirmVisible}>
        <ConfirmReceivedModal order={order} onVisibleChange={setConfirmVisible} />
      </OnlyOnePopup>
    </>
  )
}

export function Paid({ order }: IProps) {
  const { isBuy, isOutside } = useOrderStatus(order)
  const title = isBuy
    ? t`features_c2c_order_detail_paid_41iqqosw0c3bdjtxlmvtg`
    : t`features_c2c_order_detail_paid_cwxltsjdu2dfh0lck_-m_`
  const info = isBuy
    ? t`features_c2c_order_detail_paid_qf2hjpvxbmylmfmnysvcb`
    : t`features_c2c_order_detail_paid_uhdtj_dzby-d0-wwyqo1-`

  return (
    <div>
      <C2cOrderDetailHeader hasGap order={order} title={title} info={info} />
      <C2cOrderDetailCounterpartyInfo order={order} onlyNickName />
      {isBuy && <PaidBuyOrderInfo order={order} />}
      {!isBuy && <SellOrderInfo order={order} />}
      <ActionsWrapper flex={!isBuy}>
        {isBuy && <PaidBuyActions order={order} />}
        {!isBuy && <SellActions order={order} />}
      </ActionsWrapper>
    </div>
  )
}
