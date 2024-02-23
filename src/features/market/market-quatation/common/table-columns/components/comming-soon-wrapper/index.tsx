import { SpotStopStatusEnum } from '@/constants/trade'
import { TradePairWithCoinInfoType } from '@/typings/api/market/market-list'
import { YapiGetV1TradePairListData } from '@/typings/yapi/TradePairListV1GetApi'
import { t } from '@lingui/macro'

export const ComingSoonColumnWrapper = ({
  children,
  item,
  showMessage: showText = false,
}: {
  item: TradePairWithCoinInfoType | YapiGetV1TradePairListData
  children: React.ReactNode
  showMessage?: boolean
}) => {
  if (item.marketStatus === SpotStopStatusEnum.trading) return <>{children}</>

  return showText ? (
    <span className="reminder-message text-text_color_02 text-base">{t`features_trade_spot_not_available_510230`}</span>
  ) : (
    <span className="empty-placeholder">--</span>
  )
}
