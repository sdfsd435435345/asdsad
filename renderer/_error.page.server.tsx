import { baseLayoutStore } from '@/store/layout'

export async function onBeforeRender(pageContext) {
  const { headerData } = baseLayoutStore.getState()
  return {
    pageContext: {
      layoutParams: {
        footerShow: true, // 是否需要 footer
        disableTransition: true,
      },
      documentProps: {
        title: headerData?.businessName,
      },
    },
  }
}
