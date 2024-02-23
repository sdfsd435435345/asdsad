import LazyImage from '@/components/lazy-image'
import { IC2cOrderDetail } from '@/typings/api/c2c/order'
import { Button, Dialog, Steps } from 'react-vant'
import { useEffect, useState } from 'react'
import { formatCurrency } from '@/helper/decimal'
import { link } from '@/helper/link'
import { requestWithLoading } from '@/helper/order'
import { updateC2cOrderStatus } from '@/apis/c2c/order'
import { C2cOrderStatusEnum } from '@/constants/c2c/order'
import Icon from '@/components/icon'
import { t } from '@lingui/macro'
import { getC2cOrderCancelPageRoutePath } from '@/helper/route'
import { C2cTradeAdPaymentEnum } from '@/constants/c2c/trade'
import classNames from 'classnames'
import PromptIcon from '@/components/prompt-icon'
import { PaymentItem } from '../../trade/payment-item'
import { useOrderStatus } from '../order-list'
import {
  ActionsWrapper,
  C2cOrderDetailCounterpartyInfo,
  C2cOrderDetailHeader,
  C2cOrderDetailOrderInfo,
  getPaymentProps,
  getRemarkProp,
  PropList,
  StepIcon,
  TextWithCopy,
} from './common'
import { useOrderDetailContext } from './detail-context'
import styles from './common.module.css'

type IProps = {
  order: IC2cOrderDetail
  setChatIconVisible?: (visible: boolean) => void
}

function OrderPayment({ order }: IProps) {
  const { isBuy, oppositeInfo, payment } = useOrderStatus(order)
  const baseProps = [
    {
      label: t`features_c2c_order_detail_await_pay_et1ryrjolzxpvu818nbgc`,
      value: <TextWithCopy text={order.paymentUserName || ''} />,
    },
    ...getPaymentProps({
      payment,
      isBuy,
      status: order.statusCd as any,
    }),
  ]

  return (
    <div className="px-3 bg-card_bg_color_01 rounded">
      <PropList size="small" list={baseProps} />
    </div>
  )
}
function OrderSteps({ order }: IProps) {
  return (
    <div className={classNames('px-2', styles['steps-wrapper'])}>
      <Steps className="dash-brand-style" direction="vertical" active={3}>
        <Steps.Item finishIcon={<StepIcon index={1} />}>
          <h3>{t`features_c2c_order_detail_await_pay_jduwevq1j8j9ybpfn9zs7`}</h3>
        </Steps.Item>
        <Steps.Item finishIcon={<StepIcon index={2} />}>
          <div className="flex justify-between mb-4">
            <span>{t`features_c2c_order_detail_await_pay_kvsawz15uw4y0esgy1euw`}</span>
            <div className="flex items-center">
              {order.currencySymbol}{' '}
              <TextWithCopy copyValue={order.totalPrice?.toString()} text={formatCurrency(order.totalPrice)} />
            </div>
          </div>
          <OrderPayment order={order} />
          <div className="mt-5 text-xs text-text_color_03">
            <div>
              <PromptIcon />
              <span className="text-brand_color">{t`features_c2c_order_detail_await_pay_1hw0euwoyzs3zcsc_itk5`}</span>
              <span>{t`features_c2c_trade_trade_form_22225101658`}</span>
            </div>
            <div className="mt-2">
              <PromptIcon />
              <span>{t`features_c2c_order_detail_await_pay_nsyawtg0jll4ach9qq12e`}</span>
            </div>
          </div>
        </Steps.Item>
        <Steps.Item finishIcon={<StepIcon index={3} />}>
          <h3>{t`features_c2c_order_detail_await_pay_63wfrgpssernbnt4pof50`}</h3>
        </Steps.Item>
      </Steps>
    </div>
  )
}

function OrderInfo({ order }: IProps) {
  const { isBuy, payment } = useOrderStatus(order)

  const baseProps = [
    {
      label: t`features_c2c_order_detail_await_pay_xc0cqka6wlu6euiuggu_c`,
      value: <TextWithCopy text={order.id} />,
    },
    {
      label: t`features_c2c_trade_trade_form_22225101639`,
      value: `${order.currencySymbol} ${formatCurrency(order.price)}`,
    },
    {
      label: t`features/trade/spot/price-input-0`,
      value: `${formatCurrency(order.number)} ${order.coinName}`,
    },
    {
      label: t`features_c2c_trade_trade_form_22225101641`,
      value: `${order.currencySymbol} ${formatCurrency(order.totalPrice)}`,
    },
    {
      label: t`features_c2c_trade_filters_225101634`,
      value: <PaymentItem className="text-sm" payment={payment} />,
    },
    getRemarkProp(order.remark || ''),
  ]
  const symbolUrl = order.coinAppLogo

  return (
    <div className="px-4 mt-6">
      <div className="flex items-center font-medium">
        <LazyImage src={symbolUrl} className="w-5 h-5 mr-2" />
        {isBuy ? t`features_kyc_index_standards_5101189` : t`features_kyc_index_standards_5101190`} {order.coinName}
      </div>
      <div>
        <PropList list={baseProps} />
      </div>
    </div>
  )
}

export function SellOrderInfo({
  order,
  orderInfoCollapsed,
  addressVisible,
}: IProps & {
  orderInfoCollapsed?: boolean
  addressVisible?: boolean
}) {
  const { payment, isBuy } = useOrderStatus(order)

  const baseProps = [
    {
      label: t`features_c2c_trade_trade_form_22225101639`,
      value: `${order.currencySymbol} ${formatCurrency(order.price)}`,
    },
    {
      label: t`features/trade/spot/price-input-0`,
      value: `${formatCurrency(order.number)} ${order.coinName}`,
    },
    ...getPaymentProps({
      payment,
      isBuy,
      status: order.statusCd as any,
      widthPaymentName: true,
    }),
  ]
  return (
    <div className="mt-4">
      <div className="px-4">
        <div className="text-base font-medium mb-2">
          {formatCurrency(order.totalPrice)} {order.currencyEnName}
        </div>
        <div className="px-3 bg-card_bg_color_01 rounded">
          <PropList size="small" list={baseProps} />
        </div>
      </div>
      <C2cOrderDetailOrderInfo addressVisible={addressVisible} collapse={orderInfoCollapsed} order={order} />
    </div>
  )
}
export async function confirmTransfer(id: any, updateDetail: () => void) {
  await Dialog.confirm({
    title: t`features_c2c_order_detail_await_pay_3hbkz0sy_rsx3sxt-jbzb`,
    message: t`features_c2c_order_detail_await_pay_qft1qrlhf2nkl_nidetpi`,
    cancelButtonText: t`features_c2c_order_detail_await_pay_xoa3knexoqrzlt3q4kuyb`,
    confirmButtonText: t`common.confirm`,
    className: 'dialog-confirm-wrapper confirm-black',
  })
  const res = await requestWithLoading(
    updateC2cOrderStatus({
      id,
      statusCd: C2cOrderStatusEnum.paid.toString(),
    })
  )
  if (res.isOk) {
    updateDetail()
  }
}
export function AwaitPay({ order, setChatIconVisible }: IProps) {
  const { isBuy, payment } = useOrderStatus(order)
  const { updateDetail } = useOrderDetailContext()
  const [isNext, setIsNext] = useState(false)
  const transferTitle =
    {
      [C2cTradeAdPaymentEnum.alipay]: t`features_c2c_order_detail_await_pay_fj2bl8yb4z2ktrvvhrcs0`,
      [C2cTradeAdPaymentEnum.wechat]: t`features_c2c_order_detail_await_pay_6qjp9khrvno2yabz7dwss`,
      [C2cTradeAdPaymentEnum.bank]: t`features_c2c_order_detail_await_pay_qfg_nofua8rtvukzfy4_f`,
    }[payment.type] || t`features_c2c_order_detail_await_pay_hzujyth-zdlfabhra8aen`
  const title = isBuy
    ? !isNext
      ? t({
          id: 'features_c2c_order_detail_await_pay_9ftsyvl8thau-hprkaol4',
          values: { 0: order.coinName },
        })
      : transferTitle
    : t`features_c2c_order_detail_await_pay_zm3bnyhyl0wbq7ahrdagt`
  const info = isBuy
    ? t`features_c2c_order_detail_await_pay_tbvlzewoly2gmvtkfy2ww`
    : t`features_c2c_order_detail_await_pay_xjzpol8osee9v11z8cyzk`
  function cancel() {
    link(getC2cOrderCancelPageRoutePath(order.id))
  }
  async function confirmTransferInner() {
    confirmTransfer(order.id, updateDetail)
  }
  useEffect(() => {
    if (isBuy) {
      setChatIconVisible?.(isNext)
    }
  }, [isNext])

  return (
    <div>
      <C2cOrderDetailHeader hasGap={!isBuy} order={order} title={title} info={info} />
      {/* 最初始和卖家都要展示对手信息 */}
      {(!isNext || !isBuy) && <C2cOrderDetailCounterpartyInfo withChat={isBuy} order={order} onlyNickName={!isBuy} />}
      {!isNext && isBuy && <OrderInfo order={order} />}
      {isNext && isBuy && <OrderSteps order={order} />}
      {!isBuy && <SellOrderInfo order={order} />}
      <ActionsWrapper>
        {!isNext && isBuy && (
          <>
            <Button onClick={cancel} block className="gray-button mr-4">
              {t`features_c2c_order_cancel_index_oifgxckqnhvh7juckq092`}
            </Button>
            <Button onClick={() => setIsNext(true)} type="primary" block>
              {t`user.field.reuse_23`}
            </Button>
          </>
        )}
        {isNext && isBuy && (
          <Button onClick={confirmTransferInner} type="primary" block>
            {t`features_c2c_order_detail_await_pay_i4g2nsupycslmrli5neer`}
          </Button>
        )}
        {!isBuy && (
          <Button disabled type="primary" block>
            {t`features_c2c_order_detail_await_pay_bppixtv6t46soldcaoqb1`}
          </Button>
        )}
      </ActionsWrapper>
    </div>
  )
}
