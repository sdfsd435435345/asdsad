/**
 * 广告单详情 - 历史订单
 */
import { t } from '@lingui/macro'
import { useEffect, useState } from 'react'
import { CountDown } from 'react-vant'
import Icon from '@/components/icon'
import CommonList from '@/components/common-list/list'
import { getAdvertOrderHistory } from '@/apis/c2c/advertise'
import { AdvertiseOrderStatusEnum, getAdvertiseOrderStatusName } from '@/constants/c2c/advertise'
import { formatDate } from '@/helper/date'
import { formatCurrency } from '@/helper/decimal'
import { usePageContext } from '@/hooks/use-page-context'
import { IAdvertOrderHistoryList } from '@/typings/api/c2c/advertise/post-advertise'
import { decimalUtils } from '@/nbit'
import { link } from '@/helper/link'
import { getC2cOrderDetailPageRoutePath } from '@/helper/route'
import LazyImage from '@/components/lazy-image'
import { oss_svg_image_domain_address } from '@/constants/oss'
import { OrderBuyAndSellRoleTypeEnum } from '@/constants/c2c/common'
import { subscribeC2cOrders } from '@/helper/c2c/order'
import { OrderStatus } from '@/plugins/ws/protobuf/ts/proto/OrderStatus'

import styles from './index.module.css'

function HistoricalOrder() {
  const pageContext = usePageContext()
  const [finished, setFinished] = useState(false)
  const [list, setList] = useState<IAdvertOrderHistoryList[]>([])
  const [pageNum, setPageNum] = useState(1)

  /**
   * 查询历史订单列表
   * @param isRefresh
   * @returns
   */
  const onLoadList = async (isRefresh = false) => {
    const res = await getAdvertOrderHistory({
      advertId: pageContext.routeParams.id,
      pageNum: isRefresh ? 1 : pageNum,
      pageSize: 10,
    })

    const { isOk, data } = res || {}
    if (!isOk || !data) {
      setFinished(true)
      return
    }

    const nList: IAdvertOrderHistoryList[] = isRefresh ? data.list : [...list, ...data?.list]
    setList(nList)
    setFinished(nList.length >= +data?.total)
    setPageNum(pageNum + 1)
  }

  useEffect(() => {
    return subscribeC2cOrders((orders: OrderStatus[]) => {
      if (orders && orders.length > 0) onLoadList(true)
    })
  }, [])

  return (
    <div className={styles['historical-order-root']}>
      <span className="title">{t`features_c2c_advertise_advertise_details_historical_order_index_j9zfduydfs5vxbib4s_nh`}</span>

      <CommonList
        showEmpty={list.length === 0}
        finished={finished}
        onLoadMore={onLoadList}
        listChildren={list.map((item, index: number) => {
          const {
            buyerMerNickName,
            sellerMerNickName,
            number = '--',
            coinName = '--',
            totalPrice = '',
            currencyEnName = '--',
            statusCd = '',
            buyAndSellRole = '',
            isAppealWinner,
            expireTime,
            createdTime,
            id,
            buyerUid,
            sellerUid,
            buyerUserName,
            sellerUserName,
            buyerIsMerchant,
            sellerIsMerchant,
          } = item || {}
          return (
            <div key={index} className="order-item" onClick={() => link(getC2cOrderDetailPageRoutePath(id))}>
              <div className="order-info">
                <div className="user-info">
                  <span className="user-name">
                    {buyAndSellRole === OrderBuyAndSellRoleTypeEnum.buyer
                      ? sellerMerNickName || sellerUserName || sellerUid || '--'
                      : buyerMerNickName || buyerUserName || buyerUid || '--'}
                  </span>
                  {(buyAndSellRole === OrderBuyAndSellRoleTypeEnum.buyer ? sellerIsMerchant : buyerIsMerchant) && (
                    <LazyImage
                      src={`${oss_svg_image_domain_address}c2c/advertise_order_icon.png`}
                      width={16}
                      height={16}
                    />
                  )}
                </div>

                <div className="count-down-info">
                  <div className="flex items-center">
                    <span
                      className={
                        statusCd === AdvertiseOrderStatusEnum.wasReceiveCoin ||
                        statusCd === AdvertiseOrderStatusEnum.wasCancel
                          ? 'text-text_color_03'
                          : ''
                      }
                    >
                      {getAdvertiseOrderStatusName(statusCd, buyAndSellRole, isAppealWinner)}
                    </span>
                    {(statusCd === AdvertiseOrderStatusEnum.created ||
                      statusCd === AdvertiseOrderStatusEnum.wasPayed ||
                      statusCd === AdvertiseOrderStatusEnum.wasCollected ||
                      statusCd === AdvertiseOrderStatusEnum.wasTransferCoin) && (
                      <CountDown
                        time={+decimalUtils.SafeCalcUtil.sub(expireTime, new Date().getTime())}
                        format="mm:sss"
                        className="count-down"
                      />
                    )}
                  </div>
                  <Icon name="next_arrow" hasTheme className="next-icon" />
                </div>
              </div>

              <div className="order-info">
                <span className="info-label">
                  {t`features/trade/spot/price-input-0`} {formatCurrency(number)} {coinName}
                </span>
                <span className="amount">
                  {formatCurrency(totalPrice)} {currencyEnName}
                </span>
              </div>

              <div className="order-info">
                <span className="info-label">{formatDate(createdTime)}</span>
              </div>
            </div>
          )
        })}
      />
    </div>
  )
}

export { HistoricalOrder }
