import { queryC2cTradeAdList } from '@/apis/c2c/trade'
import CommonList from '@/components/common-list/list'
import Icon from '@/components/icon'
import OverflowToolTips from '@/components/overflow-tooltips'
import { AreaTransactionTypeEnum } from '@/constants/c2c/common'
import {
  C2cTradeAdDirectionEnum,
  C2cTradeAdOnlineStatusEnum,
  C2cTradeAdReasonEnum,
  C2cTradeFilterBuyWayEnum,
} from '@/constants/c2c/trade'
import { paymentTypeToPayment } from '@/helper/c2c/trade'
import { formatCurrency, formatNumberDecimalWhenExceed } from '@/helper/decimal'
import { replaceEmpty } from '@/helper/filters'
import { link } from '@/helper/link'
import { requestWithLoading } from '@/helper/order'
import { getC2cCenterPageRoutePath } from '@/helper/route'
import { useAdBuyOrSell } from '@/hooks/features/c2c/trade'
import { useLoadMore } from '@/hooks/use-load-more'
import { IQueryTradeAdListReq, IQueryTradeAdListResp, ITradeAdItem } from '@/typings/api/c2c/trade'
import { t } from '@lingui/macro'
import { Button, Dialog } from 'react-vant'
import { useUpdateEffect } from 'ahooks'
import classNames from 'classnames'
import AlertTip from '@/components/alert-tip'
import { MarkcoinResponse } from '@/plugins/request'
import { decimalUtils } from '@/nbit'
import { KycTabEnum } from '@/constants/kyc'
import { oss_svg_image_domain_address } from '@/constants/oss'
import LazyImage from '@/components/lazy-image'
import { TradeForm } from '../advertise/post-advertise/trade-form'
import styles from './common.module.css'
import { PaymentItem } from './payment-item'
import { useTradeContext } from './trade-context'
import { C2cTradeForm } from './trade-form'

const SafeCalcUtil = decimalUtils.SafeCalcUtil

type ITradeAdItemProps = {
  item: ITradeAdItem
}
const onlineStatusClassNameMap = {
  [C2cTradeAdOnlineStatusEnum.online]: 'online',
  [C2cTradeAdOnlineStatusEnum.offline]: 'offline',
  [C2cTradeAdOnlineStatusEnum.busy]: 'busy',
}
function TradeAdItemHeader({ item }: ITradeAdItemProps) {
  const toUserCenter = () => {
    link(getC2cCenterPageRoutePath(item.uid))
  }

  return (
    <div className="flex items-center justify-between">
      <div onClick={toUserCenter} className="flex items-center w-1/2">
        <div className="avatar-container">
          <div className="avatar">{(item.nickName || item.uid)?.[0]}</div>
          <div className={classNames('status hidden', onlineStatusClassNameMap[item.nickName])}></div>
        </div>
        <span className="mr-2 whitespace-nowrap max-w-full font-medium overflow-hidden text-ellipsis">
          {item.nickName || item.uid}
        </span>
        {item.merchant && <Icon className="text-lg" hiddenMarginTop name="user_verified" isRemoteUrl />}
      </div>
      <div className="flex text-xs">
        <span>
          {t`features_c2c_trade_ad_list_5101623`} {formatCurrency(item.orderCount)}
        </span>
        {item.orderCount > 0 && (
          <span>
            <span className="mx-2 text-button_hover_01">|</span>
            {replaceEmpty(item.completedOrderRate)}%
          </span>
        )}
      </div>
    </div>
  )
}
function TradeAdItemContentLeft({ item }: ITradeAdItemProps) {
  const paymentNodes = (item.newPayments || [])
    .filter(v => !v.grey)
    .map(payment => {
      return (
        <PaymentItem
          className="text-xs text-text_color_02"
          payment={paymentTypeToPayment(payment.name)}
          key={payment.name}
        />
      )
    })
  const { params } = useTradeContext()
  const coinName = params.currentCoin?.coinName
  const currencySymbol = params.currentTradeArea?.currencySymbol
  const amountDigit = params.currentTradeArea?.precision || 2
  const countDigit = params.currentCoin?.trade_precision || 2

  const isAmount = params.buyType === (C2cTradeFilterBuyWayEnum.amount as any)
  const minLimit = isAmount
    ? formatNumberDecimalWhenExceed(SafeCalcUtil.mul(item.minAmount, item.price), amountDigit)
    : item.minAmount
  const maxLimit = isAmount
    ? formatNumberDecimalWhenExceed(SafeCalcUtil.mul(item.maxAmount, item.price), amountDigit)
    : item.maxAmount

  return (
    <div>
      {!params.sort && (
        <div className="text-lg font-medium mb-1">
          {currencySymbol} {formatCurrency(item.price, amountDigit)}
        </div>
      )}
      <div className="mb-1 text-xs">
        <span className="text-text_color_02 mr-2">{t`features/trade/spot/price-input-0`}</span>
        <span>
          {formatCurrency(item.quantity)} {coinName}
        </span>
      </div>
      <div className="mb-2 text-xs">
        <span className="text-text_color_02 mr-2">{t`features_c2c_trade_ad_list_5101624`}</span>
        <span>
          {formatCurrency(minLimit)} - {formatCurrency(maxLimit)}{' '}
          {!isAmount ? coinName : params.currentTradeArea?.currencyName}
        </span>
      </div>
      <div className="mb-1">
        <OverflowToolTips max={3} nodes={paymentNodes} />
      </div>
    </div>
  )
}
function TradeAdItemContentRight({ item }: ITradeAdItemProps) {
  const canTrade = item.canTrade // getTradeAdCanBuyOrSell(item)
  const networkNodes =
    item.mainchainAddrs?.map(network => (
      <div className={classNames(styles['ad-payment-item'], 'font-medium text-xs')} key={network.name}>
        {network.name}
      </div>
    )) || []
  const isBuy = item.advertDirectCd === C2cTradeAdDirectionEnum.buy
  const isOutside = item.tradeTypeCd === AreaTransactionTypeEnum.outside

  const { onBuyOrSell, formVisible, setFormVisible } = useAdBuyOrSell(item)
  const withLoadingAction = () => {
    requestWithLoading(onBuyOrSell(), 0)
  }

  const needKyc = [C2cTradeAdReasonEnum.kyc].includes(item.notCanTradeType as any)
  const needAdvancedKyc = [C2cTradeAdReasonEnum.kycSenior, C2cTradeAdReasonEnum.kycEnterprise].includes(
    item.notCanTradeType as any
  )
  const needEnterpriseKyc = [C2cTradeAdReasonEnum.kycEnterprise].includes(item.notCanTradeType as any)
  const toKyc = () => {
    link(`/kyc?tab=${needKyc ? KycTabEnum.stand : needEnterpriseKyc ? KycTabEnum.enterprise : KycTabEnum.advanced}`)
  }

  const showReason = () => {
    if (!item.completedOrderCount) {
      return
    }
    const reason = t({
      id: 'features_c2c_trade_ad_list_3voavrj12m',
      values: {
        0: item.completedOrderCount,
      },
    })
    Dialog.alert({
      className: 'dialog-confirm-wrapper confirm-black',
      message: <AlertTip>{reason}</AlertTip>,
      confirmButtonText: t`features_message_center_index_5101365`,
    })
  }

  return (
    <div className="flex flex-col items-end justify-between pt-1">
      {isOutside ? <OverflowToolTips max={2} nodes={networkNodes} /> : <span></span>}
      {canTrade ? (
        <Button
          className={classNames('!px-5 !text-sm', 'sell-or-buy-button', isBuy ? 'is-buy' : 'is-sell', {})}
          size="small"
          onClick={withLoadingAction}
        >
          {item.advertDirectCd === C2cTradeAdDirectionEnum.buy
            ? t`features_kyc_index_standards_5101189`
            : t`features_kyc_index_standards_5101190`}
        </Button>
      ) : needKyc || needAdvancedKyc || needEnterpriseKyc ? (
        <div className="kyc-button" onClick={toKyc}>
          {needKyc
            ? t`features_c2c_trade_ad_list_powwklhkr9`
            : needEnterpriseKyc
            ? t`features_c2c_trade_ad_list_kyc_enterprise`
            : t`features_c2c_trade_ad_list_kyc_advanced`}
        </div>
      ) : (
        <Button onClick={showReason} className="gray-button !text-sm" size="small">
          {t`features_c2c_trade_ad_list_yrkqljxusd`}
        </Button>
      )}
      <C2cTradeForm isBuy={isBuy} ad={item} visible={formVisible} onVisibleChange={setFormVisible} />
    </div>
  )
}

function TradeAdItem({ item }: ITradeAdItemProps) {
  return (
    <div className={classNames(styles['ad-item-wrapper'], ' rv-hairline--bottom')}>
      <TradeAdItemHeader item={item} />
      <div className="flex justify-between mt-4">
        <TradeAdItemContentLeft item={item} />
        <TradeAdItemContentRight item={item} />
      </div>
    </div>
  )
}

type ITradeAdListProps = {
  params: IQueryTradeAdListReq
  getAdList: (params: IQueryTradeAdListReq) => Promise<MarkcoinResponse<IQueryTradeAdListResp>>
}
export function TradeAdList({ params, getAdList }: ITradeAdListProps) {
  const tradeContext = useTradeContext()
  const { list, loadMore, setList, finished, refresh } = useLoadMore({
    async fetchData(page) {
      if (!params.coinId || !params.areaId) {
        return []
      }
      const clonedParams = { ...params }
      delete clonedParams.currentCoin
      delete clonedParams.currentTradeArea
      const res = await requestWithLoading(
        getAdList({
          ...clonedParams,
          pageNum: page,
        }),
        page === 1 ? 100 : 10000
      )
      if (!res.isOk || !res.data || !res.data.list) {
        return
      }
      return res.data.list
    },
  })
  useUpdateEffect(() => {
    refresh()
  }, [params])
  // 在这里注入
  tradeContext.removeAd = (id: string | number) => {
    setList(list.filter(item => item.advertId !== id))
  }
  return (
    <div>
      <CommonList
        refreshing
        emptyClassName="py-20"
        onRefreshing={refresh}
        onLoadMore={loadMore}
        finished={finished}
        listChildren={undefined}
        showEmpty={list.length === 0}
      >
        <div>
          {list.map((item, index) => {
            return <TradeAdItem item={item} key={item.advertId + index} />
          })}
        </div>
      </CommonList>
    </div>
  )
}
