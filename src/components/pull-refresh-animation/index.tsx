/**
 * 下拉刷新动画组件
 */
import DynamicLottie from '@/components/dynamic-lottie'

const PullRefreshData = () => import('@/assets/json/refresh_loading.json')

function PullRefreshAnimation() {
  return (
    <div className="flex w-full h-12 items-center justify-center">
      <DynamicLottie animationData={PullRefreshData} loop style={{ width: '25px', height: '25px' }} />
    </div>
  )
}
export default PullRefreshAnimation
