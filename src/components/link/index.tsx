import { I18nsEnum } from '@/constants/i18n'
import classNames from 'classnames'
import { ReactNode } from 'react'
import { setHistoryStack, getHistoryStack } from '@/helper/cache'
import { useCommonStore } from '@/store/common'
import { isAbsoluteUrl } from '@/helper/common'
import { isRouteInWhileList } from '@/helper/fusion-api'
import { removeLocale } from '@/helper/i18n'

/**
 *
 * @param param prefetch:是否预获取资源
 * @returns
 */
function Link({
  href,
  children,
  prefetch,
  className,
  target,
}: {
  href: string
  children: ReactNode
  prefetch?: boolean
  className?: string
  /** 打开新页面 */
  target?: boolean
}) {
  const { locale, isFusionMode } = useCommonStore()
  const currentLang = locale || I18nsEnum['en-US']
  const sanitisedHref = removeLocale(href)
  let _herf = `${currentLang === I18nsEnum['en-US'] ? '' : `/${currentLang}`}${sanitisedHref}`
  // 防止后端设置为 null
  if (!href) _herf = ''
  if (isAbsoluteUrl(href)) _herf = href

  const setHistoryHandle = () => {
    const historyStack = getHistoryStack() || []
    if (historyStack?.[historyStack?.length - 1]?._herf !== _herf) {
      const { timestamp } = window?.history?.state || {}
      setHistoryStack([...historyStack, { timestamp, _herf, url: href }])
    }
  }

  // 如何是融合模式，且路由在黑名单中，则不跳转
  if (isFusionMode && sanitisedHref) {
    const isBlack = isRouteInWhileList(sanitisedHref)
    isBlack && (_herf = '')
  }

  return (
    <a
      href={_herf}
      target={target ? '_blank' : '_self'}
      className={classNames('navigation-link', className)}
      data-prefetch={prefetch}
      onClick={setHistoryHandle}
    >
      {children}
    </a>
  )
}
export default Link
