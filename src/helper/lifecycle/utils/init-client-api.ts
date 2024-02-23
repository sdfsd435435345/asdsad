import { getCoinRateData } from '@/helper/assets/spot'
import { baseGuideMapStore } from '@/store/server'

export function initClientApi() {
  getCoinRateData()
  // 获取 引导图接口
  baseGuideMapStore.getState().fetchGuideMapQueryAll()
}
