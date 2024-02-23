import { queryC2cOrderList } from '@/apis/c2c/order'
import CommonList from '@/components/common-list/list'
import Icon from '@/components/icon'
import {
  C2cOrderDirectionEnum,
  C2cOrderIsOtcEnum,
  C2cOrderStatusEnum,
  getC2cOrderDirectionEnumName,
  getC2cOrderStatusEnumNameInList,
  getOtcOrderStatusEnumName,
} from '@/constants/c2c/order'
import { C2cTradeFilterTradeWayEnum } from '@/constants/c2c/trade'
import { formatOrderDigits, subscribeC2cOrders } from '@/helper/c2c/order'
import { fillZero, formatDate } from '@/helper/date'
import { formatCurrency, formatNumberDecimal } from '@/helper/decimal'
import { replaceEmpty } from '@/helper/filters'
import { link } from '@/helper/link'
import { requestWithLoading } from '@/helper/order'
import { getC2cOrderDetailPageRoutePath, getC2cThirdOrderDetailPageRoutePath } from '@/helper/route'
import { getTextFromStoreEnums } from '@/helper/store'
import { useLoadMore } from '@/hooks/use-load-more'
import { OrderStatus } from '@/plugins/ws/protobuf/ts/proto/OrderStatus'
import { baseC2cOrderStore } from '@/store/c2c/order'
import { IC2cOrderDetail, IC2cOrderItem } from '@/typings/api/c2c/order'
import { IC2cPayment } from '@/typings/api/c2c/trade'
import { t } from '@lingui/macro'
import { oss_svg_image_domain_address } from '@/constants/oss'
import LazyImage from '@/components/lazy-image'
import { IncreaseTag } from '@/nbit/react'
import { useCountDown, useUpdateEffect } from 'ahooks'
import classNames from 'classnames'
import { useEffect } from 'react'
import { NetworkTag } from '../common/side-tag'
import styles from './common.module.css'
import { useOrderContext } from './order-context'

type IOrderItemProps = {
  item: IC2cOrderItem
}
export function useOrderStatus(item2: IC2cOrderItem | IC2cOrderDetail) {
  const item = item2 as IC2cOrderDetail
  const isBuy = item.buyAndSellRole === 'BUYER'
  // 是否在进行中
  const isProcessing = [
    C2cOrderStatusEnum.awaitPay,
    C2cOrderStatusEnum.awaitPay2,
    C2cOrderStatusEnum.paid,
    C2cOrderStatusEnum.received,
    C2cOrderStatusEnum.transferred,
  ].includes(item.statusCd as any)
  const isAppealing = [C2cOrderStatusEnum.appealing, C2cOrderStatusEnum.canceledAppealing].includes(
    item.statusCd as any
  )
  const payment: IC2cPayment = {
    type: item.paymentName,
    accounts: [],
    name: getTextFromStoreEnums(item.paymentName, baseC2cOrderStore.getState().orderEnums.payments.enums),
    bankName: item.paymentBankOfDeposit,
    account: item.paymentAccount,
    qrcode: item.paymentQrCodeAddr,
    paymentDetails: item.paymentDetails,
  }
  // 对手信息
  const isMerchant = isBuy ? item.sellerIsMerchant : item.buyerIsMerchant
  const buyerNickName = (item.buyerIsMerchant ? item.buyerMerNickName : item.buyerUserName) || item.buyerUid?.toString()
  const sellerNickName =
    (item.sellerIsMerchant ? item.sellerMerNickName : item.sellerUserName) || item.sellerUid?.toString()
  const appealWinnerIsBuyer = item.appealWinnerUid?.toString() === item.buyerUid?.toString()
  const completedOrderRate = isBuy ? item.sellerCompletedOrderRate : item.buyerCompletedOrderRate
  const oppositeInfo = {
    nickName: !isBuy ? buyerNickName : sellerNickName,
    appealWinnerNickName: appealWinnerIsBuyer ? buyerNickName : sellerNickName,

    orderRate: `${completedOrderRate || 0}%`,
    buyerNickName,
    uid: isBuy ? item.sellerUid : item.buyerUid,
    isMerchant,
  }
  const isOutside = item.dealTypeCd === C2cTradeFilterTradeWayEnum.outside
  const isAppealFailed =
    [C2cOrderStatusEnum.appealFinished, C2cOrderStatusEnum.canceledAppealFinished].includes(item.statusCd as any) &&
    !item.isAppealWinner

  return {
    isBuy,
    isProcessing,
    isAppealing,
    payment,
    oppositeInfo,
    isAppealFailed,
    isOutside,
    direction: isBuy ? C2cOrderDirectionEnum.buy : C2cOrderDirectionEnum.sell,
  }
}
export function useOrderCountdownNode(item: IC2cOrderItem | IC2cOrderDetail) {
  const { isProcessing } = useOrderStatus(item)
  const [, { minutes, seconds }] = useCountDown({
    targetDate: new Date(item.expireTime!),
  })
  return isProcessing ? (
    <span className="text-brand_color">
      {fillZero(minutes)}:{fillZero(seconds)}
    </span>
  ) : null
}

function OrderItemHeader({ item }: IOrderItemProps) {
  const { isBuy, isAppealFailed, direction, isProcessing, isAppealing } = useOrderStatus(item)
  const statusText = getC2cOrderStatusEnumNameInList(item, direction)
  const countdownNode = useOrderCountdownNode(item)

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <span
          className={classNames('mr-1', {
            'text-buy_up_color': isBuy,
            'text-sell_down_color': !isBuy,
          })}
        >
          {getC2cOrderDirectionEnumName(direction)}
        </span>
        <span className="mr-2">{item.coinName}</span>
        {item.mainChainName && <NetworkTag>{item.mainChainName}</NetworkTag>}
      </div>
      <div>
        <span
          className={classNames('text-xs', {
            'text-warning_color': isAppealing || isAppealFailed,
            'text-success_color': item.isAppealWinner,
            'text-brand_color': isProcessing,
            'text-text_color_02': !isAppealing && !isProcessing,
          })}
        >
          {statusText} {countdownNode}
          {countdownNode ? <span className="text-brand_color">s</span> : ''}
        </span>
        <Icon name="next_arrow" hasTheme />
      </div>
    </div>
  )
}

function OrderItem({ item }: IOrderItemProps) {
  const toDetail = () => {
    link(getC2cOrderDetailPageRoutePath(item.id))
  }
  const { oppositeInfo } = useOrderStatus(item)
  return (
    <div onClick={toDetail} className={classNames(styles['order-item-wrapper'], ' rv-hairline--bottom')}>
      <div className="mb-4">
        <OrderItemHeader item={item} />
      </div>
      <div className="gray-text-wrapper mb-1">
        <span>
          {t`features_c2c_trade_trade_form_22225101639`} {formatCurrency(item.price)} {item.currencyEnName}
        </span>
        <span>{formatDate(item.createdTime)}</span>
      </div>
      <div className="gray-text-wrapper mb-4">
        <span>
          {t`features/trade/spot/price-input-0`} {formatCurrency(item.number)} {item.coinName}
        </span>
        <span className="total-amount">
          {formatCurrency(item.totalPrice)} {item.currencyEnName}
        </span>
      </div>
      <div className="gray-text-wrapper">
        <div className="flex items-center flex-1 w-0 mr-4">
          <span className="mr-1 text-text_color_01 whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
            {oppositeInfo.nickName}
          </span>
          {oppositeInfo.isMerchant && <Icon hiddenMarginTop className="text-base" name="user_verified" isRemoteUrl />}
        </div>
        <span>{oppositeInfo.orderRate}</span>
      </div>
    </div>
  )
}

function OtcOrderItem({ item }: IOrderItemProps) {
  const { isBuy, direction } = useOrderStatus(item)
  const statusText = getOtcOrderStatusEnumName(item?.statusCd)
  const toDetail = () => {
    link(getC2cThirdOrderDetailPageRoutePath(item.id))
  }

  const isFinish = C2cOrderStatusEnum.transferConfirmed === item.statusCd
  const isCancel = C2cOrderStatusEnum.canceled === item.statusCd
  return (
    <div onClick={toDetail} className={classNames(styles['order-item-wrapper'], ' rv-hairline--bottom')}>
      <div className="flex justify-between mb-4">
        <div>{t`features_c2c_trade_switch_trade_mode_0wuqc5nstq`}</div>
        <div>
          <span
            className={classNames('text-xs', {
              'text-sell_down_color': !isFinish && !isCancel,
              'text-brand_color': isFinish,
              'text-text_color_02': isCancel,
            })}
          >
            {statusText}
          </span>
          <Icon name="next_arrow" hasTheme />
        </div>
      </div>
      <div className="gray-text-wrapper mb-1">
        <span>
          {t`features_c2c_trade_order_book_detail_filters_9b6f9s58jm`} {formatCurrency(item.totalPrice)}{' '}
          {item.currencyEnName}
        </span>

        <span>{formatDate(item.createdTime)}</span>
      </div>
      <div className="gray-text-wrapper mb-4">
        <div className="flex items-center">
          <span className="mr-1">{t`features_orders_spot_spot_filters_modal_510258`}</span>
          <span
            className={classNames('mr-1', {
              'text-buy_up_color': isBuy,
              'text-sell_down_color': !isBuy,
            })}
          >
            {getC2cOrderDirectionEnumName(direction)}
          </span>
        </div>
        <div>
          <span className="mr-1">{t`features_assets_recharges_index_xsqgcmbrlb`}</span>
          <span className="total-amount">
            ≈ {formatCurrency(item.number)} {item.coinName}
          </span>
        </div>
      </div>
    </div>
  )
}

export function OrderList() {
  const { params, onParamsChange } = useOrderContext()
  const { list, loadMore, finished, refresh } = useLoadMore({
    async fetchData(page) {
      const { direction, tradeAreas, tradeTypes, key, beginDate, endDate, statusTab, ...clonedParams } = { ...params }
      if (!tradeAreas?.length) {
        return []
      }
      delete clonedParams.currentCoin
      const res = await requestWithLoading(
        queryC2cOrderList({
          ...clonedParams,
          statusCd: statusTab,
          createdTimeBegin: beginDate || undefined,
          createdTimeEnd: endDate || undefined,
          searchKey: key || undefined,
          areaIds: tradeAreas?.join(','),
          dealTypeCd: (tradeTypes?.length || 0) > 1 ? '' : tradeTypes?.[0],
          directCd: (direction?.length || 0) > 1 ? '' : direction?.[0],
          pageNum: page,
        }),
        page === 1 ? 100 : 10000
      )
      if (!res.isOk || !res.data || !res.data.list) {
        return []
      }
      return res.data.list.map(item => formatOrderDigits(item))
    },
  })
  useUpdateEffect(() => {
    refresh()
  }, [params])
  useEffect(() => {
    return subscribeC2cOrders((orders: OrderStatus[]) => {
      refresh()
    })
  }, [])

  return (
    <div>
      <CommonList
        refreshing
        emptyClassName="pt-8 pb-20"
        onRefreshing={refresh}
        onLoadMore={loadMore}
        finished={finished}
        listChildren={undefined}
        showEmpty={list.length === 0}
      >
        <div>
          {list.map(item => {
            return item.isOtc === C2cOrderIsOtcEnum.Yes ? (
              <OtcOrderItem item={item as any} key={item.id} />
            ) : (
              <OrderItem item={item as any} key={item.id} />
            )
          })}
        </div>
      </CommonList>
    </div>
  )
}
