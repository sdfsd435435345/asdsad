import NavBar from '@/components/navbar'
import classNames from 'classnames'
import Icon from '@/components/icon'
import { useCopyToClipboard } from 'react-use'
import { Toast } from 'react-vant'
import { t } from '@lingui/macro'
import { usePageContext } from '@/hooks/use-page-context'
import { formatDate } from '@/helper/date'
import { formatCurrency } from '@/helper/decimal'
import { C2cOrderStatusEnum, getOtcOrderStatusEnumName } from '@/constants/c2c/order'
import styles from './index.module.css'
import { useOrderDetail } from '../detail'

function getTitleByStatus(status, isBuy) {
  const map = {
    [C2cOrderStatusEnum.canceled]: isBuy
      ? t`features_c2c_order_third_detail_index_xayl3i8okg`
      : t`features_c2c_order_third_detail_index_heuvpf4knt`,
    [C2cOrderStatusEnum.transferConfirmed]: isBuy
      ? t`features_c2c_order_detail_transfer_confirmed_vl9xqmlrldvvvc-ngipod`
      : t`features_c2c_order_detail_transfer_confirmed_nixlavvlu5ghy6iixb4zd`,
  }
  return (
    map[status] ||
    (isBuy ? t`features_c2c_order_third_detail_index_ijltwgjxnf` : t`features_c2c_order_third_detail_index_gdr_co3k6l`)
  )
}
function C2cThirdOrderDetail() {
  const { routeParams } = usePageContext()
  const [state, copyToClipboard] = useCopyToClipboard()
  const [orderDetail] = useOrderDetail(routeParams.id)
  if (!orderDetail) return null
  const isBuy = orderDetail?.buyAndSellRole === 'BUYER'
  const data = {
    isBuy,
    no: orderDetail?.id,
    time: formatDate(orderDetail?.createdTime ?? ''),
    method: t`features_c2c_order_third_detail_index_jhbfmlk0ca`,
    price: `${orderDetail?.currencySymbol} ${formatCurrency(orderDetail?.price)}`,
    num: `${formatCurrency(orderDetail?.number)} ${orderDetail?.coinName}`,
    amount: `${formatCurrency(orderDetail?.totalPrice)} ${orderDetail?.currencyEnName}`,
    coin: orderDetail?.coinName,
    title: orderDetail?.statusCd ? getTitleByStatus(orderDetail?.statusCd, isBuy) : '',
  }

  const handleCopy = () => {
    copyToClipboard(data?.no ?? '')
    state.error
      ? Toast({ message: t`user.secret_key_02`, position: 'top' })
      : Toast({ message: t`user.secret_key_01`, position: 'top' })
  }

  return (
    <div className={styles['third-order-detail']}>
      <div>
        <NavBar title={null} />
        <div className="wrap">
          <div className="header">
            <div className="title">{data.title}</div>
            <div className="sub-title">{t`features_c2c_order_third_detail_index_bx5_gr7flo`}</div>
          </div>
          <div className="order-info">
            <div className="order-title">{t`features_c2c_order_detail_common_w74enagjhtr6aycwkim-w`}</div>
            <div className="info-cell">
              <div className="label">{t`features_c2c_order_detail_common_vt72jn1vzjweq_rdxfutl`}</div>
              <div
                className={classNames('value sell', {
                  buy: data?.isBuy,
                })}
              >
                {data?.isBuy ? t`features_kyc_index_standards_5101189` : t`features_kyc_index_standards_5101190`}{' '}
                {data?.coin}
              </div>
            </div>
            <div className="info-cell">
              <div className="label">{t`features_c2c_order_detail_await_pay_xc0cqka6wlu6euiuggu_c`}</div>
              <div className="value" onClick={handleCopy}>
                {data?.no} <Icon name="copy" hasTheme />
              </div>
            </div>
            <div className="info-cell">
              <div className="label">{t`features_c2c_order_detail_common_jsdjrysahirte36lpdqsa`}</div>
              <div className="value">{data?.time}</div>
            </div>
            <div className="divider"></div>
            <div className="info-cell">
              <div className="label">{t`features_c2c_trade_trade_form_22225101642`}</div>
              <div className="value">{data?.method}</div>
            </div>
            <div className="info-cell">
              <div className="label">{t`features_c2c_trade_trade_form_22225101639`}</div>
              <div className="value">{data?.price}</div>
            </div>
            <div className="info-cell">
              <div className="label">{t`features/trade/spot/price-input-0`}</div>
              <div className="value">{data?.num}</div>
            </div>
            <div className="info-cell">
              <div className="label">{t`features_c2c_trade_trade_form_22225101641`}</div>
              <div className="value">{data?.amount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default C2cThirdOrderDetail
