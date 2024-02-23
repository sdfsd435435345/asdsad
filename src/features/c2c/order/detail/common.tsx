import Icon from '@/components/icon'
import Link from '@/components/link'
import Tooltip from '@/components/tooltip'
import { getPaymentIsBankCard } from '@/helper/c2c/order'
import { fillZero, formatDate } from '@/helper/date'
import { replaceEmpty } from '@/helper/filters'
import { IC2cOrderDetail } from '@/typings/api/c2c/order'
import { IC2cPayment } from '@/typings/api/c2c/trade'
import { t } from '@lingui/macro'
import { Button, Collapse, Toast } from 'react-vant'
import type { CollapseItemInstance } from 'react-vant/es/collapse/PropsType'
import { useCountDown } from 'ahooks'
import classNames from 'classnames'
import { link } from '@/helper/link'
import { ReactNode, useRef, useState } from 'react'
import { useCopyToClipboard } from 'react-use'
import {
  getAssetsHistoryPageRoutePath,
  getAssetsPageRoutePath,
  getC2cCenterPageRoutePath,
  getC2cOrderAppealPageRoutePath,
  getC2cOrderImPageRoutePath,
} from '@/helper/route'
import { oss_svg_image_domain_address } from '@/constants/oss'
import LazyImage from '@/components/lazy-image'
import { C2cOrderStatusEnum } from '@/constants/c2c/order'
import { AssetsRouteEnum } from '@/constants/assets'
import { C2cTradeAdPaymentEnum } from '@/constants/c2c/trade'
import { getAccountEllipsis } from '@/helper/c2c/trade'
import SideTag, { NetworkTag } from '../../common/side-tag'
import { PaymentItem } from '../../trade/payment-item'
import { QrCodeIcon } from '../../trade/select-payment'
import { useOrderCountdownNode, useOrderStatus } from '../order-list'
import styles from './common.module.css'

type ICommonProps = {
  order: IC2cOrderDetail
}

type ICommonHeaderProps = {
  order: IC2cOrderDetail
  title: string
  info: string
  hasGap?: boolean
  children?: ReactNode
}

export function C2cOrderDetailHeader({ order, hasGap, children, title, info }: ICommonHeaderProps) {
  const { isProcessing, isOutside } = useOrderStatus(order)
  const countdownNode = useOrderCountdownNode(order)

  return (
    <div className={classNames(styles['header-wrapper-sticky'])}>
      <div className="p-4">
        <div className={styles['header-wrapper']}>
          <div>
            <div className="text-xl font-medium">{title}</div>
            <div className={classNames('mt-1 text-xs', isProcessing ? 'text-text_color_02' : 'text-text_color_01')}>
              {info}
              {isProcessing && (
                <>
                  <span className="text-sm">: {countdownNode}</span>
                  <span className="text-brand_color"> s</span>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center mt-1">
            {order.mainchainAddrAddr && <NetworkTag className="mr-1 font-medium">{order.mainchainAddrName}</NetworkTag>}
            <SideTag isOutside={isOutside} />
          </div>
        </div>
        {children && <div className="mt-3">{children}</div>}
      </div>

      {hasGap && <div className="h-1 bg-line_color_02"></div>}
    </div>
  )
}
type IC2cOrderDetailCounterpartyInfoProps = {
  order: IC2cOrderDetail
  onlyNickName?: boolean
  /** 展示聊天图标，只有买家第一步用 */
  withChat?: boolean
}
/** 对手方信息 */
export function C2cOrderDetailCounterpartyInfo({
  order,
  withChat,
  onlyNickName,
}: IC2cOrderDetailCounterpartyInfoProps) {
  const { isBuy, oppositeInfo } = useOrderStatus(order)
  const label = onlyNickName
    ? isBuy
      ? t`features_c2c_order_detail_common_z6vzt_xtqagpcjdpy7yay`
      : t`features_c2c_order_detail_common_-ehyvz3u5grze3ii3dlrm`
    : isBuy
    ? t`features_c2c_order_detail_common_xehtikfx4jv9vb4dxof8r`
    : t`features_c2c_order_detail_common_bddbhjb3qcethl_aznrvt`
  const isKyc = true
  const isMerchant = oppositeInfo.isMerchant
  const nickName = oppositeInfo.nickName
  const tips = [
    isMerchant
      ? t`features_c2c_order_detail_common_0tduvujo-fs8obdvp1owu`
      : isKyc
      ? t`features_c2c_order_detail_common_r4x-jrj7zqjz9w_46avoa`
      : '',
    t`features_c2c_order_detail_common_b-kgehpja3soqbkbeo3wk`,
  ]
  const toUserCenter = () => {
    link(getC2cCenterPageRoutePath(oppositeInfo.uid))
  }
  const imPath = getC2cOrderImPageRoutePath(order.id)
  const toIm = e => {
    e.stopPropagation()
    link(imPath)
  }

  return (
    <div
      className={classNames(styles['counterparty-info-wrapper'], {
        'only-nickname rv-hairline--bottom': onlyNickName,
      })}
    >
      <div
        className={classNames('box', {
          'overflow-hidden': withChat,
        })}
      >
        <div onClick={toUserCenter} className="flex items-center justify-between">
          {!withChat && (
            <span
              className={classNames('whitespace-nowrap', {
                'text-text_color_02': onlyNickName,
              })}
            >
              {label}
            </span>
          )}
          <div
            className={classNames('flex-1 flex ml-2 w-0 items-center', {
              'justify-end': !withChat,
            })}
          >
            <span className="font-medium whitespace-nowrap max-w-full overflow-hidden text-ellipsis">{nickName}</span>
            {isMerchant && <Icon hiddenMarginTop isRemoteUrl className="ml-1 text-base" name="user_verified" />}
          </div>
          {withChat && (
            <div
              onClick={toIm}
              className="chat-wrapper bg-cover"
              style={{
                backgroundImage: `url(${oss_svg_image_domain_address}c2c/c2c_chat_icon_bg.png)`,
              }}
            >
              <Icon hiddenMarginTop name="c2c_message" className="mr-2" />
              <span className="text-xs">
                {isMerchant
                  ? t`features_c2c_order_detail_common__msnah2qgqkh2jejg5zyi`
                  : t`constants_c2c_order_clf0jkq_qfgfvtbmlrm_1`}
              </span>
            </div>
          )}
        </div>
        {!onlyNickName && (
          <div className="mt-2">
            {tips.map(tip => tip && <div className="text-xs text-text_color_02 mb-1 last:mb-0">* {tip}</div>)}
          </div>
        )}
      </div>
    </div>
  )
}

export function TextWithCopy({ text, copyValue, onlyIcon }: { text: string; copyValue?: string; onlyIcon?: boolean }) {
  const [, copyToClipboard] = useCopyToClipboard()

  const copy = () => {
    copyToClipboard(copyValue || text)
    Toast.success(t`features_orders_order_detail_5101067`)
  }

  return (
    <div className="flex items-center">
      <span
        className={classNames('mr-2', {
          hidden: onlyIcon,
        })}
      >
        {text}
      </span>
      <Icon hiddenMarginTop name="copy" hasTheme onClick={copy} />
    </div>
  )
}

export type IPropListProps = {
  list: {
    label: string | ReactNode
    id?: string
    value: string | ReactNode
    lineClamp?: number
    withCopy?: boolean
    copyValue?: string
    className?: string
  }[]
  bottomBorder?: boolean
  size?: 'small' | 'normal' | 'mini'
}
export function PropList({ list, size = 'normal', bottomBorder }: IPropListProps) {
  return (
    <div
      className={classNames(styles['prop-list'], `size-${size}`, {
        'rv-hairline--bottom': bottomBorder,
      })}
    >
      {list.map(item => {
        const valueClassName = classNames('value', `line-clamp-${item.lineClamp}`, {
          'mr-2': item.withCopy,
        })
        return (
          <div
            key={typeof item.label === 'string' ? item.label : item.id}
            className={classNames('prop-item', item.className)}
          >
            <div className="text-text_color_02">{item.label}</div>
            <div className="flex w-0 flex-1 ml-2 text-text_color_01 justify-end text-right">
              {!item.lineClamp ? (
                <div className={valueClassName}>{item.value || replaceEmpty(item.value as any)}</div>
              ) : (
                <Tooltip className={valueClassName} content={item.value}>
                  {item.value || replaceEmpty(item.value as any)}
                </Tooltip>
              )}
              {item.withCopy && <TextWithCopy onlyIcon text={item.copyValue || (item.value as string)} />}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export function getRemarkProp(remark: string) {
  return {
    label: t`features_c2c_advertise_post_advertise_post_advertise_confirm_index_4ouee0zpdlz7t43ziuahl`,
    value: replaceEmpty(remark),
    className: '!items-start',
  }
}
export function getAddressProps(order: IC2cOrderDetail, withCoinName = false) {
  const isBuy = order.buyAndSellRole === 'BUYER'
  const addressProps: IPropListProps['list'] = [
    ...(withCoinName
      ? [
          {
            label: t`assets.layout.tabs.coins`,
            value: order.coinName,
          },
          {
            label: t`features_c2c_trade_trade_form_22225101640`,
            value: order.mainchainAddrName,
          },
        ]
      : []),
    ...(order.mainchainAddrAddr
      ? [
          {
            label: !isBuy
              ? t`features_c2c_advertise_post_advertise_index_222222225101685`
              : t`features_c2c_order_detail_common_pxc6fisvmoz2ur3zh8bek`,
            value: order.mainchainAddrAddr,
            lineClamp: 1,
            withCopy: !isBuy,
          },
        ]
      : []),
    ...(order.mainchainAddrMemo
      ? [
          {
            label: !isBuy
              ? t`features_c2c_order_detail_common_ayjcdvvwlv5qnyh2r1avs`
              : t`features_c2c_order_detail_common_qdbbemhyf_nnxrj5ozv9m`,
            value: <TextWithCopy text={order.mainchainAddrMemo || ''} />,
          },
        ]
      : []),
  ]

  return addressProps
}
export function getPaymentProps({
  payment,
  withName,
  widthPaymentName,
  status,
  isBuy,
  inConfirmReceive,
}: IGetPaymentPropsParams) {
  const isBankCard = getPaymentIsBankCard(payment)
  let accountLabel = t`features_message_center_index_5101352`
  if (isBankCard) {
    accountLabel = inConfirmReceive
      ? t`features_c2c_order_detail_common_fawdui0knm89gt22ilz9q`
      : t`features_c2c_order_detail_common_2kmm8txlcjxmrwuntbsao`
  } else {
    switch (status) {
      case C2cOrderStatusEnum.awaitPay:
        accountLabel = isBuy
          ? {
              [C2cTradeAdPaymentEnum.alipay]: t`features_message_center_index_5101363`,
              [C2cTradeAdPaymentEnum.wechat]: t`features_message_center_index_5101362`,
            }[payment.type] || t`features_message_center_index_5101352`
          : t`features_message_center_index_5101352`
        break
      case C2cOrderStatusEnum.paid:
      case C2cOrderStatusEnum.received:
      case C2cOrderStatusEnum.transferred:
      case C2cOrderStatusEnum.transferConfirmed:
      case C2cOrderStatusEnum.canceled:
      case C2cOrderStatusEnum.canceledAppealFinished:
        accountLabel = isBuy
          ? t`features_user_common_choose_verification_method_index_510240`
          : t`features_message_center_index_5101352`
        break
      default:
        break
    }
  }
  const baseProps: IPropListProps['list'] = [
    ...(widthPaymentName
      ? [
          {
            label: t`features_c2c_advertise_post_advertise_payment_form_index_njsea2zvnnjsyzm1ctsum`,
            value: <PaymentItem className={inConfirmReceive ? 'text-xs' : 'text-sm'} payment={payment} />,
          },
        ]
      : []),
    ...(withName
      ? [
          {
            label: t`features_c2c_order_detail_common_yxajmox5t6kvo0yqxjctz`,
            value: withName,
          },
        ]
      : []),
    payment.paymentDetails
      ? (null as any)
      : {
          label: accountLabel,
          value: isBankCard ? payment.bankName : getAccountEllipsis(payment.account || '', false),
          withCopy: !isBankCard && isBuy,
          lineClamp: 1,
        },
    ...(payment.paymentDetails
      ? [
          {
            label: !isBuy
              ? t`features_c2c_order_detail_common_vmwu61k2fl`
              : t`features_c2c_order_detail_common_wdbkezvrke`,
            value: payment.paymentDetails,
          },
        ]
      : [
          (payment.account && isBankCard) || payment.qrcode
            ? {
                label: isBankCard
                  ? t`features_c2c_order_detail_common_kuiyg7am4vegs0kuddcqn`
                  : t`features_agent_agent_manage_index_5101559`,
                value: isBankCard ? (
                  getAccountEllipsis(payment.account || '')
                ) : (
                  <QrCodeIcon paymentName={payment.name} isActive url={payment.qrcode} />
                ),
                withCopy: isBankCard && isBuy,
                lineClamp: isBankCard ? 1 : undefined,
                copyValue: payment.account,
              }
            : (null as any),
        ]),
  ].filter(a => a)

  return baseProps
}
export function C2cOrderDetailOrderInfo({
  order,
  addressVisible,
  remarkVisible = true,
  paymentVisible = false,
  collapse,
}: ICommonProps & {
  addressVisible?: boolean
  remarkVisible?: boolean
  paymentVisible?: boolean
  /** 是否可折叠 */
  collapse?: boolean
}) {
  const collapseItemRef = useRef<CollapseItemInstance>(null)
  const [expanded, setExpanded] = useState(!collapse)
  const onClickIcon = e => {
    if (!collapse) return
    e.stopPropagation()
    setExpanded(!expanded)
  }
  const { isBuy, payment, isOutside } = useOrderStatus(order)

  const baseProps: IPropListProps['list'] = [
    {
      label: t`features_c2c_order_detail_common_vt72jn1vzjweq_rdxfutl`,
      value: (
        <div
          className={classNames('font-medium', {
            'text-buy_up_color': isBuy,
            'text-sell_down_color': !isBuy,
          })}
        >
          {isBuy ? t`features_kyc_index_standards_5101189` : t`features_kyc_index_standards_5101190`} {order.coinName}
        </div>
      ),
    },
    {
      label: t`features_c2c_order_detail_await_pay_xc0cqka6wlu6euiuggu_c`,
      value: <TextWithCopy text={order.id} />,
    },
    {
      label: t`features_c2c_order_detail_common_jsdjrysahirte36lpdqsa`,
      value: formatDate(order.createdTime),
    },
  ]

  const addressProps: IPropListProps['list'] = getAddressProps(order)
  const remarkProps: IPropListProps['list'] = [getRemarkProp(order.remark || '')]
  const paymentProps = getPaymentProps({
    payment,
    widthPaymentName: true,
    withName: order.paymentUserName,
    isBuy,
    status: order.statusCd as any,
  })

  return (
    <div className={styles['order-info-wrapper']}>
      <div onClick={onClickIcon} className="text-base items-center font-medium mt-6 flex justify-between">
        <span>{t`features_c2c_order_detail_common_w74enagjhtr6aycwkim-w`}</span>
        {collapse && (
          <Icon hiddenMarginTop hasTheme name={expanded ? 'asset_view_coin_fold' : 'asset_view_coin_unfold'} />
        )}
      </div>
      <Collapse initExpanded="" value={expanded ? [order.id] : []}>
        <Collapse.Item className="text-sm text-text_color_01" ref={collapseItemRef} name={order.id}>
          <div>
            <div>
              <PropList list={baseProps} bottomBorder />
              {addressVisible && isOutside && <PropList list={addressProps} bottomBorder />}
              {paymentVisible && <PropList list={paymentProps} bottomBorder />}
              {remarkVisible && <PropList list={remarkProps} />}
            </div>
          </div>
        </Collapse.Item>
      </Collapse>
    </div>
  )
}
type IGetPaymentPropsParams = {
  payment: IC2cPayment
  widthPaymentName?: boolean
  withName?: string
  status: C2cOrderStatusEnum
  isBuy?: boolean
  inConfirmReceive?: boolean
}

export function RechargeRecordsLink({ isOutside }) {
  return (
    <Link
      href={getAssetsHistoryPageRoutePath(!isOutside ? AssetsRouteEnum.c2c : AssetsRouteEnum.coins)}
      className="text-brand_color mb-4 block"
    >
      {t`features_c2c_order_detail_common_mdz252vlluu92gfeweklw`}&gt;
    </Link>
  )
}

export function StepIcon({ index }: { index: number }) {
  return (
    <div className={styles['step-icon']}>
      <div className="inner">{index}</div>
    </div>
  )
}

export function ActionsWrapper({ children, flex = true }: { children: ReactNode; flex?: boolean }) {
  return (
    <div
      className={classNames(styles['actions-wrapper'], {
        flex,
      })}
    >
      {children}
    </div>
  )
}
export function AppealLink({ order }: ICommonProps) {
  return (
    <Link href={getC2cOrderAppealPageRoutePath(order.id)} className="text-brand_color mb-4 block">
      {t`features_c2c_order_detail_common_1om6pmmrcwlniehtf6jcg`}&gt;
    </Link>
  )
}
export function AppealButton({
  order,
  className,
}: ICommonProps & {
  className?: string
}) {
  let [ms, { minutes, seconds }] = useCountDown({
    targetDate: new Date(Number(order.updatedTime!) + 5 * 60 * 1000),
  })
  const { isProcessing, isBuy } = useOrderStatus(order)
  const toAppeal = () => {
    link(getC2cOrderAppealPageRoutePath(order.id))
  }
  // 只有买家待确认收币 & 卖家待确认收款才需要倒计时
  if (
    !(
      isProcessing &&
      ((isBuy && order.statusCd === C2cOrderStatusEnum.transferred) ||
        (!isBuy && order.statusCd === C2cOrderStatusEnum.paid))
    )
  ) {
    ms = 0
  }

  return (
    <Button
      onClick={toAppeal}
      disabled={ms > 0}
      block
      className={classNames('gray-button disable-bg-shallow', className)}
    >
      {t`features_c2c_order_appeal_index_iuiem_zlsewnnvwfxq_dk`}
      {ms > 0 && ` (${fillZero(minutes)}:${fillZero(seconds)} s)`}
    </Button>
  )
}
export function AssetsButton({ order }: ICommonProps) {
  const { isOutside } = useOrderStatus(order)
  const toAssets = () => {
    link(isOutside ? getAssetsPageRoutePath(AssetsRouteEnum.coins) : getAssetsPageRoutePath(AssetsRouteEnum.c2c))
  }

  return (
    <Button onClick={toAssets} type="primary" block>
      {t`assets.withdraw.success.view-assets`}
    </Button>
  )
}

export function RechargeRecordButton({ order }: ICommonProps) {
  const { isOutside } = useOrderStatus(order)
  const onConfirm = async () => {
    link(getAssetsHistoryPageRoutePath(!isOutside ? AssetsRouteEnum.c2c : AssetsRouteEnum.coins))
  }

  return (
    <Button onClick={onConfirm} type="primary" block>
      {t`features_c2c_order_detail_common_j7rp9la9c7rs1uwcm2dey`}
    </Button>
  )
}
