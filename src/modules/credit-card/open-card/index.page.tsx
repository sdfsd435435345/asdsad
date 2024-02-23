import OpenCrad from '@/features/credit-card/open-card'
import { getCreditCardOpenCrad } from '@/helper/route'

function Page() {
  return <OpenCrad />
}

export { Page }
export async function onBeforeRender() {
  return {
    pageContext: {
      // layoutParams: {
      //   // footerShow: true, // 是否需要 footer
      //   disableTransition: true,
      // },
      unAuthTo: `/login?redirect=${getCreditCardOpenCrad()}`,
      // documentProps: await getC2cDefaultSeoMeta()
    },
  }
}
