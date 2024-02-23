import { queryC2cOrderDetail } from '@/apis/c2c/order'
import Icon from '@/components/icon'
import Link from '@/components/link'
import NavBar from '@/components/navbar'
import { C2cOrderStatusEnum } from '@/constants/c2c/order'
import { formatOrderDigits, subscribeC2cOrders } from '@/helper/c2c/order'
import { fetchC2cTradeStoreSettings } from '@/helper/c2c/trade'
import { link } from '@/helper/link'
import { requestWithLoading } from '@/helper/order'
import { getC2cOrderImPageRoutePath, getC2cOrdersPageRoutePath } from '@/helper/route'
import { useC2cOrderModuleInit } from '@/hooks/features/c2c/order'
import { usePageContext } from '@/hooks/use-page-context'
import { OrderStatus_Body, OrderStatus } from '@/plugins/ws/protobuf/ts/proto/OrderStatus'
import { useBaseC2cOrderStore } from '@/store/c2c/order'
import { IC2cOrderDetail } from '@/typings/api/c2c/order'
import { useCreation, useMemoizedFn, useMount, usePrevious, useUpdateEffect } from 'ahooks'
import { useEffect, useState } from 'react'
import { Appealing } from './appealing'
import { AwaitPay } from './await-pay'
import { Canceled } from './canceled'
import { orderDetailContext } from './detail-context'
import { Paid } from './paid'
import { Received } from './received'
import { Result } from './result'
import { TransferConfirmed } from './transfer-confirmed'
import { Transferred } from './transferred'

export function useOrderDetail(id: string) {
  const [orderDetail, setOrderDetail] = useState<IC2cOrderDetail>()
  const update = useMemoizedFn(async () => {
    const res = await requestWithLoading(
      queryC2cOrderDetail({
        id,
      })
    )
    if (res.isOk && res.data) {
      setOrderDetail(formatOrderDigits(res.data as any) as any as IC2cOrderDetail)
    } else {
      link(getC2cOrdersPageRoutePath(), {
        overwriteLastHistoryEntry: true,
      })
    }
  })
  useMount(update)
  useEffect(() => {
    return subscribeC2cOrders((orders: OrderStatus[]) => {
      const targetOrder = orders.find(order => order.orderStatus[0].orderId?.toString() === id.toString())
      if (targetOrder) {
        update()
      }
    })
  }, [])

  return [orderDetail, update] as const
}

function C2cOrderDetail() {
  const { routeParams } = usePageContext()
  useC2cOrderModuleInit()
  const [orderDetail, update] = useOrderDetail(routeParams.id)
  const DetailComponent = {
    [C2cOrderStatusEnum.awaitPay]: AwaitPay,
    [C2cOrderStatusEnum.paid]: Paid,
    [C2cOrderStatusEnum.received]: Received,
    [C2cOrderStatusEnum.transferred]: Transferred,
    [C2cOrderStatusEnum.transferConfirmed]: TransferConfirmed,
    [C2cOrderStatusEnum.manualCanceled]: Canceled,
    [C2cOrderStatusEnum.appealing]: Appealing,
    [C2cOrderStatusEnum.canceledAppealing]: Appealing,
    [C2cOrderStatusEnum.appealFinished]: Appealing,
    [C2cOrderStatusEnum.canceledAppealFinished]: Appealing,
  }[orderDetail?.statusCd as any]
  const [resultVisible, setResultVisible] = useState(false)

  const contextValue = useCreation(() => {
    return {
      detail: orderDetail,
      updateDetail: update,
      showResultPage: () => {
        setResultVisible(true)
      },
    }
  }, [orderDetail, update])

  const onClickDetail = () => {
    update()
    setResultVisible(false)
  }
  const preStatus = usePrevious(orderDetail?.statusCd)
  // 请求数据完成后，订单状态更新过且当前状态为已转币，就展示结果页
  useUpdateEffect(() => {
    if (preStatus && [C2cOrderStatusEnum.transferConfirmed].includes(orderDetail?.statusCd as any)) {
      setResultVisible(true)
    }
  }, [orderDetail?.statusCd])
  // 买家第一步不展示图标
  const [chatIconVisible, setChatIconVisible] = useState(true)
  const iconVisible = chatIconVisible && !resultVisible

  if (!orderDetail) {
    return null
  }

  return (
    <orderDetailContext.Provider value={contextValue}>
      <div className="text-sm pb-36">
        <NavBar
          title={null}
          right={
            iconVisible && (
              <Link href={getC2cOrderImPageRoutePath(orderDetail.id)}>
                <Icon className="text-xl" name="message" hasTheme />
              </Link>
            )
          }
        />
        {resultVisible ? (
          <Result order={orderDetail} onClickDetail={onClickDetail} />
        ) : (
          <DetailComponent setChatIconVisible={setChatIconVisible} update={update} order={orderDetail} />
        )}
      </div>
    </orderDetailContext.Provider>
  )
}

export default C2cOrderDetail
