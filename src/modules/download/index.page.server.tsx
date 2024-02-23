import { generateDownloadSeoMeta } from '@/helper/download'

async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {
    footerShow: false,
    headerShow: false,
  }
  return {
    pageContext: {
      pageProps,
      layoutParams,
      documentProps: await generateDownloadSeoMeta(),
    },
  }
}

export { onBeforeRender }
