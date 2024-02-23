import { I18nsEnum } from '@/constants/i18n'
import { baseCommonStore } from '@/store/common'
import { setHistoryStack, getHistoryStack } from '@/helper/cache'
import { navigate } from 'vite-plugin-ssr/client/router'
import { isAbsoluteUrl } from '@/helper/common'
import { isRouteInWhileList } from '@/helper/fusion-api'
import { removeLocale } from './i18n'

export interface ILinkConfig {
  /** 保持登录位置 */
  keepScrollPosition?: boolean | undefined
  /** 不要在浏览器的历史记录中创建新条目；新 URL 将替换当前 URL（这有效地从历史记录中删除当前 URL */
  overwriteLastHistoryEntry?: boolean | undefined
  /** 打开新页面 */
  target?: boolean
}
export const link = (url?: string, goConfig?: ILinkConfig) => {
  const { locale, isFusionMode } = baseCommonStore.getState()
  const { timestamp } = window.history.state
  const historyStackList = getHistoryStack() ? [...getHistoryStack(), { timestamp, url }] : [{ timestamp }]
  setHistoryStack(historyStackList)
  const _lang = locale
  const lang = _lang === I18nsEnum['en-US'] ? '' : `/${_lang}`
  const sanitisedUrl = removeLocale(url)
  let _url = `${lang}${sanitisedUrl}`
  if (isAbsoluteUrl(url)) _url = url as string
  if (goConfig?.target) {
    return window.open(_url, 'target')
  }
  // 如何是融合模式，且路由在黑名单中，则不跳转
  if (isFusionMode && sanitisedUrl) {
    const isTrue = isRouteInWhileList(sanitisedUrl)
    if (isTrue) {
      return
    }
  }
  return navigate(_url, {
    overwriteLastHistoryEntry: !!goConfig?.overwriteLastHistoryEntry,
    keepScrollPosition: !!goConfig?.keepScrollPosition,
  })
}
