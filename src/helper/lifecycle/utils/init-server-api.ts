import { getLayoutProps } from '@/helper/layout'
import { getI18nEmptyObject } from '@/constants/i18n'
import dayjs from 'dayjs'

let initServerCache: Record<string, any> = getI18nEmptyObject()
/** 初始化仅仅服务端用到的 api 一些需要注入到 client 层不走客户端二次调接口 */
export async function initServerApi(pageContext: PageContext) {
  // 缓存策略：一天一缓存
  const currentInitServerCache = initServerCache[pageContext.locale as string]
  if (currentInitServerCache.layoutProps) {
    if (dayjs().isBefore(currentInitServerCache.expiredTime)) {
      pageContext.layoutProps = currentInitServerCache.layoutProps
      return pageContext
    }
  }
  try {
    const layoutPropsRes = await getLayoutProps(pageContext.locale!)
    if (layoutPropsRes) {
      currentInitServerCache.layoutProps = layoutPropsRes
      // 缓存策略：3h 缓存
      currentInitServerCache.expiredTime = dayjs().add(3, 'h')
      pageContext.layoutProps = layoutPropsRes
    }
  } catch (error) {
    console.log(error, 'initServerApi=<<<<<<<')
  }
  return pageContext
}
