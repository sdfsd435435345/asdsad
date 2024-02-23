import { AssetsLayout } from '@/features/assets/assets-layout'
import { getAssetsDefaultSeoMeta } from '@/helper/assets/overview'
import { t } from '@lingui/macro'

export function Page() {
  return <AssetsLayout />
}

export async function onBeforeRender(pageContext: PageContext) {
  return {
    pageContext: {
      unAuthTo: '/login?redirect=/assets',
      documentProps: getAssetsDefaultSeoMeta(t`page_title.assets`),
      layoutParams: {
        footerShow: true, // 是否需要 footer
        disableTransition: true,
      },
    },
  }
}
