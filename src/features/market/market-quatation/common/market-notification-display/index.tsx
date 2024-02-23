import { useMarketListStore } from '@/store/market/market-list'
import MarketNotice from '@/features/market/market-quatation/common/market-notification-display/market-notice'

export default function () {
  const { isClosedNotification } = useMarketListStore()

  if (isClosedNotification) return null

  return (
    <div className="bg-bg_color market-notification-display">
      <MarketNotice />
    </div>
  )
}
