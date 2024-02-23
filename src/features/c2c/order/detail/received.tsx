import { IC2cOrderDetail } from '@/typings/api/c2c/order'
import { Button, Dialog, Steps } from 'react-vant'
import { formatCurrency } from '@/helper/decimal'
import { requestWithLoading } from '@/helper/order'
import { updateC2cOrderStatus } from '@/apis/c2c/order'
import { C2cOrderStatusEnum } from '@/constants/c2c/order'
import Icon from '@/components/icon'
import { t } from '@lingui/macro'
import classNames from 'classnames'
import PromptIcon from '@/components/prompt-icon'
import { useOrderStatus } from '../order-list'
import {
  ActionsWrapper,
  AppealLink,
  C2cOrderDetailCounterpartyInfo,
  C2cOrderDetailHeader,
  getAddressProps,
  PropList,
  StepIcon,
  TextWithCopy,
} from './common'
import { useOrderDetailContext } from './detail-context'
import { PaidBuyActions, PaidBuyOrderInfo } from './paid'
import styles from './common.module.css'

type IProps = {
  order: IC2cOrderDetail
}

function OrderAddress({ order }: IProps) {
  const baseProps = [...getAddressProps(order, true)]

  return (
    <div className="px-3 bg-card_bg_color_01 rounded">
      <PropList size="small" list={baseProps} />
    </div>
  )
}
function OrderSteps({ order }: IProps) {
  return (
    <div className={classNames('px-2', styles['steps-wrapper'])}>
      <Steps className="dash-brand-style" direction="vertical" active={2}>
        <Steps.Item finishIcon={<StepIcon index={1} />}>
          <div className="flex justify-between mb-6">
            <span>{t`features_c2c_order_detail_received_j8umzpl8wouro2tu6notp`}</span>
            <div className="flex items-center">
              <span className="mr-2">
                {formatCurrency(order.number)} {order.coinName}
              </span>{' '}
              <TextWithCopy text={order.number.toString()} onlyIcon />
            </div>
          </div>
          <OrderAddress order={order} />
          <div className="mt-5 text-xs text-text_color_03">
            <div>
              <PromptIcon />
              <span className="text-brand_color">{t`features_c2c_order_detail_received_r1uyw8fmk4fqz5xrkteig`}</span>
              <span>{t`features_c2c_order_detail_received_rghggjhfqnmvce3szgy1h`}</span>
            </div>
          </div>
        </Steps.Item>
        <Steps.Item finishIcon={<StepIcon index={2} />}>
          <h3>{t`features_c2c_order_detail_received_op7e9_mbkbezs-mlhnn3i`}</h3>
        </Steps.Item>
      </Steps>
    </div>
  )
}

export function Received({ order }: IProps) {
  const { isBuy, isOutside } = useOrderStatus(order)
  const { updateDetail } = useOrderDetailContext()
  const title = isBuy
    ? t`features_c2c_order_detail_received_e8ys-xbur4vko8tl7j_oh`
    : t`features_c2c_order_detail_received_fpoky1mhxlcmmsamg8k6q`
  const info = isBuy
    ? t`features_c2c_order_detail_received_c9vddus71u6mck3sppcy3`
    : t`features_c2c_order_detail_received_dyq9ctutnzzpmj5vjhllu`
  async function confirmTransfer() {
    await Dialog.confirm({
      title: t`features_c2c_order_detail_received_ubqd7z1hxnebaeeaeeuio`,
      className: 'dialog-confirm-wrapper confirm-black',
      message: t`features_c2c_order_detail_received_ftyetbdahdoqyfgvhqkma`,
      cancelButtonText: t`features_c2c_order_detail_received_ahgo_z4phh0j3e98clwla`,
    })
    const res = await requestWithLoading(
      updateC2cOrderStatus({
        id: order.id,
        statusCd: C2cOrderStatusEnum.transferred.toString(),
      })
    )
    if (res.isOk) {
      updateDetail()
    }
  }

  return (
    <div>
      <C2cOrderDetailHeader hasGap={isBuy} order={order} title={title} info={info} />
      {/* 最初始和卖家都要展示对手信息 */}
      {isBuy && <C2cOrderDetailCounterpartyInfo order={order} onlyNickName />}
      {!isBuy && <OrderSteps order={order} />}
      {isBuy && <PaidBuyOrderInfo order={order} />}
      <ActionsWrapper flex={false}>
        {isBuy && <PaidBuyActions order={order} />}
        {!isBuy && (
          <>
            <AppealLink order={order} />
            <Button onClick={confirmTransfer} type="primary" block>
              {t`features_c2c_order_detail_received_xrgyt4yyknibueojguscu`}
            </Button>
          </>
        )}
      </ActionsWrapper>
    </div>
  )
}
