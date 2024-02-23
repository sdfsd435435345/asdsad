import FullScreenLoading from '@/features/user/components/full-screen-loading'
import { Toast } from 'react-vant'
import { render } from 'react-dom'
import { Root, createRoot } from 'react-dom/client'

/**
 * 将 get 请求的参数中的数组转为逗号分隔
 * @param params 参数，如 { status: [1, 2] }
 * @param keys 要分隔的参数名，如 ['status']
 */
export function paramsArrayToString(params: object, keys: string[]) {
  const result: any = {
    ...params,
  }
  keys.forEach(key => {
    if (Array.isArray(result[key])) {
      result[key] = result[key].join(',')
    }
  })
  return result
}
let loadingCount = 0
let loadingRoot: Root
let loadingDivEl: HTMLDivElement
/** 请求时展示 loading */
export async function requestWithLoading<T>(promise: Promise<T>, delay = 300) {
  if (!loadingDivEl) {
    loadingDivEl = document.createElement('div')
    document.body.appendChild(loadingDivEl)
    loadingRoot = createRoot(loadingDivEl)
  }
  const timer = setTimeout(() => {
    loadingRoot.render(<FullScreenLoading isShow mask />)
  }, delay)
  loadingCount += 1
  const res = await promise.finally(() => {
    loadingCount -= 1
    if (loadingCount === 0) {
      loadingRoot.render(null)
    }
  })
  clearTimeout(timer)
  return res
}
