import PullRefreshAnimation from '@/components/pull-refresh-animation'
import { PullRefresh } from 'react-vant'

export function MarketListPullRefresh({
  onRefreshCallback,
  children,
}: {
  onRefreshCallback?: () => void
  children: React.ReactNode
}) {
  /**
   * 下拉刷新
   */
  const onRefresh = () => {
    const promise = onRefreshCallback && onRefreshCallback()
    if (typeof promise === 'object' && (promise as any).then) {
      return promise
    }
    return new Promise(resolve => {
      setTimeout(resolve, 1000)
    })
  }

  if (!onRefreshCallback) return <>{children}</>

  return (
    <PullRefresh
      onRefresh={onRefresh}
      pullingText={({ distance }) => <PullRefreshAnimation />}
      loosingText={() => <PullRefreshAnimation />}
      loadingText={() => <PullRefreshAnimation />}
    >
      {children}
    </PullRefresh>
  )
}
