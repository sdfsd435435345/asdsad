import Icon from '@/components/icon'
import Link from '@/components/link'
import { C2cOrderStatusEnum } from '@/constants/c2c/order'
import { formatCurrency } from '@/helper/decimal'
import { link } from '@/helper/link'
import { getC2cOrderDetailPageRoutePath } from '@/helper/route'
import { IC2cOrderDetail } from '@/typings/api/c2c/order'
import { t } from '@lingui/macro'
import { Button } from 'react-vant'
import { useOrderCountdownNode, useOrderStatus } from '../order-list'

function OrderAction({ orderDetail }: { orderDetail: IC2cOrderDetail }) {
  const { isBuy } = useOrderStatus(orderDetail)
  const countdownNode = useOrderCountdownNode(orderDetail)
  let buttonNode = <></>
  let statusText = ''
  let showAmount = true

  const confirmReceive = async () => {
    link(getC2cOrderDetailPageRoutePath(orderDetail?.id, true))
  }
  const confirmTransferred = async () => {
    link(getC2cOrderDetailPageRoutePath(orderDetail?.id, true))
  }

  switch (orderDetail.statusCd) {
    case C2cOrderStatusEnum.awaitPay:
      buttonNode = isBuy ? (
        <Link href={getC2cOrderDetailPageRoutePath(orderDetail.id)}>
          <Button size="small" type="primary">
            {t`constants_c2c_order_q-npvv53i1t_ynjhffdje`}
          </Button>
        </Link>
      ) : (
        <Button size="small" disabled type="primary">
          {t`features_c2c_order_detail_await_pay_bppixtv6t46soldcaoqb1`}
        </Button>
      )
      statusText = isBuy
        ? t`features_c2c_order_im_order_status_bo2stn_xpofrd9fm5inof`
        : t`constants_c2c_advertise__m2wahy_ybhxjakq9tebo`
      break
    case C2cOrderStatusEnum.paid:
      buttonNode = isBuy ? (
        <Button size="small" disabled type="primary">
          {t`features_c2c_order_detail_transferred_ferowl_urf9z_tbln2cpm`} {orderDetail.coinName}
        </Button>
      ) : (
        <Button size="small" onClick={confirmReceive} type="primary">
          {t`features_c2c_order_detail_await_pay_bppixtv6t46soldcaoqb1`}
        </Button>
      )
      statusText = isBuy
        ? t`constants_c2c_order_htmc-njbpnpwzghrpe2qv`
        : t`features_c2c_order_im_order_status_vv23_wi9h1mvjnnjz61p3`
      showAmount = !isBuy
      break
    case C2cOrderStatusEnum.received:
      buttonNode = isBuy ? (
        <Button size="small" disabled type="primary">
          {t`features_c2c_order_detail_transferred_ferowl_urf9z_tbln2cpm`} {orderDetail.coinName}
        </Button>
      ) : (
        <Link href={getC2cOrderDetailPageRoutePath(orderDetail.id)}>
          <Button size="small" type="primary">
            {t`constants_c2c_order_hjpf8esfjmwsunjytvc6b`}
          </Button>
        </Link>
      )
      statusText = isBuy
        ? t`constants_c2c_advertise_oumxp3s9jdadqsfkgfy9v`
        : t`features_c2c_order_im_order_status_e1-y1-lif3zo_dlg4w34h`
      showAmount = !isBuy
      break
    case C2cOrderStatusEnum.transferred:
      buttonNode = isBuy ? (
        <Button size="small" onClick={confirmTransferred} type="primary">
          {t`features_c2c_order_detail_transferred_ferowl_urf9z_tbln2cpm`} {orderDetail.coinName}
        </Button>
      ) : (
        <></>
      )
      showAmount = !isBuy
      statusText = isBuy
        ? t`features_c2c_order_im_order_status_23n_vaktlgvtm-wih9ls-`
        : t`constants_c2c_order_r9y8tapxasxlcafvqb5n3`
      break
    default:
      break
  }
  return (
    <div className="p-4 flex justify-between items-center">
      <div>
        <div className="text-text_color_02 text-sm mb-1">
          {statusText}{' '}
          <span className="font-medium">
            {countdownNode}
            <span className="text-brand_color">s</span>
          </span>
        </div>
        <div className="font-medium text-base">
          {showAmount
            ? `${orderDetail.currencySymbol} ${formatCurrency(orderDetail.totalPrice)}`
            : `${formatCurrency(orderDetail.number)} ${orderDetail.coinName}`}
        </div>
      </div>
      <div>{buttonNode}</div>
    </div>
  )
}

export function OrderStatusInIm({ orderDetail }: { orderDetail: IC2cOrderDetail }) {
  const { isBuy, isProcessing } = useOrderStatus(orderDetail)

  if (!isProcessing) {
    return null
  }

  const buyTipVisible = isBuy && orderDetail.statusCd === C2cOrderStatusEnum.awaitPay
  const sellTipVisible =
    !isBuy && [C2cOrderStatusEnum.paid, C2cOrderStatusEnum.awaitPay].includes(orderDetail.statusCd as any)

  return (
    <div>
      {(buyTipVisible || sellTipVisible) && (
        <div className="flex px-4 py-2 bg-tips_warning_bg_color">
          <Icon className="mr-2 text-xs translate-y-1" name="msg" />
          <div className="text-warning_color text-xs">
            {buyTipVisible && <p>{t`features_c2c_order_im_order_status_pttbltcl4qfjgws7dfepy`}</p>}
            {sellTipVisible && (
              <>
                <p>{t`features_c2c_order_im_order_status_7fvswgf7v7t9b-uhsqon3`}</p>
                <p>{t`features_c2c_order_im_order_status_esrve-unve7n84urros3g`}</p>
              </>
            )}
          </div>
        </div>
      )}
      <OrderAction orderDetail={orderDetail} />
    </div>
  )
}
