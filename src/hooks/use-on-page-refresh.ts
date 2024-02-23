import { useCommonStore } from '@/store/common'
import { useUpdateEffect } from 'ahooks'

/** 注册页面刷新时的处理函数 */
export function useOnPageRefresh(fn: () => any) {
  const { refreshCounter } = useCommonStore()

  useUpdateEffect(() => {
    fn()
  }, [refreshCounter])
}
