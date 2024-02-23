import MyCard from '@/features/credit-card/my-card'
import { getCreditCardMycard } from '@/helper/route'

export function Page() {
  return <MyCard />
}

export async function onBeforeRender() {
  return {
    pageContext: {
      layoutParams: {
        footerShow: true, // 是否需要 footer
        disableTransition: true,
      },
      unAuthTo: `/login?redirect=${getCreditCardMycard()}`,
      // documentProps: await getC2cDefaultSeoMeta()
    },
  }
}
