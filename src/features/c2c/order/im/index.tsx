import { lazy } from 'react'
import Icon from '@/components/icon'
import NavBar from '@/components/navbar'
import { C2cOrderStatusEnum, getC2cOrderStatusEnumNameInIm } from '@/constants/c2c/order'
import { usePageContext } from '@/hooks/use-page-context'
import { IC2cOrderDetail } from '@/typings/api/c2c/order'
import classNames from 'classnames'
import AsyncSuspense from '@/components/async-suspense'
import ErrorBoundary from '@/components/error-boundary'
import { useC2cOrderModuleInit } from '@/hooks/features/c2c/order'
import { useOrderDetail } from '../detail'
import { useOrderStatus } from '../order-list'
import styles from './index.module.css'
import { OrderStatusInIm } from './order-status'

const CTcIm = lazy(() => import('@/features/c2c/im'))

function getC2cOrderStatusEnumColorInIm(order: IC2cOrderDetail) {
  const gray = 'text-text_color_02'
  const green = 'text-success_color'
  const red = 'text-warning_color'
  const brand = 'text-brand_color'

  const common = {
    [C2cOrderStatusEnum.systemCanceled]: gray,
    [C2cOrderStatusEnum.manualCanceled]: gray,
    [C2cOrderStatusEnum.canceledAppealing]: brand,
    [C2cOrderStatusEnum.appealCanceled]: gray,
    [C2cOrderStatusEnum.buyerCanceled]: gray,
    [C2cOrderStatusEnum.sellerCanceled]: gray,
    [C2cOrderStatusEnum.awaitPay]: red,
    [C2cOrderStatusEnum.paid]: red,
    [C2cOrderStatusEnum.received]: red,
    [C2cOrderStatusEnum.transferred]: red,
    [C2cOrderStatusEnum.transferConfirmed]: gray,
  }

  return common[order.statusCd as any] || (order.isAppealWinner ? green : red)
}

function C2cOrderIm() {
  const { routeParams } = usePageContext()
  const [orderDetail] = useOrderDetail(routeParams.id)
  const { oppositeInfo } = useOrderStatus(orderDetail || ({} as any))
  const statusText = getC2cOrderStatusEnumNameInIm(orderDetail || ({} as any))
  const statusColor = getC2cOrderStatusEnumColorInIm(orderDetail || ({} as any))
  useC2cOrderModuleInit()
  if (!orderDetail) {
    return null
  }

  return (
    <div className={styles['im-page-wrapper']}>
      <NavBar
        title={
          <div className="flex items-center">
            <div className="nickname">{oppositeInfo?.nickName}</div>
            {oppositeInfo?.isMerchant && <Icon name="user_verified" className="ml-1" isRemoteUrl />}
          </div>
        }
        right={<div className={classNames('text-sm', statusColor)}>{statusText}</div>}
      />
      {orderDetail && <OrderStatusInIm orderDetail={orderDetail} />}

      <AsyncSuspense noLoading>
        <ErrorBoundary>
          <CTcIm orderDetails={orderDetail!} />
        </ErrorBoundary>
      </AsyncSuspense>
    </div>
  )
}

export default C2cOrderIm
